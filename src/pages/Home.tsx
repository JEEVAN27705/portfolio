import { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Calendar,
  MapPin,
  ChevronUp,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import TypingAnimation from "@/components/TypingAnimation";
import Footer from "@/components/Footer";
import profileImage from "@/assets/profile-image.jpg";
import projectImg from "@/assets/project.jpg";
import project2Img from "@/assets/project2.jpg";
import project3Img from "@/assets/project3.jpg";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const typingTexts = [
    "I am a Software Engineer",
    "I am a QA Tester",
    "I am a Full-Stack Developer",
    "I am a UI/UX Designer",
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Payroll Management System",
      description:
        "Developed a web-based payroll management system to automate salary calculation, attendance tracking, and employee data ",
      image: projectImg,
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/JEEVAN27705/PayrollManagementSystem",
    },
    {
      id: 2,
      title: "REAL-TIME CHATROOM WITH HATE SPEECH FILTERING",
      description:
        "A PHP-based chatroom app that blocks hate speech using an ML model.Offensive messages are flagged, while normal messages are stored in the database",
      image:project2Img,
      technologies: ["PHP", "MySQL", "Javascript", "HTML", "CSS", "Fast API", "cURL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
  id: 3,
  title: "PORTFOLIO WEBSITE WITH REACT + TYPESCRIPT",
  description:
    "A responsive personal portfolio website built using React and TypeScript. Features dynamic project showcase, smooth navigation, and modern UI design.",
  image: project3Img,
  technologies: ["React", "TypeScript", "HTML", "CSS"],
  liveUrl: "#",
  githubUrl: "https://github.com/JEEVAN27705/portfolio",
},
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="container relative z-10 px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div
                className={`flex justify-center lg:justify-center transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500 animate-glow">
                    <img
                      src={profileImage}
                      alt="Jeevan Patil - Software Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce" />
                  <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce"
                    style={{ animationDelay: "1s" }}
                  />
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary-glow rounded-full animate-pulse" />
                </div>
              </div>

              {/* Hero Text */}
              <div
                className={`text-center lg:text-left transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
                  Hi, I'm <span className="text-gradient">Jeevan Patil</span>
                </h1>
                
                {/* Typing Animation */}
                <div className="text-2xl md:text-3xl font-medium text-white/90 h-16 flex items-center justify-center lg:justify-start mb-8">
                  <TypingAnimation texts={typingTexts} className="text-accent" />
                </div>

                <div className="text-2xl md:text-3xl font-medium text-white/90 flex items-center justify-center lg:justify-start mb-8">
                    Blending logic with creativity to craft meaningful solutions.
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="group bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-pulse-glow"
                    asChild
                  >
                    <a href="\Jeevan_Patil_Resume.pdf" download>
                      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Download Resume
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="group bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
                  >
                    <Link to="/projects">
                      <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      View My Work
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-section-bg">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I specialize in building robust applications and ensuring they meet 
              the highest quality standards through comprehensive testing and user-centered design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Building scalable, responsive web apps with clean, maintainable code and best practices",
              },
              {
                icon: Zap,
                title: "Quality Assurance",
                description: "Comprehensive testing strategies to ensure reliable software through automated and manual testing approaches",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Creating intuitive user experiences through research, prototyping, and iterative design focused on usability",
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group glass-morphism border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-4 rounded-full bg-accent/10 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                Technical Skills
              </h2>
              <p className="text-xl text-muted-foreground">
                Technologies and tools I work with
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                {/* Web Development */}
                <div className="p-8 rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:border-accent/40 transition-all duration-500 hover:scale-[1.02] group">
                  <h4 className="text-2xl font-bold text-accent flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl mr-3 animate-bounce">💻</span>
                    Web Development
                  </h4>
                  <div className="space-y-6">
                    {[
                      { name: "React.js", level: 95 },
                      { name: "TypeScript", level: 92 },
                      { name: "Node.js", level: 88 },
                      { name: "Next.js", level: 85 },
                    ].map((skill, index) => (
                      <div key={skill.name} className="space-y-3 group/skill">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg group-hover/skill:text-accent transition-colors">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-medium bg-accent/10 px-2 py-1 rounded-full">{skill.level}%</span>
                        </div>
                        <div className="relative h-4 bg-muted/20 rounded-full overflow-hidden group-hover/skill:h-5 transition-all duration-300">
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-2000 ease-out animate-glow hover:animate-pulse"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              animationDelay: `${index * 200}ms`
                            }}
                          />
                          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design & Others */}
                <div className="p-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] group">
                  <h4 className="text-2xl font-bold text-accent flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl mr-3 animate-bounce" style={{animationDelay: '1s'}}>🎨</span>
                    Design & Others
                  </h4>
                  <div className="space-y-6">
                    {[
                      { name: "UI/UX Design", level: 90 },
                      { name: "Python", level: 82 },
                      { name: "AWS", level: 78 },
                      { name: "Database Design", level: 85 },
                    ].map((skill, index) => (
                      <div key={skill.name} className="space-y-3 group/skill">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg group-hover/skill:text-primary transition-colors">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-medium bg-primary/10 px-2 py-1 rounded-full">{skill.level}%</span>
                        </div>
                        <div className="relative h-4 bg-muted/20 rounded-full overflow-hidden group-hover/skill:h-5 transition-all duration-300">
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-2000 ease-out"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              animationDelay: `${index * 200 + 800}ms`
                            }}
                          />
                          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Testing & QA */}
                <div className="p-8 rounded-2xl border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent hover:border-secondary/40 transition-all duration-500 hover:scale-[1.02] group">
                  <h4 className="text-2xl font-bold text-accent flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl mr-3 animate-bounce" style={{animationDelay: '0.5s'}}>🔍</span>
                    Testing & QA
                  </h4>
                  <div className="space-y-6">
                    {[
                      { name: "Selenium", level: 78 },
                      { name: "Jest", level: 82 },
                      { name: "Cypress", level: 75 },
                      { name: "API Testing", level: 85 },
                    ].map((skill, index) => (
                      <div key={skill.name} className="space-y-3 group/skill">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg group-hover/skill:text-secondary transition-colors">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-medium bg-secondary/10 px-2 py-1 rounded-full">{skill.level}%</span>
                        </div>
                        <div className="relative h-4 bg-muted/20 rounded-full overflow-hidden group-hover/skill:h-5 transition-all duration-300">
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-secondary/60 rounded-full transition-all duration-2000 ease-out"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              animationDelay: `${index * 200 + 400}ms`
                            }}
                          />
                          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile & DevOps */}
                <div className="p-8 rounded-2xl border-2 border-success/20 bg-gradient-to-br from-success/5 to-transparent hover:border-success/40 transition-all duration-500 hover:scale-[1.02] group">
                  <h4 className="text-2xl font-bold text-accent flex items-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl mr-3 animate-bounce" style={{animationDelay: '1.5s'}}>⚙️</span>
                    Mobile & DevOps
                  </h4>
                  <div className="space-y-6">
                    {[
                      { name: "React Native", level: 80 },
                      { name: "Docker", level: 75 },
                      { name: "CI/CD", level: 72 },
                      { name: "Git/GitHub", level: 95 },
                    ].map((skill, index) => (
                      <div key={skill.name} className="space-y-3 group/skill">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg group-hover/skill:text-success transition-colors">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-medium bg-success/10 px-2 py-1 rounded-full">{skill.level}%</span>
                        </div>
                        <div className="relative h-4 bg-muted/20 rounded-full overflow-hidden group-hover/skill:h-5 transition-all duration-300">
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-success to-success/60 rounded-full transition-all duration-2000 ease-out"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              animationDelay: `${index * 200 + 1200}ms`
                            }}
                          />
                          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              My career journey and key achievements
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                role: "Beta Tester",
                company: "Eklavya.me",
                period: "September 2025 - Present",
                description: "Contributed by identifying bugs, evaluating user experience, and providing actionable feedback to improve overall product quality before release",
                achievements: ["Reported critical bugs and improved app stability.", "Contributed feedback that reduced post-launch issues", "Wrote detailed bug reports and test cases"],
                type: "current"
              },
              {
                role: "Manual Quality Assurance Tester",
                company: "PRAM Educate IT Software LLP ",
                period: "June 2025-August 2025",
                description: "Built responsive web applications with React and TypeScript. Established comprehensive testing strategies and quality assurance processes.",
                achievements: ["Identified critical bugs and UI issues, improving app performance.", "Logged and tracked bugs using Jira,", "Practiced API testing & web automation."],
                type: "past"
              },
            ].map((exp, index) => (
              <Card
                key={exp.role}
                className="p-8 glass-morphism border-0 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-gradient group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      {exp.type === 'current' && (
                        <Badge className="ml-3 bg-accent text-accent-foreground animate-pulse">Current</Badge>
                      )}
                    </div>
                    <p className="text-lg text-foreground font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium bg-muted/50 px-4 py-2 rounded-full mt-2 lg:mt-0">
                    {exp.period}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-accent">Key Achievements:</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden glass-morphism border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30">
                      Featured
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gradient group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:bg-accent/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="group/btn flex-1 text-xs hover:bg-accent/10 border-accent/20"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="group/btn flex-1 text-xs hover:bg-accent/10 border-accent/20"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                        Source
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button
                size="lg"
                className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-glow"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
