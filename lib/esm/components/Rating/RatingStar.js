import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { HiStar } from 'react-icons/hi';
import { useTheme } from '../Flowbite/ThemeContext';
import { useRatingContext } from './RatingContext';
export const RatingStar = ({ filled = true, starIcon: Icon = HiStar }) => {
    const { size = 'sm' } = useRatingContext();
    const theme = useTheme().theme.rating.star;
    return (_jsx(Icon, { className: classNames(theme.sizes[size], theme[filled ? 'filled' : 'empty']), "data-testid": "flowbite-rating-star" }));
};