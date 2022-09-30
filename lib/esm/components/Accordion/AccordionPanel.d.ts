import type { FC, PropsWithChildren } from 'react';
import type { AccordionProps } from '.';
export interface AccordionPanelProps extends PropsWithChildren<AccordionProps> {
    isOpen?: boolean;
    setOpen?: () => void;
}
export declare const AccordionPanel: FC<AccordionPanelProps>;