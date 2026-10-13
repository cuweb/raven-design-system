import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, useMemo } from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';
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
        callback: fn(),
    },
    play: async ({ args, canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('searchbox');
        await expect(args.callback).not.toHaveBeenCalled();
        await userEvent.type(input, 'Bus');
        await expect(input).toHaveValue('Bus');
        await expect(args.callback).toHaveBeenCalledTimes(3);
        await expect(args.callback).toHaveBeenLastCalledWith('Bus');
        await userEvent.clear(input);
        await expect(input).toHaveValue('');
        await expect(args.callback).toHaveBeenCalledTimes(4);
        await expect(args.callback).toHaveBeenLastCalledWith('');
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

const AutoSuggestSelectionDemo = ({
    placeholder,
    callback,
}: {
    placeholder?: string;
    callback?: (value: string) => void;
}) => {
    const [searchString, setSearchString] = useState('');
    const [selectedStop, setSelectedStop] = useState<SearchResultSelectionItem>();

    const filteredResults = useMemo(
        () =>
            searchString === '' || selectedStop
                ? []
                : TransitStops.filter((stop) =>
                      stop.title.toLowerCase().includes(searchString.toLowerCase()),
                  ),
        [searchString, selectedStop],
    );

    return (
        <>
            <SearchInput
                value={searchString}
                callback={(value) => {
                    setSearchString(value);
                    setSelectedStop(undefined);
                    callback?.(value);
                }}
                placeholder={placeholder}
            >
                <SearchInput.Results
                    resultsData={filteredResults}
                    onSelect={(stop) => {
                        setSelectedStop(stop);
                        setSearchString(stop.title);
                    }}
                />
            </SearchInput>
            {selectedStop && <p aria-live="polite">Selected stop: {selectedStop.title}</p>}
        </>
    );
};

export const AutoSuggestSelection: Story = {
    args: {
        placeholder: 'Search for a stop...',
        callback: fn(),
    },
    render: (args) => (
        <AutoSuggestSelectionDemo placeholder={args.placeholder} callback={args.callback} />
    ),
    play: async ({ args, canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('searchbox');
        await expect(args.callback).not.toHaveBeenCalled();
        await userEvent.type(input, 'Bronson');
        await expect(args.callback).toHaveBeenCalledTimes(7);
        await expect(args.callback).toHaveBeenLastCalledWith('Bronson');
        await userEvent.click(await canvas.findByRole('button', { name: 'Bronson & Sunnyside' }));
        await expect(canvas.getByText('Selected stop: Bronson & Sunnyside')).toBeInTheDocument();
        await expect(input).toHaveValue('Bronson & Sunnyside');
        await expect(canvas.queryByRole('list')).not.toBeInTheDocument();
        await expect(args.callback).toHaveBeenCalledTimes(7);
        await userEvent.type(input, 'x');
        await expect(input).toHaveValue('Bronson & Sunnysidex');
        await expect(
            canvas.queryByText('Selected stop: Bronson & Sunnyside'),
        ).not.toBeInTheDocument();
        await expect(args.callback).toHaveBeenCalledTimes(8);
        await expect(args.callback).toHaveBeenLastCalledWith('Bronson & Sunnysidex');
        await userEvent.clear(input);
        await expect(input).toHaveValue('');
        await expect(args.callback).toHaveBeenCalledTimes(9);
        await expect(args.callback).toHaveBeenLastCalledWith('');
        await userEvent.type(input, 'Bank');
        await expect(canvas.getByRole('button', { name: 'Bank & Heron' })).toBeInTheDocument();
    },
};
