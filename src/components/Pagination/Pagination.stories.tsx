import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../Card/Card';
import { Column } from '../Column/Column';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { NewsData } from '../../data/NewsData';
import { Pagination } from './Pagination';

const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(NewsData.length / ITEMS_PER_PAGE);

const PaginatedNewsCards = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const items = NewsData.slice(start, start + ITEMS_PER_PAGE);

    return (
        <>
            <Column cols="3">
                {items.map((item) => (
                    <Card key={`news-${item.id}`}>
                        <Card.Figure>
                            <img src={item.image} alt={item.alt} width="600" height="400" />
                        </Card.Figure>
                        <Card.Header
                            title={item.title}
                            link={item.link}
                            date={item.date}
                            readTime="7"
                        />
                        <Card.Body>
                            <Card.Excerpt text={item.excerpt} />
                        </Card.Body>
                    </Card>
                ))}
            </Column>
            <Pagination
                currentPage={currentPage}
                totalPages={TOTAL_PAGES}
                onPageChange={setCurrentPage}
            />
        </>
    );
};

const meta: Meta<typeof Pagination> = {
    title: 'Components/Navigation/Pagination',
    component: Pagination,
    tags: ['!autodocs'],
    argTypes: {
        currentPage: { control: 'number' },
        totalPages: { control: 'number' },
        ariaLabel: { control: 'text' },
    },
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    args: {
        currentPage: 3,
        totalPages: 8,
        onPageChange: () => {},
        ariaLabel: 'Pagination',
    },
};

export const ManyPages: Story = {
    args: {
        currentPage: 7,
        totalPages: 20,
        onPageChange: () => {},
    },
};

export const WithNewsCards: Story = {
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
    render: () => <PaginatedNewsCards />,
};
