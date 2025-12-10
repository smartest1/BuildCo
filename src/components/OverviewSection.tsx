import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AwardIcon, UsersIcon, Building2Icon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const OverviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      '.overview-heading',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    // Animate counters
    const counters = [
      { setter: setYearsCount, target: 20 },
      { setter: setProjectsCount, target: 500 },
      { setter: setClientsCount, target: 300 },
    ];

    counters.forEach(({ setter, target }) => {
      gsap.to({ value: 0 }, {
        value: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
        onUpdate: function() {
          setter(Math.floor(this.targets()[0].value));
        },
      });
    });
  }, []);

  return (
    <section
      id="overview"
      ref={sectionRef}
      className="py-24 md:py-32 px-8 lg:px-16 bg-neutral"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="overview-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Building Excellence Since 2004
            </h2>
            
            <p className="text-lg text-neutral-foreground font-body leading-relaxed">
              We are a leading construction company specializing in residential, commercial, and infrastructure projects. Our mission is to deliver exceptional quality through innovative solutions and unwavering dedication to craftsmanship.
            </p>
            
            <p className="text-lg text-neutral-foreground font-body leading-relaxed">
              Certified and trusted by industry leaders, we bring decades of expertise to every project, ensuring safety, sustainability, and superior results that stand the test of time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <motion.div
                  className="flex justify-center mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
                >
                  <AwardIcon className="w-12 h-12 text-tertiary" strokeWidth={1.5} />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {yearsCount}+
                </div>
                <div className="text-sm text-neutral-foreground font-body">
                  Years Experience
                </div>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.div
                  className="flex justify-center mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <Building2Icon className="w-12 h-12 text-tertiary" strokeWidth={1.5} />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {projectsCount}+
                </div>
                <div className="text-sm text-neutral-foreground font-body">
                  Projects Completed
                </div>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="flex justify-center mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
                >
                  <UsersIcon className="w-12 h-12 text-tertiary" strokeWidth={1.5} />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {clientsCount}+
                </div>
                <div className="text-sm text-neutral-foreground font-body">
                  Happy Clients
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://c.animaapp.com/mi0npy80vhfUeJ/img/ai_2.png"
              alt="construction team meeting"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
