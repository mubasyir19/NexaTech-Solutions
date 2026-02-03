interface Testimonial {
  photoClient: string;
  nameClient: string;
  position: string;
  content: string;
}

export const testimonialClient: Testimonial[] = [
  {
    photoClient: '',
    nameClient: 'Sarah Jenkins',
    position: 'CTO, FINCORP',
    content:
      "'NexaTech Solutiions transform our legacy systems into a modern, scalable cloud infrastructure. The team's expertise is unmatched.",
  },
  {
    photoClient: '',
    nameClient: 'David Chen',
    position: 'PRODUCT LEAD, STARTUP INC.',
    content:
      'Their user-centric design approach helped us increase user retention 40% in just three months. Highly recomended.',
  },
  {
    photoClient: '',
    nameClient: 'Emily Rossi',
    position: 'DIRECTOR, CREATUVEFLOW',
    content:
      "Professional, timely, and innovative. The didn't just build a website; they built a comprehensive digital experience.",
  },
];

export const storyClient = [
  {
    imageUrl: '',
    category: 'Fintech',
    tag: '50% Reduction in Costs',
    title: 'Modernizing Legacy FinTech',
    description:
      'How a leading financial institution migrted 20 years of legacy data to the cloud without a single minute of downtime, reducing operational overhead significantly.',
  },
  {
    imageUrl: '',
    category: 'E-Commerce',
    tag: '99.99% Uptime',
    title: 'Scaling E-Commerce Infrastructure',
    description:
      'Preparing a global retailer for Black Friday traffic spikes by implementing an auto-scaling that handled 5M concurrent users.',
  },
];
