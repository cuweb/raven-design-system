import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Nav } from '../../components/Nav/Nav';
import { FooterStandard } from '../../components/FooterStandard';
import { CookieBanner } from '../../components/CookieBanner';
import { PageHeader } from '../../components/PageHeader';
import { CallOut } from '../../components/CallOut';
import { Button } from '../../components/Button';
import { ButtonGroup } from '../../components/ButtonGroup';
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

export const CallOutComponent: Story = {
  name: 'Call Out',
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
            header="Call Out Component"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            size="primary"
          />
        </Section>

        <MultiParagraph count={2} />

        <CallOut as="h2" justify="center" title="Open House">
          <MultiParagraph count={1} />
          <ButtonGroup>
            <Button title="Primary Red" />
            <Button color="dark-grey" title="Dark Grey" />
          </ButtonGroup>
        </CallOut>

        <MultiParagraph count={2} />

        <CallOut as="h2" justify="center" maxWidth="alignsmall" title="Open House">
          <MultiParagraph count={1} />
          <ButtonGroup>
            <Button title="Primary Red" />
            <Button color="dark-grey" title="Dark Grey" />
          </ButtonGroup>
        </CallOut>

        <MultiParagraph count={2} />

        <CallOut as="h2" justify="center" maxWidth="alignwide" title="Open House">
          <MultiParagraph count={1} />
          <ButtonGroup>
            <Button title="Primary Red" />
            <Button color="dark-grey" title="Dark Grey" />
          </ButtonGroup>
        </CallOut>

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey">
          <PageHeader
            as="h2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Grey Background"
            size="lg"
          />
          <CallOut as="h2" justify="center" maxWidth="aligncontent" title="Open House">
            <MultiParagraph count={1} />
            <ButtonGroup>
              <Button title="Primary Red" />
              <Button color="dark-grey" title="Dark Grey" />
            </ButtonGroup>
          </CallOut>
        </Section>

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey">
          <PageHeader
            as="h2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Grey Background"
            size="lg"
            isCenter
          />
          <CallOut as="h2" justify="center" maxWidth="alignsmall" title="Open House">
            <MultiParagraph count={1} />
            <ButtonGroup>
              <Button title="Primary Red" />
              <Button color="dark-grey" title="Dark Grey" />
            </ButtonGroup>
          </CallOut>
        </Section>

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey" contentWidth="alignwide">
          <PageHeader
            as="h2"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
            header="Grey Background"
            size="lg"
            isCenter
          />
          <CallOut as="h2" justify="center" title="Open House" maxWidth="alignwide">
            <MultiParagraph count={1} />
            <ButtonGroup>
              <Button title="Primary Red" />
              <Button color="dark-grey" title="Dark Grey" />
            </ButtonGroup>
          </CallOut>
        </Section>

        <MultiParagraph count={2} />
      </Main>

      <FooterStandard type="standard" />
      <CookieBanner cookieName="storybook-preview-consent" />
    </>
  ),
};
