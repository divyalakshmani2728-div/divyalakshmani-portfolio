import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const roles = [
    "FPGA Designer",
    "VLSI Enthusiast",
    "Researcher",
    "Embedded Systems Engineer",
    "Published Author"
  ];

  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIdx];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, 40);
    } else {
      timer = window.setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === fullText) {
      timer = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIdx(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            {/* Tagline label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-center lg:self-start items-center space-x-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-xs mb-6 select-none"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
              <span>ECE RESEARCH & DEVELOPMENT</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white"
            >
              DIVYALAKSHMANI G
            </motion.h1>

            {/* Subtitle / Typing Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold mt-4 text-slate-800 dark:text-slate-200 h-10 flex items-center justify-center lg:justify-start"
            >
              <span className="text-slate-500 dark:text-slate-400 mr-2">I am a</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 border-r-2 border-purple-500 pr-1 animate-pulse">
                {currentText}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mt-6 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              "Building intelligent systems for next-generation communication, sustainable energy, and smart technologies."
            </motion.p>

            {/* Quick stats short highlight */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 grid grid-cols-3 gap-4 border-t border-b border-black/5 dark:border-white/5 py-4 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-slate-900 dark:text-white">8.32</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400">CGPA (B.E)</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-slate-900 dark:text-white">24+</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Books Co-Authored</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-slate-900 dark:text-white">4</div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Internships</div>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center"
              >
                <Layers className="w-4 h-4 mr-2" />
                View Projects
              </a>
              <a
                href="./Divyalakshmani_G_Resume1.pdf"
                download
                className="px-6 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/5 text-slate-800 dark:text-slate-200 font-medium hover:bg-black/5 dark:hover:bg-white/10 hover:scale-[1.02] active:scale-95 transition-all flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-purple-500/20 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-500/5 hover:scale-[1.02] active:scale-95 transition-all flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Picture Panel */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96"
            >
              {/* Outer Glowing boundary orbs */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-3xl opacity-30 blur-2xl animate-glow-pulse" />
              
              {/* Card Container */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 dark:border-white/5 bg-slate-100/50 dark:bg-white/5 backdrop-blur-md p-4 flex flex-col justify-center items-center overflow-hidden group">
                
                {/* Visual Engineering grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                {/* Profile Photo Slot */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-slate-200 dark:bg-[#0c0c0e] flex items-center justify-center">
                  
                  {/* Photo tag (if user places photo.jpg in public, it will load) */}
                  <img 
                    src="./profile.jpeg" 
                    alt="DIVYALAKSHMANI G" 
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${imageLoaded ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    onError={() => {
                      setImageLoaded(false);
                    }}
                    onLoad={() => {
                      setImageLoaded(true);
                    }}
                  />

                  {/* High Quality Placeholder Vector illustration */}
                  {!imageLoaded && (
                    <div className="flex flex-col items-center p-6 text-center select-none z-0">
                      <svg
                        className="w-20 h-20 text-purple-400 mb-4 dark:text-purple-300 opacity-60"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Silicon Chip / Wafers background lines */}
                        <path d="M10 20h80M10 40h80M10 60h80M10 80h80" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1" />
                        <circle cx="50" cy="40" r="18" stroke="currentColor" strokeWidth="2.5" fill="none" />
                        <path d="M25 80c0-15 10-22 25-22s25 7 25 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M50 22v36M32 40h36" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="3, 3" />
                      </svg>
                      
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-2 font-bold uppercase tracking-widest bg-slate-200/50 dark:bg-white/5 px-3 py-1 rounded">
                        [ Profile Photo ]
                      </span>
                      <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-4 leading-relaxed max-w-[200px]">
                        Rename your picture to <code className="bg-slate-300 dark:bg-slate-800 text-purple-600 dark:text-purple-400 px-1 rounded">profile.jpg</code> and place it inside the <code className="bg-slate-300 dark:bg-slate-800 text-purple-600 dark:text-purple-400 px-1 rounded">public/</code> directory.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 sm:mt-24">
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-xs font-mono text-slate-500 hover:text-purple-500 transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-4 h-4 mt-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
