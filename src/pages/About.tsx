import { useState, useEffect } from "react";
import { Code, Database, Palette, Zap, Award, Users, GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import profileImage from "@/assets/profile-image.jpg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2014 - 2018",
      description: "Graduated Magna Cum Laude with focus on Software Engineering and Human-Computer Interaction.",
      achievements: ["Dean's List 6 semesters", "Computer Science Honor Society", "Senior Capstone Award"]
    },
    {
      degree: "Certified Scrum Master (CSM)",
      institution: "Scrum Alliance",
      period: "2020",
      description: "Certified in Agile methodologies and project management practices.",
      achievements: ["Advanced Scrum Practices", "Team Leadership", "Agile Coaching"]
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "2021",
      description: "Certified in designing distributed systems and cloud architecture on AWS.",
      achievements: ["Cloud Architecture", "Security Best Practices", "Cost Optimization"]
    }
  ];

  const experience = [
    {
      role: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
      achievements: ["Reduced load times by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"],
    },
    {
      role: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built responsive web applications with React and TypeScript. Collaborated closely with designers to implement pixel-perfect UIs.",
      achievements: ["Built 3 major products", "Improved user engagement by 60%", "Established design system"],
    },
    {
      role: "UI/UX Designer",
      company: "Design Studio",
      period: "2018 - 2020",
      description: "Created user-centered designs for mobile and web applications. Conducted user research and usability testing.",
      achievements: ["Designed 50+ interfaces", "Increased conversion by 35%", "Led user research initiatives"],
    },
  ];

  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Award, label: "Years Experience", value: "6+" },
    { icon: Zap, label: "Technologies", value: "25+" },
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
              About <span className="text-gradient">Me</span>
            </h1>
            <p
              className={`text-xl text-white/90 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Computer Engineering student passionate about creating innovative solutions through 
              software development, quality assurance, and machine learning. Currently seeking 
              opportunities to contribute to impactful projects.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-section-bg">
        <div className="container px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map(({ icon: Icon, label, value }, index) => (
              <Card
                key={label}
                className="p-6 text-center glass-morphism border-0 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-8 w-8 mx-auto mb-4 text-accent" />
                <div className="text-3xl font-bold text-gradient mb-2">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-[500px] h-[500px] rounded-3xl overflow-hidden border-4 border-accent/20 shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src={profileImage}
                    alt="Jeevan Patil - About Me"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/20 rounded-full animate-float" />
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-secondary/30 rounded-full animate-bounce" />
                <div className="absolute top-1/2 -left-12 w-6 h-6 bg-primary/25 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gradient mb-6">
                My Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Jeevan Patil, a Computer Engineering student passionate about creating innovative solutions through 
                software development, quality assurance, and machine learning. Currently seeking opportunities to 
                contribute to impactful projects while continuously learning and growing in the tech industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a full stack developer, I specialize in building end-to-end web applications using modern technologies 
                like React, Node.js, and various databases. My journey combines academic learning with practical 
                experience in creating scalable and user-friendly applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across frontend development with React and TypeScript, backend development with 
                Node.js and Python, quality assurance through comprehensive testing, and exploring machine learning 
                applications. I believe in writing clean, maintainable code that solves real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
                or working on innovative solutions that push the boundaries of what's possible in software development.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-gradient">6+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-section-bg">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Education & Certifications
            </h2>
            <p className="text-xl text-muted-foreground">
              My academic background and professional certifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card
                key={edu.degree}
                className="p-8 glass-morphism border-0 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="h-6 w-6 text-accent mr-3" />
                      <h3 className="text-xl font-bold text-gradient">{edu.degree}</h3>
                    </div>
                    <div className="flex items-center mb-2 text-foreground">
                      <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {edu.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-accent">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border border-muted"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-section-bg">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              My professional journey and key achievements
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={exp.role}
                className="p-8 glass-morphism border-0 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gradient">{exp.role}</h3>
                    <p className="text-lg text-foreground">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full">
                    {exp.period}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-accent">Key Achievements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Technologies I Love
            </h2>
            <p className="text-xl text-muted-foreground">
              Tools and technologies I work with daily
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {[
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Node.js", icon: "🟢" },
              { name: "Python", icon: "🐍" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "MongoDB", icon: "🍃" },
              { name: "AWS", icon: "☁️" },
              { name: "Docker", icon: "🐳" },
              { name: "Git", icon: "📦" },
              { name: "Figma", icon: "🎨" },
              { name: "GraphQL", icon: "🔗" },
              { name: "Redis", icon: "📊" },
            ].map((tech, index) => (
              <Card
                key={tech.name}
                className="p-6 text-center glass-morphism border-0 hover:scale-110 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                  {tech.name}
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