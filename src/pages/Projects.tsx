import { useState, useEffect } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "full-stack",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      category: "frontend",
      featured: true,
    },
    {
      id: 3,
      title: "AI Chat Interface",
      description: "Modern chat interface for AI conversations with message streaming, syntax highlighting, and export functionality. Optimized for performance and user experience.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "WebSockets", "OpenAI API", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      category: "frontend",
      featured: false,
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and reporting features. Built for scalability and performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      category: "full-stack",
      featured: false,
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and financial insights. Focus on security and user experience.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "mobile",
      featured: true,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern animations, dark/light theme, and optimized performance. Built with attention to detail and user experience.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      category: "frontend",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "full-stack", label: "Full-Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "mobile", label: "Mobile" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

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
              My <span className="text-gradient">Projects</span>
            </h1>
            <p
              className={`text-xl text-white/90 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              A showcase of my recent work, featuring web applications, mobile apps,
              and full-stack solutions built with modern technologies.
            </p>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-section-bg">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              My Projects
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore my complete portfolio of work
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className="group"
                >
                  <Filter className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden glass-morphism border-0 hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-accent text-accent-foreground text-xs">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gradient group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                 <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="group/btn flex-1 text-xs"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="group/btn flex-1 text-xs"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}