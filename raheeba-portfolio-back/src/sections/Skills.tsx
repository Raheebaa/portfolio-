import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, GitBranch, Layers, Server, ShieldCheck, Boxes } from 'lucide-react';
import { profile } from '../data/profile';

const categoryIcons: Record<string, React.ElementType> = {
  Cloud,
  Orchestration: Boxes,
  'Managed K8s': Boxes,
  Containers: Boxes,
  'Package Manager': Layers,
  'GitOps CD': GitBranch,
  'CI/CD': GitBranch,
  IaC: Layers,
  'Proxy & Web': Server,
  'HTTP Cache': Server,
  'Event Streams': Server,
  'In-Memory Cache': Server,
  'DNS & Security': ShieldCheck,
};

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(profile.techMarquee.map((tech) => tech.category)));

  return (
    <section id="skills" className="py-24 md:py-32 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-accent-emerald">
            <span>02</span>
            <span className="w-8 h-px bg-accent-emerald/40 inline-block" />
            <span>SKILLS</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Tools for reliable delivery.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
            A practical infrastructure toolkit spanning cloud platforms, orchestration, automation, and production operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, index) => {
            const skills = profile.techMarquee.filter((tech) => tech.category === category);
            const Icon = categoryIcons[category] ?? Cloud;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-accent-emerald/40 transition-colors shadow-xl"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent-emerald" />
                  </div>
                  <h3 className="font-syne text-lg font-bold text-text-primary">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg bg-surface-elevated border border-surface-border font-mono text-xs text-text-secondary"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
