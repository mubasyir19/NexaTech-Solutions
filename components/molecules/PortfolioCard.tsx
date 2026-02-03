import { firaCode } from '@/lib/fonts';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface PortfolioCardProps {
  imageUrl?: string;
  project: string;
  title: string;
  description: string;
  tags: string[];
}

export default function PortfolioCard({ imageUrl, project, title, description, tags }: PortfolioCardProps) {
  return (
    <div className='rounded-xl overflow-hidden shadow-xl h-full flex flex-col'>
      <div className='relative'>
        {imageUrl ? (
          <Image src={imageUrl} width={250} height={700} alt='thumbnail' className='object-cover' />
        ) : (
          <div className='bg-accent/50 w-full h-72'></div>
        )}
        <div className='group absolute top-5 right-5 z-10 bg-white size-10 cursor-pointer flex items-center justify-center hover:bg-primary transition-all duration-200 rounded-full'>
          <ArrowUpRight className='size-5 text-black group-hover:text-white transition-all duration-200' />
        </div>
      </div>
      <div className='p-6 bg-white flex flex-col flex-1'>
        <p className={`${firaCode.className} text-primary font-semibold text-sm`}>{project}</p>
        <h3 className='mt-1 text-black text-xl font-bold'>{title}</h3>
        <p className='mt-2 mb-10 text-sm text-gray-500'>{description}</p>
        <div className='mt-auto flex items-center gap-2'>
          {tags.map((item, i) => (
            <span key={i} className={`${firaCode.className} bg-primary/5 px-3 py-1.5 text-xs rounded-md`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
