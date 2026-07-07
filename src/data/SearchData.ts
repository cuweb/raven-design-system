export interface SearchDataItem {
  id: number;
  title: string;
  description: string;
  url: string;
  [key: string]: string | number;
}

export const SearchDatabase: SearchDataItem[] = [
  {
    id: 1,
    title: 'Academics & Programs',
    description:
      'Explore undergraduate, graduate, and professional programs across all faculties at Carleton University.',
    url: '/academics',
  },
  {
    id: 2,
    title: 'Admissions & Registration',
    description: 'Apply to Carleton, check your application status, and register for courses.',
    url: '/admissions',
  },
  {
    id: 3,
    title: 'Research & Innovation',
    description:
      'Discover research centres, funding opportunities, and innovation initiatives at Carleton.',
    url: '/research',
  },
  {
    id: 4,
    title: 'Student Services',
    description:
      'Access health services, counselling, the writing centre, and other academic supports.',
    url: '/student-services',
  },
  {
    id: 5,
    title: 'Campus Life',
    description: 'Find student clubs, events, residence, dining, and recreational facilities.',
    url: '/campus-life',
  },
  {
    id: 6,
    title: 'Library & Learning Resources',
    description: 'Search the library catalogue, access databases, and book study spaces.',
    url: '/library',
  },
  {
    id: 7,
    title: 'Faculty of Arts & Social Sciences',
    description: 'Programs in humanities, social sciences, journalism, and public affairs.',
    url: '/fass',
  },
  {
    id: 8,
    title: 'Faculty of Engineering & Design',
    description:
      'Engineering, architecture, industrial design, and information technology programs.',
    url: '/engineering-design',
  },
  {
    id: 9,
    title: 'Sprott School of Business',
    description: 'Undergraduate and graduate business programs with a focus on real-world impact.',
    url: '/sprott',
  },
  {
    id: 10,
    title: 'Faculty of Science',
    description: 'Programs in biology, chemistry, mathematics, physics, psychology, and more.',
    url: '/science',
  },
  {
    id: 11,
    title: 'Graduate Studies & Postdoctoral Affairs',
    description:
      'Resources for graduate applicants, current students, and postdoctoral researchers.',
    url: '/graduate-studies',
  },
  {
    id: 12,
    title: 'International Students',
    description:
      'Immigration advising, support programs, and resources for students studying from abroad.',
    url: '/international',
  },
  {
    id: 13,
    title: 'Financial Aid & Awards',
    description: 'Scholarships, bursaries, OSAP, and work-study opportunities.',
    url: '/financial-aid',
  },
  {
    id: 14,
    title: 'Indigenous Initiatives',
    description:
      'Programs, resources, and community connections supporting Indigenous students and staff.',
    url: '/indigenous',
  },
  {
    id: 15,
    title: 'Equity, Diversity & Inclusion',
    description: 'Initiatives and resources promoting an inclusive campus environment.',
    url: '/edi',
  },
];
