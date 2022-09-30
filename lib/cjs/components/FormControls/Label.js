"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const Label = ({ children, color = 'default', disabled = false, value, ...props }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.formControls.label;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)("label", { className: (0, classnames_1.default)(theme.base, theme.colors[color], disabled ?? theme.disabled), ...theirProps, children: value ?? children ?? '' }));
};
exports.Label = Label;