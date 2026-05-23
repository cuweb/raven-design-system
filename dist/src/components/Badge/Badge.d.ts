import { borderRadiusClasses } from '../../utils/propClasses';
type borderRadiusKeys = keyof typeof borderRadiusClasses;
export interface BadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    href?: string;
    rounded?: borderRadiusKeys;
    color?: 'grey' | 'white' | 'black80' | 'white80' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'teal';
}
export declare const Badge: ({ text, href, rounded, color, ...rest }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Badge.d.ts.map