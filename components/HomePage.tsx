import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Redesign",
      description: "Complete UX overhaul of a fashion retailer's website, resulting in 40% increase in conversions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      tech: ["React", "TypeScript", "Figma"]
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description: "User-centered design for a patient management app used by 10,000+ medical professionals.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      tech: ["React Native", "Adobe XD", "Principle"]
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Complex data visualization dashboard for investment management with real-time updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tech: ["Vue.js", "D3.js", "Sketch"]
    },
    {
      id: 4,
      title: "SaaS Platform Redesign",
      description: "Complete design system and interface redesign for a B2B project management platform.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tech: ["React", "Storybook", "Figma"]
    }
  ];

  const testimonials = [
    {
      text: "Alex's attention to detail and user-centered approach transformed our product. Exceptional design skills.",
      author: "Sarah Johnson",
      title: "VP of Product, TechCorp"
    },
    {
      text: "Outstanding developer who bridges design and engineering perfectly. Delivered beyond expectations.",
      author: "Michael Rodriguez",
      title: "Design Director, Innovation Labs"
    },
    {
      text: "Alex consistently delivers pixel-perfect implementations with excellent user experience insights.",
      author: "Emily Zhang",
      title: "Head of Engineering, StartupXYZ"
    }
  ];

  const skills = [
    "React", "TypeScript", "Next.js", "Vue.js", "Node.js",
    "Figma", "Adobe Creative Suite", "Sketch", "Principle",
    "HTML5", "CSS3", "Sass", "Tailwind CSS", "Styled Components",
    "User Research", "Prototyping", "Design Systems", "A/B Testing"
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight">
            Senior Front-end Developer &amp; UX/UI Designer
          </h1>
          <p className="text-xl text-medium-gray mb-8 leading-relaxed max-w-2xl">
            I craft exceptional digital experiences by bridging the gap between design and development. 
            With 7 years of experience, I help companies build products that users love and businesses grow.
          </p>
          <Button
            onClick={() => onNavigate('projects')}
            className="bg-accent-blue hover:bg-blue-600 text-white px-8 py-3 text-lg transition-smooth"
          >
            View My Work
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-navy mb-4">Featured Projects</h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            A selection of recent work showcasing my approach to user-centered design and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group cursor-pointer border border-gray-200 hover:border-accent-blue hover:shadow-lg transition-smooth"
              onClick={() => onNavigate('projects')}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-3">{project.title}</h3>
                <p className="text-medium-gray mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-light-gray text-charcoal text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-light-gray py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-navy text-center mb-16">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-sm">
                <CardContent className="p-6">
                  <p className="text-charcoal mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-navy">{testimonial.author}</p>
                    <p className="text-medium-gray text-sm">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-navy mb-6">About Me</h2>
            <div className="space-y-4 text-medium-gray leading-relaxed">
              <p>
                With over 7 years of experience in front-end development and UX/UI design, I specialize 
                in creating seamless digital experiences that balance user needs with business objectives. 
                My background spans startups to enterprise companies, giving me a unique perspective on 
                scalable design systems and development practices.
              </p>
              <p>
                I'm passionate about the intersection of design and technology, constantly exploring new 
                tools and methodologies to create more intuitive and accessible products. When I'm not 
                coding or designing, you'll find me mentoring junior developers, contributing to open-source 
                projects, and staying up-to-date with the latest industry trends.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-light-gray">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                alt="Alex Chen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-navy mb-4">Skills &amp; Technologies</h2>
          <p className="text-lg text-medium-gray">
            A comprehensive toolkit for modern web development and design.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white border border-gray-200 text-charcoal rounded-full 
                         hover:border-accent-blue hover:text-accent-blue transition-smooth cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to Start a Project?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            I'm always excited to work on challenging projects and help bring great ideas to life. 
            Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-accent-blue hover:bg-blue-600 text-white px-8 py-3 text-lg transition-smooth"
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => onNavigate('projects')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg transition-smooth"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}