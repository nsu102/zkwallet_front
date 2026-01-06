import Image from 'next/image';
import { FEATURES_CONTENT, INTRO_CONTENT } from '@/constants';
import { FeatureCard } from './FeatureCard';

export default function IntroSection() {
  return (
    <section className="relative pt-38 py-30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/zkvoting_bg_main_2.avif"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-5">
          <p className="text-base sm:text-xl md:text-2xl text-white ">
            {INTRO_CONTENT.subtitle}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {INTRO_CONTENT.title}
          </h2>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 mt-28">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {FEATURES_CONTENT.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
