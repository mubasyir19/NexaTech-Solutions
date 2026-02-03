import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, name, description }: ServiceCardProps) {
  return (
    <div className='border border-gray-200 p-6 rounded-lg bg-white shadow-xl'>
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600`}>
        <Icon className='size-5' />
      </div>
      <h3 className='mb-2 text-secondary font-bold text-xl'>{name}</h3>
      <p className='text-gray-500 text-base'>{description}</p>
      <div className='mt-4'>
        <Link href={`#`} className='text-primary text-sm font-semibold flex items-center gap-2'>
          Learn details <ArrowRight className='size-4 text-primary' />
        </Link>
      </div>
    </div>
  );
}
