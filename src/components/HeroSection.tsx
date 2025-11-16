import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import AuroraText from './AuroraText';

const HeroSection = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2 }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.6'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.4'
    );
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <motion.video
          alt="construction workers building site"
          src="https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_1.mp4"
          poster="https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_1-poster.png"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={headlineRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
              Building the <AuroraText>Future</AuroraText>, One Structure at a Time
            </h1>
          </div>
          
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto font-body leading-relaxed"
          >
            With over 20 years of experience, we deliver exceptional construction services built on reliability, craftsmanship, and unwavering commitment to quality.
          </p>
          
          <div ref={ctaRef}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-tertiary text-tertiary-foreground font-body font-normal text-base px-12 py-6 hover:bg-tertiary/90 transition-all duration-200 ease-in"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
