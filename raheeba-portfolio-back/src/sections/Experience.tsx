import React from 'react';
import { motion } from 'framer-motion';
import { profile, ExperienceItem } from '../data/profile';
import { Building2, Calendar, MapPin, CheckCircle2, Award, GraduationCap, AlertCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div>
          <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-accent-emerald">
            <span>03</span>
            <span className="w-8 h-px bg-accent-emerald/40 inline-block" />
            <span>EXPERIENCE &amp; BACKGROUND</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Engineering Journey &amp; Career History.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed font-sans">
            Hands-on production track record in cloud architecture, container orchestration, CI/CD automation, and Linux administration.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Vertical Guide Line */}
          <div className="absolute top-3 bottom-3 left-4 md:left-8 w-px bg-gradient-to-b from-accent-emerald via-surface-border to-surface-border" />

          <div className="space-y-12">
            {profile.experience.map((exp: ExperienceItem, idx: number) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Node marker */}
                <div className="absolute left-4 md:left-8 top-6 -translate-x-1/2 flex items-center justify-center">
                  <span className="relative flex h-5 w-5">
                    {exp.isCurrent && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-50"></span>
                    )}
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-surface border-2 border-accent-emerald items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-accent-emerald" />
                    </span>
                  </span>
                </div>

                {/* Experience Card */}
                <div className="p-6 md:p-8 rounded-2xl bg-surface border border-surface-border hover:border-accent-emerald/40 transition-all duration-300 shadow-xl">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-border/60">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-syne text-xl md:text-2xl font-bold text-text-primary">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="font-mono text-[10px] text-accent-emerald bg-accent-emerald/10 px-2.5 py-0.5 rounded-full border border-accent-emerald/30 uppercase tracking-wider font-semibold">
                            Present Role
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-2 font-mono text-xs text-text-secondary flex-wrap">
                        <span className="flex items-center gap-1.5 text-text-primary font-semibold">
                          <Building2 className="w-3.5 h-3.5 text-accent-emerald" />
                          {exp.company}
                        </span>
                        <span className="text-text-muted">•</span>
                        <span className="flex items-center gap-1.5 text-text-muted">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-accent-emerald bg-accent-emerald/10 px-3 py-1.5 rounded-lg border border-accent-emerald/20 w-fit sm:self-start">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-5 text-sm md:text-base text-text-secondary leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="mt-6 space-y-3">
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                      KEY DELIVERABLES &amp; IMPACT
                    </span>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-xs md:text-sm text-text-secondary font-sans">
                          <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="mt-8 pt-6 border-t border-surface-border/60 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-surface-subtle border border-surface-border text-xs font-mono text-text-muted hover:text-text-primary hover:border-accent-emerald/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 pt-16 border-t border-surface-border/60">
          {/* Education Card */}
          <div className="p-7 rounded-2xl bg-surface border border-surface-border space-y-4">
            <div className="flex items-center gap-2.5 font-mono text-xs text-accent-emerald uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </div>
            {profile.education.map((edu, idx) => (
              <div key={idx} className="space-y-1 pt-2">
                <h4 className="font-syne text-lg font-bold text-text-primary">
                  {edu.degree}
                </h4>
                <p className="text-sm text-text-secondary font-sans">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-3 font-mono text-xs text-text-muted pt-2">
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Card */}
          <div className="p-7 rounded-2xl bg-surface border border-surface-border space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-mono text-xs text-accent-emerald uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>CERTIFICATIONS &amp; CREDENTIALS</span>
              </div>
              <span className="font-mono text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded">
                Pending Verification
              </span>
            </div>

            {profile.certifications.map((cert) => (
              <div key={cert.id} className="space-y-2 pt-2">
                <h4 className="font-syne text-lg font-bold text-text-primary">
                  {cert.name}
                </h4>
                <p className="text-xs font-mono text-text-muted">
                  Issuer: {cert.issuer}
                </p>
                {cert.note && (
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-subtle border border-surface-border text-xs font-mono text-text-muted">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{cert.note}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
