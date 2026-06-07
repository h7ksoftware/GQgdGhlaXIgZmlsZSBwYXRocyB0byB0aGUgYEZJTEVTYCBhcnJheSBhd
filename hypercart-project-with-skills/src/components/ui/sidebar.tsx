import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/sidebar.tsx");import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;

let prevRefreshReg;
let prevRefreshSig;

if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react-swc can't detect preamble. Something is wrong."
    );
  }

  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/sidebar.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$(), _s6 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { Slot } from "/node_modules/.vite/deps/@radix-ui_react-slot.js?v=7dd7a232";
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=7dd7a232";
import { PanelLeft } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { useIsMobile } from "/src/hooks/use-mobile.tsx";
import { cn } from "/src/lib/utils.ts";
import { Button } from "/src/components/ui/button.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { Separator } from "/src/components/ui/separator.tsx";
import { Sheet, SheetContent } from "/src/components/ui/sheet.tsx";
import { Skeleton } from "/src/components/ui/skeleton.tsx";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "/src/components/ui/tooltip.tsx";
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = /*#__PURE__*/ React.createContext(null);
function useSidebar() {
    _s();
    const context = React.useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
_s(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const SidebarProvider = /*#__PURE__*/ _s1(React.forwardRef(_c = _s1(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref)=>{
    _s1();
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback((value)=>{
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        } else {
            _setOpen(openState);
        }
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }, [
        setOpenProp,
        open
    ]);
    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(()=>{
        return isMobile ? setOpenMobile((open)=>!open) : setOpen((open)=>!open);
    }, [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        toggleSidebar
    ]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";
    const contextValue = React.useMemo(()=>({
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar
        }), [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
    ]);
    return /*#__PURE__*/ _jsxDEV(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ _jsxDEV(TooltipProvider, {
            delayDuration: 0,
            children: /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                    ...style
                },
                className: cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
                ref: ref,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "/app/src/components/ui/sidebar.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/app/src/components/ui/sidebar.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}, "QSOkjq1AvKFJW5+zwiK52jPX7zI=", false, function() {
    return [
        useIsMobile
    ];
})), "QSOkjq1AvKFJW5+zwiK52jPX7zI=", false, function() {
    return [
        useIsMobile
    ];
});
_c1 = SidebarProvider;
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = /*#__PURE__*/ _s2(React.forwardRef(_c2 = _s2(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref)=>{
    _s2();
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
        return /*#__PURE__*/ _jsxDEV("div", {
            className: cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
            ref: ref,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "/app/src/components/ui/sidebar.tsx",
            lineNumber: 143,
            columnNumber: 7
        }, this);
    }
    if (isMobile) {
        return /*#__PURE__*/ _jsxDEV(Sheet, {
            open: openMobile,
            onOpenChange: setOpenMobile,
            ...props,
            children: /*#__PURE__*/ _jsxDEV(SheetContent, {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex h-full w-full flex-col",
                    children: children
                }, void 0, false, {
                    fileName: "/app/src/components/ui/sidebar.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/ui/sidebar.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/app/src/components/ui/sidebar.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: cn("relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]")
            }, void 0, false, {
                fileName: "/app/src/components/ui/sidebar.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: cn("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
                ...props,
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-sidebar": "sidebar",
                    className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                    children: children
                }, void 0, false, {
                    fileName: "/app/src/components/ui/sidebar.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/ui/sidebar.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}, "hAL3+uRFwO9tnbDK50BUE5wZ71s=", false, function() {
    return [
        useSidebar
    ];
})), "hAL3+uRFwO9tnbDK50BUE5wZ71s=", false, function() {
    return [
        useSidebar
    ];
});
_c3 = Sidebar;
Sidebar.displayName = "Sidebar";
const SidebarTrigger = /*#__PURE__*/ _s3(React.forwardRef(_c4 = _s3(({ className, onClick, ...props }, ref)=>{
    _s3();
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ _jsxDEV(Button, {
        ref: ref,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: cn("h-7 w-7", className),
        onClick: (event)=>{
            onClick?.(event);
            toggleSidebar();
        },
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV(PanelLeft, {}, void 0, false, {
                fileName: "/app/src/components/ui/sidebar.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV("span", {
                className: "sr-only",
                children: "Toggle Sidebar"
            }, void 0, false, {
                fileName: "/app/src/components/ui/sidebar.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 224,
        columnNumber: 7
    }, this);
}, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
})), "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
});
_c5 = SidebarTrigger;
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = /*#__PURE__*/ _s4(React.forwardRef(_c6 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ _jsxDEV("button", {
        ref: ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: cn("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 249,
        columnNumber: 7
    }, this);
}, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
})), "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
});
_c7 = SidebarRail;
SidebarRail.displayName = "SidebarRail";
const SidebarInset = /*#__PURE__*/ React.forwardRef(_c8 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ _jsxDEV("main", {
        ref: ref,
        className: cn("relative flex min-h-svh flex-1 flex-col bg-background", "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
});
_c9 = SidebarInset;
SidebarInset.displayName = "SidebarInset";
const SidebarInput = /*#__PURE__*/ React.forwardRef(_c10 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ _jsxDEV(Input, {
        ref: ref,
        "data-sidebar": "input",
        className: cn("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 290,
        columnNumber: 7
    }, this);
});
_c11 = SidebarInput;
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = /*#__PURE__*/ React.forwardRef(_c12 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        "data-sidebar": "header",
        className: cn("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 305,
        columnNumber: 10
    }, this);
});
_c13 = SidebarHeader;
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = /*#__PURE__*/ React.forwardRef(_c14 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        "data-sidebar": "footer",
        className: cn("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 310,
        columnNumber: 10
    }, this);
});
_c15 = SidebarFooter;
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = /*#__PURE__*/ React.forwardRef(_c16 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ _jsxDEV(Separator, {
        ref: ref,
        "data-sidebar": "separator",
        className: cn("mx-2 w-auto bg-sidebar-border", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 317,
        columnNumber: 7
    }, this);
});
_c17 = SidebarSeparator;
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = /*#__PURE__*/ React.forwardRef(_c18 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        "data-sidebar": "content",
        className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, this);
});
_c19 = SidebarContent;
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = /*#__PURE__*/ React.forwardRef(_c20 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        "data-sidebar": "group",
        className: cn("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
});
_c21 = SidebarGroup;
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = /*#__PURE__*/ React.forwardRef(_c22 = ({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? Slot : "div";
    return /*#__PURE__*/ _jsxDEV(Comp, {
        ref: ref,
        "data-sidebar": "group-label",
        className: cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 360,
        columnNumber: 7
    }, this);
});
_c23 = SidebarGroupLabel;
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = /*#__PURE__*/ React.forwardRef(_c24 = ({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? Slot : "button";
    return /*#__PURE__*/ _jsxDEV(Comp, {
        ref: ref,
        "data-sidebar": "group-action",
        className: cn("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 380,
        columnNumber: 7
    }, this);
});
_c25 = SidebarGroupAction;
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = /*#__PURE__*/ React.forwardRef(_c26 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        "data-sidebar": "group-content",
        className: cn("w-full text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 399,
        columnNumber: 5
    }, this));
_c27 = SidebarGroupContent;
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = /*#__PURE__*/ React.forwardRef(_c28 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("ul", {
        ref: ref,
        "data-sidebar": "menu",
        className: cn("flex w-full min-w-0 flex-col gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 405,
        columnNumber: 3
    }, this));
_c29 = SidebarMenu;
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = /*#__PURE__*/ React.forwardRef(_c30 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("li", {
        ref: ref,
        "data-sidebar": "menu-item",
        className: cn("group/menu-item relative", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 410,
        columnNumber: 3
    }, this));
_c31 = SidebarMenuItem;
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const SidebarMenuButton = /*#__PURE__*/ _s5(React.forwardRef(_c32 = _s5(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref)=>{
    _s5();
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = /*#__PURE__*/ _jsxDEV(Comp, {
        ref: ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({
            variant,
            size
        }), className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 448,
        columnNumber: 5
    }, this);
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip
        };
    }
    return /*#__PURE__*/ _jsxDEV(Tooltip, {
        children: [
            /*#__PURE__*/ _jsxDEV(TooltipTrigger, {
                asChild: true,
                children: button
            }, void 0, false, {
                fileName: "/app/src/components/ui/sidebar.tsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(TooltipContent, {
                side: "right",
                align: "center",
                hidden: state !== "collapsed" || isMobile,
                ...tooltip
            }, void 0, false, {
                fileName: "/app/src/components/ui/sidebar.tsx",
                lineNumber: 471,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 469,
        columnNumber: 5
    }, this);
}, "DSCdbs8JtpmKVxCYgM7sPAZNgB0=", false, function() {
    return [
        useSidebar
    ];
})), "DSCdbs8JtpmKVxCYgM7sPAZNgB0=", false, function() {
    return [
        useSidebar
    ];
});
_c33 = SidebarMenuButton;
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = /*#__PURE__*/ React.forwardRef(_c34 = ({ className, asChild = false, showOnHover = false, ...props }, ref)=>{
    const Comp = asChild ? Slot : "button";
    return /*#__PURE__*/ _jsxDEV(Comp, {
        ref: ref,
        "data-sidebar": "menu-action",
        className: cn("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 487,
        columnNumber: 5
    }, this);
});
_c35 = SidebarMenuAction;
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = /*#__PURE__*/ React.forwardRef(_c36 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        "data-sidebar": "menu-badge",
        className: cn("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 510,
        columnNumber: 5
    }, this));
_c37 = SidebarMenuBadge;
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = /*#__PURE__*/ _s6(React.forwardRef(_c38 = _s6(({ className, showIcon = false, ...props }, ref)=>{
    _s6();
    // Random width between 50 to 90%.
    const width = React.useMemo(()=>{
        return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        "data-sidebar": "menu-skeleton",
        className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
        ...props,
        children: [
            showIcon && /*#__PURE__*/ _jsxDEV(Skeleton, {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }, void 0, false, {
                fileName: "/app/src/components/ui/sidebar.tsx",
                lineNumber: 546,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ _jsxDEV(Skeleton, {
                className: "h-4 max-w-[--skeleton-width] flex-1",
                "data-sidebar": "menu-skeleton-text",
                style: {
                    "--skeleton-width": width
                }
            }, void 0, false, {
                fileName: "/app/src/components/ui/sidebar.tsx",
                lineNumber: 547,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 540,
        columnNumber: 5
    }, this);
}, "nKFjX4dxbYo91VAj5VdWQ1XUe3I=")), "nKFjX4dxbYo91VAj5VdWQ1XUe3I=");
_c39 = SidebarMenuSkeleton;
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = /*#__PURE__*/ React.forwardRef(_c40 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("ul", {
        ref: ref,
        "data-sidebar": "menu-sub",
        className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 563,
        columnNumber: 5
    }, this));
_c41 = SidebarMenuSub;
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = /*#__PURE__*/ React.forwardRef(_c42 = ({ ...props }, ref)=>/*#__PURE__*/ _jsxDEV("li", {
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 578,
        columnNumber: 3
    }, this));
_c43 = SidebarMenuSubItem;
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = /*#__PURE__*/ React.forwardRef(_c44 = ({ asChild = false, size = "md", isActive, className, ...props }, ref)=>{
    const Comp = asChild ? Slot : "a";
    return /*#__PURE__*/ _jsxDEV(Comp, {
        ref: ref,
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: cn("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/sidebar.tsx",
        lineNumber: 593,
        columnNumber: 5
    }, this);
});
_c45 = SidebarMenuSubButton;
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45;
$RefreshReg$(_c, "SidebarProvider$React.forwardRef");
$RefreshReg$(_c1, "SidebarProvider");
$RefreshReg$(_c2, "Sidebar$React.forwardRef");
$RefreshReg$(_c3, "Sidebar");
$RefreshReg$(_c4, "SidebarTrigger$React.forwardRef");
$RefreshReg$(_c5, "SidebarTrigger");
$RefreshReg$(_c6, "SidebarRail$React.forwardRef");
$RefreshReg$(_c7, "SidebarRail");
$RefreshReg$(_c8, "SidebarInset$React.forwardRef");
$RefreshReg$(_c9, "SidebarInset");
$RefreshReg$(_c10, "SidebarInput$React.forwardRef");
$RefreshReg$(_c11, "SidebarInput");
$RefreshReg$(_c12, "SidebarHeader$React.forwardRef");
$RefreshReg$(_c13, "SidebarHeader");
$RefreshReg$(_c14, "SidebarFooter$React.forwardRef");
$RefreshReg$(_c15, "SidebarFooter");
$RefreshReg$(_c16, "SidebarSeparator$React.forwardRef");
$RefreshReg$(_c17, "SidebarSeparator");
$RefreshReg$(_c18, "SidebarContent$React.forwardRef");
$RefreshReg$(_c19, "SidebarContent");
$RefreshReg$(_c20, "SidebarGroup$React.forwardRef");
$RefreshReg$(_c21, "SidebarGroup");
$RefreshReg$(_c22, "SidebarGroupLabel$React.forwardRef");
$RefreshReg$(_c23, "SidebarGroupLabel");
$RefreshReg$(_c24, "SidebarGroupAction$React.forwardRef");
$RefreshReg$(_c25, "SidebarGroupAction");
$RefreshReg$(_c26, "SidebarGroupContent$React.forwardRef");
$RefreshReg$(_c27, "SidebarGroupContent");
$RefreshReg$(_c28, "SidebarMenu$React.forwardRef");
$RefreshReg$(_c29, "SidebarMenu");
$RefreshReg$(_c30, "SidebarMenuItem$React.forwardRef");
$RefreshReg$(_c31, "SidebarMenuItem");
$RefreshReg$(_c32, "SidebarMenuButton$React.forwardRef");
$RefreshReg$(_c33, "SidebarMenuButton");
$RefreshReg$(_c34, "SidebarMenuAction$React.forwardRef");
$RefreshReg$(_c35, "SidebarMenuAction");
$RefreshReg$(_c36, "SidebarMenuBadge$React.forwardRef");
$RefreshReg$(_c37, "SidebarMenuBadge");
$RefreshReg$(_c38, "SidebarMenuSkeleton$React.forwardRef");
$RefreshReg$(_c39, "SidebarMenuSkeleton");
$RefreshReg$(_c40, "SidebarMenuSub$React.forwardRef");
$RefreshReg$(_c41, "SidebarMenuSub");
$RefreshReg$(_c42, "SidebarMenuSubItem$React.forwardRef");
$RefreshReg$(_c43, "SidebarMenuSubItem");
$RefreshReg$(_c44, "SidebarMenuSubButton$React.forwardRef");
$RefreshReg$(_c45, "SidebarMenuSubButton");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/sidebar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/sidebar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiO1xuaW1wb3J0IHsgVmFyaWFudFByb3BzLCBjdmEgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBQYW5lbExlZnQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUlzTW9iaWxlIH0gZnJvbSBcIkAvaG9va3MvdXNlLW1vYmlsZVwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2VwYXJhdG9yXCI7XG5pbXBvcnQgeyBTaGVldCwgU2hlZXRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zaGVldFwiO1xuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XG5pbXBvcnQgeyBUb29sdGlwLCBUb29sdGlwQ29udGVudCwgVG9vbHRpcFByb3ZpZGVyLCBUb29sdGlwVHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9vbHRpcFwiO1xuXG5jb25zdCBTSURFQkFSX0NPT0tJRV9OQU1FID0gXCJzaWRlYmFyOnN0YXRlXCI7XG5jb25zdCBTSURFQkFSX0NPT0tJRV9NQVhfQUdFID0gNjAgKiA2MCAqIDI0ICogNztcbmNvbnN0IFNJREVCQVJfV0lEVEggPSBcIjE2cmVtXCI7XG5jb25zdCBTSURFQkFSX1dJRFRIX01PQklMRSA9IFwiMThyZW1cIjtcbmNvbnN0IFNJREVCQVJfV0lEVEhfSUNPTiA9IFwiM3JlbVwiO1xuY29uc3QgU0lERUJBUl9LRVlCT0FSRF9TSE9SVENVVCA9IFwiYlwiO1xuXG50eXBlIFNpZGViYXJDb250ZXh0ID0ge1xuICBzdGF0ZTogXCJleHBhbmRlZFwiIHwgXCJjb2xsYXBzZWRcIjtcbiAgb3BlbjogYm9vbGVhbjtcbiAgc2V0T3BlbjogKG9wZW46IGJvb2xlYW4pID0+IHZvaWQ7XG4gIG9wZW5Nb2JpbGU6IGJvb2xlYW47XG4gIHNldE9wZW5Nb2JpbGU6IChvcGVuOiBib29sZWFuKSA9PiB2b2lkO1xuICBpc01vYmlsZTogYm9vbGVhbjtcbiAgdG9nZ2xlU2lkZWJhcjogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IFNpZGViYXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTaWRlYmFyQ29udGV4dCB8IG51bGw+KG51bGwpO1xuXG5mdW5jdGlvbiB1c2VTaWRlYmFyKCkge1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTaWRlYmFyQ29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZVNpZGViYXIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFNpZGViYXJQcm92aWRlci5cIik7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuY29uc3QgU2lkZWJhclByb3ZpZGVyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICYge1xuICAgIGRlZmF1bHRPcGVuPzogYm9vbGVhbjtcbiAgICBvcGVuPzogYm9vbGVhbjtcbiAgICBvbk9wZW5DaGFuZ2U/OiAob3BlbjogYm9vbGVhbikgPT4gdm9pZDtcbiAgfVxuPigoeyBkZWZhdWx0T3BlbiA9IHRydWUsIG9wZW46IG9wZW5Qcm9wLCBvbk9wZW5DaGFuZ2U6IHNldE9wZW5Qcm9wLCBjbGFzc05hbWUsIHN0eWxlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlSXNNb2JpbGUoKTtcbiAgY29uc3QgW29wZW5Nb2JpbGUsIHNldE9wZW5Nb2JpbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIFRoaXMgaXMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBzaWRlYmFyLlxuICAvLyBXZSB1c2Ugb3BlblByb3AgYW5kIHNldE9wZW5Qcm9wIGZvciBjb250cm9sIGZyb20gb3V0c2lkZSB0aGUgY29tcG9uZW50LlxuICBjb25zdCBbX29wZW4sIF9zZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRPcGVuKTtcbiAgY29uc3Qgb3BlbiA9IG9wZW5Qcm9wID8/IF9vcGVuO1xuICBjb25zdCBzZXRPcGVuID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlOiBib29sZWFuIHwgKCh2YWx1ZTogYm9vbGVhbikgPT4gYm9vbGVhbikpID0+IHtcbiAgICAgIGNvbnN0IG9wZW5TdGF0ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdmFsdWUob3BlbikgOiB2YWx1ZTtcbiAgICAgIGlmIChzZXRPcGVuUHJvcCkge1xuICAgICAgICBzZXRPcGVuUHJvcChvcGVuU3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3NldE9wZW4ob3BlblN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhpcyBzZXRzIHRoZSBjb29raWUgdG8ga2VlcCB0aGUgc2lkZWJhciBzdGF0ZS5cbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke1NJREVCQVJfQ09PS0lFX05BTUV9PSR7b3BlblN0YXRlfTsgcGF0aD0vOyBtYXgtYWdlPSR7U0lERUJBUl9DT09LSUVfTUFYX0FHRX1gO1xuICAgIH0sXG4gICAgW3NldE9wZW5Qcm9wLCBvcGVuXSxcbiAgKTtcblxuICAvLyBIZWxwZXIgdG8gdG9nZ2xlIHRoZSBzaWRlYmFyLlxuICBjb25zdCB0b2dnbGVTaWRlYmFyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiBpc01vYmlsZSA/IHNldE9wZW5Nb2JpbGUoKG9wZW4pID0+ICFvcGVuKSA6IHNldE9wZW4oKG9wZW4pID0+ICFvcGVuKTtcbiAgfSwgW2lzTW9iaWxlLCBzZXRPcGVuLCBzZXRPcGVuTW9iaWxlXSk7XG5cbiAgLy8gQWRkcyBhIGtleWJvYXJkIHNob3J0Y3V0IHRvIHRvZ2dsZSB0aGUgc2lkZWJhci5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBTSURFQkFSX0tFWUJPQVJEX1NIT1JUQ1VUICYmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvZ2dsZVNpZGViYXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gIH0sIFt0b2dnbGVTaWRlYmFyXSk7XG5cbiAgLy8gV2UgYWRkIGEgc3RhdGUgc28gdGhhdCB3ZSBjYW4gZG8gZGF0YS1zdGF0ZT1cImV4cGFuZGVkXCIgb3IgXCJjb2xsYXBzZWRcIi5cbiAgLy8gVGhpcyBtYWtlcyBpdCBlYXNpZXIgdG8gc3R5bGUgdGhlIHNpZGViYXIgd2l0aCBUYWlsd2luZCBjbGFzc2VzLlxuICBjb25zdCBzdGF0ZSA9IG9wZW4gPyBcImV4cGFuZGVkXCIgOiBcImNvbGxhcHNlZFwiO1xuXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW88U2lkZWJhckNvbnRleHQ+KFxuICAgICgpID0+ICh7XG4gICAgICBzdGF0ZSxcbiAgICAgIG9wZW4sXG4gICAgICBzZXRPcGVuLFxuICAgICAgaXNNb2JpbGUsXG4gICAgICBvcGVuTW9iaWxlLFxuICAgICAgc2V0T3Blbk1vYmlsZSxcbiAgICAgIHRvZ2dsZVNpZGViYXIsXG4gICAgfSksXG4gICAgW3N0YXRlLCBvcGVuLCBzZXRPcGVuLCBpc01vYmlsZSwgb3Blbk1vYmlsZSwgc2V0T3Blbk1vYmlsZSwgdG9nZ2xlU2lkZWJhcl0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZWJhckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XG4gICAgICA8VG9vbHRpcFByb3ZpZGVyIGRlbGF5RHVyYXRpb249ezB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIi0tc2lkZWJhci13aWR0aFwiOiBTSURFQkFSX1dJRFRILFxuICAgICAgICAgICAgICBcIi0tc2lkZWJhci13aWR0aC1pY29uXCI6IFNJREVCQVJfV0lEVEhfSUNPTixcbiAgICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgICAgICB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihcImdyb3VwL3NpZGViYXItd3JhcHBlciBmbGV4IG1pbi1oLXN2aCB3LWZ1bGwgaGFzLVtbZGF0YS12YXJpYW50PWluc2V0XV06Ymctc2lkZWJhclwiLCBjbGFzc05hbWUpfVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Rvb2x0aXBQcm92aWRlcj5cbiAgICA8L1NpZGViYXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufSk7XG5TaWRlYmFyUHJvdmlkZXIuZGlzcGxheU5hbWUgPSBcIlNpZGViYXJQcm92aWRlclwiO1xuXG5jb25zdCBTaWRlYmFyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICYge1xuICAgIHNpZGU/OiBcImxlZnRcIiB8IFwicmlnaHRcIjtcbiAgICB2YXJpYW50PzogXCJzaWRlYmFyXCIgfCBcImZsb2F0aW5nXCIgfCBcImluc2V0XCI7XG4gICAgY29sbGFwc2libGU/OiBcIm9mZmNhbnZhc1wiIHwgXCJpY29uXCIgfCBcIm5vbmVcIjtcbiAgfVxuPigoeyBzaWRlID0gXCJsZWZ0XCIsIHZhcmlhbnQgPSBcInNpZGViYXJcIiwgY29sbGFwc2libGUgPSBcIm9mZmNhbnZhc1wiLCBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSwgc3RhdGUsIG9wZW5Nb2JpbGUsIHNldE9wZW5Nb2JpbGUgfSA9IHVzZVNpZGViYXIoKTtcblxuICBpZiAoY29sbGFwc2libGUgPT09IFwibm9uZVwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcImZsZXggaC1mdWxsIHctWy0tc2lkZWJhci13aWR0aF0gZmxleC1jb2wgYmctc2lkZWJhciB0ZXh0LXNpZGViYXItZm9yZWdyb3VuZFwiLCBjbGFzc05hbWUpfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaGVldCBvcGVuPXtvcGVuTW9iaWxlfSBvbk9wZW5DaGFuZ2U9e3NldE9wZW5Nb2JpbGV9IHsuLi5wcm9wc30+XG4gICAgICAgIDxTaGVldENvbnRlbnRcbiAgICAgICAgICBkYXRhLXNpZGViYXI9XCJzaWRlYmFyXCJcbiAgICAgICAgICBkYXRhLW1vYmlsZT1cInRydWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWy0tc2lkZWJhci13aWR0aF0gYmctc2lkZWJhciBwLTAgdGV4dC1zaWRlYmFyLWZvcmVncm91bmQgWyY+YnV0dG9uXTpoaWRkZW5cIlxuICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCItLXNpZGViYXItd2lkdGhcIjogU0lERUJBUl9XSURUSF9NT0JJTEUsXG4gICAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgICAgICB9XG4gICAgICAgICAgc2lkZT17c2lkZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgdy1mdWxsIGZsZXgtY29sXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICA8L1NoZWV0Q29udGVudD5cbiAgICAgIDwvU2hlZXQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9XCJncm91cCBwZWVyIGhpZGRlbiB0ZXh0LXNpZGViYXItZm9yZWdyb3VuZCBtZDpibG9ja1wiXG4gICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgIGRhdGEtY29sbGFwc2libGU9e3N0YXRlID09PSBcImNvbGxhcHNlZFwiID8gY29sbGFwc2libGUgOiBcIlwifVxuICAgICAgZGF0YS12YXJpYW50PXt2YXJpYW50fVxuICAgICAgZGF0YS1zaWRlPXtzaWRlfVxuICAgID5cbiAgICAgIHsvKiBUaGlzIGlzIHdoYXQgaGFuZGxlcyB0aGUgc2lkZWJhciBnYXAgb24gZGVza3RvcCAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICBcInJlbGF0aXZlIGgtc3ZoIHctWy0tc2lkZWJhci13aWR0aF0gYmctdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1bd2lkdGhdIGR1cmF0aW9uLTIwMCBlYXNlLWxpbmVhclwiLFxuICAgICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9b2ZmY2FudmFzXTp3LTBcIixcbiAgICAgICAgICBcImdyb3VwLWRhdGEtW3NpZGU9cmlnaHRdOnJvdGF0ZS0xODBcIixcbiAgICAgICAgICB2YXJpYW50ID09PSBcImZsb2F0aW5nXCIgfHwgdmFyaWFudCA9PT0gXCJpbnNldFwiXG4gICAgICAgICAgICA/IFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06dy1bY2FsYyh2YXIoLS1zaWRlYmFyLXdpZHRoLWljb24pXytfdGhlbWUoc3BhY2luZy40KSldXCJcbiAgICAgICAgICAgIDogXCJncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1pY29uXTp3LVstLXNpZGViYXItd2lkdGgtaWNvbl1cIixcbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJmaXhlZCBpbnNldC15LTAgei0xMCBoaWRkZW4gaC1zdmggdy1bLS1zaWRlYmFyLXdpZHRoXSB0cmFuc2l0aW9uLVtsZWZ0LHJpZ2h0LHdpZHRoXSBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXIgbWQ6ZmxleFwiLFxuICAgICAgICAgIHNpZGUgPT09IFwibGVmdFwiXG4gICAgICAgICAgICA/IFwibGVmdC0wIGdyb3VwLWRhdGEtW2NvbGxhcHNpYmxlPW9mZmNhbnZhc106bGVmdC1bY2FsYyh2YXIoLS1zaWRlYmFyLXdpZHRoKSotMSldXCJcbiAgICAgICAgICAgIDogXCJyaWdodC0wIGdyb3VwLWRhdGEtW2NvbGxhcHNpYmxlPW9mZmNhbnZhc106cmlnaHQtW2NhbGModmFyKC0tc2lkZWJhci13aWR0aCkqLTEpXVwiLFxuICAgICAgICAgIC8vIEFkanVzdCB0aGUgcGFkZGluZyBmb3IgZmxvYXRpbmcgYW5kIGluc2V0IHZhcmlhbnRzLlxuICAgICAgICAgIHZhcmlhbnQgPT09IFwiZmxvYXRpbmdcIiB8fCB2YXJpYW50ID09PSBcImluc2V0XCJcbiAgICAgICAgICAgID8gXCJwLTIgZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06dy1bY2FsYyh2YXIoLS1zaWRlYmFyLXdpZHRoLWljb24pXytfdGhlbWUoc3BhY2luZy40KV8rMnB4KV1cIlxuICAgICAgICAgICAgOiBcImdyb3VwLWRhdGEtW2NvbGxhcHNpYmxlPWljb25dOnctWy0tc2lkZWJhci13aWR0aC1pY29uXSBncm91cC1kYXRhLVtzaWRlPWxlZnRdOmJvcmRlci1yIGdyb3VwLWRhdGEtW3NpZGU9cmlnaHRdOmJvcmRlci1sXCIsXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICApfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBkYXRhLXNpZGViYXI9XCJzaWRlYmFyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCB3LWZ1bGwgZmxleC1jb2wgYmctc2lkZWJhciBncm91cC1kYXRhLVt2YXJpYW50PWZsb2F0aW5nXTpyb3VuZGVkLWxnIGdyb3VwLWRhdGEtW3ZhcmlhbnQ9ZmxvYXRpbmddOmJvcmRlciBncm91cC1kYXRhLVt2YXJpYW50PWZsb2F0aW5nXTpib3JkZXItc2lkZWJhci1ib3JkZXIgZ3JvdXAtZGF0YS1bdmFyaWFudD1mbG9hdGluZ106c2hhZG93XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuU2lkZWJhci5kaXNwbGF5TmFtZSA9IFwiU2lkZWJhclwiO1xuXG5jb25zdCBTaWRlYmFyVHJpZ2dlciA9IFJlYWN0LmZvcndhcmRSZWY8UmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQnV0dG9uPiwgUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIEJ1dHRvbj4+KFxuICAoeyBjbGFzc05hbWUsIG9uQ2xpY2ssIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgdG9nZ2xlU2lkZWJhciB9ID0gdXNlU2lkZWJhcigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGRhdGEtc2lkZWJhcj1cInRyaWdnZXJcIlxuICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXCJoLTcgdy03XCIsIGNsYXNzTmFtZSl9XG4gICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgIG9uQ2xpY2s/LihldmVudCk7XG4gICAgICAgICAgdG9nZ2xlU2lkZWJhcigpO1xuICAgICAgICB9fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxQYW5lbExlZnQgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBTaWRlYmFyPC9zcGFuPlxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfSxcbik7XG5TaWRlYmFyVHJpZ2dlci5kaXNwbGF5TmFtZSA9IFwiU2lkZWJhclRyaWdnZXJcIjtcblxuY29uc3QgU2lkZWJhclJhaWwgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcImJ1dHRvblwiPj4oXG4gICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgeyB0b2dnbGVTaWRlYmFyIH0gPSB1c2VTaWRlYmFyKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgZGF0YS1zaWRlYmFyPVwicmFpbFwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgU2lkZWJhclwiXG4gICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgb25DbGljaz17dG9nZ2xlU2lkZWJhcn1cbiAgICAgICAgdGl0bGU9XCJUb2dnbGUgU2lkZWJhclwiXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJhYnNvbHV0ZSBpbnNldC15LTAgei0yMCBoaWRkZW4gdy00IC10cmFuc2xhdGUteC0xLzIgdHJhbnNpdGlvbi1hbGwgZWFzZS1saW5lYXIgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6aW5zZXQteS0wIGFmdGVyOmxlZnQtMS8yIGFmdGVyOnctWzJweF0gZ3JvdXAtZGF0YS1bc2lkZT1sZWZ0XTotcmlnaHQtNCBncm91cC1kYXRhLVtzaWRlPXJpZ2h0XTpsZWZ0LTAgaG92ZXI6YWZ0ZXI6Ymctc2lkZWJhci1ib3JkZXIgc206ZmxleFwiLFxuICAgICAgICAgIFwiW1tkYXRhLXNpZGU9bGVmdF1fJl06Y3Vyc29yLXctcmVzaXplIFtbZGF0YS1zaWRlPXJpZ2h0XV8mXTpjdXJzb3ItZS1yZXNpemVcIixcbiAgICAgICAgICBcIltbZGF0YS1zaWRlPWxlZnRdW2RhdGEtc3RhdGU9Y29sbGFwc2VkXV8mXTpjdXJzb3ItZS1yZXNpemUgW1tkYXRhLXNpZGU9cmlnaHRdW2RhdGEtc3RhdGU9Y29sbGFwc2VkXV8mXTpjdXJzb3Itdy1yZXNpemVcIixcbiAgICAgICAgICBcImdyb3VwLWRhdGEtW2NvbGxhcHNpYmxlPW9mZmNhbnZhc106dHJhbnNsYXRlLXgtMCBncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1vZmZjYW52YXNdOmFmdGVyOmxlZnQtZnVsbCBncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1vZmZjYW52YXNdOmhvdmVyOmJnLXNpZGViYXJcIixcbiAgICAgICAgICBcIltbZGF0YS1zaWRlPWxlZnRdW2RhdGEtY29sbGFwc2libGU9b2ZmY2FudmFzXV8mXTotcmlnaHQtMlwiLFxuICAgICAgICAgIFwiW1tkYXRhLXNpZGU9cmlnaHRdW2RhdGEtY29sbGFwc2libGU9b2ZmY2FudmFzXV8mXTotbGVmdC0yXCIsXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICApfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH0sXG4pO1xuU2lkZWJhclJhaWwuZGlzcGxheU5hbWUgPSBcIlNpZGViYXJSYWlsXCI7XG5cbmNvbnN0IFNpZGViYXJJbnNldCA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTERpdkVsZW1lbnQsIFJlYWN0LkNvbXBvbmVudFByb3BzPFwibWFpblwiPj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpblxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInJlbGF0aXZlIGZsZXggbWluLWgtc3ZoIGZsZXgtMSBmbGV4LWNvbCBiZy1iYWNrZ3JvdW5kXCIsXG4gICAgICAgIFwicGVlci1kYXRhLVt2YXJpYW50PWluc2V0XTptaW4taC1bY2FsYygxMDBzdmgtdGhlbWUoc3BhY2luZy40KSldIG1kOnBlZXItZGF0YS1bdmFyaWFudD1pbnNldF06bS0yIG1kOnBlZXItZGF0YS1bc3RhdGU9Y29sbGFwc2VkXTpwZWVyLWRhdGEtW3ZhcmlhbnQ9aW5zZXRdOm1sLTIgbWQ6cGVlci1kYXRhLVt2YXJpYW50PWluc2V0XTptbC0wIG1kOnBlZXItZGF0YS1bdmFyaWFudD1pbnNldF06cm91bmRlZC14bCBtZDpwZWVyLWRhdGEtW3ZhcmlhbnQ9aW5zZXRdOnNoYWRvd1wiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59KTtcblNpZGViYXJJbnNldC5kaXNwbGF5TmFtZSA9IFwiU2lkZWJhckluc2V0XCI7XG5cbmNvbnN0IFNpZGViYXJJbnB1dCA9IFJlYWN0LmZvcndhcmRSZWY8UmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgSW5wdXQ+LCBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgSW5wdXQ+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBkYXRhLXNpZGViYXI9XCJpbnB1dFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJoLTggdy1mdWxsIGJnLWJhY2tncm91bmQgc2hhZG93LW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXNpZGViYXItcmluZ1wiLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuKTtcblNpZGViYXJJbnB1dC5kaXNwbGF5TmFtZSA9IFwiU2lkZWJhcklucHV0XCI7XG5cbmNvbnN0IFNpZGViYXJIZWFkZXIgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IGRhdGEtc2lkZWJhcj1cImhlYWRlclwiIGNsYXNzTmFtZT17Y24oXCJmbGV4IGZsZXgtY29sIGdhcC0yIHAtMlwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+O1xufSk7XG5TaWRlYmFySGVhZGVyLmRpc3BsYXlOYW1lID0gXCJTaWRlYmFySGVhZGVyXCI7XG5cbmNvbnN0IFNpZGViYXJGb290ZXIgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IGRhdGEtc2lkZWJhcj1cImZvb3RlclwiIGNsYXNzTmFtZT17Y24oXCJmbGV4IGZsZXgtY29sIGdhcC0yIHAtMlwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+O1xufSk7XG5TaWRlYmFyRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJTaWRlYmFyRm9vdGVyXCI7XG5cbmNvbnN0IFNpZGViYXJTZXBhcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNlcGFyYXRvcj4sIFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTZXBhcmF0b3I+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlcGFyYXRvclxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgZGF0YS1zaWRlYmFyPVwic2VwYXJhdG9yXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcIm14LTIgdy1hdXRvIGJnLXNpZGViYXItYm9yZGVyXCIsIGNsYXNzTmFtZSl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcbik7XG5TaWRlYmFyU2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gXCJTaWRlYmFyU2VwYXJhdG9yXCI7XG5cbmNvbnN0IFNpZGViYXJDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRGl2RWxlbWVudCwgUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBkYXRhLXNpZGViYXI9XCJjb250ZW50XCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiZmxleCBtaW4taC0wIGZsZXgtMSBmbGV4LWNvbCBnYXAtMiBvdmVyZmxvdy1hdXRvIGdyb3VwLWRhdGEtW2NvbGxhcHNpYmxlPWljb25dOm92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59KTtcblNpZGViYXJDb250ZW50LmRpc3BsYXlOYW1lID0gXCJTaWRlYmFyQ29udGVudFwiO1xuXG5jb25zdCBTaWRlYmFyR3JvdXAgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGRhdGEtc2lkZWJhcj1cImdyb3VwXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJyZWxhdGl2ZSBmbGV4IHctZnVsbCBtaW4tdy0wIGZsZXgtY29sIHAtMlwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59KTtcblNpZGViYXJHcm91cC5kaXNwbGF5TmFtZSA9IFwiU2lkZWJhckdyb3VwXCI7XG5cbmNvbnN0IFNpZGViYXJHcm91cExhYmVsID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRGl2RWxlbWVudCwgUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4gJiB7IGFzQ2hpbGQ/OiBib29sZWFuIH0+KFxuICAoeyBjbGFzc05hbWUsIGFzQ2hpbGQgPSBmYWxzZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogXCJkaXZcIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgZGF0YS1zaWRlYmFyPVwiZ3JvdXAtbGFiZWxcIlxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiZmxleCBoLTggc2hyaW5rLTAgaXRlbXMtY2VudGVyIHJvdW5kZWQtbWQgcHgtMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtc2lkZWJhci1mb3JlZ3JvdW5kLzcwIG91dGxpbmUtbm9uZSByaW5nLXNpZGViYXItcmluZyB0cmFuc2l0aW9uLVttYXJnaW4sb3BhXSBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXIgZm9jdXMtdmlzaWJsZTpyaW5nLTIgWyY+c3ZnXTpzaXplLTQgWyY+c3ZnXTpzaHJpbmstMFwiLFxuICAgICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06LW10LTggZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06b3BhY2l0eS0wXCIsXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICApfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH0sXG4pO1xuU2lkZWJhckdyb3VwTGFiZWwuZGlzcGxheU5hbWUgPSBcIlNpZGViYXJHcm91cExhYmVsXCI7XG5cbmNvbnN0IFNpZGViYXJHcm91cEFjdGlvbiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIFJlYWN0LkNvbXBvbmVudFByb3BzPFwiYnV0dG9uXCI+ICYgeyBhc0NoaWxkPzogYm9vbGVhbiB9PihcbiAgKHsgY2xhc3NOYW1lLCBhc0NoaWxkID0gZmFsc2UsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwiYnV0dG9uXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGRhdGEtc2lkZWJhcj1cImdyb3VwLWFjdGlvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJhYnNvbHV0ZSByaWdodC0zIHRvcC0zLjUgZmxleCBhc3BlY3Qtc3F1YXJlIHctNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBwLTAgdGV4dC1zaWRlYmFyLWZvcmVncm91bmQgb3V0bGluZS1ub25lIHJpbmctc2lkZWJhci1yaW5nIHRyYW5zaXRpb24tdHJhbnNmb3JtIGhvdmVyOmJnLXNpZGViYXItYWNjZW50IGhvdmVyOnRleHQtc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOnJpbmctMiBbJj5zdmddOnNpemUtNCBbJj5zdmddOnNocmluay0wXCIsXG4gICAgICAgICAgLy8gSW5jcmVhc2VzIHRoZSBoaXQgYXJlYSBvZiB0aGUgYnV0dG9uIG9uIG1vYmlsZS5cbiAgICAgICAgICBcImFmdGVyOmFic29sdXRlIGFmdGVyOi1pbnNldC0yIGFmdGVyOm1kOmhpZGRlblwiLFxuICAgICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06aGlkZGVuXCIsXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICApfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH0sXG4pO1xuU2lkZWJhckdyb3VwQWN0aW9uLmRpc3BsYXlOYW1lID0gXCJTaWRlYmFyR3JvdXBBY3Rpb25cIjtcblxuY29uc3QgU2lkZWJhckdyb3VwQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTERpdkVsZW1lbnQsIFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8ZGl2IHJlZj17cmVmfSBkYXRhLXNpZGViYXI9XCJncm91cC1jb250ZW50XCIgY2xhc3NOYW1lPXtjbihcInctZnVsbCB0ZXh0LXNtXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbiAgKSxcbik7XG5TaWRlYmFyR3JvdXBDb250ZW50LmRpc3BsYXlOYW1lID0gXCJTaWRlYmFyR3JvdXBDb250ZW50XCI7XG5cbmNvbnN0IFNpZGViYXJNZW51ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MVUxpc3RFbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcInVsXCI+PigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dWwgcmVmPXtyZWZ9IGRhdGEtc2lkZWJhcj1cIm1lbnVcIiBjbGFzc05hbWU9e2NuKFwiZmxleCB3LWZ1bGwgbWluLXctMCBmbGV4LWNvbCBnYXAtMVwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4pKTtcblNpZGViYXJNZW51LmRpc3BsYXlOYW1lID0gXCJTaWRlYmFyTWVudVwiO1xuXG5jb25zdCBTaWRlYmFyTWVudUl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxMSUVsZW1lbnQsIFJlYWN0LkNvbXBvbmVudFByb3BzPFwibGlcIj4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxsaSByZWY9e3JlZn0gZGF0YS1zaWRlYmFyPVwibWVudS1pdGVtXCIgY2xhc3NOYW1lPXtjbihcImdyb3VwL21lbnUtaXRlbSByZWxhdGl2ZVwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4pKTtcblNpZGViYXJNZW51SXRlbS5kaXNwbGF5TmFtZSA9IFwiU2lkZWJhck1lbnVJdGVtXCI7XG5cbmNvbnN0IHNpZGViYXJNZW51QnV0dG9uVmFyaWFudHMgPSBjdmEoXG4gIFwicGVlci9tZW51LWJ1dHRvbiBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgZ2FwLTIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgcC0yIHRleHQtbGVmdCB0ZXh0LXNtIG91dGxpbmUtbm9uZSByaW5nLXNpZGViYXItcmluZyB0cmFuc2l0aW9uLVt3aWR0aCxoZWlnaHQscGFkZGluZ10gaG92ZXI6Ymctc2lkZWJhci1hY2NlbnQgaG92ZXI6dGV4dC1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kIGZvY3VzLXZpc2libGU6cmluZy0yIGFjdGl2ZTpiZy1zaWRlYmFyLWFjY2VudCBhY3RpdmU6dGV4dC1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBncm91cC1oYXMtW1tkYXRhLXNpZGViYXI9bWVudS1hY3Rpb25dXS9tZW51LWl0ZW06cHItOCBhcmlhLWRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgYXJpYS1kaXNhYmxlZDpvcGFjaXR5LTUwIGRhdGEtW2FjdGl2ZT10cnVlXTpiZy1zaWRlYmFyLWFjY2VudCBkYXRhLVthY3RpdmU9dHJ1ZV06Zm9udC1tZWRpdW0gZGF0YS1bYWN0aXZlPXRydWVdOnRleHQtc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1vcGVuXTpob3ZlcjpiZy1zaWRlYmFyLWFjY2VudCBkYXRhLVtzdGF0ZT1vcGVuXTpob3Zlcjp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmQgZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06IXNpemUtOCBncm91cC1kYXRhLVtjb2xsYXBzaWJsZT1pY29uXTohcC0yIFsmPnNwYW46bGFzdC1jaGlsZF06dHJ1bmNhdGUgWyY+c3ZnXTpzaXplLTQgWyY+c3ZnXTpzaHJpbmstMFwiLFxuICB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgZGVmYXVsdDogXCJob3ZlcjpiZy1zaWRlYmFyLWFjY2VudCBob3Zlcjp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgICAgb3V0bGluZTpcbiAgICAgICAgICBcImJnLWJhY2tncm91bmQgc2hhZG93LVswXzBfMF8xcHhfaHNsKHZhcigtLXNpZGViYXItYm9yZGVyKSldIGhvdmVyOmJnLXNpZGViYXItYWNjZW50IGhvdmVyOnRleHQtc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCBob3ZlcjpzaGFkb3ctWzBfMF8wXzFweF9oc2wodmFyKC0tc2lkZWJhci1hY2NlbnQpKV1cIixcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiaC04IHRleHQtc21cIixcbiAgICAgICAgc206IFwiaC03IHRleHQteHNcIixcbiAgICAgICAgbGc6IFwiaC0xMiB0ZXh0LXNtIGdyb3VwLWRhdGEtW2NvbGxhcHNpYmxlPWljb25dOiFwLTBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmNvbnN0IFNpZGViYXJNZW51QnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTEJ1dHRvbkVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzPFwiYnV0dG9uXCI+ICYge1xuICAgIGFzQ2hpbGQ/OiBib29sZWFuO1xuICAgIGlzQWN0aXZlPzogYm9vbGVhbjtcbiAgICB0b29sdGlwPzogc3RyaW5nIHwgUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFRvb2x0aXBDb250ZW50PjtcbiAgfSAmIFZhcmlhbnRQcm9wczx0eXBlb2Ygc2lkZWJhck1lbnVCdXR0b25WYXJpYW50cz5cbj4oKHsgYXNDaGlsZCA9IGZhbHNlLCBpc0FjdGl2ZSA9IGZhbHNlLCB2YXJpYW50ID0gXCJkZWZhdWx0XCIsIHNpemUgPSBcImRlZmF1bHRcIiwgdG9vbHRpcCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogXCJidXR0b25cIjtcbiAgY29uc3QgeyBpc01vYmlsZSwgc3RhdGUgfSA9IHVzZVNpZGViYXIoKTtcblxuICBjb25zdCBidXR0b24gPSAoXG4gICAgPENvbXBcbiAgICAgIHJlZj17cmVmfVxuICAgICAgZGF0YS1zaWRlYmFyPVwibWVudS1idXR0b25cIlxuICAgICAgZGF0YS1zaXplPXtzaXplfVxuICAgICAgZGF0YS1hY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgY2xhc3NOYW1lPXtjbihzaWRlYmFyTWVudUJ1dHRvblZhcmlhbnRzKHsgdmFyaWFudCwgc2l6ZSB9KSwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xuXG4gIGlmICghdG9vbHRpcCkge1xuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICBpZiAodHlwZW9mIHRvb2x0aXAgPT09IFwic3RyaW5nXCIpIHtcbiAgICB0b29sdGlwID0ge1xuICAgICAgY2hpbGRyZW46IHRvb2x0aXAsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXA+XG4gICAgICA8VG9vbHRpcFRyaWdnZXIgYXNDaGlsZD57YnV0dG9ufTwvVG9vbHRpcFRyaWdnZXI+XG4gICAgICA8VG9vbHRpcENvbnRlbnQgc2lkZT1cInJpZ2h0XCIgYWxpZ249XCJjZW50ZXJcIiBoaWRkZW49e3N0YXRlICE9PSBcImNvbGxhcHNlZFwiIHx8IGlzTW9iaWxlfSB7Li4udG9vbHRpcH0gLz5cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG59KTtcblNpZGViYXJNZW51QnV0dG9uLmRpc3BsYXlOYW1lID0gXCJTaWRlYmFyTWVudUJ1dHRvblwiO1xuXG5jb25zdCBTaWRlYmFyTWVudUFjdGlvbiA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxCdXR0b25FbGVtZW50LFxuICBSZWFjdC5Db21wb25lbnRQcm9wczxcImJ1dHRvblwiPiAmIHtcbiAgICBhc0NoaWxkPzogYm9vbGVhbjtcbiAgICBzaG93T25Ib3Zlcj86IGJvb2xlYW47XG4gIH1cbj4oKHsgY2xhc3NOYW1lLCBhc0NoaWxkID0gZmFsc2UsIHNob3dPbkhvdmVyID0gZmFsc2UsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiBcImJ1dHRvblwiO1xuXG4gIHJldHVybiAoXG4gICAgPENvbXBcbiAgICAgIHJlZj17cmVmfVxuICAgICAgZGF0YS1zaWRlYmFyPVwibWVudS1hY3Rpb25cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJhYnNvbHV0ZSByaWdodC0xIHRvcC0xLjUgZmxleCBhc3BlY3Qtc3F1YXJlIHctNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBwLTAgdGV4dC1zaWRlYmFyLWZvcmVncm91bmQgb3V0bGluZS1ub25lIHJpbmctc2lkZWJhci1yaW5nIHRyYW5zaXRpb24tdHJhbnNmb3JtIHBlZXItaG92ZXIvbWVudS1idXR0b246dGV4dC1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kIGhvdmVyOmJnLXNpZGViYXItYWNjZW50IGhvdmVyOnRleHQtc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOnJpbmctMiBbJj5zdmddOnNpemUtNCBbJj5zdmddOnNocmluay0wXCIsXG4gICAgICAgIC8vIEluY3JlYXNlcyB0aGUgaGl0IGFyZWEgb2YgdGhlIGJ1dHRvbiBvbiBtb2JpbGUuXG4gICAgICAgIFwiYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6LWluc2V0LTIgYWZ0ZXI6bWQ6aGlkZGVuXCIsXG4gICAgICAgIFwicGVlci1kYXRhLVtzaXplPXNtXS9tZW51LWJ1dHRvbjp0b3AtMVwiLFxuICAgICAgICBcInBlZXItZGF0YS1bc2l6ZT1kZWZhdWx0XS9tZW51LWJ1dHRvbjp0b3AtMS41XCIsXG4gICAgICAgIFwicGVlci1kYXRhLVtzaXplPWxnXS9tZW51LWJ1dHRvbjp0b3AtMi41XCIsXG4gICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06aGlkZGVuXCIsXG4gICAgICAgIHNob3dPbkhvdmVyICYmXG4gICAgICAgICAgXCJncm91cC1mb2N1cy13aXRoaW4vbWVudS1pdGVtOm9wYWNpdHktMTAwIGdyb3VwLWhvdmVyL21lbnUtaXRlbTpvcGFjaXR5LTEwMCBkYXRhLVtzdGF0ZT1vcGVuXTpvcGFjaXR5LTEwMCBwZWVyLWRhdGEtW2FjdGl2ZT10cnVlXS9tZW51LWJ1dHRvbjp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmQgbWQ6b3BhY2l0eS0wXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn0pO1xuU2lkZWJhck1lbnVBY3Rpb24uZGlzcGxheU5hbWUgPSBcIlNpZGViYXJNZW51QWN0aW9uXCI7XG5cbmNvbnN0IFNpZGViYXJNZW51QmFkZ2UgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPj4oXG4gICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBkYXRhLXNpZGViYXI9XCJtZW51LWJhZGdlXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSByaWdodC0xIGZsZXggaC01IG1pbi13LTUgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgcHgtMSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRhYnVsYXItbnVtcyB0ZXh0LXNpZGViYXItZm9yZWdyb3VuZFwiLFxuICAgICAgICBcInBlZXItaG92ZXIvbWVudS1idXR0b246dGV4dC1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kIHBlZXItZGF0YS1bYWN0aXZlPXRydWVdL21lbnUtYnV0dG9uOnRleHQtc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgICBcInBlZXItZGF0YS1bc2l6ZT1zbV0vbWVudS1idXR0b246dG9wLTFcIixcbiAgICAgICAgXCJwZWVyLWRhdGEtW3NpemU9ZGVmYXVsdF0vbWVudS1idXR0b246dG9wLTEuNVwiLFxuICAgICAgICBcInBlZXItZGF0YS1bc2l6ZT1sZ10vbWVudS1idXR0b246dG9wLTIuNVwiLFxuICAgICAgICBcImdyb3VwLWRhdGEtW2NvbGxhcHNpYmxlPWljb25dOmhpZGRlblwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICksXG4pO1xuU2lkZWJhck1lbnVCYWRnZS5kaXNwbGF5TmFtZSA9IFwiU2lkZWJhck1lbnVCYWRnZVwiO1xuXG5jb25zdCBTaWRlYmFyTWVudVNrZWxldG9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICYge1xuICAgIHNob3dJY29uPzogYm9vbGVhbjtcbiAgfVxuPigoeyBjbGFzc05hbWUsIHNob3dJY29uID0gZmFsc2UsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAvLyBSYW5kb20gd2lkdGggYmV0d2VlbiA1MCB0byA5MCUuXG4gIGNvbnN0IHdpZHRoID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwKSArIDUwfSVgO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGRhdGEtc2lkZWJhcj1cIm1lbnUtc2tlbGV0b25cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcImZsZXggaC04IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLW1kIHB4LTJcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7c2hvd0ljb24gJiYgPFNrZWxldG9uIGNsYXNzTmFtZT1cInNpemUtNCByb3VuZGVkLW1kXCIgZGF0YS1zaWRlYmFyPVwibWVudS1za2VsZXRvbi1pY29uXCIgLz59XG4gICAgICA8U2tlbGV0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiaC00IG1heC13LVstLXNrZWxldG9uLXdpZHRoXSBmbGV4LTFcIlxuICAgICAgICBkYXRhLXNpZGViYXI9XCJtZW51LXNrZWxldG9uLXRleHRcIlxuICAgICAgICBzdHlsZT17XG4gICAgICAgICAge1xuICAgICAgICAgICAgXCItLXNrZWxldG9uLXdpZHRoXCI6IHdpZHRoLFxuICAgICAgICAgIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc1xuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5TaWRlYmFyTWVudVNrZWxldG9uLmRpc3BsYXlOYW1lID0gXCJTaWRlYmFyTWVudVNrZWxldG9uXCI7XG5cbmNvbnN0IFNpZGViYXJNZW51U3ViID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MVUxpc3RFbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcInVsXCI+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8dWxcbiAgICAgIHJlZj17cmVmfVxuICAgICAgZGF0YS1zaWRlYmFyPVwibWVudS1zdWJcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJteC0zLjUgZmxleCBtaW4tdy0wIHRyYW5zbGF0ZS14LXB4IGZsZXgtY29sIGdhcC0xIGJvcmRlci1sIGJvcmRlci1zaWRlYmFyLWJvcmRlciBweC0yLjUgcHktMC41XCIsXG4gICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06aGlkZGVuXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbik7XG5TaWRlYmFyTWVudVN1Yi5kaXNwbGF5TmFtZSA9IFwiU2lkZWJhck1lbnVTdWJcIjtcblxuY29uc3QgU2lkZWJhck1lbnVTdWJJdGVtID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MTElFbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcImxpXCI+PigoeyAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPGxpIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+XG4pKTtcblNpZGViYXJNZW51U3ViSXRlbS5kaXNwbGF5TmFtZSA9IFwiU2lkZWJhck1lbnVTdWJJdGVtXCI7XG5cbmNvbnN0IFNpZGViYXJNZW51U3ViQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTEFuY2hvckVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzPFwiYVwiPiAmIHtcbiAgICBhc0NoaWxkPzogYm9vbGVhbjtcbiAgICBzaXplPzogXCJzbVwiIHwgXCJtZFwiO1xuICAgIGlzQWN0aXZlPzogYm9vbGVhbjtcbiAgfVxuPigoeyBhc0NoaWxkID0gZmFsc2UsIHNpemUgPSBcIm1kXCIsIGlzQWN0aXZlLCBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiBcImFcIjtcblxuICByZXR1cm4gKFxuICAgIDxDb21wXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGRhdGEtc2lkZWJhcj1cIm1lbnUtc3ViLWJ1dHRvblwiXG4gICAgICBkYXRhLXNpemU9e3NpemV9XG4gICAgICBkYXRhLWFjdGl2ZT17aXNBY3RpdmV9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZsZXggaC03IG1pbi13LTAgLXRyYW5zbGF0ZS14LXB4IGl0ZW1zLWNlbnRlciBnYXAtMiBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBweC0yIHRleHQtc2lkZWJhci1mb3JlZ3JvdW5kIG91dGxpbmUtbm9uZSByaW5nLXNpZGViYXItcmluZyBhcmlhLWRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgYXJpYS1kaXNhYmxlZDpvcGFjaXR5LTUwIGhvdmVyOmJnLXNpZGViYXItYWNjZW50IGhvdmVyOnRleHQtc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOnJpbmctMiBhY3RpdmU6Ymctc2lkZWJhci1hY2NlbnQgYWN0aXZlOnRleHQtc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgWyY+c3BhbjpsYXN0LWNoaWxkXTp0cnVuY2F0ZSBbJj5zdmddOnNpemUtNCBbJj5zdmddOnNocmluay0wIFsmPnN2Z106dGV4dC1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIFwiZGF0YS1bYWN0aXZlPXRydWVdOmJnLXNpZGViYXItYWNjZW50IGRhdGEtW2FjdGl2ZT10cnVlXTp0ZXh0LXNpZGViYXItYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgICAgc2l6ZSA9PT0gXCJzbVwiICYmIFwidGV4dC14c1wiLFxuICAgICAgICBzaXplID09PSBcIm1kXCIgJiYgXCJ0ZXh0LXNtXCIsXG4gICAgICAgIFwiZ3JvdXAtZGF0YS1bY29sbGFwc2libGU9aWNvbl06aGlkZGVuXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn0pO1xuU2lkZWJhck1lbnVTdWJCdXR0b24uZGlzcGxheU5hbWUgPSBcIlNpZGViYXJNZW51U3ViQnV0dG9uXCI7XG5cbmV4cG9ydCB7XG4gIFNpZGViYXIsXG4gIFNpZGViYXJDb250ZW50LFxuICBTaWRlYmFyRm9vdGVyLFxuICBTaWRlYmFyR3JvdXAsXG4gIFNpZGViYXJHcm91cEFjdGlvbixcbiAgU2lkZWJhckdyb3VwQ29udGVudCxcbiAgU2lkZWJhckdyb3VwTGFiZWwsXG4gIFNpZGViYXJIZWFkZXIsXG4gIFNpZGViYXJJbnB1dCxcbiAgU2lkZWJhckluc2V0LFxuICBTaWRlYmFyTWVudSxcbiAgU2lkZWJhck1lbnVBY3Rpb24sXG4gIFNpZGViYXJNZW51QmFkZ2UsXG4gIFNpZGViYXJNZW51QnV0dG9uLFxuICBTaWRlYmFyTWVudUl0ZW0sXG4gIFNpZGViYXJNZW51U2tlbGV0b24sXG4gIFNpZGViYXJNZW51U3ViLFxuICBTaWRlYmFyTWVudVN1YkJ1dHRvbixcbiAgU2lkZWJhck1lbnVTdWJJdGVtLFxuICBTaWRlYmFyUHJvdmlkZXIsXG4gIFNpZGViYXJSYWlsLFxuICBTaWRlYmFyU2VwYXJhdG9yLFxuICBTaWRlYmFyVHJpZ2dlcixcbiAgdXNlU2lkZWJhcixcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiU2xvdCIsImN2YSIsIlBhbmVsTGVmdCIsInVzZUlzTW9iaWxlIiwiY24iLCJCdXR0b24iLCJJbnB1dCIsIlNlcGFyYXRvciIsIlNoZWV0IiwiU2hlZXRDb250ZW50IiwiU2tlbGV0b24iLCJUb29sdGlwIiwiVG9vbHRpcENvbnRlbnQiLCJUb29sdGlwUHJvdmlkZXIiLCJUb29sdGlwVHJpZ2dlciIsIlNJREVCQVJfQ09PS0lFX05BTUUiLCJTSURFQkFSX0NPT0tJRV9NQVhfQUdFIiwiU0lERUJBUl9XSURUSCIsIlNJREVCQVJfV0lEVEhfTU9CSUxFIiwiU0lERUJBUl9XSURUSF9JQ09OIiwiU0lERUJBUl9LRVlCT0FSRF9TSE9SVENVVCIsIlNpZGViYXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNpZGViYXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIiwiU2lkZWJhclByb3ZpZGVyIiwiZm9yd2FyZFJlZiIsImRlZmF1bHRPcGVuIiwib3BlbiIsIm9wZW5Qcm9wIiwib25PcGVuQ2hhbmdlIiwic2V0T3BlblByb3AiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNoaWxkcmVuIiwicHJvcHMiLCJyZWYiLCJpc01vYmlsZSIsIm9wZW5Nb2JpbGUiLCJzZXRPcGVuTW9iaWxlIiwidXNlU3RhdGUiLCJfb3BlbiIsIl9zZXRPcGVuIiwic2V0T3BlbiIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcGVuU3RhdGUiLCJkb2N1bWVudCIsImNvb2tpZSIsInRvZ2dsZVNpZGViYXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJtZXRhS2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJQcm92aWRlciIsImRlbGF5RHVyYXRpb24iLCJkaXYiLCJkaXNwbGF5TmFtZSIsIlNpZGViYXIiLCJzaWRlIiwidmFyaWFudCIsImNvbGxhcHNpYmxlIiwiZGF0YS1zaWRlYmFyIiwiZGF0YS1tb2JpbGUiLCJkYXRhLXN0YXRlIiwiZGF0YS1jb2xsYXBzaWJsZSIsImRhdGEtdmFyaWFudCIsImRhdGEtc2lkZSIsIlNpZGViYXJUcmlnZ2VyIiwib25DbGljayIsInNpemUiLCJzcGFuIiwiU2lkZWJhclJhaWwiLCJidXR0b24iLCJhcmlhLWxhYmVsIiwidGFiSW5kZXgiLCJ0aXRsZSIsIlNpZGViYXJJbnNldCIsIm1haW4iLCJTaWRlYmFySW5wdXQiLCJTaWRlYmFySGVhZGVyIiwiU2lkZWJhckZvb3RlciIsIlNpZGViYXJTZXBhcmF0b3IiLCJTaWRlYmFyQ29udGVudCIsIlNpZGViYXJHcm91cCIsIlNpZGViYXJHcm91cExhYmVsIiwiYXNDaGlsZCIsIkNvbXAiLCJTaWRlYmFyR3JvdXBBY3Rpb24iLCJTaWRlYmFyR3JvdXBDb250ZW50IiwiU2lkZWJhck1lbnUiLCJ1bCIsIlNpZGViYXJNZW51SXRlbSIsImxpIiwic2lkZWJhck1lbnVCdXR0b25WYXJpYW50cyIsInZhcmlhbnRzIiwiZGVmYXVsdCIsIm91dGxpbmUiLCJzbSIsImxnIiwiZGVmYXVsdFZhcmlhbnRzIiwiU2lkZWJhck1lbnVCdXR0b24iLCJpc0FjdGl2ZSIsInRvb2x0aXAiLCJkYXRhLXNpemUiLCJkYXRhLWFjdGl2ZSIsImFsaWduIiwiaGlkZGVuIiwiU2lkZWJhck1lbnVBY3Rpb24iLCJzaG93T25Ib3ZlciIsIlNpZGViYXJNZW51QmFkZ2UiLCJTaWRlYmFyTWVudVNrZWxldG9uIiwic2hvd0ljb24iLCJ3aWR0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlNpZGViYXJNZW51U3ViIiwiU2lkZWJhck1lbnVTdWJJdGVtIiwiU2lkZWJhck1lbnVTdWJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUMvQixTQUFTQyxJQUFJLFFBQVEsdUJBQXVCO0FBQzVDLFNBQXVCQyxHQUFHLFFBQVEsMkJBQTJCO0FBQzdELFNBQVNDLFNBQVMsUUFBUSxlQUFlO0FBRXpDLFNBQVNDLFdBQVcsUUFBUSxxQkFBcUI7QUFDakQsU0FBU0MsRUFBRSxRQUFRLGNBQWM7QUFDakMsU0FBU0MsTUFBTSxRQUFRLHlCQUF5QjtBQUNoRCxTQUFTQyxLQUFLLFFBQVEsd0JBQXdCO0FBQzlDLFNBQVNDLFNBQVMsUUFBUSw0QkFBNEI7QUFDdEQsU0FBU0MsS0FBSyxFQUFFQyxZQUFZLFFBQVEsd0JBQXdCO0FBQzVELFNBQVNDLFFBQVEsUUFBUSwyQkFBMkI7QUFDcEQsU0FBU0MsT0FBTyxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsY0FBYyxRQUFRLDBCQUEwQjtBQUVuRyxNQUFNQyxzQkFBc0I7QUFDNUIs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