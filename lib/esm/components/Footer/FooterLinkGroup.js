import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTheme } from '../Flowbite/ThemeContext';
export const FooterLinkGroup = ({ children, col = false }) => {
    const theme = useTheme().theme.footer.groupLink;
    return (_jsx("ul", { "data-testid": "footer-groupLink", className: classNames(theme.base, col && theme.col), children: children }));
};