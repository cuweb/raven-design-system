import { SVGProps } from 'react';
import { IconName } from '@cuweb/rds-icons';
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
    name: IconName;
    size?: number | string;
    title?: string;
}
export declare const Icon: ({ name, size, title, ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=Icon.d.ts.map