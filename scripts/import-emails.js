// Import script to transfer emails from local JSON to Vercel KV
const fs = require('fs');
const path = require('path');
const { createClient } = require('@vercel/kv');
require('dotenv').config({ path: '.env.local' });

console.log('Environment variables loaded:');
console.log('KV_REST_API_URL:', process.env.KV_REST_API_URL ? '✓ Set' : '✗ Missing');
console.log('KV_REST_API_TOKEN:', process.env.KV_REST_API_TOKEN ? '✓ Set' : '✗ Missing');

// Initialize KV client with explicit credentials
const kv = createClient({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

async function importEmails() {
  try {
    console.log('Starting email import to Vercel KV...');
    
    // Get the data directory path
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'emails.json');

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      console.log('No emails.json file found. Nothing to import.');
      return;
    }

    // Read emails from file
    const data = fs.readFileSync(filePath, 'utf8');
    const emails = JSON.parse(data);
    
    console.log(`Found ${emails.length} emails to import.`);

    // First test connection
    try {
      await kv.set('novus:test', 'connected');
      const testValue = await kv.get('novus:test');
      if (testValue === 'connected') {
        console.log('✓ Successfully connected to Vercel KV');
      } else {
        console.error('× Connection test failed: Test value does not match');
        return;
      }
    } catch (testError) {
      console.error('× Connection test failed:', testError);
      return;
    }

    // Import each email to KV
    for (const entry of emails) {
      try {
        // Add email to the set of all emails
        await kv.sadd('novus:email_list', entry.email);
        
        // Store the full email entry with details
        await kv.set(`novus:email:${entry.email}`, JSON.stringify(entry));
        
        console.log(`Imported: ${entry.email}`);
      } catch (error) {
        console.error(`Error importing email ${entry.email}:`, error);
      }
    }

    console.log('Email import completed!');
    
    // Verify the import
    const emailsSet = await kv.smembers('novus:email_list');
    console.log(`Vercel KV now contains ${emailsSet.length} emails.`);
  } catch (error) {
    console.error('Import failed:', error);
  }
}

// Run the import
importEmails().catch(console.error);