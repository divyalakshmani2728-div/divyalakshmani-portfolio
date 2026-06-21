import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('Initializing core systems...');

  const logs = [
    'Initializing core systems...',
    'Loading FPGA & VLSI design libraries...',
    'Calibrating signal processing parameters...',
    'Fetching research publication index...',
    'Configuring creative writing anthology database...',
    'Systems online. Welcome to DIVYALAKSHMANI G. Portfolio',
  ];

  useEffect(() => {
    // Progress counter animation
    const duration = 2000; // 2 seconds total
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      // Rotate boot texts based on progress percentage
      const logIdx = Math.min(
        Math.floor((nextProgress / 100) * logs.length),
        logs.length - 1
      );
      setBootText(logs[logIdx]);

      if (nextProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 400); // Small delay for smooth exit
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0c] text-white select-none">
      <div className="w-full max-w-md px-6 text-center">
        {/* Animated Microchip/FPGA Grid SVG illustration */}
        <div className="flex justify-center mb-8">
          <svg
            className="w-24 h-24 text-purple-500"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Ring */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="10, 5"
              className="animate-spin"
              style={{ animationDuration: '15s' }}
            />
            {/* Silicon Chip Core */}
            <rect
              x="32"
              y="32"
              width="36"
              height="36"
              rx="4"
              fill="rgba(168, 85, 247, 0.1)"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            {/* Logic lines drawing effect */}
            <path
              d="M50 15V32M50 68V85M15 50H32M68 50H85M38 38L25 25M62 38L75 25M38 62L25 75M62 62L75 75"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="svg-circuit-draw"
            />
            {/* Glow Core */}
            <circle cx="50" cy="50" r="8" className="fill-purple-400 animate-pulse" />
          </svg>
        </div>

        {/* ECE Title */}
        <h1 className="text-xl font-bold font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          DIVYALAKSHMANI G
        </h1>
        <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-widest">
          Hardware Architecture & Literature
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-[#16171d] border border-white/5 rounded-full h-1.5 mt-8 overflow-hidden relative">
          <motion.div
            className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 h-full rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeInOut' }}
          />
        </div>

        {/* Progress Number */}
        <div className="flex justify-between items-center mt-3 text-xs font-mono text-gray-400">
          <span className="text-purple-400 animate-pulse">{bootText}</span>
          <span className="font-semibold text-white">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
