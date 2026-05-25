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
      {
        title: 'Leadership',
        href: '/about/leadership',
        submenu: [
          { title: 'President & Vice-Chancellors', href: '/about/leadership/president' },
          { title: 'Board of Governors', href: '/about/leadership/board' },
          { title: 'Senate', href: '/about/leadership/senate' },
        ],
      },
      { title: 'History', href: '/about/history' },
    ],
  },
  {
    title: 'Academics',
    submenu: [
      {
        title: 'Undergraduate Programs',
        href: '/academics/undergrad',
        submenu: [
          { title: 'Arts & Social Sciences', href: '/academics/undergrad/arts' },
          { title: 'Engineering & Design', href: '/academics/undergrad/engineering' },
          { title: 'Science', href: '/academics/undergrad/science' },
        ],
      },
      {
        title: 'Graduate Programs',
        href: '/academics/grad',
        submenu: [
          { title: "Master's Programs", href: '/academics/grad/masters' },
          { title: 'Doctoral Programs', href: '/academics/grad/doctoral' },
          { title: 'Certificates & Diplomas', href: '/academics/grad/certificates' },
        ],
      },
      { title: 'Online Learning', href: '/academics/online' },
    ],
  },
  {
    title: 'Admissions',
    submenu: [
      { title: 'How to Apply', href: '/admissions/apply' },
      {
        title: 'Tuition & Fees',
        href: '/admissions/tuition',
        submenu: [
          { title: 'Undergraduate Fees', href: '/admissions/tuition/undergrad' },
          { title: 'Graduate Fees', href: '/admissions/tuition/grad' },
          { title: 'International Fees', href: '/admissions/tuition/international' },
        ],
      },
      { title: 'Scholarships', href: '/admissions/scholarships' },
    ],
  },
  {
    title: 'Research',
    submenu: [
      {
        title: 'Research Areas',
        href: '/research/areas',
        submenu: [
          { title: 'Health & Wellness', href: '/research/areas/health' },
          { title: 'Sustainability', href: '/research/areas/sustainability' },
          { title: 'Technology & AI', href: '/research/areas/technology' },
        ],
      },
      { title: 'Research Groups', href: '/research/groups' },
      { title: 'Publications', href: '/research/publications' },
    ],
  },
  { title: 'Campus Life', href: '/campus' },
  { title: 'News & Events', href: '/news' },
  { title: 'Community', href: '/community' },
  { title: 'Athletics', href: '/athletics' },
];
