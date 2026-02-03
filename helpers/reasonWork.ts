import { Earth, Lightbulb, LucideIcon, Scale, TrendingUp } from 'lucide-react';

interface ReasonWork {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const reasonWork: ReasonWork[] = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push boundaries and explore new technologies daily. No idea is too crazy to discuss.',
  },
  {
    icon: Scale,
    title: 'Work-Life Balance',
    description: 'Remote-first policy with flexible working hours. We value output over hours clocked.',
  },
  {
    icon: TrendingUp,
    title: 'Continous Growth',
    description: 'Dedicated budget for courses, conferences, and books. We invest in your potential.',
  },
  {
    icon: Earth,
    title: 'Global Impact',
    description: 'Work on projects that shape the future of digital indutries across continents.',
  },
];
