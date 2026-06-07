import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/hover-card.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/hover-card.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as HoverCardPrimitive from "/node_modules/.vite/deps/@radix-ui_react-hover-card.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardContent = /*#__PURE__*/ React.forwardRef(_c = ({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(HoverCardPrimitive.Content, {
        ref: ref,
        align: align,
        sideOffset: sideOffset,
        className: cn("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/hover-card.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this));
_c1 = HoverCardContent;
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
export { HoverCard, HoverCardTrigger, HoverCardContent };
var _c, _c1;
$RefreshReg$(_c, "HoverCardContent$React.forwardRef");
$RefreshReg$(_c1, "HoverCardContent");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/hover-card.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/hover-card.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdmVyLWNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgSG92ZXJDYXJkUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtaG92ZXItY2FyZFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBIb3ZlckNhcmQgPSBIb3ZlckNhcmRQcmltaXRpdmUuUm9vdDtcblxuY29uc3QgSG92ZXJDYXJkVHJpZ2dlciA9IEhvdmVyQ2FyZFByaW1pdGl2ZS5UcmlnZ2VyO1xuXG5jb25zdCBIb3ZlckNhcmRDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgSG92ZXJDYXJkUHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIEhvdmVyQ2FyZFByaW1pdGl2ZS5Db250ZW50PlxuPigoeyBjbGFzc05hbWUsIGFsaWduID0gXCJjZW50ZXJcIiwgc2lkZU9mZnNldCA9IDQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8SG92ZXJDYXJkUHJpbWl0aXZlLkNvbnRlbnRcbiAgICByZWY9e3JlZn1cbiAgICBhbGlnbj17YWxpZ259XG4gICAgc2lkZU9mZnNldD17c2lkZU9mZnNldH1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJ6LTUwIHctNjQgcm91bmRlZC1tZCBib3JkZXIgYmctcG9wb3ZlciBwLTQgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgc2hhZG93LW1kIG91dGxpbmUtbm9uZSBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTJcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuSG92ZXJDYXJkQ29udGVudC5kaXNwbGF5TmFtZSA9IEhvdmVyQ2FyZFByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBIb3ZlckNhcmQsIEhvdmVyQ2FyZFRyaWdnZXIsIEhvdmVyQ2FyZENvbnRlbnQgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhvdmVyQ2FyZFByaW1pdGl2ZSIsImNuIiwiSG92ZXJDYXJkIiwiUm9vdCIsIkhvdmVyQ2FyZFRyaWdnZXIiLCJUcmlnZ2VyIiwiSG92ZXJDYXJkQ29udGVudCIsImZvcndhcmRSZWYiLCJjbGFzc05hbWUiLCJhbGlnbiIsInNpZGVPZmZzZXQiLCJwcm9wcyIsInJlZiIsIkNvbnRlbnQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZQSxXQUFXLFFBQVE7QUFDL0IsWUFBWUMsd0JBQXdCLDZCQUE2QjtBQUVqRSxTQUFTQyxFQUFFLFFBQVEsY0FBYztBQUVqQyxNQUFNQyxZQUFZRixtQkFBbUJHLElBQUk7QUFFekMsTUFBTUMsbUJBQW1CSixtQkFBbUJLLE9BQU87QUFFbkQsTUFBTUMsaUNBQW1CUCxNQUFNUSxVQUFVLE1BR3ZDLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLFFBQVEsRUFBRUMsYUFBYSxDQUFDLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyxvQkFDNUQsUUFBQ1osbUJBQW1CYSxPQUFPO1FBQ3pCRCxLQUFLQTtRQUNMSCxPQUFPQTtRQUNQQyxZQUFZQTtRQUNaRixXQUFXUCxHQUNULDhhQUNBTztRQUVELEdBQUdHLEtBQUs7Ozs7Ozs7QUFHYkwsaUJBQWlCUSxXQUFXLEdBQUdkLG1CQUFtQmEsT0FBTyxDQUFDQyxXQUFXO0FBRXJFLFNBQVNaLFNBQVMsRUFBRUUsZ0JBQWdCLEVBQUVFLGdCQUFnQixHQUFHIn0=