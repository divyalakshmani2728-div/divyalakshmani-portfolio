import { Timeline } from '../components/Timeline';

export const Experience: React.FC = () => {
  return (
    <section id="internships" className="py-24 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-purple-500 font-bold">
            [ PROFESSIONAL ]
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Internships & Training
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 mx-auto rounded-full" />
        </div>

        {/* Narrative Intro */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            A chronological timeline of hands-on industrial internships and research exposure across telecommunications, sensor engineering, battery storage, and chip design domains.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="max-w-4xl mx-auto">
          <Timeline />
        </div>

      </div>
    </section>
  );
};
