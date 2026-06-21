import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-12 relative overflow-hidden bg-white/40 dark:bg-[#0a0a0c]/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Branding */}
        <div className="flex items-center space-x-2.5">
          <Cpu className="w-5 h-5 text-purple-500 animate-pulse" />
          <span className="font-mono text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 tracking-wider">
            DIVYALAKSHMANI G.
          </span>
        </div>

        {/* Info text & copyright */}
        <div className="text-center md:text-right mt-6 md:mt-0 space-y-2">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            &copy; {currentYear} ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
           <span className="text-purple-500 font-bold"> <a href="https://medtech-peach.vercel.app/">Design & Developmed by MEDTECH </a></span>
          </p>
        </div>

      </div>
    </footer>
  );
};
