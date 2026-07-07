import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../Main/Main';
import { Table } from './Table';
import type { ColumnDefinitionType } from './Table';

const meta: Meta<typeof Table> = {
    title: 'Components/Content/Table',
    component: Table,
    tags: ['!autodocs'],
    argTypes: {
        hasStripes: { control: 'boolean' },
        noWordBreak: { control: 'boolean' },
        enableRowHeader: { control: 'boolean' },
    },
    parameters: {
        layout: 'fullscreen',
        controls: { sort: 'requiredFirst' },
    },
    decorators: [
        (Story) => (
            <Main>
                <Story />
            </Main>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Table>;

const tableData = [
    {
        id: 1,
        title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum.',
        link: <a href="http://example.com/1">Edit</a>,
    },
    {
        id: 2,
        title: 'Testing an incredibly long title that should span multiple lines so we can see how the table handles wrapping',
        description: 'Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur.',
        link: <a href="http://example.com/2">Edit</a>,
    },
    {
        id: 3,
        title: 'Captivating Captions: Why We Use Captions on Videos',
        description:
            'Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis.',
        link: <a href="http://example.com/3">Edit</a>,
    },
    {
        id: 4,
        title: 'How to Write for the Web',
        description:
            'Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum.',
        link: <a href="http://example.com/4">Edit</a>,
    },
    {
        id: 5,
        title: 'Accessible Design: Practical Principles',
        description:
            'Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus.',
        link: <a href="http://example.com/5">Edit</a>,
    },
];

const columns: ColumnDefinitionType[] = [
    {
        key: 'id',
        header: 'ID',
        sort: { sortable: true },
        order: 'descending',
        default: true,
    },
    {
        key: 'title',
        header: 'Title',
        sort: { sortable: true },
    },
    {
        key: 'description',
        header: 'Description',
        sort: { sortable: false },
    },
    {
        key: 'link',
        header: 'Edit',
        sort: { sortable: false },
    },
];

export const Primary: Story = {
    args: {
        data: tableData,
        columns,
        hasStripes: false,
        noWordBreak: false,
        enableRowHeader: false,
    },
};

export const WithStripes: Story = {
    args: {
        data: tableData,
        columns,
        hasStripes: true,
        enableRowHeader: true,
    },
};

export const WithRowHeader: Story = {
    args: {
        data: tableData,
        columns,
        enableRowHeader: true,
    },
};

export const CustomColumnWidths: Story = {
    args: {
        data: tableData,
        columns,
        colgroup: [10, 30, 40, 20],
        enableRowHeader: true,
    },
};

export const NoWordBreak: Story = {
    args: {
        data: tableData,
        columns,
        noWordBreak: true,
    },
};

const columnsWithReactNode: ColumnDefinitionType[] = [
    {
        key: 'id',
        header: (
            <>
                <label className="sr-only" htmlFor="select-all-checkbox">
                    Select all for bulk action
                </label>
                <input type="checkbox" id="select-all-checkbox" name="checked" value="all" />
            </>
        ),
    },
    {
        key: 'title',
        header: 'Title',
        sort: { sortable: true },
    },
    {
        key: 'description',
        header: 'Description',
        sort: { sortable: false },
    },
    {
        key: 'link',
        header: 'Edit',
        sort: { sortable: false },
    },
];

export const ReactNodeInHeader: Story = {
    args: {
        data: tableData,
        columns: columnsWithReactNode,
        enableRowHeader: true,
    },
};
