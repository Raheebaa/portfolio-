import React from 'react';
import { motion } from 'framer-motion';
import { profile, ResourceItem } from '../data/profile';
import { ShieldCheck, Mail } from 'lucide-react';

export const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 md:py-32 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-accent-emerald">
              <span>06</span>
              <span className="w-8 h-px bg-accent-emerald/40 inline-block" />
              <span>FREE RESOURCES</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Architecture Checklists &amp; Templates.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed font-sans">
              Open blueprints, Helm starter manifests, disaster recovery checklists, and incident response kits designed for production DevOps engineers.
            </p>
          </div>
        </div>

        {/* Resources Download-style List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.resources.map((item: ResourceItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-surface border border-surface-border hover:border-accent-emerald/40 hover:bg-surface-elevated/70 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/20 px-3 py-1 rounded-full">
                    {item.type}
                  </span>

                  <span className="font-mono text-[11px] text-text-muted">
                    Format: {item.format}
                  </span>
                </div>

                <h3 className="font-syne text-xl font-bold text-text-primary mb-3">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Resource Download / Access Action */}
              <div className="pt-5 border-t border-surface-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-emerald" />
                  <span>{item.downloadNote}</span>
                </div>

                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(`Request for Resource: ${item.title}`)}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-surface-elevated border border-surface-border hover:border-accent-emerald/40 text-xs font-mono text-text-primary hover:text-accent-emerald transition-colors shrink-0 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Request Access</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
