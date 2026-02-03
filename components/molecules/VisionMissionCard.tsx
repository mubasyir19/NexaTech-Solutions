import { Eye, Flag } from 'lucide-react';
import React from 'react';

export type CardType = 'mission' | 'vision';

interface VisionMissionCardProps {
  type: CardType;
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
}

export default function VisionMissionCard({ type, title, description, active, onClick }: VisionMissionCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
        active
          ? 'bg-linear-to-br from-[#0B1220] to-[#0F172A] text-white border-slate-900'
          : 'bg-slate-50 text-slate-900 border-slate-200'
      }`}
    >
      <div className='flex items-stretch justify-between mb-2'>
        <div className=''>
          {/* Icon */}
          <div
            className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg
          ${active ? 'bg-white/10' : 'bg-blue-100 text-blue-600'}`}
          >
            {type === 'mission' ? <Flag size={20} /> : <Eye size={20} />}
          </div>

          {/* Title */}
          <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>{title}</h3>
        </div>
        <div className=''>
          <Flag className={`size-16 md:size-20 text-gray-200`} />
        </div>
      </div>

      {/* Description */}
      <p className={`text-sm md:text-base lg:text-lg leading-relaxed ${active ? 'text-slate-300' : 'text-slate-600'}`}>
        {description}
      </p>

      {/* Bottom Indicator */}
      <div className={`mt-6 h-1 w-10 rounded-full' ${active ? 'bg-emerald-400' : 'bg-blue-500'}`} />
    </div>
  );
}
