import { Code, Palette, BarChart3, Database, Shield, LucideIcon } from 'lucide-react';

export const departmentIconMap: Record<string, LucideIcon> = {
  Engineering: Code,
  Design: Palette,
  Marketing: BarChart3,
  Data: Database,
  Security: Shield,
};

interface CareerPosition {
  position: string;
  department: string;
  location: string;
  code: string;
}

export const careerPosition: CareerPosition[] = [
  {
    position: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote',
    code: 'ENG-042',
  },
  {
    position: 'Product Designer',
    department: 'Design',
    location: 'New York',
    code: 'DES-018',
  },
  {
    position: 'DevOps Specialist',
    department: 'Engineering',
    location: 'London',
    code: 'OPS-003',
  },
  {
    position: 'Marketing Manager',
    department: 'Marketing',
    location: 'San Fransisco',
    code: 'MKT-102',
  },
];
