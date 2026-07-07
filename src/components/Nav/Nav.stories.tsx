import type { Meta, StoryObj } from '@storybook/react-vite';
import { Nav } from './Nav';

import { primaryNavData, largeNavData } from '../../data/NavigationData';

const meta: Meta<typeof Nav> = {
    title: 'Components/Navigation/Nav',
    component: Nav,
    tags: ['!autodocs'],
    parameters: {
        layout: 'fullscreen',
        controls: {
            sort: 'requiredFirst',
        },
    },
};
export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
    render: () => (
        <Nav>
            <Nav.Top>
                <Nav.Logo />
                <Nav.Menu menu={primaryNavData} />
            </Nav.Top>
        </Nav>
    ),
};

export const WithSiteTitle: Story = {
    render: () => (
        <Nav>
            <Nav.Top>
                <Nav.Logo title="Faculty of Arts and Social Sciences" link="/science" />
                <Nav.Menu menu={primaryNavData} />
            </Nav.Top>
        </Nav>
    ),
};

export const WithButtons: Story = {
    render: () => (
        <Nav>
            <Nav.Top>
                <Nav.Logo />
                <Nav.Menu menu={primaryNavData} />
                <Nav.Buttons
                    isSearch
                    buttons={[
                        { title: 'Apply', href: '/apply' },
                        { title: 'Donate', href: '/donate', variant: 'dark' },
                    ]}
                />
            </Nav.Top>
        </Nav>
    ),
};

export const WithBottomNav: Story = {
    render: () => (
        <Nav>
            <Nav.Top>
                <Nav.Logo title="Faculty of Arts and Social Sciences" link="/science" />
                <Nav.Buttons
                    buttons={[
                        { title: 'Apply', href: '/apply' },
                        { title: 'Donate', href: '/donate', variant: 'dark' },
                    ]}
                />
            </Nav.Top>
            <Nav.Bottom>
                <Nav.Menu menu={primaryNavData} />
            </Nav.Bottom>
        </Nav>
    ),
};

export const LargeTopMenu: Story = {
    render: () => (
        <Nav>
            <Nav.Top>
                <Nav.Logo title="Faculty of Arts and Social Sciences" link="/science" />
                <Nav.Menu menu={largeNavData} />
                <Nav.Buttons
                    isSearch
                    buttons={[
                        { title: 'Apply', href: '/apply' },
                        { title: 'Donate', href: '/donate', variant: 'dark' },
                    ]}
                />
            </Nav.Top>
        </Nav>
    ),
};

export const LargeBottomMenu: Story = {
    render: () => (
        <Nav>
            <Nav.Top>
                <Nav.Logo title="Faculty of Arts and Social Sciences" link="/science" />
                <Nav.Buttons
                    isSearch
                    buttons={[
                        { title: 'Apply', href: '/apply' },
                        { title: 'Donate', href: '/donate', variant: 'dark' },
                    ]}
                />
            </Nav.Top>
            <Nav.Bottom>
                <Nav.Menu menu={largeNavData} />
            </Nav.Bottom>
        </Nav>
    ),
};

export const WithSearchOnly: Story = {
    render: () => (
        <Nav>
            <Nav.Top>
                <Nav.Logo />
                <Nav.Menu menu={primaryNavData} />
                <Nav.Buttons isSearch onClickSearch={() => alert('Search clicked')} />
            </Nav.Top>
        </Nav>
    ),
};
