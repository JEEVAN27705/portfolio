import { Github, Linkedin, Mail, Phone, MapPin, Heart, Instagram, Twitter, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show back to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/alex", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alex", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/alex", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/alex", label: "Instagram" },
    { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
  ];

  return (
    <>
      <footer className="relative overflow-hidden bg-card border-t border-border">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="container relative mx-auto px-4 lg:px-8 py-16">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* About Section */}
            <div className="lg:col-span-2 space-y-6">
              <Link to="/" className="text-3xl font-bold text-gradient mb-4 inline-block hover:scale-105 transition-transform">
                Jeevan Portfolio
              </Link>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A passionate software engineer and QA tester dedicated to creating 
                exceptional digital experiences. I specialize in full-stack development, 
                quality assurance, and modern web technologies.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center group cursor-pointer hover:translate-x-1 transition-transform">
                  <div className="p-2 rounded-lg bg-accent/10 mr-3 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <a href="mailto:jeevanpatil27705@gmail.com" className="group-hover:text-accent transition-colors">
                    jeevanpatil27705@gmail.com
                  </a>
                </div>
                <div className="flex items-center group cursor-pointer hover:translate-x-1 transition-transform">
                  <div className="p-2 rounded-lg bg-accent/10 mr-3 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <a href="tel:+15551234567" className="group-hover:text-accent transition-colors">
                    +91 7276605175
                  </a>
                </div>
                <div className="flex items-center group cursor-pointer hover:translate-x-1 transition-transform">
                  <div className="p-2 rounded-lg bg-accent/10 mr-3 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <span className="group-hover:text-accent transition-colors">Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-gradient">Navigation</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-gradient">Let's Work Together</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ready to bring your ideas to life? Let's discuss your next project.
              </p>
              <div className="space-y-3">
                <a href="mailto:jeevanpatil27705@gmail.com">
                  <Button 
                    variant="outline" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-glow">
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group p-3 rounded-xl bg-accent/5 hover:bg-accent hover:scale-110 transition-all duration-300 border border-accent/10 hover:border-accent/50 hover:shadow-lg"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center lg:text-right">
                <p className="text-muted-foreground flex items-center justify-center lg:justify-end text-sm">
                  © {currentYear} Jeevan Patil Portfolio. Crafted with{" "}
                  <Heart className="h-4 w-4 mx-1 text-red-500 fill-current animate-pulse" />{" "}
                  and passion by Jeevan
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-accent text-accent-foreground rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none hover:shadow-xl"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}