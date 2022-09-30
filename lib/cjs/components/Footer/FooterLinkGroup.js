"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterLinkGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const FooterLinkGroup = ({ children, col = false }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.footer.groupLink;
    return ((0, jsx_runtime_1.jsx)("ul", { "data-testid": "footer-groupLink", className: (0, classnames_1.default)(theme.base, col && theme.col), children: children }));
};
exports.FooterLinkGroup = FooterLinkGroup;