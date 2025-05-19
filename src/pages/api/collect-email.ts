import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

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

    // For development: Use filesystem storage
    if (process.env.NODE_ENV === 'development') {
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
          emails.push({
            email,
            timestamp: new Date().toISOString(),
            userAgent: req.headers['user-agent'] || 'Unknown',
            ip: req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || 'Unknown'
          });

          // Write emails back to file
          fs.writeFileSync(filePath, JSON.stringify(emails, null, 2), 'utf8');
        }
      } catch (fsError) {
        console.error('Filesystem error:', fsError);
        // Even if filesystem storage fails, we'll continue to allow access
        // This is a fallback for development
      }
    } else {
      // In production, we would typically use a database
      // For now, we'll just log the email collection for troubleshooting
      console.log('Email collected in production:', {
        email,
        timestamp: new Date().toISOString(),
        userAgent: req.headers['user-agent'] || 'Unknown',
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown'
      });
      
      // Here you would add code to store emails in a proper database
      // such as MongoDB, PostgreSQL, or a serverless storage solution
    }

    // Return success regardless - we don't want to block users from accessing the site
    return res.status(200).json({ message: 'Email collected successfully' });
  } catch (error) {
    console.error('Error in collect-email API:', error);
    // Despite error, we'll still return success to allow users to continue
    return res.status(200).json({ message: 'Continuing to site' });
  }
}