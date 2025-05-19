import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

interface EmailEntry {
  email: string;
  timestamp: string;
  userAgent?: string;
  ip?: string;
}

interface EmailListProps {
  initialEmails: EmailEntry[];
}

export default function EmailList({ initialEmails }: EmailListProps) {
  const [emails, setEmails] = useState<EmailEntry[]>(initialEmails);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Simple authentication - you would replace this with a more secure method
  const authenticate = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace 'novus2025' with your desired password
    if (password === 'novus2025') {
      setIsAuthenticated(true);
      localStorage.setItem('novus_admin_auth', 'true');
    } else {
      alert('Incorrect password');
    }
  };
  
  // Check if user is already authenticated
  useEffect(() => {
    const auth = localStorage.getItem('novus_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Refresh email list
  const refreshList = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/get-emails', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch emails');
      }

      const data = await response.json();
      setEmails(data.emails);
    } catch (err) {
      console.error('Error fetching emails:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Export emails as CSV
  const exportToCsv = () => {
    if (emails.length === 0) return;
    
    const csvContent = [
      ['Email', 'Timestamp', 'User Agent', 'IP Address'],
      ...emails.map(entry => [
        entry.email,
        entry.timestamp,
        entry.userAgent || 'Unknown',
        entry.ip || 'Unknown'
      ])
    ].map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `novus-emails-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If not authenticated, show login
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Head>
          <title>Admin Access | The Novus</title>
        </Head>

        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">Admin Access</h1>
          
          <form onSubmit={authenticate}>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#CAB06B] focus:border-[#CAB06B]"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#CAB06B] text-white rounded-md hover:bg-[#BDA05B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CAB06B]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Email List | The Novus</title>
      </Head>

      <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Collected Emails</h1>
          
          <div className="flex space-x-4">
            <button
              onClick={refreshList}
              disabled={isLoading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#CAB06B] hover:bg-[#BDA05B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CAB06B] disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : 'Refresh'}
            </button>
            
            <button
              onClick={exportToCsv}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Export to CSV
            </button>
            
            <button
              onClick={() => {
                localStorage.removeItem('novus_admin_auth');
                setIsAuthenticated(false);
              }}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Email Submissions
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Total entries: {emails.length}
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User Agent
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    IP Address
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {emails.length > 0 ? (
                  emails.map((entry, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {entry.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(entry.timestamp).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                        {entry.userAgent || 'Unknown'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {entry.ip || 'Unknown'}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                      No emails collected yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Get the data directory path
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'emails.json');

    // Read existing emails or initialize with empty array
    let emails: EmailEntry[] = [];
    
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      emails = JSON.parse(data);
    }

    return {
      props: {
        initialEmails: emails,
      },
    };
  } catch (error) {
    console.error('Error reading emails file:', error);
    return {
      props: {
        initialEmails: [],
      },
    };
  }
};