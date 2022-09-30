"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingStar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const hi_1 = require("react-icons/hi");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const RatingContext_1 = require("./RatingContext");
const RatingStar = ({ filled = true, starIcon: Icon = hi_1.HiStar }) => {
    const { size = 'sm' } = (0, RatingContext_1.useRatingContext)();
    const theme = (0, ThemeContext_1.useTheme)().theme.rating.star;
    return ((0, jsx_runtime_1.jsx)(Icon, { className: (0, classnames_1.default)(theme.sizes[size], theme[filled ? 'filled' : 'empty']), "data-testid": "flowbite-rating-star" }));
};
exports.RatingStar = RatingStar;