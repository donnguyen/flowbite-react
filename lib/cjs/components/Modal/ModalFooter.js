"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalFooter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const ModalContext_1 = require("./ModalContext");
const ModalFooter = ({ children, ...props }) => {
    const { popup } = (0, ModalContext_1.useModalContext)();
    const theme = (0, ThemeContext_1.useTheme)().theme.modal.footer;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(theme.base, {
            [theme.popup]: !popup,
        }), ...theirProps, children: children }));
};
exports.ModalFooter = ModalFooter;