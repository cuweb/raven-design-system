import * as react from 'react';
import { SVGProps } from 'react';
import { IconName } from '@cuweb/rds-icons';
export { IconName } from '@cuweb/rds-icons';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
    name: IconName;
    size?: number | string;
    title?: string;
}
declare const Icon: ({ name, size, title, ...rest }: IconProps) => react.JSX.Element | null;

export { Icon };
export type { IconProps };
