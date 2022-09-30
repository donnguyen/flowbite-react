"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const ModalBody_1 = require("./ModalBody");
const ModalContext_1 = require("./ModalContext");
const ModalFooter_1 = require("./ModalFooter");
const ModalHeader_1 = require("./ModalHeader");
const ModalComponent = ({ children, show, root, popup, size = '2xl', position = 'center', onClose, ...props }) => {
    const [parent, setParent] = (0, react_1.useState)(root);
    const [container, setContainer] = (0, react_1.useState)();
    const theme = (0, ThemeContext_1.useTheme)().theme.modal;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    (0, react_1.useEffect)(() => {
        if (!parent)
            setParent(document.body);
        if (!container)
            setContainer(document.createElement('div'));
    }, []);
    (0, react_1.useEffect)(() => {
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
        ? (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(ModalContext_1.ModalContext.Provider, { value: { popup, onClose }, children: (0, jsx_runtime_1.jsx)("div", { "aria-hidden": !show, className: (0, classnames_1.default)(theme.base, theme.positions[position], show ? theme.show.on : theme.show.off), "data-testid": "modal", role: "dialog", ...theirProps, children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(theme.content.base, theme.sizes[size]), children: (0, jsx_runtime_1.jsx)("div", { className: theme.content.inner, children: children }) }) }) }), container)
        : null;
};
ModalComponent.displayName = 'Modal';
ModalHeader_1.ModalHeader.displayName = 'Modal.Header';
ModalBody_1.ModalBody.displayName = 'Modal.Body';
ModalFooter_1.ModalFooter.displayName = 'Modal.Footer';
exports.Modal = Object.assign(ModalComponent, { Header: ModalHeader_1.ModalHeader, Body: ModalBody_1.ModalBody, Footer: ModalFooter_1.ModalFooter });