import { useState, useEffect } from "react";
import { Code, Database, Palette, Zap, Award, Users, GraduationCap, Calendar, MapPin, Download, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import profileImage from "@/assets/profile-image.png";

// Tech logos
import reactLogo from "@/assets/tech/react.svg";
import typescriptLogo from "@/assets/tech/typescript.svg";
import nodejsLogo from "@/assets/tech/nodejs.svg";
import pythonLogo from "@/assets/tech/python.svg";
import postgresqlLogo from "@/assets/tech/postgresql.svg";
import mongodbLogo from "@/assets/tech/mongodb.svg";
import awsLogo from "@/assets/tech/aws.svg";
import dockerLogo from "@/assets/tech/docker.svg";
import gitLogo from "@/assets/tech/git.svg";
import figmaLogo from "@/assets/tech/figma.svg";
import graphqlLogo from "@/assets/tech/graphql.svg";
import redisLogo from "@/assets/tech/redis.svg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Pimpri Chinchwad College of Engineering and Research",
    period: "2023 - Present",
    description: "Pursuing undergraduate studies in Computer Engineering with strong academic performance.",
    achievements: [
      "Current CGPA: 8.86",
      "Active participant in hackathons and coding contests",
      "Worked on multiple academic and technical projects"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Computer Science",
    institution: "S.B. Patil College of Science and Commerce",
    period: "2021 - 2023",
    description: "Completed HSC with specialization in Computer Science.",
    achievements: [
      "Built strong foundation in programming and mathematics",
      "Secured distinction in Computer Science",
      "Participated in inter-college technical and cultural events"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "St. Jude High School",
    period: "2008 - 2017",
    description: "Completed SSC with focus on academics and extracurricular activities.",
    achievements: [
      "Secured 76% in SSC",
      "Class representative and event coordinator",
      "Actively participated in science exhibitions and sports events"
    ]
  }
];

 const stats = [
  { icon: Code, label: "Projects Completed", value: "10+" },
  { icon: Users, label: "Hackathons & Events", value: "5+" },
  { icon: Award, label: "Years of Experience", value: "2+" },
  { icon: Zap, label: "Technologies Mastered", value: "15+" },
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
{/* Profile Image */}
<div className="flex justify-center lg:justify-start">
  <div className="relative group lg:translate-x-16"> {/* Shifted to the right */}
    <div className="rounded-3xl overflow-hidden border-4 border-accent/20 shadow-2xl hover:scale-105 transition-transform duration-500">
      <img
        src={profileImage}
        alt="Jeevan Patil - About Me"
        className="w-[500px] max-w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" 
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
 <p className="text-lg text-muted-foreground leading-relaxed text-justify">
  I am a motivated and detail-oriented Computer Engineering student with a strong foundation in software development, 
  automation testing, and machine learning. I am proficient in Python, Java, SQL, and web technologies, with hands-on 
  experience in building real-world projects including a hate speech detection system and a chat application.
</p>
<p className="text-lg text-muted-foreground leading-relaxed text-justify">
  Skilled in using <span className="font-medium text-foreground">Selenium WebDriver</span> for automating test scenarios 
  and ensuring web application quality. I am comfortable working with tools like <span className="font-medium text-foreground">FastAPI, ReactJS, and Streamlit</span>.
</p>
<p className="text-lg text-muted-foreground leading-relaxed text-justify">
  Passionate about continuous learning, I strive to grow my expertise in both software development and quality assurance. 
  I am eager to contribute to a dynamic tech team where I can bring value through innovative development and robust testing practices.
</p>


{/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-4 pt-6">
  {/* Resume Download */}
  <a
    href="/resume.pdf"
    download="Jeevan_Patil_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:bg-accent/90 transition-all duration-300"
    >
      <Download className="h-5 w-5" />
      Download Resume
    </Button>
  </a>

  {/* Connect Button */}
  <a href="mailto:jeevanpatil27705@gmail.com">
    <Button
      variant="outline"
      size="lg"
      className="flex items-center gap-2 hover:scale-105 hover:shadow-md transition-all duration-300"
    >
      <MessageCircle className="h-5 w-5" />
      Connect with Me
    </Button>
  </a>
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
              Education
            </h2>
            <p className="text-xl text-muted-foreground">
              My academic background
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

      {/* Technologies Section */}
     <section className="py-20">
  <div className="container px-4 lg:px-8">
    <div className="text-center mb-16">
     <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
  Technologies I Love
</h2>

<p className="text-xl text-muted-foreground mt-4">
  Tools and technologies I work with daily
</p>

    </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {[
              { name: "React", logo: reactLogo },
              { name: "TypeScript", logo: typescriptLogo },
              { name: "Node.js", logo: nodejsLogo },
              { name: "Python", logo: pythonLogo },
              { name: "PostgreSQL", logo: postgresqlLogo },
              { name: "MongoDB", logo: mongodbLogo },
              { name: "Git", logo: gitLogo },
              { name: "Figma", logo: figmaLogo },
            ].map((tech, index) => (
              <Card
                key={tech.name}
                className="p-6 text-center glass-morphism border-0 hover:scale-110 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-3 group-hover:scale-125 transition-transform duration-300 flex justify-center items-center h-12">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="h-10 w-10 object-contain"
                  />
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