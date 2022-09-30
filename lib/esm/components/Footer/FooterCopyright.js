import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../Flowbite/ThemeContext';
export const FooterCopyright = ({ href, by, year }) => {
    const theme = useTheme().theme.footer.copyright;
    return (_jsx("div", { children: _jsxs("span", { className: theme.base, "data-testid": "flowbite-footer-copyright", children: ["\u00A9 ", year, href ? (_jsx("a", { href: href, className: theme.href, children: by })) : (_jsx("span", { "data-testid": "flowbite-footer-copyright-span", className: theme.span, children: by }))] }) }));
};