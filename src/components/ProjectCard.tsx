import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Cpu, Database, Eye, Lightbulb, Activity, ShoppingBag, Computer } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Select matching icon/illustration based on category
  const renderIcon = (cat: string) => {
    const iconClass = "w-10 h-10 text-purple-500 mb-4 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300";
    switch (cat) {
      case 'FPGA / VLSI':
        return <Cpu className={iconClass} />;
      case 'Energy':
        return <Database className={iconClass} />;
      case 'EV Systems':
        return <Activity className={iconClass} />;
      case 'Machine Vision':
        return <Eye className={iconClass} />;
      case 'Automation':
        return <Lightbulb className={iconClass} />;
      case 'IoT':
        return <Activity className={iconClass} />;
      case 'Software':
        return <ShoppingBag className={iconClass} />;
      case 'Simulation':
        return < Computer className={iconClass} />;
      default:
        return <Cpu className={iconClass} />;
    }
  };

  // Select dynamic gradient background for visual premium feel
  const getGradient = (cat: string) => {
    switch (cat) {
      case 'FPGA / VLSI':
        return 'from-purple-500/10 to-indigo-500/5 hover:from-purple-500/20';
      case 'Energy':
        return 'from-emerald-500/10 to-teal-500/5 hover:from-emerald-500/20';
      case 'EV Systems':
        return 'from-blue-500/10 to-indigo-500/5 hover:from-blue-500/20';
      case 'Machine Vision':
        return 'from-cyan-500/10 to-blue-500/5 hover:from-cyan-500/20';
      default:
        return 'from-purple-500/10 to-blue-500/5 hover:from-purple-500/20';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl glass-card hover:glass-card-hover p-6 h-full"
    >
      {/* Dynamic top gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br -z-10 opacity-30 blur-2xl transition-all duration-300 ${getGradient(project.category)}`} />

      <div>
        {/* Category Label */}
        <div className="flex justify-between items-start">
          <span className="text-[10px] uppercase font-mono tracking-widest font-bold px-2.5 py-1 rounded-full border border-black/5 dark:border-white/5 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
            {project.category}
          </span>
          {/* Engineering-style wireframe grid effect */}
          <div className="w-6 h-6 border-t border-r border-dashed border-slate-600/20 dark:border-white/10" />
        </div>

        {/* Icon & Details */}
        <div className="mt-4">
          {renderIcon(project.category)}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer Tags & Links */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-200/50 dark:bg-white/5 text-slate-700 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center border-t border-black/5 dark:border-white/5 pt-4">
          <span className="text-xs font-mono text-slate-400">PROJECT ID: #00{project.id}</span>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-all">
              <GitBranch className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg border border-black/5 dark:border-white/10 bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 transition-all">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
