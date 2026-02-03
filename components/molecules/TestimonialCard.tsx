import Image from 'next/image';

interface TestimonialCardProps {
  photoClient?: string;
  nameClient: string;
  position: string;
  content: string;
}

export default function TestimonialCard({ photoClient, nameClient, position, content }: TestimonialCardProps) {
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-6'>
      <div className='flex items-center gap-4'>
        {photoClient ? (
          <Image src={photoClient} width={200} height={200} alt='photo' className='size-10 rounded-full' />
        ) : (
          <div className='size-10 bg-gray-500 rounded-full'></div>
        )}
        <div className=''>
          <p className='text-black font-bold text-base'>{nameClient}</p>
          <p className='text-gray-500 text-xs font-medium'>{position}</p>
        </div>
      </div>
      <div className='mt-4'>
        <p className='italic text-base text-gray-700'>{content}</p>
      </div>
    </div>
  );
}
