import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTheme } from '../Flowbite/ThemeContext';
import { FooterBrand } from './FooterBrand';
import { FooterCopyright } from './FooterCopyright';
import { FooterDivider } from './FooterDivider';
import { FooterIcon } from './FooterIcon';
import { FooterLink } from './FooterLink';
import { FooterLinkGroup } from './FooterLinkGroup';
import { FooterTitle } from './FooterTitle';
export const FooterComponent = ({ children, bgDark = false, container = false }) => {
    const theme = useTheme().theme.footer;
    return (_jsx("footer", { "data-testid": "flowbite-footer", className: classNames(theme.base, bgDark && theme.bgDark, container && theme.container), children: children }));
};
FooterComponent.displayName = 'Footer';
FooterCopyright.displayName = 'Footer.Copyright';
FooterLink.displayName = 'Footer.Link';
FooterBrand.displayName = 'Footer.Brand';
FooterLinkGroup.displayName = 'Footer.LinkGroup';
FooterIcon.displayName = 'Footer.Icon';
FooterTitle.displayName = 'Footer.Title';
FooterDivider.displayName = 'Footer.Divider';
export const Footer = Object.assign(FooterComponent, {
    Copyright: FooterCopyright,
    Link: FooterLink,
    LinkGroup: FooterLinkGroup,
    Brand: FooterBrand,
    Icon: FooterIcon,
    Title: FooterTitle,
    Divider: FooterDivider,
});