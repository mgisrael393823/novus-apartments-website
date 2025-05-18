
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function PricingFramework() {
  return (
    <>
      <Head>
        <title>Pricing & Incentive Framework - SOL Modern</title>
        <meta name="description" content="Pricing and incentive framework for SOL Modern" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <Heading level={1}>Pricing & Incentive Framework</Heading>
          
          <HighlightBox>
            <p className="text-lg">
              Our strategic pricing model positions SOL Modern to balance competitive market rates with premium value, incorporating an optimized incentive structure to drive lease-up velocity while protecting long-term revenue.
            </p>
          </HighlightBox>
          
          <div className="space-y-10">
            <section className="section">
              <Heading level={2} className="mb-5">Optimal Base Rent Positioning</Heading>
              
              <div className="content-box-light mb-8">
                <Heading level={3} className="mb-4">Unit Type Pricing Strategy</Heading>
                
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>Studios (Estimated 500-600 sq ft):</strong> Position at $3.20-$3.35/sq ft</p>
                      <p className="caption">Places SOL Modern approximately 3-5% below The Stewart but 4-6% above other competitors, reflecting superior finish levels while maintaining initial accessibility.</p>
                    </div>
                  </li>
                  
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>One Bedrooms (Estimated 700-850 sq ft):</strong> Target $2.95-$3.15/sq ft</p>
                      <p className="caption">Establishes a 2-3% premium over Kenect Phoenix and The Ryan to reflect enhanced amenity offerings and unit features.</p>
                    </div>
                  </li>
                  
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>Two Bedrooms (Estimated 1,000-1,200 sq ft):</strong> Place at $2.85-$3.00/sq ft</p>
                      <p className="caption">Positioned at the upper tier of the competitive set while maintaining clear value differentiation from The Stewart through superior unit features and community amenities.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Strategic Premium Allocation</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box">
                  <Heading level={3} className="mb-3">View Premiums</Heading>
                  <p className="body-text mb-3">Apply tiered premiums based on floor level and view orientation:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Downtown skyline/mountain views: $150-250 premium</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Roosevelt Row street views: $75-125 premium</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Floor premium: $15 per floor starting from 4th floor</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Corner units: $100-150 additional premium</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Layout Premiums</Heading>
                  <p className="body-text mb-3">Apply for enhanced layouts and characteristics:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Larger terrace/balcony: $75-125 premium</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Enhanced kitchen layout with island: $50-100 premium</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Dual aspect (windows on multiple sides): $75-100 premium</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Unique architectural features: $50-75 premium</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="content-box-light mb-8">
                <Heading level={3} className="mb-3">Finish Premiums</Heading>
                <p className="body-text mb-3">Tiered upgrade packages with associated premiums:</p>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Premium Cabinet Package:</strong> $30-50/month (upgraded cabinet fronts, soft-close drawers)</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Designer Lighting Package:</strong> $25-40/month (upgraded pendants, under-cabinet lighting)</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Premium Flooring Package:</strong> $35-60/month (upgraded hardwood or luxury vinyl throughout)</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Spa Bathroom Package:</strong> $40-70/month (rainfall shower, glass enclosure, premium fixtures)</span>
                  </li>
                </ul>
              </div>
              
              <div className="content-box mb-8">
                <Heading level={3} className="mb-3">Special Feature Premiums</Heading>
                <p className="body-text mb-3">Premium add-ons for distinctive unit features:</p>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Built-in Office Nook:</strong> $50-75/month (custom desk, shelving, task lighting)</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Wine Storage:</strong> $35-50/month (temperature-controlled cabinet with 18-24 bottle capacity)</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Smart Home Package:</strong> $45-65/month (integrated lighting, thermostats, entry system)</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Custom Closet System:</strong> $40-60/month (upgraded organization system with drawers and specialty racks)</span>
                  </li>
                </ul>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Concession Structure Recommendations</Heading>
              
              <div className="mb-8">
                <div className="content-box-light mb-6">
                  <Heading level={3} className="mb-3">Lease-Up Concessions</Heading>
                  <p className="body-text-lg mb-2"><em>Opening to 60% Occupancy</em></p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Phase 1 (0-30% occupied):</strong> 6-8 weeks free on 13+ month lease</p>
                        <p className="caption">Position as "Grand Opening Special" with time-limited availability</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Phase 2 (31-45% occupied):</strong> 4-6 weeks free on 13+ month lease</p>
                        <p className="caption">Adjust based on absorption velocity and competitor response</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Phase 3 (46-60% occupied):</strong> 2-4 weeks free on 13+ month lease</p>
                        <p className="caption">Apply selectively to slower-moving unit types</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box mb-6">
                  <Heading level={3} className="mb-3">Stabilization Concessions</Heading>
                  <p className="body-text-lg mb-2"><em>60%+ Occupancy</em></p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Standard Offer:</strong> 2 weeks free on 13+ month leases for remaining inventory</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Premium Unit Strategy:</strong> Reduce or eliminate concessions on high-demand units</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Alternate Incentives:</strong> Shift to value-add offerings rather than free rent (see Value-Add section)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="content-box-light">
                    <Heading level={3} className="mb-3">Referral Programs</Heading>
                    <ul className="bullet-list">
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text"><strong>Resident Referral:</strong> $1,000 total ($500 to referrer, $500 to new resident)</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text"><strong>Corporate Housing Partner:</strong> 1 week free rent per successful placement</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text"><strong>Real Estate Agent Program:</strong> $1,000 commission per lease</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text"><strong>Local Business Partner:</strong> Reciprocal discount program with special rate</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="content-box-light">
                    <Heading level={3} className="mb-3">Seasonal Specials</Heading>
                    <ul className="bullet-list">
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text"><strong>Summer Lease Special:</strong> $500 gift card for move-ins during slower summer months</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text"><strong>Year-End Bonus:</strong> Additional week free for December move-ins</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text"><strong>Spring Forward:</strong> Reduced security deposit for March-April leases</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text"><strong>Holiday Special:</strong> Free storage unit for November move-ins</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="content-box mt-6">
                  <Heading level={3} className="mb-3">Look & Lease Specials</Heading>
                  <p className="body-text mb-3">Incentives for quick decision-making:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Same-Day Signing Bonus:</strong> $750 rent credit for applications completed within 24 hours of tour</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Application Fee Waiver:</strong> $50 value for on-site applications during tour</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Security Deposit Reduction:</strong> 50% off standard deposit for same-week decisions</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Premium Selection Priority:</strong> First choice of available units with same-day application</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Value-Add Alternatives</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box">
                  <Heading level={3} className="mb-3">Technology Package</Heading>
                  <p className="body-text mb-3">Alternative to rent concessions:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Smart Home Upgrade:</strong> Complete package ($1,200 value) in lieu of 2 weeks free rent</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Fiber Internet Credit:</strong> 6 months prepaid internet service ($600 value)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Home Office Bundle:</strong> Ergonomic desk setup and tech accessories ($800 value)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Entertainment Package:</strong> Smart TV and sound system installation ($950 value)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Parking Incentives</Heading>
                  <p className="body-text mb-3">Structured parking incentives:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Complimentary Reserved Parking:</strong> 6 months free ($900 value) for premium units</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>EV Charging Priority:</strong> Guaranteed access to charging stations</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Guest Parking Package:</strong> 10 complimentary guest parking passes per month</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Valet Service Credit:</strong> $25 monthly credit for occasional valet service</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Amenity Fee Credits</Heading>
                  <p className="body-text mb-3">Alternative fee structure options:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Waived Amenity Fee:</strong> First year waived ($350 value) for early signers</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Amenity+ Package:</strong> Premium access tier including guest suite privileges</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Wellness Credit:</strong> $50 monthly credit toward fitness/spa services</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Social Fund:</strong> $25 monthly credit toward community events and activities</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Move-In Package</Heading>
                  <p className="body-text mb-3">Convenience services for new residents:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>White Glove Moving:</strong> Complimentary moving service ($800 value)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Designer Consultation:</strong> 2-hour session with interior designer ($350 value)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Welcome Package:</strong> Curated local products and restaurant gift cards ($250 value)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>First Month Essentials:</strong> Stocked pantry and household basics ($200 value)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Renewal Strategy</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Tiered Increases</Heading>
                  <p className="body-text mb-3">Structured approach to renewal increases:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Standard Tier:</strong> 4-6% increase</p>
                        <p className="caption">Basic renewal with no special qualifications</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Preferred Tier:</strong> 3-4% increase</p>
                        <p className="caption">On-time payment history and good standing</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Premium Tier:</strong> 2-3% increase</p>
                        <p className="caption">Long-term residents (13+ months) with excellent payment history</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>VIP Tier:</strong> 0-2% increase</p>
                        <p className="caption">Residents renewing for 24+ months with perfect payment history</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Renewal Incentives</Heading>
                  <p className="body-text mb-3">Benefits for lease renewal:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Unit Refresh:</strong> Carpet cleaning, paint touch-up, and fixture updates</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Upgrade Credit:</strong> $500-750 credit toward unit upgrades for 18+ month renewals</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Amenity Credit:</strong> 50% reduced amenity fee for renewal term</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Parking Upgrade:</strong> Complimentary upgrade to reserved parking</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Lease Term Options</Heading>
                  <p className="body-text mb-3">Flexible renewal terms:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>9-Month Option:</strong> 8% premium over standard 12-month rate</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>12-Month Option:</strong> Standard renewal rate based on tier</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>18-Month Option:</strong> 2% discount from standard 12-month rate</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>24-Month Option:</strong> 4% discount from standard 12-month rate</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Loyalty Benefits</Heading>
                  <p className="body-text mb-3">Exclusive perks for long-term residents:</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Anniversary Gift:</strong> Annual recognition with local experience gift</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Resident VIP Status:</strong> Priority maintenance, amenity reservations, and event access</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Referral Bonus Increase:</strong> Enhanced referral bonus of $1,500 for long-term residents</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Home Customization:</strong> Approved customization options for 2+ year residents</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="content-box-light mb-8">
                <Heading level={3} className="text-center mb-4">Competitive Pricing Matrix</Heading>
                <p className="body-text text-center mb-5">Recommended pricing position relative to competitive set (expressed as % above/below)</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#FCFAF5]">
                        <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Property</th>
                        <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Studios</th>
                        <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">1 Bedrooms</th>
                        <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">2 Bedrooms</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-[#E8E3D9] px-4 py-3 font-medium">The Stewart</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">-3-5%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">-4-6%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">-6-8%</td>
                      </tr>
                      <tr className="bg-[#FCFAF5]">
                        <td className="border border-[#E8E3D9] px-4 py-3 font-medium">Kenect Phoenix</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">+2-4%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">+2-3%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">+3-5%</td>
                      </tr>
                      <tr>
                        <td className="border border-[#E8E3D9] px-4 py-3 font-medium">The Ryan</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">+3-5%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">+2-3%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">+2-4%</td>
                      </tr>
                      <tr className="bg-[#FCFAF5]">
                        <td className="border border-[#E8E3D9] px-4 py-3 font-medium">Highline</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">+4-6%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">+3-5%</td>
                        <td className="border border-[#E8E3D9] px-4 py-3">+3-5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <HighlightBox variant="secondary">
                <p className="body-text">
                  This pricing and incentive framework provides SOL Modern with a comprehensive approach to revenue optimization while maintaining competitive position in the Roosevelt Row market. The strategy balances initial lease-up velocity needs with long-term revenue goals through strategic concession structuring and targeted premium allocation.
                </p>
              </HighlightBox>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
