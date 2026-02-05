'use client';

import OfficerCard from '@/components/molecules/OfficerCard';
import TimeLine from '@/components/molecules/TimeLine';
import ValueCard from '@/components/molecules/ValueCard';
import VisionMissionCard, { CardType } from '@/components/molecules/VisionMissionCard';
import { coreValue } from '@/helpers/coreValue';
import { officersCompany } from '@/helpers/officers';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [active, setActive] = useState<CardType>('vision');
  return (
    <div>
      <section className='py-24 bg-primary/5'>
        <div className='flex container mx-auto items-center justify-center px-6'>
          <div className=''>
            <div className='w-fit mx-auto px-4 py-1 bg-primary/10 text-primary flex items-center gap-2 rounded-full'>
              <div className='size-2 bg-primary rounded-full'></div>
              <span className='uppercase text-xs font-semibold'>Who We Are</span>
            </div>
            <h1 className='mt-4 md:w-8/12 md:mx-auto text-center font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
              Building the Infrastructure for <span className='text-primary'>Tomorrow</span>
            </h1>
            <p className='mt-4 lg:w-1/2 text-gray-500 mx-auto text-base md:text-lg text-center md:text-center'>
              We empower business to navigate the digital age with speed and precision. From humble beginnings to
              enterprise scale, we are the engine behind your growth.
            </p>
            <div className='mt-6 flex items-center justify-center'>
              <button className='bg-primary rounded-md px-4 py-2 text-white flex items-center gap-2 text-sm cursor-pointer hover:bg-primary/80 transition-all duration-200'>
                Our Story
                <ArrowDown className='size-4' />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 container mx-auto'>
        <VisionMissionCard
          type='mission'
          title='Our Mission'
          description='To simplify complex digital workflow for enterprises worldwide, removing friction and enabling creativity to
            flourish without technical barriers.'
          active={active === 'mission'}
          onClick={() => setActive('mission')}
        />
        <VisionMissionCard
          type='vision'
          title='Our Vision'
          description='A world where technology is invisible, intuitive, and seamlessly integrated into the the fabric of daily
            business, emprowering human potential.'
          active={active === 'vision'}
          onClick={() => setActive('vision')}
        />
      </section>
      <section className='py-24 bg-primary/5 p-6'>
        <div className='container mx-auto'>
          <div className=''>
            <h1 className='text-secondary text-2xl md:text-3xl text-center font-bold'>Our Core Values</h1>
            <p className='mt-2 text-text text-sm md:text-base text-center'>
              The principle that guide our decisions and define our culture
            </p>
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {coreValue.map((item, i) => (
              <ValueCard key={i} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-24 px-6 container mx-auto'>
        <TimeLine />
      </section>
      <section className='bg-primary/5 px-6 py-24'>
        <div className='container mx-auto'>
          <div className=''>
            <h2 className='text-black text-4xl font-bold'>Meet the Leadership</h2>
            <div className='mt-3 flex flex-col gap-3 md:flex-row md:items-center justify-between'>
              <p className='text-gray-500 text-sm md:text-base'>The mind&apos;s behind machine</p>
              <Link
                href={`#`}
                className='text-primary font-semibold cursor-pointer text-sm md:text-base flex items-center gap-2'
              >
                View all 42 members{' '}
                <span>
                  <ArrowRight className='size-4 text-primary' />
                </span>
              </Link>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {officersCompany.map((officer, i) => (
              <OfficerCard key={i} name={officer.name} position={officer.position} />
            ))}
          </div>
        </div>
      </section>
      <section className='container mx-auto px-6 py-24'>
        <div className='bg-primary py-16 container mx-auto flex items-center justify-center rounded-xl'>
          <div className=''>
            <h1 className='text-3xl text-white font-extrabold text-center md:text-4xl lg:text-5xl xl:text-6xl'>
              Ready to start your project?
            </h1>
            <p className='mt-5 text-gray-200 text-base text-center w-3/4 mx-auto'>
              Join hundreds of companies that trust us with their digital tranfomation. Let&apos;s build something
              amazing together.
            </p>
            <div className='mt-8 flex items-center justify-center gap-4'>
              <button className='bg-white px-6 py-4 text-center text-primary rounded-lg font-semibold'>
                View Careers
              </button>
              <button className='border border-white px-6 py-4 text-center text-white rounded-lg font-semibold'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
