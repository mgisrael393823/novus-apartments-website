
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { 
  BookOpen,
  BarChart2,
  Target,
  Lightbulb,
  DollarSign,
  Rocket,
  Map,
  Lock
} from 'lucide-react';

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

const navItems = [
  { name: 'EXECUTIVE SUMMARY', path: '/executive-summary', icon: BookOpen },
  { name: 'MARKET INTELLIGENCE', path: '/market-intelligence', icon: BarChart2 },
  { name: 'COMPETITIVE LANDSCAPE', path: '/competitive-landscape', icon: Target },
  { name: 'STRATEGIC OPPORTUNITIES', path: '/strategic-opportunities', icon: Lightbulb },
  { name: 'PRICING & INCENTIVES', path: '/pricing-framework', icon: DollarSign },
  { name: 'GO-TO-MARKET ROADMAP', path: '/go-to-market', icon: Rocket },
  { name: 'OPPORTUNITY MAP', path: '/opportunity-map', icon: Map },
];

export function Navigation() {
  const router = useRouter();
  
  return (
    <nav className='w-64 bg-[#FCFAF5] border-r border-[#E8E3D9] h-screen fixed left-0 top-0 overflow-y-auto'>
      <div className='h-full flex flex-col'>
        <div className='px-6 py-10 border-b border-[#E8E3D9]'>
          <Link href="/" className="block">
            <h2 className={`${headingFont.className} text-lg text-[#333333] tracking-widest mb-1`}>SOL MODERN</h2>
            <div className="h-0.5 w-12 bg-[#E57161] mb-3"></div>
            <p className={`${bodyFont.className} text-sm text-[#777777] tracking-wide`}>LEASE-UP STRATEGY BLUEPRINT</p>
          </Link>
        </div>
        
        <div className='flex-1 px-4 py-8'>
          <div className='mb-8'>
            <p className={`${bodyFont.className} text-xs uppercase tracking-widest text-[#777777] px-3 mb-3`}>Blueprint Contents</p>
          </div>
          
          <div className='space-y-2'>
            {navItems.map((item) => {
              const isActive = router.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    flex items-center px-3 py-2.5 text-xs font-medium tracking-wider transition-all
                    ${isActive
                      ? 'text-[#E57161] border-l-2 border-[#E57161]'
                      : 'text-[#777777] hover:text-[#333333] border-l-2 border-transparent hover:border-[#E8E3D9]'}
                  `}
                >
                  <Icon className='mr-3 h-4 w-4' />
                  <span>{item.name}</span>
                  {/* Lock icons removed */}
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className='mt-auto p-6 border-t border-[#E8E3D9]'>
          <div className='bg-[#FFFFFF] p-4 rounded-sm border border-[#E8E3D9]'>
            <p className={`${bodyFont.className} text-xs uppercase tracking-widest text-[#777777] mb-2`}>CONTACT</p>
            <p className='text-sm text-[#333333]'>misrael00@gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
