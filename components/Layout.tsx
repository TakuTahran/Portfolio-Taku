import React from 'react';
import { Button } from './ui/button';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold text-charcoal hover:text-accent-blue transition-smooth"
            >
              Alex Chen
            </button>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-base transition-smooth ${
                    currentPage === item.id
                      ? 'text-accent-blue font-medium'
                      : 'text-charcoal hover:text-accent-blue'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => onNavigate('contact')}
              className="hidden md:block bg-accent-blue hover:bg-blue-600 text-white px-6 py-2 transition-smooth"
            >
              Let's Talk
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-charcoal">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-medium">Alex Chen</p>
              <p className="text-gray-400">UX/UI-focused Front-end Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-smooth">
                LinkedIn
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-smooth">
                GitHub
              </a>
              <a href="https://dribbble.com" className="text-gray-400 hover:text-white transition-smooth">
                Dribbble
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 Alex Chen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}