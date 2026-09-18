import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('tool_suggestion');
  const [message, setMessage] = useState('');

  const breadcrumbs = [{ name: 'Contact', url: '/contact' }];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8" id="main-content">
      <SEOHead
        title="Contact EasyConverter — Feedback, Suggestions & Inquiries"
        description="Get in touch with the EasyConverter team for tool suggestions, unit formula corrections, technical feedback, or partnership inquiries."
        canonicalPath="/contact"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <div className="mt-4 mb-8">
        <div className="flex items-center gap-2 text-[#2563EB] dark:text-[#06B6D4] mb-2">
          <Mail className="h-5 w-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
          Contact Us
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
          We welcome feedback, suggestions for new conversion units or calculators, bug reports, and general questions.
        </p>
      </div>

      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-xs dark:border-[#334155] dark:bg-[#1E293B]">
        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-[#16A34A] dark:bg-green-950/40 dark:text-green-400">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              Thank you for reaching out!
            </h2>
            <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8] max-w-md mx-auto">
              Your message has been received. Our editorial and technical team reviews all tool suggestions and inquiries promptly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setMessage('');
              }}
              className="mt-6 rounded-xl bg-[#2563EB] px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-700 transition"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Smith"
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-[#64748B]/60 focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:placeholder:text-[#94A3B8]/60 dark:focus:border-[#06B6D4]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-[#64748B]/60 focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:placeholder:text-[#94A3B8]/60 dark:focus:border-[#06B6D4]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                Subject Topic
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 px-3.5 py-2.5 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4]"
              >
                <option value="tool_suggestion">Suggest a new converter or calculator</option>
                <option value="formula_correction">Report a formula or calculation question</option>
                <option value="bug_report">Website bug or display issue</option>
                <option value="partnership">Partnership or general inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1">
                Message Details
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your suggestion or question in detail..."
                className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50 p-3.5 text-sm text-[#0F172A] placeholder:text-[#64748B]/60 focus:border-[#2563EB] focus:outline-hidden dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:placeholder:text-[#94A3B8]/60 dark:focus:border-[#06B6D4]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition active:scale-95"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
