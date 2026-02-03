import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

export default function ContactPage() {
  return (
    <div className='bg-primary/5'>
      <section className='py-24 px-6'>
        <div className='flex container mx-auto items-center justify-center px-6'>
          <div className=''>
            <h1 className='mt-4 text-start font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
              Let&apos;s start a conversation.
            </h1>
            <p className='mt-4 lg:w-3/4 text-gray-500 text-base md:text-lg text-start'>
              Whether you&pos;re looking to transform your digital infrastructure or just want to say hello, we&apos;re
              here to help you navigate the future.
            </p>
          </div>
        </div>
      </section>
      <section className='container mx-auto px-6 py-24 flex flex-col lg:flex-row gap-8'>
        <div className='w-full lg:w-7/12'>
          <div className='bg-white rounded-xl p-6 space-y-6'>
            <div className='flex items-center justify-between'>
              <h4 className='text-secondary font-bold text-xl'>Send us a message</h4>
              <Mail className='size-5 text-gray-500' />
            </div>
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='w-full space-y-2'>
                <label className='text-sm text-black font-medium block'>First name</label>
                <input
                  type='text'
                  className='w-full border border-gray-300 bg-primary/5 rounded-md px-4 py-2 text-sm placeholder:text-sm'
                  placeholder='John'
                />
              </div>
              <div className='w-full space-y-2'>
                <label className='text-sm text-black font-medium block'>Last name</label>
                <input
                  type='text'
                  className='w-full border border-gray-300 bg-primary/5 rounded-md px-4 py-2 text-sm placeholder:text-sm'
                  placeholder='Doe'
                />
              </div>
            </div>
            <div className='w-full space-y-2'>
              <label className='text-sm text-black font-medium block'>Work email</label>
              <input
                type='email'
                className='w-full border border-gray-300 bg-primary/5 rounded-md px-4 py-2 text-sm placeholder:text-sm'
                placeholder='admin@nexatech.com'
              />
            </div>
            <div className='w-full space-y-2'>
              <label className='text-sm text-black font-medium block'>Topic</label>
              <select
                name=''
                id=''
                className='w-full border border-gray-300 bg-primary/5 rounded-md px-4 py-2 text-sm placeholder:text-sm'
              >
                <option value='General Inquiry' className='text-sm'>
                  General Inquiry
                </option>
                <option value='Collaboration' className='text-sm'>
                  Collaboration
                </option>
                <option value='Other' className='text-sm'>
                  Other
                </option>
              </select>
            </div>
            <div className='w-full space-y-2'>
              <label className='text-sm text-black font-medium block'>How we can help?</label>
              <textarea
                name=''
                id=''
                rows={5}
                className='w-full border border-gray-300 bg-primary/5 rounded-md px-4 py-2 text-sm placeholder:text-sm'
                placeholder='Tell us about your project...'
              ></textarea>
            </div>
            <button className='w-full rounded-lg py-2 px-4 bg-primary text-white font-semibold flex items-center justify-center gap-2 text-center hover:bg-primary/80 transition-all duration-200 cursor-pointer'>
              <span className='text-sm'>Send Message</span>
              <ArrowRight className='size-4 text-white' />
            </button>
          </div>
        </div>
        <div className='w-full lg:w-5/12'>
          <div className='bg-secondary rounded-xl p-6 space-y-6'>
            <h4 className='text-white font-bold text-xl'>Contact Information</h4>
            <div className='flex items-stretch gap-2'>
              <div className=''>
                <div className='bg-white/10 size-10 rounded-full flex items-center justify-center'>
                  <Mail className='text-white size-5' />
                </div>
              </div>
              <div className=''>
                <p className='text-gray-400 text-xs font-medium'>Email us</p>
                <p className='text-white text-sm font-medium'>hello@nexatech.com</p>
              </div>
            </div>
            <div className='flex items-stretch gap-2'>
              <div className=''>
                <div className='bg-white/10 size-10 rounded-full flex items-center justify-center'>
                  <Phone className='text-white size-5' />
                </div>
              </div>
              <div className=''>
                <p className='text-gray-400 text-xs font-medium'>Call us</p>
                <p className='text-white text-sm font-medium'>+1 (555) 000-1234</p>
              </div>
            </div>
            <div className='flex items-stretch gap-2'>
              <div className=''>
                <div className='bg-white/10 size-10 rounded-full flex items-center justify-center'>
                  <MapPin className='text-white size-5' />
                </div>
              </div>
              <div className=''>
                <p className='text-gray-400 text-xs font-medium'>Visit HQ</p>
                <p className='text-white text-sm font-medium'>123 Innovation Blvd,</p>
                <p className='text-white text-sm font-medium'>Tech District, CA 94000</p>
              </div>
            </div>
            <hr className='w-full border border-gray-800' />
            <div className='flex items-center gap-4'>
              <div className='rounded-lg bg-gray-800 size-8 flex items-center justify-center'></div>
              <div className='rounded-lg bg-gray-800 size-8 flex items-center justify-center'></div>
              <div className='rounded-lg bg-gray-800 size-8 flex items-center justify-center'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
