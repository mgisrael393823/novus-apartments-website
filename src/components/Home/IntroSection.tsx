
import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading, SectionTitle, Paragraph, Text } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

export default function IntroSection() {
  return (
    <Section className="pb-0">
      <Container size="wide">
        <div className="mb-2 text-center">
          <div className="inline-block mb-8">
            <SectionTitle>THE BLUEPRINT</SectionTitle>
            <div className="h-0.5 w-32 bg-novus-gold mx-auto"></div>
          </div>
          
          <Heading level={1} className="mb-6" wrap="balance">
            Luxury, Sustainability, and Convenience in Downtown Durham
          </Heading>
          
          <div className="max-w-3xl mx-auto">
            <Paragraph size="large" className="mb-10" wrap="pretty">
              Novus Apartments distinguishes itself as a premier destination in Downtown Durham, offering exceptional sustainability features, high-end finishes, and unmatched leasing incentives. This comprehensive strategic framework showcases our commitment to maximizing the resident experience in the vibrant Five Points District/Downtown Durham market.
            </Paragraph>
            
            <Button variant="default" size="xl" uppercase className="px-8" asChild>
              <Link href="/executive-summary" className="text-white">
                EXPLORE BLUEPRINT
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
