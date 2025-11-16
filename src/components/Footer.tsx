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
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-6">
              BuildCo
            </h3>
            <p className="text-base text-secondary-foreground/90 font-body leading-relaxed mb-6">
              Building the future with excellence, integrity, and innovation. Your trusted partner in construction for over 20 years.
            </p>
            <div className="flex gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-tertiary transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-8 h-8" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-tertiary transition-colors duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-8 h-8" strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-tertiary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-8 h-8" strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-tertiary transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-8 h-8" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-secondary-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('overview')}
                  className="text-base text-secondary-foreground/90 hover:text-tertiary transition-colors duration-200 font-body cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-base text-secondary-foreground/90 hover:text-tertiary transition-colors duration-200 font-body cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-base text-secondary-foreground/90 hover:text-tertiary transition-colors duration-200 font-body cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-base text-secondary-foreground/90 hover:text-tertiary transition-colors duration-200 font-body cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-secondary-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              <li className="text-base text-secondary-foreground/90 font-body">
                Residential Construction
              </li>
              <li className="text-base text-secondary-foreground/90 font-body">
                Commercial Projects
              </li>
              <li className="text-base text-secondary-foreground/90 font-body">
                Infrastructure Development
              </li>
              <li className="text-base text-secondary-foreground/90 font-body">
                Renovations & Remodeling
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/80 font-body">
              © {currentYear} BuildCo. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm text-secondary-foreground/80 hover:text-tertiary transition-colors duration-200 font-body"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-secondary-foreground/80 hover:text-tertiary transition-colors duration-200 font-body"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
