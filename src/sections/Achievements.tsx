import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy, Bookmark, Presentation } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 1500; // ms
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-[#0c0c0e]/40 backdrop-blur-md flex flex-col justify-center items-center h-full group hover:border-purple-500/20 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300"
    >
      <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 group-hover:scale-105 transition-transform duration-300 font-mono">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-3 font-sans uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export const Achievements: React.FC = () => {
  const awards = [
    {
      title: 'Best Presenter Award',
      event: 'ICEMSE 2026',
      icon: <Trophy className="w-5 h-5 text-yellow-500" />,
      desc: 'Awarded for exceptional clarity, visual slides, and defense in presenting core materials storage research.'
    },
    {
      title: 'Multiple Research Presentations',
      event: 'National & International Conferences',
      icon: <Presentation className="w-5 h-5 text-purple-500" />,
      desc: 'Presented hardware and material science topics to academic panels, including NCBSMM-25.'
    },
    {
      title: '24+ Published Books Co-Author',
      event: 'Literary Feats',
      icon: <Bookmark className="w-5 h-5 text-blue-500" />,
      desc: 'Contributed poems and analytical essays to numerous ISBN-certified literature compilations.'
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-purple-500 font-bold">
            [ HONORS & METRICS ]
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Key Achievements
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 mx-auto rounded-full" />
        </div>

        {/* Counter Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Counter target={8} suffix="+" label="Engineering Projects" />
          <Counter target={4} label="Industrial Internships" />
          <Counter target={24} suffix="+" label="Published Anthology Books" />
          <Counter target={1} suffix="st" label="Poetry Slam Placement" />
        </div>

        {/* Accolades highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card hover:glass-card-hover p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5">
                    {award.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    ACCOLADE
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {award.title}
                </h4>
                <p className="text-xs font-mono font-medium text-purple-500 dark:text-purple-400 mt-1">
                  {award.event}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                  {award.desc}
                </p>
              </div>
              
              <div className="mt-6 border-t border-black/5 dark:border-white/5 pt-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>VERIFIED</span>
                <Award className="w-3.5 h-3.5 text-purple-500/50" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
