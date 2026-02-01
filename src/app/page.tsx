import {
  NavSection,
  HeroSection,
  WhyUsSection,
  ServicesSection,
  PortfolioSection,
  FaqSection,
  ContactSection,
  FooterSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <NavSection />
      <main>
        <HeroSection />
        <WhyUsSection />
        <ServicesSection />
        <PortfolioSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
