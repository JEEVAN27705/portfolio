import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "/contact", label: "Email" },
  ];

  const toggleTheme = () => {
    // Theme is always dark now - no switching needed
    // This function can be removed but keeping for UI consistency
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-morphism shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 hover:text-accent group ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-muted">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-full hover:bg-muted/50 hover:scale-110 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
            
            {/* Theme Toggle - Always Dark Mode */}
            <Button
              variant="ghost"
              size="sm"
              className="relative p-3 rounded-xl glass-morphism hover:scale-110 transition-all duration-300 hover:shadow-xl group ml-4"
            >
              <div className="relative">
                <Sun className="h-5 w-5 text-foreground group-hover:text-accent transition-colors animate-spin-slow" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />
              </div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="relative p-3 rounded-xl glass-morphism hover:scale-110 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative">
                <Sun className="h-5 w-5 text-foreground group-hover:text-accent transition-colors animate-spin-slow" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />
              </div>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:scale-110 transition-transform duration-200 p-3"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden glass-morphism rounded-b-2xl`}
        >
          <div className="py-6 px-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 font-medium transition-all duration-200 hover:text-accent hover:bg-muted/50 rounded-xl hover:translate-x-2 ${
                  location.pathname === item.path
                    ? "text-accent bg-muted/30"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="pt-4 border-t border-muted">
              <p className="text-sm font-medium text-muted-foreground mb-3 px-4">Connect with me</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 rounded-xl hover:bg-muted/50 hover:scale-110 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}