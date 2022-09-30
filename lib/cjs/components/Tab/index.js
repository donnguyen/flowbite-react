"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = exports.TabsComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const TabItem_1 = require("./TabItem");
const TabsComponent = ({ children, style = 'default', ...rest }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.tab;
    const theirProps = (0, exclude_1.excludeClassName)(rest);
    const id = (0, react_1.useId)();
    const tabs = (0, react_1.useMemo)(() => react_1.Children.map(children, ({ props }) => props), [children]);
    const tabRefs = (0, react_1.useRef)([]);
    const [activeTab, setActiveTab] = (0, react_1.useState)(Math.max(0, tabs.findIndex((tab) => tab.active)));
    const [focusedTab, setFocusedTab] = (0, react_1.useState)(Math.max(0, tabs.findIndex((tab) => tab.active)));
    const handleClick = ({ target }) => {
        setActiveTab(target);
        setFocusedTab(target);
    };
    const handleKeyboard = ({ event, target }) => {
        if (event.key === 'ArrowLeft') {
            setFocusedTab(Math.max(0, focusedTab - 1));
        }
        if (event.key === 'ArrowRight') {
            setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1));
        }
        if (event.key === 'Enter') {
            setActiveTab(target);
            setFocusedTab(target);
        }
    };
    (0, react_1.useEffect)(() => {
        tabRefs.current[focusedTab]?.focus();
    }, [focusedTab]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: theme.base, children: [(0, jsx_runtime_1.jsx)("div", { "aria-label": "Tabs", role: "tablist", className: (0, classnames_1.default)(theme.tablist.base, theme.tablist.styles[style]), ...theirProps, children: tabs.map((tab, index) => ((0, jsx_runtime_1.jsxs)("button", { type: "button", "aria-controls": `${id}-tabpanel-${index}`, "aria-selected": index === activeTab, className: (0, classnames_1.default)(theme.tablist.tabitem.base, theme.tablist.tabitem.styles[style], {
                        [theme.tablist.tabitem.styles[style].active.on]: index === activeTab,
                        [theme.tablist.tabitem.styles[style].active.off]: index !== activeTab && !tab.disabled,
                    }), disabled: tab.disabled, id: `${id}-tab-${index}`, onClick: () => handleClick({ target: index }), onKeyDown: (event) => handleKeyboard({ event, target: index }), ref: (element) => (tabRefs.current[index] = element), role: "tab", tabIndex: index === focusedTab ? 0 : -1, children: [tab.icon && (0, jsx_runtime_1.jsx)(tab.icon, { className: theme.tablist.tabitem.icon }), tab.title] }, index))) }), (0, jsx_runtime_1.jsx)("div", { children: tabs.map((tab, index) => ((0, jsx_runtime_1.jsx)("div", { "aria-labelledby": `${id}-tab-${index}`, className: theme.tabpanel, hidden: index !== activeTab, id: `${id}-tabpanel-${index}`, role: "tabpanel", tabIndex: 0, children: tab.children }, index))) })] }));
};
exports.TabsComponent = TabsComponent;
exports.TabsComponent.displayName = 'Tabs.Group';
TabItem_1.TabItem.displayName = 'Tabs.Item';
exports.Tabs = { Group: exports.TabsComponent, Item: TabItem_1.TabItem };