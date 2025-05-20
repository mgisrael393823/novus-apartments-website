import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { kv } from '@vercel/kv';

// Interface for email entry
interface EmailEntry {
  email: string;
  timestamp: string;
  userAgent?: string;
  ip?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: 'Valid email is required' });
    }

    // Create the email entry object
    const emailEntry: EmailEntry = {
      email,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'] || 'Unknown',
      ip: req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || 'Unknown'
    };

    // Store email based on environment
    if (process.env.NODE_ENV === 'development') {
      // For development: Use filesystem storage
      try {
        // Get the data directory path
        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'emails.json');

        // Create the data directory if it doesn't exist
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir, { recursive: true });
        }

        // Read existing emails or initialize with empty array
        let emails: EmailEntry[] = [];
        
        if (fs.existsSync(filePath)) {
          const data = fs.readFileSync(filePath, 'utf8');
          emails = JSON.parse(data);
        }

        // Add the new email with timestamp if it doesn't already exist
        const emailExists = emails.some((entry) => entry.email === email);
        
        if (!emailExists) {
          emails.push(emailEntry);

          // Write emails back to file
          fs.writeFileSync(filePath, JSON.stringify(emails, null, 2), 'utf8');
        }
      } catch (fsError) {
        console.error('Filesystem error:', fsError);
        // Even if filesystem storage fails, we'll continue to allow access
      }
    } else {
      // In production: Use Vercel KV
      try {
        // First, check if the email exists
        const emailsSet = await kv.smembers('novus:email_list');
        
        if (!Array.isArray(emailsSet) || !emailsSet.includes(email)) {
          // Add email to the set of all emails
          await kv.sadd('novus:email_list', email);
          
          // Store the full email entry with details using the email as key
          await kv.set(`novus:email:${email}`, JSON.stringify(emailEntry));
          
          console.log('Email stored successfully in Vercel KV:', email);
        } else {
          console.log('Email already exists in Vercel KV:', email);
        }
      } catch (kvError) {
        console.error('Error storing email in Vercel KV:', kvError);
        
        // Fallback to /tmp storage if KV fails
        try {
          // Get the data directory path - in production on Vercel this is in /tmp
          const dataDir = path.join('/tmp', 'data');
          const filePath = path.join(dataDir, 'emails.json');

          // Create the data directory if it doesn't exist
          if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
          }

          // Read existing emails or initialize with empty array
          let emails: EmailEntry[] = [];
          
          if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            try {
              emails = JSON.parse(data);
            } catch (parseError) {
              console.error('Error parsing emails JSON:', parseError);
              emails = [];
            }
          }

          // Add the new email with timestamp if it doesn't already exist
          const emailExists = emails.some((entry) => entry.email === email);
          
          if (!emailExists) {
            emails.push(emailEntry);

            // Write emails back to file
            fs.writeFileSync(filePath, JSON.stringify(emails, null, 2), 'utf8');
          }
          
          console.log('Email stored successfully in /tmp fallback:', email);
        } catch (fsError) {
          console.error('Error storing email in /tmp fallback:', fsError);
        }
      }
    }

    // Return success regardless - we don't want to block users from accessing the site
    return res.status(200).json({ message: 'Email collected successfully' });
  } catch (error) {
    console.error('Error in collect-email API:', error);
    // Despite error, we'll still return success to allow users to continue
    return res.status(200).json({ message: 'Continuing to site' });
  }
}