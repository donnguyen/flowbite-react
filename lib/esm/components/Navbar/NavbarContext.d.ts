declare type NavbarContext = {
    isOpen?: boolean;
    setIsOpen: (isOpen: boolean) => void;
};
export declare const NavbarContext: import("react").Context<NavbarContext | undefined>;
export declare function useNavbarContext(): NavbarContext;
export {};
