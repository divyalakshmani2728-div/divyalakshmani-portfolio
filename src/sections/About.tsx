import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Radio, Battery, Eye, Globe, Zap, Compass, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const passions = [
    { name: 'FPGA Design', icon: <Cpu className="w-5 h-5 text-purple-400" />, desc: 'Synthesizing hardware architectures on programmable gates.' },
    { name: 'VLSI Systems', icon: <Cpu className="w-5 h-5 text-indigo-400" />, desc: 'Designing integrated circuit layouts and logic gates.' },
    { name: 'Wireless Communication', icon: <Radio className="w-5 h-5 text-blue-400" />, desc: 'Exploring channel coding and next-gen telecom networks.' },
    { name: 'Embedded Systems', icon: <Compass className="w-5 h-5 text-cyan-400" />, desc: 'Programming microcontrollers for custom control paths.' },
    { name: 'IoT Solutions', icon: <Globe className="w-5 h-5 text-emerald-400" />, desc: 'Deploying smart sensor arrays with cloud integration.' },
    { name: 'Electric Vehicles', icon: <Zap className="w-5 h-5 text-yellow-400" />, desc: 'Modeling battery architectures and charging systems.' },
    { name: 'Sustainable Energy', icon: <Battery className="w-5 h-5 text-teal-400" />, desc: 'Synthesizing biomass carbon for advanced storage.' },
    { name: 'Machine Vision', icon: <Eye className="w-5 h-5 text-pink-400" />, desc: 'Automating product verification via PV200 arrays.' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-purple-500 font-bold">
            [ INTRODUCTION ]
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            About Me
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 mx-auto md:mx-0 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Text */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              {/* Circuit layout details in corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-dashed border-white/10" />

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I am a highly motivated Electronics and Communication Engineering student pursuing my B.E. at University College of Engineering (BIT Campus), Tiruchirappalli . Maintaining a strong academic standing with a  <b>CGPA of 8.32 </b> , my focus converges on bridging theoretical research with hardware prototype implementations.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                I am deeply passionate about engineering intelligent systems for next-generation communication, sustainable energy storage, and smart automated technologies.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                Beyond the engineering lab, I enjoy creative writing. As a <b>co-author of 24+ anthology books</b>, I balance technical research with literary creativity, finding links between the structure of code and the flow of language.
              </p>
            </motion.div>

            {/* Quick Education Badge Link */}
            <motion.a
              href="#education"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between p-4 rounded-xl border border-black/5 dark:border-white/5 bg-slate-100 dark:bg-white/5 text-slate-950 dark:text-slate-100 hover:border-purple-500/20 hover:bg-purple-500/5 transition-all"
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-semibold">View Education Credentials</span>
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">[ 2023 - 2027 ]</span>
            </motion.a>
          </div>

          {/* Passions Grid */}
          <div className="lg:col-span-7">
            <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6 font-bold text-center lg:text-left">
              Core Technical Passions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start space-x-4 p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-[#0c0c0e]/40 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                >
                  <div className="p-2 rounded-lg bg-slate-200 dark:bg-white/5">
                    {passion.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-slate-200">{passion.name}</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{passion.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
