import { DetailsItem } from './DetailsItem';
import './styles.scss';

export interface DetailsProps {
  children?: React.ReactNode;
  as?: 'ul' | 'ol';
  hasDividers?: boolean;
  isGrey?: boolean;
}

export const DetailsWrapper = ({
  children,
  as: Tag = 'ul',
  hasDividers = false,
  isGrey = false,
}: DetailsProps) => {
  const classes = [
    'cu-details',
    hasDividers ? 'cu-details--dividers' : undefined,
    isGrey ? 'cu-details--grey' : undefined,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
};

export const Details = Object.assign(DetailsWrapper, {
  Item: DetailsItem,
});

DetailsWrapper.displayName = 'Details';
