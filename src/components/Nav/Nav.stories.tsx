import type { Meta, StoryObj } from '@storybook/react-vite';
import { Nav } from './Nav';
import type { NavItem } from './Nav';

const meta: Meta<typeof Nav> = {
  title: 'Components/Navigation/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Nav>;

const primaryMenu: NavItem[] = [
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

const largeMenu: NavItem[] = [
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

const secondaryMenu: NavItem[] = [
  { title: 'Prospective Students', href: '/prospective' },
  { title: 'Current Students', href: '/students' },
  { title: 'Faculty & Staff', href: '/faculty' },
  { title: 'Alumni', href: '/alumni' },
];

export const Default: Story = {
  render: () => (
    <Nav>
      <Nav.Top>
        <Nav.Logo />
        <Nav.Menu menu={primaryMenu} />
      </Nav.Top>
    </Nav>
  ),
};

export const WithSiteTitle: Story = {
  render: () => (
    <Nav>
      <Nav.Top>
        <Nav.Logo title="Faculty of Science" link="/science" />
        <Nav.Menu menu={primaryMenu} />
      </Nav.Top>
    </Nav>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <Nav>
      <Nav.Top>
        <Nav.Logo />
        <Nav.Menu menu={primaryMenu} />
        <Nav.Buttons isSearch buttons={[{ title: 'Apply', href: '/apply' }, { title: 'Donate', href: '/donate', variant: 'dark' }]} />
      </Nav.Top>
    </Nav>
  ),
};

export const WithBottomNav: Story = {
  render: () => (
    <Nav>
      <Nav.Top>
        <Nav.Logo title="Faculty of Science" link="/science" />
        <Nav.Buttons buttons={[{ title: 'Apply', href: '/apply' }, { title: 'Donate', href: '/donate', variant: 'dark' }]} />
      </Nav.Top>
      <Nav.Bottom>
        <Nav.Menu menu={secondaryMenu} />
      </Nav.Bottom>
    </Nav>
  ),
};

export const LargeMenu: Story = {
  name: 'Large menu (stress test)',
  render: () => (
    <>
      {/* Menu composed into the top row */}
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Faculty of Science" link="/science" />
          <Nav.Menu menu={largeMenu} />
          <Nav.Buttons isSearch buttons={[{ title: 'Apply', href: '/apply' }, { title: 'Donate', href: '/donate', variant: 'dark' }]} />
        </Nav.Top>
      </Nav>

        <br />
        <br />

      {/* Same menu composed into the bottom strip */}
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Faculty of Science" link="/science" />
          <Nav.Buttons isSearch buttons={[{ title: 'Apply', href: '/apply' }, { title: 'Donate', href: '/donate', variant: 'dark' }]} />
        </Nav.Top>
        <Nav.Bottom>
          <Nav.Menu menu={largeMenu} />
        </Nav.Bottom>
      </Nav>
    </>
  ),
};

export const WithSearchOnly: Story = {
  render: () => (
    <Nav>
      <Nav.Top>
        <Nav.Logo />
        <Nav.Menu menu={primaryMenu} />
        <Nav.Buttons isSearch onClickSearch={() => alert('Search clicked')} />
      </Nav.Top>
    </Nav>
  ),
};
