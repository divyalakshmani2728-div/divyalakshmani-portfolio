import React from 'react';

interface SkillBadgeProps {
  name: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <div className="px-4 py-2.5 rounded-xl border border-black/5 dark:border-white/5 bg-slate-100/50 dark:bg-white/5 text-slate-700 dark:text-slate-200 font-mono text-sm hover:border-purple-500/30 hover:bg-purple-500/5 dark:hover:bg-purple-500/5 transition-all duration-300 select-none cursor-default flex items-center space-x-2">
      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
      <span>{name}</span>
    </div>
  );
};
