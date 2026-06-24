import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterPanel } from './FilterPanel';
import type { ActiveFilters, FilterGroup, SortOption } from './FilterPanelContext';
import { Card } from '../Card/Card';
import { Column } from '../Column/Column';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { NewsData } from '../../data/NewsData';

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
