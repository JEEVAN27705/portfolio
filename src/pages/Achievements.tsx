import { useState, useEffect } from "react";
import { Award, Trophy, Users, Heart, Globe, BookOpen, Star, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      id: 1,
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      date: "2023",
      description: "Professional certification in AWS cloud development and deployment strategies.",
      icon: Award,
      category: "certification",
      color: "bg-orange-500",
    },
    {
      id: 2,
      title: "React Advanced Certification", 
      organization: "Meta",
      date: "2022",
      description: "Advanced certification covering React ecosystem, state management, and performance optimization.",
      icon: Trophy,
      category: "certification", 
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "Best Innovation Award",
      organization: "TechCorp Annual Awards",
      date: "2023",
      description: "Recognized for developing an AI-powered testing framework that reduced bug detection time by 60%.",
      icon: Star,
      category: "award",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Google UX Design Certificate",
      organization: "Google",
      date: "2021",
      description: "Comprehensive UX design certification covering user research, prototyping, and design systems.",
      icon: BookOpen,
      category: "certification",
      color: "bg-green-500",
    },
    {
      id: 5,
      title: "Team Leadership Excellence",
      organization: "StartupXYZ",
      date: "2022", 
      description: "Led a cross-functional team of 8 developers to deliver 3 major products ahead of schedule.",
      icon: Users,
      category: "award",
      color: "bg-purple-500",
    },
    {
      id: 6,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2020-Present",
      description: "Active contributor to 15+ open source projects with 500+ merged pull requests.",
      icon: Globe,
      category: "achievement",
      color: "bg-indigo-500",
    },
  ];

  const volunteerWork = [
    {
      id: 1,
      title: "Code for Good Volunteer",
      organization: "Tech4Good Initiative", 
      period: "2022 - Present",
      description: "Developing web applications for non-profit organizations to help them manage donations, volunteers, and community outreach programs.",
      impact: "Helped 5 nonprofits improve their digital presence",
      icon: Heart,
      color: "bg-red-500",
    },
    {
      id: 2,
      title: "Youth Coding Mentor",
      organization: "Local Community Center",
      period: "2021 - Present", 
      description: "Teaching programming fundamentals to underprivileged youth aged 12-18, focusing on web development and problem-solving skills.",
      impact: "Mentored 30+ students, 15 went on to tech careers",
      icon: BookOpen,
      color: "bg-emerald-500",
    },
    {
      id: 3,
      title: "Accessibility Advocate",
      organization: "Web Accessibility Foundation",
      period: "2023 - Present",
      description: "Conducting free website accessibility audits for small businesses and providing recommendations for inclusive design.",
      impact: "Improved accessibility for 20+ small businesses",
      icon: Users,
      color: "bg-cyan-500",
    },
    {
      id: 4,
      title: "Open Source Maintainer",
      organization: "Community Projects",
      period: "2020 - Present",
      description: "Maintaining several open source libraries focused on React components and testing utilities used by 1000+ developers.",
      impact: "50K+ weekly downloads across projects", 
      icon: Globe,
      color: "bg-violet-500",
    },
  ];

  const categories = [
    { id: "certification", label: "Certifications", icon: Award },
    { id: "award", label: "Awards", icon: Trophy },
    { id: "achievement", label: "Achievements", icon: Star },
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
              Achievements & <span className="text-gradient">Impact</span>
            </h1>
            <p
              className={`text-xl text-white/90 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Professional milestones, community contributions, and the impact I've made 
              through technology and mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-section-bg">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Professional Achievements
            </h2>
            <p className="text-xl text-muted-foreground">
              Certifications, awards, and recognitions earned throughout my career
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4">
              {categories.map(({ id, label, icon: Icon }) => (
                <Badge
                  key={id}
                  variant="secondary"
                  className="px-4 py-2 text-sm cursor-pointer hover:scale-105 transition-transform"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.id}
                className="group p-6 glass-morphism border-0 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${achievement.color} text-white group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {achievement.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {achievement.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gradient mb-2 group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-3">
                      {achievement.organization}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Work Section */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Community & Volunteer Work
            </h2>
            <p className="text-xl text-muted-foreground">
              Giving back to the community through technology and mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {volunteerWork.map((work, index) => (
              <Card
                key={work.id}
                className="group p-8 glass-morphism border-0 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-4 rounded-full ${work.color} text-white group-hover:scale-110 transition-transform`}>
                    <work.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl text-gradient group-hover:text-accent transition-colors">
                        {work.title}
                      </h3>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {work.period}
                      </div>
                    </div>
                    <p className="text-accent font-medium mb-4">
                      {work.organization}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {work.description}
                    </p>
                    <div className="bg-accent/10 rounded-lg p-3">
                      <p className="text-sm font-medium text-accent">
                        Impact: {work.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-section-bg">
        <div className="container px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Let's Make an Impact Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I believe in using technology to create positive change. Whether it's through 
              professional projects or community initiatives, I'm always looking for opportunities 
              to make a meaningful difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="px-6 py-3 text-base">
                <Heart className="w-5 h-5 mr-2" />
                Available for Pro Bono Projects
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base">
                <Users className="w-5 h-5 mr-2" />
                Open to Mentoring Opportunities
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}