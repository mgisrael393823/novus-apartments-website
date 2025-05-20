import { NextApiRequest, NextApiResponse } from 'next';
import { kv } from '@vercel/kv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Test if we can connect to KV
    await kv.set('novus:test', 'connected');
    const testValue = await kv.get('novus:test');
    
    // Get email count
    const emailsSet = await kv.smembers('novus:email_list');
    const emailCount = Array.isArray(emailsSet) ? emailsSet.length : 0;
    
    return res.status(200).json({ 
      status: 'success',
      connection: testValue === 'connected' ? 'ok' : 'failed',
      emailCount,
      emails: emailsSet
    });
  } catch (error) {
    console.error('KV test error:', error);
    return res.status(500).json({ 
      status: 'error', 
      message: 'Error connecting to Vercel KV',
      error: String(error)
    });
  }
}