import * as react_jsx_runtime from 'react/jsx-runtime';
import { SVGProps } from 'react';
import { IconName } from '@cuweb/rds-icons';
export { IconName } from '@cuweb/rds-icons';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
    name: IconName;
    size?: number | string;
    title?: string;
}
declare const Icon: ({ name, size, title, ...rest }: IconProps) => react_jsx_runtime.JSX.Element | null;

export { Icon };
export type { IconProps };
