import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/textarea.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/textarea.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { cn } from "/src/lib/utils.ts";
const Textarea = /*#__PURE__*/ React.forwardRef(_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ _jsxDEV("textarea", {
        className: cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/textarea.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
export { Textarea };
var _c, _c1;
$RefreshReg$(_c, "Textarea$React.forwardRef");
$RefreshReg$(_c1, "Textarea");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/textarea.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/textarea.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuZXhwb3J0IHR5cGUgVGV4dGFyZWFQcm9wcyA9IFJlYWN0LlRleHRhcmVhSFRNTEF0dHJpYnV0ZXM8SFRNTFRleHRBcmVhRWxlbWVudD47XG5cbmNvbnN0IFRleHRhcmVhID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50LCBUZXh0YXJlYVByb3BzPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICByZXR1cm4gKFxuICAgIDx0ZXh0YXJlYVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmbGV4IG1pbi1oLVs4MHB4XSB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWlucHV0IGJnLWJhY2tncm91bmQgcHgtMyBweS0yIHRleHQtc20gcmluZy1vZmZzZXQtYmFja2dyb3VuZCBwbGFjZWhvbGRlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufSk7XG5UZXh0YXJlYS5kaXNwbGF5TmFtZSA9IFwiVGV4dGFyZWFcIjtcblxuZXhwb3J0IHsgVGV4dGFyZWEgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNuIiwiVGV4dGFyZWEiLCJmb3J3YXJkUmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJ0ZXh0YXJlYSIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUUvQixTQUFTQyxFQUFFLFFBQVEsY0FBYztBQUlqQyxNQUFNQyx5QkFBV0YsTUFBTUcsVUFBVSxNQUFxQyxDQUFDLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPLEVBQUVDO0lBQzlGLHFCQUNFLFFBQUNDO1FBQ0NILFdBQVdILEdBQ1Qsd1NBQ0FHO1FBRUZFLEtBQUtBO1FBQ0osR0FBR0QsS0FBSzs7Ozs7O0FBR2Y7O0FBQ0FILFNBQVNNLFdBQVcsR0FBRztBQUV2QixTQUFTTixRQUFRLEdBQUcifQ==