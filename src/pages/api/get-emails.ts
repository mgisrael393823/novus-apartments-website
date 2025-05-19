import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get the data directory path
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'emails.json');

    // Read existing emails or initialize with empty array
    let emails = [];
    
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      emails = JSON.parse(data);
    }

    // Return emails
    return res.status(200).json({ emails });
  } catch (error) {
    console.error('Error in get-emails API:', error);
    return res.status(500).json({ message: 'Internal server error', error: String(error) });
  }
}