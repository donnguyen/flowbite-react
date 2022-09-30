"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const DropdownDivider_1 = require("./DropdownDivider");
const DropdownHeader = ({ children, ...props }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.dropdown.floating.header;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: theme, ...theirProps, children: children }), (0, jsx_runtime_1.jsx)(DropdownDivider_1.DropdownDivider, {})] }));
};
exports.DropdownHeader = DropdownHeader;