"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const hi_1 = require("react-icons/hi");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const Tooltip_1 = require("../Tooltip");
const SidebarContext_1 = require("./SidebarContext");
const SidebarItemContext_1 = require("./SidebarItemContext");
const SidebarCollapse = ({ children, icon: Icon, label, ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const id = (0, react_1.useId)();
    const { isCollapsed } = (0, SidebarContext_1.useSidebarContext)();
    const [isOpen, setOpen] = (0, react_1.useState)(false);
    const theme = (0, ThemeContext_1.useTheme)().theme.sidebar.collapse;
    const Wrapper = ({ children }) => ((0, jsx_runtime_1.jsx)("li", { children: isCollapsed ? ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, { content: label, placement: "right", children: children })) : (children) }));
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsxs)("button", { className: theme.button, id: `flowbite-sidebar-collapse-${id}`, onClick: () => setOpen(!isOpen), type: "button", ...theirProps, children: [Icon && ((0, jsx_runtime_1.jsx)(Icon, { "aria-hidden": true, className: (0, classnames_1.default)(theme.icon.base, theme.icon.open[isOpen ? 'on' : 'off']), "data-testid": "flowbite-sidebar-collapse-icon" })), isCollapsed ? ((0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: label })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { className: theme.label.base, "data-testid": "flowbite-sidebar-collapse-label", children: label }), (0, jsx_runtime_1.jsx)(hi_1.HiChevronDown, { "aria-hidden": true, className: theme.label.icon })] }))] }), (0, jsx_runtime_1.jsx)("ul", { "aria-labelledby": `flowbite-sidebar-collapse-${id}`, className: theme.list, hidden: !isOpen, children: (0, jsx_runtime_1.jsx)(SidebarItemContext_1.SidebarItemContext.Provider, { value: { isInsideCollapse: true }, children: children }) })] }));
};
SidebarCollapse.displayName = 'Sidebar.Collapse';
exports.default = SidebarCollapse;