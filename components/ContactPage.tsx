import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "alex.chen@email.com",
      description: "For project inquiries and collaborations"
    },
    {
      title: "Phone",
      value: "(555) 123-4567",
      description: "Available Mon-Fri, 9 AM - 6 PM PST"
    },
    {
      title: "Location",
      value: "San Francisco, CA",
      description: "Open to remote work and travel"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/alexchen",
      description: "Professional updates and connections"
    },
    {
      name: "GitHub",
      url: "https://github.com/alexchen",
      description: "Code repositories and open source contributions"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/alexchen",
      description: "Design portfolio and creative work"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-navy mb-6">Let's Work Together</h1>
        <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
          I'm always excited to take on new challenges and collaborate on innovative projects. 
          Whether you're a startup looking to build your first product or an established company 
          wanting to improve your user experience, I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold text-navy mb-6">Send Me a Message</h2>
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full h-32 resize-none"
                    placeholder="Tell me about your project, timeline, and how I can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-blue hover:bg-blue-600 text-white py-3 text-lg transition-smooth"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-navy mb-6">Get In Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-navy mb-2">{info.title}</h3>
                    <p className="text-lg text-accent-blue mb-1">{info.value}</p>
                    <p className="text-sm text-medium-gray">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-4">Connect Online</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-light-gray rounded-lg hover:bg-gray-100 transition-smooth">
                  <div>
                    <h4 className="font-semibold text-navy">{social.name}</h4>
                    <p className="text-sm text-medium-gray">{social.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transition-smooth"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    Visit
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <Card className="bg-navy text-white border-none">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Current Availability</h3>
              <p className="text-gray-300 mb-4">
                I'm currently accepting new projects and collaborations. My typical project 
                timeline ranges from 2-12 weeks depending on scope and complexity.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-navy text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-navy mb-3">What's your typical project process?</h3>
              <p className="text-medium-gray text-sm leading-relaxed">
                I start with a discovery phase to understand your goals, followed by research and planning, 
                design and prototyping, development, and finally testing and launch. I maintain clear 
                communication throughout the entire process.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-navy mb-3">Do you work with international clients?</h3>
              <p className="text-medium-gray text-sm leading-relaxed">
                Absolutely! I have experience working with clients across different time zones and am 
                comfortable with remote collaboration. I use various tools to ensure smooth communication 
                regardless of location.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-navy mb-3">What's included in your services?</h3>
              <p className="text-medium-gray text-sm leading-relaxed">
                My services range from UX/UI design and front-end development to design system creation 
                and user research. I can work on individual components or take on full-scale projects 
                from concept to launch.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-navy mb-3">How do you handle project pricing?</h3>
              <p className="text-medium-gray text-sm leading-relaxed">
                I offer both project-based and hourly pricing depending on the scope and nature of the work. 
                After our initial discussion, I'll provide a detailed proposal with clear deliverables 
                and timelines.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}