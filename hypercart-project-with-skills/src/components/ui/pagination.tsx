import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/pagination.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/pagination.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { ChevronLeft, ChevronRight, MoreHorizontal } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
import { buttonVariants } from "/src/components/ui/button.tsx";
const Pagination = ({ className, ...props })=>/*#__PURE__*/ _jsxDEV("nav", {
        role: "navigation",
        "aria-label": "pagination",
        className: cn("mx-auto flex w-full justify-center", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/pagination.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, this);
_c = Pagination;
Pagination.displayName = "Pagination";
const PaginationContent = /*#__PURE__*/ React.forwardRef(_c1 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("ul", {
        ref: ref,
        className: cn("flex flex-row items-center gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/pagination.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this));
_c2 = PaginationContent;
PaginationContent.displayName = "PaginationContent";
const PaginationItem = /*#__PURE__*/ React.forwardRef(_c3 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("li", {
        ref: ref,
        className: cn("", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/pagination.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this));
_c4 = PaginationItem;
PaginationItem.displayName = "PaginationItem";
const PaginationLink = ({ className, isActive, size = "icon", ...props })=>/*#__PURE__*/ _jsxDEV("a", {
        "aria-current": isActive ? "page" : undefined,
        className: cn(buttonVariants({
            variant: isActive ? "outline" : "ghost",
            size
        }), className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/pagination.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, this);
_c5 = PaginationLink;
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({ className, ...props })=>/*#__PURE__*/ _jsxDEV(PaginationLink, {
        "aria-label": "Go to previous page",
        size: "default",
        className: cn("gap-1 pl-2.5", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV(ChevronLeft, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/app/src/components/ui/pagination.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("span", {
                children: "Previous"
            }, void 0, false, {
                fileName: "/app/src/components/ui/pagination.tsx",
                lineNumber: 52,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/pagination.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, this);
_c6 = PaginationPrevious;
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({ className, ...props })=>/*#__PURE__*/ _jsxDEV(PaginationLink, {
        "aria-label": "Go to next page",
        size: "default",
        className: cn("gap-1 pr-2.5", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV("span", {
                children: "Next"
            }, void 0, false, {
                fileName: "/app/src/components/ui/pagination.tsx",
                lineNumber: 59,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV(ChevronRight, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/app/src/components/ui/pagination.tsx",
                lineNumber: 60,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/pagination.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this);
_c7 = PaginationNext;
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = ({ className, ...props })=>/*#__PURE__*/ _jsxDEV("span", {
        "aria-hidden": true,
        className: cn("flex h-9 w-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV(MoreHorizontal, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/app/src/components/ui/pagination.tsx",
                lineNumber: 67,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("span", {
                className: "sr-only",
                children: "More pages"
            }, void 0, false, {
                fileName: "/app/src/components/ui/pagination.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/pagination.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, this);
_c8 = PaginationEllipsis;
PaginationEllipsis.displayName = "PaginationEllipsis";
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
$RefreshReg$(_c, "Pagination");
$RefreshReg$(_c1, "PaginationContent$React.forwardRef");
$RefreshReg$(_c2, "PaginationContent");
$RefreshReg$(_c3, "PaginationItem$React.forwardRef");
$RefreshReg$(_c4, "PaginationItem");
$RefreshReg$(_c5, "PaginationLink");
$RefreshReg$(_c6, "PaginationPrevious");
$RefreshReg$(_c7, "PaginationNext");
$RefreshReg$(_c8, "PaginationEllipsis");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/pagination.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/pagination.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hldnJvbkxlZnQsIENoZXZyb25SaWdodCwgTW9yZUhvcml6b250YWwgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBCdXR0b25Qcm9wcywgYnV0dG9uVmFyaWFudHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcIm5hdlwiPikgPT4gKFxuICA8bmF2XG4gICAgcm9sZT1cIm5hdmlnYXRpb25cIlxuICAgIGFyaWEtbGFiZWw9XCJwYWdpbmF0aW9uXCJcbiAgICBjbGFzc05hbWU9e2NuKFwibXgtYXV0byBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlclwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5QYWdpbmF0aW9uLmRpc3BsYXlOYW1lID0gXCJQYWdpbmF0aW9uXCI7XG5cbmNvbnN0IFBhZ2luYXRpb25Db250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MVUxpc3RFbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcInVsXCI+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8dWwgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oXCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtMVwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gICksXG4pO1xuUGFnaW5hdGlvbkNvbnRlbnQuZGlzcGxheU5hbWUgPSBcIlBhZ2luYXRpb25Db250ZW50XCI7XG5cbmNvbnN0IFBhZ2luYXRpb25JdGVtID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MTElFbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcImxpXCI+PigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8bGkgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oXCJcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuKSk7XG5QYWdpbmF0aW9uSXRlbS5kaXNwbGF5TmFtZSA9IFwiUGFnaW5hdGlvbkl0ZW1cIjtcblxudHlwZSBQYWdpbmF0aW9uTGlua1Byb3BzID0ge1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG59ICYgUGljazxCdXR0b25Qcm9wcywgXCJzaXplXCI+ICZcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJhXCI+O1xuXG5jb25zdCBQYWdpbmF0aW9uTGluayA9ICh7IGNsYXNzTmFtZSwgaXNBY3RpdmUsIHNpemUgPSBcImljb25cIiwgLi4ucHJvcHMgfTogUGFnaW5hdGlvbkxpbmtQcm9wcykgPT4gKFxuICA8YVxuICAgIGFyaWEtY3VycmVudD17aXNBY3RpdmUgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgYnV0dG9uVmFyaWFudHMoe1xuICAgICAgICB2YXJpYW50OiBpc0FjdGl2ZSA/IFwib3V0bGluZVwiIDogXCJnaG9zdFwiLFxuICAgICAgICBzaXplLFxuICAgICAgfSksXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuUGFnaW5hdGlvbkxpbmsuZGlzcGxheU5hbWUgPSBcIlBhZ2luYXRpb25MaW5rXCI7XG5cbmNvbnN0IFBhZ2luYXRpb25QcmV2aW91cyA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFBhZ2luYXRpb25MaW5rPikgPT4gKFxuICA8UGFnaW5hdGlvbkxpbmsgYXJpYS1sYWJlbD1cIkdvIHRvIHByZXZpb3VzIHBhZ2VcIiBzaXplPVwiZGVmYXVsdFwiIGNsYXNzTmFtZT17Y24oXCJnYXAtMSBwbC0yLjVcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cbiAgICA8Q2hldnJvbkxlZnQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgPHNwYW4+UHJldmlvdXM8L3NwYW4+XG4gIDwvUGFnaW5hdGlvbkxpbms+XG4pO1xuUGFnaW5hdGlvblByZXZpb3VzLmRpc3BsYXlOYW1lID0gXCJQYWdpbmF0aW9uUHJldmlvdXNcIjtcblxuY29uc3QgUGFnaW5hdGlvbk5leHQgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBQYWdpbmF0aW9uTGluaz4pID0+IChcbiAgPFBhZ2luYXRpb25MaW5rIGFyaWEtbGFiZWw9XCJHbyB0byBuZXh0IHBhZ2VcIiBzaXplPVwiZGVmYXVsdFwiIGNsYXNzTmFtZT17Y24oXCJnYXAtMSBwci0yLjVcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cbiAgICA8c3Bhbj5OZXh0PC9zcGFuPlxuICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gIDwvUGFnaW5hdGlvbkxpbms+XG4pO1xuUGFnaW5hdGlvbk5leHQuZGlzcGxheU5hbWUgPSBcIlBhZ2luYXRpb25OZXh0XCI7XG5cbmNvbnN0IFBhZ2luYXRpb25FbGxpcHNpcyA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJzcGFuXCI+KSA9PiAoXG4gIDxzcGFuIGFyaWEtaGlkZGVuIGNsYXNzTmFtZT17Y24oXCJmbGV4IGgtOSB3LTkgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XG4gICAgPE1vcmVIb3Jpem9udGFsIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Nb3JlIHBhZ2VzPC9zcGFuPlxuICA8L3NwYW4+XG4pO1xuUGFnaW5hdGlvbkVsbGlwc2lzLmRpc3BsYXlOYW1lID0gXCJQYWdpbmF0aW9uRWxsaXBzaXNcIjtcblxuZXhwb3J0IHtcbiAgUGFnaW5hdGlvbixcbiAgUGFnaW5hdGlvbkNvbnRlbnQsXG4gIFBhZ2luYXRpb25FbGxpcHNpcyxcbiAgUGFnaW5hdGlvbkl0ZW0sXG4gIFBhZ2luYXRpb25MaW5rLFxuICBQYWdpbmF0aW9uTmV4dCxcbiAgUGFnaW5hdGlvblByZXZpb3VzLFxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGV2cm9uTGVmdCIsIkNoZXZyb25SaWdodCIsIk1vcmVIb3Jpem9udGFsIiwiY24iLCJidXR0b25WYXJpYW50cyIsIlBhZ2luYXRpb24iLCJjbGFzc05hbWUiLCJwcm9wcyIsIm5hdiIsInJvbGUiLCJhcmlhLWxhYmVsIiwiZGlzcGxheU5hbWUiLCJQYWdpbmF0aW9uQ29udGVudCIsImZvcndhcmRSZWYiLCJyZWYiLCJ1bCIsIlBhZ2luYXRpb25JdGVtIiwibGkiLCJQYWdpbmF0aW9uTGluayIsImlzQWN0aXZlIiwic2l6ZSIsImEiLCJhcmlhLWN1cnJlbnQiLCJ1bmRlZmluZWQiLCJ2YXJpYW50IiwiUGFnaW5hdGlvblByZXZpb3VzIiwic3BhbiIsIlBhZ2luYXRpb25OZXh0IiwiUGFnaW5hdGlvbkVsbGlwc2lzIiwiYXJpYS1oaWRkZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWUEsV0FBVyxRQUFRO0FBQy9CLFNBQVNDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxjQUFjLFFBQVEsZUFBZTtBQUV6RSxTQUFTQyxFQUFFLFFBQVEsY0FBYztBQUNqQyxTQUFzQkMsY0FBYyxRQUFRLHlCQUF5QjtBQUVyRSxNQUFNQyxhQUFhLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLE9BQW9DLGlCQUN0RSxRQUFDQztRQUNDQyxNQUFLO1FBQ0xDLGNBQVc7UUFDWEosV0FBV0gsR0FBRyxzQ0FBc0NHO1FBQ25ELEdBQUdDLEtBQUs7Ozs7OztLQUxQRjtBQVFOQSxXQUFXTSxXQUFXLEdBQUc7QUFFekIsTUFBTUMsa0NBQW9CYixNQUFNYyxVQUFVLE9BQ3hDLENBQUMsRUFBRVAsU0FBUyxFQUFFLEdBQUdDLE9BQU8sRUFBRU8sb0JBQ3hCLFFBQUNDO1FBQUdELEtBQUtBO1FBQUtSLFdBQVdILEdBQUcsb0NBQW9DRztRQUFhLEdBQUdDLEtBQUs7Ozs7Ozs7QUFHekZLLGtCQUFrQkQsV0FBVyxHQUFHO0FBRWhDLE1BQU1LLCtCQUFpQmpCLE1BQU1jLFVBQVUsT0FBNEMsQ0FBQyxFQUFFUCxTQUFTLEVBQUUsR0FBR0MsT0FBTyxFQUFFTyxvQkFDM0csUUFBQ0c7UUFBR0gsS0FBS0E7UUFBS1IsV0FBV0gsR0FBRyxJQUFJRztRQUFhLEdBQUdDLEtBQUs7Ozs7Ozs7QUFFdkRTLGVBQWVMLFdBQVcsR0FBRztBQU83QixNQUFNTyxpQkFBaUIsQ0FBQyxFQUFFWixTQUFTLEVBQUVhLFFBQVEsRUFBRUMsT0FBTyxNQUFNLEVBQUUsR0FBR2IsT0FBNEIsaUJBQzNGLFFBQUNjO1FBQ0NDLGdCQUFjSCxXQUFXLFNBQVNJO1FBQ2xDakIsV0FBV0gsR0FDVEMsZUFBZTtZQUNib0IsU0FBU0wsV0FBVyxZQUFZO1lBQ2hDQztRQUNGLElBQ0FkO1FBRUQsR0FBR0MsS0FBSzs7Ozs7O01BVlBXO0FBYU5BLGVBQWVQLFdBQVcsR0FBRztBQUU3QixNQUFNYyxxQkFBcUIsQ0FBQyxFQUFFbkIsU0FBUyxFQUFFLEdBQUdDLE9BQW9ELGlCQUM5RixRQUFDVztRQUFlUixjQUFXO1FBQXNCVSxNQUFLO1FBQVVkLFdBQVdILEdBQUcsZ0JBQWdCRztRQUFhLEdBQUdDLEtBQUs7OzBCQUNqSCxRQUFDUDtnQkFBWU0sV0FBVTs7Ozs7OzBCQUN2QixRQUFDb0I7MEJBQUs7Ozs7Ozs7Ozs7OztNQUhKRDtBQU1OQSxtQkFBbUJkLFdBQVcsR0FBRztBQUVqQyxNQUFNZ0IsaUJBQWlCLENBQUMsRUFBRXJCLFNBQVMsRUFBRSxHQUFHQyxPQUFvRCxpQkFDMUYsUUFBQ1c7UUFBZVIsY0FBVztRQUFrQlUsTUFBSztRQUFVZCxXQUFXSCxHQUFHLGdCQUFnQkc7UUFBYSxHQUFHQyxLQUFLOzswQkFDN0csUUFBQ21COzBCQUFLOzs7Ozs7MEJBQ04sUUFBQ3pCO2dCQUFhSyxXQUFVOzs7Ozs7Ozs7Ozs7TUFIdEJxQjtBQU1OQSxlQUFlaEIsV0FBVyxHQUFHO0FBRTdCLE1BQU1pQixxQkFBcUIsQ0FBQyxFQUFFdEIsU0FBUyxFQUFFLEdBQUdDLE9BQXFDLGlCQUMvRSxRQUFDbUI7UUFBS0csYUFBVztRQUFDdkIsV0FBV0gsR0FBRyw0Q0FBNENHO1FBQWEsR0FBR0MsS0FBSzs7MEJBQy9GLFFBQUNMO2dCQUFlSSxXQUFVOzs7Ozs7MEJBQzFCLFFBQUNvQjtnQkFBS3BCLFdBQVU7MEJBQVU7Ozs7Ozs7Ozs7OztNQUh4QnNCO0FBTU5BLG1CQUFtQmpCLFdBQVcsR0FBRztBQUVqQyxTQUNFTixVQUFVLEVBQ1ZPLGlCQUFpQixFQUNqQmdCLGtCQUFrQixFQUNsQlosY0FBYyxFQUNkRSxjQUFjLEVBQ2RTLGNBQWMsRUFDZEYsa0JBQWtCLEdBQ2xCIn0=