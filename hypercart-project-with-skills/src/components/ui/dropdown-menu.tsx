import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/dropdown-menu.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/dropdown-menu.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as DropdownMenuPrimitive from "/node_modules/.vite/deps/@radix-ui_react-dropdown-menu.js?v=7dd7a232";
import { Check, ChevronRight, Circle } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = /*#__PURE__*/ React.forwardRef(_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.SubTrigger, {
        ref: ref,
        className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ _jsxDEV(ChevronRight, {
                className: "ml-auto h-4 w-4"
            }, void 0, false, {
                fileName: "/app/src/components/ui/dropdown-menu.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/dropdown-menu.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this));
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.SubContent, {
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/dropdown-menu.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, this));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.Portal, {
        children: /*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.Content, {
            ref: ref,
            sideOffset: sideOffset,
            className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "/app/src/components/ui/dropdown-menu.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/dropdown-menu.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, this));
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = /*#__PURE__*/ React.forwardRef(_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.Item, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/dropdown-menu.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, this));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ React.forwardRef(_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.CheckboxItem, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsxDEV(Check, {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "/app/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 105,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/ui/dropdown-menu.tsx",
                lineNumber: 104,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/dropdown-menu.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, this));
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ React.forwardRef(_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.RadioItem, {
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.ItemIndicator, {
                    children: /*#__PURE__*/ _jsxDEV(Circle, {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "/app/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/ui/dropdown-menu.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/dropdown-menu.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, this));
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = /*#__PURE__*/ React.forwardRef(_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.Label, {
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/dropdown-menu.tsx",
        lineNumber: 142,
        columnNumber: 3
    }, this));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ React.forwardRef(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(DropdownMenuPrimitive.Separator, {
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 3
    }, this));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ _jsxDEV("span", {
        className: cn("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/dropdown-menu.tsx",
        lineNumber: 159,
        columnNumber: 10
    }, this);
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
$RefreshReg$(_c, "DropdownMenuSubTrigger$React.forwardRef");
$RefreshReg$(_c1, "DropdownMenuSubTrigger");
$RefreshReg$(_c2, "DropdownMenuSubContent$React.forwardRef");
$RefreshReg$(_c3, "DropdownMenuSubContent");
$RefreshReg$(_c4, "DropdownMenuContent$React.forwardRef");
$RefreshReg$(_c5, "DropdownMenuContent");
$RefreshReg$(_c6, "DropdownMenuItem$React.forwardRef");
$RefreshReg$(_c7, "DropdownMenuItem");
$RefreshReg$(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
$RefreshReg$(_c9, "DropdownMenuCheckboxItem");
$RefreshReg$(_c10, "DropdownMenuRadioItem$React.forwardRef");
$RefreshReg$(_c11, "DropdownMenuRadioItem");
$RefreshReg$(_c12, "DropdownMenuLabel$React.forwardRef");
$RefreshReg$(_c13, "DropdownMenuLabel");
$RefreshReg$(_c14, "DropdownMenuSeparator$React.forwardRef");
$RefreshReg$(_c15, "DropdownMenuSeparator");
$RefreshReg$(_c16, "DropdownMenuShortcut");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/dropdown-menu.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/dropdown-menu.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLW1lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgRHJvcGRvd25NZW51UHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgQ2hlY2ssIENoZXZyb25SaWdodCwgQ2lyY2xlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBEcm9wZG93bk1lbnUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuUm9vdDtcblxuY29uc3QgRHJvcGRvd25NZW51VHJpZ2dlciA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5UcmlnZ2VyO1xuXG5jb25zdCBEcm9wZG93bk1lbnVHcm91cCA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5Hcm91cDtcblxuY29uc3QgRHJvcGRvd25NZW51UG9ydGFsID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbDtcblxuY29uc3QgRHJvcGRvd25NZW51U3ViID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YjtcblxuY29uc3QgRHJvcGRvd25NZW51UmFkaW9Hcm91cCA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwO1xuXG5jb25zdCBEcm9wZG93bk1lbnVTdWJUcmlnZ2VyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXI+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPiAmIHtcbiAgICBpbnNldD86IGJvb2xlYW47XG4gIH1cbj4oKHsgY2xhc3NOYW1lLCBpbnNldCwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXJcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB4LTIgcHktMS41IHRleHQtc20gb3V0bGluZS1ub25lIGRhdGEtW3N0YXRlPW9wZW5dOmJnLWFjY2VudCBmb2N1czpiZy1hY2NlbnRcIixcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwibWwtYXV0byBoLTQgdy00XCIgLz5cbiAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj5cbikpO1xuRHJvcGRvd25NZW51U3ViVHJpZ2dlci5kaXNwbGF5TmFtZSA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBEcm9wZG93bk1lbnVTdWJDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YkNvbnRlbnRcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJ6LTUwIG1pbi13LVs4cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYmctcG9wb3ZlciBwLTEgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgc2hhZG93LWxnIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMlwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5Ecm9wZG93bk1lbnVTdWJDb250ZW50LmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmNvbnN0IERyb3Bkb3duTWVudUNvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgc2lkZU9mZnNldCA9IDQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbD5cbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiei01MCBtaW4tdy1bOHJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIGJnLXBvcG92ZXIgcC0xIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1tZCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTJcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XG4pKTtcbkRyb3Bkb3duTWVudUNvbnRlbnQuZGlzcGxheU5hbWUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudC5kaXNwbGF5TmFtZTtcblxuY29uc3QgRHJvcGRvd25NZW51SXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbT4gJiB7XG4gICAgaW5zZXQ/OiBib29sZWFuO1xuICB9XG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB4LTIgcHktMS41IHRleHQtc20gb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kXCIsXG4gICAgICBpbnNldCAmJiBcInBsLThcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuRHJvcGRvd25NZW51SXRlbS5kaXNwbGF5TmFtZSA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBEcm9wZG93bk1lbnVDaGVja2JveEl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBjaGVja2VkLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB5LTEuNSBwbC04IHByLTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTAgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIGZsZXggaC0zLjUgdy0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgPC9zcGFuPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxuKSk7XG5Ecm9wZG93bk1lbnVDaGVja2JveEl0ZW0uZGlzcGxheU5hbWUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBEcm9wZG93bk1lbnVSYWRpb0l0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW1cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB5LTEuNSBwbC04IHByLTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTAgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmRcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMiBmbGV4IGgtMy41IHctMy41IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgICAgICA8Q2lyY2xlIGNsYXNzTmFtZT1cImgtMiB3LTIgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgPC9zcGFuPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPlxuKSk7XG5Ecm9wZG93bk1lbnVSYWRpb0l0ZW0uZGlzcGxheU5hbWUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBEcm9wZG93bk1lbnVMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5MYWJlbD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsPiAmIHtcbiAgICBpbnNldD86IGJvb2xlYW47XG4gIH1cbj4oKHsgY2xhc3NOYW1lLCBpbnNldCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWxcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwicHgtMiBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkXCIsIGluc2V0ICYmIFwicGwtOFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuRHJvcGRvd25NZW51TGFiZWwuZGlzcGxheU5hbWUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWwuZGlzcGxheU5hbWU7XG5cbmNvbnN0IERyb3Bkb3duTWVudVNlcGFyYXRvciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TZXBhcmF0b3I+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TZXBhcmF0b3I+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yIHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKFwiLW14LTEgbXktMSBoLXB4IGJnLW11dGVkXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbikpO1xuRHJvcGRvd25NZW51U2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvci5kaXNwbGF5TmFtZTtcblxuY29uc3QgRHJvcGRvd25NZW51U2hvcnRjdXQgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxTcGFuRWxlbWVudD4pID0+IHtcbiAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y24oXCJtbC1hdXRvIHRleHQteHMgdHJhY2tpbmctd2lkZXN0IG9wYWNpdHktNjBcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPjtcbn07XG5Ecm9wZG93bk1lbnVTaG9ydGN1dC5kaXNwbGF5TmFtZSA9IFwiRHJvcGRvd25NZW51U2hvcnRjdXRcIjtcblxuZXhwb3J0IHtcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxuICBEcm9wZG93bk1lbnVDb250ZW50LFxuICBEcm9wZG93bk1lbnVJdGVtLFxuICBEcm9wZG93bk1lbnVDaGVja2JveEl0ZW0sXG4gIERyb3Bkb3duTWVudVJhZGlvSXRlbSxcbiAgRHJvcGRvd25NZW51TGFiZWwsXG4gIERyb3Bkb3duTWVudVNlcGFyYXRvcixcbiAgRHJvcGRvd25NZW51U2hvcnRjdXQsXG4gIERyb3Bkb3duTWVudUdyb3VwLFxuICBEcm9wZG93bk1lbnVQb3J0YWwsXG4gIERyb3Bkb3duTWVudVN1YixcbiAgRHJvcGRvd25NZW51U3ViQ29udGVudCxcbiAgRHJvcGRvd25NZW51U3ViVHJpZ2dlcixcbiAgRHJvcGRvd25NZW51UmFkaW9Hcm91cCxcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiRHJvcGRvd25NZW51UHJpbWl0aXZlIiwiQ2hlY2siLCJDaGV2cm9uUmlnaHQiLCJDaXJjbGUiLCJjbiIsIkRyb3Bkb3duTWVudSIsIlJvb3QiLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiVHJpZ2dlciIsIkRyb3Bkb3duTWVudUdyb3VwIiwiR3JvdXAiLCJEcm9wZG93bk1lbnVQb3J0YWwiLCJQb3J0YWwiLCJEcm9wZG93bk1lbnVTdWIiLCJTdWIiLCJEcm9wZG93bk1lbnVSYWRpb0dyb3VwIiwiUmFkaW9Hcm91cCIsIkRyb3Bkb3duTWVudVN1YlRyaWdnZXIiLCJmb3J3YXJkUmVmIiwiY2xhc3NOYW1lIiwiaW5zZXQiLCJjaGlsZHJlbiIsInByb3BzIiwicmVmIiwiU3ViVHJpZ2dlciIsImRpc3BsYXlOYW1lIiwiRHJvcGRvd25NZW51U3ViQ29udGVudCIsIlN1YkNvbnRlbnQiLCJEcm9wZG93bk1lbnVDb250ZW50Iiwic2lkZU9mZnNldCIsIkNvbnRlbnQiLCJEcm9wZG93bk1lbnVJdGVtIiwiSXRlbSIsIkRyb3Bkb3duTWVudUNoZWNrYm94SXRlbSIsImNoZWNrZWQiLCJDaGVja2JveEl0ZW0iLCJzcGFuIiwiSXRlbUluZGljYXRvciIsIkRyb3Bkb3duTWVudVJhZGlvSXRlbSIsIlJhZGlvSXRlbSIsIkRyb3Bkb3duTWVudUxhYmVsIiwiTGFiZWwiLCJEcm9wZG93bk1lbnVTZXBhcmF0b3IiLCJTZXBhcmF0b3IiLCJEcm9wZG93bk1lbnVTaG9ydGN1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZQSxXQUFXLFFBQVE7QUFDL0IsWUFBWUMsMkJBQTJCLGdDQUFnQztBQUN2RSxTQUFTQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsTUFBTSxRQUFRLGVBQWU7QUFFM0QsU0FBU0MsRUFBRSxRQUFRLGNBQWM7QUFFakMsTUFBTUMsZUFBZUwsc0JBQXNCTSxJQUFJO0FBRS9DLE1BQU1DLHNCQUFzQlAsc0JBQXNCUSxPQUFPO0FBRXpELE1BQU1DLG9CQUFvQlQsc0JBQXNCVSxLQUFLO0FBRXJELE1BQU1DLHFCQUFxQlgsc0JBQXNCWSxNQUFNO0FBRXZELE1BQU1DLGtCQUFrQmIsc0JBQXNCYyxHQUFHO0FBRWpELE1BQU1DLHlCQUF5QmYsc0JBQXNCZ0IsVUFBVTtBQUUvRCxNQUFNQyx1Q0FBeUJsQixNQUFNbUIsVUFBVSxNQUs3QyxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyxvQkFDM0MsUUFBQ3ZCLHNCQUFzQndCLFVBQVU7UUFDL0JELEtBQUtBO1FBQ0xKLFdBQVdmLEdBQ1Qsd0lBQ0FnQixTQUFTLFFBQ1REO1FBRUQsR0FBR0csS0FBSzs7WUFFUkQ7MEJBQ0QsUUFBQ25CO2dCQUFhaUIsV0FBVTs7Ozs7Ozs7Ozs7OztBQUc1QkYsdUJBQXVCUSxXQUFXLEdBQUd6QixzQkFBc0J3QixVQUFVLENBQUNDLFdBQVc7QUFFakYsTUFBTUMsdUNBQXlCM0IsTUFBTW1CLFVBQVUsT0FHN0MsQ0FBQyxFQUFFQyxTQUFTLEVBQUUsR0FBR0csT0FBTyxFQUFFQyxvQkFDMUIsUUFBQ3ZCLHNCQUFzQjJCLFVBQVU7UUFDL0JKLEtBQUtBO1FBQ0xKLFdBQVdmLEdBQ1QseWJBQ0Fl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