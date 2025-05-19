import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface EmailGateProps {
  children: React.ReactNode;
}

const EmailGate: React.FC<EmailGateProps> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Check if user already submitted email (stored in localStorage)
  useEffect(() => {
    const hasSubmittedEmail = localStorage.getItem('novus_email_submitted');
    if (hasSubmittedEmail === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Submit email to API endpoint
      const response = await fetch('/api/collect-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Try to parse the response, but don't block on failure
      let responseData;
      try {
        responseData = await response.json();
      } catch (jsonError) {
        console.error('Error parsing response:', jsonError);
      }
      
      // Even if the API response fails, we still allow access
      // This ensures users can access the site even if email storage fails
      
      // Store in localStorage and allow access
      localStorage.setItem('novus_email_submitted', 'true');
      localStorage.setItem('novus_email', email);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting email:', err);
      
      // Even if there's an error, we'll still let the user in
      // This prevents users from being blocked due to server issues
      localStorage.setItem('novus_email_submitted', 'true');
      localStorage.setItem('novus_email', email);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Show content if email already submitted
  if (isSubmitted) {
    return <>{children}</>;
  }

  // Otherwise show email gate
  return (
    <>
      {/* Content Gate - Fixed overlay with blur effect */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <div className="shine-border w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="py-5 px-6 text-center">
            <div className="mb-5 flex justify-center">
              <img 
                src="/novus-logo.webp" 
                alt="The Novus Logo" 
                className="w-[160px] h-auto"
              />
            </div>
            
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#CAB06B] focus:border-[#CAB06B]"
                  aria-label="Email address"
                  required
                />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              </div>
              
              <div className="mt-5">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#CAB06B] hover:bg-[#BDA05B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CAB06B] transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : 'Continue to Site'}
                </button>
              </div>
            </form>
            
            <div className="mt-5 mb-2 flex justify-center">
              <img 
                src="/disrvpt-novus.webp" 
                alt="DISRVPT x Novus Logo" 
                className="w-[140px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Page content is rendered outside the overlay but will be visible and blurred behind the overlay */}
      <div className="opacity-100">{children}</div>
    </>
  );
};

export default EmailGate;