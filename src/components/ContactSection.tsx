import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.contact-heading',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 px-8 lg:px-16 bg-neutral"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="contact-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-foreground font-body max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-background p-8 md:p-12 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-foreground font-body font-bold">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-background text-foreground border-border focus:border-tertiary"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-foreground font-body font-bold">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-background text-foreground border-border focus:border-tertiary"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-foreground font-body font-bold">
                  PhoneIcon
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="bg-background text-foreground border-border focus:border-tertiary"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-foreground font-body font-bold">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="bg-background text-foreground border-border focus:border-tertiary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-tertiary text-tertiary-foreground font-body font-normal hover:bg-tertiary/90 transition-colors duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">PhoneIcon</h4>
                    <p className="text-base text-neutral-foreground font-body">
                      (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <MailIcon className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Email</h4>
                    <p className="text-base text-neutral-foreground font-body">
                      info@buildco.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="w-8 h-8 text-tertiary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Address</h4>
                    <p className="text-base text-neutral-foreground font-body">
                      123 Construction Ave<br />
                      Building City, BC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841374555634!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&key=YOUR_API_KEY"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BuildCo Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
