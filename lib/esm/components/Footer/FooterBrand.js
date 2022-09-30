import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../Flowbite/ThemeContext';
export const FooterBrand = ({ alt, children, href, name, src }) => {
    const theme = useTheme().theme.footer.brand;
    return (_jsx("div", { children: href ? (_jsxs("a", { "data-testid": "flowbite-footer-brand", href: href, className: theme.base, children: [_jsx("img", { alt: alt, src: src, className: theme.img }), _jsx("span", { "data-testid": "flowbite-footer-brand-span", className: theme.span, children: name }), children] })) : (_jsx("img", { alt: alt, "data-testid": "flowbite-footer-brand", src: src, className: theme.img })) }));
};