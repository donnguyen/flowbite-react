import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import ScrollContainer from 'react-indiana-drag-scroll';
import { excludeClassName } from '../../helpers/exclude';
import windowExists from '../../helpers/window-exists';
import { useTheme } from '../Flowbite/ThemeContext';
export const Carousel = ({ children, indicators = true, leftControl, rightControl, slide = true, slideInterval, ...props }) => {
    const isDeviceMobile = windowExists() && navigator.userAgent.indexOf('IEMobile') !== -1;
    const theirProps = excludeClassName(props);
    const carouselContainer = useRef(null);
    const [activeItem, setActiveItem] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const theme = useTheme().theme.carousel;
    const items = useMemo(() => Children.map(children, (child) => cloneElement(child, {
        className: classNames(theme.item.base, child.props.className),
    })), [children, theme.item.base]);
    const navigateTo = useCallback((item) => () => {
        item = (item + items.length) % items.length;
        if (carouselContainer.current) {
            carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item;
        }
        setActiveItem(item);
    }, [items.length]);
    useEffect(() => {
        if (carouselContainer.current && !isDragging) {
            setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth));
        }
    }, [isDragging]);
    useEffect(() => {
        if (slide) {
            const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3000);
            return () => clearInterval(intervalId);
        }
    }, [activeItem, isDragging, navigateTo, slide, slideInterval]);
    const handleDragging = (dragging) => () => setIsDragging(dragging);
    return (_jsxs("div", { className: theme.base, "data-testid": "carousel", ...theirProps, children: [_jsx(ScrollContainer, { className: classNames(theme.scrollContainer.base, (isDeviceMobile || !isDragging) && theme.scrollContainer.snap), draggingClassName: "cursor-grab", innerRef: carouselContainer, onEndScroll: handleDragging(false), onStartScroll: handleDragging(true), vertical: false, children: items?.map((item, index) => (_jsx("div", { className: theme.item.wrapper, "data-active": activeItem === index, "data-testid": "carousel-item", children: item }, index))) }), indicators && (_jsx("div", { className: theme.indicators.wrapper, children: items.map((_, index) => (_jsx("button", { className: classNames(theme.indicators.base, theme.indicators.active[index === activeItem ? 'on' : 'off']), onClick: navigateTo(index), "data-testid": "carousel-indicator" }, index))) })), _jsx("div", { className: theme.leftControl, children: _jsx("button", { className: "group", "data-testid": "carousel-left-control", onClick: navigateTo(activeItem - 1), type: "button", children: leftControl ? leftControl : _jsx(DefaultLeftControl, {}) }) }), _jsx("div", { className: theme.rightControl, children: _jsx("button", { className: "group", "data-testid": "carousel-right-control", onClick: navigateTo(activeItem + 1), type: "button", children: rightControl ? rightControl : _jsx(DefaultRightControl, {}) }) })] }));
};
const DefaultLeftControl = () => {
    const theme = useTheme().theme.carousel;
    return (_jsx("span", { className: theme.control.base, children: _jsx(HiOutlineChevronLeft, { className: theme.control.icon }) }));
};
const DefaultRightControl = () => {
    const theme = useTheme().theme.carousel;
    return (_jsx("span", { className: theme.control.base, children: _jsx(HiOutlineChevronRight, { className: theme.control.icon }) }));
};