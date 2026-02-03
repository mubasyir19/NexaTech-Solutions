import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='py-16 px-6'>
      <div className='container mx-auto'>
        <div className='flex items-stretch flex-col md:flex-row gap-10'>
          <div className='flex-1'>
            <div className='flex items-center gap-2'>
              <div className='size-10 bg-secondary rounded-lg'></div>
              <h1 className='font-bold text-secondary text-xl'>NexaTech Solutions</h1>
            </div>
            <p className='mt-4 text-gray-500 text-sm w-3/4'>
              Empowering business with cutting-edge technology for the digital age. Join us in building the future.
            </p>
            <div className='mt-4 flex items-center gap-2'>
              <div className='bg-secondary size-10 rounded-full flex items-center justify-center'>
                <p className='text-sm text-white'>LN</p>
              </div>
              <div className='bg-secondary size-10 rounded-full flex items-center justify-center'>
                <p className='text-sm text-white'>IG</p>
              </div>
              <div className='bg-secondary size-10 rounded-full flex items-center justify-center'>
                <p className='text-sm text-white'>FB</p>
              </div>
            </div>
          </div>
          <div className='flex-1 grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className=''>
              <p className='uppercase text-secondary text-base font-semibold'>Services</p>
              <ul className='mt-4 space-y-2'>
                <li className='text-gray-500 text-sm'>
                  <Link href={`#`}>Software Development</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`#`}>IT Consultant</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`#`}>Cloud Solutions</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`#`}>UI/UX Design</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`#`}>Cybersecurity</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`#`}>Maintenance & Support</Link>
                </li>
              </ul>
            </div>
            <div className=''>
              <p className='uppercase text-secondary text-base font-semibold'>Company</p>
              <ul className='mt-4 space-y-2'>
                <li className='text-gray-500 text-sm'>
                  <Link href={`/about`}>About Us</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`/portfolio`}>Portfolios</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`/testimonial`}>Testimonial</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`#`}>Contact</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`#`}>Career</Link>
                </li>
              </ul>
            </div>
            <div className=''>
              <p className='uppercase text-secondary text-base font-semibold'>Legal</p>
              <ul className='mt-4 space-y-2'>
                <li className='text-gray-500 text-sm'>
                  <Link href={`/about`}>Privacy</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`/portfolio`}>Terms</Link>
                </li>
                <li className='text-gray-500 text-sm'>
                  <Link href={`/testimonial`}>Security</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-10 w-full border border-gray-200' />
        <div className='flex items-center md:flex-row flex-col-reverse justify-between gap-4'>
          <p className='text-sm'>&copy; 2026 NexaTech Solutions. All rights reserved.</p>
          <div className='flex items-center gap-3'>
            <Link href={`#`}>
              <p className='text-sm text-gray-500'>Privacy Policy</p>
            </Link>
            <Link href={`#`}>
              <p className='text-sm text-gray-500'>Terms of Services</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
