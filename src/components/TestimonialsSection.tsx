import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      quote: "BuildCo transformed our vision into reality. Their attention to detail and commitment to quality exceeded all expectations. The team was professional, responsive, and delivered on time.",
      author: "Sarah Johnson",
      company: "Johnson Enterprises",
    },
    {
      quote: "Working with BuildCo was an absolute pleasure. They handled our commercial project with expertise and professionalism. The end result speaks for itself - outstanding craftsmanship.",
      author: "Michael Chen",
      company: "Chen Retail Group",
    },
    {
      quote: "From start to finish, BuildCo demonstrated exceptional project management and construction excellence. They turned our complex infrastructure project into a seamless success.",
      author: "David Martinez",
      company: "City Development Corp",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.testimonials-heading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 px-8 lg:px-16 bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="testimonials-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Hear what our clients say about working with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-center px-8 md:px-16"
              >
                <QuoteIcon className="w-16 h-16 text-tertiary mx-auto mb-8" strokeWidth={1.5} />
                
                <blockquote className="text-xl md:text-2xl text-foreground font-body leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="space-y-2">
                  <p className="text-lg font-bold text-primary">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-base text-muted-foreground font-body">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="bg-background text-foreground border-border hover:bg-neutral hover:text-foreground hover:border-tertiary transition-colors duration-200"
            >
              <ChevronLeftIcon className="w-6 h-6" strokeWidth={1.5} />
            </Button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-tertiary w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="bg-background text-foreground border-border hover:bg-neutral hover:text-foreground hover:border-tertiary transition-colors duration-200"
            >
              <ChevronRightIcon className="w-6 h-6" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
