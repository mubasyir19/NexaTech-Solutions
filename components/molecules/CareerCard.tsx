import { departmentIconMap } from '@/helpers/career';
import { firaCode } from '@/lib/fonts';
import { Earth, HelpCircle, MapPin } from 'lucide-react';

interface CareerCardProps {
  position: string;
  department: string;
  location: string;
  code: string;
}

export default function CareerCard({ position, department, location, code }: CareerCardProps) {
  const Icon = departmentIconMap[department] ?? HelpCircle;

  return (
    <div className='bg-white border border-gray-200 rounded-lg py-4 px-8 flex flex-col md:flex-row items-center justify-between gap-4'>
      <div className=''>
        <h4 className='text-black font-bold text-base md:text-lg lg:text-xl xl:text-2xl'>{position}</h4>
        <div className='mt-3 flex items-center gap-2 lg:gap-4 flex-wrap'>
          <div className='flex items-center gap-2'>
            <Icon className='size-4 text-gray-500' />
            <p className={`${firaCode.className} text-gray-500 text-xs md:text-sm`}>{department}</p>
          </div>
          <p className='text-gray-500'>•</p>
          <div className='flex items-center gap-2'>
            {location === 'Remote' ? (
              <Earth className='size-4 text-gray-500' />
            ) : (
              <MapPin className='size-4 text-gray-500' />
            )}
            <p className={`${firaCode.className} text-gray-500 text-xs md:text-sm`}>{location}</p>
          </div>
          <p className='text-gray-500'>•</p>
          <div className=''>
            <p className='text-gray-400 text-xs md:text-sm'>REF: {code}</p>
          </div>
        </div>
      </div>
      <div className='w-full md:w-fit'>
        <button className='w-full md:w-fit border text-sm md:text-base border-gray-300 rounded-lg cursor-pointer px-4 py-2 text-center text-black font-semibold hover:bg-black hover:text-white transition-all duration-200'>
          Apply Now
        </button>
      </div>
    </div>
  );
}
