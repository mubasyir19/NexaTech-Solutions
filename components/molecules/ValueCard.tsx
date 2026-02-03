import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-6'>
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600`}>
        <Icon className='size-5' />
      </div>
      <h3 className='mb-2 text-secondary font-semibold text-xl'>{title}</h3>
      <p className='text-gray-500 text-sm'>{description}</p>
    </div>
  );
}
