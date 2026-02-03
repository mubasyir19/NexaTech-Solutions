import Image from 'next/image';
import React from 'react';

interface WorkCardProps {
  imageUrl?: string;
  projectName: string;
  tags: string[];
}

export default function WorkCard({ imageUrl, projectName, tags }: WorkCardProps) {
  return (
    <div>
      <div className=''>
        {imageUrl ? (
          <Image src={imageUrl} width={500} height={500} alt='thumbnail' />
        ) : (
          <div className='h-60 w-full rounded-lg bg-accent/30'></div>
        )}
      </div>
      <div className='mt-2'>
        <p className='text-xl text-black font-bold'>{projectName}</p>
        <div className='flex items-center gap-1.5'>
          {tags.map((tag, i) => (
            <p key={i} className='text-gray-500 text-sm'>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
