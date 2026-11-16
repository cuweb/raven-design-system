import type { IconName } from '@cuweb/rds-icons';

export interface IntranetIconResource {
    title: string;
    icon: IconName;
    link: string;
    text: string;
}

export const intranetDashboardResources = [
    {
        title: 'Staff & faculty directory',
        link: 'https://carleton.ca/directory/',
        text: 'Find a colleague or department.',
    },
    {
        title: 'IT support',
        link: 'https://carleton.ca/its/',
        text: 'Get help with accounts, access, and technology.',
    },
    {
        title: 'Employee wellbeing',
        link: 'https://carleton.ca/healthy-workplace/',
        text: 'Discover resources for a healthy workplace.',
    },
];

export const intranetNews = [
    {
        title: 'Celebrating the people behind our campus community',
        text: 'Sample story · A spotlight on staff contributions across Carleton.',
    },
    {
        title: 'Connecting research with community impact',
        text: 'Sample story · Discover how university partnerships could be highlighted for employees.',
    },
];

export const intranetDocumentCategories: IntranetIconResource[] = [
    {
        title: 'Pay & personal information',
        icon: 'address-book',
        link: '#pay-resources',
        text: 'Banking changes, pay submissions, and updates to your employee information.',
    },
    {
        title: 'Leave & benefits',
        icon: 'calendar-days',
        link: '#leave-resources',
        text: 'Find leave reporting, benefits information, and workplace wellbeing resources.',
    },
    {
        title: 'Policies & manager resources',
        icon: 'book',
        link: '#manager-resources',
        text: 'Explore employee policies and guidance for supporting your team.',
    },
];

export const intranetDocumentShortcuts: IntranetIconResource[] = [
    {
        title: 'Browse the document collection',
        icon: 'book',
        link: '#document-collection',
        text: 'Compare sample forms and guides by category, format, and owner.',
    },
    {
        title: 'Human Resources',
        icon: 'users',
        link: 'https://carleton.ca/hr/',
        text: 'Visit the HR website for published resources and contact information.',
    },
];

export const intranetDocuments = [
    { title: 'Banking change request', category: 'Pay', format: 'PDF', owner: 'Payroll' },
    { title: 'Hourly pay submission', category: 'Pay', format: 'PDF', owner: 'Payroll' },
    { title: 'Monthly leave report', category: 'Leave', format: 'PDF', owner: 'Human Resources' },
    { title: 'Monthly overtime report', category: 'Pay', format: 'PDF', owner: 'Payroll' },
    {
        title: 'Name change request',
        category: 'Personal information',
        format: 'PDF',
        owner: 'Human Resources',
    },
    {
        title: 'Employee benefits overview',
        category: 'Benefits',
        format: 'Web page',
        owner: 'Human Resources',
    },
    {
        title: 'Manager onboarding checklist',
        category: 'Manager resources',
        format: 'Guide',
        owner: 'Human Resources',
    },
];

export const intranetApplications: IntranetIconResource[] = [
    {
        title: 'Campus Card',
        icon: 'address-book',
        link: 'https://carleton.ca/campuscard/',
        text: 'Find account services, deposit information, and help with your campus card.',
    },
    {
        title: 'Travel & expenses',
        icon: 'map',
        link: 'https://carleton.ca/financialservices/',
        text: 'Find financial services information and guidance for travel and expense tools.',
    },
    {
        title: 'Employee services',
        icon: 'users',
        link: 'https://carleton.ca/hr/',
        text: 'Find HR service information and employee self-service guidance.',
    },
];

export const intranetSites = [
    {
        title: 'Web Services',
        category: 'Team site',
        access: 'Sign-in may be required',
        url: 'https://i.carleton.ca/webservices',
    },
    {
        title: 'Student Exam Services knowledge base',
        category: 'Knowledge base',
        access: 'Sign-in may be required',
        url: 'https://i.carleton.ca/kb-ses-docs',
    },
    {
        title: 'Human Resources',
        category: 'Department site',
        access: 'Sign-in may be required',
        url: 'https://i.carleton.ca/hr',
    },
    {
        title: 'IT Services knowledge base',
        category: 'Knowledge base',
        access: 'Sign-in may be required',
        url: 'https://i.carleton.ca/kb-its',
    },
    {
        title: 'Intranet Help Center',
        category: 'Support',
        access: 'Sign-in may be required',
        url: 'https://i.carleton.ca/help',
    },
    {
        title: 'IT Services internal site',
        category: 'Team site',
        access: 'Sign-in may be required',
        url: 'https://i.carleton.ca/its',
    },
];

