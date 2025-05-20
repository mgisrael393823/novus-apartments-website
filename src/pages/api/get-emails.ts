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
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    let emails: EmailEntry[] = [];
    
    // For development: Use filesystem storage
    if (process.env.NODE_ENV === 'development') {
      try {
        // Get the data directory path
        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'emails.json');

        // Read existing emails or initialize with empty array
        if (fs.existsSync(filePath)) {
          const data = fs.readFileSync(filePath, 'utf8');
          emails = JSON.parse(data);
        }
      } catch (fsError) {
        console.error('Filesystem error:', fsError);
        // Return empty array if file cannot be read
      }
    } else {
      // In production: Use Vercel KV
      try {
        // Get all email addresses from the set
        const emailsSet = await kv.smembers('novus:email_list');
        console.log(`Found ${emailsSet.length} emails in Vercel KV`);
        
        // For each email in the set, get the detailed entry
        if (Array.isArray(emailsSet) && emailsSet.length > 0) {
          // Use Promise.all to fetch all email details in parallel
          const emailPromises = emailsSet.map(async (email) => {
            const entryJson = await kv.get(`novus:email:${email}`);
            if (entryJson && typeof entryJson === 'string') {
              try {
                return JSON.parse(entryJson) as EmailEntry;
              } catch (parseError) {
                console.error(`Error parsing JSON for email ${email}:`, parseError);
                // Return a minimal entry if parsing fails
                return {
                  email,
                  timestamp: new Date().toISOString()
                };
              }
            }
            // If entry not found, return minimal entry
            return {
              email,
              timestamp: new Date().toISOString()
            };
          });
          
          emails = await Promise.all(emailPromises);
        }
      } catch (kvError) {
        console.error('Error fetching emails from Vercel KV:', kvError);
        
        // Fallback to /tmp storage if KV fails
        try {
          // Get the data directory path
          const dataDir = path.join('/tmp', 'data');
          const filePath = path.join(dataDir, 'emails.json');

          // Read existing emails from /tmp fallback
          if (fs.existsSync(filePath)) {
            try {
              const data = fs.readFileSync(filePath, 'utf8');
              emails = JSON.parse(data);
              console.log(`Found ${emails.length} emails in /tmp fallback storage`);
            } catch (parseError) {
              console.error('Error parsing emails JSON from /tmp:', parseError);
            }
          } else {
            console.log('No emails.json file found in /tmp fallback storage');
          }
        } catch (fsError) {
          console.error('Error reading emails from /tmp fallback:', fsError);
        }
      }
    }

    // Return emails
    return res.status(200).json({ emails });
  } catch (error) {
    console.error('Error in get-emails API:', error);
    return res.status(500).json({ message: 'Internal server error', error: String(error) });
  }
}