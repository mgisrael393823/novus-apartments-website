import React, { useState } from "react";
import { TimelinePhase } from "@/components/ui/Timeline";
import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "@/components/Layout/Layout";
import { Heading, SectionTitle, Paragraph, Text } from "@/components/ui/Typography";
import { Container, ContentBox } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StatBox } from "@/components/ui/StatBox";
import { StatDisplay } from "@/components/ui/StatDisplay";
import { Grid, CardGrid } from "@/components/ui/Grid";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { AbsorptionChart } from "@/components/ui/AbsorptionChart";
import { Timeline } from "@/components/ui/Timeline";
import { ComparisonTable } from "@/components/ui/DataTable";
import { CollapsibleCard } from "@/components/ui/CollapsibleCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
// Remove CountUp import since we're not using it anymore
import { 
  BarChart, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Activity, 
  Calendar, 
  Clock, 
  CheckCircle2,
  DollarSign,
  Building,
  MapPin,
  Users,
  CalendarDays,
  Columns,
  LineChart,
  Target,
  BarChart2,
  BarChart3
} from "lucide-react";

export default function ExecutiveSummary() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Data for absorption chart
  const absorptionData = [
    { name: "Studio Units", percentage: 85, color: "#CAB06B" },
    { name: "1BR Units", percentage: 78, color: "#CAB06B" },
    { name: "2BR Units", percentage: 65, color: "#CAB06B" },
    { name: "PA2 Units", percentage: 52, color: "#CAB06B" }
  ];

  const financialMetrics = [
    { label: "90-Day Revenue", value: "$1.2M" },
    { label: "180-Day Revenue", value: "$2.6M" },
    { label: "270-Day Revenue", value: "$4.1M" }
  ];

  const chartAnnotations = [
    "Standard projections show 12 month stabilization period with traditional approach",
    "Proprietary strategy projects 9–9.5 month stabilization with our recommended approach",
    "Studio and 1BR configurations projected to absorb 35% faster than larger unit types"
  ];

  // Data for timeline
  const implementationPhases: TimelinePhase[] = [
    {
      title: "PRE-LAUNCH PHASE",
      subtitle: "Building foundations for a successful launch",
      timeframe: "6 months pre-opening",
      status: "completed",
      accentColor: "#60A561",
      icon: <Calendar className="h-5 w-5 text-white" />,
      items: [
        "Establish premium brand identity across all touchpoints",
        "Launch digital presence with distinctive content strategy",
        "Develop strategic local partnerships for resident benefits",
        "Design pre-leasing incentive structure with early-bird benefits"
      ]
    },
    {
      title: "LAUNCH PHASE",
      subtitle: "Maximizing initial interest and momentum",
      timeframe: "Opening to 6 months",
      status: "in-progress",
      accentColor: "#CAB06B",
      icon: <Clock className="h-5 w-5 text-white" />,
      items: [
        "Implement premium service model with hospitality-trained staff",
        "Execute high-visibility marketing campaign with digital focus",
        "Launch signature community events and programming",
        "Activate artist residency program with public installations"
      ]
    },
    {
      title: "STABILIZATION PHASE",
      subtitle: "Optimizing for long-term success",
      timeframe: "6-12 months post-opening",
      status: "pending",
      accentColor: "#A67BC2",
      icon: <CheckCircle2 className="h-5 w-5 text-white" />,
      items: [
        "Transition to targeted marketing for remaining unit types",
        "Optimize pricing strategy based on absorption analytics",
        "Implement resident retention program with loyalty benefits",
        "Initiate premium service add-ons for ancillary revenue"
      ]
    }
  ];

  // Data for financial comparison table
  const financialComparisonData = [
    {
      label: "Stabilization Timeline",
      valueA: "12.5 months",
      valueB: "9-9.5 months",
      improvement: "~25% faster",
      isPositive: true
    },
    {
      label: "Concession Value",
      valueA: "6-8 weeks free",
      valueB: "4-6 weeks free",
      improvement: "~30% savings",
      isPositive: true
    },
    {
      label: "Year 1 Revenue",
      valueA: "$14.2M",
      valueB: "$16.8M",
      improvement: "+$2.6M (+18.3%)",
      isPositive: true
    },
    {
      label: "Renewal Rate",
      valueA: "55-60%",
      valueB: "70-75%",
      improvement: "+15% higher",
      isPositive: true
    }
  ];

  return (
    <>
      <Head>
        <title>Executive Summary | The Novus</title>
        <meta name="description" content="Executive Summary of The Novus Apartments Lease-Up Strategy" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.png" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="THE NOVUS | THE BLUEPRINT - Executive Summary" />
        <meta property="og:description" content="Executive Summary of The Novus Apartments Lease-Up Strategy" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="The Novus with 'THE BLUEPRINT' spray painted in gold over a dark background" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="THE NOVUS | THE BLUEPRINT - Executive Summary" />
        <meta name="twitter:description" content="Executive Summary of The Novus Apartments Lease-Up Strategy" />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      
      <Layout>
        <motion.div 
          className="w-full max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={pageVariants}
        >
          {/* Page Header */}
          <Container size="wide">
            <motion.div 
              className="mb-16"
              variants={sectionVariants}
            >
              <motion.div 
                className="mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <SectionTitle>STRATEGIC BLUEPRINT</SectionTitle>
                <div className="h-0.5 w-32 bg-novus-gold mt-1"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Heading level={1} className="text-4xl font-bold mb-16 tracking-tight">Executive Summary</Heading>
              </motion.div>
            </motion.div>
            
            {/* Introduction Section */}
            <Section>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <ContentBox variant="highlight-accent">
                  <Text 
                    variant="body-lg" 
                    color="primary" 
                    className="leading-relaxed" 
                    wrap="pretty"
                  >
                    The Novus is poised to enter the Downtown Durham multifamily market at a pivotal time. Located in the vibrant Five Points District at 115 Morris St, this 27-story development with 188 rental apartments and over 22,000 square feet of ground floor retail will be competing in a market characterized by moderating rents, elevated construction activity, and strong but uneven absorption.
                  </Text>
                  
                  <Paragraph className="mt-4" wrap="pretty">
                    This executive summary provides an overview of the complete strategic blueprint. Navigate through the sections on the left to explore detailed market intelligence, competitive analysis, and our recommended strategies for The Novus's successful lease-up.
                  </Paragraph>
                </ContentBox>
              </motion.div>
            </Section>
          </Container>
          
          {/* Key Metrics Section */}
          <Container size="wide">
            <Section 
              title="Project Overview" 
              subtitle="Key performance indicators and project details for The Novus"
              divider={true}
              className="mb-16"
            >
              <div className="mb-12 flex items-center">
                <Activity size={22} className="text-novus-gold mr-2" />
                <Heading level={3} className="font-bold text-2xl tracking-wider">KEY METRICS</Heading>
              </div>
              
              <Grid columns={4} gap="md" className="mb-8">
                <StatDisplay
                  label="Projected Lease-Up"
                  value="12 mo"
                  description="To stabilization"
                  tooltip="12 mo. projection based on standard generic approach. Our strategy projects 9-9.5 months with recommended approach."
                  variant="accent"
                  icon={<Calendar />}
                  animate
                />
                
                <StatDisplay
                  label="Competitive Rents"
                  value="15%"
                  description="Premium to market"
                  tooltip="The Novus commands a premium rental rate that reflects its superior height, views, and luxury finishes compared to downtown competitors."
                  variant="default"
                  icon={<DollarSign />}
                  animate
                />
                
                <StatDisplay
                  label="Concessions"
                  value="1.5-2 mo"
                  description="During lease-up"
                  tooltip="Strategic concession structure follows market standards while offering unique value-adds to drive absorption."
                  variant="default"
                  icon={<BarChart3 />}
                  animate
                />
                
                <StatDisplay
                  label="Height Advantage"
                  value="27 stories"
                  description="Tallest in downtown"
                  tooltip="Unique positioning as downtown Durham's tallest residential building, offering unmatched views and premium living experience."
                  variant="highlight"
                  icon={<Building />}
                  animate
                />
              </Grid>
              
              <Grid columns={3} gap="sm" className="mb-12">
                <StatDisplay
                  label="Location"
                  value="Five Points District"
                  description="115 Morris St, Durham"
                  variant="outline"
                  icon={<MapPin />}
                  size="sm"
                />
                
                <StatDisplay
                  label="Unit Mix"
                  value="188 Units"
                  description="Studio to 2-bedroom units"
                  variant="outline"
                  icon={<Users />}
                  size="sm"
                />
                
                <StatDisplay
                  label="Delivery"
                  value="Q2 2025"
                  description="$2,150 to $8,732 rates"
                  variant="outline"
                  icon={<CalendarDays />}
                  size="sm"
                />
              </Grid>
              
              {/* Absorption Forecast Chart */}
              <AbsorptionChart
                title="Absorption Forecast"
                description="Projected lease-up velocity by floor plan type with detailed financial modeling"
                data={absorptionData}
                financialMetrics={financialMetrics}
                annotations={chartAnnotations}
                className="mt-8"
              />
            </Section>
          </Container>
          
          {/* Market Opportunity Section */}
          <Container size="wide">
            <Section 
              title="Market Opportunity Overview" 
              subtitle="Strategic opportunities for The Novus in Downtown Durham's multifamily market"
              divider={true}
              className="mb-16"
            >
              <div className="mb-12 flex items-center">
                <LineChart size={22} className="text-novus-gold mr-2" />
                <Heading level={3} className="font-bold text-2xl tracking-wider">MARKET INSIGHTS</Heading>
              </div>
            {/* Comprehensive Market Opportunity Analysis */}
            <motion.div 
              className="p-8 bg-white border border-[#E5E2D9] rounded-md shadow-sm relative overflow-hidden mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#CAB06B] opacity-5"></div>
              
              <div className="mb-4">
                <Heading level={3} className="uppercase tracking-wide flex items-center font-bold text-2xl mb-6">
                  <ArrowRight className="h-5 w-5 mr-2 text-novus-gold" />
                  COMPREHENSIVE OPPORTUNITY ANALYSIS
                </Heading>
              </div>
              
              <Paragraph className="leading-relaxed max-w-3xl mb-6">
                Our detailed market opportunity analysis examines current market dynamics, projected absorption rates, and target demographic profiles to identify key areas of competitive advantage.
              </Paragraph>
              
              <div className="mb-6">
                <Heading level={4} className="text-lg uppercase tracking-wide mb-6 font-bold">KEY MARKET INSIGHTS</Heading>
                <ul className="space-y-4">
                  {[
                    "The Durham multifamily market is experiencing a period of adjustment with moderating rents (-12.8% year-over-year for one-bedrooms) and elevated construction activity.",
                    "Developers delivered 12,002 units in Raleigh-Durham in 2024 (a decade high) with an additional 20,272 units under construction as of January 2025.",
                    "The Downtown Durham submarket, particularly Five Points District, offers stronger absorption potential due to its walkability and urban amenities.",
                    "The Novus's distinctive high-rise format (27 stories) provides significant differentiation in a market with limited high-rise luxury inventory.",
                    "Target demographic analysis reveals three high-potential segments: Urban Professionals (25-40, income range), Empty Nesters/Downsizers (55+), and Remote Workers seeking work-from-home friendly environments."
                  ].map((insight, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
                    >
                      <span className="text-[#CAB06B] mr-3 text-xl flex-shrink-0">•</span>
                      <span className="text-[#555555] text-base">{insight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div 
                className="p-6 bg-[#F9F8F4] border border-[#E5E2D9] rounded-md shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Heading level={4} className="text-lg uppercase mb-6 font-bold tracking-wide">CURRENT MARKET CONCESSIONS</Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="p-4 bg-white rounded-md border border-[#E5E2D9] hover:shadow-md transition-shadow">
                    <Text variant="body" className="font-bold text-[#333333] mb-2">Downtown Durham</Text>
                    <ul className="space-y-2 ml-1">
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-lg flex-shrink-0">•</span>
                        <Text variant="body" className="text-[#555555]">1-2 months free on 12-month leases</Text>
                      </li>
                      <li>
                        <Text variant="caption" className="text-[#666666] ml-6">Avg. effective discount: 8-16%</Text>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded-md border border-[#E5E2D9] hover:shadow-md transition-shadow">
                    <Text variant="body" className="font-bold text-[#333333] mb-2">Five Points District</Text>
                    <ul className="space-y-2 ml-1">
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-lg flex-shrink-0">•</span>
                        <Text variant="body" className="text-[#555555]">Up to 1.5 months free on 12+ month leases</Text>
                      </li>
                      <li>
                        <Text variant="caption" className="text-[#666666] ml-6">Avg. effective discount: 8-12%</Text>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded-md border border-[#E5E2D9] hover:shadow-md transition-shadow">
                    <Text variant="body" className="font-bold text-[#333333] mb-2">Ninth Street Area</Text>
                    <ul className="space-y-2 ml-1">
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-lg flex-shrink-0">•</span>
                        <Text variant="body" className="text-[#555555]">Up to $1,000 off select units + gift cards</Text>
                      </li>
                      <li>
                        <Text variant="caption" className="text-[#666666] ml-6">Avg. effective discount: 6-10%</Text>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Section>
          
          {/* Market Position Analysis Section */}
          <Section 
            title="Market Position Analysis" 
            badge="COMPETITIVE POSITIONING" 
            divider
            icon={<Target size={24} />}
            subtitle="SWOT analysis identifying The Novus's position within the competitive landscape"
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-l-4 border-l-[#60A561] min-h-[280px] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold uppercase tracking-wider text-[#333333]">STRENGTHS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 ml-1 pl-0">
                    {[
                      "Prime location in the Five Points District with superior walkability",
                      "Tallest residential building (27 stories) offering unmatched views",
                      "Distinctive amenity package including outdoor movie theater and golf simulators"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#CAB06B] mr-3 text-xl flex-shrink-0">•</span>
                        <span className="text-[#555555] text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-[#E5826D] min-h-[280px] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold uppercase tracking-wider text-[#333333]">WEAKNESSES</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 ml-1 pl-0">
                    {[
                      "Entering a market with moderating rents and elevated concessions",
                      "Premium pricing ($2,150-$8,732) in a price-sensitive market",
                      "Unproven property with no established reputation"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#CAB06B] mr-3 text-xl flex-shrink-0">•</span>
                        <span className="text-[#555555] text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-[#CAB06B] min-h-[280px] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold uppercase tracking-wider text-[#333333]">OPPORTUNITIES</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 ml-1 pl-0">
                    {[
                      "Growing demand for remote work-friendly apartments",
                      "Limited true high-rise competition in downtown Durham",
                      "Enhanced technology integration to differentiate from competitors"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#CAB06B] mr-3 text-xl flex-shrink-0">•</span>
                        <span className="text-[#555555] text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-[#A67BC2] min-h-[280px] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold uppercase tracking-wider text-[#333333]">THREATS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 ml-1 pl-0">
                    {[
                      "Aggressive concessions from competitors (up to 2 months free)",
                      "Continued rent moderation affecting luxury rental demand",
                      "Competition from established properties with resident bases"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#CAB06B] mr-3 text-xl flex-shrink-0">•</span>
                        <span className="text-[#555555] text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="p-6 bg-[#F9F8F4] border border-[#E5E2D9] rounded-md shadow-sm mb-16">
              <Text variant="body-lg" className="text-[#666666] italic text-pretty">
                The Novus can leverage its distinctive height advantage and premium amenities to overcome market challenges, targeting the underserved luxury high-rise segment while strategically addressing Durham's market rate moderation through value-focused positioning.
              </Text>
            </div>
            
            {/* Detailed SWOT Analysis as Accordion */}
            <div className="mb-16">
              <Accordion type="single" collapsible className="border border-[#E5E2D9] rounded-md shadow-sm overflow-hidden">
                <AccordionItem value="detailed-swot" className="border-b-0">
                  <AccordionTrigger className="py-4 px-6 hover:bg-[#F9F8F4] group">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-[#F5F5E6] border border-[#CAB06B] flex items-center justify-center mr-3">
                        <ArrowRight className="h-4 w-4 text-[#CAB06B] group-data-[state=open]:rotate-90 transition-transform" />
                      </div>
                      <Heading level={3} className="text-lg font-bold uppercase tracking-wide">
                        Expanded SWOT Analysis & Strategic Insights
                      </Heading>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-2 bg-white">
                    <Paragraph className="leading-relaxed max-w-3xl mb-8">
                      Our comprehensive SWOT analysis includes detailed assessment of all competitive properties, market conditions, and strategic positioning opportunities.
                    </Paragraph>
                    
                    <div className="mb-8">
                      <Heading level={4} className="text-lg uppercase tracking-wide mb-6 font-bold flex items-center">
                        <span className="flex h-6 w-6 rounded-full bg-[#60A561] text-white items-center justify-center mr-3 text-xs font-bold">S</span>
                        STRENGTHS - EXPANDED ANALYSIS
                      </Heading>
                      <div className="bg-[#F9F8F4] border-l-4 border-[#60A561] border-t border-r border-b border-[#E5E2D9] p-5 rounded-md shadow-sm">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <span className="text-[#60A561] mr-3 text-xl flex-shrink-0">•</span>
                            <div>
                              <Text variant="body" className="font-bold">Prime Location: </Text>
                              <Text variant="body" color="secondary" className="inline">The Novus's position in the heart of Five Points District provides exceptional access to Duke University, downtown dining, and cultural venues, with walkability scores 18% higher than competitive set average.</Text>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#60A561] mr-3 text-xl flex-shrink-0">•</span>
                            <div>
                              <Text variant="body" className="font-bold">High-Rise Format: </Text>
                              <Text variant="body" color="secondary" className="inline">As downtown Durham's tallest residential building at 27 stories, The Novus offers unmatched views and a vertical living experience unavailable elsewhere in the market, with true high-rise specifications that differentiate it from mid-rise competitors.</Text>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#60A561] mr-3 text-xl flex-shrink-0">•</span>
                            <div>
                              <Text variant="body" className="font-bold">Premium Amenities: </Text>
                              <Text variant="body" color="secondary" className="inline">Distinctive offerings including an outdoor movie theater, golf simulators, and pickleball court position The Novus at the top tier of the Durham market, complemented by smart home technology and premium concierge services.</Text>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <Heading level={4} className="text-lg uppercase tracking-wide mb-6 font-bold flex items-center">
                        <span className="flex h-6 w-6 rounded-full bg-[#E5826D] text-white items-center justify-center mr-3 text-xs font-bold">W</span>
                        WEAKNESSES - RISK MITIGATION STRATEGIES
                      </Heading>
                      <div className="bg-[#F9F8F4] border-l-4 border-[#E5826D] border-t border-r border-b border-[#E5E2D9] p-5 rounded-md shadow-sm">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <span className="text-[#E5826D] mr-3 text-xl flex-shrink-0">•</span>
                            <div>
                              <Text variant="body" className="font-bold">Market Adjustment: </Text>
                              <Text variant="body" color="secondary" className="inline">Address moderating rents in Durham with value-oriented pre-leasing incentives structured for early signings, targeting 15% pre-leased before opening with enhanced service packages.</Text>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#E5826D] mr-3 text-xl flex-shrink-0">•</span>
                            <div>
                              <Text variant="body" className="font-bold">High-Rise Differentiation: </Text>
                              <Text variant="body" color="secondary" className="inline">Distinguish from competing properties through emphasis on the 27-story format, panoramic views, and exclusive amenities unavailable in other Durham properties.</Text>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#E5826D] mr-3 text-xl flex-shrink-0">•</span>
                            <div>
                              <Text variant="body" className="font-bold">Concession Strategy: </Text>
                              <Text variant="body" color="secondary" className="inline">Create structured concession tiers with 1.5-2 month offerings compared to the market average, supplemented with high-value amenity access and technology packages unique to The Novus.</Text>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                      <div>
                        <Heading level={4} className="text-lg uppercase tracking-wide mb-6 font-bold flex items-center">
                          <span className="flex h-6 w-6 rounded-full bg-[#CAB06B] text-white items-center justify-center mr-3 text-xs font-bold">O</span>
                          OPPORTUNITIES - STRATEGIC APPROACH
                        </Heading>
                        <div className="bg-[#F9F8F4] border-l-4 border-[#CAB06B] border-t border-r border-b border-[#E5E2D9] p-5 rounded-md shadow-sm h-full">
                          <ul className="space-y-4">
                            <li className="flex items-start">
                              <span className="text-[#CAB06B] mr-3 text-xl flex-shrink-0">•</span>
                              <div>
                                <Text variant="body" className="font-bold">Remote Work Hub: </Text>
                                <Text variant="body" color="secondary" className="inline">Capitalize on Duke University and Research Triangle tech sector with specialized coworking spaces, enterprise-grade connectivity, and networking events for remote professionals.</Text>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-[#CAB06B] mr-3 text-xl flex-shrink-0">•</span>
                              <div>
                                <Text variant="body" className="font-bold">Mixed-Use Integration: </Text>
                                <Text variant="body" color="secondary" className="inline">Leverage 22,000+ sq ft of ground floor retail to create a "vertical neighborhood" concept with curated retail partners and integrated community programming tailored to Durham's vibrant downtown scene.</Text>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-[#CAB06B] mr-3 text-xl flex-shrink-0">•</span>
                              <div>
                                <Text variant="body" className="font-bold">Vertical Community: </Text>
                                <Text variant="body" color="secondary" className="inline">Implement unique programming utilizing the building's 27-story format, including floor-based community networks and stratified amenity experiences unavailable in lower-rise competitors.</Text>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <Heading level={4} className="text-lg uppercase tracking-wide mb-6 font-bold flex items-center">
                          <span className="flex h-6 w-6 rounded-full bg-[#A67BC2] text-white items-center justify-center mr-3 text-xs font-bold">T</span>
                          THREATS - CONTINGENCY PLANNING
                        </Heading>
                        <div className="bg-[#F9F8F4] border-l-4 border-[#A67BC2] border-t border-r border-b border-[#E5E2D9] p-5 rounded-md shadow-sm h-full">
                          <ul className="space-y-4">
                            <li className="flex items-start">
                              <span className="text-[#A67BC2] mr-3 text-xl flex-shrink-0">•</span>
                              <div>
                                <Text variant="body" className="font-bold">Market Saturation: </Text>
                                <Text variant="body" color="secondary" className="inline">Develop premium pricing strategy with stratified offerings based on floor level and views, preserving value while offering flexibility.</Text>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-[#A67BC2] mr-3 text-xl flex-shrink-0">•</span>
                              <div>
                                <Text variant="body" className="font-bold">Concession Escalation: </Text>
                                <Text variant="body" color="secondary" className="inline">Prepare tiered concession strategy aligned with Durham's 1.5-2 month market average, with emphasis on service enhancements over pure rent discounts.</Text>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="text-[#A67BC2] mr-3 text-xl flex-shrink-0">•</span>
                              <div>
                                <Text variant="body" className="font-bold">Economic Uncertainty: </Text>
                                <Text variant="body" color="secondary" className="inline">Leverage Durham's stable healthcare and education sectors in targeting, with marketing positioning focused on long-term value and stability.</Text>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            </Section>
          </Container>
          
          {/* Recommendations & Roadmap Section */}
          <Container size="wide">
            <Section 
              title="Strategy Pillars" 
              subtitle="Strategic approach categories based on our market position analysis"
              divider={true}
              className="mb-16"
            >
              <div className="mb-12 flex items-center">
                <Columns size={22} className="text-novus-gold mr-2" />
                <Heading level={3} className="font-bold text-2xl tracking-wider">RECOMMENDATIONS & ROADMAP</Heading>
              </div>
            {/* Core Strategy Section - High-level categories only */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12">
              {[
                {
                  number: 1,
                  title: "High-Rise Positioning",
                  description: "Leverage 27-story vertical living experience with unparalleled views and premium amenities"
                },
                {
                  number: 2,
                  title: "Tech-Forward Living",
                  description: "Smart home integration and premium connectivity for Durham's education and tech professionals"
                },
                {
                  number: 3,
                  title: "Vertical Neighborhood",
                  description: "Authentic connection with Durham's community through technology integration and local partnerships"
                }
              ].map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-6 hover:border-[#CAB06B] transition-colors text-center hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-[#F5F5E6] flex items-center justify-center mx-auto mb-4 border-2 border-[#CAB06B]"
                    whileHover={{ scale: 1.05, backgroundColor: "#CAB06B", color: "white" }}
                  >
                    <span className="text-[#CAB06B] text-xl font-bold">{pillar.number}</span>
                  </motion.div>
                  <Heading level={4} className="text-lg font-bold mb-4">{pillar.title}</Heading>
                  <Text variant="body" color="secondary" className="text-sm">
                    {pillar.description}
                  </Text>
                </motion.div>
              ))}
            </div>
            
            {/* Implementation Roadmap */}
            <div className="mt-16">
              <div className="mb-8">
                <Heading level={3} className="text-2xl font-bold mb-6 uppercase tracking-wide">IMPLEMENTATION ROADMAP</Heading>
                <Paragraph className="mt-2">
                  Our tactical roadmap converts strategies into actionable steps with clear timelines, responsible parties, and success metrics.
                </Paragraph>
              </div>
              
              {/* Vertical Timeline for larger screens */}
              <div className="hidden md:block">
                <Timeline phases={implementationPhases} />
              </div>
              
              {/* Horizontal Timeline for mobile */}
              <div className="block md:hidden">
                <Timeline phases={implementationPhases} orientation="horizontal" />
              </div>
              
              {/* Financial Projections Table */}
              <div className="mt-12">
                <Heading level={3} className="text-2xl font-bold mb-6 uppercase tracking-wide">FINANCIAL IMPACT PROJECTIONS</Heading>
                <ComparisonTable
                  data={financialComparisonData}
                  titleA="Standard Approach"
                  titleB="Recommended Strategy"
                  caption="Comparing standard market approach to our proprietary strategy"
                />
              </div>
              
              <motion.div 
                className="mt-8 p-6 bg-[#F9F8F4] border border-l-4 border-[#CAB06B] rounded-md shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <Text variant="body-lg" color="primary" className="font-medium leading-relaxed">
                  The Novus's premium positioning strategy is projected to achieve stabilization 25% faster than industry standards while generating an additional $2.6M in first-year revenue through our specialized high-rise differentiation approach.
                </Text>
              </motion.div>
            </div>
            </Section>
          </Container>
        </motion.div>
      </Layout>
    </>
  );
}