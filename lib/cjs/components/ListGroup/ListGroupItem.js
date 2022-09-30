"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGroupItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const ListGroupItem = ({ active: isActive, children, href, icon: Icon, onClick, ...props }) => {
    const isLink = typeof href !== 'undefined';
    const Component = isLink ? 'a' : 'button';
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const theme = (0, ThemeContext_1.useTheme)().theme.listGroup.item;
    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(Component, { className: (0, classnames_1.default)(theme.active[isActive ? 'on' : 'off'], theme.base, theme.href[isLink ? 'on' : 'off']), href: href, onClick: onClick, type: isLink ? undefined : 'button', ...theirProps, children: [Icon && (0, jsx_runtime_1.jsx)(Icon, { "aria-hidden": true, className: theme.icon, "data-testid": "flowbite-list-group-item-icon" }), children] }) }));
};
exports.ListGroupItem = ListGroupItem;