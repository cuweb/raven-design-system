import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Nav } from '../../components/Nav/Nav';
import { FooterStandard } from '../../components/FooterStandard';
import { CookieBanner } from '../../components/CookieBanner';
import { PageHeader } from '../../components/PageHeader';
import { Table } from '../../components/Table';
import type { ColumnDefinitionType } from '../../components/Table/Table';
import { largeNavData } from '../../data/NavigationData';
import { MultiParagraph } from '../../data/storyContent';

const meta: Meta = {
  title: 'Overview/Templates/Components',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

const tableColumns: ColumnDefinitionType[] = [
  {
    default: true,
    header: 'ID',
    key: 'id',
    order: 'descending' as const,
    sort: {
      sortable: true,
    },
  },
  {
    header: 'Title',
    key: 'title',
    sort: {
      sortable: true,
    },
  },
  {
    header: 'Description',
    key: 'description',
    sort: {
      sortable: false,
    },
  },
  {
    header: 'Edit',
    key: 'link',
    sort: {
      sortable: false,
    },
  },
];

const tableData = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum.',
    id: 1,
    link: <a href="http://example.com/1">Edit</a>,
    title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
  },
  {
    description: 'Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur.',
    id: 2,
    link: <a href="http://example.com/2">Edit</a>,
    title:
      'Testing an incredibly long title that should span multiple lines so we can see how the table handles wrapping',
  },
  {
    description:
      'Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis.',
    id: 3,
    link: <a href="http://example.com/3">Edit</a>,
    title: 'Captivating Captions: Why We Use Captions on Videos',
  },
  {
    description:
      'Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum.',
    id: 4,
    link: <a href="http://example.com/4">Edit</a>,
    title: 'How to Write for the Web',
  },
  {
    description:
      'Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus.',
    id: 5,
    link: <a href="http://example.com/5">Edit</a>,
    title: 'Accessible Design: Practical Principles',
  },
];

export const TableComponent: Story = {
  name: 'Table',
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: false },
          { id: 'landmark-complementary-is-top-level', enabled: false },
        ],
      },
    },
  },
  render: () => (
    <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="#" />
          <Nav.Buttons
            isSearch
            buttons={[
              {
                title: 'Apply',
                href: '/apply',
              },
              {
                title: 'Donate',
                href: '/donate',
                variant: 'dark',
              },
            ]}
          />
        </Nav.Top>
        <Nav.Bottom>
          <Nav.Menu menu={largeNavData} />
        </Nav.Bottom>
      </Nav>

      <Main>
        <Section maxWidth="alignfull" bgType="light-gradient" isHero>
          <PageHeader
            as="h1"
            header="Table Component"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="primary"
          />
        </Section>

        <MultiParagraph count={2} />

        <Table columns={tableColumns} data={tableData} />

        <MultiParagraph count={2} />

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey">
          <PageHeader
            as="h2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Grey Background"
            size="lg"
          />
          <Table columns={tableColumns} data={tableData} />
        </Section>

        <MultiParagraph count={2} />

        <Table columns={tableColumns} data={tableData} hasStripes maxWidth="alignwide" />

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey" contentWidth="alignwide">
          <PageHeader
            as="h2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Grey Background"
            size="lg"
            isCenter
          />
          <Table columns={tableColumns} data={tableData} hasStripes maxWidth="alignwide" />
        </Section>

        <MultiParagraph count={2} />
      </Main>

      <FooterStandard type="standard" />
      <CookieBanner cookieName="storybook-preview-consent" />
    </>
  ),
};
