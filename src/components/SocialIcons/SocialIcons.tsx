import './styles.scss';
import { SocialIconsItem } from './SocialIconsItem';
import { SocialIconsContext, type SocialIconsColor } from './SocialIconsContext';

export type { SocialIconsColor };

export interface SocialIconsProps {
    children: React.ReactNode;
    prefix?: string;
    iconColor?: SocialIconsColor;
}

const SocialIconsWrapper = ({ children, prefix, iconColor = 'black' }: SocialIconsProps) => {
    const colorClass = iconColor ? `cu-social--${iconColor}` : undefined;

    return (
        <SocialIconsContext.Provider value={{ iconColor }}>
            <div className={['cu-social', colorClass].filter(Boolean).join(' ')}>
                {prefix && <p className="cu-social__prefix">{prefix}</p>}
                <ul className="cu-social__list">{children}</ul>
            </div>
        </SocialIconsContext.Provider>
    );
};

SocialIconsWrapper.displayName = 'SocialIcons';

export const SocialIcons = Object.assign(SocialIconsWrapper, {
    Item: SocialIconsItem,
});
