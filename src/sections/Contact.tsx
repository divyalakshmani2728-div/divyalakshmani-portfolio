import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');

    try {
      // Replace 'YOUR_FORMSPREE_ID' with the code from your Formspree dashboard
      const response = await fetch('https://formspree.io/f/xpqgarlo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      label: 'Email Address',
      value: 'divyalakshmani2728@gmail.com',
      href: 'mailto:divyalakshmani2728@gmail.com',
      icon: <Mail className="w-5 h-5 text-purple-400" />
    },
    {
      label: 'Phone Contact',
      value: '+91 77089 93874',
      href: 'tel:7708993874',
      icon: <Phone className="w-5 h-5 text-indigo-400" />
    },
    {
      label: 'LinkedIn Profile',
      value: 'divyalakshmani-g',
      href: 'https://www.linkedin.com/in/divya-lakshmani-g-924871376/',
      icon: (
        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      label: 'Institutional Location',
      value: 'UCE (BIT Campus), Tiruchirappalli',
      href: 'https://maps.app.goo.gl/dz5B7iDccuxSbzg4A',
      icon: <MapPin className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-purple-500 font-bold">
            [ COORDINATES ]
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Get In Touch
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left panel: Info Links */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6 font-bold text-center lg:text-left">
              Contact Information
            </h4>
            
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center space-x-4 p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-[#0c0c0e]/40 hover:bg-slate-100 dark:hover:bg-white/5 hover:border-purple-500/20 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-slate-200 dark:bg-white/5 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      {info.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-200 mt-0.5 truncate block hover:text-purple-500 transition-colors">
                      {info.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-2xl relative"
            >
              {/* Circuit board accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-dashed border-white/10" />

              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                Send a Secure Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-slate-100 dark:bg-[#0d0d0e] text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors font-sans"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-slate-100 dark:bg-[#0d0d0e] text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors font-sans"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-slate-100 dark:bg-[#0d0d0e] text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors font-sans resize-none"
                    placeholder="Write your research/project collaboration details here..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/10 active:scale-98 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Data...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Feedbacks */}
                {status === 'success' && (
                  <div className="flex items-center space-x-2 text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-xl text-sm font-mono mt-4">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>TRANSMISSION SUCCESSFUL! Message logged.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-rose-500 bg-rose-500/10 border border-rose-500/20 p-3.5 rounded-xl text-sm font-mono mt-4">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>ERROR: Check input registers and try again.</span>
                  </div>
                )}
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
