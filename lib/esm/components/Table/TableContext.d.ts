export declare type TableContextType = {
    striped?: boolean;
    hoverable?: boolean;
};
export declare const TableContext: import("react").Context<TableContextType | undefined>;
export declare function useTableContext(): TableContextType;