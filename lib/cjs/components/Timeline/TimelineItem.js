"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TimelineContext_1 = require("./TimelineContext");
const TimelineItem = ({ children, className, ...props }) => {
    const { horizontal } = (0, TimelineContext_1.useTimelineContext)();
    return ((0, jsx_runtime_1.jsx)("li", { "data-testid": "timeline-item", className: (0, classnames_1.default)({ 'mb-10 ml-6': !horizontal, 'relative mb-6 sm:mb-0': horizontal }, className), ...props, children: children }));
};
exports.TimelineItem = TimelineItem;