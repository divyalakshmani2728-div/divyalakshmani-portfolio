import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-purple-500 font-bold">
            [ ACADEMICS ]
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Education
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 mx-auto rounded-full" />
        </div>

        {/* Card Layout */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl glass-card hover:glass-card-hover p-8 overflow-hidden"
          >
            {/* Engineering lines drawing in the card background */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-dashed border-white/10" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-dashed border-white/10" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-black/5 dark:border-white/5">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    University College of Engineering (BIT Campus)
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    Anna University, Tiruchirappalli
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-mono text-purple-500 dark:text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>2023 - 2027</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left detail listing */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Degree Course</span>
                  <h5 className="text-lg font-bold text-slate-900 dark:text-slate-200 mt-1">
                    B.E. Electronics and Communication Engineering
                  </h5>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span>Specializations: Digital Systems, Communication Systems , VLSI</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span>Focus on hardware prototype implementation </span>
                  </div>
                </div>
              </div>

              {/* Right: CGPA circular-style layout progress */}
              <div className="md:col-span-5 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5 pt-6 md:pt-0 md:pl-8">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  {/* Decorative glowing background */}
                  <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-md" />
                  
                  {/* Semi-circular meter using SVG */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(168, 85, 247, 0.08)"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#purpleBlueGrad)"
                      strokeWidth="6.5"
                      fill="transparent"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 - (251.2 * 8.1) / 10 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="purpleBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center Text */}
                  <div className="absolute flex flex-col items-center text-center">
                    <span className="text-2xl font-black text-slate-900 dark:text-white">8.32</span>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500">CGPA</span>
                  </div>
                </div>
                
                <span className="text-[10px] font-mono text-slate-400 mt-4 text-center">
                  SCALE: 10.0 GPA MAX
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
