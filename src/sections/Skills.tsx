import { motion } from 'framer-motion';
import { Code2, Wrench, Cpu } from 'lucide-react';
import { SkillBadge } from '../components/SkillBadge';

export const Skills: React.FC = () => {
  const programming = ['C', 'Python', 'Verilog HDL','EMBEDDED C', 'HTML','CSS','JAVASCRIPT'];
  
  const tools = [
    'Xilinx Vivado',
    'Xilinx ISE',
    'ModelSim',
    'MATLAB',
    'LTspice',
    'Proteus VSM',
    'VS Code',
    'Cadence Virtuoso',
    'CANoe'
  ];

  const domains = [
    'FPGA Design',
    'VLSI',
    'Embedded Systems',
    'IoT',
    'Wireless Communication',
    'Signal Processing',
    'EV Technologies'
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-purple-500 font-bold">
            [ COMPETENCIES ]
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Skills & Expertise
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 mx-auto rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl glass-card hover:glass-card-hover p-6 flex flex-col h-full"
          >
            <div className="flex items-center space-x-3 pb-4 border-b border-black/5 dark:border-white/5 mb-6">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Programming
              </h4>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {programming.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
            
            {/* Design accents */}
            <div className="mt-auto pt-6 text-[10px] font-mono text-slate-400 select-none">
              MODULE // 01.LANGUAGES
            </div>
          </motion.div>

          {/* Tools & Environments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-2xl glass-card hover:glass-card-hover p-6 flex flex-col h-full"
          >
            <div className="flex items-center space-x-3 pb-4 border-b border-black/5 dark:border-white/5 mb-6">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Tools & IDEs
              </h4>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {tools.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>

            {/* Design accents */}
            <div className="mt-auto pt-6 text-[10px] font-mono text-slate-400 select-none">
              MODULE // 02.ENVIRONMENTS
            </div>
          </motion.div>

          {/* Domains */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-2xl glass-card hover:glass-card-hover p-6 flex flex-col h-full"
          >
            <div className="flex items-center space-x-3 pb-4 border-b border-black/5 dark:border-white/5 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Core Domains
              </h4>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {domains.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>

            {/* Design accents */}
            <div className="mt-auto pt-6 text-[10px] font-mono text-slate-400 select-none">
              MODULE // 03.DOMAINS
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
