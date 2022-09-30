"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastToggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const hi_1 = require("react-icons/hi");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const ToastContext_1 = require("./ToastContext");
const ToastToggle = ({ xIcon: XIcon = hi_1.HiX }) => {
    const { duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = (0, ToastContext_1.useToastContext)();
    const theme = (0, ThemeContext_1.useTheme)().theme.toast.toggle;
    const handleClick = () => {
        setIsClosed(!isClosed);
        setTimeout(() => setIsRemoved(!isRemoved), duration);
    };
    return ((0, jsx_runtime_1.jsx)("button", { "aria-label": "Close", onClick: handleClick, type: "button", className: theme.base, children: (0, jsx_runtime_1.jsx)(XIcon, { className: theme.icon }) }));
};
exports.ToastToggle = ToastToggle;