export interface MenuItem {
  name: string;
  link: string;
  subMenu?: MenuItem[];
}

export const listMenu: MenuItem[] = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Service', link: '/services' },
  { name: 'Portfolio', link: '/portfolio' },
  { name: 'Testimonial', link: '/testimonial' },
  { name: 'Career', link: '/careers' },
  { name: 'Contact', link: '/contact' },
];
