import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import { ThemeContext, useTheme } from '../Flowbite/ThemeContext';
export const DarkThemeToggle = (props) => {
    const theirProps = excludeClassName(props);
    const theme = useTheme().theme.darkThemeToggle;
    const { mode, toggleMode } = useContext(ThemeContext);
    return (_jsx("button", { className: theme.base, "data-testid": "dark-theme-toggle", onClick: toggleMode, type: "button", "aria-label": "Toggle dark mode", ...theirProps, children: mode === 'dark' ? (_jsx(HiSun, { "aria-label": "Currently dark mode", className: theme.icon })) : (_jsx(HiMoon, { "aria-label": "Currently light mode", className: theme.icon })) }));
};