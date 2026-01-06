import {
  HeroSection,
  IntroSection,
  VotingFeaturesSection,
  PricingSection,
} from '@/components/home';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <VotingFeaturesSection />
      <PricingSection />
    </main>
  );
}
