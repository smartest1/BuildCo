import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.portfolio-heading',
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

    gsap.fromTo(
      '.portfolio-item',
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 75%',
        },
      }
    );
  }, []);

  const projects = [
    {
      image: 'https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_2.png',
      alt: 'construction team meeting',
      title: 'Downtown Office Complex',
      location: 'New York, NY',
    },
    {
      image: 'https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_3.png',
      alt: 'residential building exterior',
      title: 'Luxury Residential Estate',
      location: 'Los Angeles, CA',
    },
    {
      image: 'https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_4.png',
      alt: 'commercial building exterior',
      title: 'Modern Shopping Center',
      location: 'Chicago, IL',
    },
    {
      image: 'https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_5.png',
      alt: 'infrastructure bridge project',
      title: 'Highway Bridge Project',
      location: 'Houston, TX',
    },
    {
      image: 'https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_3.png',
      alt: 'residential building exterior',
      title: 'Suburban Housing Development',
      location: 'Phoenix, AZ',
    },
    {
      image: 'https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_4.png',
      alt: 'commercial building exterior',
      title: 'Corporate Headquarters',
      location: 'San Francisco, CA',
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 md:py-32 px-8 lg:px-16 bg-neutral"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="portfolio-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-foreground font-body max-w-2xl mx-auto">
            Showcasing our commitment to excellence through completed works
          </p>
        </div>

        <div className="portfolio-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-item relative group overflow-hidden rounded-lg cursor-pointer h-80"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl font-bold text-secondary-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground/90 font-body">
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