export const intranetApplicationResources = [
    {
        title: 'IT support',
        link: 'https://carleton.ca/its/',
        text: 'Find help with accounts, sign-in, and access to campus tools.',
    },
    {
        title: 'Campus directory',
        link: 'https://carleton.ca/directory/',
        text: 'Find a department or colleague when you need help locating a service.',
    },
    {
        title: 'Carleton homepage',
        link: 'https://carleton.ca/',
        text: 'Explore university services and public campus information.',
    },
];

export const intranetMarketplaceItems = [
    {
        title: '2 bar stools',
        price: '$30',
        text: 'Pair of black counter-height stools in good condition. Pickup near campus.',
        seller: 'Alex Morgan',
        category: 'Furniture',
    },
    {
        title: 'Adjustable desk lamp',
        price: '$15',
        text: 'White LED desk lamp with three brightness settings. Available for campus pickup.',
        seller: 'Jamie Chen',
        category: 'Home office',
    },
    {
        title: 'Commuter bicycle',
        price: '$120',
        text: 'Seven-speed city bicycle with a rear rack. Recently serviced.',
        seller: 'Sam Patel',
        category: 'Cycling',
    },
];

export const intranetPhonebook = [
    {
        name: 'Alex Morgan',
        role: 'Communications Officer',
        department: 'University Communications',
        email: 'alex.morgan@example.com',
        extension: '4101',
    },
    {
        name: 'Jamie Chen',
        role: 'HR Coordinator',
        department: 'Human Resources',
        email: 'jamie.chen@example.com',
        extension: '4102',
    },
    {
        name: 'Sam Patel',
        role: 'Service Desk Analyst',
        department: 'Information Technology Services',
        email: 'sam.patel@example.com',
        extension: '4103',
    },
];

export const intranetHrNotices = [
    {
        title: 'November payroll reminder',
        text: 'Submit approved overtime and leave reports by November 18. The next sample payday is November 27, 2026.',
    },
    {
        title: 'Winter holiday planning',
        text: 'Discuss winter leave with your manager and update your team coverage plan by December 4, 2026.',
    },
    {
        title: 'Employee benefits information session',
        text: 'Join an online benefits overview on November 24, 2026, from 12:00 to 1:00 p.m. Bring questions about coverage and enrolment.',
    },
];

export const intranetJobs = [
    {
        title: 'Contracts and Agreements Specialist',
        department: 'Financial Services',
        type: 'Full-time',
        closes: 'November 26, 2026',
    },
    {
        title: 'Career Consultant',
        department: 'Career Services',
        type: 'Term appointment',
        closes: 'December 2, 2026',
    },
    {
        title: 'Campus Facilities Planning Manager',
        department: 'Facilities Management and Planning',
        type: 'Full-time',
        closes: 'December 4, 2026',
    },
];

export const intranetManagerTools = [
    {
        title: 'New employee onboarding checklist',
        text: 'Before arrival: arrange system access and workspace. In week one: introduce the team, review responsibilities, and schedule a check-in.',
    },
    {
        title: 'Leave and coverage planning',
        text: 'Review leave requests, confirm team coverage, and record approved absences before the next reporting deadline.',
    },
];

export const intranetProfile = {
    firstName: 'Alex',
    lastName: 'Morgan',
    displayName: 'Alex Morgan',
    pronouns: 'They / them',
    jobTitle: 'Communications Officer',
    department: 'University Communications',
    employeeType: 'Staff',
    email: 'alex.morgan@example.com',
    phone: null,
    office: 'Robertson Hall',
    bio: 'I help campus teams share their stories through clear, accessible communications. Connect with me about web content, campus news, or collaborating on a department announcement.',
    username: 'alexmorgan',
    accountStatus: 'Active',
    signInVerification: 'Multi-factor authentication enabled',
    teams: ['Web Content Working Group', 'Campus Communicators Network'],
};
