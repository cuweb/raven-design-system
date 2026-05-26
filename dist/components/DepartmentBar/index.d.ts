import * as react_jsx_runtime from 'react/jsx-runtime';

interface FooterButton {
    id: number;
    title: string;
    url: string;
}

interface DepartmentBarProps {
    deptName?: string;
    buildingName?: string;
    officeNumber?: string;
    phone?: string;
    email?: string;
    buttons?: FooterButton[];
}
declare const DepartmentBar: ({ deptName, buildingName, officeNumber, phone, email, buttons, }: DepartmentBarProps) => react_jsx_runtime.JSX.Element;

export { DepartmentBar };
export type { DepartmentBarProps };
