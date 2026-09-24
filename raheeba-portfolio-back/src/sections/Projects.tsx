import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { profile, ProjectItem } from '../data/profile';
import { Terminal, Shield, ArrowUpRight } from 'lucide-react';

const filterTabs: Array<'All Work' | 'Infrastructure' | 'Migrations' | 'CI-CD'> = [
  'All Work',
  'Infrastructure',
  'Migrations',
  'CI-CD',
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All Work' | 'Infrastructure' | 'Migrations' | 'CI-CD'>('All Work');

  const filteredProjects = profile.projects.filter((p) => {
    if (activeFilter === 'All Work') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 md:py-32 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-accent-emerald">
              <span>02</span>
              <span className="w-8 h-px bg-accent-emerald/40 inline-block" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Cloud, DevOps &amp; Production Systems.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed font-sans">
              Real-world case studies detailing zero-downtime cross-region disaster recovery, Kubernetes migrations, and high-throughput CI/CD pipelines.
            </p>
          </div>

          {/* Direct GitHub link */}
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-surface-border hover:border-accent-emerald/40 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors w-fit self-start md:self-end shadow-sm"
          >
            <span>GitHub Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent-emerald" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeFilter === tab
                  ? 'bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/40 shadow-sm font-semibold'
                  : 'bg-surface/80 text-text-secondary border border-surface-border hover:border-surface-hover hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectItem, idx: number) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Architecture Note Footer */}
        <div className="mt-14 p-6 rounded-2xl bg-surface/50 border border-surface-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3 text-text-secondary">
            <Shield className="w-4 h-4 text-accent-emerald shrink-0" />
            <span>All architecture implementations adhere to immutable infrastructure, least-privilege security, and zero-drift IaC standards.</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted shrink-0">
            <Terminal className="w-3.5 h-3.5 text-accent-emerald" />
            <span>Validated across AWS &amp; Azure</span>
          </div>
        </div>
      </div>
    </section>
  );
};
