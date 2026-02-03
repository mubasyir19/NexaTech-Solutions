import { timelineData } from '@/helpers/timeline';
import React from 'react';

export default function TimeLine() {
  return (
    // <div className="relative mx-auto max-w-6xl px-4 py-20">
    <div className='relative mx-auto'>
      {/* Header */}
      <div className='mb-16 text-center'>
        <p className='mb-2 text-xs font-semibold tracking-widest text-blue-500'>OUR JOURNEY</p>
        <h2 className='text-3xl font-bold text-slate-900 md:text-4xl'>History of Innovation</h2>
      </div>

      {/* Vertical line */}
      <div className='absolute left-4 top-40 h-[calc(100%-10rem)] w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2' />

      <div className='space-y-16'>
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className='relative flex flex-col md:flex-row md:items-center'>
              {/* Dot */}
              <span
                className={`absolute left-4 top-6 z-10 h-3 w-3 rounded-full ${item.color} md:left-1/2 md:-translate-x-1/2`}
              />

              {/* Card */}
              <div
                className={`ml-10 w-full md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
              >
                <div className='rounded-xl bg-slate-50 p-6 shadow-sm'>
                  <span
                    className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${item.color}`}
                  >
                    {item.year}
                  </span>
                  <h3 className='mt-2 text-lg font-semibold text-slate-900'>{item.title}</h3>
                  <p className='mt-2 text-sm text-slate-600'>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
