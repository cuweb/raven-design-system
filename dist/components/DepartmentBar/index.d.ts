import * as react from 'react';

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
declare const DepartmentBar: ({ deptName, buildingName, officeNumber, phone, email, buttons, }: DepartmentBarProps) => react.JSX.Element;

export { DepartmentBar };
export type { DepartmentBarProps };
