import React from 'react';

export default function CTA() {
  return (
    <div className='bg-primary px-6 py-24'>
      <div className='container mx-auto flex items-center justify-center'>
        <div className=''>
          <h1 className='text-3xl text-white font-extrabold text-center md:text-4xl lg:text-5xl xl:text-6xl'>
            Ready to start your project?
          </h1>
          <p className='mt-5 text-gray-200 text-base text-center w-3/4 mx-auto'>
            Join hundreds of companies that trust us with their digital tranfomation. Let&apos;s build something amazing
            together.
          </p>
          <div className='mt-8 flex justify-center'>
            <button className='bg-white px-6 py-4 text-center text-primary rounded-lg font-semibold'>
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
