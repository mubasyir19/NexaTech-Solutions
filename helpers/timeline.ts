export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  color: string;
};

export const timelineData: TimelineItem[] = [
  {
    year: '2018',
    title: 'Founded in a Garage',
    description:
      'Started with two laptops and a coffee machine. The first line of code for our core engine was written.',
    color: 'bg-blue-500',
  },
  {
    year: '2020',
    title: 'Series A Funding ($20M)',
    description:
      'Validated our market fit. Scaled the team from 5 to 50 engineers and moved into our first real office.',
    color: 'bg-emerald-500',
  },
  {
    year: '2022',
    title: 'Expanded to Europe',
    description: 'Opened our London HQ to serve our growing base of international enterprise clients.',
    color: 'bg-blue-500',
  },
  {
    year: '2024',
    title: 'Launched Enterprise Platform',
    description: 'A complete overhaul of our core product, introducing AI-driven workflow automation.',
    color: 'bg-purple-500',
  },
];
