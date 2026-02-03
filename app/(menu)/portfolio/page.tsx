'use client';

import PortfolioCard from '@/components/molecules/PortfolioCard';
import { portfolioCompany } from '@/helpers/portfolio';
import { useState } from 'react';

const tabs = ['All', 'Web App', 'Mobile', 'Enterprise'];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filteredPortfolio =
    activeTab === 'All' ? portfolioCompany : portfolioCompany.filter((item) => item.category === activeTab);

  return (
    <div>
      <section className='py-24 px-6 bg-primary/5'>
        <div className='flex container mx-auto items-center justify-center px-6'>
          <div className=''>
            <div className='w-fit px-4 py-1 bg-primary/10 text-primary flex items-center gap-2 rounded-full'>
              <div className='size-2 bg-primary rounded-full'></div>
              <span className='text-xs font-semibold'>SELECTED PROJECTS</span>
            </div>
            {/* <h1 className='mt-4 md:w-8/12 md:mx-auto text-center font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl'> */}
            <h1 className='mt-4 md:w-8/12 text-start font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
              Transforming Ideas Into <span className='text-primary'>Digital Reality</span>.
            </h1>
            <p className='mt-4 lg:w-1/2 text-gray-500 text-base md:text-lg text-start'>
              Explore how we help enterprises scale through modern technology. From fintech dashboards to globals
              logistics trackers, we build what&apos;s next.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-primary/5 px-6 py-24'>
        <div className='container mx-auto'>
          <div className='flex items-center gap-3 flex-wrap'>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all
              ${activeTab === tab ? 'bg-primary text-white' : 'bg-white text-black border border-gray-200 cursor-pointer hover:bg-primary hover:text-white transition-all duration-200'}
            `}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
            {filteredPortfolio.map((portfolio, i) => (
              <PortfolioCard
                key={i}
                project={portfolio.project}
                title={portfolio.title}
                description={portfolio.description}
                tags={portfolio.stacks}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
