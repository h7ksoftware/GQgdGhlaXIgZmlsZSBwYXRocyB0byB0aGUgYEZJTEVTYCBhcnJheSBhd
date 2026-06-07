import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/navigation-menu.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/navigation-menu.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as NavigationMenuPrimitive from "/node_modules/.vite/deps/@radix-ui_react-navigation-menu.js?v=7dd7a232";
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=7dd7a232";
import { ChevronDown } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const NavigationMenu = /*#__PURE__*/ React.forwardRef(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(NavigationMenuPrimitive.Root, {
        ref: ref,
        className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ _jsxDEV(NavigationMenuViewport, {}, void 0, false, {
                fileName: "/app/src/components/ui/navigation-menu.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/navigation-menu.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = NavigationMenu;
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(NavigationMenuPrimitive.List, {
        ref: ref,
        className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/navigation-menu.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = NavigationMenuList;
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");
const NavigationMenuTrigger = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(NavigationMenuPrimitive.Trigger, {
        ref: ref,
        className: cn(navigationMenuTriggerStyle(), "group", className),
        ...props,
        children: [
            children,
            " ",
            /*#__PURE__*/ _jsxDEV(ChevronDown, {
                className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "/app/src/components/ui/navigation-menu.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/navigation-menu.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, this));
_c5 = NavigationMenuTrigger;
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = /*#__PURE__*/ React.forwardRef(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(NavigationMenuPrimitive.Content, {
        ref: ref,
        className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/navigation-menu.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c7 = NavigationMenuContent;
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("div", {
        className: cn("absolute left-0 top-full flex justify-center"),
        children: /*#__PURE__*/ _jsxDEV(NavigationMenuPrimitive.Viewport, {
            className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className),
            ref: ref,
            ...props
        }, void 0, false, {
            fileName: "/app/src/components/ui/navigation-menu.tsx",
            lineNumber: 81,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/navigation-menu.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this));
_c8 = NavigationMenuViewport;
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = /*#__PURE__*/ React.forwardRef(_c9 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(NavigationMenuPrimitive.Indicator, {
        ref: ref,
        className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className),
        ...props,
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
        }, void 0, false, {
            fileName: "/app/src/components/ui/navigation-menu.tsx",
            lineNumber: 105,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/navigation-menu.tsx",
        lineNumber: 97,
        columnNumber: 3
    }, this));
_c10 = NavigationMenuIndicator;
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
export { navigationMenuTriggerStyle, NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
$RefreshReg$(_c, "NavigationMenu$React.forwardRef");
$RefreshReg$(_c1, "NavigationMenu");
$RefreshReg$(_c2, "NavigationMenuList$React.forwardRef");
$RefreshReg$(_c3, "NavigationMenuList");
$RefreshReg$(_c4, "NavigationMenuTrigger$React.forwardRef");
$RefreshReg$(_c5, "NavigationMenuTrigger");
$RefreshReg$(_c6, "NavigationMenuContent$React.forwardRef");
$RefreshReg$(_c7, "NavigationMenuContent");
$RefreshReg$(_c8, "NavigationMenuViewport");
$RefreshReg$(_c9, "NavigationMenuIndicator$React.forwardRef");
$RefreshReg$(_c10, "NavigationMenuIndicator");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/navigation-menu.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/navigation-menu.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LW5hdmlnYXRpb24tbWVudVwiO1xuaW1wb3J0IHsgY3ZhIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiO1xuaW1wb3J0IHsgQ2hldnJvbkRvd24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IE5hdmlnYXRpb25NZW51ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuUm9vdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuUm9vdD5cbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5Sb290XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcInJlbGF0aXZlIHotMTAgZmxleCBtYXgtdy1tYXggZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8TmF2aWdhdGlvbk1lbnVWaWV3cG9ydCAvPlxuICA8L05hdmlnYXRpb25NZW51UHJpbWl0aXZlLlJvb3Q+XG4pKTtcbk5hdmlnYXRpb25NZW51LmRpc3BsYXlOYW1lID0gTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuUm9vdC5kaXNwbGF5TmFtZTtcblxuY29uc3QgTmF2aWdhdGlvbk1lbnVMaXN0ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuTGlzdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuTGlzdD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkxpc3RcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwiZ3JvdXAgZmxleCBmbGV4LTEgbGlzdC1ub25lIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTFcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbk5hdmlnYXRpb25NZW51TGlzdC5kaXNwbGF5TmFtZSA9IE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkxpc3QuZGlzcGxheU5hbWU7XG5cbmNvbnN0IE5hdmlnYXRpb25NZW51SXRlbSA9IE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkl0ZW07XG5cbmNvbnN0IG5hdmlnYXRpb25NZW51VHJpZ2dlclN0eWxlID0gY3ZhKFxuICBcImdyb3VwIGlubGluZS1mbGV4IGgtMTAgdy1tYXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctYmFja2dyb3VuZCBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwIGRhdGEtW2FjdGl2ZV06YmctYWNjZW50LzUwIGRhdGEtW3N0YXRlPW9wZW5dOmJnLWFjY2VudC81MFwiLFxuKTtcblxuY29uc3QgTmF2aWdhdGlvbk1lbnVUcmlnZ2VyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuVHJpZ2dlcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuVHJpZ2dlcj5cbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5UcmlnZ2VyXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihuYXZpZ2F0aW9uTWVudVRyaWdnZXJTdHlsZSgpLCBcImdyb3VwXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8Q2hldnJvbkRvd25cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRvcC1bMXB4XSBtbC0xIGgtMyB3LTMgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZ3JvdXAtZGF0YS1bc3RhdGU9b3Blbl06cm90YXRlLTE4MFwiXG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIC8+XG4gIDwvTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuVHJpZ2dlcj5cbikpO1xuTmF2aWdhdGlvbk1lbnVUcmlnZ2VyLmRpc3BsYXlOYW1lID0gTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuVHJpZ2dlci5kaXNwbGF5TmFtZTtcblxuY29uc3QgTmF2aWdhdGlvbk1lbnVDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuQ29udGVudD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuQ29udGVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkNvbnRlbnRcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJsZWZ0LTAgdG9wLTAgdy1mdWxsIGRhdGEtW21vdGlvbl49ZnJvbS1dOmFuaW1hdGUtaW4gZGF0YS1bbW90aW9uXj10by1dOmFuaW1hdGUtb3V0IGRhdGEtW21vdGlvbl49ZnJvbS1dOmZhZGUtaW4gZGF0YS1bbW90aW9uXj10by1dOmZhZGUtb3V0IGRhdGEtW21vdGlvbj1mcm9tLWVuZF06c2xpZGUtaW4tZnJvbS1yaWdodC01MiBkYXRhLVttb3Rpb249ZnJvbS1zdGFydF06c2xpZGUtaW4tZnJvbS1sZWZ0LTUyIGRhdGEtW21vdGlvbj10by1lbmRdOnNsaWRlLW91dC10by1yaWdodC01MiBkYXRhLVttb3Rpb249dG8tc3RhcnRdOnNsaWRlLW91dC10by1sZWZ0LTUyIG1kOmFic29sdXRlIG1kOnctYXV0b1wiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5OYXZpZ2F0aW9uTWVudUNvbnRlbnQuZGlzcGxheU5hbWUgPSBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBOYXZpZ2F0aW9uTWVudUxpbmsgPSBOYXZpZ2F0aW9uTWVudVByaW1pdGl2ZS5MaW5rO1xuXG5jb25zdCBOYXZpZ2F0aW9uTWVudVZpZXdwb3J0ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuVmlld3BvcnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlZpZXdwb3J0PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17Y24oXCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiKX0+XG4gICAgPE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlZpZXdwb3J0XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcIm9yaWdpbi10b3AtY2VudGVyIHJlbGF0aXZlIG10LTEuNSBoLVt2YXIoLS1yYWRpeC1uYXZpZ2F0aW9uLW1lbnUtdmlld3BvcnQtaGVpZ2h0KV0gdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHRleHQtcG9wb3Zlci1mb3JlZ3JvdW5kIHNoYWRvdy1sZyBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTkwIG1kOnctW3ZhcigtLXJhZGl4LW5hdmlnYXRpb24tbWVudS12aWV3cG9ydC13aWR0aCldXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L2Rpdj5cbikpO1xuTmF2aWdhdGlvbk1lbnVWaWV3cG9ydC5kaXNwbGF5TmFtZSA9IE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLlZpZXdwb3J0LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBOYXZpZ2F0aW9uTWVudUluZGljYXRvciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkluZGljYXRvcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuSW5kaWNhdG9yPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8TmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuSW5kaWNhdG9yXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwidG9wLWZ1bGwgei1bMV0gZmxleCBoLTEuNSBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGRhdGEtW3N0YXRlPXZpc2libGVdOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9aGlkZGVuXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1oaWRkZW5dOmZhZGUtb3V0IGRhdGEtW3N0YXRlPXZpc2libGVdOmZhZGUtaW5cIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLVs2MCVdIGgtMiB3LTIgcm90YXRlLTQ1IHJvdW5kZWQtdGwtc20gYmctYm9yZGVyIHNoYWRvdy1tZFwiIC8+XG4gIDwvTmF2aWdhdGlvbk1lbnVQcmltaXRpdmUuSW5kaWNhdG9yPlxuKSk7XG5OYXZpZ2F0aW9uTWVudUluZGljYXRvci5kaXNwbGF5TmFtZSA9IE5hdmlnYXRpb25NZW51UHJpbWl0aXZlLkluZGljYXRvci5kaXNwbGF5TmFtZTtcblxuZXhwb3J0IHtcbiAgbmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUsXG4gIE5hdmlnYXRpb25NZW51LFxuICBOYXZpZ2F0aW9uTWVudUxpc3QsXG4gIE5hdmlnYXRpb25NZW51SXRlbSxcbiAgTmF2aWdhdGlvbk1lbnVDb250ZW50LFxuICBOYXZpZ2F0aW9uTWVudVRyaWdnZXIsXG4gIE5hdmlnYXRpb25NZW51TGluayxcbiAgTmF2aWdhdGlvbk1lbnVJbmRpY2F0b3IsXG4gIE5hdmlnYXRpb25NZW51Vmlld3BvcnQsXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmlnYXRpb25NZW51UHJpbWl0aXZlIiwiY3ZhIiwiQ2hldnJvbkRvd24iLCJjbiIsIk5hdmlnYXRpb25NZW51IiwiZm9yd2FyZFJlZiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJyZWYiLCJSb290IiwiTmF2aWdhdGlvbk1lbnVWaWV3cG9ydCIsImRpc3BsYXlOYW1lIiwiTmF2aWdhdGlvbk1lbnVMaXN0IiwiTGlzdCIsIk5hdmlnYXRpb25NZW51SXRlbSIsIkl0ZW0iLCJuYXZpZ2F0aW9uTWVudVRyaWdnZXJTdHlsZSIsIk5hdmlnYXRpb25NZW51VHJpZ2dlciIsIlRyaWdnZXIiLCJhcmlhLWhpZGRlbiIsIk5hdmlnYXRpb25NZW51Q29udGVudCIsIkNvbnRlbnQiLCJOYXZpZ2F0aW9uTWVudUxpbmsiLCJMaW5rIiwiZGl2IiwiVmlld3BvcnQiLCJOYXZpZ2F0aW9uTWVudUluZGljYXRvciIsIkluZGljYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZQSxXQUFXLFFBQVE7QUFDL0IsWUFBWUMsNkJBQTZCLGtDQUFrQztBQUMzRSxTQUFTQyxHQUFHLFFBQVEsMkJBQTJCO0FBQy9DLFNBQVNDLFdBQVcsUUFBUSxlQUFlO0FBRTNDLFNBQVNDLEVBQUUsUUFBUSxjQUFjO0FBRWpDLE1BQU1DLCtCQUFpQkwsTUFBTU0sVUFBVSxNQUdyQyxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFLEdBQUdDLE9BQU8sRUFBRUMsb0JBQ3BDLFFBQUNULHdCQUF3QlUsSUFBSTtRQUMzQkQsS0FBS0E7UUFDTEgsV0FBV0gsR0FBRyxtRUFBbUVHO1FBQ2hGLEdBQUdFLEtBQUs7O1lBRVJEOzBCQUNELFFBQUNJOzs7Ozs7Ozs7Ozs7QUFHTFAsZUFBZVEsV0FBVyxHQUFHWix3QkFBd0JVLElBQUksQ0FBQ0UsV0FBVztBQUVyRSxNQUFNQyxtQ0FBcUJkLE1BQU1NLFVBQVUsT0FHekMsQ0FBQyxFQUFFQyxTQUFTLEVBQUUsR0FBR0UsT0FBTyxFQUFFQyxvQkFDMUIsUUFBQ1Qsd0JBQXdCYyxJQUFJO1FBQzNCTCxLQUFLQTtRQUNMSCxXQUFXSCxHQUFHLHFFQUFxRUc7UUFDbEYsR0FBR0UsS0FBSzs7Ozs7OztBQUdiSyxtQkFBbUJELFdBQVcsR0FBR1osd0JBQXdCYyxJQUFJLENBQUNGLFdBQVc7QUFFekUsTUFBTUcscUJBQXFCZix3QkFBd0JnQixJQUFJO0FBRXZELE1BQU1DLDZCQUE2QmhCLElBQ2pDO0FBR0YsTUFBTWlCLHNDQUF3Qm5CLE1BQU1NLFVBQVUsT0FHNUMsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyxPQUFPLEVBQUVDLG9CQUNwQyxRQUFDVCx3QkFBd0JtQixPQUFPO1FBQzlCVixLQUFLQTtRQUNMSCxXQUFXSCxHQUFHYyw4QkFBOEIsU0FBU1g7UUFDcEQsR0FBR0UsS0FBSzs7WUFFUkQ7WUFBVTswQkFDWCxRQUFDTDtnQkFDQ0ksV0FBVTtnQkFDVmMsZUFBWTs7Ozs7Ozs7Ozs7OztBQUlsQkYsc0JBQXNCTixXQUFXLEdBQUdaLHdCQUF3Qm1CLE9BQU8sQ0FBQ1AsV0FBVztBQUUvRSxNQUFNUyxzQ0FBd0J0QixNQUFNTSxVQUFVLE9BRzVDLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdFLE9BQU8sRUFBRUMsb0JBQzFCLFFBQUNULHdCQUF3QnNCLE9BQU87UUFDOUJiLEtBQUtBO1FBQ0xILFdBQVdILEdBQ1QseVZBQ0FHO1FBRUQsR0FBR0UsS0FBSzs7Ozs7OztBQUdiYSxzQkFBc0JULFdBQVcsR0FBR1osd0JBQXdCc0IsT0FBTyxDQUFDVixXQUFXO0FBRS9FLE1BQU1XLHFCQUFxQnZCLHdCQUF3QndCLElBQUk7QUFFdkQsTUFBTWIsdUNBQXlCWixNQUFNTSxVQUFVLENBRzdDLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdFLE9BQU8sRUFBRUMsb0JBQzFCLFFBQUNnQjtRQUFJbkIsV0FBV0gsR0FBRztrQkFDakIsY0FBQSxRQUFDSCx3QkFBd0IwQixRQUFRO1lBQy9CcEIsV0FBV0gsR0FDVCx5VkFDQUc7WUFFRkcsS0FBS0E7WUFDSixHQUFHRCxLQUFLOzs7Ozs7Ozs7OztNQVhURztBQWVOQSx1QkFBdUJDLFdBQVcsR0FBR1osd0JBQXdCMEIsUUFBUSxDQUFDZCxXQUFXO0FBRWpGLE1BQU1lLHdDQUEwQjVCLE1BQU1NLFVBQVUsT0FHOUMsQ0FBQyxFQUFFQyxTQUFTLEVBQUUsR0FBR0UsT0FBTyxFQUFFQyxvQkFDMUIsUUFBQ1Qsd0JBQXdCNEIsU0FBUztRQUNoQ25CLEtBQUtBO1FBQ0xILFdBQVdILEdBQ1QsZ01BQ0FHO1FBRUQsR0FBR0UsS0FBSztrQkFFVCxjQUFBLFFBQUNpQjtZQUFJbkIsV0FBVTs7Ozs7Ozs7Ozs7O0FBR25CcUIsd0JBQXdCZixXQUFXLEdBQUdaLHdCQUF3QjRCLFNBQVMsQ0FBQ2hCLFdBQVc7QUFFbkYsU0FDRUssMEJBQTBCLEVBQzFCYixjQUFjLEVBQ2RTLGtCQUFrQixFQUNsQkUsa0JBQWtCLEVBQ2xCTSxxQkFBcUIsRUFDckJILHFCQUFxQixFQUNyQkssa0JBQWtCLEVBQ2xCSSx1QkFBdUIsRUFDdkJoQixzQkFBc0IsR0FDdEIifQ==