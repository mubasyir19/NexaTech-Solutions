'use client';

import { firaCode } from '@/lib/fonts';
import { listMenu, MenuItem } from '@/lib/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const route = usePathname();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='w-full sticky top-0 z-50 py-4 px-6 bg-white border-b border-gray-200'>
      <div className='hidden container mx-auto lg:flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src={`/images/logo.png`} width={100} height={100} alt='logo' className='size-10' />
          <h1 className={`text-secondary text-base font-semibold ${firaCode.className}`}>NexaTech</h1>
        </div>
        <ul className='flex items-center gap-4'>
          {listMenu.map((item: MenuItem, index: number) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`text-sm px-3 py-1.5 rounded-md font-medium transition-all duration-300 ${
                  route === item.link
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-500 hover:text-primary hover:bg-primary/10'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className=''>
          <button className='bg-primary text-white text-sm cursor-pointer rounded-md px-4 py-1.5 hover:bg-primary/80 transition-all duration-300'>
            Get Started
          </button>
        </div>
      </div>
      <div className='my-auto lg:hidden flex items-center justify-between px-6 py-2'>
        <div className='flex items-center gap-2'>
          <Image src={`/images/logo.png`} width={100} height={100} alt='logo' className='size-8' />
          <h1 className={`text-secondary text-base font-semibold ${firaCode.className}`}>NexaTech</h1>
        </div>
        <button onClick={handleOpenMenu} className='flex flex-col gap-2'>
          <span
            className={`h-0.5 w-6 ${
              hasScrolled ? 'bg-secondary' : 'bg-secondary'
            } transition-transform duration-300 ease-in-out ${openMenu ? 'translate-y-1.5 rotate-45' : ''}`}
          ></span>
          <span
            className={`h-0.5 w-6 ${
              hasScrolled ? 'bg-secondary' : 'bg-secondary'
            } transition-transform duration-300 ease-in-out ${openMenu ? '-translate-y-1 -rotate-45' : ''}`}
          ></span>
        </button>
      </div>
      {openMenu && (
        <div className='absolute inset-0 top-full transition-all duration-300 ease-in'>
          <div className='space-y-3 bg-white text-right shadow-2xl'>
            <ul>
              {listMenu.map((menu: MenuItem, index: number) => (
                <li
                  key={index}
                  className={`block ${
                    route === menu.link || (menu.link !== '/' && route.startsWith(menu.link))
                      ? 'border-primary text-primary border-l-4'
                      : 'text-secondary'
                  } px-5 py-3 text-start text-base`}
                >
                  <Link href={menu.link} onClick={handleOpenMenu}>
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
