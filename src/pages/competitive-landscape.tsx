
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Building, Users, Zap, Award, ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function CompetitiveLandscape() {
  return (
    <>
      <Head>
        <title>Competitive Landscape Analysis | The Novus</title>
        <meta name="description" content="Competitive Landscape Analysis for The Novus Apartments Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-[#333333]">Competitive Landscape Analysis</h1>
          
          <div className="bg-[#F9F8F4] border-l-4 border-[#333333] p-6 mb-8">
            <p className="text-lg font-medium">
              The Novus will enter a market with 6 primary competitors in Downtown Durham. This analysis identifies key differentiators, competitive gaps, and strategic positioning opportunities for The Novus's distinctive high-rise offering.
            </p>
          </div>
          
          <div className="space-y-10">
            <section className="py-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Competitive Set Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-[#E5E2D9] rounded-sm p-6 bg-[#F9F8F4] relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#CAB06B] opacity-5"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="text-[#666666]" size={24} />
                    <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333]`}>Primary Competitors</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>Van Alen</span>
                        <p className={`${bodyFont.className} text-sm text-[#666666]`}>418 units, built 2021, 0.7 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>One City Center</span>
                        <p className={`${bodyFont.className} text-sm text-[#666666]`}>139 units, built 2018, 0.3 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>511 Faye</span>
                        <p className={`${bodyFont.className} text-sm text-[#666666]`}>196 units, built 2023, 0.5 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>Cortland Bull City</span>
                        <p className={`${bodyFont.className} text-sm text-[#666666]`}>305 units, built 2019, 0.8 miles</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-[#E5E2D9] rounded-sm p-6 bg-[#F9F8F4] relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#CAB06B] opacity-5"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-[#666666]" size={24} />
                    <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333]`}>Secondary Competitors</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>Berkshire Ninth Street</span>
                        <p className={`${bodyFont.className} text-sm text-[#666666]`}>303 units, built 2015, 1.4 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>Beckon Apartments</span>
                        <p className={`${bodyFont.className} text-sm text-[#666666]`}>176 units, built 2022, 1.1 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>Broadstone Ninth</span>
                        <p className={`${bodyFont.className} text-sm text-[#666666]`}>215 units, built 2018, 1.3 miles</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Comprehensive Competitive Analysis */}
              <div className="mt-8 mb-12">
                <h3 className={`${headingFont.className} text-xl uppercase tracking-wide text-[#333333] mb-6`}>
                  Competitive Matrix Analysis
                </h3>
                
                <p className={`${bodyFont.className} text-[#666666] leading-relaxed mb-6`}>
                  This comparative matrix highlights key metrics across the competitive set, revealing strategic positioning opportunities for The Novus based on amenities, rents, absorption rates, and resident demographics.
                </p>
                
                {/* Competitive Matrix Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-[#E5E2D9] rounded-sm">
                    <thead>
                      <tr className="bg-[#F9F8F4] border-b border-[#E5E2D9]">
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Property</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Year Built</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Units</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Avg. Rent</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Occupancy</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Concessions</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Amenity Rating</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E2D9]">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Van Alen</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">2021</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">418</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">$2,450</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">93%</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">1.5 months free</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">★★★★☆</td>
                      </tr>
                      <tr className="bg-[#F9F8F4]">
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">One City Center</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">2018</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">139</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">$2,695</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">95%</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">1 month free</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">★★★★★</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">511 Faye</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">2023</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">196</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">$2,350</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">87%</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">2 months free</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">★★★★☆</td>
                      </tr>
                      <tr className="bg-[#F9F8F4]">
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Cortland Bull City</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">2019</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">305</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">$2,150</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">91%</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">1 month free</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">★★★★☆</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Berkshire Ninth Street</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">2015</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">303</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">$1,995</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">94%</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">1.5 months free</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">★★★☆☆</td>
                      </tr>
                      <tr className="bg-[#F9F8F4]">
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Beckon Apartments</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">2022</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">176</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">$2,095</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">89%</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">1.5 months free</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">★★★★☆</td>
                      </tr>
                      <tr className="bg-[#E8DFC0]">
                        <td className="px-4 py-3 text-sm font-medium text-[#CAB06B]">The Novus (Target)</td>
                        <td className="px-4 py-3 text-sm text-[#CAB06B]">2025</td>
                        <td className="px-4 py-3 text-sm text-[#CAB06B]">188</td>
                        <td className="px-4 py-3 text-sm text-[#CAB06B]">$3,150</td>
                        <td className="px-4 py-3 text-sm text-[#CAB06B]">Lease-up</td>
                        <td className="px-4 py-3 text-sm text-[#CAB06B]">1.5-2 months</td>
                        <td className="px-4 py-3 text-sm text-[#CAB06B]">★★★★★</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* New Detailed Comparison Table */}
                <h3 className={`${headingFont.className} text-xl uppercase tracking-wide text-[#333333] mb-6`}>
                  Detailed Property Comparison
                </h3>
                
                <p className={`${bodyFont.className} text-[#666666] leading-relaxed mb-6`}>
                  The following side-by-side comparison highlights key differentiators between The Novus and its primary competitors, focusing on building attributes, amenities, finishes, and leasing incentives.
                </p>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-[#E5E2D9] rounded-sm">
                    <thead>
                      <tr className="bg-[#F9F8F4] border-b border-[#E5E2D9]">
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Feature</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider bg-[#F5F5E6]">The Novus</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Van Alen</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Atlas</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Cortland Bull City</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Foster on the Park</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E2D9]">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Building Height</td>
                        <td className="px-4 py-3 text-sm font-bold text-[#CAB06B] bg-[#F9F8F4]">27 stories</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">6 stories</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">22 stories</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">5 stories</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">7 stories</td>
                      </tr>
                      
                      <tr className="bg-[#F9F8F4]">
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Pool</td>
                        <td className="px-4 py-3 text-sm font-bold text-[#CAB06B] bg-[#F5F5E6]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Rooftop infinity pool with city views
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Saltwater pool
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Rooftop pool
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Resort-style pool
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Courtyard pool
                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Fitness Center</td>
                        <td className="px-4 py-3 text-sm font-bold text-[#CAB06B] bg-[#F9F8F4]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> 3,500 sq ft center with Peloton bikes & yoga studio
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Standard fitness center
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Premium fitness center
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> 24-hour fitness center
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Basic gym equipment
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="bg-[#F9F8F4]">
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Pet Amenities</td>
                        <td className="px-4 py-3 text-sm font-bold text-[#CAB06B] bg-[#F5F5E6]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Dog park, wash station, 24/7 walking service
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Dog wash only
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Pet spa & walking area
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Dog park & wash station
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex items-center">
                            <span className="mr-1">✓</span> Pet relief area
                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Unit Finishes</td>
                        <td className="px-4 py-3 text-sm font-bold text-[#CAB06B] bg-[#F9F8F4]">
                          <div className="flex flex-col">
                            <span>• Quartz countertops</span>
                            <span>• Italian tile backsplashes</span>
                            <span>• High-end appliance package</span>
                            <span>• Engineered hardwood floors</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex flex-col">
                            <span>• Quartz countertops</span>
                            <span>• Ceramic tile backsplashes</span>
                            <span>• Stainless appliances</span>
                            <span>• Vinyl plank flooring</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex flex-col">
                            <span>• Granite countertops</span>
                            <span>• Tile backsplashes</span>
                            <span>• High-end appliances</span>
                            <span>• Hardwood floors</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex flex-col">
                            <span>• Quartz countertops</span>
                            <span>• Subway tile backsplashes</span>
                            <span>• Stainless appliances</span>
                            <span>• Vinyl plank flooring</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex flex-col">
                            <span>• Granite countertops</span>
                            <span>• Ceramic tile backsplashes</span>
                            <span>• Standard appliances</span>
                            <span>• Carpet/vinyl flooring</span>
                          </div>
                        </td>
                      </tr>
                      
                      <tr className="bg-[#F9F8F4]">
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Monthly Price Range (1BR)</td>
                        <td className="px-4 py-3 text-sm font-bold text-[#CAB06B] bg-[#F5F5E6]">$2,795-3,450</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">$2,295-2,695</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">$2,550-3,050</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">$1,995-2,350</td>
                        <td className="px-4 py-3 text-sm text-[#666666]">$2,195-2,450</td>
                      </tr>
                      
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Leasing Incentives</td>
                        <td className="px-4 py-3 text-sm font-bold text-[#CAB06B] bg-[#F9F8F4]">
                          <div className="flex flex-col">
                            <span>• 2 months free on 14+ month leases</span>
                            <span>• $1,500 move-in credit</span>
                            <span>• Waived admin & app fees</span>
                            <span>• Free reserved parking (1st year)</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex flex-col">
                            <span>• 1.5 months free</span>
                            <span>• $750 move-in credit</span>
                            <span>• Reduced admin fee</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex flex-col">
                            <span>• 1 month free</span>
                            <span>• Waived application fee</span>
                            <span>• Reduced parking rate</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex flex-col">
                            <span>• 1 month free</span>
                            <span>• $500 gift card</span>
                            <span>• Waived admin fee</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#666666]">
                          <div className="flex flex-col">
                            <span>• 6 weeks free</span>
                            <span>• $250 gift card</span>
                            <span>• Reduced security deposit</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className={`${headingFont.className} text-lg text-[#333333] mb-4`}>Key Matrix Insights</h4>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                    <span className={`${bodyFont.className} text-[#666666]`}>The Downtown Durham submarket shows solid occupancy rates (91-95%) despite recent rent moderation and new inventory.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                    <span className={`${bodyFont.className} text-[#666666]`}>Concession trends show most properties offering 1-2 months free, with newer properties providing higher incentives to drive lease-up velocity.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                    <span className={`${bodyFont.className} text-[#666666]`}>The Novus's target rents position the property at a premium in the market, justified by its unique high-rise format, unmatched views, and superior amenities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                    <span className={`${bodyFont.className} text-[#666666]`}>Only One City Center offers a comparable high-rise living experience, indicating opportunity for The Novus to establish distinctive positioning through its taller format (27 stories), enhanced technology, and premium services.</span>
                  </li>
                </ul>
                
                <div className="border-t-2 border-[#E5E2D9] pt-8 mb-8">
                  <h3 className={`${headingFont.className} text-xl uppercase tracking-wide text-[#333333] mb-6`}>
                    Detailed Competitor Analyses
                  </h3>
                  
                  <p className={`${bodyFont.className} text-[#666666] leading-relaxed mb-8`}>
                    The following analyses provide property-specific insights for the primary competitors in The Novus's competitive set, with recommendations for strategic positioning and competitive response.
                  </p>
                </div>
                
                {/* Altura Analysis */}
                <div className="bg-white border border-[#E5E2D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F9F8F4] rounded-full flex items-center justify-center">
                      <span className="text-[#CAB06B] font-semibold">1</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>Van Alen</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#666666]">615 S Buchanan Blvd, Durham, NC</p>
                      <p className="text-sm text-[#666666]">Built 2021 • 418 units</p>
                      <p className="text-sm text-[#666666]">0.7 miles from The Novus</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#666666]">Studio: $1,895-2,250</p>
                      <p className="text-sm text-[#666666]">1BR: $2,295-2,695</p>
                      <p className="text-sm text-[#666666]">2BR: $2,995-3,850</p>
                      <p className="text-sm text-[#666666]">93% occupied • 1.5 months free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#666666]">Median Age: 32</p>
                      <p className="text-sm text-[#666666]">Income: $105K-135K</p>
                      <p className="text-sm text-[#666666]">45% work from home</p>
                      <p className="text-sm text-[#666666]">58% single professionals</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Urban sanctuary concept with sophisticated design and private courtyards</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Excellent proximity to Duke University and Medical Center</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Strong sustainability focus with LEED certification and wellness amenities</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">No true high-rise views despite premium positioning</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Limited technology integration in units and amenity spaces</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Inconsistent staff service and response times (38% of negative reviews)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#F9F8F4] p-4 rounded-sm border border-[#E5E2D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Position The Novus's high-rise format as offering truly premium views unavailable at Van Alen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Emphasize The Novus's superior technology integration and smart home features</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Develop a high-touch service model with quick response guarantees and feedback tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* The Stewart Analysis */}
                <div className="bg-white border border-[#E5E2D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F9F8F4] rounded-full flex items-center justify-center">
                      <span className="text-[#CAB06B] font-semibold">2</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>One City Center</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#666666]">110 Corcoran St, Durham, NC</p>
                      <p className="text-sm text-[#666666]">Built 2018 • 139 units</p>
                      <p className="text-sm text-[#666666]">0.3 miles from The Novus</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#666666]">Studio: $2,195-2,595</p>
                      <p className="text-sm text-[#666666]">1BR: $2,550-3,050</p>
                      <p className="text-sm text-[#666666]">2BR: $3,395-4,850</p>
                      <p className="text-sm text-[#666666]">95% occupied • 1 month free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#666666]">Median Age: 39</p>
                      <p className="text-sm text-[#666666]">Income: $125K-175K</p>
                      <p className="text-sm text-[#666666]">40% work from home</p>
                      <p className="text-sm text-[#666666]">45% couples, 55% singles</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">High-rise format with excellent city views and rooftop pool and lounge</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Prime central location with walkability to shops, restaurants, and DPAC</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Mixed-use building with ground floor retail and premium resident services</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Significantly shorter building height (22 stories) with fewer premium view units</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Limited technology integration in units and outdated resident app</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Expensive parking with limited visitor options and difficult weekend access</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#F9F8F4] p-4 rounded-sm border border-[#E5E2D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Emphasize The Novus's superior height (27 vs. 22 stories) offering more premium view units</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Highlight advanced technology integration in units with comprehensive smart home features</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Develop superior parking solution with dedicated, accessible visitor parking and valet options</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* 511 Faye Analysis */}
                <div className="bg-white border border-[#E5E2D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F9F8F4] rounded-full flex items-center justify-center">
                      <span className="text-[#CAB06B] font-semibold">3</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>511 Faye</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#666666]">511 Fayetteville St, Durham, NC</p>
                      <p className="text-sm text-[#666666]">Built 2023 • 196 units</p>
                      <p className="text-sm text-[#666666]">0.5 miles from The Novus</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#666666]">Studio: $1,795-2,150</p>
                      <p className="text-sm text-[#666666]">1BR: $2,195-2,550</p>
                      <p className="text-sm text-[#666666]">2BR: $2,850-3,450</p>
                      <p className="text-sm text-[#666666]">87% occupied • 2 months free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#666666]">Median Age: 31</p>
                      <p className="text-sm text-[#666666]">Income: $95K-135K</p>
                      <p className="text-sm text-[#666666]">50% work from home</p>
                      <p className="text-sm text-[#666666]">65% singles, 35% couples</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">High-rise format (15 stories) with modern design and downtown views</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Newest property in competition set with modern finishes and amenities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Excellent remote work amenities with private pods and conference spaces</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Low occupancy with aggressive concessions despite recent completion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Inconsistent resident services with no true concierge model</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Limited outdoor amenity spaces with small pool deck and gathering areas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#F9F8F4] p-4 rounded-sm border border-[#E5E2D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Position The Novus's significantly taller format (27 vs. 15 stories) with superior views</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Develop premium concierge service model with dedicated staff and service guarantees</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Create larger, more diverse outdoor amenity spaces with multiple activity zones</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Linear Analysis */}
                <div className="bg-white border border-[#E5E2D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F9F8F4] rounded-full flex items-center justify-center">
                      <span className="text-[#CAB06B] font-semibold">4</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>Cortland Bull City</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#666666]">125 W Main St, Durham, NC</p>
                      <p className="text-sm text-[#666666]">Built 2021 • 220 units</p>
                      <p className="text-sm text-[#666666]">0.5 miles from The Novus</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#666666]">Studio: $1,750-2,050</p>
                      <p className="text-sm text-[#666666]">1BR: $1,995-2,350</p>
                      <p className="text-sm text-[#666666]">2BR: $2,450-2,950</p>
                      <p className="text-sm text-[#666666]">91% occupied • 1 month free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#666666]">Median Age: 34</p>
                      <p className="text-sm text-[#666666]">Income: $90K-120K</p>
                      <p className="text-sm text-[#666666]">42% work from home</p>
                      <p className="text-sm text-[#666666]">60% singles, 35% couples</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Modern tech integration with smart home features in all units</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Excellent co-working spaces with private conference rooms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Design-forward interiors with custom finishes and lighting</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Limited amenity variety compared to newer properties</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Limited outdoor amenity spaces with undersized pool area</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Resident complaints about management responsiveness</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#F9F8F4] p-4 rounded-sm border border-[#E5E2D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Match or exceed technology offerings while emphasizing superior service model</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Develop significantly larger outdoor amenity spaces with multiple activity zones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Position in similar design-forward aesthetic with enhanced emphasis on quality</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* ILuminate Analysis */}
                <div className="bg-white border border-[#E5E2D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F9F8F4] rounded-full flex items-center justify-center">
                      <span className="text-[#CAB06B] font-semibold">5</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>Berkshire Ninth Street</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#666666]">510 N Mangum St, Durham, NC</p>
                      <p className="text-sm text-[#666666]">Built 2022 • 179 units</p>
                      <p className="text-sm text-[#666666]">0.6 miles from The Novus</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#666666]">Studio: $1,875-2,095</p>
                      <p className="text-sm text-[#666666]">1BR: $2,195-2,450</p>
                      <p className="text-sm text-[#666666]">2BR: $2,695-3,250</p>
                      <p className="text-sm text-[#666666]">81% occupied • 8 weeks free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#666666]">Median Age: 31</p>
                      <p className="text-sm text-[#666666]">Income: $85K-115K</p>
                      <p className="text-sm text-[#666666]">48% work from home</p>
                      <p className="text-sm text-[#666666]">62% singles, 28% couples</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Newest property in the Five Points District with modern finishes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Innovative community programming with local business partnerships</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Wellness-focused amenities including meditation spaces and yoga studio</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Struggling with lease-up velocity despite heavy concessions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Limited unit sizes with most floorplans under 850 sq ft</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Resident complaints about street noise (poor sound insulation)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#F9F8F4] p-4 rounded-sm border border-[#E5E2D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Emphasize The Novus's superior sound insulation technology as a key differentiator</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Highlight larger unit sizes and thoughtful layouts for work-from-home functionality</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Match wellness offerings while expanding with additional premium amenities</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Moontower Analysis */}
                <div className="bg-white border border-[#E5E2D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F9F8F4] rounded-full flex items-center justify-center">
                      <span className="text-[#CAB06B] font-semibold">6</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>Beckon Apartments</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#666666]">220 W Durham Blvd, Durham, NC</p>
                      <p className="text-sm text-[#666666]">Built 2020 • 278 units</p>
                      <p className="text-sm text-[#666666]">0.8 miles from The Novus</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#666666]">Studio: $1,795-2,025</p>
                      <p className="text-sm text-[#666666]">1BR: $2,095-2,425</p>
                      <p className="text-sm text-[#666666]">2BR: $2,650-3,250</p>
                      <p className="text-sm text-[#666666]">89% occupied • 4 weeks free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#666666]">Median Age: 34</p>
                      <p className="text-sm text-[#666666]">Income: $90K-120K</p>
                      <p className="text-sm text-[#666666]">42% work from home</p>
                      <p className="text-sm text-[#666666]">58% singles, 32% couples</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Exceptional pool deck with resort-style cabanas and fire features</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Strong pet amenities including dog park, wash station, and walking service</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Tech-forward building with app-controlled access and smart thermostats</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Kitchen finishes less premium than competing properties</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Limited bike storage despite high cyclist resident population</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#666666]">Fitness center equipment frequently out of service/maintenance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#F9F8F4] p-4 rounded-sm border border-[#E5E2D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Develop superior kitchen package with chef-inspired finishes and appliances</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Create expanded pet amenities package with premium services and facilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#666666]">Design expanded bicycle storage and maintenance facilities to appeal to urban cyclists</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm mt-8">
                  <h4 className={`${headingFont.className} text-lg text-[#333333] mb-4`}>Competitive Landscape Summary</h4>
                  
                  <p className={`${bodyFont.className} text-[#666666] mb-4`}>
                    Our competitive analysis reveals significant opportunity for The Novus to establish a unique market position through:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Unmatched high-rise format</span> - Leveraging The Novus's 27-story height to provide truly premium views unavailable at competitors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Enhanced remote work spaces</span> - Capitalizing on the 40-50% of residents working from home at competitive properties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Comprehensive smart home technology</span> - Integrating advanced automation and connectivity lacking in competitor offerings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Premium service model</span> - Establishing a high-touch concierge approach with service guarantees and tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                      <span className={`${bodyFont.className} text-[#666666]`}><span className="font-medium">Vertical neighborhood concept</span> - Creating a unique mixed-use environment with 22,000+ sq ft of ground floor retail and stratified amenities</span>
                    </li>
                  </ul>
                  
                  <p className={`${bodyFont.className} text-[#666666] mt-4`}>
                    By implementing these strategic differentiators, The Novus can command the premium position in the Durham market while achieving accelerated lease-up velocity relative to comparable new deliveries.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
