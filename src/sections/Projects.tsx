import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'FPGA-Based LDPC Encoder and Decoder for 6G Wireless Communication',
      description: 'Design and implementation of low-density parity-check encoder/decoder on programmable logic, targeted at lowering latency and increasing throughput in 6G systems.',
      tags: ['Verilog HDL', 'FPGA Implementation', 'Error Correction Coding', 'High-Speed Communication'],
      category: 'FPGA / VLSI'
    },
          {
      id: 8,
      title: 'CMOS Layout Design using Cadence Virtuoso',
      description: 'Designed CMOS layouts using Cadence Virtuoso by performing transistor placement and routing according to design rules. Gained hands-on experience in ASIC physical layout design while learning DRC and LVS verification flow.',
      tags: ['Cadence Virtuoso', 'CMOS Layout', 'DRC Verification', 'LVS Flow', 'ASIC Design'],
      category: 'FPGA / VLSI'
    },
    
    {
      id: 2,
      title: 'Biomass-Derived Activated Carbon for Sustainable Energy Storage',
      description: 'Synthesis and analysis of activated carbon sourced from organic agricultural waste to construct high-efficiency supercapacitor electrodes for sustainable power storage.',
      tags: ['Sustainable Energy', 'Materials Research', 'Green Technology'],
      category: 'Energy'
    },
    {
      id: 3,
      title: 'EMI Mitigation Techniques for EV Battery Management Systems',
      description: 'Analyzing and deploying shielding, filtering, and grounding structures inside Electric Vehicle battery interfaces to suppress high-frequency electromagnetic interference.',
      tags: ['Battery Management System', 'Power Electronics', 'EMI Reduction'],
      category: 'EV Systems'
    },
    {
      id: 4,
      title: 'Automated Industrial Product Inspection Using Machine Vision',
      description: 'Configuring and testing Panasonic PV200 smart camera systems for high-speed, automated quality assessment of production lines.',
      tags: ['Panasonic PV200', 'Machine Vision', 'Industrial Automation'],
      category: 'Machine Vision'
    },
    {
      id: 5,
      title: 'Intelligent Smart Lighting Control System',
      description: 'Implementing custom sensor feedback loops to dynamically modulate industrial/commercial lighting, optimizing energy footprint.',
      tags: ['Energy Efficiency', 'Smart Automation'],
      category: 'Automation'
    },
    {
      id: 6,
      title: 'IoT-Based Multi-Sensor Environmental Monitoring and Alert System',
      description: 'A hardware-software node integrating temperature, gas, and humidity sensors to stream telemetry data and issue active safety logs.',
      tags: ['IoT', 'Sensors', 'Real-Time Monitoring'],
      category: 'IoT'
    },
    {
      id: 7,
      title: 'Sustainable Packaging Marketplace',
      description: 'An interactive e-commerce model facilitating the distribution of biodegradable and eco-friendly packaging materials.',
      tags: ['E-Commerce', 'Sustainability', 'Eco-Friendly Solutions'],
      category: 'Software'
    }
,
    {
      id: 8,
      title: 'Smart Garbage Segregator using Sensors and Automation',
      description: 'Developed an intelligent waste segregation system capable of automatically identifying and separating different types of waste using sensor-based technology and automated mechanisms. ',
      tags: ['Embedded systems', 'MiniProject', 'Software simulation'],
      category: 'Software'
    }
  ];

  const filterMapping: { [key: string]: string[] } = {
    'All': ['FPGA / VLSI', 'Energy', 'EV Systems', 'Machine Vision', 'Automation', 'IoT', 'Software'],
    'FPGA / VLSI': ['FPGA / VLSI'],
    'Energy & EV': ['Energy', 'EV Systems'],
    'IoT & Automation': ['Machine Vision', 'Automation', 'IoT'],
    'Software': ['Software']
  };

  const filteredProjects = projects.filter(project => 
    filterMapping[filter].includes(project.category)
  );

  const filters = ['All', 'FPGA / VLSI', 'Energy & EV', 'IoT & Automation', 'Software'];

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-purple-500 font-bold">
            [ PORTFOLIO ]
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Projects Showcase
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 mx-auto rounded-full" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 ${
                filter === category
                  ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-500/10'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-black/5 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono">
            NO PROJECTS FOUND IN THIS CATEGORY.
          </div>
        )}

      </div>
    </section>
  );
};
