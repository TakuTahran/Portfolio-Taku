import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const projects = [
    {
      id: 1,
      title: "E-commerce Redesign",
      subtitle: "Fashion Retailer Platform",
      overview: "Complete UX overhaul of a fashion retailer's website, resulting in 40% increase in conversions and 60% improvement in user task completion rates.",
      challenge: "The existing platform had a confusing navigation structure, poor mobile experience, and a checkout process with 68% abandonment rate. Users were struggling to find products and complete purchases.",
      solution: "Implemented a user-centered design approach with extensive user research, created a comprehensive design system, and rebuilt the frontend with React and TypeScript. Key improvements included simplified navigation, enhanced product discovery, and streamlined checkout flow.",
      results: [
        "40% increase in conversion rates",
        "60% improvement in task completion",
        "32% reduction in bounce rate",
        "25% increase in average order value"
      ],
      tech: ["React", "TypeScript", "Figma", "Storybook", "Sass"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      year: "2024"
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      subtitle: "Patient Management System",
      overview: "User-centered design for a patient management app used by 10,000+ medical professionals across 200+ healthcare facilities.",
      challenge: "Healthcare professionals needed a mobile solution to access patient data, update records, and communicate with colleagues while on the go. The existing system was desktop-only and inefficient for mobile workflows.",
      solution: "Designed and developed a comprehensive mobile app with offline capabilities, secure data handling, and intuitive workflows optimized for medical professionals. Conducted extensive user research with doctors, nurses, and administrators.",
      results: [
        "10,000+ active medical professionals",
        "200+ healthcare facilities adoption",
        "45% reduction in data entry time",
        "92% user satisfaction score"
      ],
      tech: ["React Native", "Node.js", "Adobe XD", "Principle", "MongoDB"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
      year: "2023"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      subtitle: "Investment Management Platform",
      overview: "Complex data visualization dashboard for investment management with real-time updates, serving portfolio managers and financial advisors.",
      challenge: "Investment professionals needed to monitor multiple portfolios, track market changes, and make quick decisions based on complex financial data. The existing tools were fragmented and difficult to use.",
      solution: "Created an integrated dashboard with real-time data visualization, customizable widgets, and intelligent alerts. Focused on information hierarchy and rapid decision-making workflows with advanced filtering and search capabilities.",
      results: [
        "50% faster portfolio analysis",
        "Real-time data for 1000+ securities",
        "35% improvement in decision speed",
        "Reduced system switching by 70%"
      ],
      tech: ["Vue.js", "D3.js", "WebSocket", "Sketch", "Python API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      year: "2023"
    },
    {
      id: 4,
      title: "SaaS Platform Redesign",
      subtitle: "B2B Project Management Tool",
      overview: "Complete design system and interface redesign for a B2B project management platform used by teams across Fortune 500 companies.",
      challenge: "The existing platform had inconsistent UI patterns, poor scalability, and users were struggling with complex workflows. The design system was fragmented and development was slow.",
      solution: "Developed a comprehensive design system from scratch, redesigned core user flows, and implemented a component library. Focused on improving team collaboration features and reducing cognitive load for project managers.",
      results: [
        "Unified design system with 50+ components",
        "30% improvement in user onboarding",
        "45% faster development cycles",
        "Fortune 500 client retention at 95%"
      ],
      tech: ["React", "Storybook", "Figma", "Styled Components", "GraphQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      year: "2022"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-navy mb-6">My Projects</h1>
        <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
          Detailed case studies showcasing my approach to solving complex design and development challenges. 
          Each project demonstrates user-centered design, technical excellence, and measurable business impact.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-20">
        {projects.map((project, index) => (
          <div key={project.id} className="space-y-8">
            {/* Project Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-accent-blue font-semibold">{project.year}</span>
                <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
                <span className="text-medium-gray">{project.subtitle}</span>
              </div>
              <h2 className="text-4xl font-bold text-navy mb-4">{project.title}</h2>
              <p className="text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Project Image */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-navy mb-4">The Challenge</h3>
                  <p className="text-medium-gray leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-navy mb-4">The Solution</h3>
                  <p className="text-medium-gray leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-navy mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-light-gray text-charcoal rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-2xl font-semibold text-navy mb-6">Key Results</h3>
                <Card className="bg-light-gray border-none">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-charcoal leading-relaxed">{result}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Divider (except for last project) */}
            {index < projects.length - 1 && (
              <div className="border-t border-gray-200 pt-8"></div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 py-16 bg-light-gray rounded-2xl">
        <h2 className="text-3xl font-semibold text-navy mb-4">Interested in Working Together?</h2>
        <p className="text-lg text-medium-gray mb-8 max-w-2xl mx-auto">
          I'm always excited to take on new challenges and help bring innovative ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-accent-blue hover:bg-blue-600 text-white px-8 py-3 text-lg transition-smooth"
          >
            Start a Project
          </Button>
          <Button
            onClick={() => onNavigate('resume')}
            variant="outline"
            className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-3 text-lg transition-smooth"
          >
            View Resume
          </Button>
        </div>
      </div>
    </div>
  );
}