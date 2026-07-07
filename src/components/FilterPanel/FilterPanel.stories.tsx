import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterPanel } from './FilterPanel';
import type { ActiveFilters, FilterGroup, SortOption } from './FilterPanelContext';
import { Card } from '../Card/Card';
import { Column } from '../Column/Column';
import { Main } from '../Main/Main';
import { Pagination } from '../Pagination/Pagination';
import { Section } from '../Section/Section';
import { NewsData } from '../../data/NewsData';
import { PeopleData } from '../../data/PeopleData';

const meta: Meta<typeof FilterPanel> = {
  title: 'Components/Content/Filter Panel',
  component: FilterPanel,
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <Main>
        <Section>
          <Story />
        </Section>
      </Main>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof FilterPanel>;

const sortOptions: SortOption[] = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
];

const filterOptions: FilterGroup[] = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'Accessibility', label: 'Accessibility' },
      { value: 'Architecture', label: 'Architecture' },
      { value: 'Design', label: 'Design' },
      { value: 'Development', label: 'Development' },
      { value: 'Documentation', label: 'Documentation' },
      { value: 'WordPress', label: 'WordPress' },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <FilterPanel>
      <FilterPanel.Top sortOptions={sortOptions} filterOptions={filterOptions} />
      <FilterPanel.Bottom />
    </FilterPanel>
  ),
};

const NewsCardsDemo = () => {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({ sortBy: '', filterBy: {} });

  const activeCategories = activeFilters.filterBy['category'] ?? [];

  const filtered = NewsData.filter(
    (item) => activeCategories.length === 0 || activeCategories.includes(item.category),
  ).sort((a, b) => {
    if (activeFilters.sortBy === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      <FilterPanel onFilterChange={setActiveFilters}>
        <FilterPanel.Top sortOptions={sortOptions} filterOptions={filterOptions} />
        <FilterPanel.Bottom />
      </FilterPanel>
      <Column cols="3">
        {filtered.map((item) => (
          <Card key={`news-${item.id}`}>
            <Card.Figure>
              <img src={item.image} alt={item.alt} width="600" height="400" />
            </Card.Figure>
            <Card.Header title={item.title} link={item.link} date={item.date} readTime="7" />
            <Card.Body>
              <Card.Excerpt text={item.excerpt} />
            </Card.Body>
          </Card>
        ))}
      </Column>
    </>
  );
};

export const WithNewsCards: Story = {
  render: () => <NewsCardsDemo />,
};

const PEOPLE_PER_PAGE = 3;

const peopleFilterOptions: FilterGroup[] = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'Administrative', label: 'Administrative' },
      { value: 'Creative', label: 'Creative' },
      { value: 'Technical', label: 'Technical' },
    ],
  },
  {
    id: 'expertise',
    name: 'Area of Expertise',
    options: [
      { value: 'Communications', label: 'Communications' },
      { value: 'Data & Analytics', label: 'Data & Analytics' },
      { value: 'Design', label: 'Design' },
      { value: 'Infrastructure', label: 'Infrastructure' },
      { value: 'Management', label: 'Management' },
      { value: 'Security', label: 'Security' },
      { value: 'Web Development', label: 'Web Development' },
    ],
  },
];

const PeopleCardsDemo = () => {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({ sortBy: '', filterBy: {} });
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (filters: ActiveFilters) => {
    setActiveFilters(filters);
    setCurrentPage(1);
  };

  const activeCategories = activeFilters.filterBy['category'] ?? [];
  const activeExpertise = activeFilters.filterBy['expertise'] ?? [];

  const filtered = PeopleData.filter((item) => {
    const categoryMatch = activeCategories.length === 0 || activeCategories.includes(item.category);
    const expertiseMatch = activeExpertise.length === 0 || activeExpertise.includes(item.expertise);
    return categoryMatch && expertiseMatch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PEOPLE_PER_PAGE));
  const paginated = filtered.slice(
    (currentPage - 1) * PEOPLE_PER_PAGE,
    currentPage * PEOPLE_PER_PAGE,
  );

  return (
    <>
      <FilterPanel onFilterChange={handleFilterChange}>
        <FilterPanel.Top filterOptions={peopleFilterOptions} />
        <FilterPanel.Bottom />
      </FilterPanel>
      <Column cols="3">
        {paginated.map((item) => (
          <Card key={`people-${item.id}`} isCenter>
            <Card.Figure isRound>
              <img src={item.image} alt={item.alt} width={280} height={280} />
            </Card.Figure>
            <Card.Header title={`${item.firstName} ${item.lastName}`} link={item.link} />
            <Card.Body>
              <Card.PeopleMeta jobTitle={item.jobTitle} phone={item.phone}>
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </Card.PeopleMeta>
            </Card.Body>
          </Card>
        ))}
      </Column>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
};

export const WithPeopleCards: Story = {
  render: () => <PeopleCardsDemo />,
};
