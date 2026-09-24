import React from 'react';
import { motion } from 'framer-motion';
import { profile, EngineeringNote } from '../data/profile';
import { Clock, ArrowUpRight, Terminal } from 'lucide-react';
import { Link } from '../utils/router';

export const EngineeringNotes: React.FC = () => {
  return (
    <section id="notes" className="py-24 md:py-32 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-accent-emerald">
              <span>04</span>
              <span className="w-8 h-px bg-accent-emerald/40 inline-block" />
              <span>ENGINEERING NOTES</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Latest Technical Writing.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed font-sans">
              Deep dives on Kubernetes troubleshooting, zero-downtime cross-region migrations, and GitOps pipeline engineering.
            </p>
          </div>
        </div>

        {/* Notes Grid: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.engineeringNotes.map((note: EngineeringNote, idx: number) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-surface border border-surface-border hover:border-accent-emerald/50 hover:bg-surface-elevated/80 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Top gradient highlight */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-emerald/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-7">
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-accent-emerald bg-accent-emerald/10 px-2.5 py-1 rounded-full border border-accent-emerald/20">
                    {note.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{note.readingTime}</span>
                  </div>
                </div>

                {/* Title */}
                <Link to={`/notes/${note.slug}`} className="block group-hover:text-accent-emerald transition-colors mb-3">
                  <h3 className="font-syne text-xl font-bold text-text-primary leading-snug">
                    {note.title}
                  </h3>
                </Link>

                {/* Summary */}
                <p className="font-sans text-sm text-text-secondary leading-relaxed font-normal mb-6">
                  {note.summary}
                </p>

                {/* Key takeaways count */}
                <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
                  <Terminal className="w-3.5 h-3.5 text-accent-emerald" />
                  <span>{note.keyInsights.length} Key Production Takeaways</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-7 py-4 bg-surface-subtle/50 border-t border-surface-border/60 flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted">
                  {note.date}
                </span>

                <Link
                  to={`/notes/${note.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-text-primary hover:text-accent-emerald transition-colors font-medium"
                >
                  <span>Read Note</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
