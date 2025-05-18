import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, TrendingUp, ChevronDown, ChevronRight } from "lucide-react";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

// Component for collapsible SWOT card
type CollapsibleCardProps = {
  title: string;
  items: string[];
  accent?: boolean;
};
const CollapsibleCard = ({ title, items, accent = false }: CollapsibleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  // Show only first line of first bullet when collapsed
  const firstBulletPreview = items[0].split('.')[0] + '...';
  
  return (
    <div className={`bg-[#F9F8F4] border border-[#E5E2D9] p-5 rounded-sm relative overflow-hidden ${accent ? 'overflow-hidden' : ''}`}>
      {accent && <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#CAB06B] opacity-5"></div>}
      
      <div 
        className="flex items-center justify-between cursor-pointer mb-3"
        onClick={toggleExpand}
      >
        <h3 className={`${headingFont.className} text-base uppercase tracking-wide text-[#333333]`}>{title}</h3>
        {isExpanded ? 
          <ChevronDown className="h-4 w-4 text-[#666666]" /> : 
          <ChevronRight className="h-4 w-4 text-[#666666]" />
        }
      </div>
      
      {isExpanded ? (
        <ul className={`${bodyFont.className} list-disc pl-5 space-y-1.5 text-sm text-[#666666]`}>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className={`${bodyFont.className} text-sm text-[#666666] pl-5`}>
          {firstBulletPreview}
        </p>
      )}
    </div>
  );
};

export default function ExecutiveSummary() {
  return (
    <>
      <Head>
        <title>Executive Summary | The Novus</title>
        <meta name="description" content="Executive Summary of The Novus Apartments Lease-Up Strategy" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon-original.png" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="THE NOVUS | THE BLUEPRINT - Executive Summary" />
        <meta property="og:description" content="Executive Summary of The Novus Apartments Lease-Up Strategy" />
        <meta property="og:image" content="/og-image.png?v=3&t=0429" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="The Novus with 'THE BLUEPRINT' spray painted in gold over a dark background" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="THE NOVUS | THE BLUEPRINT - Executive Summary" />
        <meta name="twitter:description" content="Executive Summary of The Novus Apartments Lease-Up Strategy" />
        <meta name="twitter:image" content="/og-image.png?v=3&t=0429" />
      </Head>
      
      <Layout>
        <div className="w-full max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-16">
            <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#CAB06B] font-medium mb-1`}>STRATEGIC BLUEPRINT</h4>
            <div className="h-0.5 w-32 bg-[#CAB06B] mb-6"></div>
            <Heading level={1}>Executive Summary</Heading>
          </div>
          
          {/* Introduction Section */}
          <section className="mb-24">
            <HighlightBox>
              <p className={`${bodyFont.className} text-lg text-[#333333]`}>
                The Novus is poised to enter the Downtown Durham multifamily market at a pivotal time. Located in the vibrant Five Points District at 115 Morris St, this 27-story development with 188 rental apartments and over 22,000 square feet of ground floor retail will be competing in a market characterized by moderating rents, elevated construction activity, and strong but uneven absorption.
              </p>
              <p className={`${bodyFont.className} text-sm text-[#666666] mt-4`}>
                This executive summary provides an overview of the complete strategic blueprint. Navigate through the sections on the left to explore detailed market intelligence, competitive analysis, and our recommended strategies for The Novus's successful lease-up.
              </p>
            </HighlightBox>
          </section>
          
          {/* Key Metrics Section */}
          <section className="mb-24">
            {/* Section divider */}
            <div className="border-t-2 border-[#E5E2D9] pt-6 mb-8">
              <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#CAB06B] font-medium mb-3`}>KEY METRICS</h4>
            </div>
            
            <Heading level={2} className="mb-8">Project Overview</Heading>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 mb-8">
              {/* Financial metrics - top row */}
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#666666] mb-1">Projected Lease-Up</p>
                <p className="text-3xl font-bold text-[#333333]">12 mo</p>
                <p className="text-sm text-[#666666]">To stabilization</p>
                <p className="text-[10px] leading-tight text-[#888888] mt-2 max-w-[180px] sm:max-w-[200px]">*12 mo. projection based on standard generic approach.</p>
                <p className="text-[10px] leading-tight text-[#888888] mt-1.5 max-w-[180px] sm:max-w-[200px]">**Strategy projects 9-9.5 months with approach.</p>
              </div>
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#666666] mb-1">Competitive Rents</p>
                <p className="text-3xl font-bold text-[#333333]">+15%</p>
                <p className="text-sm text-[#666666]">Premium to market</p>
              </div>
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#666666] mb-1">Concessions</p>
                <p className="text-3xl font-bold text-[#333333]">1.5-2 mo</p>
                <p className="text-sm text-[#666666]">During lease-up</p>
              </div>
              
              {/* Property details - middle row */}
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#666666] mb-1">Location</p>
                <p className="text-lg font-medium text-[#333333]">Five Points District</p>
                <p className="text-sm text-[#666666]">115 Morris St, Durham</p>
              </div>
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#666666] mb-1">Unit Mix</p>
                <p className="text-lg font-medium text-[#333333]">188 Units</p>
                <p className="text-sm text-[#666666]">Studio to 2-bedroom units</p>
              </div>
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#666666] mb-1">Delivery</p>
                <p className="text-lg font-medium text-[#333333]">Q2 2025</p>
                <p className="text-sm text-[#666666]">$2,150 to $8,732 rates</p>
              </div>
            </div>

            {/* Absorption Forecast Chart */}
            <div className="bg-white border border-[#E5E2D9] rounded-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className={`${headingFont.className} text-lg text-[#333333] mb-1`}>Absorption Forecast</h3>
                  <p className="text-sm text-[#666666]">Projected lease-up velocity by floor plan type with detailed financial modeling</p>
                </div>
                <BarChart className="text-[#CAB06B] h-6 w-6" />
              </div>
              
              <div className="h-[300px] relative bg-[#F9F8F4] p-4 rounded-sm border border-[#E5E2D9]">
                {/* Chart Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between mb-2">
                    <div className="text-xs text-[#555555]">Pre-Leasing</div>
                    <div className="text-xs text-[#555555]">90 Days</div>
                    <div className="text-xs text-[#555555]">180 Days</div>
                    <div className="text-xs text-[#555555]">270 Days</div>
                  </div>
                  
                  {/* Studio Units - Fastest absorption */}
                  <div className="h-6 w-full bg-[#F0EEE8] rounded-sm mb-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 bg-[#CAB06B] w-[85%] rounded-sm flex items-center">
                      <span className="text-white text-xs font-medium pl-2">Studio Units - 85% Absorbed</span>
                    </div>
                  </div>
                  
                  {/* 1BR Units */}
                  <div className="h-6 w-full bg-[#F0EEE8] rounded-sm mb-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 bg-[#CAB06B] opacity-80 w-[78%] rounded-sm flex items-center">
                      <span className="text-white text-xs font-medium pl-2">1BR Units - 78% Absorbed</span>
                    </div>
                  </div>
                  
                  {/* 2BR Units */}
                  <div className="h-6 w-full bg-[#F0EEE8] rounded-sm mb-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 bg-[#CAB06B] opacity-70 w-[65%] rounded-sm flex items-center">
                      <span className="text-white text-xs font-medium pl-2">2BR Units - 65% Absorbed</span>
                    </div>
                  </div>
                  
                  {/* PA2 Units */}
                  <div className="h-6 w-full bg-[#F0EEE8] rounded-sm mb-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 bg-[#CAB06B] opacity-60 w-[52%] rounded-sm flex items-center">
                      <span className="text-white text-xs font-medium pl-2">PA2 Units - 52% Absorbed</span>
                    </div>
                  </div>
                </div>
                
                {/* Financial Projections */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-sm border border-[#E5E2D9] w-48">
                  <p className="text-xs font-medium text-[#333333] mb-2">Financial Projections</p>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#666666]">90-Day Revenue:</span>
                    <span className="text-[#333333] font-medium">$1.2M</span>
                  </div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#666666]">180-Day Revenue:</span>
                    <span className="text-[#333333] font-medium">$2.6M</span>
                  </div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#666666]">270-Day Revenue:</span>
                    <span className="text-[#333333] font-medium">$4.1M</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-[#666666]">
                <p className="flex items-start">
                  <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                  <span>Standard projections show 12 month stabilization period with traditional approach</span>
                </p>
                <p className="flex items-start mt-1">
                  <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                  <span>Proprietary strategy projects 9–9.5 month stabilization with our recommended approach</span>
                </p>
                <p className="flex items-start mt-1">
                  <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                  <span>Studio and 1BR configurations projected to absorb 35% faster than larger unit types</span>
                </p>
              </div>
            </div>
          </section>
          
          {/* Market Opportunity Section */}
          <section className="mb-24">
            {/* Section divider */}
            <div className="border-t-2 border-[#E5E2D9] pt-6 mb-8">
              <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#CAB06B] font-medium mb-3`}>MARKET INSIGHTS</h4>
            </div>
            
            <div>
              <Heading level={2} className="mb-6">Market Opportunity Overview</Heading>
              <p className={`${bodyFont.className} text-[#666666] mb-6`}>
                Our analysis of the Downtown Durham multifamily market reveals strategic opportunities 
                for The Novus to achieve stabilization within the projected timeframe despite current market challenges.
              </p>
              
              {/* Comprehensive Market Opportunity Analysis */}
              <div className="p-8 bg-white border border-[#E5E2D9] rounded-sm relative overflow-hidden mt-8">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#CAB06B] opacity-5"></div>
                
                <div className="mb-4">
                  <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                    <ArrowRight className="h-4 w-4 mr-2 text-[#CAB06B]" />
                    COMPREHENSIVE OPPORTUNITY ANALYSIS
                  </h3>
                </div>
                
                <p className={`${bodyFont.className} text-[#666666] leading-relaxed max-w-3xl mb-6`}>
                  Our detailed market opportunity analysis examines current market dynamics, projected absorption rates, and target demographic profiles to identify key areas of competitive advantage.
                </p>
                
                <div className="mb-6">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Key Market Insights:</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}>The Durham multifamily market is experiencing a period of adjustment with moderating rents (-12.8% year-over-year for one-bedrooms) and elevated construction activity.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}>Developers delivered 12,002 units in Raleigh-Durham in 2024 (a decade high) with an additional 20,272 units under construction as of January 2025.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}>The Downtown Durham submarket, particularly Five Points District, offers stronger absorption potential due to its walkability and urban amenities.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}>The Novus's distinctive high-rise format (27 stories) provides significant differentiation in a market with limited high-rise luxury inventory.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}>Target demographic analysis reveals three high-potential segments: Urban Professionals (25-40, income range), Empty Nesters/Downsizers (55+), and Remote Workers seeking work-from-home friendly environments.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm">
                  <h4 className={`${headingFont.className} text-sm uppercase mb-2 text-[#333333]`}>Current Market Concessions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Downtown Durham</p>
                      <p className="text-sm text-[#666666]">1-2 months free on 12-month leases</p>
                      <p className="text-xs text-[#999999] mt-1">Avg. effective discount: 8-16%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Five Points District</p>
                      <p className="text-sm text-[#666666]">Up to 1.5 months free on 12+ month leases</p>
                      <p className="text-xs text-[#999999] mt-1">Avg. effective discount: 8-12%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Ninth Street Area</p>
                      <p className="text-sm text-[#666666]">Up to $1,000 off select units + gift cards</p>
                      <p className="text-xs text-[#999999] mt-1">Avg. effective discount: 6-10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Market Position Analysis Section */}
          <section className="mb-24">
            {/* Section divider */}
            <div className="border-t-2 border-[#E5E2D9] pt-6 mb-8">
              <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#CAB06B] font-medium mb-3`}>COMPETITIVE POSITIONING</h4>
            </div>
            
            <Heading level={2} className="mb-6">Market Position Analysis</Heading>
            <p className={`${bodyFont.className} mb-8 text-[#666666]`}>The following SWOT analysis identifies The Novus's position within the competitive landscape of Downtown Durham:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <CollapsibleCard 
                title="Strengths" 
                items={[
                  "Prime location in the Five Points District with superior walkability",
                  "Tallest residential building (27 stories) offering unmatched views",
                  "Distinctive amenity package including outdoor movie theater and golf simulators"
                ]}
                accent={true}
              />
              
              <CollapsibleCard 
                title="Weaknesses" 
                items={[
                  "Entering a market with moderating rents and elevated concessions",
                  "Premium pricing ($2,150-$8,732) in a price-sensitive market",
                  "Unproven property with no established reputation"
                ]}
              />
              
              <CollapsibleCard 
                title="Opportunities" 
                items={[
                  "Growing demand for remote work-friendly apartments",
                  "Limited true high-rise competition in downtown Durham",
                  "Enhanced technology integration to differentiate from competitors"
                ]}
              />
              
              <CollapsibleCard 
                title="Threats" 
                items={[
                  "Aggressive concessions from competitors (up to 2 months free)",
                  "Continued rent moderation affecting luxury rental demand",
                  "Competition from established properties with resident bases"
                ]}
                accent={true}
              />
            </div>
            
            {/* Detailed SWOT Analysis */}
            <div className="p-8 bg-white border border-[#E5E2D9] rounded-sm relative overflow-hidden mt-12">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#CAB06B] opacity-5"></div>
              
              <div className="mb-4">
                <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                  <ArrowRight className="h-4 w-4 mr-2 text-[#CAB06B]" />
                  DETAILED SWOT ANALYSIS
                </h3>
              </div>
              
              <p className={`${bodyFont.className} text-[#666666] leading-relaxed max-w-3xl mb-6`}>
                Our comprehensive SWOT analysis includes detailed assessment of all competitive properties, market conditions, and strategic positioning opportunities.
              </p>
              
              <div className="mb-6">
                <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Strengths - Expanded Analysis:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#CAB06B] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Prime Location:</span> The Novus's position in the heart of Five Points District provides exceptional access to Duke University, downtown dining, and cultural venues, with walkability scores 18% higher than competitive set average.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CAB06B] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">High-Rise Format:</span> As downtown Durham's tallest residential building at 27 stories, The Novus offers unmatched views and a vertical living experience unavailable elsewhere in the market, with true high-rise specifications that differentiate it from mid-rise competitors.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CAB06B] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Premium Amenities:</span> Distinctive offerings including an outdoor movie theater, golf simulators, and pickleball court position The Novus at the top tier of the Durham market, complemented by smart home technology and premium concierge services.</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Weaknesses - Risk Mitigation Strategies:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#CAB06B] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Market Adjustment:</span> Address moderating rents in Durham with value-oriented pre-leasing incentives structured for early signings, targeting 15% pre-leased before opening with enhanced service packages.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CAB06B] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">High-Rise Differentiation:</span> Distinguish from competing properties through emphasis on the 27-story format, panoramic views, and exclusive amenities unavailable in other Durham properties.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CAB06B] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Concession Strategy:</span> Create structured concession tiers with 1.5-2 month offerings compared to the market average, supplemented with high-value amenity access and technology packages unique to The Novus.</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Opportunities - Strategic Approach:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Remote Work Hub:</span> Capitalize on Duke University and Research Triangle tech sector with specialized coworking spaces, enterprise-grade connectivity, and networking events for remote professionals.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Mixed-Use Integration:</span> Leverage 22,000+ sq ft of ground floor retail to create a "vertical neighborhood" concept with curated retail partners and integrated community programming tailored to Durham's vibrant downtown scene.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Vertical Community:</span> Implement unique programming utilizing the building's 27-story format, including floor-based community networks and stratified amenity experiences unavailable in lower-rise competitors.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Threats - Contingency Planning:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Market Saturation:</span> Develop premium pricing strategy with stratified offerings based on floor level and views, preserving value while offering flexibility.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Concession Escalation:</span> Prepare tiered concession strategy aligned with Durham's 1.5-2 month market average, with emphasis on service enhancements over pure rent discounts.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Economic Uncertainty:</span> Leverage Durham's stable healthcare and education sectors in targeting, with marketing positioning focused on long-term value and stability.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Recommendations & Roadmap Section */}
          <section className="mb-24">
            {/* Clear section divider */}
            <div className="border-t-2 border-[#E5E2D9] pt-6 mb-8">
              <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#CAB06B] font-medium mb-3`}>RECOMMENDATIONS & ROADMAP</h4>
            </div>
            
            <Heading level={2} className="mb-6">Strategy Pillars</Heading>
            
            <p className={`${bodyFont.className} mb-8 text-[#666666]`}>Based on our market position analysis, we recommend the following strategic approach categories:</p>
            
            {/* Core Strategy Section - High-level categories only */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12">
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-6 hover:border-[#CAB06B] transition-colors text-center">
                <div className="w-12 h-12 rounded-full bg-[#F8F0EA] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#CAB06B] text-xl font-bold">1</span>
                </div>
                <Heading level={4} className="mb-3">High-Rise Positioning</Heading>
                <p className={`${bodyFont.className} text-sm text-[#666666]`}>
                  Leverage 27-story vertical living experience with unparalleled views and premium amenities
                </p>
              </div>
              
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-6 hover:border-[#CAB06B] transition-colors text-center">
                <div className="w-12 h-12 rounded-full bg-[#F8F0EA] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#CAB06B] text-xl font-bold">2</span>
                </div>
                <Heading level={4} className="mb-3">Tech-Forward Living</Heading>
                <p className={`${bodyFont.className} text-sm text-[#666666]`}>
                  Smart home integration and premium connectivity for Durham's education and tech professionals
                </p>
              </div>
              
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-6 hover:border-[#CAB06B] transition-colors text-center">
                <div className="w-12 h-12 rounded-full bg-[#F8F0EA] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#CAB06B] text-xl font-bold">3</span>
                </div>
                <Heading level={4} className="mb-3">Vertical Neighborhood</Heading>
                <p className={`${bodyFont.className} text-sm text-[#666666]`}>
                  Authentic connection with Durham's community through technology integration and local partnerships
                </p>
              </div>
            </div>
            
            {/* Implementation Roadmap */}
            <div className="mt-16">
              <Heading level={3} className="mb-6">Implementation Roadmap</Heading>
              <p className={`${bodyFont.className} text-[#666666] mb-6`}>
                Our tactical roadmap converts strategies into actionable steps with clear timelines, responsible parties, and success metrics.
              </p>
              
              {/* Detailed Implementation Blueprint */}
              <div className="p-8 bg-white border border-[#E5E2D9] rounded-sm relative overflow-hidden mt-8">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#CAB06B] opacity-5"></div>
                
                <div className="mb-4">
                  <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                    <ArrowRight className="h-4 w-4 mr-2 text-[#CAB06B]" />
                    COMPLETE EXECUTION BLUEPRINT
                  </h3>
                </div>
                
                <p className={`${bodyFont.className} text-[#666666] leading-relaxed max-w-3xl mb-6`}>
                  Our detailed implementation strategy provides a complete roadmap with staffing plans, timelines, and projected ROI metrics for each strategic initiative.
                </p>
                
                <div className="mb-8">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-4 text-[#555555]`}>Three-Phase Implementation Approach:</h5>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#F9F8F4] p-4 border border-[#E5E2D9] rounded-sm">
                      <div className="w-8 h-8 rounded-full bg-[#F9F8F4] flex items-center justify-center mb-3">
                        <span className="text-[#CAB06B] text-sm font-bold">1</span>
                      </div>
                      <h6 className={`${headingFont.className} text-sm mb-2 text-[#333333]`}>PRE-LAUNCH PHASE</h6>
                      <p className="text-xs text-[#666666] mb-1">6 months pre-opening</p>
                      <ul className="space-y-1.5 mt-3">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Establish premium brand identity across all touchpoints</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Launch digital presence with distinctive content strategy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Develop strategic local partnerships for resident benefits</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Design pre-leasing incentive structure with early-bird benefits</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#F9F8F4] p-4 border border-[#E5E2D9] rounded-sm">
                      <div className="w-8 h-8 rounded-full bg-[#F9F8F4] flex items-center justify-center mb-3">
                        <span className="text-[#CAB06B] text-sm font-bold">2</span>
                      </div>
                      <h6 className={`${headingFont.className} text-sm mb-2 text-[#333333]`}>LAUNCH PHASE</h6>
                      <p className="text-xs text-[#666666] mb-1">Opening to 6 months</p>
                      <ul className="space-y-1.5 mt-3">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Implement premium service model with hospitality-trained staff</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Execute high-visibility marketing campaign with digital focus</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Launch signature community events and programming</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Activate artist residency program with public installations</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#F9F8F4] p-4 border border-[#E5E2D9] rounded-sm">
                      <div className="w-8 h-8 rounded-full bg-[#F9F8F4] flex items-center justify-center mb-3">
                        <span className="text-[#CAB06B] text-sm font-bold">3</span>
                      </div>
                      <h6 className={`${headingFont.className} text-sm mb-2 text-[#333333]`}>STABILIZATION PHASE</h6>
                      <p className="text-xs text-[#666666] mb-1">6-12 months post-opening</p>
                      <ul className="space-y-1.5 mt-3">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Transition to targeted marketing for remaining unit types</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Optimize pricing strategy based on absorption analytics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Implement resident retention program with loyalty benefits</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#666666]">Initiate premium service add-ons for ancillary revenue</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-5 border border-[#E5E2D9] rounded-sm mb-6">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Proprietary Service Model</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="text-sm font-medium text-[#333333] mb-2">Key Service Components</h6>
                      <ul className="space-y-1.5">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Resident Experience Team with hospitality training</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#666666]">4-hour service response guarantee for all requests</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#666666]">White-glove move-in experience with welcome gifts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Resident mobile app with premium service access</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium text-[#333333] mb-2">Performance Metrics</h6>
                      <ul className="space-y-1.5">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#666666]">90% resident satisfaction score target</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Under 5% service standard failure rate</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#666666]">75% renewal rate for first-term residents</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#666666]">4.8/5.0 average rating across review platforms</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-5 border border-[#E5E2D9] rounded-sm">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Financial Projections</h5>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-xs font-medium text-[#333333] p-2 text-left border-b border-[#E5E2D9]">Metric</th>
                          <th className="text-xs font-medium text-[#333333] p-2 text-center border-b border-[#E5E2D9]">Standard Approach</th>
                          <th className="text-xs font-medium text-[#333333] p-2 text-center border-b border-[#E5E2D9]">Recommended Strategy</th>
                          <th className="text-xs font-medium text-[#333333] p-2 text-right border-b border-[#E5E2D9]">Improvement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-xs text-[#333333] p-2 text-left border-b border-[#E5E2D9]">Stabilization Timeline</td>
                          <td className="text-xs text-[#666666] p-2 text-center border-b border-[#E5E2D9]">12.5 months</td>
                          <td className="text-xs text-[#666666] p-2 text-center border-b border-[#E5E2D9]">9-9.5 months</td>
                          <td className="text-xs text-[#CAB06B] font-medium p-2 text-right border-b border-[#E5E2D9]">~25% faster</td>
                        </tr>
                        <tr>
                          <td className="text-xs text-[#333333] p-2 text-left border-b border-[#E5E2D9]">Concession Value</td>
                          <td className="text-xs text-[#666666] p-2 text-center border-b border-[#E5E2D9]">6-8 weeks free</td>
                          <td className="text-xs text-[#666666] p-2 text-center border-b border-[#E5E2D9]">4-6 weeks free</td>
                          <td className="text-xs text-[#CAB06B] font-medium p-2 text-right border-b border-[#E5E2D9]">~30% savings</td>
                        </tr>
                        <tr>
                          <td className="text-xs text-[#333333] p-2 text-left border-b border-[#E5E2D9]">Year 1 Revenue</td>
                          <td className="text-xs text-[#666666] p-2 text-center border-b border-[#E5E2D9]">$14.2M</td>
                          <td className="text-xs text-[#666666] p-2 text-center border-b border-[#E5E2D9]">$16.8M</td>
                          <td className="text-xs text-[#CAB06B] font-medium p-2 text-right border-b border-[#E5E2D9]">+$2.6M (+18.3%)</td>
                        </tr>
                        <tr>
                          <td className="text-xs text-[#333333] p-2 text-left">Renewal Rate</td>
                          <td className="text-xs text-[#666666] p-2 text-center">55-60%</td>
                          <td className="text-xs text-[#666666] p-2 text-center">70-75%</td>
                          <td className="text-xs text-[#CAB06B] font-medium p-2 text-right">+15% higher</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}