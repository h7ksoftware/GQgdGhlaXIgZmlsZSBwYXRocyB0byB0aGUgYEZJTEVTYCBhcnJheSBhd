import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/popover.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/popover.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as PopoverPrimitive from "/node_modules/.vite/deps/@radix-ui_react-popover.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = /*#__PURE__*/ React.forwardRef(_c = ({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(PopoverPrimitive.Portal, {
        children: /*#__PURE__*/ _jsxDEV(PopoverPrimitive.Content, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "/app/src/components/ui/popover.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/popover.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this));
_c1 = PopoverContent;
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
export { Popover, PopoverTrigger, PopoverContent };
var _c, _c1;
$RefreshReg$(_c, "PopoverContent$React.forwardRef");
$RefreshReg$(_c1, "PopoverContent");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/popover.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/popover.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUG9wb3ZlclByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXJcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgUG9wb3ZlciA9IFBvcG92ZXJQcmltaXRpdmUuUm9vdDtcblxuY29uc3QgUG9wb3ZlclRyaWdnZXIgPSBQb3BvdmVyUHJpbWl0aXZlLlRyaWdnZXI7XG5cbmNvbnN0IFBvcG92ZXJDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBQb3BvdmVyUHJpbWl0aXZlLkNvbnRlbnQ+XG4+KCh7IGNsYXNzTmFtZSwgYWxpZ24gPSBcImNlbnRlclwiLCBzaWRlT2Zmc2V0ID0gNCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxQb3BvdmVyUHJpbWl0aXZlLlBvcnRhbD5cbiAgICA8UG9wb3ZlclByaW1pdGl2ZS5Db250ZW50XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInotNTAgdy03MiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHAtNCB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbWQgb3V0bGluZS1ub25lIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMlwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIDwvUG9wb3ZlclByaW1pdGl2ZS5Qb3J0YWw+XG4pKTtcblBvcG92ZXJDb250ZW50LmRpc3BsYXlOYW1lID0gUG9wb3ZlclByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBQb3BvdmVyLCBQb3BvdmVyVHJpZ2dlciwgUG9wb3ZlckNvbnRlbnQgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvcG92ZXJQcmltaXRpdmUiLCJjbiIsIlBvcG92ZXIiLCJSb290IiwiUG9wb3ZlclRyaWdnZXIiLCJUcmlnZ2VyIiwiUG9wb3ZlckNvbnRlbnQiLCJmb3J3YXJkUmVmIiwiY2xhc3NOYW1lIiwiYWxpZ24iLCJzaWRlT2Zmc2V0IiwicHJvcHMiLCJyZWYiLCJQb3J0YWwiLCJDb250ZW50IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWUEsV0FBVyxRQUFRO0FBQy9CLFlBQVlDLHNCQUFzQiwwQkFBMEI7QUFFNUQsU0FBU0MsRUFBRSxRQUFRLGNBQWM7QUFFakMsTUFBTUMsVUFBVUYsaUJBQWlCRyxJQUFJO0FBRXJDLE1BQU1DLGlCQUFpQkosaUJBQWlCSyxPQUFPO0FBRS9DLE1BQU1DLCtCQUFpQlAsTUFBTVEsVUFBVSxNQUdyQyxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxRQUFRLEVBQUVDLGFBQWEsQ0FBQyxFQUFFLEdBQUdDLE9BQU8sRUFBRUMsb0JBQzVELFFBQUNaLGlCQUFpQmEsTUFBTTtrQkFDdEIsY0FBQSxRQUFDYixpQkFBaUJjLE9BQU87WUFDdkJGLEtBQUtBO1lBQ0xILE9BQU9BO1lBQ1BDLFlBQVlBO1lBQ1pGLFdBQVdQLEdBQ1QsOGFBQ0FPO1lBRUQsR0FBR0csS0FBSzs7Ozs7Ozs7Ozs7O0FBSWZMLGVBQWVTLFdBQVcsR0FBR2YsaUJBQWlCYyxPQUFPLENBQUNDLFdBQVc7QUFFakUsU0FBU2IsT0FBTyxFQUFFRSxjQUFjLEVBQUVFLGNBQWMsR0FBRyJ9