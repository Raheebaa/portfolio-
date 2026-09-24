import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { useRouter } from '../utils/router';

export const Footer: React.FC = () => {
  const { path, navigate } = useRouter();
  const isHomePage = path === '/' || path.startsWith('/#');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (!isHomePage) {
      navigate('/' + href);
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="border-t border-surface-border bg-surface-subtle py-16 text-text-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-surface-border/60">
          {/* Brand Info Column */}
          <div className="md:col-span-6 space-y-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex items-center gap-3 text-text-primary text-left focus:outline-none group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center group-hover:border-accent-emerald/50 group-hover:bg-accent-emerald/10 transition-colors shadow-sm">
                <span className="font-syne font-bold text-sm text-text-primary group-hover:text-accent-emerald transition-colors">
                  R
                </span>
              </div>
              <span className="font-syne font-bold text-xl tracking-tight group-hover:text-accent-emerald transition-colors">
                {profile.name}
              </span>
            </button>

            <p className="font-mono text-xs text-accent-emerald">
              {profile.title}
            </p>

            <p className="font-sans text-sm text-text-secondary max-w-sm leading-relaxed">
              {profile.footer.tagline}
            </p>
          </div>

          {/* Sitemap Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-emerald block font-semibold">
              SITEMAP
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              {profile.footer.sitemap.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="hover:text-accent-emerald transition-colors text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent-emerald block font-semibold mb-3">
                CONNECT
              </span>
              <div className="space-y-2.5 text-xs font-mono">
                {profile.footer.connect.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-1.5 text-text-secondary hover:text-accent-emerald transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-emerald transition-colors pt-4 self-start cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Live Operational Status Indicator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted">
          <div>
            © {profile.footer.copyrightYear} {profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
            </span>
            <span className="text-text-primary font-medium">
              {profile.footer.operationalStatus}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
