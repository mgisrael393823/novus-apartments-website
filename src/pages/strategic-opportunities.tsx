
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { GatedContent } from "@/components/GatedContent/GatedContent";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function StrategicOpportunities() {
  return (
    <>
      <Head>
        <title>Strategic Opportunities - SOL Modern</title>
        <meta name="description" content="Strategic opportunities analysis for SOL Modern" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <Heading level={1}>Strategic Opportunities</Heading>
          
          <HighlightBox>
            <p className="text-lg">
              Based on our comprehensive competitive analysis of the Roosevelt Row multifamily market, we've identified key strategic opportunities for SOL Modern to differentiate itself and maximize its competitive position.
            </p>
          </HighlightBox>
          
          <GatedContent 
            title="Strategic Opportunities" 
            teaser="Our detailed analysis has identified multiple opportunities for competitive advantage, addressing gaps in the current market offerings and common pain points expressed by residents. These opportunities span unit features, amenity offerings, resident experience, and marketing positioning."
          >
            <div className="space-y-12">
              <section>
                <Heading level={2}>Unit Features and Finishing Levels</Heading>
                
                <div className="space-y-8">
                  <div>
                    <Heading level={3}>Opportunity 1: Superior Sound Insulation</Heading>
                    <p className="mb-3"><strong>Gap Identified:</strong> Noise complaints are common across multiple properties, particularly The Stewart and downtown properties in general.</p>
                    
                    <div className="pl-6">
                      <Heading level={4}>Implementation:</Heading>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Triple-pane windows to reduce street noise</li>
                        <li>Acoustic insulation in walls between units</li>
                        <li>Sound-dampening flooring materials</li>
                        <li>Solid core doors with acoustic seals</li>
                      </ul>
                      
                      <p className="mt-3 italic">Position as "Urban Sanctuary" or "Peaceful Living in the Heart of Downtown"</p>
                    </div>
                  </div>
                  
                  <div>
                    <Heading level={3}>Opportunity 2: Premium Kitchen Package</Heading>
                    <p className="mb-3"><strong>Gap Identified:</strong> While most properties offer stainless steel appliances and quartz/granite countertops, few offer truly distinctive kitchen features.</p>
                    
                    <div className="pl-6">
                      <Heading level={4}>Implementation:</Heading>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Smart appliances with app connectivity</li>
                        <li>Wine refrigerators in select units</li>
                        <li>Pot-filler faucets at ranges</li>
                        <li>Waterfall edge countertops</li>
                        <li>Custom cabinetry with soft-close features</li>
                      </ul>
                      
                      <p className="mt-3 italic">Position as "Chef-Inspired Kitchens" or "Gourmet Living"</p>
                    </div>
                  </div>
                  
                  <div>
                    <Heading level={3}>Opportunity 3: Technology Integration</Heading>
                    <p className="mb-3"><strong>Gap Identified:</strong> Limited technology integration in competitor units.</p>
                    
                    <div className="pl-6">
                      <Heading level={4}>Implementation:</Heading>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Smart home systems (lighting, temperature, security) standard in all units</li>
                        <li>High-speed fiber internet included in rent</li>
                        <li>USB charging outlets throughout units</li>
                        <li>Keyless entry systems</li>
                        <li>Smart package lockers</li>
                      </ul>
                      
                      <p className="mt-3 italic">Position as "Future-Ready Living" or "Smart Luxury"</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section>
                <Heading level={2}>Amenity Offerings and Programming</Heading>
                
                <div className="space-y-8">
                  <div>
                    <Heading level={3}>Opportunity 4: Wellness-Focused Amenities</Heading>
                    <p className="mb-3"><strong>Gap Identified:</strong> While fitness centers are standard, comprehensive wellness amenities are lacking.</p>
                    
                    <div className="pl-6">
                      <Heading level={4}>Implementation:</Heading>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Spa facilities beyond just a hot tub (steam room, sauna)</li>
                        <li>Meditation/yoga studio with scheduled classes</li>
                        <li>Massage treatment rooms with visiting practitioners</li>
                        <li>Outdoor meditation garden</li>
                        <li>Air and water filtration systems throughout the building</li>
                      </ul>
                      
                      <p className="mt-3 italic">Position as "Wellness Living" or "Urban Retreat"</p>
                    </div>
                  </div>
                  
                  <div>
                    <Heading level={3}>Opportunity 5: Work-From-Home Optimization</Heading>
                    <p className="mb-3"><strong>Gap Identified:</strong> Limited dedicated workspace amenities despite the rise in remote work.</p>
                    
                    <div className="pl-6">
                      <Heading level={4}>Implementation:</Heading>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Private office pods for rent by the hour/day</li>
                        <li>Conference rooms with video conferencing technology</li>
                        <li>Podcast/recording studio</li>
                        <li>High-speed business center with printing services</li>
                        <li>Co-working lounge with coffee service</li>
                      </ul>
                      
                      <p className="mt-3 italic">Position as "Work + Live + Play" or "Remote Work Reimagined"</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section>
                <Heading level={2}>Implementation Priorities</Heading>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#151617] text-white p-6 rounded-sm">
                    <Heading level={3} className="text-white">Phase 1 (Pre-Opening)</Heading>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Finalize unit design with enhanced sound insulation and technology integration</li>
                      <li>Develop distinctive amenity programming for wellness center and work-from-home hub</li>
                      <li>Create art integration strategy with local artist partnerships</li>
                      <li>Establish service model training for property team</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#151617] text-white p-6 rounded-sm">
                    <Heading level={3} className="text-white">Phase 2 (Opening)</Heading>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Implement comprehensive technology systems and resident app</li>
                      <li>Launch lifestyle services program</li>
                      <li>Begin community programming calendar</li>
                      <li>Activate digital presence with professional content</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#151617] text-white p-6 rounded-sm">
                    <Heading level={3} className="text-white">Phase 3 (Ongoing)</Heading>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Regular resident feedback collection and service adjustments</li>
                      <li>Rotating art program and cultural events</li>
                      <li>Expanded lifestyle services based on resident preferences</li>
                      <li>Continuous improvement of technology offerings</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <HighlightBox variant="secondary">
                <p className="text-sm">
                  This strategic opportunities framework provides a comprehensive approach to positioning SOL Modern as the premier residential option in Roosevelt Row, with specific recommendations that address competitive gaps while creating distinctive experiences for residents.
                </p>
              </HighlightBox>
            </div>
          </GatedContent>
        </div>
      </Layout>
    </>
  );
}
