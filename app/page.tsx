import Image from 'next/image';
import { ArrowRight, Check, Rocket, Smile, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import { expertiseCompany } from '@/helpers/expertise';
import ExpertCard from '@/components/molecules/ExpertCard';
import { featuredWork } from '@/helpers/work';
import WorkCard from '@/components/molecules/WorkCard';
import { testimonialClient } from '@/helpers/testimonials';
import TestimonialCard from '@/components/molecules/TestimonialCard';
import CTA from '@/components/organism/CTA';

export default function Home() {
  return (
    <div className='bg-primary/5'>
      <section className='md:h-screen container mx-auto grid grid-cols-1 md:grid-cols-2 px-6'>
        <div className='flex items-center py-12'>
          <div className=''>
            <div className='w-fit mx-auto md:mx-0 px-4 py-1 bg-primary/10 text-primary flex items-center gap-2 text-xs rounded-full'>
              <div className='size-2 bg-primary rounded-full'></div>
              <span className='uppercase font-semibold'>Future Ready</span>
            </div>
            <h1 className='mt-4 font-extrabold text-4xl text-center md:text-start md:text-5xl lg:text-6xl'>
              <span className='text-secondary'>Empowering Your</span> <br />
              <span className='text-primary'>Digital Evolution</span>
            </h1>
            <p className='mt-6 w-4/5 mx-auto md:mx-0 text-text text-base text-center md:text-start'>
              We build high-performance web application and digital strategies that scale with your business. Transform
              your ideas into robust digital solutions.
            </p>
            <div className='mt-10 flex items-center justify-center md:justify-start gap-3'>
              <button className='bg-primary rounded-md text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 font-semibold text-white flex items-center gap-1.5 cursor-pointer hover:bg-primary/80 transition-all duration-300 hover:shadow-lg'>
                Our Services
                <ArrowRight className='w-4 h-3 text-white' />
              </button>
              <button className='bg-transparent rounded-md text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 font-semibold text-secondary border-2 border-gray-400 cursor-pointer hover:shadow-lg'>
                Contact Us
              </button>
            </div>
            <div className='mt-10 flex items-center justify-center md:justify-start gap-4'>
              <div className='flex items-center gap-[-5px]'>
                <div className='bg-secondary size-8 rounded-full flex items-center justify-center'></div>
                <div className='bg-primary size-8 rounded-full flex items-center justify-center -ml-3'></div>
                <div className='bg-accent size-8 rounded-full flex items-center justify-center -ml-3'></div>
                <div className='bg-text size-8 rounded-full flex items-center justify-center -ml-3'></div>
              </div>
              <p className='text-gray-500 font-medium text-sm'>Trusted by 100+ innovators</p>
            </div>
          </div>
        </div>
        <div className='hidden md:block py-12'>
          <Image
            src={`/images/head.jpg`}
            width={1080}
            height={1080}
            alt='header'
            className='h-11/12 w-full object-cover shadow-lg rounded-lg'
          />
        </div>
      </section>
      <section className='container mx-auto px-6 pb-24'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <div className='bg-primary/10 size-12 rounded-lg flex items-center justify-center'>
              <Rocket className='size-5 text-primary' />
            </div>
            <h1 className='mt-4 text-4xl font-extrabold text-black'>150+</h1>
            <p className='text-gray-500 font-medium text-base mt-1'>Projects completed</p>
            <div className='mt-6'>
              <div className='h-1.5 w-full rounded-full bg-slate-200 overflow-hidden'>
                <div className='h-full w-[90%] bg-blue-600 rounded-full transition-all duration-300' />
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <div className='bg-primary/10 size-12 rounded-lg flex items-center justify-center'>
              <Smile className='size-5 text-primary' />
            </div>
            <h1 className='mt-4 text-4xl font-extrabold text-black'>40+</h1>
            <p className='text-gray-500 font-medium text-base mt-1'>Happy clients</p>
            <div className='mt-4 flex items-center gap-[-5px]'>
              <div className='bg-secondary size-6 rounded-full flex items-center justify-center'></div>
              <div className='bg-primary size-6 rounded-full flex items-center justify-center -ml-2'></div>
              <div className='bg-accent size-6 rounded-full flex items-center justify-center -ml-2'></div>
              <div className='bg-text size-6 rounded-full flex items-center justify-center -ml-2'></div>
            </div>
          </div>
          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <div className='bg-primary/10 size-12 rounded-lg flex items-center justify-center'>
              <Sparkles className='size-5 text-primary' />
            </div>
            <h1 className='mt-4 text-4xl font-extrabold text-black'>5</h1>
            <p className='text-gray-500 font-medium text-base mt-1'>Years experience</p>
            <div className='mt-4 flex items-center gap-1'>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className='size-4 text-yellow-300' />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto px-6 py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='hidden md:block'>
            <Image
              src={`/images/collaboration.jpg`}
              width={1080}
              height={1080}
              alt='header'
              className='h-11/12 w-full object-cover shadow-lg rounded-lg'
            />
          </div>
          <div className=''>
            <span className='px-3 py-1.5 rounded-full text-purple-400 bg-purple-100 text-xs font-semibold text-center'>
              About us
            </span>
            <h1 className='mt-6 text-black text-4xl md:text-5xl lg:text-6xl font-extrabold'>
              Partners in your <br />
              <span className='text-primary'>digital journey</span>
            </h1>
            <p className='mt-4 text-gray-600 text-base'>
              We are team of visionary developers, designers, and strategist dedicated to redifining how business
              operate in the digital age. Our mission is to simplify complexity and deliver results that matter.
            </p>
            <div className='mt-4 space-y-3'>
              <li className='flex items-center gap-2'>
                <div className='size-5 bg-emerald-100 flex items-center justify-center rounded-full'>
                  <Check className='size-3 text-emerald-600' />
                </div>
                <p className='text-gray-500 text-base'>Scalable Architecture Design</p>
              </li>
              <li className='flex items-center gap-2'>
                <div className='size-5 bg-emerald-100 flex items-center justify-center rounded-full'>
                  <Check className='size-3 text-emerald-600' />
                </div>
                <p className='text-gray-500 text-base'>User-Centric Interfaces</p>
              </li>
              <li className='flex items-center gap-2'>
                <div className='size-5 bg-emerald-100 flex items-center justify-center rounded-full'>
                  <Check className='size-3 text-emerald-600' />
                </div>
                <p className='text-gray-500 text-base'>24/7 Dedicated Support</p>
              </li>
            </div>
            <div className='mt-8'>
              <Link href={`#`} className='text-primary text-sm flex font-semibold items-center gap-2'>
                <span>Learn more about us</span>
                <ArrowRight className='text-primary size-4' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='container mx-auto px-6 py-24'>
          <div className=''>
            <h1 className='text-center text-4xl text-black font-bold'>Our Expertise</h1>
            <p className='mt-3 text-gray-500 text-center text-sm md:text-base'>
              Comprehensive digital solutions tailored to elevate your business operations and customer experience
            </p>
          </div>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
            {expertiseCompany.map((expert, i) => (
              <ExpertCard key={i} icon={expert.icon} title={expert.title} description={expert.description} />
            ))}
          </div>
        </div>
      </section>
      <section className='container mx-auto px-6 py-24'>
        <div className=''>
          <h2 className='text-black text-4xl font-bold'>Featured Work</h2>
          <div className='mt-3 flex flex-col gap-3 md:flex-row md:items-center justify-between'>
            <p className='text-gray-500 text-sm md:text-base'>Discover how we&apos;ve helped innovators succeed</p>
            <Link
              href={`#`}
              className='text-primary font-semibold cursor-pointer text-sm md:text-base flex items-center gap-2'
            >
              View all projects{' '}
              <span>
                <ArrowRight className='size-4 text-primary' />
              </span>
            </Link>
          </div>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
          {featuredWork.map((work, i) => (
            <WorkCard key={i} projectName={work.projectName} tags={work.tags} />
          ))}
        </div>
      </section>
      <section className='container mx-auto px-6 py-24'>
        <div className=''>
          <h1 className='text-center text-4xl text-black font-bold'>Trusted by Innovators</h1>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
          {testimonialClient.map((testimoni, i) => (
            <TestimonialCard
              key={i}
              nameClient={testimoni.nameClient}
              position={testimoni.position}
              content={testimoni.content}
            />
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
}
