import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/scroll-area.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/scroll-area.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as ScrollAreaPrimitive from "/node_modules/.vite/deps/@radix-ui_react-scroll-area.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const ScrollArea = /*#__PURE__*/ React.forwardRef(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ScrollAreaPrimitive.Root, {
        ref: ref,
        className: cn("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV(ScrollAreaPrimitive.Viewport, {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "/app/src/components/ui/scroll-area.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV(ScrollBar, {}, void 0, false, {
                fileName: "/app/src/components/ui/scroll-area.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV(ScrollAreaPrimitive.Corner, {}, void 0, false, {
                fileName: "/app/src/components/ui/scroll-area.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/scroll-area.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this));
_c1 = ScrollArea;
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = /*#__PURE__*/ React.forwardRef(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ScrollAreaPrimitive.ScrollAreaScrollbar, {
        ref: ref,
        orientation: orientation,
        className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ _jsxDEV(ScrollAreaPrimitive.ScrollAreaThumb, {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "/app/src/components/ui/scroll-area.tsx",
            lineNumber: 33,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/scroll-area.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this));
_c2 = ScrollBar;
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
export { ScrollArea, ScrollBar };
var _c, _c1, _c2;
$RefreshReg$(_c, "ScrollArea$React.forwardRef");
$RefreshReg$(_c1, "ScrollArea");
$RefreshReg$(_c2, "ScrollBar");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/scroll-area.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/scroll-area.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC1hcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFNjcm9sbEFyZWFQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zY3JvbGwtYXJlYVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBTY3JvbGxBcmVhID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTY3JvbGxBcmVhUHJpbWl0aXZlLlJvb3Q+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290IHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKFwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XG4gICAgPFNjcm9sbEFyZWFQcmltaXRpdmUuVmlld3BvcnQgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLVtpbmhlcml0XVwiPntjaGlsZHJlbn08L1Njcm9sbEFyZWFQcmltaXRpdmUuVmlld3BvcnQ+XG4gICAgPFNjcm9sbEJhciAvPlxuICAgIDxTY3JvbGxBcmVhUHJpbWl0aXZlLkNvcm5lciAvPlxuICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuUm9vdD5cbikpO1xuU2Nyb2xsQXJlYS5kaXNwbGF5TmFtZSA9IFNjcm9sbEFyZWFQcmltaXRpdmUuUm9vdC5kaXNwbGF5TmFtZTtcblxuY29uc3QgU2Nyb2xsQmFyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhU2Nyb2xsYmFyPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXI+XG4+KCh7IGNsYXNzTmFtZSwgb3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCIsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhU2Nyb2xsYmFyXG4gICAgcmVmPXtyZWZ9XG4gICAgb3JpZW50YXRpb249e29yaWVudGF0aW9ufVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggdG91Y2gtbm9uZSBzZWxlY3Qtbm9uZSB0cmFuc2l0aW9uLWNvbG9yc1wiLFxuICAgICAgb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiAmJiBcImgtZnVsbCB3LTIuNSBib3JkZXItbCBib3JkZXItbC10cmFuc3BhcmVudCBwLVsxcHhdXCIsXG4gICAgICBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiYgXCJoLTIuNSBmbGV4LWNvbCBib3JkZXItdCBib3JkZXItdC10cmFuc3BhcmVudCBwLVsxcHhdXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhVGh1bWIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xIHJvdW5kZWQtZnVsbCBiZy1ib3JkZXJcIiAvPlxuICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhcj5cbikpO1xuU2Nyb2xsQmFyLmRpc3BsYXlOYW1lID0gU2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhU2Nyb2xsYmFyLmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBTY3JvbGxBcmVhLCBTY3JvbGxCYXIgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNjcm9sbEFyZWFQcmltaXRpdmUiLCJjbiIsIlNjcm9sbEFyZWEiLCJmb3J3YXJkUmVmIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsInJlZiIsIlJvb3QiLCJWaWV3cG9ydCIsIlNjcm9sbEJhciIsIkNvcm5lciIsImRpc3BsYXlOYW1lIiwib3JpZW50YXRpb24iLCJTY3JvbGxBcmVhU2Nyb2xsYmFyIiwiU2Nyb2xsQXJlYVRodW1iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUMvQixZQUFZQyx5QkFBeUIsOEJBQThCO0FBRW5FLFNBQVNDLEVBQUUsUUFBUSxjQUFjO0FBRWpDLE1BQU1DLDJCQUFhSCxNQUFNSSxVQUFVLE1BR2pDLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyxvQkFDcEMsUUFBQ1Asb0JBQW9CUSxJQUFJO1FBQUNELEtBQUtBO1FBQUtILFdBQVdILEdBQUcsNEJBQTRCRztRQUFhLEdBQUdFLEtBQUs7OzBCQUNqRyxRQUFDTixvQkFBb0JTLFFBQVE7Z0JBQUNMLFdBQVU7MEJBQW1DQzs7Ozs7OzBCQUMzRSxRQUFDSzs7Ozs7MEJBQ0QsUUFBQ1Ysb0JBQW9CVyxNQUFNOzs7Ozs7Ozs7Ozs7QUFHL0JULFdBQVdVLFdBQVcsR0FBR1osb0JBQW9CUSxJQUFJLENBQUNJLFdBQVc7QUFFN0QsTUFBTUYsMEJBQVlYLE1BQU1JLFVBQVUsQ0FHaEMsQ0FBQyxFQUFFQyxTQUFTLEVBQUVTLGNBQWMsVUFBVSxFQUFFLEdBQUdQLE9BQU8sRUFBRUMsb0JBQ3BELFFBQUNQLG9CQUFvQmMsbUJBQW1CO1FBQ3RDUCxLQUFLQTtRQUNMTSxhQUFhQTtRQUNiVCxXQUFXSCxHQUNULGlEQUNBWSxnQkFBZ0IsY0FBYyxzREFDOUJBLGdCQUFnQixnQkFBZ0Isd0RBQ2hDVDtRQUVELEdBQUdFLEtBQUs7a0JBRVQsY0FBQSxRQUFDTixvQkFBb0JlLGVBQWU7WUFBQ1gsV0FBVTs7Ozs7Ozs7Ozs7TUFmN0NNO0FBa0JOQSxVQUFVRSxXQUFXLEdBQUdaLG9CQUFvQmMsbUJBQW1CLENBQUNGLFdBQVc7QUFFM0UsU0FBU1YsVUFBVSxFQUFFUSxTQUFTLEdBQUcifQ==