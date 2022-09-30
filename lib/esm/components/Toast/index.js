import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useState } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { ToastContext } from './ToastContext';
import { ToastToggle } from './ToastToggle';
const durationClasses = {
    75: 'duration-75',
    100: 'duration-100',
    150: 'duration-150',
    200: 'duration-200',
    300: 'duration-300',
    500: 'duration-500',
    700: 'duration-700',
    1000: 'duration-1000',
};
const ToastComponent = ({ children, duration = 300, ...props }) => {
    const [isClosed, setIsClosed] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);
    const theme = useTheme().theme.toast;
    const theirProps = excludeClassName(props);
    return (_jsx(ToastContext.Provider, { value: { duration, isClosed, isRemoved, setIsClosed, setIsRemoved }, children: _jsx("div", { "data-testid": "flowbite-toast", className: classNames(theme.base, durationClasses[duration], { [theme.closed]: isClosed }, { [theme.removed]: isRemoved }), ...theirProps, children: children }) }));
};
ToastComponent.displayName = 'Toast';
ToastToggle.displayName = 'Toast.Toggle';
export const Toast = Object.assign(ToastComponent, {
    Toggle: ToastToggle,
});