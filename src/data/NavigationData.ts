import type { NavItem } from '../components/Nav/Nav';

export const primaryNavData: NavItem[] = [
  { title: 'About', href: '/about' },
  {
    title: 'Academics',
    submenu: [
      { title: 'Undergraduate Programs', href: '/academics/undergrad' },
      { title: 'Graduate Programs', href: '/academics/grad' },
      { title: 'Online Learning', href: '/academics/online' },
    ],
  },
  {
    title: 'Research',
    submenu: [
      { title: 'Research Areas', href: '/research/areas' },
      { title: 'Research Groups', href: '/research/groups' },
      { title: 'Publications', href: '/research/publications' },
    ],
  },
  { title: 'News', href: '/news' },
  { title: 'Contact', href: '/contact' },
];

export const largeNavData: NavItem[] = [
  {
    title: 'About Carleton',
    submenu: [
      { title: 'Mission & Vision', href: '/about/mission' },
      { title: 'Leadership', href: '/about/leadership' },
      { title: 'History', href: '/about/history' },
    ],
  },
  {
    title: 'Academics',
    submenu: [
      { title: 'Undergraduate Programs', href: '/academics/undergrad' },
      { title: 'Graduate Programs', href: '/academics/grad' },
      { title: 'Online Learning', href: '/academics/online' },
    ],
  },
  {
    title: 'Admissions',
    submenu: [
      { title: 'How to Apply', href: '/admissions/apply' },
      { title: 'Tuition & Fees', href: '/admissions/tuition' },
      { title: 'Scholarships', href: '/admissions/scholarships' },
    ],
  },
  {
    title: 'Research',
    submenu: [
      { title: 'Research Areas', href: '/research/areas' },
      { title: 'Research Groups', href: '/research/groups' },
      { title: 'Publications', href: '/research/publications' },
    ],
  },
  { title: 'Campus Life', href: '/campus' },
  { title: 'News & Events', href: '/news' },
  { title: 'Community', href: '/community' },
  { title: 'Athletics', href: '/athletics' },
];
