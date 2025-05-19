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
      // In production environment
      // Here you would retrieve emails from your database
      // For now, we'll return a message explaining the situation
      return res.status(200).json({ 
        emails: [],
        message: "Email storage in production is currently logged to console only. To implement proper storage, use a database solution (MongoDB, PostgreSQL, Firebase) or Vercel KV Storage."
      });
    }

    // Return emails
    return res.status(200).json({ emails });
  } catch (error) {
    console.error('Error in get-emails API:', error);
    return res.status(500).json({ message: 'Internal server error', error: String(error) });
  }
}