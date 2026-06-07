import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/context-menu.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/context-menu.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as ContextMenuPrimitive from "/node_modules/.vite/deps/@radix-ui_react-context-menu.js?v=7dd7a232";
import { Check, ChevronRight, Circle } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
const ContextMenuSubTrigger = /*#__PURE__*/ React.forwardRef(_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.SubTrigger, {
        ref: ref,
        className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ _jsxDEV(ChevronRight, {
                className: "ml-auto h-4 w-4"
            }, void 0, false, {
                fileName: "/app/src/components/ui/context-menu.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/context-menu.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this));
_c1 = ContextMenuSubTrigger;
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
const ContextMenuSubContent = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.SubContent, {
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/context-menu.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, this));
_c3 = ContextMenuSubContent;
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
const ContextMenuContent = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.Portal, {
        children: /*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.Content, {
            ref: ref,
            className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "/app/src/components/ui/context-menu.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/context-menu.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, this));
_c5 = ContextMenuContent;
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
const ContextMenuItem = /*#__PURE__*/ React.forwardRef(_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.Item, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/context-menu.tsx",
        lineNumber: 78,
        columnNumber: 3
    }, this));
_c7 = ContextMenuItem;
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
const ContextMenuCheckboxItem = /*#__PURE__*/ React.forwardRef(_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.CheckboxItem, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsxDEV(Check, {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "/app/src/components/ui/context-menu.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/components/ui/context-menu.tsx",
                    lineNumber: 104,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/ui/context-menu.tsx",
                lineNumber: 103,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/context-menu.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, this));
_c9 = ContextMenuCheckboxItem;
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
const ContextMenuRadioItem = /*#__PURE__*/ React.forwardRef(_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.RadioItem, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsxDEV(Circle, {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "/app/src/components/ui/context-menu.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/components/ui/context-menu.tsx",
                    lineNumber: 126,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/ui/context-menu.tsx",
                lineNumber: 125,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/context-menu.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this));
_c11 = ContextMenuRadioItem;
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const ContextMenuLabel = /*#__PURE__*/ React.forwardRef(_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.Label, {
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/context-menu.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
_c13 = ContextMenuLabel;
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
const ContextMenuSeparator = /*#__PURE__*/ React.forwardRef(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ContextMenuPrimitive.Separator, {
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/context-menu.tsx",
        lineNumber: 153,
        columnNumber: 3
    }, this));
_c15 = ContextMenuSeparator;
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
const ContextMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ _jsxDEV("span", {
        className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/context-menu.tsx",
        lineNumber: 158,
        columnNumber: 10
    }, this);
};
_c16 = ContextMenuShortcut;
ContextMenuShortcut.displayName = "ContextMenuShortcut";
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
$RefreshReg$(_c, "ContextMenuSubTrigger$React.forwardRef");
$RefreshReg$(_c1, "ContextMenuSubTrigger");
$RefreshReg$(_c2, "ContextMenuSubContent$React.forwardRef");
$RefreshReg$(_c3, "ContextMenuSubContent");
$RefreshReg$(_c4, "ContextMenuContent$React.forwardRef");
$RefreshReg$(_c5, "ContextMenuContent");
$RefreshReg$(_c6, "ContextMenuItem$React.forwardRef");
$RefreshReg$(_c7, "ContextMenuItem");
$RefreshReg$(_c8, "ContextMenuCheckboxItem$React.forwardRef");
$RefreshReg$(_c9, "ContextMenuCheckboxItem");
$RefreshReg$(_c10, "ContextMenuRadioItem$React.forwardRef");
$RefreshReg$(_c11, "ContextMenuRadioItem");
$RefreshReg$(_c12, "ContextMenuLabel$React.forwardRef");
$RefreshReg$(_c13, "ContextMenuLabel");
$RefreshReg$(_c14, "ContextMenuSeparator$React.forwardRef");
$RefreshReg$(_c15, "ContextMenuSeparator");
$RefreshReg$(_c16, "ContextMenuShortcut");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/context-menu.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/context-menu.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRleHQtbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBDb250ZXh0TWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQtbWVudVwiO1xuaW1wb3J0IHsgQ2hlY2ssIENoZXZyb25SaWdodCwgQ2lyY2xlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBDb250ZXh0TWVudSA9IENvbnRleHRNZW51UHJpbWl0aXZlLlJvb3Q7XG5cbmNvbnN0IENvbnRleHRNZW51VHJpZ2dlciA9IENvbnRleHRNZW51UHJpbWl0aXZlLlRyaWdnZXI7XG5cbmNvbnN0IENvbnRleHRNZW51R3JvdXAgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5Hcm91cDtcblxuY29uc3QgQ29udGV4dE1lbnVQb3J0YWwgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5Qb3J0YWw7XG5cbmNvbnN0IENvbnRleHRNZW51U3ViID0gQ29udGV4dE1lbnVQcmltaXRpdmUuU3ViO1xuXG5jb25zdCBDb250ZXh0TWVudVJhZGlvR3JvdXAgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwO1xuXG5jb25zdCBDb250ZXh0TWVudVN1YlRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPiAmIHtcbiAgICBpbnNldD86IGJvb2xlYW47XG4gIH1cbj4oKHsgY2xhc3NOYW1lLCBpbnNldCwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29udGV4dE1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZGF0YS1bc3RhdGU9b3Blbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9wZW5dOnRleHQtYWNjZW50LWZvcmVncm91bmQgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwibWwtYXV0byBoLTQgdy00XCIgLz5cbiAgPC9Db250ZXh0TWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPlxuKSk7XG5Db250ZXh0TWVudVN1YlRyaWdnZXIuZGlzcGxheU5hbWUgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb250ZXh0TWVudVN1YkNvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJDb250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBDb250ZXh0TWVudVByaW1pdGl2ZS5TdWJDb250ZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29udGV4dE1lbnVQcmltaXRpdmUuU3ViQ29udGVudFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInotNTAgbWluLXctWzhyZW1dIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHAtMSB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbWQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkNvbnRleHRNZW51U3ViQ29udGVudC5kaXNwbGF5TmFtZSA9IENvbnRleHRNZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IENvbnRleHRNZW51Q29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb250ZXh0TWVudVByaW1pdGl2ZS5Qb3J0YWw+XG4gICAgPENvbnRleHRNZW51UHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJ6LTUwIG1pbi13LVs4cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYmctcG9wb3ZlciBwLTEgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgc2hhZG93LW1kIGFuaW1hdGUtaW4gZmFkZS1pbi04MCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTJcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L0NvbnRleHRNZW51UHJpbWl0aXZlLlBvcnRhbD5cbikpO1xuQ29udGV4dE1lbnVDb250ZW50LmRpc3BsYXlOYW1lID0gQ29udGV4dE1lbnVQcmltaXRpdmUuQ29udGVudC5kaXNwbGF5TmFtZTtcblxuY29uc3QgQ29udGV4dE1lbnVJdGVtID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuSXRlbT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuSXRlbT4gJiB7XG4gICAgaW5zZXQ/OiBib29sZWFuO1xuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29udGV4dE1lbnVQcmltaXRpdmUuSXRlbVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTAgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5Db250ZXh0TWVudUl0ZW0uZGlzcGxheU5hbWUgPSBDb250ZXh0TWVudVByaW1pdGl2ZS5JdGVtLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb250ZXh0TWVudUNoZWNrYm94SXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBjaGVja2VkLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPENvbnRleHRNZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHktMS41IHBsLTggcHItMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgZmxleCBoLTMuNSB3LTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxDb250ZXh0TWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICA8L0NvbnRleHRNZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgPC9zcGFuPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Db250ZXh0TWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+XG4pKTtcbkNvbnRleHRNZW51Q2hlY2tib3hJdGVtLmRpc3BsYXlOYW1lID0gQ29udGV4dE1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb250ZXh0TWVudVJhZGlvSXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLlJhZGlvSXRlbT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPENvbnRleHRNZW51UHJpbWl0aXZlLlJhZGlvSXRlbVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHktMS41IHBsLTggcHItMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIGZsZXggaC0zLjUgdy0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8Q29udGV4dE1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICAgICAgPENpcmNsZSBjbGFzc05hbWU9XCJoLTIgdy0yIGZpbGwtY3VycmVudFwiIC8+XG4gICAgICA8L0NvbnRleHRNZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgPC9zcGFuPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Db250ZXh0TWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+XG4pKTtcbkNvbnRleHRNZW51UmFkaW9JdGVtLmRpc3BsYXlOYW1lID0gQ29udGV4dE1lbnVQcmltaXRpdmUuUmFkaW9JdGVtLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb250ZXh0TWVudUxhYmVsID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuTGFiZWw+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLkxhYmVsPiAmIHtcbiAgICBpbnNldD86IGJvb2xlYW47XG4gIH1cbj4oKHsgY2xhc3NOYW1lLCBpbnNldCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb250ZXh0TWVudVByaW1pdGl2ZS5MYWJlbFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJweC0yIHB5LTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCIsIGluc2V0ICYmIFwicGwtOFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQ29udGV4dE1lbnVMYWJlbC5kaXNwbGF5TmFtZSA9IENvbnRleHRNZW51UHJpbWl0aXZlLkxhYmVsLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb250ZXh0TWVudVNlcGFyYXRvciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbnRleHRNZW51UHJpbWl0aXZlLlNlcGFyYXRvcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29udGV4dE1lbnVQcmltaXRpdmUuU2VwYXJhdG9yPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29udGV4dE1lbnVQcmltaXRpdmUuU2VwYXJhdG9yIHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKFwiLW14LTEgbXktMSBoLXB4IGJnLWJvcmRlclwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4pKTtcbkNvbnRleHRNZW51U2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gQ29udGV4dE1lbnVQcmltaXRpdmUuU2VwYXJhdG9yLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb250ZXh0TWVudVNob3J0Y3V0ID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MU3BhbkVsZW1lbnQ+KSA9PiB7XG4gIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NuKFwibWwtYXV0byB0ZXh0LXhzIHRyYWNraW5nLXdpZGVzdCB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPjtcbn07XG5Db250ZXh0TWVudVNob3J0Y3V0LmRpc3BsYXlOYW1lID0gXCJDb250ZXh0TWVudVNob3J0Y3V0XCI7XG5cbmV4cG9ydCB7XG4gIENvbnRleHRNZW51LFxuICBDb250ZXh0TWVudVRyaWdnZXIsXG4gIENvbnRleHRNZW51Q29udGVudCxcbiAgQ29udGV4dE1lbnVJdGVtLFxuICBDb250ZXh0TWVudUNoZWNrYm94SXRlbSxcbiAgQ29udGV4dE1lbnVSYWRpb0l0ZW0sXG4gIENvbnRleHRNZW51TGFiZWwsXG4gIENvbnRleHRNZW51U2VwYXJhdG9yLFxuICBDb250ZXh0TWVudVNob3J0Y3V0LFxuICBDb250ZXh0TWVudUdyb3VwLFxuICBDb250ZXh0TWVudVBvcnRhbCxcbiAgQ29udGV4dE1lbnVTdWIsXG4gIENvbnRleHRNZW51U3ViQ29udGVudCxcbiAgQ29udGV4dE1lbnVTdWJUcmlnZ2VyLFxuICBDb250ZXh0TWVudVJhZGlvR3JvdXAsXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRleHRNZW51UHJpbWl0aXZlIiwiQ2hlY2siLCJDaGV2cm9uUmlnaHQiLCJDaXJjbGUiLCJjbiIsIkNvbnRleHRNZW51IiwiUm9vdCIsIkNvbnRleHRNZW51VHJpZ2dlciIsIlRyaWdnZXIiLCJDb250ZXh0TWVudUdyb3VwIiwiR3JvdXAiLCJDb250ZXh0TWVudVBvcnRhbCIsIlBvcnRhbCIsIkNvbnRleHRNZW51U3ViIiwiU3ViIiwiQ29udGV4dE1lbnVSYWRpb0dyb3VwIiwiUmFkaW9Hcm91cCIsIkNvbnRleHRNZW51U3ViVHJpZ2dlciIsImZvcndhcmRSZWYiLCJjbGFzc05hbWUiLCJpbnNldCIsImNoaWxkcmVuIiwicHJvcHMiLCJyZWYiLCJTdWJUcmlnZ2VyIiwiZGlzcGxheU5hbWUiLCJDb250ZXh0TWVudVN1YkNvbnRlbnQiLCJTdWJDb250ZW50IiwiQ29udGV4dE1lbnVDb250ZW50IiwiQ29udGVudCIsIkNvbnRleHRNZW51SXRlbSIsIkl0ZW0iLCJDb250ZXh0TWVudUNoZWNrYm94SXRlbSIsImNoZWNrZWQiLCJDaGVja2JveEl0ZW0iLCJzcGFuIiwiSXRlbUluZGljYXRvciIsIkNvbnRleHRNZW51UmFkaW9JdGVtIiwiUmFkaW9JdGVtIiwiQ29udGV4dE1lbnVMYWJlbCIsIkxhYmVsIiwiQ29udGV4dE1lbnVTZXBhcmF0b3IiLCJTZXBhcmF0b3IiLCJDb250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