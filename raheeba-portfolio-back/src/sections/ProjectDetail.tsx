import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Terminal, Layers, Cpu } from 'lucide-react';
import { profile } from '../data/profile';
import { Link, useParams, useRouter } from '../utils/router';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { navigate } = useRouter();

  const project = profile.projects.find((p) => p.slug === slug || p.id === slug) || profile.projects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const currentIndex = profile.projects.findIndex((p) => p.slug === project.slug);
  const nextProject = profile.projects[(currentIndex + 1) % profile.projects.length];
  const prevProject = profile.projects[(currentIndex - 1 + profile.projects.length) % profile.projects.length];

  return (
    <article className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-emerald/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Back navigation & Category Badge */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            type="button"
            onClick={() => navigate('/#projects')}
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent-emerald transition-colors py-2 px-3 rounded-lg bg-surface border border-surface-border hover:border-accent-emerald/40 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Work</span>
          </button>

          <span className="font-mono text-xs text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/30 px-3 py-1 rounded-full">
            {project.category} // Case Study
          </span>
        </div>

        {/* Header Block */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-10 border-b border-surface-border/80 mb-12"
        >
          <h1 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1] mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl font-mono text-accent-emerald mb-6">
            {project.headline}
          </p>
          <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Metrics Row if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-surface-border/60">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surface border border-surface-border">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
                    {m.label}
                  </span>
                  <span className="font-syne text-xl sm:text-2xl font-bold text-text-primary">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.header>

        {/* Content Body: Problem -> Approach -> Stack -> Outcome */}
        <div className="space-y-14 text-text-secondary leading-relaxed">
          {/* Section 1: Problem */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-surface border border-surface-border"
          >
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-red-400 mb-4">
              <Terminal className="w-4 h-4" />
              <span>01 // THE CHALLENGE &amp; PROBLEM STATEMENT</span>
            </div>
            <h2 className="font-syne text-2xl font-bold text-text-primary mb-4">
              Production Constraint &amp; Architectural Challenge
            </h2>
            <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </motion.section>

          {/* Section 2: Approach & Engineering Execution */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-surface border border-surface-border"
          >
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-emerald mb-4">
              <Cpu className="w-4 h-4" />
              <span>02 // ENGINEERING APPROACH &amp; IMPLEMENTATION</span>
            </div>
            <h2 className="font-syne text-2xl font-bold text-text-primary mb-6">
              Step-by-Step Technical Execution
            </h2>
            <div className="space-y-4">
              {project.approach.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface-subtle border border-surface-border/60"
                >
                  <span className="font-mono text-xs text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/30 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 3: Technical Stack & Tools */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-surface border border-surface-border"
          >
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              <Layers className="w-4 h-4" />
              <span>03 // INFRASTRUCTURE &amp; TECHNOLOGY STACK</span>
            </div>
            <h2 className="font-syne text-2xl font-bold text-text-primary mb-6">
              Technologies, Cloud Services &amp; Tools Deployed
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.stack.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border flex items-center gap-2.5 text-xs font-mono text-text-primary"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-emerald" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 4: Outcome & Verified Results */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-surface border border-accent-emerald/30 bg-gradient-to-b from-surface to-accent-emerald/[0.02]"
          >
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-emerald mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>04 // OUTCOME &amp; PRODUCTION IMPACT</span>
            </div>
            <h2 className="font-syne text-2xl font-bold text-text-primary mb-6">
              Measured Results &amp; Reliability Enhancements
            </h2>
            <ul className="space-y-3.5">
              {project.outcome.map((res, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-text-secondary font-sans">
                  <CheckCircle2 className="w-5 h-5 text-accent-emerald shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Case Study Footer & Next/Prev Case Studies */}
        <div className="mt-16 pt-10 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="text-xs font-mono text-text-secondary hover:text-accent-emerald transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: {prevProject.title}</span>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="text-xs font-mono text-text-secondary hover:text-accent-emerald transition-colors flex items-center gap-2"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
