import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface CopyrightProps extends Omit<PropsWithChildren<ComponentProps<'span'>>, 'className'> {
    href?: string;
    by: string;
    year?: number;
}
export declare const FooterCopyright: FC<CopyrightProps>;
