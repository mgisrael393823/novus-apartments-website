
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function GoToMarket() {
  return (
    <>
      <Head>
        <title>Go-to-Market Roadmap - SOL Modern</title>
        <meta name="description" content="Go-to-market roadmap for SOL Modern" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <Heading level={1}>Go-to-Market Roadmap</Heading>
          
          <HighlightBox>
            <p className="text-lg">
              This roadmap outlines the phased implementation strategy for SOL Modern's market entry, with specific timelines, marketing channels, and targeting approaches to achieve optimal lease-up velocity.
            </p>
          </HighlightBox>
          
          <div className="space-y-10">
            <section className="section">
              <Heading level={2} className="mb-5">Pre-Leasing Phase (3-6 Months Prior to Opening)</Heading>
              
              <div className="content-box-light mb-8">
                <Heading level={3} className="mb-4">Timing & Milestones</Heading>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>6 Months Prior:</strong> Launch pre-leasing website with interactive floor plans, amenity showcase, and reservation platform. Begin building interest list through targeted digital campaigns.</p>
                    </div>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>5 Months Prior:</strong> Open on-site or nearby leasing gallery with interactive displays, material samples, and VR tours of unit interiors. Begin accepting priority reservations with refundable deposits.</p>
                    </div>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>4 Months Prior:</strong> Implement first round of pre-leasing incentives for early reservations. Launch local partnership initiatives with Roosevelt Row arts and business community.</p>
                    </div>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>3 Months Prior:</strong> Host exclusive preview events for priority list members. Begin converting reservations to leases as construction completion timeline solidifies.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box">
                  <Heading level={3} className="mb-3">Primary Targets</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Phoenix Urban Professionals (28-42):</strong> Working in downtown/midtown offices with household incomes $85K+, seeking walkable lifestyle and cultural amenities</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Creative Industry Professionals:</strong> Designers, artists, and creative entrepreneurs connected to the Roosevelt Row arts district</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Medical Professionals:</strong> Physicians, specialists, and healthcare administrators from nearby medical centers</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Downtown Renters Looking to Upgrade:</strong> Current residents of Class B downtown properties seeking elevated amenities and services</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Secondary Targets</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Empty Nesters (50-65):</strong> Downsizing from suburban homes, seeking vibrant urban lifestyle</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Tech Industry Transplants:</strong> Relocating professionals drawn to Phoenix's growing tech scene</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Young Urban Couples:</strong> Dual-income households without children seeking prime urban location</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Remote Work Professionals:</strong> Prioritizing high-quality home office space and communal work amenities</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Core Channels</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Dedicated Website:</strong> Immersive, content-rich platform with virtual tours, neighborhood exploration, and seamless reservation functionality</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Geo-Targeted Paid Search:</strong> Focus on high-intent keywords related to Phoenix luxury apartments, Roosevelt Row living, and downtown Phoenix rentals</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Social Media Targeting:</strong> Custom audiences based on demographic, behavioral, and lookalike modeling, with emphasis on Instagram and Facebook for visual storytelling</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Local Business & Arts District Partnerships:</strong> Collaborative content and cross-promotion with Roosevelt Row businesses, galleries, and cultural venues</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Content Strategy</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Neighborhood Storytelling:</strong> Video series highlighting Roosevelt Row arts scene, dining experiences, and community vibe</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Design & Architecture Focus:</strong> Content showcasing distinctive design elements, premium finishes, and architectural highlights</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Lifestyle Visualization:</strong> Content depicting the SOL Modern living experience through day-in-the-life narratives</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Construction Progress Updates:</strong> Transparent communications with future residents through interactive timeline and milestone announcements</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Initial Lease-Up Phase (First 3 Months After Opening)</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box">
                  <Heading level={3} className="mb-3">Target Metrics</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Pre-opening reservations: 25-30% of total units</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Month 1 after opening: Additional 15-20% of total units</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Month 2 after opening: Additional 10-15% of total units</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Month 3 after opening: Additional 10-15% of total units</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Cumulative 3-month target: 60-75% occupancy</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Leasing Office Operations</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Extended Hours:</strong> 7-day operation with evening hours twice weekly</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Tour Optimization:</strong> Structured tour path highlighting key differentiators and premium features; allow 45-60 minutes per prospect</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Same-Day Application Process:</strong> Streamlined digital application with preliminary approval during visit when possible</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Automated Follow-Up Sequence:</strong> Tiered communication plan based on prospect engagement level</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Community Launch Events</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Grand Opening Gala:</strong> Invitation-only event for local influencers, business leaders, and priority wait list members</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>First Friday Art Walks:</strong> Featured property in monthly Roosevelt Row art walk with rotating exhibitions in lobby/amenity spaces</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Resident Welcome Series:</strong> Curated events for early move-ins to foster community connections</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Industry Showcase:</strong> Exclusive tours for real estate professionals, relocation specialists, and corporate housing partners</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Ongoing Programming</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Weekly Property Tours:</strong> Themed open house events targeting specific resident personas</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Local Business Spotlights:</strong> Pop-up experiences featuring neighborhood restaurants, boutiques, and services</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Lifestyle Workshops:</strong> Programming aligned with amenity spaces (wellness, culinary, creative)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Model Apartment Dining Experiences:</strong> Intimate chef-driven events for prospects to experience the lifestyle</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Stabilization Phase (75%+ Occupancy)</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box">
                  <Heading level={3} className="mb-3">Reputation Management Strategy</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Review Generation:</strong> Systematic approach to cultivating positive reviews across platforms with resident incentives</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Resident Testimonial Program:</strong> Video content featuring authentic resident experiences and stories</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Social Proof Amplification:</strong> Strategic showcasing of resident endorsements and lifestyle content</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Rapid Response Protocol:</strong> 24-hour response window for all reviews with resolution tracking for negative feedback</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Community Integration Initiatives</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Local Arts Patronage:</strong> Ongoing sponsorship of Roosevelt Row cultural events and artists</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Neighborhood Business Program:</strong> Exclusive resident perks with local restaurants, shops, and services</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Seasonal Programming:</strong> Public-facing events that position SOL Modern as a neighborhood cultural hub</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Sustainability Initiatives:</strong> Visible environmental and community projects that align with brand values</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Performance Analytics Framework</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Lead Source Attribution:</strong> Multi-touch attribution model to evaluate channel effectiveness and ROI</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Conversion Funnel Analysis:</strong> Identification of key drop-off points in leasing journey</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Resident Demographic Profiling:</strong> Ongoing refinement of target personas based on actual lease-ups</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Competitive Position Monitoring:</strong> Monthly analysis of pricing, incentives, and absorption across competitive set</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Budget Reallocation Protocol</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Monthly marketing spend review with ability to shift resources to high-performing channels</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Quarterly incentive structure assessment with adjustments based on velocity and competitive positioning</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Seasonal campaign planning aligned with natural leasing cycles and local events calendar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Digital & Traditional Channel Mix</Heading>
              
              <div className="content-box-light p-6 my-8 rounded-md">
                <h3 className="text-center mb-4">Channel Allocation by Phase</h3>
                <p className="text-sm text-center mb-4">Recommended budget distribution across marketing channels</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#FCFAF5]">
                        <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Channel</th>
                        <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Pre-Leasing</th>
                        <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Initial Lease-Up</th>
                        <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Stabilization</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-[#E8E3D9] px-4 py-3 font-medium">Paid Search/SEO</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">20%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">15%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">10%</td>
                      </tr>
                      <tr className="bg-[#FCFAF5]">
                        <td className="border border-[#E8E3D9] px-4 py-3 font-medium">Social Media</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">25%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">20%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">15%</td>
                      </tr>
                      <tr>
                        <td className="border border-[#E8E3D9] px-4 py-3 font-medium">ILS Platforms</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">15%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">25%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">30%</td>
                      </tr>
                      <tr className="bg-[#FCFAF5]">
                        <td className="border border-[#E8E3D9] px-4 py-3 font-medium">Events/Experiential</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">20%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">25%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">15%</td>
                      </tr>
                      <tr>
                        <td className="border border-[#E8E3D9] px-4 py-3 font-medium">Content Production</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">15%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">10%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">15%</td>
                      </tr>
                      <tr className="bg-[#FCFAF5]">
                        <td className="border border-[#E8E3D9] px-4 py-3 font-medium">Local Partnerships</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">5%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">5%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-[#151617] text-white p-6 rounded-sm">
                  <h3 className="text-white mb-3">Team Structure</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Dedicated Leasing Director (full-time)</li>
                    <li>2 Leasing Consultants (full-time)</li>
                    <li>Digital Marketing Specialist (part-time/agency)</li>
                    <li>Community Relations Coordinator (part-time)</li>
                    <li>Administrative Support (shared resource)</li>
                  </ul>
                </div>
                
                <div className="bg-[#151617] text-white p-6 rounded-sm">
                  <h3 className="text-white mb-3">Key Partners</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Digital Marketing Agency (local with multifamily expertise)</li>
                    <li>Branding & Content Production Studio</li>
                    <li>Virtual Tour Technology Provider</li>
                    <li>Local Event Production Partner</li>
                    <li>Roosevelt Row Business Association</li>
                  </ul>
                </div>
                
                <div className="bg-[#151617] text-white p-6 rounded-sm">
                  <h3 className="text-white mb-3">Technology Stack</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Property Management/CRM System</li>
                    <li>Digital Leasing Platform with Application Portal</li>
                    <li>Virtual Tour/3D Visualization Tools</li>
                    <li>Reputation Management Software</li>
                    <li>Marketing Analytics Dashboard</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Risk Mitigation Strategies</Heading>
              
              <div className="content-box mb-8">
                <Heading level={3} className="mb-3">Scenario Planning</Heading>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Slower Absorption Scenario:</strong> Enhanced incentive structure, increased marketing spend allocation, and expanded target audience parameters</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Competitive Response Scenario:</strong> Differentiation strategy focusing on unique amenities and resident experience rather than price competition</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Market Downturn Scenario:</strong> Phased amenity completion approach to control costs while maintaining core value proposition</span>
                  </li>
                </ul>
              </div>
              
              <div className="content-box mb-8">
                <Heading level={3} className="mb-3">Agility Mechanisms</Heading>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Monthly performance review with predefined triggers for strategy adjustments</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Flexible marketing budget with 20% contingency reserve for responsive allocation</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Tiered incentive framework that can be deployed based on velocity metrics</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Ongoing competitive monitoring with bi-weekly reporting and analysis</span>
                  </li>
                </ul>
              </div>
              
              <HighlightBox variant="secondary">
                <p className="text-sm">
                  This go-to-market roadmap provides SOL Modern with a comprehensive, phased approach to achieve optimal lease-up velocity while establishing long-term brand positioning in the Roosevelt Row market. The strategy balances digital marketing innovations with targeted experiential initiatives, supported by data-driven optimization throughout the leasing lifecycle.
                </p>
              </HighlightBox>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
