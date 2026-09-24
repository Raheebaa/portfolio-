import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { profile } from '../data/profile';
import { MagneticButton } from '../components/MagneticButton';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-surface-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Heading, Role, Paragraphs & Stats */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div variants={item}>
              <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-accent-emerald">
                <span>01</span>
                <span className="w-8 h-px bg-accent-emerald/40 inline-block" />
                <span>{profile.about.badge}</span>
              </div>

              <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                {profile.name}
              </h2>
              <p className="mt-2 text-base sm:text-lg font-mono text-accent-emerald">
                {profile.about.roleLine}
              </p>
            </motion.div>

            {/* Editorial Paragraphs from CV / Profile */}
            <motion.div variants={item} className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed font-sans">
              <p>{profile.about.paragraph1}</p>
              <p className="text-text-muted">{profile.about.paragraph2}</p>
            </motion.div>

            {/* Verified Real Stats Row */}
            <motion.div
              variants={item}
              className="pt-6 border-t border-surface-border/60 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {profile.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface border border-surface-border/80 hover:border-accent-emerald/40 transition-colors shadow-sm"
                >
                  <div className="font-syne text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-mono text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton
                href="#contact"
                variant="primary"
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="bg-accent-emerald hover:bg-emerald-400 text-background font-semibold"
              >
                {profile.about.ctaPrimary}
              </MagneticButton>

              <MagneticButton
                href="#projects"
                variant="outline"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {profile.about.ctaSecondary}
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Architectural Highlights Card */}
          <motion.div variants={item} className="lg:col-span-4">
            <div className="p-7 rounded-2xl bg-surface border border-surface-border space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-emerald/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 font-mono text-xs text-accent-emerald">
                <Terminal className="w-4 h-4" />
                <span className="uppercase tracking-wider">CORE FOCUS AREAS</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-subtle border border-surface-border/50">
                  <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="text-text-primary font-semibold block">Cloud Infrastructure &amp; IaC</span>
                    <span className="text-text-muted text-[11px]">AWS, Azure, Terraform, VPC, Auto Scaling</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-subtle border border-surface-border/50">
                  <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="text-text-primary font-semibold block">Container Orchestration</span>
                    <span className="text-text-muted text-[11px]">Kubernetes, Amazon EKS, Helm, Docker</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-subtle border border-surface-border/50">
                  <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="text-text-primary font-semibold block">GitOps &amp; CI/CD Pipelines</span>
                    <span className="text-text-muted text-[11px]">ArgoCD, Jenkins, GitHub Actions, Kaniko</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-subtle border border-surface-border/50">
                  <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="text-text-primary font-semibold block">Linux Systems &amp; High Availability</span>
                    <span className="text-text-muted text-[11px]">Nginx, Varnish, MySQL/Aurora, Redis, CloudWatch</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-text-muted">
                <span>Location:</span>
                <span className="text-text-primary font-semibold">{profile.location}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};