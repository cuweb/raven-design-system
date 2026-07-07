import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from '../../components/Main/Main';
import { Section } from '../../components/Section/Section';
import { Nav } from '../../components/Nav/Nav';
import { FooterStandard } from '../../components/FooterStandard';
import { CookieBanner } from '../../components/CookieBanner';
import { TextImage } from '../../components/TextImage';
import { ButtonGroup } from '../../components/ButtonGroup';
import { Button } from '../../components/Button';
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

export const TextImageComponent: Story = {
  name: 'Text & Image',
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
        <Section maxWidth="alignfull" contentWidth="alignwide" bgType="light-gradient" isHero>
          <TextImage flexRow="lg" maxWidth="alignwide">
            <TextImage.Content
              headerType="h1"
              title="Website and Application Development"
              imageUrl="https://picsum.photos/800/600"
            >
              <MultiParagraph count={1} />
              <ButtonGroup>
                <Button title="Primary" />
                <Button color="dark-grey" title="Secondary" />
              </ButtonGroup>
            </TextImage.Content>
          </TextImage>
        </Section>

        <MultiParagraph count={2} />

        <TextImage flexRow="lg">
          <TextImage.Content
            imageUrl="https://picsum.photos/400/1200"
            title="Website and Application Development"
            noUnderline
          >
            <MultiParagraph count={2} />
            <ButtonGroup>
              <Button title="Primary" />
              <Button color="grey" title="Secondary" />
            </ButtonGroup>
          </TextImage.Content>
        </TextImage>

        <MultiParagraph count={2} />

        <TextImage flexRow="lg" maxWidth="alignwide">
          <TextImage.Content
            imageUrl="https://picsum.photos/800/600"
            title="Website and Application Development"
          >
            <MultiParagraph count={1} />
            <ButtonGroup>
              <Button title="Primary" />
              <Button color="grey" title="Secondary" />
            </ButtonGroup>
          </TextImage.Content>
        </TextImage>

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey">
          <TextImage flexRow="lg" maxWidth="alignwide" flipX>
            <TextImage.Content
              imageUrl="https://picsum.photos/800/600"
              title="Website and Application Development"
            >
              <MultiParagraph count={1} />
            </TextImage.Content>
          </TextImage>
        </Section>

        <MultiParagraph count={2} />

        <TextImage flexRow="lg" maxWidth="alignwide">
          <TextImage.Content
            imageUrl="https://picsum.photos/800/600"
            title="Website and Application Development"
          />
        </TextImage>

        <MultiParagraph count={2} />

        <Section as="section" maxWidth="alignwide" bgType="grey" contentWidth="alignwide">
          <TextImage flexRow="lg" maxWidth="alignwide">
            <TextImage.Content
              imageUrl="https://picsum.photos/800/600"
              title="Website and Application Development"
            >
              <MultiParagraph count={1} />
            </TextImage.Content>
          </TextImage>
        </Section>

        <MultiParagraph count={2} />
      </Main>

      <FooterStandard type="standard" />
      <CookieBanner cookieName="storybook-preview-consent" />
    </>
  ),
};
