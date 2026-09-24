import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import {
  Linkedin,
  Send,
  CheckCircle,
  Copy,
  Check,
  ArrowUpRight,
  Terminal,
  Clock,
  MapPin,
  MessageSquare,
  Phone
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: profile.contact.formCategories[0] as string,
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const hasSheetEndpoint = Boolean(profile.contact.googleSheetScriptUrl?.trim());

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');
    const payload = {
      timestamp: new Date().toISOString(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      category: formData.category,
      message: formData.message.trim(),
    };

    if (profile.contact.googleSheetScriptUrl && profile.contact.googleSheetScriptUrl.trim() !== '') {
      try {
        // URL-encoded fields are accepted by Google Apps Script without a preflight.
        const body = new URLSearchParams(payload);
        await fetch(profile.contact.googleSheetScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body,
        });
        setIsSubmitted(true);
      } catch {
        setSubmitError('The message could not be saved right now. Please try again or email me directly.');
      }
      setIsSubmitting(false);
    } else {
      // No sheet URL configured → open mailto
      setIsSubmitting(false);
      const subject = encodeURIComponent(`[${formData.category}] DevOps Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-accent-emerald">
            <span>05</span>
            <span className="w-8 h-px bg-accent-emerald/40 inline-block" />
            <span>CONTACT</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            {profile.contact.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-secondary max-w-2xl font-normal leading-relaxed font-sans">
            {profile.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Engineering Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-surface border border-surface-border space-y-6 shadow-xl">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent-emerald block mb-2">
                  DIRECT REACHABILITY
                </span>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Available for full-time DevOps &amp; Cloud roles, infrastructure consulting, and architecture migrations.
                </p>
              </div>

              {/* Copyable Email Box */}
              <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border/70 flex items-center justify-between gap-3 shadow-inner">
                <div className="truncate">
                  <span className="font-mono text-[10px] text-text-muted uppercase block">
                    PRIMARY EMAIL
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono text-sm text-text-primary hover:text-accent-emerald transition-colors truncate block"
                  >
                    {profile.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-surface-elevated border border-surface-border text-text-secondary hover:text-accent-emerald transition-colors shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-accent-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated/60 border border-surface-border hover:border-accent-emerald/40 hover:bg-surface-elevated transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-accent-emerald" />
                    <span className="font-mono text-xs font-semibold text-text-primary">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-emerald group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={profile.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated/60 border border-surface-border hover:border-accent-emerald/40 hover:bg-surface-elevated transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-accent-emerald" />
                    <span className="font-mono text-xs font-semibold text-text-primary">
                      WhatsApp ({profile.rawPhone})
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-emerald group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated/60 border border-surface-border hover:border-accent-emerald/40 hover:bg-surface-elevated transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent-emerald" />
                    <span className="font-mono text-xs font-semibold text-text-primary">
                      Phone ({profile.phone})
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-emerald group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Timezone & Location Details */}
              <div className="pt-4 border-t border-surface-border/60 font-mono text-xs text-text-muted space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-emerald" />
                    Location:
                  </span>
                  <span className="text-text-primary">{profile.contact.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent-emerald" />
                    Timezone:
                  </span>
                  <span className="text-text-primary">{profile.contact.timezone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-surface-border shadow-xl">
              <div className="flex items-center justify-between pb-6 border-b border-surface-border mb-8">
                <span className="font-mono text-xs text-accent-emerald uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  DISPATCH INQUIRY
                </span>
                <span className="font-mono text-[11px] text-text-muted">
                  CONFIDENTIAL &amp; DIRECT
                </span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-surface-subtle border border-accent-emerald/30 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 flex items-center justify-center mx-auto text-accent-emerald">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-syne text-lg font-bold text-text-primary">
                    {hasSheetEndpoint ? 'Message Saved to Spreadsheet' : 'Message Prepared & Dispatched'}
                  </h4>
                  <p className="text-xs text-text-secondary max-w-md mx-auto leading-relaxed font-sans">
                    Your message was received. I'll get back to you at{' '}
                    <span className="text-accent-emerald font-mono">{formData.email}</span>{' '}
                    within 24 hours. You can also reach me directly at{' '}
                    <a href={`mailto:${profile.email}`} className="text-accent-emerald font-mono hover:underline">{profile.email}</a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        category: profile.contact.formCategories[0],
                        message: '',
                      });
                    }}
                    className="font-mono text-xs text-accent-emerald hover:underline mt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 font-mono text-xs text-red-300">
                      {submitError}
                    </p>
                  )}
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs text-text-secondary uppercase tracking-wider mb-2"
                    >
                      Your Name / Team
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Sarah Connor, Tech Lead"
                      className={`w-full px-4 py-3 rounded-xl bg-surface-subtle border text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors font-sans ${
                        errors.name
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-surface-border focus:border-accent-emerald'
                      }`}
                    />
                    {errors.name && (
                      <span className="font-mono text-[11px] text-red-400 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs text-text-secondary uppercase tracking-wider mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="sarah@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-surface-subtle border text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors font-sans ${
                        errors.email
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-surface-border focus:border-accent-emerald'
                      }`}
                    />
                    {errors.email && (
                      <span className="font-mono text-[11px] text-red-400 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Category Dropdown */}
                  <div>
                    <label
                      htmlFor="contact-category"
                      className="block font-mono text-xs text-text-secondary uppercase tracking-wider mb-2"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="contact-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-surface-border text-sm text-text-primary focus:outline-none focus:border-accent-emerald transition-colors font-mono cursor-pointer"
                    >
                      {profile.contact.formCategories.map((cat) => (
                        <option key={cat} value={cat} className="bg-surface text-text-primary">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="contact-message"
                        className="font-mono text-xs text-text-secondary uppercase tracking-wider"
                      >
                        Project Context / Message
                      </label>
                      <span className="font-mono text-[10px] text-text-muted">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Describe your infrastructure goals, Kubernetes setup, cloud migration requirements, or open roles..."
                      className={`w-full px-4 py-3 rounded-xl bg-surface-subtle border text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors resize-none font-sans ${
                        errors.message
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-surface-border focus:border-accent-emerald'
                      }`}
                    />
                    {errors.message && (
                      <span className="font-mono text-[11px] text-red-400 mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent-emerald hover:bg-emerald-400 text-background font-bold text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-accent-emerald/10 hover:shadow-accent-emerald/30 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>{isSubmitting ? 'Transmitting...' : 'Transmit Message'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
