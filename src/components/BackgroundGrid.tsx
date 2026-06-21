import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden pointer-events-none transition-colors duration-500 bg-slate-50 dark:bg-[#0a0a0c]">
      {/* Grid Pattern overlay - uses classes defined in index.css */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern opacity-100 transition-all duration-500"></div>
      
      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(248,250,252,0.8)_85%)] dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(10,10,12,0.9)_85%)] transition-all duration-500"></div>

      {/* Moving Glowing Orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-purple-300/30 dark:bg-purple-900/10 blur-[80px] sm:blur-[120px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -100, 60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-300/30 dark:bg-blue-900/10 blur-[90px] sm:blur-[140px]"
        animate={{
          x: [0, -90, 50, 0],
          y: [0, 80, -100, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[20%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-indigo-200/20 dark:bg-indigo-950/10 blur-[70px] sm:blur-[100px]"
        animate={{
          x: [0, 40, -60, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
