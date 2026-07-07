import { gridColumnClasses } from '../../utils/propClasses';
import { ImageGridImage } from './ImageGrid.Image';
import './styles.scss';

type GridColumnKeys = keyof typeof gridColumnClasses;
type GapType = 'none' | 'sm' | 'md' | 'lg';

export interface ImageGridProps {
    children: React.ReactNode;
    cols?: GridColumnKeys;
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
    gap?: GapType;
}

export const ImageGridWrapper = ({
    children,
    cols = '3',
    maxWidth = 'aligncontent',
    gap = 'sm',
}: ImageGridProps) => {
    const rootClasses = [
        'cu-layout cu-imagegrid',
        `cu-imagegrid--${gridColumnClasses[cols]}`,
        `cu-imagegrid--gap-${gap}`,
        maxWidth,
    ]
        .filter(Boolean)
        .join(' ');

    return <div className={rootClasses}>{children}</div>;
};

export const ImageGrid = Object.assign(ImageGridWrapper, {
    Image: ImageGridImage,
});

ImageGridWrapper.displayName = 'ImageGrid';
