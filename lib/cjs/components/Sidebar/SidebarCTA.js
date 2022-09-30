"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const SidebarContext_1 = require("./SidebarContext");
const SidebarCTA = ({ children, color = 'info', ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const { isCollapsed } = (0, SidebarContext_1.useSidebarContext)();
    const theme = (0, ThemeContext_1.useTheme)().theme.sidebar.cta;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(theme.base, theme.color[color]), "data-testid": "sidebar-cta", hidden: isCollapsed, ...theirProps, children: children }));
};
SidebarCTA.displayName = 'Sidebar.CTA';
exports.default = SidebarCTA;