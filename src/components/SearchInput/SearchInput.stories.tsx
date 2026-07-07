import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, useMemo } from 'react';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { SearchInput } from './SearchInput';
import type { SearchResultItem } from './SearchInputResults';
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
