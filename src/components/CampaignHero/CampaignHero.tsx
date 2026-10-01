import { useLinkContext } from '../LinkProvider/useLinkContext';
import { PageHeader } from '../PageHeader';
import { Badge } from '../Badge';
import { ProgressBar } from '../ProgressBar';
import { Card } from '../Card';
import { Column } from '../Column';
import { Section } from '../Section';
import '../Button/styles.scss';
import './styles.scss';

export interface CampaignHeroProps {
    department: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    categories: string[];
    amountRaised: number;
    fundraisingGoal: number;
    timeRemaining: string;
    currency?: string;
    donateHref?: string;
}

export const CampaignHero = ({
    department,
    title,
    description,
    imageUrl,
    imageAlt,
    categories,
    amountRaised,
    fundraisingGoal,
    timeRemaining,
    currency = 'CAD',
    donateHref = '#donate',
}: CampaignHeroProps) => {
    const LinkComponent = useLinkContext();
    const currencyFormatter = new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency,
        maximumFractionDigits: 0,
    });
    const progressValue = Math.max(0, amountRaised);
    const percentage =
        fundraisingGoal > 0
            ? Math.min(Math.round((progressValue / fundraisingGoal) * 100), 100)
            : 0;

    return (
        <>
            <Section maxWidth="alignfull" contentWidth="alignwide" className="cu-campaign-hero">
                <div className="cu-campaign-hero__visual">
                    <img className="cu-campaign-hero__image" src={imageUrl} alt={imageAlt} />
                </div>
                <div className="cu-campaign-hero__content">
                    <div className="cu-campaign-hero__copy">
                        <PageHeader
                            as="h1"
                            preHeader={department}
                            header={title}
                            content={description}
                            size="primary"
                            isFullWidth
                        >
                            {categories.length > 0 && (
                                <ul
                                    className="cu-campaign-hero__categories"
                                    aria-label="Campaign categories"
                                >
                                    {categories.map((category) => (
                                        <li key={category}>
                                            <Badge text={category} color="grey" />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </PageHeader>
                    </div>
                    <div className="cu-campaign-hero__fundraising">
                        <ProgressBar
                            value={progressValue}
                            max={fundraisingGoal}
                            label={`Campaign fundraising progress: ${percentage}% of goal reached`}
                        />
                        {/* eslint-disable-next-line react-hooks/static-components -- LinkComponent is provided by LinkProvider */}
                        <LinkComponent
                            href={donateHref}
                            className="cu-button cu-button--red cu-campaign-hero__donate"
                        >
                            Fund this project
                        </LinkComponent>
                    </div>
                </div>
            </Section>

            <Section as="div" bgType="grey" maxWidth="alignfull" contentWidth="alignwide">
                <div
                    className="cu-campaign-hero__stats"
                    role="group"
                    aria-label="Campaign fundraising statistics"
                >
                    <Column cols="4" maxWidth="alignwide">
                        <Card leftBorder revealOnScroll={false}>
                            <Card.Stats
                                stat={currencyFormatter.format(amountRaised)}
                                desc="Raised"
                            />
                        </Card>
                        <Card leftBorder revealOnScroll={false}>
                            <Card.Stats
                                stat={currencyFormatter.format(fundraisingGoal)}
                                desc="Goal"
                            />
                        </Card>
                        <Card leftBorder revealOnScroll={false}>
                            <Card.Stats stat={`${percentage}%`} desc="Funded" />
                        </Card>
                        <Card leftBorder revealOnScroll={false}>
                            <Card.Stats stat={timeRemaining} desc="Time remaining" />
                        </Card>
                    </Column>
                </div>
            </Section>
        </>
    );
};
