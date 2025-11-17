import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { NewHeroSection } from "../landing/NewHeroSection";
import { BenefitsSection } from "../landing/BenefitsSection";
import { LiveDemoSection } from "../landing/LiveDemoSection";
import { GourmetShowcaseSection } from "../landing/GourmetShowcaseSection";
import { PowerFeaturesSection } from "../landing/PowerFeaturesSection";
import { TestimonialsSection } from "../landing/TestimonialsSection";
import { HowItWorksNew } from "../landing/HowItWorksNew";
import { NewPricingSection } from "../landing/NewPricingSection";
import { FinalCTASection } from "../landing/FinalCTASection";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header transparent />
      <div id="hero" className="scroll-mt-20">
        <NewHeroSection />
      </div>
      <div id="benefits" className="scroll-mt-20">
        <BenefitsSection />
      </div>
      <div id="demo" className="scroll-mt-20">
        <LiveDemoSection />
      </div>
      <div id="gourmet" className="scroll-mt-20">
        <GourmetShowcaseSection />
      </div>
      <div id="features" className="scroll-mt-20">
        <PowerFeaturesSection />
      </div>
      <div id="testimonials" className="scroll-mt-20">
        <TestimonialsSection />
      </div>
      <div id="how" className="scroll-mt-20">
        <HowItWorksNew />
      </div>
      <div id="pricing" className="scroll-mt-20">
        <NewPricingSection />
      </div>
      <div id="cta" className="scroll-mt-20">
        <FinalCTASection />
      </div>
      <Footer />
    </div>
  );
}
