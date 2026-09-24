import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, CheckCircle2, Check, Terminal, Share2 } from 'lucide-react';
import { profile } from '../data/profile';
import { Link, useParams, useRouter } from '../utils/router';

export const NoteDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { navigate } = useRouter();
  const [copiedLink, setCopiedLink] = useState(false);

  const note = profile.engineeringNotes.find((n) => n.slug === slug || n.id === slug) || profile.engineeringNotes[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const currentIndex = profile.engineeringNotes.findIndex((n) => n.slug === note.slug);
  const nextNote = profile.engineeringNotes[(currentIndex + 1) % profile.engineeringNotes.length];

  return (
    <article className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-accent-emerald/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Back navigation & Share */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            type="button"
            onClick={() => navigate('/#notes')}
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent-emerald transition-colors py-2 px-3 rounded-lg bg-surface border border-surface-border hover:border-accent-emerald/40 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Engineering Notes</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-accent-emerald transition-colors py-2 px-3 rounded-lg bg-surface border border-surface-border cursor-pointer"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Link Copied' : 'Share Note'}</span>
          </button>
        </div>

        {/* Note Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8 border-b border-surface-border/80 mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/30 px-3 py-1 rounded-full">
              {note.category}
            </span>
            <span className="text-text-muted text-xs">•</span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
              <Calendar className="w-3.5 h-3.5" />
              <span>{note.date}</span>
            </div>
            <span className="text-text-muted text-xs">•</span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
              <Clock className="w-3.5 h-3.5" />
              <span>{note.readingTime}</span>
            </div>
          </div>

          <h1 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-6">
            {note.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
            {note.summary}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-text-muted px-2.5 py-1 rounded-md bg-surface border border-surface-border"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Key Takeaways Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 sm:p-7 rounded-2xl bg-surface border border-accent-emerald/30 mb-12 shadow-sm"
        >
          <div className="flex items-center gap-2.5 font-mono text-xs text-accent-emerald uppercase tracking-wider mb-4">
            <Terminal className="w-4 h-4" />
            <span>KEY PRODUCTION TAKEAWAYS</span>
          </div>
          <ul className="space-y-3">
            {note.keyInsights.map((insight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed font-sans">
                <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Markdown Content Formatter */}
        <div className="space-y-8 text-text-secondary text-base leading-relaxed font-normal">
          <div className="p-8 rounded-2xl bg-surface border border-surface-border shadow-md">
            <h2 className="font-syne text-xl sm:text-2xl font-bold text-text-primary mb-4">
              Detailed Breakdown &amp; Analysis
            </h2>
            <div className="whitespace-pre-line font-sans text-text-secondary leading-relaxed">
              {note.content}
            </div>
          </div>
        </div>

        {/* Note Footer */}
        <div className="mt-16 pt-10 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => navigate('/#notes')}
            className="text-xs font-mono text-text-secondary hover:text-accent-emerald transition-colors flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all notes</span>
          </button>

          <Link
            to={`/notes/${nextNote.slug}`}
            className="text-xs font-mono text-text-secondary hover:text-accent-emerald transition-colors flex items-center gap-2"
          >
            <span>Next Note: {nextNote.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
