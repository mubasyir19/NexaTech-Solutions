import { LucideIcon } from 'lucide-react';
import React from 'react';

interface ExpertCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ExpertCard({ icon: Icon, title, description }: ExpertCardProps) {
  return (
    <div className='bg-primary/5 p-6 rounded-lg shadow-lg'>
      <div className='bg-primary/10 rounded-lg size-10 flex items-center justify-center'>
        <Icon className='size-5 text-primary' />
      </div>
      <p className='my-4 text-black font-bold text-lg'>{title}</p>
      <p className='text-gray-500 text-sm'>{description}</p>
    </div>
  );
}
