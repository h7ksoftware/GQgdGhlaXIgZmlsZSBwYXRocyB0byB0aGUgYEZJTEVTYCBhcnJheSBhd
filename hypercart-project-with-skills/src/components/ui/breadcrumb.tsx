import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/breadcrumb.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/breadcrumb.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { Slot } from "/node_modules/.vite/deps/@radix-ui_react-slot.js?v=7dd7a232";
import { ChevronRight, MoreHorizontal } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const Breadcrumb = /*#__PURE__*/ React.forwardRef(_c = ({ ...props }, ref)=>/*#__PURE__*/ _jsxDEV("nav", {
        ref: ref,
        "aria-label": "breadcrumb",
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/breadcrumb.tsx",
        lineNumber: 12,
        columnNumber: 26
    }, this));
_c1 = Breadcrumb;
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("ol", {
        ref: ref,
        className: cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/breadcrumb.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this));
_c3 = BreadcrumbList;
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("li", {
        ref: ref,
        className: cn("inline-flex items-center gap-1.5", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/breadcrumb.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this));
_c5 = BreadcrumbItem;
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = /*#__PURE__*/ React.forwardRef(_c6 = ({ asChild, className, ...props }, ref)=>{
    const Comp = asChild ? Slot : "a";
    return /*#__PURE__*/ _jsxDEV(Comp, {
        ref: ref,
        className: cn("transition-colors hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/breadcrumb.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
});
_c7 = BreadcrumbLink;
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = /*#__PURE__*/ React.forwardRef(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("span", {
        ref: ref,
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: cn("font-normal text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/breadcrumb.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this));
_c9 = BreadcrumbPage;
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props })=>/*#__PURE__*/ _jsxDEV("li", {
        role: "presentation",
        "aria-hidden": "true",
        className: cn("[&>svg]:size-3.5", className),
        ...props,
        children: children ?? /*#__PURE__*/ _jsxDEV(ChevronRight, {}, void 0, false, {
            fileName: "/app/src/components/ui/breadcrumb.tsx",
            lineNumber: 64,
            columnNumber: 18
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/breadcrumb.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this);
_c10 = BreadcrumbSeparator;
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const BreadcrumbEllipsis = ({ className, ...props })=>/*#__PURE__*/ _jsxDEV("span", {
        role: "presentation",
        "aria-hidden": "true",
        className: cn("flex h-9 w-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV(MoreHorizontal, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/app/src/components/ui/breadcrumb.tsx",
                lineNumber: 76,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("span", {
                className: "sr-only",
                children: "More"
            }, void 0, false, {
                fileName: "/app/src/components/ui/breadcrumb.tsx",
                lineNumber: 77,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/breadcrumb.tsx",
        lineNumber: 70,
        columnNumber: 3
    }, this);
_c11 = BreadcrumbEllipsis;
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "Breadcrumb$React.forwardRef");
$RefreshReg$(_c1, "Breadcrumb");
$RefreshReg$(_c2, "BreadcrumbList$React.forwardRef");
$RefreshReg$(_c3, "BreadcrumbList");
$RefreshReg$(_c4, "BreadcrumbItem$React.forwardRef");
$RefreshReg$(_c5, "BreadcrumbItem");
$RefreshReg$(_c6, "BreadcrumbLink$React.forwardRef");
$RefreshReg$(_c7, "BreadcrumbLink");
$RefreshReg$(_c8, "BreadcrumbPage$React.forwardRef");
$RefreshReg$(_c9, "BreadcrumbPage");
$RefreshReg$(_c10, "BreadcrumbSeparator");
$RefreshReg$(_c11, "BreadcrumbEllipsis");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/breadcrumb.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/breadcrumb.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiO1xuaW1wb3J0IHsgQ2hldnJvblJpZ2h0LCBNb3JlSG9yaXpvbnRhbCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgQnJlYWRjcnVtYiA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxFbGVtZW50LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJuYXZcIj4gJiB7XG4gICAgc2VwYXJhdG9yPzogUmVhY3QuUmVhY3ROb2RlO1xuICB9XG4+KCh7IC4uLnByb3BzIH0sIHJlZikgPT4gPG5hdiByZWY9e3JlZn0gYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIiB7Li4ucHJvcHN9IC8+KTtcbkJyZWFkY3J1bWIuZGlzcGxheU5hbWUgPSBcIkJyZWFkY3J1bWJcIjtcblxuY29uc3QgQnJlYWRjcnVtYkxpc3QgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxPTGlzdEVsZW1lbnQsIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcIm9sXCI+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8b2xcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBicmVhay13b3JkcyB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBzbTpnYXAtMi41XCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbik7XG5CcmVhZGNydW1iTGlzdC5kaXNwbGF5TmFtZSA9IFwiQnJlYWRjcnVtYkxpc3RcIjtcblxuY29uc3QgQnJlYWRjcnVtYkl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxMSUVsZW1lbnQsIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImxpXCI+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8bGkgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oXCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gICksXG4pO1xuQnJlYWRjcnVtYkl0ZW0uZGlzcGxheU5hbWUgPSBcIkJyZWFkY3J1bWJJdGVtXCI7XG5cbmNvbnN0IEJyZWFkY3J1bWJMaW5rID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTEFuY2hvckVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImFcIj4gJiB7XG4gICAgYXNDaGlsZD86IGJvb2xlYW47XG4gIH1cbj4oKHsgYXNDaGlsZCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogXCJhXCI7XG5cbiAgcmV0dXJuIDxDb21wIHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKFwidHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz47XG59KTtcbkJyZWFkY3J1bWJMaW5rLmRpc3BsYXlOYW1lID0gXCJCcmVhZGNydW1iTGlua1wiO1xuXG5jb25zdCBCcmVhZGNydW1iUGFnZSA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTFNwYW5FbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJzcGFuXCI+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8c3BhblxuICAgICAgcmVmPXtyZWZ9XG4gICAgICByb2xlPVwibGlua1wiXG4gICAgICBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJmb250LW5vcm1hbCB0ZXh0LWZvcmVncm91bmRcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuKTtcbkJyZWFkY3J1bWJQYWdlLmRpc3BsYXlOYW1lID0gXCJCcmVhZGNydW1iUGFnZVwiO1xuXG5jb25zdCBCcmVhZGNydW1iU2VwYXJhdG9yID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJsaVwiPikgPT4gKFxuICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT17Y24oXCJbJj5zdmddOnNpemUtMy41XCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XG4gICAge2NoaWxkcmVuID8/IDxDaGV2cm9uUmlnaHQgLz59XG4gIDwvbGk+XG4pO1xuQnJlYWRjcnVtYlNlcGFyYXRvci5kaXNwbGF5TmFtZSA9IFwiQnJlYWRjcnVtYlNlcGFyYXRvclwiO1xuXG5jb25zdCBCcmVhZGNydW1iRWxsaXBzaXMgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwic3BhblwiPikgPT4gKFxuICA8c3BhblxuICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgY2xhc3NOYW1lPXtjbihcImZsZXggaC05IHctOSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8TW9yZUhvcml6b250YWwgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk1vcmU8L3NwYW4+XG4gIDwvc3Bhbj5cbik7XG5CcmVhZGNydW1iRWxsaXBzaXMuZGlzcGxheU5hbWUgPSBcIkJyZWFkY3J1bWJFbGlwc3Npc1wiO1xuXG5leHBvcnQge1xuICBCcmVhZGNydW1iLFxuICBCcmVhZGNydW1iTGlzdCxcbiAgQnJlYWRjcnVtYkl0ZW0sXG4gIEJyZWFkY3J1bWJMaW5rLFxuICBCcmVhZGNydW1iUGFnZSxcbiAgQnJlYWRjcnVtYlNlcGFyYXRvcixcbiAgQnJlYWRjcnVtYkVsbGlwc2lzLFxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJTbG90IiwiQ2hldnJvblJpZ2h0IiwiTW9yZUhvcml6b250YWwiLCJjbiIsIkJyZWFkY3J1bWIiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJuYXYiLCJhcmlhLWxhYmVsIiwiZGlzcGxheU5hbWUiLCJCcmVhZGNydW1iTGlzdCIsImNsYXNzTmFtZSIsIm9sIiwiQnJlYWRjcnVtYkl0ZW0iLCJsaSIsIkJyZWFkY3J1bWJMaW5rIiwiYXNDaGlsZCIsIkNvbXAiLCJCcmVhZGNydW1iUGFnZSIsInNwYW4iLCJyb2xlIiwiYXJpYS1kaXNhYmxlZCIsImFyaWEtY3VycmVudCIsIkJyZWFkY3J1bWJTZXBhcmF0b3IiLCJjaGlsZHJlbiIsImFyaWEtaGlkZGVuIiwiQnJlYWRjcnVtYkVsbGlwc2lzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUMvQixTQUFTQyxJQUFJLFFBQVEsdUJBQXVCO0FBQzVDLFNBQVNDLFlBQVksRUFBRUMsY0FBYyxRQUFRLGVBQWU7QUFFNUQsU0FBU0MsRUFBRSxRQUFRLGNBQWM7QUFFakMsTUFBTUMsMkJBQWFMLE1BQU1NLFVBQVUsTUFLakMsQ0FBQyxFQUFFLEdBQUdDLE9BQU8sRUFBRUMsb0JBQVEsUUFBQ0M7UUFBSUQsS0FBS0E7UUFBS0UsY0FBVztRQUFjLEdBQUdILEtBQUs7Ozs7Ozs7QUFDekVGLFdBQVdNLFdBQVcsR0FBRztBQUV6QixNQUFNQywrQkFBaUJaLE1BQU1NLFVBQVUsT0FDckMsQ0FBQyxFQUFFTyxTQUFTLEVBQUUsR0FBR04sT0FBTyxFQUFFQyxvQkFDeEIsUUFBQ007UUFDQ04sS0FBS0E7UUFDTEssV0FBV1QsR0FDVCw0RkFDQVM7UUFFRCxHQUFHTixLQUFLOzs7Ozs7O0FBSWZLLGVBQWVELFdBQVcsR0FBRztBQUU3QixNQUFNSSwrQkFBaUJmLE1BQU1NLFVBQVUsT0FDckMsQ0FBQyxFQUFFTyxTQUFTLEVBQUUsR0FBR04sT0FBTyxFQUFFQyxvQkFDeEIsUUFBQ1E7UUFBR1IsS0FBS0E7UUFBS0ssV0FBV1QsR0FBRyxvQ0FBb0NTO1FBQWEsR0FBR04sS0FBSzs7Ozs7OztBQUd6RlEsZUFBZUosV0FBVyxHQUFHO0FBRTdCLE1BQU1NLCtCQUFpQmpCLE1BQU1NLFVBQVUsT0FLckMsQ0FBQyxFQUFFWSxPQUFPLEVBQUVMLFNBQVMsRUFBRSxHQUFHTixPQUFPLEVBQUVDO0lBQ25DLE1BQU1XLE9BQU9ELFVBQVVqQixPQUFPO0lBRTlCLHFCQUFPLFFBQUNrQjtRQUFLWCxLQUFLQTtRQUFLSyxXQUFXVCxHQUFHLDJDQUEyQ1M7UUFBYSxHQUFHTixLQUFLOzs7Ozs7QUFDdkc7O0FBQ0FVLGVBQWVOLFdBQVcsR0FBRztBQUU3QixNQUFNUywrQkFBaUJwQixNQUFNTSxVQUFVLE9BQ3JDLENBQUMsRUFBRU8sU0FBUyxFQUFFLEdBQUdOLE9BQU8sRUFBRUMsb0JBQ3hCLFFBQUNhO1FBQ0NiLEtBQUtBO1FBQ0xjLE1BQUs7UUFDTEMsaUJBQWM7UUFDZEMsZ0JBQWE7UUFDYlgsV0FBV1QsR0FBRywrQkFBK0JTO1FBQzVDLEdBQUdOLEtBQUs7Ozs7Ozs7QUFJZmEsZUFBZVQsV0FBVyxHQUFHO0FBRTdCLE1BQU1jLHNCQUFzQixDQUFDLEVBQUVDLFFBQVEsRUFBRWIsU0FBUyxFQUFFLEdBQUdOLE9BQW1DLGlCQUN4RixRQUFDUztRQUFHTSxNQUFLO1FBQWVLLGVBQVk7UUFBT2QsV0FBV1QsR0FBRyxvQkFBb0JTO1FBQWEsR0FBR04sS0FBSztrQkFDL0ZtQiwwQkFBWSxRQUFDeEI7Ozs7Ozs7Ozs7T0FGWnVCO0FBS05BLG9CQUFvQmQsV0FBVyxHQUFHO0FBRWxDLE1BQU1pQixxQkFBcUIsQ0FBQyxFQUFFZixTQUFTLEVBQUUsR0FBR04sT0FBcUMsaUJBQy9FLFFBQUNjO1FBQ0NDLE1BQUs7UUFDTEssZUFBWTtRQUNaZCxXQUFXVCxHQUFHLDRDQUE0Q1M7UUFDekQsR0FBR04sS0FBSzs7MEJBRVQsUUFBQ0o7Z0JBQWVVLFdBQVU7Ozs7OzswQkFDMUIsUUFBQ1E7Z0JBQUtSLFdBQVU7MEJBQVU7Ozs7Ozs7Ozs7OztPQVJ4QmU7QUFXTkEsbUJBQW1CakIsV0FBVyxHQUFHO0FBRWpDLFNBQ0VOLFVBQVUsRUFDVk8sY0FBYyxFQUNkRyxjQUFjLEVBQ2RFLGNBQWMsRUFDZEcsY0FBYyxFQUNkSyxtQkFBbUIsRUFDbkJHLGtCQUFrQixHQUNsQiJ9