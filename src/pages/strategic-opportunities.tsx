
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { GatedContent } from "@/components/GatedContent/GatedContent";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function StrategicOpportunities() {
  return (
    <>
      <Head>
        <title>Strategic Opportunities - The Novus</title>
        <meta name="description" content="Strategic opportunities analysis for The Novus high-rise apartments in Downtown Durham" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <Heading level={1}>Strategic Opportunities</Heading>
          
          <HighlightBox>
            <p className="text-lg">
              Based on our comprehensive competitive analysis of the Downtown Durham/Five Points District multifamily market, we've identified key strategic opportunities for The Novus to differentiate itself through its unique 27-story high-rise format and maximize its competitive position.
            </p>
          </HighlightBox>
          
          <GatedContent 
            title="Strategic Opportunities" 
            teaser="Our detailed analysis has identified multiple opportunities for competitive advantage in the Durham market, addressing gaps in current offerings and leveraging The Novus's distinctive vertical neighborhood concept. These opportunities span premium view units, amenity stratification across 27 floors, resident experience tailored to Durham professionals, and marketing positioning as Downtown Durham's premier high-rise residential tower."
          >
            <div className="space-y-12">
              <section>
                <Heading level={2}>High-Rise Positioning Advantages</Heading>
                
                <div className="space-y-8">
                  <div>
                    <Heading level={3}>Opportunity 1: Premium View Units</Heading>
                    <p className="mb-3"><strong>Gap Identified:</strong> Limited true high-rise formats in Durham with One City Center (22 stories) as the only comparable property offering panoramic views. No other competitor exceeds 15 stories.</p>
                    
                    <div className="pl-6">
                      <Heading level={4}>Implementation:</Heading>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Strategic tiered pricing based on floor level and view direction</li>
                        <li>Floor-to-ceiling windows in all units to maximize Durham skyline views</li>
                        <li>Private balconies on premium units (floors 20-27) with unobstructed views</li>
                        <li>Marketing campaign highlighting exclusive perspectives from North Carolina's tallest residential tower</li>
                        <li>Special naming conventions for premium view lines ("Skyline Collection," "University Vista Collection")</li>
                      </ul>
                      
                      <p className="mt-3 italic">Position as "Elevated Living" or "Durham's Most Exclusive Address"</p>
                    </div>
                  </div>
                  
                  <div>
                    <Heading level={3}>Opportunity 2: Stratified Amenity Experience</Heading>
                    <p className="mb-3"><strong>Gap Identified:</strong> Durham competitors (Van Alen, 511 Faye) offer single-level amenity experiences that feel crowded during peak times and offer no exclusivity for premium residents.</p>
                    
                    <div className="pl-6">
                      <Heading level={4}>Implementation:</Heading>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Multi-level amenity experience with strategically distributed spaces throughout all 27 floors</li>
                        <li>Exclusive top-floor Sky Lounge with private dining room and demonstration kitchen (residents above floor 20 only)</li>
                        <li>Mid-tower Wellness Floor (14th floor) with spa, yoga studio, and meditation spaces</li>
                        <li>Ground-level social spaces integrated with 22,000+ sq ft retail district</li>
                        <li>Private elevator access for penthouse level residents</li>
                      </ul>
                      
                      <p className="mt-3 italic">Position as "The Vertical Neighborhood" or "Amenity Ecosystem"</p>
                    </div>
                  </div>
                  
                  <div>
                    <Heading level={3}>Opportunity 3: Superior Sound Isolation Technology</Heading>
                    <p className="mb-3"><strong>Gap Identified:</strong> Reviews for Berkshire Ninth Street and 511 Faye specifically mention noise issues between units and from common areas. This is particularly important for Durham's target demographic of professionals.</p>
                    
                    <div className="pl-6">
                      <Heading level={4}>Implementation:</Heading>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Triple-pane windows with specialized urban acoustic glass to reduce external noise</li>
                        <li>Concrete construction with enhanced acoustic isolation between units</li>
                        <li>Proprietary SoundShield™ technology in all shared walls (40% better than industry standard)</li>
                        <li>Acoustic ceiling and flooring treatments in all units</li>
                        <li>Smart home systems with sound masking technology options</li>
                      </ul>
                      
                      <p className="mt-3 italic">Position as "The Quiet Sanctuary" or "Peaceful High-Rise Living"</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section>
                <Heading level={2}>Durham Market Opportunities</Heading>
                
                <div className="space-y-8">
                  <div>
                    <Heading level={3}>Opportunity 4: Duke University & Medical Professional Focus</Heading>
                    <p className="mb-3"><strong>Gap Identified:</strong> Despite proximity to Duke University and Medical Center, no competitor explicitly caters to the needs of medical professionals and academics with tailored services and amenities.</p>
                    
                    <div className="pl-6">
                      <Heading level={4}>Implementation:</Heading>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Dedicated study rooms and academic workspaces for visiting scholars and faculty</li>
                        <li>Medical professional package including blackout shades, premium sound isolation, and specialized laundry service</li>
                        <li>Duke shuttle service with direct connection to medical campus</li>
                        <li>Partnership with Duke Health for resident wellness programming</li>
                        <li>Specialized lease terms aligned with academic and medical residency schedules</li>
                      </ul>
                      
                      <p className="mt-3 italic">Position as "Durham's Academic & Medical Professional Address"</p>
                    </div>
                  </div>
                  
                  <div>
                    <Heading level={3}>Opportunity 5: Premium Technology Hub</Heading>
                    <p className="mb-3"><strong>Gap Identified:</strong> Research Triangle's booming tech sector represents 42% of Durham's high-income professionals, but competitors like Cortland Bull City and Van Alen offer only basic technology amenities with outdated systems.</p>
                    
                    <div className="pl-6">
                      <Heading level={4}>Implementation:</Heading>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Whole-building mesh Wi-Fi network with guaranteed gigabit speeds throughout</li>
                        <li>Tech concierge service for device setup, smart home integration and troubleshooting</li>
                        <li>Advanced building-wide API system allowing residents to create custom automation routines</li>
                        <li>Private entrepreneurial suites with secure server hosting options</li>
                        <li>Technology demonstration lab with rotating partnerships with Research Triangle innovators</li>
                      </ul>
                      
                      <p className="mt-3 italic">Position as "Durham's Innovation Address" or "The Connected Tower"</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section>
                <Heading level={2}>Implementation Priorities</Heading>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#333333] text-white p-6 rounded-sm">
                    <Heading level={3} className="text-white">Phase 1 (Pre-Opening)</Heading>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Finalize stratified floor plan pricing strategy for all 27 floors with premium view tiers</li>
                      <li>Develop multi-level amenity programming to create vertical neighborhood concept</li>
                      <li>Establish partnerships with Duke University and Medical Center</li>
                      <li>Create Research Triangle technology partner ecosystem for innovation amenities</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#333333] text-white p-6 rounded-sm">
                    <Heading level={3} className="text-white">Phase 2 (Opening)</Heading>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Launch "Skyline Collection" marketing campaign for premium floors 20-27</li>
                      <li>Activate building-wide technology ecosystem with Durham Tech Week event</li>
                      <li>Introduce Duke Health professional services and move-in package</li>
                      <li>Implement building-wide sound isolation demonstration experiences for tours</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#333333] text-white p-6 rounded-sm">
                    <Heading level={3} className="text-white">Phase 3 (Ongoing)</Heading>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Implement exclusive resident events stratified by floor level and amenity access</li>
                      <li>Launch seasonal programming with access to Durham cultural institutions</li>
                      <li>Rotate technology partnerships with Research Triangle innovators quarterly</li>
                      <li>Develop custom sound isolation packages for medical professionals with night shifts</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <HighlightBox variant="secondary">
                <p className="text-sm">
                  This strategic opportunities framework provides a comprehensive approach to positioning The Novus as Downtown Durham's premier high-rise residential tower, with specific recommendations that leverage its unique 27-story format, stratified amenity offerings, and targeted positioning for Duke University, medical professionals, and Research Triangle technology workforce.
                </p>
              </HighlightBox>
            </div>
          </GatedContent>
        </div>
      </Layout>
    </>
  );
}
