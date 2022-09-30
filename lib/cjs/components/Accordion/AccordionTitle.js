"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionTitle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const AccordionPanelContext_1 = require("./AccordionPanelContext");
const AccordionTitle = ({ as: Heading = 'h2', children, ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = (0, AccordionPanelContext_1.useAccordionContext)();
    const theme = (0, ThemeContext_1.useTheme)().theme.accordion.title;
    const onClick = () => typeof setOpen !== 'undefined' && setOpen();
    return ((0, jsx_runtime_1.jsxs)("button", { className: (0, classnames_1.default)(theme.base, theme.flush[flush ? 'on' : 'off'], theme.open[isOpen ? 'on' : 'off']), onClick: onClick, type: "button", ...theirProps, children: [(0, jsx_runtime_1.jsx)(Heading, { className: theme.heading, "data-testid": "flowbite-accordion-heading", children: children }), ArrowIcon && ((0, jsx_runtime_1.jsx)(ArrowIcon, { "aria-hidden": true, className: (0, classnames_1.default)(theme.arrow.base, theme.arrow.open[isOpen ? 'on' : 'off']), "data-testid": "flowbite-accordion-arrow" }))] }));
};
exports.AccordionTitle = AccordionTitle;