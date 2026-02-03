import { CloudUpload, Rocket } from 'lucide-react';
import React, { useState } from 'react';

export default function FormOtherPosition() {
  const [dataForm, setDataForm] = useState();

  const handleSubmitForm = async () => {};

  return (
    <div className='border border-gray-300 rounded-lg bg-[#F8FAFC] p-6'>
      <div className=''>
        <div className='mx-auto bg-primary/20 size-10 rounded-full flex items-center justify-center'>
          <Rocket className='size-5 text-primary' />
        </div>
        <h2 className='mt-4 text-black font-bold text-center text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          Don&apos;t see a perfect fit?
        </h2>
        <p className='mt-3 w-full md:w-3/4 md:mx-auto lg:w-1/2 text-gray-500 text-sm xl:text-base text-center'>
          We&apos;re always looking for talented individuals. Submit a general application and we&apos;ll keep you in
          mind for future openings.
        </p>
      </div>
      <div className='mt-4 space-y-4 lg:space-y-8'>
        <div className='w-full md:w-1/2 mx-auto flex flex-col md:flex-row gap-8 md:justify-between'>
          <div className='w-full space-y-2'>
            <label className='text-base text-black font-medium block'>Full Name</label>
            <input
              type='text'
              className='w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm placeholder:text-sm'
              placeholder='John Doe'
            />
          </div>
          <div className='w-full space-y-2'>
            <label className='text-base text-black font-medium block'>Email Address</label>
            <input
              type='text'
              className='w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm placeholder:text-sm'
              placeholder='john@example.com'
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 mx-auto flex flex-col md:flex-row gap-8 md:justify-center'>
          <div className='w-full space-y-2'>
            <label className='text-base text-black font-medium block'>LinkedIn URL</label>
            <input
              type='text'
              className='w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm placeholder:text-sm'
              placeholder='linkedin.com/in/johndoe'
            />
          </div>
          <div className='w-full space-y-2'>
            <label className='text-base text-black font-medium block'>
              Portfolio URL <span className='text-gray-400 text-sm'>(Optional)</span>
            </label>
            <input
              type='text'
              className='w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm placeholder:text-sm'
              placeholder='linkedin.com/in/johndoe'
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 mx-auto'>
          <div className='w-full space-y-2'>
            <label className='text-base text-black font-medium block'>Resume / CV</label>
            <div className='relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-all duration-300'>
              <input
                type='file'
                id='file-upload'
                className='hidden'
                accept='.pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
              />

              <div className='flex flex-col items-center justify-center space-y-4'>
                <CloudUpload className='size-8 text-gray-500' />

                <div className='space-y-2'>
                  <p className='text-base font-medium text-gray-700'>Click to upload or drag and drop</p>
                  <p className='text-sm text-gray-500'>PDF, DOCX up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 mx-auto flex md:justify-end'>
          <button className='w-full md:w-fit bg-primary rounded-md px-4 py-2 text-white font-medium text-sm hover:bg-primary/80 transition-all duration-200 cursor-pointer'>
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}
