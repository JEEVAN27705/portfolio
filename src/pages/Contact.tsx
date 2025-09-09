import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jeevanpatil27705@gmail.com",
      href: "mailto:jeevanpatil27705@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7276605175",
      href: "tel:+91 7276605175",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p
              className={`text-xl text-white/90 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Have a project in mind or just want to chat? I'd love to hear from you.
              Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-6">
                  Let's Talk
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects,
                  or potential collaborations. Whether you have a specific project
                  in mind or just want to connect, feel free to reach out.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={info.label}
                    className="p-6 glass-morphism border-0 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a href={info.href} className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.label}</h3>
                        <p className="text-muted-foreground group-hover:text-accent transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gradient mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-6">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`p-3 rounded-full glass-morphism hover:scale-110 transition-all duration-300 ${color}`}
                      aria-label={label}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 glass-morphism border-0 shadow-xl">
                <h2 className="text-3xl font-bold text-gradient mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="transition-all duration-200 focus:scale-[1.02]"
                        placeholder="Jeevan"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="transition-all duration-200 focus:scale-[1.02]"
                        placeholder="Patil"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                      placeholder="jeevanpatil27705@gmail.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="transition-all duration-200 focus:scale-[1.02] resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full group hover:scale-105 transition-all duration-300"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-section-bg">
        <div className="container px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm here to help bring your ideas to life. Let's discuss how we can
              work together to create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="mailto:jeevanpatil27705@gmail.com">
                  <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Email Me Directly
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="tel:+91 7276605175">
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}