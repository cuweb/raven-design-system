import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Nav } from '../../components/Nav/Nav';
import { FooterStandard } from '../../components/FooterStandard';
import { CookieBanner } from '../../components/CookieBanner';
import { PageHeader } from '../../components/PageHeader';
import { Timeline } from '../../components/Timeline';
import { largeNavData } from '../../data/NavigationData';
import { MultiParagraph, UnorderedList } from '../../data/storyContent';

const meta: Meta = {
  title: 'Overview/Templates/Components',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj;

export const TimelineComponent: Story = {
  name: 'Timeline',
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
            header="Timeline Component"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="primary"
          />
        </Section>

        <MultiParagraph count={2} />

        <Timeline>
          <Timeline.Item date="2022 — Present" title="Senior Developer">
            <MultiParagraph count={1} />
            <UnorderedList />
          </Timeline.Item>
          <Timeline.Item date="2019 — 2022" title="Developer">
            <MultiParagraph count={2} />
          </Timeline.Item>
          <Timeline.Item date="2016 — 2019" title="Junior Developer">
            <MultiParagraph count={1} />
          </Timeline.Item>
        </Timeline>

        <MultiParagraph count={2} />

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey">
          <PageHeader
            as="h2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Grey Background"
            size="lg"
          />
          <Timeline>
            <Timeline.Item date="2022 — Present" title="Senior Developer">
              <MultiParagraph count={1} />
              <UnorderedList />
            </Timeline.Item>
            <Timeline.Item date="2019 — 2022" title="Developer">
              <MultiParagraph count={2} />
            </Timeline.Item>
            <Timeline.Item date="2016 — 2019" title="Junior Developer">
              <MultiParagraph count={1} />
            </Timeline.Item>
          </Timeline>
        </Section>

        <MultiParagraph count={2} />

        <Timeline>
          <Timeline.Item date="2022 — Present" title="Senior Developer">
            <MultiParagraph count={1} />
            <UnorderedList />
          </Timeline.Item>
          <Timeline.Item date="2019 — 2022" title="Developer">
            <MultiParagraph count={2} />
          </Timeline.Item>
          <Timeline.Item date="2016 — 2019" title="Junior Developer">
            <MultiParagraph count={1} />
          </Timeline.Item>
        </Timeline>

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey">
          <PageHeader
            as="h2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Grey Background"
            size="lg"
          />
          <Timeline>
            <Timeline.Item date="2022 — Present" title="Senior Developer">
              <MultiParagraph count={1} />
              <UnorderedList />
            </Timeline.Item>
            <Timeline.Item date="2019 — 2022" title="Developer">
              <MultiParagraph count={2} />
            </Timeline.Item>
            <Timeline.Item date="2016 — 2019" title="Junior Developer">
              <MultiParagraph count={1} />
            </Timeline.Item>
          </Timeline>
        </Section>

        <MultiParagraph count={2} />
      </Main>

      <FooterStandard type="standard" />
      <CookieBanner cookieName="storybook-preview-consent" />
    </>
  ),
};
