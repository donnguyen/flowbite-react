"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const Card = ({ children, horizontal, href, imgAlt, imgSrc, ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const theme = (0, ThemeContext_1.useTheme)().theme.card;
    const Component = typeof href === 'undefined' ? 'div' : 'a';
    return ((0, jsx_runtime_1.jsxs)(Component, { className: (0, classnames_1.default)(theme.base, theme.horizontal[horizontal ? 'on' : 'off'], href && theme.href), "data-testid": "flowbite-card", href: href, ...theirProps, children: [imgSrc && ((0, jsx_runtime_1.jsx)("img", { alt: imgAlt ?? '', className: (0, classnames_1.default)(theme.img.base, theme.img.horizontal[horizontal ? 'on' : 'off']), src: imgSrc })), (0, jsx_runtime_1.jsx)("div", { className: theme.children, children: children })] }));
};
exports.Card = Card;