import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

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

    // Get the data directory path
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'emails.json');

    // Create the data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing emails or initialize with empty array
    let emails = [];
    try {
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        emails = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error reading emails file:', error);
      // Continue with empty array if file is corrupted
    }

    // Add the new email with timestamp if it doesn't already exist
    const emailExists = emails.some((entry: any) => entry.email === email);
    
    if (!emailExists) {
      emails.push({
        email,
        timestamp: new Date().toISOString(),
        userAgent: req.headers['user-agent'] || 'Unknown',
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown'
      });

      // Write emails back to file
      fs.writeFileSync(filePath, JSON.stringify(emails, null, 2), 'utf8');
    }

    // Return success
    return res.status(200).json({ message: 'Email collected successfully' });
  } catch (error) {
    console.error('Error in collect-email API:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}