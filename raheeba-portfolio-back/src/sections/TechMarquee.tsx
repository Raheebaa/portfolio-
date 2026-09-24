import React from 'react';
import { profile } from '../data/profile';
import {
  Cloud,
  Layers,
  Box,
  Boxes,
  Cpu,
  GitBranch,
  Server,
  Database,
  ShieldCheck
} from 'lucide-react';

const getTechIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'aws':
    case 'azure':
      return Cloud;
    case 'kubernetes':
    case 'eks':
      return Boxes;
    case 'docker':
    case 'helm':
      return Box;
    case 'argocd':
    case 'jenkins':
    case 'github actions':
      return GitBranch;
    case 'terraform':
      return Layers;
    case 'nginx':
    case 'varnish':
      return Server;
    case 'kafka':
    case 'redis':
      return Database;
    case 'cloudflare':
      return ShieldCheck;
    default:
      return Cpu;
  }
};

export const TechMarquee: React.FC = () => {
  const items = profile.techMarquee;
  // Duplicate for seamless infinite loop
  const duplicatedItems = [...items, ...items];

  return (
    <section className="py-14 border-y border-surface-border/60 bg-surface/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            Tech I Work With // Core Infrastructure Stack
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-text-muted">
            Pause on hover
          </span>
        </div>
      </div>

      {/* Marquee Wrapper with side fade gradients */}
      <div className="relative w-full overflow-hidden group">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedItems.map((tech, idx) => {
            const Icon = getTechIcon(tech.name);
            return (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-accent-emerald/40 hover:bg-surface-elevated transition-all duration-200 select-none shadow-sm cursor-default"
              >
                <Icon className="w-4 h-4 text-text-muted group-hover:text-accent-emerald transition-colors" />
                <span className="font-mono text-xs font-semibold tracking-wide">
                  {tech.name}
                </span>
                <span className="hidden md:inline-block text-[10px] text-text-muted/60 font-mono">
                  • {tech.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
