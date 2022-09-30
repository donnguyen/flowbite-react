"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TimelineBody_1 = require("./TimelineBody");
const TimelineContent_1 = require("./TimelineContent");
const TimelineContext_1 = require("./TimelineContext");
const TimelineItem_1 = require("./TimelineItem");
const TimelinePoint_1 = require("./TimelinePoint");
const TimelineTime_1 = require("./TimelineTime");
const TimelineTitle_1 = require("./TimelineTitle");
const TimelineComponent = ({ children, horizontal }) => {
    return ((0, jsx_runtime_1.jsx)(TimelineContext_1.TimelineContext.Provider, { value: { horizontal }, children: (0, jsx_runtime_1.jsx)("ol", { "data-testid": "timeline-component", className: (0, classnames_1.default)({
                'relative border-l border-gray-200 dark:border-gray-700': !horizontal,
                'items-center sm:flex': horizontal,
            }), children: children }) }));
};
TimelineComponent.displayName = 'Timeline';
TimelineItem_1.TimelineItem.displayName = 'Timeline.Item';
TimelinePoint_1.TimelinePoint.displayName = 'Timeline.Point';
TimelineContent_1.TimelineContent.displayName = 'Timeline.Content';
TimelineTime_1.TimelineTime.displayName = 'Timeline.Time';
TimelineTitle_1.TimelineTitle.displayName = 'Timeline.Title';
TimelineBody_1.TimelineBody.displayName = 'Timeline.Body';
exports.Timeline = Object.assign(TimelineComponent, {
    Item: TimelineItem_1.TimelineItem,
    Point: TimelinePoint_1.TimelinePoint,
    Content: TimelineContent_1.TimelineContent,
    Time: TimelineTime_1.TimelineTime,
    Title: TimelineTitle_1.TimelineTitle,
    Body: TimelineBody_1.TimelineBody,
});