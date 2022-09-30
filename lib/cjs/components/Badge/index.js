"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const Badge = ({ children, color = 'info', href, icon: Icon, size = 'xs', ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const theme = (0, ThemeContext_1.useTheme)().theme.badge;
    const Content = () => ((0, jsx_runtime_1.jsxs)("span", { className: (0, classnames_1.default)(theme.base, theme.color[color], theme.icon[Icon ? 'on' : 'off'], theme.size[size]), "data-testid": "flowbite-badge", ...theirProps, children: [Icon && (0, jsx_runtime_1.jsx)(Icon, { "aria-hidden": true, className: theme.icon.size[size], "data-testid": "flowbite-badge-icon" }), children && (0, jsx_runtime_1.jsx)("span", { children: children })] }));
    return href ? ((0, jsx_runtime_1.jsx)("a", { className: theme.href, href: href, children: (0, jsx_runtime_1.jsx)(Content, {}) })) : ((0, jsx_runtime_1.jsx)(Content, {}));
};
exports.Badge = Badge;