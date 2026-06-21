import React from 'react';
import { motion } from 'framer-motion';
import { Book, Award, PenTool, Bookmark, Feather } from 'lucide-react';

export const Author: React.FC = () => {
  const achievements = [
    { title: 'First Place', detail: 'Talent Hunt Poem Writing Competition', icon: <Feather className="w-4 h-4 text-purple-500" /> },
    { title: 'Publication Awards', detail: 'Multiple anthology editorial mentions', icon: <Award className="w-4 h-4 text-indigo-500" /> },
    { title: 'Literary Excellence', detail: 'Official certificates from publishing houses', icon: <Bookmark className="w-4 h-4 text-blue-500" /> },
    { title: 'Creative Writing', detail: 'Poet and developer blending engineering with verses', icon: <PenTool className="w-4 h-4 text-pink-500" /> }
  ];

  return (
    <section id="publications" className="py-24 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-purple-500 font-bold">
            [ LITERARY WORK ]
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Published Author & Poet
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 mx-auto md:mx-0 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Narrative & achievements list */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-2xl relative"
            >
              {/* Top corner card label */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-dashed border-white/10" />

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Co-Author of 24+ ISBN-Certified Anthology Books
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Parallel to my academic work in signal analysis and FPGA design, I actively pursue creative literature. My writing spans poetry, prose, and structured essays, published in multiple national-level ISBN anthologies.
              </p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                I believe that programming digital gate arrays and writing poetry share a common core: constructing complex meanings using basic building blocks (logic gates or alphabets).
              </p>
            </motion.div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center space-x-3 p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-[#0c0c0e]/40 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                >
                  <div className="p-2 rounded-lg bg-slate-200 dark:bg-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100">{item.title}</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right panel: Rotating/floating book stack animation */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-72 h-80"
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl opacity-30 blur-2xl animate-glow-pulse" />

              {/* Book illustration layout inside grid */}
              <div className="absolute inset-0 rounded-3xl border border-black/5 dark:border-white/5 bg-slate-100/50 dark:bg-white/5 backdrop-blur-md p-6 flex flex-col items-center justify-center">
                
                {/* 3D Stack of books drawn via CSS / Framer Motion */}
                <div className="flex flex-col space-y-2.5 items-center w-full relative">
                  
                  {/* Book 3 (Top) */}
                  <motion.div
                    className="w-40 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded border-b border-black/20 text-white font-mono text-[9px] flex items-center justify-between px-3 select-none"
                    animate={{ rotate: [-2, 1, -2], y: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span>VOL_24</span>
                    <span>POETRY</span>
                  </motion.div>
                  
                  {/* Book 2 (Middle) */}
                  <motion.div
                    className="w-44 h-7 bg-gradient-to-r from-indigo-500 to-blue-500 rounded border-b border-black/20 text-white font-mono text-[9px] flex items-center justify-between px-3 select-none"
                    animate={{ rotate: [1, -1, 1], y: [0, 2, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span>ISBN_978</span>
                    <span>ANTHOLOGY</span>
                  </motion.div>

                  {/* Book 1 (Bottom) */}
                  <motion.div
                    className="w-48 h-8 bg-gradient-to-r from-slate-700 to-slate-800 rounded border-b border-black/20 text-white font-mono text-[9px] flex items-center justify-between px-3 select-none"
                    animate={{ rotate: [-1, 2, -1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span>LIT_ESSAYS</span>
                    <span>DIVYA G.</span>
                  </motion.div>
                </div>

                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center space-x-2 text-purple-500">
                    <Book className="w-5 h-5" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">Publication Archive</span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-2 max-w-[200px]">
                    Blending technological logic with emotional verses across 24+ published anthologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
