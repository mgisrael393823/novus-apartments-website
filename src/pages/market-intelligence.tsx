import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { BarChart, LineChart, PieChart, TrendingUp } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { StatBox } from "@/components/ui/StatBox";
import { IncomeDistributionChart } from "@/components/ui/IncomeDistributionChart";
import { RentGrowthChart } from "@/components/ui/RentGrowthChart";
import { Montserrat } from "next/font/google";
import { GatedChart } from "@/components/ui/GatedChart";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function MarketIntelligence() {
  return (
    <>
      <Head>
        <title>Market Intelligence | The Novus</title>
        <meta name="description" content="Market Intelligence for The Novus Apartments Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="w-full max-w-4xl mx-auto">
          <Heading level={1}>Market Intelligence</Heading>
          
          <HighlightBox>
            <p className="body-text-lg">
              The Durham multifamily rental market is experiencing a period of adjustment characterized by moderating rents, elevated construction activity, and shifting supply-demand dynamics. The Novus is poised to enter this market as a premier downtown residential option in the vibrant Five Points District.
            </p>
          </HighlightBox>
          
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-[#E5E2D9] rounded-md p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#F9F8F4] flex items-center justify-center mr-3">
                  <TrendingUp className="text-[#CAB06B]" size={18} />
                </div>
                <h3 className="text-lg font-semibold">Vacancy Rate</h3>
              </div>
              <p className="text-2xl font-bold text-[#CAB06B] mb-2">~7%</p>
              <p className="text-sm text-[#666666]">Decreasing year-over-year, reflecting strong market demand</p>
            </div>
            
            <div className="bg-white border border-[#E5E2D9] rounded-md p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#F9F8F4] flex items-center justify-center mr-3">
                  <LineChart className="text-[#CAB06B]" size={18} />
                </div>
                <h3 className="text-lg font-semibold">Absorption Rate</h3>
              </div>
              <p className="text-2xl font-bold text-[#CAB06B] mb-2">25 units/month</p>
              <p className="text-sm text-[#666666]">Average leasing velocity in Downtown Durham</p>
            </div>
            
            <div className="bg-white border border-[#E5E2D9] rounded-md p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#F9F8F4] flex items-center justify-center mr-3">
                  <BarChart className="text-[#CAB06B]" size={18} />
                </div>
                <h3 className="text-lg font-semibold">Key Demographics</h3>
              </div>
              <p className="text-2xl font-bold text-[#CAB06B] mb-2">$80k-$120k</p>
              <p className="text-sm text-[#666666]">Median renter income, primarily tech professionals and university affiliates</p>
            </div>
            
            <div className="bg-white border border-[#E5E2D9] rounded-md p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#F9F8F4] flex items-center justify-center mr-3">
                  <PieChart className="text-[#CAB06B]" size={18} />
                </div>
                <h3 className="text-lg font-semibold">Pipeline Projects</h3>
              </div>
              <p className="text-2xl font-bold text-[#CAB06B] mb-2">450 units</p>
              <p className="text-sm text-[#666666]">New units expected within 18 months, potentially impacting market dynamics</p>
            </div>
          </div>
          
          <div className="space-y-10">
            <section className="section">
              <Heading level={2} className="mb-5">Market Overview</Heading>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <StatBox
                  label="Metro Occupancy"
                  value="94.0%"
                  description="-1.5% Year-over-Year"
                />
                
                <StatBox
                  label="Avg. 1BR Rent"
                  value="$1,290"
                  description="-12.8% Year-over-Year"
                />
                
                <StatBox
                  label="Recent Absorption"
                  value="5,416 Units"
                  description="Q4 2024 Metro Area"
                />
              </div>
              
              <div className="content-box-light mb-6">
                <Heading level={3} className="mb-3">Key Market Insights</Heading>
                <p className="body-text mb-4">
                  The Durham multifamily market is experiencing a period of adjustment with moderating rents creating a "renter's market" with increased price sensitivity. Despite this, occupancy remains relatively healthy with strong absorption numbers.
                </p>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Vacancy rates approximately 6% metro-wide, expected to stabilize in late 2025</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Average asking rent in Raleigh-Durham: $1,520 (-3.1% year-over-year)</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Downtown Durham shows stronger absorption due to employment growth and urban lifestyle preferences</span>
                  </li>
                </ul>
              </div>
              
              <div className="content-box mb-8">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                  <LineChart className="text-[#666666]" size={24} />
                  <Heading level={3} className="mb-0">Rent Growth Trends</Heading>
                </div>
                <GatedChart 
                  title="Rent Growth Trends" 
                  description="Access detailed quarterly rent growth data for Durham and comparative markets"
                >
                  <RentGrowthChart height="h-56 md:h-64" />
                </GatedChart>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Demographic Analysis</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Primary Demographic</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Urban professionals (25-40)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Income range: $85,000-$150,000</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Tech, healthcare, and education sectors</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Value lifestyle, convenience, and social opportunities</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Secondary Demographic</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Empty nesters/downsizers (55+)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Income range: $120,000+</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Seeking lock-and-leave luxury living</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Prioritize security, concierge, and quality finishes</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="content-box mb-8">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                  <BarChart className="text-[#666666]" size={24} />
                  <Heading level={3} className="mb-0">Income Distribution</Heading>
                </div>
                <GatedChart 
                  title="Income Distribution Analysis" 
                  description="Access comprehensive income distribution data for Durham target renter segments"
                >
                  <IncomeDistributionChart height="h-56 md:h-64" />
                </GatedChart>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Supply Analysis</Heading>
              
              <HighlightBox variant="secondary" className="mb-6">
                <Heading level={3} className="mb-2">Pipeline Overview</Heading>
                <p className="body-text">
                  The Raleigh-Durham market has seen record deliveries with 12,002 units completed in 2024 and an additional 20,272 units under construction. The Novus represents one of the few true high-rise luxury developments in downtown Durham.
                </p>
              </HighlightBox>
              
              <div className="mb-8 overflow-x-auto w-full -mx-4 px-4 md:mx-0 md:px-0">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#F9F8F4]">
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Project</th>
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Units</th>
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Delivery</th>
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Distance</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-[#E5E2D9] px-4 py-3 font-medium">Van Alen</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">418</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">Existing</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">0.7 miles</td>
                    </tr>
                    <tr className="bg-[#F9F8F4]">
                      <td className="border border-[#E5E2D9] px-4 py-3 font-medium">One City Center</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">139</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">Existing</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">0.3 miles</td>
                    </tr>
                    <tr>
                      <td className="border border-[#E5E2D9] px-4 py-3 font-medium">511 Faye</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">196</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">Q3 2024</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">0.5 miles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Demand Drivers</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="content-box-light">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                    <TrendingUp className="text-[#666666]" size={20} />
                    <Heading level={3} className="mb-0">Employment Growth</Heading>
                  </div>
                  <p className="body-text mb-3">
                    Durham shows solid employment growth with total nonfarm employment at 356,100 (March 2025) and year-over-year growth of +1.8%, adding 6,400 jobs.
                  </p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Education and health services leading growth (+5.9% YoY)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Professional and business services growing steadily (+2.1% YoY)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Duke University and healthcare system providing stable employment base</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                    <PieChart className="text-[#666666]" size={20} />
                    <Heading level={3} className="mb-0">Lifestyle Amenities</Heading>
                  </div>
                  <p className="body-text mb-3">
                    Downtown Durham offers a vibrant urban lifestyle with walkability to dining, entertainment, and cultural amenities that appeal to target demographics.
                  </p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Vibrant downtown dining scene and growing retail presence</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Proximity to performing arts venues, museums, and galleries</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Regular community events and festivals in the Five Points District</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}