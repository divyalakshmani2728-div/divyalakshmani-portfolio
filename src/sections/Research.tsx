import { motion } from 'framer-motion';

export const Research: React.FC = () => {
  const researchInterests = [
    // {
    //   title: 'FPGA Design & Logic Synthesis',
    //   desc: 'Synthesizing complex custom logic blocks, configuring routing tables, and designing state machine controllers on Xilinx boards.',
    //   metric: 'Verilog HDL / RTL Coding'
    // },
    {
      title: 'LDPC Coding & Channel Capacity for 6G Communication Systems ',
      desc: 'FPGA Implementationof LDPC Encoder and Min-Sum Decoder for 6G Communication Systems Designed and Implemented LDPC Encoder and Decoder',
      metric: '01'
    },
    {
      title: ' EV Battery Management Systems',
      desc: 'Designed and analyzed EMI reduction techniques for EV power electronic converters using filtering, shielding, and optimized circuit design to improve system performance and electromagnetic compatibility',
      metric: '02 '
    },
    // {
    //   title: 'VLSI Design & Layout Rules',
    //   desc: 'Investigating sub-micron layout design rules, cell libraries, propagation delays, power grids, and parasitics in logic cells.',
    //   metric: 'CMOS Integration'
    // },
    // {
    //   title: 'High-Speed Digital Systems',
    //   desc: 'Minimizing clock skew, managing propagation paths, routing lines, and analyzing transient switching logic noises.',
    //   metric: 'Clock Domain Crossing'
    // },
    // {
    //   title: 'Error Correction Coding (ECC)',
    //   desc: 'Implementing FEC structures to guarantee packet integrity over high-noise power/rf communication lines.',
    //   metric: 'Hamming & Reed-Solomon'
    // }
  ];

  return (
    <section id="research" className="py-24 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-purple-500 font-bold">
            [ INVESTIGATION ]
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Research Interests
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 mx-auto md:mx-0 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Engineering Logic / Circuit Diagram SVG */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-sm rounded-2xl border border-black/5 dark:border-white/5 bg-slate-100/50 dark:bg-white/5 backdrop-blur-md p-6 overflow-hidden flex flex-col items-center justify-center"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-dashed border-white/10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-dashed border-white/10" />

              {/* Logic Circuit Visual Drawing */}
              <svg className="w-64 h-64 text-purple-500/80 dark:text-purple-400" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Inputs */}
                <circle cx="15" cy="30" r="2.5" fill="currentColor" />
                <circle cx="15" cy="50" r="2.5" fill="currentColor" />
                <circle cx="15" cy="90" r="2.5" fill="currentColor" />
                
                {/* Interconnect wires */}
                <path d="M17.5 30h20M17.5 50h20M17.5 90h55M37.5 30v15M37.5 50v-5M37.5 45h10M72.5 40v30M72.5 70h15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="svg-circuit-draw" />

                {/* NAND Gate */}
                <rect x="47.5" y="32.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.2" fill="rgba(168, 85, 247, 0.05)" />
                <path d="M62.5 40h10" stroke="currentColor" strokeWidth="1" />

                {/* XOR Gate */}
                <rect x="87.5" y="62.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.2" fill="rgba(59, 130, 246, 0.05)" />
                
                {/* Output */}
                <path d="M102.5 70h10" stroke="currentColor" strokeWidth="1" />
                <circle cx="112.5" cy="70" r="2.5" fill="currentColor" className="animate-ping" />
                <circle cx="112.5" cy="70" r="1.5" fill="currentColor" />

                {/* Grid labels */}
                <text x="12" y="24" fill="currentColor" className="text-[5px] font-mono opacity-50">IN_A</text>
                <text x="12" y="64" fill="currentColor" className="text-[5px] font-mono opacity-50">IN_B</text>
                <text x="50" y="28" fill="currentColor" className="text-[5px] font-mono opacity-50">LOGIC_01</text>
                <text x="90" y="58" fill="currentColor" className="text-[5px] font-mono opacity-50">OUT_Q</text>
              </svg>

              <div className="mt-4 text-center">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest block font-bold">
                  Schematic Node 012B
                </span>
                <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-1 max-w-[200px]">
                  Visualizing custom-routed standard logic cells modeled in Verilog hardware simulators.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Research Interests Grid list */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {researchInterests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-5 rounded-2xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-[#0c0c0e]/40 hover:bg-slate-100 dark:hover:bg-white/5 hover:border-purple-500/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-purple-500 dark:text-purple-400 px-2 py-0.5 rounded border border-purple-500/10 bg-purple-500/5 inline-block">
                      {interest.metric}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-200 mt-3">
                      {interest.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {interest.desc}
                    </p>
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
