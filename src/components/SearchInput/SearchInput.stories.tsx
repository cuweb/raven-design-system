import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, useMemo } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { SearchInput } from './SearchInput';
import type { SearchResultItem, SearchResultSelectionItem } from './SearchInputResults';
import { SearchDatabase } from '../../data/SearchData';

const meta: Meta<typeof SearchInput> = {
    title: 'Components/Forms/Search Input',
    component: SearchInput,
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
        controls: { sort: 'requiredFirst' },
    },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
    args: {
        placeholder: 'Search...',
    },
};

const AutoSuggestDemo = ({ placeholder }: { placeholder?: string }) => {
    const [searchString, setSearchString] = useState('');

    const filteredResults = useMemo<SearchResultItem[]>(
        () =>
            searchString === ''
                ? []
                : SearchDatabase.filter((item) =>
                      item.title.toLowerCase().includes(searchString.toLowerCase()),
                  ),
        [searchString],
    );

    return (
        <SearchInput callback={setSearchString} placeholder={placeholder}>
            <SearchInput.Results resultsData={filteredResults} />
        </SearchInput>
    );
};

export const AutoSuggest: Story = {
    args: {
        placeholder: 'Search...',
    },
    render: (args) => <AutoSuggestDemo placeholder={args.placeholder} />,
};

const TransitStops: SearchResultSelectionItem[] = [
    { id: 'bronson-sunnyside', title: 'Bronson & Sunnyside' },
    { id: 'bronson-somerset', title: 'Bronson & Somerset' },
    { id: 'bank-heron', title: 'Bank & Heron' },
];

const AutoSuggestSelectionDemo = ({ placeholder }: { placeholder?: string }) => {
    const [searchString, setSearchString] = useState('');
    const [selectedStop, setSelectedStop] = useState<SearchResultSelectionItem>();

    const filteredResults = useMemo(
        () =>
            searchString === ''
                ? []
                : TransitStops.filter((stop) =>
                      stop.title.toLowerCase().includes(searchString.toLowerCase()),
                  ),
        [searchString],
    );

    return (
        <>
            <SearchInput callback={setSearchString} placeholder={placeholder}>
                <SearchInput.Results resultsData={filteredResults} onSelect={setSelectedStop} />
            </SearchInput>
            {selectedStop && <p aria-live="polite">Selected stop: {selectedStop.title}</p>}
        </>
    );
};

export const AutoSuggestSelection: Story = {
    args: {
        placeholder: 'Search for a stop...',
    },
    render: (args) => <AutoSuggestSelectionDemo placeholder={args.placeholder} />,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.type(canvas.getByRole('searchbox'), 'Bronson');
        await userEvent.click(await canvas.findByRole('button', { name: 'Bronson & Sunnyside' }));
        await expect(canvas.getByText('Selected stop: Bronson & Sunnyside')).toBeInTheDocument();
    },
};
