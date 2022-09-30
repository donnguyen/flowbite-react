"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineBody = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TimelineBody = ({ children, className, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("p", { className: (0, classnames_1.default)('mb-4 text-base font-normal text-gray-500 dark:text-gray-400', className), ...props, children: children }));
};
exports.TimelineBody = TimelineBody;