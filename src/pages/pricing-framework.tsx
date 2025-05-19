import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { PageContainer } from "@/components/ui/Container";
import { Text, Paragraph, Section, BulletList } from "@/components/ui/Typography";
import { ContentCard, StatCard, FeatureCard } from "@/components/ui/ContentCard";
import { StatBox } from "@/components/ui/StatBox";

export default function PricingFramework() {
  return (
    <>
      <Head>
        <title>Pricing & Incentive Framework - The Novus</title>
        <meta name="description" content="Pricing and incentive framework for The Novus high-rise apartments in Downtown Durham" />
      </Head>
      
      <Layout>
        <PageContainer 
          title="Pricing & Incentive Framework"
          intro="Our strategic pricing model positions The Novus to capitalize on its unique 27-story high-rise format and premium amenities, with a multi-tiered approach based on floor level, view orientation, and unit features to maximize revenue potential in the Downtown Durham market."
        >
          
          <Section title="Optimal Base Rent Positioning">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <ContentCard variant="light" className="h-full">
                <Text variant="h3" color="primary" className="mb-4">Studios</Text>
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-[#CAB06B] mb-1">
                    <Text variant="h3" color="accent" className="font-bold">
                      $3.90
                    </Text>
                  </div>
                </div>
                <Text variant="body-lg" color="primary" className="mb-2 text-center font-medium">
                  $3.60-$3.90/sq ft
                </Text>
                <Text variant="body" color="secondary" className="text-center mb-3">
                  550-650 sq ft
                </Text>
                <Text variant="caption" color="secondary" className="block">
                  Places The Novus approximately 8-10% above One City Center but 15-18% above other Durham competitors, reflecting superior views, height advantage, and premium finishes.
                </Text>
              </ContentCard>
              
              <ContentCard variant="light" className="h-full">
                <Text variant="h3" color="primary" className="mb-4">One Bedrooms</Text>
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-[#CAB06B] mb-1">
                    <Text variant="h3" color="accent" className="font-bold">
                      $3.65
                    </Text>
                  </div>
                </div>
                <Text variant="body-lg" color="primary" className="mb-2 text-center font-medium">
                  $3.30-$3.65/sq ft
                </Text>
                <Text variant="body" color="secondary" className="text-center mb-3">
                  750-950 sq ft
                </Text>
                <Text variant="caption" color="secondary" className="block">
                  Establishes a 12-15% premium over Van Alen and 511 Faye to reflect The Novus's high-rise exclusivity, panoramic views, and superior amenity stratification across 27 floors.
                </Text>
              </ContentCard>
              
              <ContentCard variant="light" className="h-full">
                <Text variant="h3" color="primary" className="mb-4">Two Bedrooms</Text>
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-[#CAB06B] mb-1">
                    <Text variant="h3" color="accent" className="font-bold">
                      $3.45
                    </Text>
                  </div>
                </div>
                <Text variant="body-lg" color="primary" className="mb-2 text-center font-medium">
                  $3.10-$3.45/sq ft
                </Text>
                <Text variant="body" color="secondary" className="text-center mb-3">
                  1,100-1,400 sq ft
                </Text>
                <Text variant="caption" color="secondary" className="block">
                  Positioned at the premium tier of the Durham market, reflecting the significant value proposition of The Novus's unique high-rise format, with a 10-12% premium over One City Center for equivalent floorplans.
                </Text>
              </ContentCard>
            </div>
            
            <ContentCard variant="accent" className="mb-8">
              <Text variant="h3" color="primary" className="mb-3">Pricing Strategy Highlights</Text>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                    <span className="text-[#CAB06B] font-bold">1</span>
                  </div>
                  <Text variant="body" color="primary" className="font-medium">Premium Positioning</Text>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                    <span className="text-[#CAB06B] font-bold">2</span>
                  </div>
                  <Text variant="body" color="primary" className="font-medium">Vertical Stratification</Text>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                    <span className="text-[#CAB06B] font-bold">3</span>
                  </div>
                  <Text variant="body" color="primary" className="font-medium">View-Based Premiums</Text>
                </div>
              </div>
              <Text variant="body" color="secondary">
                Our unit pricing strategy positions The Novus at the premium tier in Downtown Durham's market, with strategic price differentials based on unit size, floor height, and view orientation to maximize revenue while maintaining competitive velocity.
              </Text>
            </ContentCard>
          </Section>
            
          <Section title="Strategic Premium Allocation" divider>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ContentCard variant="default">
                <Text variant="h3" color="primary" className="mb-3">View Premiums</Text>
                <Paragraph size="default">Apply tiered premiums based on floor level and view orientation:</Paragraph>
                <div className="space-y-4 mt-4">
                  <div className="flex items-center">
                    <StatBox
                      variant="light"
                      label="Downtown Skyline"
                      value="$275-425"
                      description="premium per month"
                      className="flex-1"
                    />
                  </div>
                  <div className="flex items-center">
                    <StatBox
                      variant="light"
                      label="Five Points District"
                      value="$175-275"
                      description="premium per month"
                      className="flex-1"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <StatBox
                      variant="light"
                      label="Floor Premium"
                      value="$35-50"
                      description="per floor (higher on upper floors)"
                      className="flex-1"
                    />
                    <StatBox
                      variant="light"
                      label="Corner Units"
                      value="$200-450"
                      description="additional premium"
                      className="flex-1"
                    />
                  </div>
                </div>
              </ContentCard>
              
              <ContentCard variant="default">
                <Text variant="h3" color="primary" className="mb-3">Layout Premiums</Text>
                <Paragraph size="default">Apply for enhanced layouts and characteristics:</Paragraph>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <StatBox
                    variant="light"
                    label="Larger Terrace"
                    value="$75-125"
                    description="monthly premium"
                    className="flex-1"
                  />
                  <StatBox
                    variant="light"
                    label="Kitchen Island"
                    value="$50-100"
                    description="monthly premium"
                    className="flex-1"
                  />
                  <StatBox
                    variant="light"
                    label="Dual Aspect"
                    value="$75-100"
                    description="windows on multiple sides"
                    className="flex-1"
                  />
                  <StatBox
                    variant="light"
                    label="Architectural Features"
                    value="$50-75"
                    description="unique design elements"
                    className="flex-1"
                  />
                </div>
              </ContentCard>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ContentCard variant="light">
                <Text variant="h3" color="primary" className="mb-3">Finish Premiums</Text>
                <Paragraph size="default">Tiered upgrade packages with associated premiums:</Paragraph>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">1</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Premium Cabinet Package</Text>
                      <Text variant="body" color="accent" className="font-bold">$30-50/month</Text>
                      <Text variant="caption" color="secondary">Upgraded cabinet fronts, soft-close drawers</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">2</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Designer Lighting Package</Text>
                      <Text variant="body" color="accent" className="font-bold">$25-40/month</Text>
                      <Text variant="caption" color="secondary">Upgraded pendants, under-cabinet lighting</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">3</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Premium Flooring Package</Text>
                      <Text variant="body" color="accent" className="font-bold">$35-60/month</Text>
                      <Text variant="caption" color="secondary">Upgraded hardwood or luxury vinyl throughout</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">4</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Spa Bathroom Package</Text>
                      <Text variant="body" color="accent" className="font-bold">$40-70/month</Text>
                      <Text variant="caption" color="secondary">Rainfall shower, glass enclosure, premium fixtures</Text>
                    </div>
                  </div>
                </div>
              </ContentCard>
              
              <ContentCard variant="light">
                <Text variant="h3" color="primary" className="mb-3">Special Feature Premiums</Text>
                <Paragraph size="default">Premium add-ons for distinctive unit features:</Paragraph>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">A</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Built-in Office Nook</Text>
                      <Text variant="body" color="accent" className="font-bold">$50-75/month</Text>
                      <Text variant="caption" color="secondary">Custom desk, shelving, task lighting</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">B</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Wine Storage</Text>
                      <Text variant="body" color="accent" className="font-bold">$35-50/month</Text>
                      <Text variant="caption" color="secondary">Temperature-controlled cabinet (18-24 bottles)</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">C</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Smart Home Package</Text>
                      <Text variant="body" color="accent" className="font-bold">$45-65/month</Text>
                      <Text variant="caption" color="secondary">Integrated lighting, thermostats, entry system</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">D</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Custom Closet System</Text>
                      <Text variant="body" color="accent" className="font-bold">$40-60/month</Text>
                      <Text variant="caption" color="secondary">Upgraded organization with specialty racks</Text>
                    </div>
                  </div>
                </div>
              </ContentCard>
            </div>
          </Section>
            
          <Section title="Concession Structure Recommendations" divider>
            <div className="mb-8">
              <ContentCard variant="light" className="mb-6">
                <Text variant="h3" color="primary" className="mb-4">Lease-Up Concessions</Text>
                <Text variant="body-lg" color="primary" className="italic mb-3">Opening to 60% Occupancy</Text>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <ContentCard variant="default" className="h-full">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CAB06B] mr-2">
                        <Text variant="body" color="primary" className="text-white font-bold">1</Text>
                      </div>
                      <Text variant="h4" color="primary">Phase 1</Text>
                    </div>
                    <Text variant="body" color="primary" className="mb-1 font-medium">0-30% occupied</Text>
                    <div className="flex justify-center my-3">
                      <div className="px-4 py-2 bg-[#F5F5E6] rounded-full">
                        <Text variant="body" color="accent" className="font-bold">6-8 weeks free rent</Text>
                      </div>
                    </div>
                    <Text variant="caption" color="secondary" className="text-center block mt-2">
                      On 13+ month leases (4-6 weeks for premium view units on floors 20-27)
                    </Text>
                    <Text variant="caption" color="secondary" className="italic mt-3 block">
                      Position as "Durham's Premier High-Rise Launch" with time-limited availability
                    </Text>
                  </ContentCard>
                  
                  <ContentCard variant="default" className="h-full">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CAB06B] mr-2">
                        <Text variant="body" color="primary" className="text-white font-bold">2</Text>
                      </div>
                      <Text variant="h4" color="primary">Phase 2</Text>
                    </div>
                    <Text variant="body" color="primary" className="mb-1 font-medium">31-45% occupied</Text>
                    <div className="flex justify-center my-3">
                      <div className="px-4 py-2 bg-[#F5F5E6] rounded-full">
                        <Text variant="body" color="accent" className="font-bold">4-6 weeks free rent</Text>
                      </div>
                    </div>
                    <Text variant="caption" color="secondary" className="text-center block mt-2">
                      On 13+ month leases (3-4 weeks for premium view units)
                    </Text>
                    <Text variant="caption" color="secondary" className="italic mt-3 block">
                      Adjust based on absorption velocity by floor band (floors 1-10, 11-19, 20-27)
                    </Text>
                  </ContentCard>
                  
                  <ContentCard variant="default" className="h-full">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CAB06B] mr-2">
                        <Text variant="body" color="primary" className="text-white font-bold">3</Text>
                      </div>
                      <Text variant="h4" color="primary">Phase 3</Text>
                    </div>
                    <Text variant="body" color="primary" className="mb-1 font-medium">46-60% occupied</Text>
                    <div className="flex justify-center my-3">
                      <div className="px-4 py-2 bg-[#F5F5E6] rounded-full">
                        <Text variant="body" color="accent" className="font-bold">2-4 weeks free rent</Text>
                      </div>
                    </div>
                    <Text variant="caption" color="secondary" className="text-center block mt-2">
                      On 13+ month leases (potentially eliminated for high-demand units)
                    </Text>
                    <Text variant="caption" color="secondary" className="italic mt-3 block">
                      Apply selectively to slower-moving unit types with focus on floor bands
                    </Text>
                  </ContentCard>
                </div>
              </ContentCard>
              
              <ContentCard variant="light" className="mb-6">
                <Text variant="h3" color="primary" className="mb-3">Stabilization Concessions</Text>
                <Text variant="body-lg" color="primary" className="italic mb-4">60%+ Occupancy</Text>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatBox
                    variant="light"
                    label="Standard Offer"
                    value="2 Weeks"
                    description="Free on 13+ month leases for remaining inventory"
                    centered={true}
                  />
                  
                  <StatBox
                    variant="light"
                    label="Premium Units"
                    value="Reduced"
                    description="Minimize or eliminate concessions on high-demand units"
                    centered={true}
                  />
                  
                  <StatBox
                    variant="light"
                    label="Alternatives"
                    value="Value-Add"
                    description="Shift to non-rent incentives (technology packages, etc.)"
                    centered={true}
                  />
                </div>
              </ContentCard>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <ContentCard variant="default">
                  <Text variant="h3" color="primary" className="mb-3">Referral Programs</Text>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-7 h-7 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                        <Text variant="caption" color="accent" className="font-bold">R1</Text>
                      </div>
                      <div>
                        <Text variant="body" color="primary" className="font-medium">Resident Referral</Text>
                        <Text variant="body" color="accent" className="font-bold">$1,500 total</Text>
                        <Text variant="caption" color="secondary">$750 to referrer, $750 to new resident</Text>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-7 h-7 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                        <Text variant="caption" color="accent" className="font-bold">R2</Text>
                      </div>
                      <div>
                        <Text variant="body" color="primary" className="font-medium">Duke Housing Partner</Text>
                        <Text variant="body" color="accent" className="font-bold">2 weeks free</Text>
                        <Text variant="caption" color="secondary">Per successful placement</Text>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-7 h-7 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                        <Text variant="caption" color="accent" className="font-bold">R3</Text>
                      </div>
                      <div>
                        <Text variant="body" color="primary" className="font-medium">Real Estate Agent Commission</Text>
                        <Text variant="body" color="accent" className="font-bold">$1,500-2,000</Text>
                        <Text variant="caption" color="secondary">Higher for premium view units (floors 20-27)</Text>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-7 h-7 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                        <Text variant="caption" color="accent" className="font-bold">R4</Text>
                      </div>
                      <div>
                        <Text variant="body" color="primary" className="font-medium">Research Triangle Tech Partner</Text>
                        <Text variant="body" color="accent" className="font-bold">Corporate Rate</Text>
                        <Text variant="caption" color="secondary">Special pricing for partner company employees</Text>
                      </div>
                    </div>
                  </div>
                </ContentCard>
                
                <ContentCard variant="default">
                  <Text variant="h3" color="primary" className="mb-3">Seasonal Specials</Text>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-[#E5E2D9] rounded-sm p-3 bg-[#F9F8F4]">
                      <Text variant="body" color="primary" className="font-medium mb-1">Duke Graduation</Text>
                      <Text variant="body" color="accent" className="font-bold">$750 gift card</Text>
                      <Text variant="caption" color="secondary">For May-June move-ins</Text>
                    </div>
                    
                    <div className="border border-[#E5E2D9] rounded-sm p-3 bg-[#F9F8F4]">
                      <Text variant="body" color="primary" className="font-medium mb-1">Year-End Bonus</Text>
                      <Text variant="body" color="accent" className="font-bold">+1 week free</Text>
                      <Text variant="caption" color="secondary">For December move-ins</Text>
                    </div>
                    
                    <div className="border border-[#E5E2D9] rounded-sm p-3 bg-[#F9F8F4]">
                      <Text variant="body" color="primary" className="font-medium mb-1">Innovation District</Text>
                      <Text variant="body" color="accent" className="font-bold">Tech Package</Text>
                      <Text variant="caption" color="secondary">For March-April leases</Text>
                    </div>
                    
                    <div className="border border-[#E5E2D9] rounded-sm p-3 bg-[#F9F8F4]">
                      <Text variant="body" color="primary" className="font-medium mb-1">Holiday Special</Text>
                      <Text variant="body" color="accent" className="font-bold">Free Storage</Text>
                      <Text variant="caption" color="secondary">For November move-ins</Text>
                    </div>
                  </div>
                </ContentCard>
              </div>
              
              <ContentCard variant="accent" className="mt-6">
                <Text variant="h3" color="primary" className="mb-3">Look & Lease Specials</Text>
                <Text variant="body" color="secondary" className="mb-4">Incentives for quick decision-making:</Text>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white border border-[#E5E2D9] rounded-sm p-4 text-center">
                    <Text variant="body" color="primary" className="font-medium mb-2">Same-Day Signing</Text>
                    <Text variant="body" color="accent" className="font-bold">$750 credit</Text>
                    <Text variant="caption" color="secondary">For applications within 24h of tour</Text>
                  </div>
                  
                  <div className="bg-white border border-[#E5E2D9] rounded-sm p-4 text-center">
                    <Text variant="body" color="primary" className="font-medium mb-2">Application Fee</Text>
                    <Text variant="body" color="accent" className="font-bold">$0 fee</Text>
                    <Text variant="caption" color="secondary">Waived for on-site applications</Text>
                  </div>
                  
                  <div className="bg-white border border-[#E5E2D9] rounded-sm p-4 text-center">
                    <Text variant="body" color="primary" className="font-medium mb-2">Security Deposit</Text>
                    <Text variant="body" color="accent" className="font-bold">50% off</Text>
                    <Text variant="caption" color="secondary">For same-week decisions</Text>
                  </div>
                  
                  <div className="bg-white border border-[#E5E2D9] rounded-sm p-4 text-center">
                    <Text variant="body" color="primary" className="font-medium mb-2">Selection Priority</Text>
                    <Text variant="body" color="accent" className="font-bold">First choice</Text>
                    <Text variant="caption" color="secondary">With same-day application</Text>
                  </div>
                </div>
              </ContentCard>
            </div>
          </Section>
            
          <Section title="Value-Add Alternatives" divider>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ContentCard variant="default">
                <Text variant="h3" color="primary" className="mb-3">Technology Package</Text>
                <Paragraph size="default">Alternative to rent concessions:</Paragraph>
                <BulletList
                  items={[
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Smart Home Upgrade:</span> Complete package ($1,200 value) in lieu of 2 weeks free rent
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Fiber Internet Credit:</span> 6 months prepaid internet service ($600 value)
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Home Office Bundle:</span> Ergonomic desk setup and tech accessories ($800 value)
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Entertainment Package:</span> Smart TV and sound system installation ($950 value)
                      </Text>
                    </>
                  ]}
                />
              </ContentCard>
              
              <ContentCard variant="default">
                <Text variant="h3" color="primary" className="mb-3">Parking Incentives</Text>
                <Paragraph size="default">Structured parking incentives:</Paragraph>
                <BulletList
                  items={[
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Complimentary Reserved Parking:</span> 6 months free ($900 value) for premium units
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">EV Charging Priority:</span> Guaranteed access to charging stations
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Guest Parking Package:</span> 10 complimentary guest parking passes per month
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Valet Service Credit:</span> $25 monthly credit for occasional valet service
                      </Text>
                    </>
                  ]}
                />
              </ContentCard>
              
              <ContentCard variant="default">
                <Text variant="h3" color="primary" className="mb-3">Amenity Fee Credits</Text>
                <Paragraph size="default">Alternative fee structure options:</Paragraph>
                <BulletList
                  items={[
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Waived Amenity Fee:</span> First year waived ($350 value) for early signers
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Amenity+ Package:</span> Premium access tier including guest suite privileges
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Wellness Credit:</span> $50 monthly credit toward fitness/spa services
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Social Fund:</span> $25 monthly credit toward community events and activities
                      </Text>
                    </>
                  ]}
                />
              </ContentCard>
              
              <ContentCard variant="default">
                <Text variant="h3" color="primary" className="mb-3">Move-In Package</Text>
                <Paragraph size="default">Convenience services for new residents:</Paragraph>
                <BulletList
                  items={[
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">White Glove Moving:</span> Complimentary moving service ($1,200 value) with specialized high-rise logistics
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Designer Consultation:</span> 2-hour session with interior designer ($350 value)
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Durham Welcome Package:</span> Curated local products, Durham Performing Arts Center tickets, and restaurant gift cards ($350 value)
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">First Month Essentials:</span> Stocked pantry and household basics ($200 value)
                      </Text>
                    </>
                  ]}
                />
              </ContentCard>
            </div>
          </Section>
            
          <Section title="Renewal Strategy" divider>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ContentCard variant="light">
                <Text variant="h3" color="primary" className="mb-3">Tiered Increases</Text>
                <Paragraph size="default">Structured approach to renewal increases:</Paragraph>
                <div className="space-y-4 mt-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">1</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Standard Tier: 4-6% increase</Text>
                      <Text variant="caption" color="secondary">Basic renewal with no special qualifications</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">2</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Preferred Tier: 3-4% increase</Text>
                      <Text variant="caption" color="secondary">On-time payment history and good standing</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">3</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">Premium Tier: 2-3% increase</Text>
                      <Text variant="caption" color="secondary">Long-term residents (13+ months) with excellent payment history</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#CAB06B] font-bold">4</span>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium">VIP Tier: 0-2% increase</Text>
                      <Text variant="caption" color="secondary">Residents renewing for 24+ months with perfect payment history</Text>
                    </div>
                  </div>
                </div>
              </ContentCard>
              
              <ContentCard variant="light">
                <Text variant="h3" color="primary" className="mb-3">Renewal Incentives</Text>
                <Paragraph size="default">Benefits for lease renewal:</Paragraph>
                <BulletList
                  items={[
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Unit Refresh:</span> Carpet cleaning, paint touch-up, and fixture updates
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Upgrade Credit:</span> $500-750 credit toward unit upgrades for 18+ month renewals
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Amenity Credit:</span> 50% reduced amenity fee for renewal term
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Parking Upgrade:</span> Complimentary upgrade to reserved parking
                      </Text>
                    </>
                  ]}
                />
              </ContentCard>
              
              <ContentCard variant="default">
                <Text variant="h3" color="primary" className="mb-3">Lease Term Options</Text>
                <Paragraph size="default">Flexible renewal terms:</Paragraph>
                <BulletList
                  items={[
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">9-Month Option:</span> 8% premium over standard 12-month rate
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">12-Month Option:</span> Standard renewal rate based on tier
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">18-Month Option:</span> 2% discount from standard 12-month rate
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">24-Month Option:</span> 4% discount from standard 12-month rate
                      </Text>
                    </>
                  ]}
                />
              </ContentCard>
              
              <ContentCard variant="default">
                <Text variant="h3" color="primary" className="mb-3">Loyalty Benefits</Text>
                <Paragraph size="default">Exclusive perks for long-term residents:</Paragraph>
                <BulletList
                  items={[
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Anniversary Gift:</span> Annual recognition with local experience gift
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Resident VIP Status:</span> Priority maintenance, amenity reservations, and event access
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Referral Bonus Increase:</span> Enhanced referral bonus of $1,500 for long-term residents
                      </Text>
                    </>,
                    <>
                      <Text variant="body" color="primary">
                        <span className="font-medium">Home Customization:</span> Approved customization options for 2+ year residents
                      </Text>
                    </>
                  ]}
                />
              </ContentCard>
            </div>
            
            <ContentCard variant="light" className="mb-8">
              <Text variant="h3" color="primary" className="text-center mb-4">Competitive Pricing Matrix</Text>
              <Text variant="body" color="secondary" className="text-center mb-5">Recommended pricing position relative to competitive set (expressed as % above/below)</Text>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#F9F8F4]">
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Property</th>
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Studios</th>
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">1 Bedrooms</th>
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">2 Bedrooms</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-[#E5E2D9] px-4 py-3 font-medium">One City Center</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+8-10%</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+10-12%</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+10-12%</td>
                    </tr>
                    <tr className="bg-[#F9F8F4]">
                      <td className="border border-[#E5E2D9] px-4 py-3 font-medium">Van Alen</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+12-15%</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+12-15%</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+14-16%</td>
                    </tr>
                    <tr>
                      <td className="border border-[#E5E2D9] px-4 py-3 font-medium">511 Faye</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+14-17%</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+15-18%</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+15-18%</td>
                    </tr>
                    <tr className="bg-[#F9F8F4]">
                      <td className="border border-[#E5E2D9] px-4 py-3 font-medium">Cortland Bull City</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+18-22%</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+16-20%</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">+18-22%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ContentCard>
            
            <HighlightBox variant="secondary">
              <Text variant="body" color="secondary">
                This pricing and incentive framework provides The Novus with a premium positioning strategy that capitalizes on its unique high-rise format and 27-story height advantage in Downtown Durham. The vertical stratification approach maximizes revenue potential by floor band while ensuring competitive lease-up velocity for North Carolina's tallest residential tower.
              </Text>
            </HighlightBox>
          </Section>
            
          <Section title="Detailed Pricing & Incentive Strategy" divider>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <ContentCard variant="default">
                <div className="bg-[#F9F8F4] -m-5 mb-4 p-4 border-b border-[#E5E2D9]">
                  <Text variant="h3" color="primary" className="mb-1">Initial Leasing Rates</Text>
                  <Text variant="caption" color="secondary">Base pricing for all unit types</Text>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                      <Text variant="caption" color="accent" className="font-bold">•</Text>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium mb-1">Studios</Text>
                      <Text variant="body" color="secondary">Starting at <span className="font-bold text-[#CAB06B]">$2,150/month</span></Text>
                      <Text variant="caption" color="secondary">550-650 sq ft ($3.60-$3.90/sq ft)</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                      <Text variant="caption" color="accent" className="font-bold">•</Text>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium mb-1">One Bedrooms</Text>
                      <Text variant="body" color="secondary">Starting at <span className="font-bold text-[#CAB06B]">$2,850/month</span></Text>
                      <Text variant="caption" color="secondary">750-950 sq ft ($3.30-$3.65/sq ft)</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                      <Text variant="caption" color="accent" className="font-bold">•</Text>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium mb-1">Two Bedrooms</Text>
                      <Text variant="body" color="secondary">Starting at <span className="font-bold text-[#CAB06B]">$3,800/month</span></Text>
                      <Text variant="caption" color="secondary">1,100-1,400 sq ft ($3.10-$3.45/sq ft)</Text>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E5E2D9]">
                  <Text variant="caption" color="secondary" className="italic">
                    Premium pricing reflects The Novus's superior height, views, and luxury finishes compared to downtown competitors.
                  </Text>
                </div>
              </ContentCard>
              
              <ContentCard variant="default">
                <div className="bg-[#F9F8F4] -m-5 mb-4 p-4 border-b border-[#E5E2D9]">
                  <Text variant="h3" color="primary" className="mb-1">Short-Term Incentives</Text>
                  <Text variant="caption" color="secondary">Initial lease-up promotions</Text>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                      <Text variant="caption" color="accent" className="font-bold">•</Text>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium mb-1">Application Fee Waiver</Text>
                      <Text variant="body" color="secondary">$0 application fee ($50 value)</Text>
                      <Text variant="caption" color="secondary">For all initial on-site applications</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                      <Text variant="caption" color="accent" className="font-bold">•</Text>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium mb-1">First Month Concessions</Text>
                      <Text variant="body" color="secondary">Up to <span className="font-bold text-[#CAB06B]">8 weeks free</span> rent</Text>
                      <Text variant="caption" color="secondary">For 12+ month leases signed during launch phase</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                      <Text variant="caption" color="accent" className="font-bold">•</Text>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium mb-1">Look & Lease Bonus</Text>
                      <Text variant="body" color="secondary"><span className="font-bold text-[#CAB06B]">$750 rent credit</span> for same-day signing</Text>
                      <Text variant="caption" color="secondary">Limited-time promotion for decision makers</Text>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E5E2D9]">
                  <Text variant="caption" color="secondary" className="italic">
                    Incentives scaled by floor band and lease term length, with premium units (floors 20-27) receiving reduced concessions.
                  </Text>
                </div>
              </ContentCard>
              
              <ContentCard variant="default">
                <div className="bg-[#F9F8F4] -m-5 mb-4 p-4 border-b border-[#E5E2D9]">
                  <Text variant="h3" color="primary" className="mb-1">Resident Retention</Text>
                  <Text variant="caption" color="secondary">Long-term loyalty incentives</Text>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                      <Text variant="caption" color="accent" className="font-bold">•</Text>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium mb-1">Renewal Discounts</Text>
                      <Text variant="body" color="secondary">Tiered increases from <span className="font-bold text-[#CAB06B]">0-6%</span></Text>
                      <Text variant="caption" color="secondary">Based on payment history and lease term</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                      <Text variant="caption" color="accent" className="font-bold">•</Text>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium mb-1">Referral Bonuses</Text>
                      <Text variant="body" color="secondary">Up to <span className="font-bold text-[#CAB06B]">$1,500</span> for resident referrals</Text>
                      <Text variant="caption" color="secondary">Split between referrer and new resident</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-2 mt-1">
                      <Text variant="caption" color="accent" className="font-bold">•</Text>
                    </div>
                    <div>
                      <Text variant="body" color="primary" className="font-medium mb-1">Loyalty Benefits</Text>
                      <Text variant="body" color="secondary">Unit refresh and VIP amenity access</Text>
                      <Text variant="caption" color="secondary">Anniversary gifts and priority maintenance</Text>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E5E2D9]">
                  <Text variant="caption" color="secondary" className="italic">
                    Comprehensive strategy designed to maximize resident satisfaction and minimize turnover in a competitive market.
                  </Text>
                </div>
              </ContentCard>
            </div>
            
            <HighlightBox variant="accent">
              <Text variant="h3" color="primary" className="mb-2">Market Positioning Summary</Text>
              <Text variant="body" color="secondary" className="mb-4">
                The Novus's pricing strategy capitalizes on its unique position as Downtown Durham's premier 27-story high-rise, with a significant advantage in height, views, and luxury finishes compared to all competitors in the market.
              </Text>
              <Text variant="body" color="secondary">
                The vertical stratification pricing model with floor-specific premiums creates a wide range of price points that maximize appeal to the target demographic of young professionals, executives, and empty nesters seeking luxury amenities and unmatched downtown views.
              </Text>
            </HighlightBox>
          </Section>
        </PageContainer>
      </Layout>
    </>
  );
}