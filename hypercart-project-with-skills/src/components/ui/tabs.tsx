import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/tabs.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/tabs.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as TabsPrimitive from "/node_modules/.vite/deps/@radix-ui_react-tabs.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const Tabs = TabsPrimitive.Root;
const TabsList = /*#__PURE__*/ React.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(TabsPrimitive.List, {
        ref: ref,
        className: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/tabs.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = TabsList;
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(TabsPrimitive.Trigger, {
        ref: ref,
        className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/tabs.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = TabsTrigger;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(TabsPrimitive.Content, {
        ref: ref,
        className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, this));
_c5 = TabsContent;
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { Tabs, TabsList, TabsTrigger, TabsContent };
var _c, _c1, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "TabsList$React.forwardRef");
$RefreshReg$(_c1, "TabsList");
$RefreshReg$(_c2, "TabsTrigger$React.forwardRef");
$RefreshReg$(_c3, "TabsTrigger");
$RefreshReg$(_c4, "TabsContent$React.forwardRef");
$RefreshReg$(_c5, "TabsContent");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/tabs.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/tabs.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVGFic1ByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXRhYnNcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgVGFicyA9IFRhYnNQcmltaXRpdmUuUm9vdDtcblxuY29uc3QgVGFic0xpc3QgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBUYWJzUHJpbWl0aXZlLkxpc3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFRhYnNQcmltaXRpdmUuTGlzdD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFRhYnNQcmltaXRpdmUuTGlzdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImlubGluZS1mbGV4IGgtMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctbXV0ZWQgcC0xIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5UYWJzTGlzdC5kaXNwbGF5TmFtZSA9IFRhYnNQcmltaXRpdmUuTGlzdC5kaXNwbGF5TmFtZTtcblxuY29uc3QgVGFic1RyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBUYWJzUHJpbWl0aXZlLlRyaWdnZXI+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFRhYnNQcmltaXRpdmUuVHJpZ2dlcj5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFRhYnNQcmltaXRpdmUuVHJpZ2dlclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLXNtIHB4LTMgcHktMS41IHRleHQtc20gZm9udC1tZWRpdW0gcmluZy1vZmZzZXQtYmFja2dyb3VuZCB0cmFuc2l0aW9uLWFsbCBkYXRhLVtzdGF0ZT1hY3RpdmVdOmJnLWJhY2tncm91bmQgZGF0YS1bc3RhdGU9YWN0aXZlXTp0ZXh0LWZvcmVncm91bmQgZGF0YS1bc3RhdGU9YWN0aXZlXTpzaGFkb3ctc20gZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5UYWJzVHJpZ2dlci5kaXNwbGF5TmFtZSA9IFRhYnNQcmltaXRpdmUuVHJpZ2dlci5kaXNwbGF5TmFtZTtcblxuY29uc3QgVGFic0NvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBUYWJzUHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFRhYnNQcmltaXRpdmUuQ29udGVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFRhYnNQcmltaXRpdmUuQ29udGVudFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcIm10LTIgcmluZy1vZmZzZXQtYmFja2dyb3VuZCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTJcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuVGFic0NvbnRlbnQuZGlzcGxheU5hbWUgPSBUYWJzUHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XG5cbmV4cG9ydCB7IFRhYnMsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciwgVGFic0NvbnRlbnQgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYnNQcmltaXRpdmUiLCJjbiIsIlRhYnMiLCJSb290IiwiVGFic0xpc3QiLCJmb3J3YXJkUmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJMaXN0IiwiZGlzcGxheU5hbWUiLCJUYWJzVHJpZ2dlciIsIlRyaWdnZXIiLCJUYWJzQ29udGVudCIsIkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWUEsV0FBVyxRQUFRO0FBQy9CLFlBQVlDLG1CQUFtQix1QkFBdUI7QUFFdEQsU0FBU0MsRUFBRSxRQUFRLGNBQWM7QUFFakMsTUFBTUMsT0FBT0YsY0FBY0csSUFBSTtBQUUvQixNQUFNQyx5QkFBV0wsTUFBTU0sVUFBVSxNQUcvQixDQUFDLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPLEVBQUVDLG9CQUMxQixRQUFDUixjQUFjUyxJQUFJO1FBQ2pCRCxLQUFLQTtRQUNMRixXQUFXTCxHQUNULDhGQUNBSztRQUVELEdBQUdDLEtBQUs7Ozs7Ozs7QUFHYkgsU0FBU00sV0FBVyxHQUFHVixjQUFjUyxJQUFJLENBQUNDLFdBQVc7QUFFckQsTUFBTUMsNEJBQWNaLE1BQU1NLFVBQVUsT0FHbEMsQ0FBQyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyxvQkFDMUIsUUFBQ1IsY0FBY1ksT0FBTztRQUNwQkosS0FBS0E7UUFDTEYsV0FBV0wsR0FDVCx1WUFDQUs7UUFFRCxHQUFHQyxLQUFLOzs7Ozs7O0FBR2JJLFlBQVlELFdBQVcsR0FBR1YsY0FBY1ksT0FBTyxDQUFDRixXQUFXO0FBRTNELE1BQU1HLDRCQUFjZCxNQUFNTSxVQUFVLE9BR2xDLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLE9BQU8sRUFBRUMsb0JBQzFCLFFBQUNSLGNBQWNjLE9BQU87UUFDcEJOLEtBQUtBO1FBQ0xGLFdBQVdMLEdBQ1QsbUlBQ0FLO1FBRUQsR0FBR0MsS0FBSzs7Ozs7OztBQUdiTSxZQUFZSCxXQUFXLEdBQUdWLGNBQWNjLE9BQU8sQ0FBQ0osV0FBVztBQUUzRCxTQUFTUixJQUFJLEVBQUVFLFFBQVEsRUFBRU8sV0FBVyxFQUFFRSxXQUFXLEdBQUcifQ==