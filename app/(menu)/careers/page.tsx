'use client';

import FormOtherPosition from '@/components/molecules/FormOtherPosition';
import ValueCard from '@/components/molecules/ValueCard';
import CareerPosition from '@/components/organism/CareerPosition';
import { reasonWork } from '@/helpers/reasonWork';
import Image from 'next/image';

export default function CareersPage() {
  return (
    <div className='bg-[#F8FAFC]'>
      <section className='md:h-screen container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6'>
        <div className='flex items-center py-12'>
          <div className=''>
            <div className='w-fit mx-auto md:mx-0 px-4 py-1 bg-primary/10 text-primary flex items-center gap-2 text-xs rounded-full'>
              <div className='size-2 bg-primary rounded-full'></div>
              <span className='uppercase font-semibold'>We are Hiring</span>
            </div>
            <h1 className='mt-4 font-extrabold text-4xl text-center md:text-start md:text-5xl lg:text-6xl'>
              <span className='text-secondary'>Build The Future of</span> <br />
              <span className='bg-linear-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent'>
                Digital Transformation
              </span>
            </h1>
            <p className='mt-6 w-4/5 mx-auto md:mx-0 text-text text-base text-center md:text-start'>
              Join our mission to empower businesses with cutting-edge technology. We are looking for passionate
              individuals to join our global team and solve complex engineering challenges.
            </p>
            <div className='mt-10 flex items-center justify-center md:justify-start gap-3'>
              <button className='bg-secondary rounded-md text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 font-semibold text-white cursor-pointer hover:bg-primary/80 transition-all duration-300 hover:shadow-lg'>
                View Open Positions
              </button>
              <button className='bg-white rounded-md text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 font-semibold text-secondary border-2 border-gray-100 cursor-pointer hover:shadow-lg'>
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
        <div className='hidden lg:block py-12'>
          <Image
            src={`/images/career.jpg`}
            width={1080}
            height={1080}
            alt='header'
            className='h-11/12 w-full object-cover shadow-lg rounded-lg'
          />
        </div>
      </section>
      <section className='bg-white py-24 px-6'>
        <div className='container mx-auto'>
          <div className=''>
            <h1 className='text-secondary text-2xl md:text-3xl text-center font-bold'>Why Work Here?</h1>
            <p className='mt-2 text-text text-sm md:text-base w-full mx-auto lg:w-3/4 xl:w-1/2 text-center'>
              We believe in foresting an environment where innovation thrives and employees feel valued. It&apos;s not
              just about the code; it&apos;s about the people behind it.
            </p>
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {reasonWork.map((reason, i) => (
              <ValueCard key={i} icon={reason.icon} title={reason.title} description={reason.description} />
            ))}
          </div>
        </div>
      </section>
      <CareerPosition />
      <section className='bg-white px-6 py-24'>
        <div className='container mx-auto'>
          <FormOtherPosition />
        </div>
      </section>
    </div>
  );
}
