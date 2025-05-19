
import React from "react";
import Link from "next/link";
import {
  BookOpen,
  BarChart2,
  Target,
  Lightbulb,
  DollarSign,
  Rocket,
  ArrowRight
} from "lucide-react";
import { Container, ContentBox } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, SectionTitle, Paragraph, Text } from "@/components/ui/Typography";
import { Grid } from "@/components/ui/Grid";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, CardBadge } from "@/components/ui/card";

const sections = [
  { 
    id: 1, 
    title: "EXECUTIVE SUMMARY", 
    path: "/executive-summary", 
    description: "Overview of key findings and recommendations",
    icon: BookOpen,
    gated: false
  },
  { 
    id: 2, 
    title: "MARKET INTELLIGENCE", 
    path: "/market-intelligence", 
    description: "Analysis of current market conditions and trends",
    icon: BarChart2,
    gated: false
  },
  { 
    id: 3, 
    title: "COMPETITIVE LANDSCAPE", 
    path: "/competitive-landscape", 
    description: "Detailed assessment of competing properties",
    icon: Target,
    gated: false
  },
  { 
    id: 4, 
    title: "STRATEGIC OPPORTUNITIES", 
    path: "/strategic-opportunities", 
    description: "Identified opportunities for competitive advantage",
    icon: Lightbulb,
    gated: true
  },
  { 
    id: 5, 
    title: "PRICING & INCENTIVES", 
    path: "/pricing-framework", 
    description: "Recommended pricing strategy and incentive structure",
    icon: DollarSign,
    gated: true
  },
  { 
    id: 6, 
    title: "GO-TO-MARKET ROADMAP", 
    path: "/go-to-market", 
    description: "Timeline and implementation plan",
    icon: Rocket,
    gated: true
  }
];

export default function TableOfContents() {
  return (
    <Section className="pt-0">
      <Container size="wide">
        
        <Grid columns={3} gap="lg">
          {sections.map((section) => {
            const Icon = section.icon;
            
            return (
              <Link 
                href={section.path} 
                key={section.id}
                className="block h-full"
              >
                <Card 
                  variant="default"
                  className="group h-full flex flex-col transition-all hover:border-novus-gold bg-white"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="p-2 mr-3 text-novus-gold bg-novus-cream-dark rounded-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm tracking-wide">{section.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <CardDescription className="text-text-secondary text-sm mb-0">
                      {section.description}
                    </CardDescription>
                  </CardContent>
                  
                  <CardFooter className="pt-2 mt-auto border-t-0">
                    <span className="inline-flex items-center text-xs uppercase tracking-wider font-medium text-novus-gold group-hover:underline">
                      VIEW SECTION <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </Grid>
        
        <div className="flex justify-center mt-16 mb-8">
          <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm max-w-sm w-full text-center">
            <Text variant="body" className="font-bold text-gray-800 mb-3 uppercase tracking-wide">
              Contact
            </Text>
            <Text variant="body" className="text-gray-700 text-lg mb-2">
              Michael Israel
            </Text>
            <Text variant="body" className="text-novus-gold font-medium text-lg mb-2">
              847-924-2888
            </Text>
            <a href="mailto:m@disrvpt.co" className="inline-block text-novus-gold font-medium text-lg hover:underline">
              m@disrvpt.co
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
