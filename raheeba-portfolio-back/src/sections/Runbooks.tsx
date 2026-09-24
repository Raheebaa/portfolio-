import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile, RunbookSnippet } from '../data/profile';
import { Terminal, Copy, Check, FileCode } from 'lucide-react';

export const Runbooks: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (snippet: RunbookSnippet) => {
    navigator.clipboard.writeText(snippet.code);
    setCopiedId(snippet.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="runbooks" className="py-24 md:py-32 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-accent-emerald">
              <span>05</span>
              <span className="w-8 h-px bg-accent-emerald/40 inline-block" />
              <span>RUNBOOK LIBRARY</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Operational Runbooks &amp; Scripts.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed font-sans">
              Curated terminal-ready scripts and diagnostic checklists engineered for rapid incident response and operational automation.
            </p>
          </div>
        </div>

        {/* Terminal Runbook Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {profile.runbooks.map((snippet: RunbookSnippet, idx: number) => {
            const isCopied = copiedId === snippet.id;

            return (
              <motion.div
                key={snippet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col justify-between rounded-2xl bg-[#090b10] border border-surface-border hover:border-accent-emerald/40 transition-all duration-300 shadow-2xl overflow-hidden"
              >
                {/* Terminal Header Bar */}
                <div className="px-5 py-3.5 bg-surface-subtle border-b border-surface-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="font-mono text-xs text-text-primary ml-2 font-medium flex items-center gap-1.5">
                      <FileCode className="w-3.5 h-3.5 text-accent-emerald" />
                      {snippet.filename}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(snippet)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-elevated border border-surface-border text-[11px] font-mono text-text-secondary hover:text-accent-emerald hover:border-accent-emerald/40 transition-colors cursor-pointer"
                    aria-label={`Copy ${snippet.filename} snippet`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-accent-emerald" />
                        <span className="text-accent-emerald">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[11px] text-accent-emerald bg-accent-emerald/10 border border-accent-emerald/20 px-2.5 py-0.5 rounded">
                        {snippet.category}
                      </span>
                    </div>

                    <h3 className="font-syne text-lg font-bold text-text-primary mb-2">
                      {snippet.title}
                    </h3>

                    <p className="font-sans text-xs text-text-secondary leading-relaxed mb-4">
                      {snippet.description}
                    </p>
                  </div>

                  {/* Terminal Code Display Block */}
                  <div className="relative rounded-xl bg-black/60 border border-surface-border/80 p-4 font-mono text-xs overflow-x-auto text-emerald-400/90 leading-relaxed max-h-56">
                    <pre className="text-[11px] leading-snug whitespace-pre">
                      {snippet.code}
                    </pre>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-3 bg-surface-subtle/30 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-accent-emerald" />
                    <span>Bash / Shell</span>
                  </span>
                  <span>Ready to execute</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
