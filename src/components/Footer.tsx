import { motion } from 'framer-motion';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-secondary-foreground mb-6">
              BuildCo
            </h3>
            <p className="text-base text-secondary-foreground/90 font-body leading-relaxed mb-6">
              Building the future with excellence, integrity, and innovation. Your trusted partner in construction for over 20 years.
            </p>
            <div className="flex gap-6">
              {[
                { Icon: FacebookIcon, link: 'https://facebook.com', label: 'Facebook' },
                { Icon: TwitterIcon, link: 'https://twitter.com', label: 'Twitter' },
                { Icon: LinkedinIcon, link: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: InstagramIcon, link: 'https://instagram.com', label: 'Instagram' },
              ].map(({ Icon, link, label }, index) => (
                <motion.a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground hover:text-tertiary transition-colors duration-200"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-secondary-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', id: 'overview' },
                { label: 'Services', id: 'services' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Contact', id: 'contact' },
              ].map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-base text-secondary-foreground/90 hover:text-tertiary transition-colors duration-200 font-body cursor-pointer"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-secondary-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                'Residential Construction',
                'Commercial Projects',
                'Infrastructure Development',
                'Renovations & Remodeling',
              ].map((service, index) => (
                <motion.li
                  key={service}
                  className="text-base text-secondary-foreground/90 font-body"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/80 font-body">
              © {currentYear} BuildCo. All rights reserved.
            </p>
            <div className="flex gap-8">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-secondary-foreground/80 hover:text-tertiary transition-colors duration-200 font-body"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
