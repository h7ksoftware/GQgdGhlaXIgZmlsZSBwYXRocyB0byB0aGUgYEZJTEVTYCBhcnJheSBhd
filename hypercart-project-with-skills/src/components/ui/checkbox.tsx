import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/checkbox.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/checkbox.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as CheckboxPrimitive from "/node_modules/.vite/deps/@radix-ui_react-checkbox.js?v=7dd7a232";
import { Check } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const Checkbox = /*#__PURE__*/ React.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(CheckboxPrimitive.Root, {
        ref: ref,
        className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ _jsxDEV(CheckboxPrimitive.Indicator, {
            className: cn("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ _jsxDEV(Check, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/app/src/components/ui/checkbox.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "/app/src/components/ui/checkbox.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/checkbox.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this));
_c1 = Checkbox;
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
var _c, _c1;
$RefreshReg$(_c, "Checkbox$React.forwardRef");
$RefreshReg$(_c1, "Checkbox");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/checkbox.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/checkbox.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIENoZWNrYm94UHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3hcIjtcbmltcG9ydCB7IENoZWNrIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBDaGVja2JveCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENoZWNrYm94UHJpbWl0aXZlLlJvb3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENoZWNrYm94UHJpbWl0aXZlLlJvb3Q+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDaGVja2JveFByaW1pdGl2ZS5Sb290XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicGVlciBoLTQgdy00IHNocmluay0wIHJvdW5kZWQtc20gYm9yZGVyIGJvcmRlci1wcmltYXJ5IHJpbmctb2Zmc2V0LWJhY2tncm91bmQgZGF0YS1bc3RhdGU9Y2hlY2tlZF06YmctcHJpbWFyeSBkYXRhLVtzdGF0ZT1jaGVja2VkXTp0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTIgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTBcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxDaGVja2JveFByaW1pdGl2ZS5JbmRpY2F0b3IgY2xhc3NOYW1lPXtjbihcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY3VycmVudFwiKX0+XG4gICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgPC9DaGVja2JveFByaW1pdGl2ZS5JbmRpY2F0b3I+XG4gIDwvQ2hlY2tib3hQcmltaXRpdmUuUm9vdD5cbikpO1xuQ2hlY2tib3guZGlzcGxheU5hbWUgPSBDaGVja2JveFByaW1pdGl2ZS5Sb290LmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBDaGVja2JveCB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hlY2tib3hQcmltaXRpdmUiLCJDaGVjayIsImNuIiwiQ2hlY2tib3giLCJmb3J3YXJkUmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJSb290IiwiSW5kaWNhdG9yIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWUEsV0FBVyxRQUFRO0FBQy9CLFlBQVlDLHVCQUF1QiwyQkFBMkI7QUFDOUQsU0FBU0MsS0FBSyxRQUFRLGVBQWU7QUFFckMsU0FBU0MsRUFBRSxRQUFRLGNBQWM7QUFFakMsTUFBTUMseUJBQVdKLE1BQU1LLFVBQVUsTUFHL0IsQ0FBQyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyxvQkFDMUIsUUFBQ1Asa0JBQWtCUSxJQUFJO1FBQ3JCRCxLQUFLQTtRQUNMRixXQUFXSCxHQUNULGtUQUNBRztRQUVELEdBQUdDLEtBQUs7a0JBRVQsY0FBQSxRQUFDTixrQkFBa0JTLFNBQVM7WUFBQ0osV0FBV0gsR0FBRztzQkFDekMsY0FBQSxRQUFDRDtnQkFBTUksV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkJGLFNBQVNPLFdBQVcsR0FBR1Ysa0JBQWtCUSxJQUFJLENBQUNFLFdBQVc7QUFFekQsU0FBU1AsUUFBUSxHQUFHIn0=