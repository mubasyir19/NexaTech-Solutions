import { careerPosition } from '@/helpers/career';
import { useState } from 'react';
import CareerCard from '../molecules/CareerCard';

export default function CareerPosition() {
  const [department, setDepartment] = useState<string>('all');
  const [location, setLocation] = useState<string>('all');

  const allDepartments = careerPosition.filter((item) => item.department);
  const allLocations = careerPosition.filter((item) => item.location);

  const filteredPosition = careerPosition.filter((career) => {
    const departmentMatch = department === 'all' || career.department === department;
    const locationMatch = location === 'all' || career.location === location;

    return departmentMatch && locationMatch;
  });

  return (
    <section className='container mx-auto px-6 py-24'>
      <div className=''>
        <h2 className='text-black text-4xl font-bold'>Open Positions</h2>
        <div className='mt-3 flex flex-col gap-3 md:flex-row md:items-center justify-between'>
          <p className='text-gray-500 text-sm md:text-base'>Find your next role and join the team.</p>
          <div className='flex items-center gap-4'>
            <select
              name='department'
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              id='department'
              className='bg-white border border-gray-300 px-4 py-2 text-sm rounded-md'
            >
              <option value='all' className='text-sm'>
                All Departments
              </option>
              {allDepartments.map((item, i) => (
                <option key={i} value={item.department} className='text-sm'>
                  {item.department}
                </option>
              ))}
            </select>
            <select
              name='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id='location'
              className='bg-white border border-gray-300 px-4 py-2 text-sm rounded-md'
            >
              <option value='all' className='text-sm'>
                All Locations
              </option>
              {allLocations.map((item, i) => (
                <option key={i} value={item.location} className='text-sm'>
                  {item.location}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className='mt-8 space-y-4'>
        {filteredPosition.length === 0 ? (
          <p className='text-gray-500 text-center text-base font-medium'>No positions available</p>
        ) : (
          filteredPosition.map((career, i) => (
            <CareerCard
              key={i}
              position={career.position}
              department={career.department}
              location={career.location}
              code={career.code}
            />
          ))
        )}
      </div>
    </section>
  );
}
