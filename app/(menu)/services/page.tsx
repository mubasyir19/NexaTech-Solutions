import ServiceCard from '@/components/molecules/ServiceCard';
import { serviceCompany } from '@/helpers/serviceCompany';
import { Calendar } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div>
      <section className='py-24 bg-primary/5'>
        <div className='flex container mx-auto items-center justify-center px-6'>
          <div className=''>
            <div className='w-fit mx-auto px-4 py-1 bg-primary/10 text-primary flex items-center gap-2 rounded-full'>
              <div className='size-2 bg-primary rounded-full'></div>
              <span className='text-xs font-semibold'>New: AI Integration Services Available</span>
            </div>
            <h1 className='mt-4 md:w-8/12 md:mx-auto text-center font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
              Expertise for the <span className='text-primary'>Digital Age</span>.
            </h1>
            <p className='mt-4 lg:w-1/2 text-gray-500 mx-auto text-base md:text-lg text-center md:text-center'>
              Comprehensive solutions designed to scale your business. We transform complex challenges into elegant,
              software-driven outcomes.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-primary/5 px-6 py-24'>
        <div className='container mx-auto '>
          <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
            {serviceCompany.map((service, i) => (
              <ServiceCard key={i} icon={service.icon} name={service.name} description={service.description} />
            ))}
          </div>
        </div>
      </section>
      <section className='bg-primary px-6 py-24'>
        <div className='container mx-auto flex items-center justify-center'>
          <div className=''>
            <h1 className='text-3xl text-white font-extrabold text-center md:text-4xl lg:text-5xl xl:text-6xl'>
              Ready to transform your business?
            </h1>
            <p className='mt-5 text-gray-200 text-base text-center w-1/2 mx-auto'>
              Let&apos;s build something great together. Our team is ready to anlyze your needs and provide a custom
              solution.
            </p>
            <div className='mt-8 flex items-center justify-center gap-4'>
              <button className='bg-white px-6 py-2 text-center text-primary rounded-lg font-semibold'>
                Start a Project
              </button>
              <button className='bg-blue-800 px-6 py-2 text-center text-white rounded-lg font-semibold flex items-center gap-2'>
                Schedule Call
                <Calendar className='size-5 text-white' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
