import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Linkedin, MessageSquare, ChevronDown } from 'lucide-react';
import { profile } from '../data/profile';
import { MagneticButton } from '../components/MagneticButton';
import profileImage from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-accent-emerald/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Hero Editorial */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Green Pulsing Available for New Opportunities Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated/90 border border-surface-border text-xs font-mono text-text-secondary w-fit mb-6 shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
              </span>
              <span className="text-text-primary tracking-wide text-xs font-medium uppercase">
                {profile.availabilityText}
              </span>
            </motion.div>

            {/* Big Headline in font-syne */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-syne text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter text-text-primary leading-[1.06] mb-6 drop-shadow-sm"
            >
              DevOps Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-slate-200 to-accent-emerald">
                &amp; Cloud Infrastructure Builder.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg sm:text-xl text-text-secondary max-w-xl font-normal leading-relaxed mb-8"
            >
              {profile.hero.subtitle}
            </motion.p>

            {/* Action Buttons & Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <MagneticButton
                href="#projects"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
                className="bg-accent-emerald hover:bg-emerald-400 text-background font-semibold"
              >
                {profile.hero.ctaWork}
              </MagneticButton>

              <MagneticButton
                href="#contact"
                variant="secondary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {profile.hero.ctaContact}
              </MagneticButton>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-6 border-t border-surface-border/60"
            >
              <span className="font-mono text-xs text-text-muted mr-2">Connect:</span>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-surface-elevated/70 border border-surface-border text-text-secondary hover:text-accent-emerald hover:border-accent-emerald/40 transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-surface-elevated/70 border border-surface-border text-text-secondary hover:text-accent-emerald hover:border-accent-emerald/40 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${profile.phone}`}
                aria-label="Phone Call"
                className="p-2.5 rounded-xl bg-surface-elevated/70 border border-surface-border text-text-secondary hover:text-accent-emerald hover:border-accent-emerald/40 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={profile.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="p-2.5 rounded-xl bg-surface-elevated/70 border border-surface-border text-text-secondary hover:text-accent-emerald hover:border-accent-emerald/40 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Portrait Card with WhatsApp image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Subtle aura blur */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent-emerald/20 to-accent-cyan/10 blur-xl opacity-50" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden border border-surface-border bg-surface shadow-2xl">
                <div className="aspect-[4/5] w-full overflow-hidden bg-surface-elevated">
                  <img
                    src={profileImage}
                    alt={profile.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Overlay Pill on Card */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-surface/90 backdrop-blur-md border border-surface-border/80 flex items-center justify-between">
                  <div>
                    <span className="font-syne font-bold text-sm text-text-primary block">
                      {profile.name}
                    </span>
                    <span className="font-mono text-[11px] text-text-muted">
                      {profile.title.split('|')[0].trim()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                    <span className="font-mono text-[10px] text-accent-emerald font-medium">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-14 flex flex-col items-center justify-center text-text-muted text-xs font-mono"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 hover:text-accent-emerald transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-accent-emerald" />
        </a>
      </motion.div>
    </section>
  );
};
