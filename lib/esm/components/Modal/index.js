import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { ModalBody } from './ModalBody';
import { ModalContext } from './ModalContext';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
const ModalComponent = ({ children, show, root, popup, size = '2xl', position = 'center', onClose, ...props }) => {
    const [parent, setParent] = useState(root);
    const [container, setContainer] = useState();
    const theme = useTheme().theme.modal;
    const theirProps = excludeClassName(props);
    useEffect(() => {
        if (!parent)
            setParent(document.body);
        if (!container)
            setContainer(document.createElement('div'));
    }, []);
    useEffect(() => {
        if (!container || !parent || !show) {
            return;
        }
        parent.appendChild(container);
        return () => {
            if (container) {
                parent.removeChild(container);
            }
        };
    }, [container, parent, show]);
    return container
        ? createPortal(_jsx(ModalContext.Provider, { value: { popup, onClose }, children: _jsx("div", { "aria-hidden": !show, className: classNames(theme.base, theme.positions[position], show ? theme.show.on : theme.show.off), "data-testid": "modal", role: "dialog", ...theirProps, children: _jsx("div", { className: classNames(theme.content.base, theme.sizes[size]), children: _jsx("div", { className: theme.content.inner, children: children }) }) }) }), container)
        : null;
};
ModalComponent.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';
export const Modal = Object.assign(ModalComponent, { Header: ModalHeader, Body: ModalBody, Footer: ModalFooter });