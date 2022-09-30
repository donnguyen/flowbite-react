"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const SidebarCollapse_1 = __importDefault(require("./SidebarCollapse"));
const SidebarContext_1 = require("./SidebarContext");
const SidebarCTA_1 = __importDefault(require("./SidebarCTA"));
const SidebarItem_1 = __importDefault(require("./SidebarItem"));
const SidebarItemGroup_1 = __importDefault(require("./SidebarItemGroup"));
const SidebarItems_1 = __importDefault(require("./SidebarItems"));
const SidebarLogo_1 = __importDefault(require("./SidebarLogo"));
const SidebarComponent = ({ children, collapseBehavior = 'collapse', collapsed: isCollapsed = false, ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const theme = (0, ThemeContext_1.useTheme)().theme.sidebar;
    return ((0, jsx_runtime_1.jsx)(SidebarContext_1.SidebarContext.Provider, { value: { isCollapsed }, children: (0, jsx_runtime_1.jsx)("aside", { "aria-label": "Sidebar", className: (0, classnames_1.default)(theme.base, theme.collapsed[isCollapsed ? 'on' : 'off']), hidden: isCollapsed && collapseBehavior === 'hide', ...theirProps, children: (0, jsx_runtime_1.jsx)("div", { className: theme.inner, children: children }) }) }));
};
SidebarComponent.displayName = 'Sidebar';
exports.Sidebar = Object.assign(SidebarComponent, {
    Collapse: SidebarCollapse_1.default,
    CTA: SidebarCTA_1.default,
    Item: SidebarItem_1.default,
    Items: SidebarItems_1.default,
    ItemGroup: SidebarItemGroup_1.default,
    Logo: SidebarLogo_1.default,
});