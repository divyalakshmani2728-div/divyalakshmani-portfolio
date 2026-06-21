import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, ChevronRight } from 'lucide-react';

interface Internship {
  company: string;
  location: string;
  role: string;
  period: string;
  details: string[];
}

export const Timeline: React.FC = () => {
  const internships: Internship[] = [
    {
      company: 'MIT Chennai',
      location: 'Chennai, Tamil Nadu',
      role: 'VLSI & Embedded Systems Intern',
      period: 'Summer 2026',
      details: [
        'Explored digital VLSI architectures and layout design rules.',
        'Assisted in hardware description modeling using Verilog HDL for digital modules.',
        'Conducted simulations using ModelSim and LTspice to verify logic outputs.'
      ]
    },
    {
      company: 'Thiagarajar College of Engineering',
      location: 'Madurai, Tamil Nadu',
      role: 'Battery Management Systems Intern',
      period: 'Summer 2026',
      details: [
        'Analyzed state of charge (SoC) estimation algorithms and passive cell balancing.',
        'Studied power electronics interfaces and thermal runaway mitigation.',
        'Conducted LTspice simulation of battery sensing and protection circuits.'
      ]
    },
    {
      company: 'TVS Sensing Solutions',
      location: 'Madurai, Tamil Nadu',
      role: 'EV Technologies Intern',
      period: 'Winter 2025',
      details: [
        'Studied sensor systems integrated into Electric Vehicle drivetrains.',
        'Assisted in data capture of Hall effect sensors and temperature sensors.',
        'Analyzed signal conditioning hardware for noise mitigation in EV networks.'
      ]
    },
    {
      company: 'BSNL',
      location: 'Tiruchirappalli, Tamil Nadu',
      role: 'Mobile Communication Intern',
      period: 'Summer 2025',
      details: [
        'Gained hands-on insights into GSM, UMTS, and LTE network architectures.',
        'Visited telecom exchanges to study routing protocols, switching systems, and base transceiver stations (BTS).',
        'Studied antenna arrays, polarization, and rf propagation models.'
      ]
    }
  ];

  return (
    <div className="relative border-l border-slate-200 dark:border-white/10 ml-4 md:ml-32 py-8 space-y-12">
      {internships.map((intern, index) => (
        <motion.div
          key={intern.company}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12 group"
        >
          {/* Glowing Indicator Node */}
          <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-100 dark:bg-[#0c0c0e] border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          </div>

          {/* Timeline content card */}
          <div className="glass-card group-hover:glass-card-hover p-6 rounded-2xl relative transition-all duration-300">
            {/* Timestamp tag left side on larger screens */}
            <div className="hidden md:block absolute right-full top-6 mr-12 text-right">
              <span className="text-xs font-mono font-bold text-purple-500 dark:text-purple-400 uppercase tracking-widest">
                {intern.period}
              </span>
              <div className="text-[10px] font-mono text-slate-400 mt-1 flex items-center justify-end">
                <MapPin className="w-3 h-3 mr-1" /> {intern.location.split(',')[0]}
              </div>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {intern.company}
                </h3>
                <h4 className="text-sm font-mono font-medium text-slate-500 dark:text-slate-400 flex items-center mt-1">
                  <Briefcase className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                  {intern.role}
                </h4>
              </div>
              <div className="md:hidden flex items-center space-x-3 mt-2 text-xs font-mono text-slate-400">
                <span className="text-purple-500 font-bold">{intern.period}</span>
                <span>•</span>
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {intern.location}</span>
              </div>
            </div>

            {/* Core details list */}
            <ul className="mt-4 space-y-2.5">
              {intern.details.map((detail, dIdx) => (
                <li key={dIdx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start leading-relaxed">
                  <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
