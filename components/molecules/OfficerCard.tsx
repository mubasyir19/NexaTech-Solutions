import Image from 'next/image';

interface OfficerCardProps {
  photo?: string;
  name: string;
  position: string;
}

export default function OfficerCard({ photo, name, position }: OfficerCardProps) {
  return (
    <div className='rounded-lg border border-gray-300 overflow-hidden'>
      {photo ? (
        <Image src={photo} width={250} height={700} alt='photo' className='object-cover' />
      ) : (
        <div className='bg-accent/50 w-full h-72'></div>
      )}
      <div className='p-6 bg-white'>
        <p className='text-black text-base font-bold text-center'>{name}</p>
        <p className='mt-2 text-primary text-center font-semibold text-sm'>{position}</p>
      </div>
    </div>
  );
}
