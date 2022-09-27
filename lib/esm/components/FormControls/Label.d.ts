import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteStateColors } from '../Flowbite/FlowbiteTheme';
export interface LabelColors extends FlowbiteStateColors {
    [key: string]: string;
    default: string;
}
export interface LabelProps extends PropsWithChildren<Omit<ComponentProps<'label'>, 'className' | 'color'>> {
    color?: keyof LabelColors;
    value?: string;
    disabled?: boolean;
}
export declare const Label: FC<LabelProps>;
