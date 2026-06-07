import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/menubar.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/menubar.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as MenubarPrimitive from "/node_modules/.vite/deps/@radix-ui_react-menubar.js?v=7dd7a232";
import { Check, ChevronRight, Circle } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
const Menubar = /*#__PURE__*/ React.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(MenubarPrimitive.Root, {
        ref: ref,
        className: cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this));
_c1 = Menubar;
Menubar.displayName = MenubarPrimitive.Root.displayName;
const MenubarTrigger = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(MenubarPrimitive.Trigger, {
        ref: ref,
        className: cn("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, this));
_c3 = MenubarTrigger;
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
const MenubarSubTrigger = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(MenubarPrimitive.SubTrigger, {
        ref: ref,
        className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ _jsxDEV(ChevronRight, {
                className: "ml-auto h-4 w-4"
            }, void 0, false, {
                fileName: "/app/src/components/ui/menubar.tsx",
                lineNumber: 60,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, this));
_c5 = MenubarSubTrigger;
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
const MenubarSubContent = /*#__PURE__*/ React.forwardRef(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(MenubarPrimitive.SubContent, {
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, this));
_c7 = MenubarSubContent;
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
const MenubarContent = /*#__PURE__*/ React.forwardRef(_c8 = ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(MenubarPrimitive.Portal, {
        children: /*#__PURE__*/ _jsxDEV(MenubarPrimitive.Content, {
            ref: ref,
            align: align,
            alignOffset: alignOffset,
            sideOffset: sideOffset,
            className: cn("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "/app/src/components/ui/menubar.tsx",
            lineNumber: 85,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, this));
_c9 = MenubarContent;
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
const MenubarItem = /*#__PURE__*/ React.forwardRef(_c10 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(MenubarPrimitive.Item, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this));
_c11 = MenubarItem;
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
const MenubarCheckboxItem = /*#__PURE__*/ React.forwardRef(_c12 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(MenubarPrimitive.CheckboxItem, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ _jsxDEV(MenubarPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsxDEV(Check, {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "/app/src/components/ui/menubar.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/components/ui/menubar.tsx",
                    lineNumber: 132,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/ui/menubar.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 122,
        columnNumber: 3
    }, this));
_c13 = MenubarCheckboxItem;
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = /*#__PURE__*/ React.forwardRef(_c14 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(MenubarPrimitive.RadioItem, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ _jsxDEV(MenubarPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsxDEV(Circle, {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "/app/src/components/ui/menubar.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/components/ui/menubar.tsx",
                    lineNumber: 154,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/ui/menubar.tsx",
                lineNumber: 153,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 145,
        columnNumber: 3
    }, this));
_c15 = MenubarRadioItem;
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
const MenubarLabel = /*#__PURE__*/ React.forwardRef(_c16 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(MenubarPrimitive.Label, {
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 169,
        columnNumber: 3
    }, this));
_c17 = MenubarLabel;
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
const MenubarSeparator = /*#__PURE__*/ React.forwardRef(_c18 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(MenubarPrimitive.Separator, {
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 181,
        columnNumber: 3
    }, this));
_c19 = MenubarSeparator;
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
const MenubarShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ _jsxDEV("span", {
        className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/menubar.tsx",
        lineNumber: 186,
        columnNumber: 10
    }, this);
};
_c20 = MenubarShortcut;
MenubarShortcut.displayname = "MenubarShortcut";
export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarLabel, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarPortal, MenubarSubContent, MenubarSubTrigger, MenubarGroup, MenubarSub, MenubarShortcut };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;
$RefreshReg$(_c, "Menubar$React.forwardRef");
$RefreshReg$(_c1, "Menubar");
$RefreshReg$(_c2, "MenubarTrigger$React.forwardRef");
$RefreshReg$(_c3, "MenubarTrigger");
$RefreshReg$(_c4, "MenubarSubTrigger$React.forwardRef");
$RefreshReg$(_c5, "MenubarSubTrigger");
$RefreshReg$(_c6, "MenubarSubContent$React.forwardRef");
$RefreshReg$(_c7, "MenubarSubContent");
$RefreshReg$(_c8, "MenubarContent$React.forwardRef");
$RefreshReg$(_c9, "MenubarContent");
$RefreshReg$(_c10, "MenubarItem$React.forwardRef");
$RefreshReg$(_c11, "MenubarItem");
$RefreshReg$(_c12, "MenubarCheckboxItem$React.forwardRef");
$RefreshReg$(_c13, "MenubarCheckboxItem");
$RefreshReg$(_c14, "MenubarRadioItem$React.forwardRef");
$RefreshReg$(_c15, "MenubarRadioItem");
$RefreshReg$(_c16, "MenubarLabel$React.forwardRef");
$RefreshReg$(_c17, "MenubarLabel");
$RefreshReg$(_c18, "MenubarSeparator$React.forwardRef");
$RefreshReg$(_c19, "MenubarSeparator");
$RefreshReg$(_c20, "MenubarShortcut");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/menubar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/menubar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnViYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgTWVudWJhclByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LW1lbnViYXJcIjtcbmltcG9ydCB7IENoZWNrLCBDaGV2cm9uUmlnaHQsIENpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgTWVudWJhck1lbnUgPSBNZW51YmFyUHJpbWl0aXZlLk1lbnU7XG5cbmNvbnN0IE1lbnViYXJHcm91cCA9IE1lbnViYXJQcmltaXRpdmUuR3JvdXA7XG5cbmNvbnN0IE1lbnViYXJQb3J0YWwgPSBNZW51YmFyUHJpbWl0aXZlLlBvcnRhbDtcblxuY29uc3QgTWVudWJhclN1YiA9IE1lbnViYXJQcmltaXRpdmUuU3ViO1xuXG5jb25zdCBNZW51YmFyUmFkaW9Hcm91cCA9IE1lbnViYXJQcmltaXRpdmUuUmFkaW9Hcm91cDtcblxuY29uc3QgTWVudWJhciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuUm9vdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5Sb290PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TWVudWJhclByaW1pdGl2ZS5Sb290XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcImZsZXggaC0xMCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xIHJvdW5kZWQtbWQgYm9yZGVyIGJnLWJhY2tncm91bmQgcC0xXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5NZW51YmFyLmRpc3BsYXlOYW1lID0gTWVudWJhclByaW1pdGl2ZS5Sb290LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBNZW51YmFyVHJpZ2dlciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuVHJpZ2dlcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5UcmlnZ2VyPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TWVudWJhclByaW1pdGl2ZS5UcmlnZ2VyXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZmxleCBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweC0zIHB5LTEuNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIG91dGxpbmUtbm9uZSBkYXRhLVtzdGF0ZT1vcGVuXTpiZy1hY2NlbnQgZGF0YS1bc3RhdGU9b3Blbl06dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5NZW51YmFyVHJpZ2dlci5kaXNwbGF5TmFtZSA9IE1lbnViYXJQcmltaXRpdmUuVHJpZ2dlci5kaXNwbGF5TmFtZTtcblxuY29uc3QgTWVudWJhclN1YlRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLlN1YlRyaWdnZXI+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuU3ViVHJpZ2dlcj4gJiB7XG4gICAgaW5zZXQ/OiBib29sZWFuO1xuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPE1lbnViYXJQcmltaXRpdmUuU3ViVHJpZ2dlclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9wZW5dOnRleHQtYWNjZW50LWZvcmVncm91bmQgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwibWwtYXV0byBoLTQgdy00XCIgLz5cbiAgPC9NZW51YmFyUHJpbWl0aXZlLlN1YlRyaWdnZXI+XG4pKTtcbk1lbnViYXJTdWJUcmlnZ2VyLmRpc3BsYXlOYW1lID0gTWVudWJhclByaW1pdGl2ZS5TdWJUcmlnZ2VyLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBNZW51YmFyU3ViQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuU3ViQ29udGVudD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5TdWJDb250ZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TWVudWJhclByaW1pdGl2ZS5TdWJDb250ZW50XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiei01MCBtaW4tdy1bOHJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgcC0xIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMlwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5NZW51YmFyU3ViQ29udGVudC5kaXNwbGF5TmFtZSA9IE1lbnViYXJQcmltaXRpdmUuU3ViQ29udGVudC5kaXNwbGF5TmFtZTtcblxuY29uc3QgTWVudWJhckNvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuQ29udGVudD5cbj4oKHsgY2xhc3NOYW1lLCBhbGlnbiA9IFwic3RhcnRcIiwgYWxpZ25PZmZzZXQgPSAtNCwgc2lkZU9mZnNldCA9IDgsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TWVudWJhclByaW1pdGl2ZS5Qb3J0YWw+XG4gICAgPE1lbnViYXJQcmltaXRpdmUuQ29udGVudFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBhbGlnbj17YWxpZ259XG4gICAgICBhbGlnbk9mZnNldD17YWxpZ25PZmZzZXR9XG4gICAgICBzaWRlT2Zmc2V0PXtzaWRlT2Zmc2V0fVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJ6LTUwIG1pbi13LVsxMnJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgcC0xIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1tZCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgPC9NZW51YmFyUHJpbWl0aXZlLlBvcnRhbD5cbikpO1xuTWVudWJhckNvbnRlbnQuZGlzcGxheU5hbWUgPSBNZW51YmFyUHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE1lbnViYXJJdGVtID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5JdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLkl0ZW0+ICYge1xuICAgIGluc2V0PzogYm9vbGVhbjtcbiAgfVxuPigoeyBjbGFzc05hbWUsIGluc2V0LCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPE1lbnViYXJQcmltaXRpdmUuSXRlbVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTAgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5NZW51YmFySXRlbS5kaXNwbGF5TmFtZSA9IE1lbnViYXJQcmltaXRpdmUuSXRlbS5kaXNwbGF5TmFtZTtcblxuY29uc3QgTWVudWJhckNoZWNrYm94SXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuQ2hlY2tib3hJdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLkNoZWNrYm94SXRlbT5cbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgY2hlY2tlZCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxNZW51YmFyUHJpbWl0aXZlLkNoZWNrYm94SXRlbVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHktMS41IHBsLTggcHItMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgZmxleCBoLTMuNSB3LTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxNZW51YmFyUHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgIDwvTWVudWJhclByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgIDwvc3Bhbj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvTWVudWJhclByaW1pdGl2ZS5DaGVja2JveEl0ZW0+XG4pKTtcbk1lbnViYXJDaGVja2JveEl0ZW0uZGlzcGxheU5hbWUgPSBNZW51YmFyUHJpbWl0aXZlLkNoZWNrYm94SXRlbS5kaXNwbGF5TmFtZTtcblxuY29uc3QgTWVudWJhclJhZGlvSXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuUmFkaW9JdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBNZW51YmFyUHJpbWl0aXZlLlJhZGlvSXRlbT5cbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxNZW51YmFyUHJpbWl0aXZlLlJhZGlvSXRlbVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHktMS41IHBsLTggcHItMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIGZsZXggaC0zLjUgdy0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8TWVudWJhclByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgICAgICA8Q2lyY2xlIGNsYXNzTmFtZT1cImgtMiB3LTIgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgIDwvTWVudWJhclByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgIDwvc3Bhbj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvTWVudWJhclByaW1pdGl2ZS5SYWRpb0l0ZW0+XG4pKTtcbk1lbnViYXJSYWRpb0l0ZW0uZGlzcGxheU5hbWUgPSBNZW51YmFyUHJpbWl0aXZlLlJhZGlvSXRlbS5kaXNwbGF5TmFtZTtcblxuY29uc3QgTWVudWJhckxhYmVsID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5MYWJlbD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5MYWJlbD4gJiB7XG4gICAgaW5zZXQ/OiBib29sZWFuO1xuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TWVudWJhclByaW1pdGl2ZS5MYWJlbFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJweC0yIHB5LTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIiwgaW5zZXQgJiYgXCJwbC04XCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5NZW51YmFyTGFiZWwuZGlzcGxheU5hbWUgPSBNZW51YmFyUHJpbWl0aXZlLkxhYmVsLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBNZW51YmFyU2VwYXJhdG9yID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTWVudWJhclByaW1pdGl2ZS5TZXBhcmF0b3I+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE1lbnViYXJQcmltaXRpdmUuU2VwYXJhdG9yPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TWVudWJhclByaW1pdGl2ZS5TZXBhcmF0b3IgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oXCItbXgtMSBteS0xIGgtcHggYmctbXV0ZWRcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuKSk7XG5NZW51YmFyU2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gTWVudWJhclByaW1pdGl2ZS5TZXBhcmF0b3IuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE1lbnViYXJTaG9ydGN1dCA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFNwYW5FbGVtZW50PikgPT4ge1xuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbihcIm1sLWF1dG8gdGV4dC14cyB0cmFja2luZy13aWRlc3QgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz47XG59O1xuTWVudWJhclNob3J0Y3V0LmRpc3BsYXluYW1lID0gXCJNZW51YmFyU2hvcnRjdXRcIjtcblxuZXhwb3J0IHtcbiAgTWVudWJhcixcbiAgTWVudWJhck1lbnUsXG4gIE1lbnViYXJUcmlnZ2VyLFxuICBNZW51YmFyQ29udGVudCxcbiAgTWVudWJhckl0ZW0sXG4gIE1lbnViYXJTZXBhcmF0b3IsXG4gIE1lbnViYXJMYWJlbCxcbiAgTWVudWJhckNoZWNrYm94SXRlbSxcbiAgTWVudWJhclJhZGlvR3JvdXAsXG4gIE1lbnViYXJSYWRpb0l0ZW0sXG4gIE1lbnViYXJQb3J0YWwsXG4gIE1lbnViYXJTdWJDb250ZW50LFxuICBNZW51YmFyU3ViVHJpZ2dlcixcbiAgTWVudWJhckdyb3VwLFxuICBNZW51YmFyU3ViLFxuICBNZW51YmFyU2hvcnRjdXQsXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnViYXJQcmltaXRpdmUiLCJDaGVjayIsIkNoZXZyb25SaWdodCIsIkNpcmNsZSIsImNuIiwiTWVudWJhck1lbnUiLCJNZW51IiwiTWVudWJhckdyb3VwIiwiR3JvdXAiLCJNZW51YmFyUG9ydGFsIiwiUG9ydGFsIiwiTWVudWJhclN1YiIsIlN1YiIsIk1lbnViYXJSYWRpb0dyb3VwIiwiUmFkaW9Hcm91cCIsIk1lbnViYXIiLCJmb3J3YXJkUmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJSb290IiwiZGlzcGxheU5hbWUiLCJNZW51YmFyVHJpZ2dlciIsIlRyaWdnZXIiLCJNZW51YmFyU3ViVHJpZ2dlciIsImluc2V0IiwiY2hpbGRyZW4iLCJTdWJUcmlnZ2VyIiwiTWVudWJhclN1YkNvbnRlbnQiLCJTdWJDb250ZW50IiwiTWVudWJhckNvbnRlbnQiLCJhbGlnbiIsImFsaWduT2Zmc2V0Iiwic2lkZU9mZnNldCIsIkNvbnRlbnQiLCJNZW51YmFySXRlbSIsIkl0ZW0iLCJNZW51YmFyQ2hlY2tib3hJdGVtIiwiY2hlY2tlZCIsIkNoZWNrYm94SXRlbSIsInNwYW4iLCJJdGVtSW5kaWNhdG9yIiwiTWVudWJhclJhZGlvSXRlbSIsIlJhZGlvSXRlbSIsIk1lbnViYXJMYWJlbCIsIkxhYmVsIiwiTWVudWJhclNlcGFyYXRvciIsIlNlcGFyYXRvciIsIk1lbnViYXJTaG9ydGN1dCIsImRpc3BsYXluYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUMvQixZQUFZQyxzQkFBc0IsMEJBQTBCO0FBQzVELFNBQVNDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxNQUFNLFFBQVEsZUFBZTtBQUUzRCxTQUFTQyxFQUFFLFFBQVEsY0FBYztBQUVqQyxNQUFNQyxjQUFjTCxp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