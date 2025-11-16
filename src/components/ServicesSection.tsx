import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { HomeIcon, BuildingIcon, StarIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.services-heading',
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

  const services = [
    {
      icon: HomeIcon,
      title: 'Residential',
      description: 'Custom homes and renovations built with precision and care for your family.',
      image: 'https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_3.png',
      alt: 'residential building exterior',
    },
    {
      icon: BuildingIcon,
      title: 'Commercial',
      description: 'Office buildings, retail spaces, and commercial complexes designed for success.',
      image: 'https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_4.png',
      alt: 'commercial building exterior',
    },
    {
      icon: StarIcon,
      title: 'Infrastructure',
      description: 'Bridges, roads, and public works that connect communities and drive progress.',
      image: 'https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_5.png',
      alt: 'infrastructure bridge project',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 px-8 lg:px-16 bg-background"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="services-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
            >
              <Card className="h-full overflow-hidden border-border hover:border-tertiary transition-all duration-200 ease-in">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <service.icon className="w-12 h-12 text-tertiary mr-4" strokeWidth={1.5} />
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-base text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
