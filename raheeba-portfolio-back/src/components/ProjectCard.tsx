import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, Layers, RefreshCw, GitBranch } from 'lucide-react';
import { ProjectItem } from '../data/profile';
import { Link } from '../utils/router';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Migrations':
        return RefreshCw;
      case 'CI-CD':
        return GitBranch;
      default:
        return Layers;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between rounded-2xl bg-surface border border-surface-border hover:border-accent-emerald/50 hover:bg-surface-elevated/70 transition-all duration-300 shadow-xl overflow-hidden"
    >
      {/* Top subtle highlight gradient on hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-emerald/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Top Category & Status Header */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-emerald bg-accent-emerald/10 px-3 py-1 rounded-full border border-accent-emerald/20">
              <CategoryIcon className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>

            {project.featured && (
              <span className="font-mono text-[10px] text-accent-emerald uppercase tracking-wider bg-accent-emerald/10 border border-accent-emerald/30 px-2.5 py-0.5 rounded-full font-medium">
                Production Case Study
              </span>
            )}
          </div>

          {/* Project Title & Headline in font-syne */}
          <Link to={`/projects/${project.slug}`} className="block group-hover:text-accent-emerald transition-colors">
            <h3 className="font-syne text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-2 flex items-center justify-between gap-2">
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent-emerald group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </h3>
          </Link>

          <p className="font-mono text-xs text-accent-emerald/80 mb-4">
            {project.headline}
          </p>

          <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Key Approach Bullet Points Preview */}
          <div className="p-4 rounded-xl bg-surface-subtle/80 border border-surface-border/60 mb-6">
            <div className="flex items-center gap-2 font-mono text-[11px] text-text-muted uppercase tracking-wider mb-2.5">
              <Terminal className="w-3.5 h-3.5 text-accent-emerald" />
              <span>KEY DELIVERABLES</span>
            </div>
            <ul className="space-y-2">
              {project.approach.slice(0, 2).map((item, pIdx) => (
                <li key={pIdx} className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed">
                  <span className="text-accent-emerald font-bold mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-border/60">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-surface-subtle border border-surface-border text-[11px] font-mono text-text-muted group-hover:text-text-secondary group-hover:border-surface-hover transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-7 sm:px-8 py-4 bg-surface-subtle/50 border-t border-surface-border/60 flex items-center justify-between">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-text-primary hover:text-accent-emerald transition-colors font-medium"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {project.metrics && project.metrics[0] && (
          <span className="font-mono text-xs text-accent-emerald font-semibold">
            {project.metrics[0].label}: {project.metrics[0].value}
          </span>
        )}
      </div>
    </motion.div>
  );
};
