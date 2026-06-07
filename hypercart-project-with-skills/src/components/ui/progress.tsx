import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/progress.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/progress.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as ProgressPrimitive from "/node_modules/.vite/deps/@radix-ui_react-progress.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const Progress = /*#__PURE__*/ React.forwardRef(_c = ({ className, value, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(ProgressPrimitive.Root, {
        ref: ref,
        className: cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
        ...props,
        children: /*#__PURE__*/ _jsxDEV(ProgressPrimitive.Indicator, {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "/app/src/components/ui/progress.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/progress.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this));
_c1 = Progress;
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress };
var _c, _c1;
$RefreshReg$(_c, "Progress$React.forwardRef");
$RefreshReg$(_c1, "Progress");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/progress.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/progress.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFByb2dyZXNzUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtcHJvZ3Jlc3NcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgUHJvZ3Jlc3MgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBQcm9ncmVzc1ByaW1pdGl2ZS5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBQcm9ncmVzc1ByaW1pdGl2ZS5Sb290PlxuPigoeyBjbGFzc05hbWUsIHZhbHVlLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFByb2dyZXNzUHJpbWl0aXZlLlJvb3RcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwicmVsYXRpdmUgaC00IHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsIGJnLXNlY29uZGFyeVwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxQcm9ncmVzc1ByaW1pdGl2ZS5JbmRpY2F0b3JcbiAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleC0xIGJnLXByaW1hcnkgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHsxMDAgLSAodmFsdWUgfHwgMCl9JSlgIH19XG4gICAgLz5cbiAgPC9Qcm9ncmVzc1ByaW1pdGl2ZS5Sb290PlxuKSk7XG5Qcm9ncmVzcy5kaXNwbGF5TmFtZSA9IFByb2dyZXNzUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWU7XG5cbmV4cG9ydCB7IFByb2dyZXNzIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9ncmVzc1ByaW1pdGl2ZSIsImNuIiwiUHJvZ3Jlc3MiLCJmb3J3YXJkUmVmIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJwcm9wcyIsInJlZiIsIlJvb3QiLCJJbmRpY2F0b3IiLCJzdHlsZSIsInRyYW5zZm9ybSIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUMvQixZQUFZQyx1QkFBdUIsMkJBQTJCO0FBRTlELFNBQVNDLEVBQUUsUUFBUSxjQUFjO0FBRWpDLE1BQU1DLHlCQUFXSCxNQUFNSSxVQUFVLE1BRy9CLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyxvQkFDakMsUUFBQ1Asa0JBQWtCUSxJQUFJO1FBQ3JCRCxLQUFLQTtRQUNMSCxXQUFXSCxHQUFHLGlFQUFpRUc7UUFDOUUsR0FBR0UsS0FBSztrQkFFVCxjQUFBLFFBQUNOLGtCQUFrQlMsU0FBUztZQUMxQkwsV0FBVTtZQUNWTSxPQUFPO2dCQUFFQyxXQUFXLENBQUMsWUFBWSxFQUFFLE1BQU9OLENBQUFBLFNBQVMsQ0FBQSxFQUFHLEVBQUUsQ0FBQztZQUFDOzs7Ozs7Ozs7Ozs7QUFJaEVILFNBQVNVLFdBQVcsR0FBR1osa0JBQWtCUSxJQUFJLENBQUNJLFdBQVc7QUFFekQsU0FBU1YsUUFBUSxHQUFHIn0=