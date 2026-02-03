import StoryCard from '@/components/molecules/StoryCard';
import { storyClient } from '@/helpers/testimonials';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialPage() {
  return (
    <div>
      <section className='container mx-auto px-6 py-12'>
        <div className='bg-secondary py-24 px-6 container mx-auto flex items-center justify-center rounded-xl'>
          <div className=''>
            <h1 className='text-2xl text-white font-extrabold text-center md:text-4xl lg:text-5xl xl:text-6xl'>
              Accelerating Growth for <br /> <span className='text-primary'>Global Enterprises</span>
            </h1>
            <p className='mt-5 text-gray-200 text-sm md:text-base text-center w-full md:w-3/4 mx-auto'>
              See how we empower digital transformation with scalable, secure, and modern infrastructure tailored for
              your needs.
            </p>
            <div className='mt-8 flex flex-col md:flex-row items-center justify-center gap-4'>
              <button className='bg-primary px-6 py-2 text-xs md:text-sm lg:text-base text-center text-white rounded-lg font-semibold'>
                View Case Studies
              </button>
              <button className='border bg-white/20 backdrop-blur-md border-gray-500 text-xs md:text-sm lg:text-base px-6 py-2 text-center text-white rounded-lg font-semibold'>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-50 px-6 py-24'>
        <div className='container mx-auto'>
          <div className=''>
            <h2 className='text-black text-4xl font-bold'>Trusted by Innovators</h2>
            <div className='mt-3 flex flex-col gap-3 md:flex-row md:items-center justify-between'>
              <p className='text-gray-500 text-sm md:text-base'>
                Hear from the teams that are building the future with our platform.
              </p>
              <div className='flex items-center gap-3'>
                <button className='size-8 bg-white rounded-full border border-gray-300 cursor-pointer flex items-center justify-center'>
                  <ArrowLeft className='size-4 text-black' />
                </button>
                <button className='size-8 bg-primary rounded-full cursor-pointer flex items-center justify-center'>
                  <ArrowRight className='size-4 text-white' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-50 px-6 py-24'>
        <div className='container mx-auto'>
          <div className=''>
            <h2 className='text-black text-4xl font-bold'>Impact Stories</h2>
            <p className='mt-3 text-gray-500 text-sm md:text-base'>
              Deep dive how we solved complex infrastructure challanges.
            </p>
          </div>
          <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6'>
            {storyClient.map((story, i) => (
              <StoryCard
                key={i}
                category={story.category}
                tag={story.tag}
                title={story.title}
                description={story.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='container mx-auto px-6 py-24'>
        <div className='bg-secondary py-16 container mx-auto flex items-center justify-center rounded-xl'>
          <div className=''>
            <h1 className='text-2xl text-white font-extrabold text-center md:text-3xl lg:text-4xl xl:text-5xl'>
              Ready to transform your infrastructure?
            </h1>
            <p className='mt-5 text-gray-200 text-base text-center w-1/2 mx-auto'>
              Join the 500+ forward-thinking companies that trust us with their most critical systems.
            </p>
            <div className='mt-8 flex items-center justify-center gap-4'>
              <button className='bg-primary px-4 py-2 text-sm text-center text-white rounded-lg font-semibold'>
                Start a Free trial
              </button>
              <button className='border border-gray-500 px-4 py-2 text-sm text-center text-white rounded-lg font-semibold'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
