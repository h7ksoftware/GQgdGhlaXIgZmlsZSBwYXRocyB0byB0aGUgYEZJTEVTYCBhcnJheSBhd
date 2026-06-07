import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/alert.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/alert.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const alertVariants = cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ React.forwardRef(_c = ({ className, variant, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        role: "alert",
        className: cn(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/alert.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this));
_c1 = Alert;
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("h5", {
        ref: ref,
        className: cn("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/alert.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this));
_c3 = AlertTitle;
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        className: cn("text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/alert.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this));
_c5 = AlertDescription;
AlertDescription.displayName = "AlertDescription";
export { Alert, AlertTitle, AlertDescription };
var _c, _c1, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "Alert$React.forwardRef");
$RefreshReg$(_c1, "Alert");
$RefreshReg$(_c2, "AlertTitle$React.forwardRef");
$RefreshReg$(_c3, "AlertTitle");
$RefreshReg$(_c4, "AlertDescription$React.forwardRef");
$RefreshReg$(_c5, "AlertDescription");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/alert.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/alert.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IGFsZXJ0VmFyaWFudHMgPSBjdmEoXG4gIFwicmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIHAtNCBbJj5zdmd+Kl06cGwtNyBbJj5zdmcrZGl2XTp0cmFuc2xhdGUteS1bLTNweF0gWyY+c3ZnXTphYnNvbHV0ZSBbJj5zdmddOmxlZnQtNCBbJj5zdmddOnRvcC00IFsmPnN2Z106dGV4dC1mb3JlZ3JvdW5kXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImJnLWJhY2tncm91bmQgdGV4dC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIGRlc3RydWN0aXZlOiBcImJvcmRlci1kZXN0cnVjdGl2ZS81MCB0ZXh0LWRlc3RydWN0aXZlIGRhcms6Ym9yZGVyLWRlc3RydWN0aXZlIFsmPnN2Z106dGV4dC1kZXN0cnVjdGl2ZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmNvbnN0IEFsZXJ0ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiAmIFZhcmlhbnRQcm9wczx0eXBlb2YgYWxlcnRWYXJpYW50cz5cbj4oKHsgY2xhc3NOYW1lLCB2YXJpYW50LCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPGRpdiByZWY9e3JlZn0gcm9sZT1cImFsZXJ0XCIgY2xhc3NOYW1lPXtjbihhbGVydFZhcmlhbnRzKHsgdmFyaWFudCB9KSwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuKSk7XG5BbGVydC5kaXNwbGF5TmFtZSA9IFwiQWxlcnRcIjtcblxuY29uc3QgQWxlcnRUaXRsZSA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQsIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkaW5nRWxlbWVudD4+KFxuICAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICAgIDxoNSByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbihcIm1iLTEgZm9udC1tZWRpdW0gbGVhZGluZy1ub25lIHRyYWNraW5nLXRpZ2h0XCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbiAgKSxcbik7XG5BbGVydFRpdGxlLmRpc3BsYXlOYW1lID0gXCJBbGVydFRpdGxlXCI7XG5cbmNvbnN0IEFsZXJ0RGVzY3JpcHRpb24gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxQYXJhZ3JhcGhFbGVtZW50LCBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MUGFyYWdyYXBoRWxlbWVudD4+KFxuICAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oXCJ0ZXh0LXNtIFsmX3BdOmxlYWRpbmctcmVsYXhlZFwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gICksXG4pO1xuQWxlcnREZXNjcmlwdGlvbi5kaXNwbGF5TmFtZSA9IFwiQWxlcnREZXNjcmlwdGlvblwiO1xuXG5leHBvcnQgeyBBbGVydCwgQWxlcnRUaXRsZSwgQWxlcnREZXNjcmlwdGlvbiB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3ZhIiwiY24iLCJhbGVydFZhcmlhbnRzIiwidmFyaWFudHMiLCJ2YXJpYW50IiwiZGVmYXVsdCIsImRlc3RydWN0aXZlIiwiZGVmYXVsdFZhcmlhbnRzIiwiQWxlcnQiLCJmb3J3YXJkUmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJkaXYiLCJyb2xlIiwiZGlzcGxheU5hbWUiLCJBbGVydFRpdGxlIiwiaDUiLCJBbGVydERlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUMvQixTQUFTQyxHQUFHLFFBQTJCLDJCQUEyQjtBQUVsRSxTQUFTQyxFQUFFLFFBQVEsY0FBYztBQUVqQyxNQUFNQyxnQkFBZ0JGLElBQ3BCLDZKQUNBO0lBQ0VHLFVBQVU7UUFDUkMsU0FBUztZQUNQQyxTQUFTO1lBQ1RDLGFBQWE7UUFDZjtJQUNGO0lBQ0FDLGlCQUFpQjtRQUNmSCxTQUFTO0lBQ1g7QUFDRjtBQUdGLE1BQU1JLHNCQUFRVCxNQUFNVSxVQUFVLE1BRzVCLENBQUMsRUFBRUMsU0FBUyxFQUFFTixPQUFPLEVBQUUsR0FBR08sT0FBTyxFQUFFQyxvQkFDbkMsUUFBQ0M7UUFBSUQsS0FBS0E7UUFBS0UsTUFBSztRQUFRSixXQUFXVCxHQUFHQyxjQUFjO1lBQUVFO1FBQVEsSUFBSU07UUFBYSxHQUFHQyxLQUFLOzs7Ozs7O0FBRTdGSCxNQUFNTyxXQUFXLEdBQUc7QUFFcEIsTUFBTUMsMkJBQWFqQixNQUFNVSxVQUFVLE9BQ2pDLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLE9BQU8sRUFBRUMsb0JBQ3hCLFFBQUNLO1FBQUdMLEtBQUtBO1FBQUtGLFdBQVdULEdBQUcsZ0RBQWdEUztRQUFhLEdBQUdDLEtBQUs7Ozs7Ozs7QUFHckdLLFdBQVdELFdBQVcsR0FBRztBQUV6QixNQUFNRyxpQ0FBbUJuQixNQUFNVSxVQUFVLE9BQ3ZDLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLE9BQU8sRUFBRUMsb0JBQ3hCLFFBQUNDO1FBQUlELEtBQUtBO1FBQUtGLFdBQVdULEdBQUcsaUNBQWlDUztRQUFhLEdBQUdDLEtBQUs7Ozs7Ozs7QUFHdkZPLGlCQUFpQkgsV0FBVyxHQUFHO0FBRS9CLFNBQVNQLEtBQUssRUFBRVEsVUFBVSxFQUFFRSxnQkFBZ0IsR0FBRyJ9