import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface StoryCardProps {
  imageUrl?: string;
  category: string;
  tag: string;
  title: string;
  description: string;
}

export default function StoryCard({ imageUrl, category, tag, title, description }: StoryCardProps) {
  return (
    <div className='rounded-xl overflow-hidden shadow-xl h-full flex flex-col'>
      <div className='relative'>
        {imageUrl ? (
          <Image src={imageUrl} width={250} height={700} alt='thumbnail' className='object-cover' />
        ) : (
          <div className='bg-primary/40 w-full h-72'></div>
        )}
        <div className='group absolute top-5 left-5 z-10 bg-white/20 backdrop-blur-md flex items-center gap-2 rounded-full px-3 py-1'>
          <div className='size-2 bg-accent rounded-full'></div>
          <p className=' text-black text-xs font-semibold'>{category}</p>
        </div>
      </div>
      <div className='p-6 bg-gray-100 flex flex-col flex-1'>
        <p className='bg-accent/10 w-fit text-accent text-xs font-medium rounded-md px-3 py-1.5'>{tag}</p>
        <h3 className='mt-3 text-2xl text-black font-bold'>{title}</h3>
        <p className='mt-3 mb-5 text-sm text-gray-500'>{description}</p>
        <Link href={`#`} className='mt-auto text-sm text-primary font-semibold flex items-center gap-2'>
          Read Case Study <ArrowRight className='size-5 text-primary' />
        </Link>
      </div>
    </div>
  );
}
