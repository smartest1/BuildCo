import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'overview' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary shadow-md' : 'bg-secondary/90'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-secondary-foreground font-sans text-xl font-bold hover:text-tertiary transition-colors duration-200 cursor-pointer"
            >
              BuildCo
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink asChild>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="px-4 py-3 text-secondary-foreground font-body font-normal hover:text-tertiary transition-colors duration-200 cursor-pointer"
                      >
                        {item.label}
                      </button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-tertiary text-tertiary-foreground font-body font-normal hover:bg-tertiary/90 transition-colors duration-200"
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary-foreground hover:text-tertiary hover:bg-transparent"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-8 w-8" strokeWidth={1.5} />
              ) : (
                <MenuIcon className="h-8 w-8" strokeWidth={1.5} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation MenuIcon */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-gray-700">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col w-full space-y-0">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id} className="w-full">
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-8 py-4 text-secondary-foreground font-body font-normal hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem className="w-full px-8 py-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-tertiary text-tertiary-foreground font-body font-normal hover:bg-tertiary/90 transition-colors duration-200"
                >
                  Request a Quote
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
