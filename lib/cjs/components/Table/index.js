"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TableBody_1 = require("./TableBody");
const TableCell_1 = require("./TableCell");
const TableContext_1 = require("./TableContext");
const TableHead_1 = require("./TableHead");
const TableHeadCell_1 = require("./TableHeadCell");
const TableRow_1 = require("./TableRow");
const TableComponent = ({ children, striped, hoverable, className, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("div", { "data-testid": "table-element", className: "relative overflow-x-auto shadow-md sm:rounded-lg", children: (0, jsx_runtime_1.jsx)(TableContext_1.TableContext.Provider, { value: { striped, hoverable }, children: (0, jsx_runtime_1.jsx)("table", { className: (0, classnames_1.default)('w-full text-left text-sm text-gray-500 dark:text-gray-400', className), ...props, children: children }) }) }));
};
TableComponent.displayName = 'Table';
TableHead_1.TableHead.displayName = 'Table.Head';
TableBody_1.TableBody.displayName = 'Table.Body';
TableRow_1.TableRow.displayName = 'Table.Row';
TableCell_1.TableCell.displayName = 'Table.Cell';
TableHeadCell_1.TableHeadCell.displayName = 'Table.HeadCell';
exports.Table = Object.assign(TableComponent, {
    Head: TableHead_1.TableHead,
    Body: TableBody_1.TableBody,
    Row: TableRow_1.TableRow,
    Cell: TableCell_1.TableCell,
    HeadCell: TableHeadCell_1.TableHeadCell,
});