import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { useRouter } from '../utils/router';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Notes', href: '#notes' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { path, navigate } = useRouter();
  const isHomePage = path === '/' || path.startsWith('/#');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sectionIds = ['about', 'skills', 'projects', 'experience', 'notes', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      navigate('/' + href);
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/85 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/30'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <button
            type="button"
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-left text-text-primary focus:outline-none cursor-pointer"
            aria-label="Raheeba MK Portfolio Home"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center group-hover:border-accent-emerald/50 group-hover:bg-accent-emerald/10 transition-all shadow-sm">
              <span className="font-syne font-bold text-sm text-text-primary group-hover:text-accent-emerald transition-colors">
                R
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-bold tracking-tight text-base group-hover:text-accent-emerald transition-colors">
                {profile.name}
              </span>
              <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                DevOps &amp; Cloud
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface/70 border border-surface-border/80 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = isHomePage && activeSection === sectionId;
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 py-1 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full cursor-pointer ${
                    isActive
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-surface-elevated border border-surface-border rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-elevated border border-surface-border hover:border-accent-emerald/50 hover:bg-accent-emerald/10 text-xs font-mono font-medium text-text-primary hover:text-accent-emerald transition-all duration-200 cursor-pointer shadow-sm group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-elevated border border-surface-border text-text-primary hover:text-accent-emerald focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-background/95 backdrop-blur-xl border-b border-surface-border p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
                  </span>
                  <span className="font-mono text-xs text-text-secondary">
                    {profile.status}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-accent-emerald">
                  {profile.location}
                </span>
              </div>

              <div className="flex flex-col gap-1 py-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors text-left cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-surface-border flex gap-3">
                <button
                  type="button"
                  onClick={() => handleNavClick('#contact')}
                  className="w-full py-2.5 px-4 rounded-lg bg-accent-emerald/10 border border-accent-emerald/30 text-xs font-mono font-semibold text-accent-emerald hover:bg-accent-emerald/20 transition-colors text-center cursor-pointer"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
