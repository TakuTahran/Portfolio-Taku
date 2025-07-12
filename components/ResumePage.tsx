import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface ResumePageProps {
  onNavigate: (page: string) => void;
}

export function ResumePage({ onNavigate }: ResumePageProps) {
  const experience = [
    {
      title: "Senior Front-end Developer",
      company: "TechFlow Solutions",
      period: "2022 - Present",
      achievements: [
        "Led front-end development for 3 major product launches, resulting in 45% increase in user engagement",
        "Architected and implemented design system used across 8 product teams",
        "Mentored 5 junior developers and established best practices for React development",
        "Collaborated with UX team to improve conversion rates by 32% through A/B testing"
      ]
    },
    {
      title: "UX/UI Developer",
      company: "Innovation Labs",
      period: "2020 - 2022",
      achievements: [
        "Designed and developed user interfaces for B2B SaaS platform serving 50,000+ users",
        "Reduced development time by 40% through creation of reusable component library",
        "Conducted user research and usability testing to inform design decisions",
        "Implemented responsive designs resulting in 60% improvement in mobile user experience"
      ]
    },
    {
      title: "Front-end Developer",
      company: "StartupXYZ",
      period: "2018 - 2020",
      achievements: [
        "Built and launched MVP that acquired 10,000 users in first 6 months",
        "Developed cross-platform mobile app using React Native",
        "Optimized application performance, achieving 90+ Lighthouse scores",
        "Collaborated closely with designers to implement pixel-perfect interfaces"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, San Diego",
      period: "2014 - 2018",
      details: "Concentration in Human-Computer Interaction"
    }
  ];

  const certifications = [
    "Google UX Design Professional Certificate",
    "AWS Certified Developer Associate",
    "Certified Scrum Master (CSM)",
    "Adobe Certified Expert (ACE) - Photoshop"
  ];

  const handleDownload = () => {
    // In a real application, this would trigger a download of the actual resume PDF
    alert('Resume download would start here. In a real application, this would download the PDF file.');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-navy mb-6">Resume</h1>
        <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed mb-8">
          7+ years of experience creating exceptional digital experiences through the perfect blend 
          of design sensibility and technical expertise.
        </p>
        <Button
          onClick={handleDownload}
          className="bg-accent-blue hover:bg-blue-600 text-white px-8 py-3 text-lg transition-smooth"
        >
          Download PDF Resume
        </Button>
      </div>

      {/* Resume Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
        {/* Contact Info */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-navy">Alex Chen</h2>
          <p className="text-lg text-medium-gray">Senior UX/UI-focused Front-end Developer</p>
          <div className="flex flex-wrap justify-center gap-6 text-medium-gray">
            <span>alex.chen@email.com</span>
            <span>•</span>
            <span>(555) 123-4567</span>
            <span>•</span>
            <span>San Francisco, CA</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div>
          <h3 className="text-2xl font-semibold text-navy mb-4 border-b-2 border-accent-blue pb-2">
            Professional Summary
          </h3>
          <p className="text-medium-gray leading-relaxed">
            Experienced front-end developer with a strong UX/UI background, specializing in creating 
            user-centered digital experiences that drive business results. Proven track record of leading 
            cross-functional teams, implementing design systems, and delivering scalable solutions for 
            both startups and enterprise companies. Passionate about bridging the gap between design 
            and development to create exceptional user experiences.
          </p>
        </div>

        {/* Core Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-navy mb-6 border-b-2 border-accent-blue pb-2">
            Core Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-navy mb-3">Frontend Development</h4>
                <div className="text-sm text-medium-gray space-y-1">
                  <p>React, Vue.js, TypeScript</p>
                  <p>Next.js, Node.js</p>
                  <p>HTML5, CSS3, Sass</p>
                  <p>Tailwind CSS, Styled Components</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-navy mb-3">UX/UI Design</h4>
                <div className="text-sm text-medium-gray space-y-1">
                  <p>Figma, Sketch, Adobe Creative Suite</p>
                  <p>Prototyping, Wireframing</p>
                  <p>User Research, Usability Testing</p>
                  <p>Design Systems, Component Libraries</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-navy mb-3">Tools &amp; Methods</h4>
                <div className="text-sm text-medium-gray space-y-1">
                  <p>Git, GitHub, GitLab</p>
                  <p>Webpack, Vite, Storybook</p>
                  <p>Agile, Scrum, Kanban</p>
                  <p>A/B Testing, Analytics</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Professional Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-navy mb-6 border-b-2 border-accent-blue pb-2">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="space-y-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-navy">{job.title}</h4>
                    <p className="text-lg text-accent-blue">{job.company}</p>
                  </div>
                  <span className="text-medium-gray font-medium">{job.period}</span>
                </div>
                <ul className="space-y-2 ml-4">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-medium-gray leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-navy mb-6 border-b-2 border-accent-blue pb-2">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-navy">{edu.degree}</h4>
                  <p className="text-accent-blue">{edu.school}</p>
                  <p className="text-medium-gray text-sm">{edu.details}</p>
                </div>
                <span className="text-medium-gray font-medium">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-navy mb-6 border-b-2 border-accent-blue pb-2">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent-blue rounded-full flex-shrink-0"></span>
                <span className="text-medium-gray">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 py-12 bg-light-gray rounded-2xl">
        <h2 className="text-3xl font-semibold text-navy mb-4">Let's Work Together</h2>
        <p className="text-lg text-medium-gray mb-8 max-w-2xl mx-auto">
          Ready to bring your next project to life? I'd love to discuss how my skills and experience 
          can help achieve your goals.
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
            className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-3 text-lg transition-smooth"
          >
            View My Work
          </Button>
        </div>
      </div>
    </div>
  );
}