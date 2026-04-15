'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FolderKanban, User, Mail, Moon, Sun } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      // Show side nav after scrolling past hero section (roughly 80vh)
      setShowSideNav(scrollY > window.innerHeight * 0.8);

      // Determine active section
      const sections = ['about', 'portfolio', 'contact'];
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const topNavLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const sideNavLinks = [
    { name: 'Home', href: '#', icon: Home, section: '' },
    { name: 'About', href: '#about', icon: User, section: 'about' },
    { name: 'Portfolio', href: '#portfolio', icon: FolderKanban, section: 'portfolio' },
    { name: 'Contact', href: '#contact', icon: Mail, section: 'contact' },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      {/* Top Navbar - shown when not scrolled past hero */}
      <AnimatePresence>
        {!showSideNav && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
            }`}
          >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
              <a
                href="#"
                className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
              >
                portfolio<span className="text-primary">.</span>
              </a>

              <div className="hidden md:flex items-center gap-8">
                {topNavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:font-semibold transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-foreground" />
                ) : (
                  <Moon className="w-4 h-4 text-foreground" />
                )}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating Side Navigation - shown after scrolling past hero */}
      {showSideNav && (
        <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50">
          <div className="flex flex-col items-center gap-1 md:gap-2 px-1.5 md:px-2.5 py-3 md:py-4 bg-background border border-primary rounded-full shadow-lg">
            {sideNavLinks.map((link) => {
              const isActive = activeSection === link.section || (link.section === '' && activeSection === '');
              return (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.href}
                      className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full ${
                        isActive 
                          ? 'bg-primary/25 text-primary' 
                          : 'text-muted-foreground'
                      }`}
                    >
                      <link.icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="bg-popover border-border">
                    <p className="text-xs md:text-sm">{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
            
            {/* Divider */}
            <div className="h-px w-4 md:w-6 bg-primary/50 my-0.5" />
            
            {/* Theme toggle */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-muted-foreground"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                  ) : (
                    <Moon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-popover border-border">
                <p className="text-xs md:text-sm">{isDark ? 'Light mode' : 'Dark mode'}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </nav>
      )}
    </TooltipProvider>
  );
};

export default Navbar;
