import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/toggle.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/toggle.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as TogglePrimitive from "/node_modules/.vite/deps/@radix-ui_react-toggle.js?v=7dd7a232";
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const toggleVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", {
    variants: {
        variant: {
            default: "bg-transparent",
            outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
        },
        size: {
            default: "h-10 px-3",
            sm: "h-9 px-2.5",
            lg: "h-11 px-5"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Toggle = /*#__PURE__*/ React.forwardRef(_c = ({ className, variant, size, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(TogglePrimitive.Root, {
        ref: ref,
        className: cn(toggleVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/toggle.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, this));
_c1 = Toggle;
Toggle.displayName = TogglePrimitive.Root.displayName;
export { Toggle, toggleVariants };
var _c, _c1;
$RefreshReg$(_c, "Toggle$React.forwardRef");
$RefreshReg$(_c1, "Toggle");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/toggle.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/toggle.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUb2dnbGVQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC10b2dnbGVcIjtcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IHRvZ2dsZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gcmluZy1vZmZzZXQtYmFja2dyb3VuZCB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1tdXRlZCBob3Zlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVtzdGF0ZT1vbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9uXTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImJnLXRyYW5zcGFyZW50XCIsXG4gICAgICAgIG91dGxpbmU6IFwiYm9yZGVyIGJvcmRlci1pbnB1dCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgZGVmYXVsdDogXCJoLTEwIHB4LTNcIixcbiAgICAgICAgc206IFwiaC05IHB4LTIuNVwiLFxuICAgICAgICBsZzogXCJoLTExIHB4LTVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmNvbnN0IFRvZ2dsZSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFRvZ2dsZVByaW1pdGl2ZS5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBUb2dnbGVQcmltaXRpdmUuUm9vdD4gJiBWYXJpYW50UHJvcHM8dHlwZW9mIHRvZ2dsZVZhcmlhbnRzPlxuPigoeyBjbGFzc05hbWUsIHZhcmlhbnQsIHNpemUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8VG9nZ2xlUHJpbWl0aXZlLlJvb3QgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24odG9nZ2xlVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfSB7Li4ucHJvcHN9IC8+XG4pKTtcblxuVG9nZ2xlLmRpc3BsYXlOYW1lID0gVG9nZ2xlUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWU7XG5cbmV4cG9ydCB7IFRvZ2dsZSwgdG9nZ2xlVmFyaWFudHMgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRvZ2dsZVByaW1pdGl2ZSIsImN2YSIsImNuIiwidG9nZ2xlVmFyaWFudHMiLCJ2YXJpYW50cyIsInZhcmlhbnQiLCJkZWZhdWx0Iiwib3V0bGluZSIsInNpemUiLCJzbSIsImxnIiwiZGVmYXVsdFZhcmlhbnRzIiwiVG9nZ2xlIiwiZm9yd2FyZFJlZiIsImNsYXNzTmFtZSIsInByb3BzIiwicmVmIiwiUm9vdCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUMvQixZQUFZQyxxQkFBcUIseUJBQXlCO0FBQzFELFNBQVNDLEdBQUcsUUFBMkIsMkJBQTJCO0FBRWxFLFNBQVNDLEVBQUUsUUFBUSxjQUFjO0FBRWpDLE1BQU1DLGlCQUFpQkYsSUFDckIsb1hBQ0E7SUFDRUcsVUFBVTtRQUNSQyxTQUFTO1lBQ1BDLFNBQVM7WUFDVEMsU0FBUztRQUNYO1FBQ0FDLE1BQU07WUFDSkYsU0FBUztZQUNURyxJQUFJO1lBQ0pDLElBQUk7UUFDTjtJQUNGO0lBQ0FDLGlCQUFpQjtRQUNmTixTQUFTO1FBQ1RHLE1BQU07SUFDUjtBQUNGO0FBR0YsTUFBTUksdUJBQVNiLE1BQU1jLFVBQVUsTUFHN0IsQ0FBQyxFQUFFQyxTQUFTLEVBQUVULE9BQU8sRUFBRUcsSUFBSSxFQUFFLEdBQUdPLE9BQU8sRUFBRUMsb0JBQ3pDLFFBQUNoQixnQkFBZ0JpQixJQUFJO1FBQUNELEtBQUtBO1FBQUtGLFdBQVdaLEdBQUdDLGVBQWU7WUFBRUU7WUFBU0c7WUFBTU07UUFBVTtRQUFNLEdBQUdDLEtBQUs7Ozs7Ozs7QUFHeEdILE9BQU9NLFdBQVcsR0FBR2xCLGdCQUFnQmlCLElBQUksQ0FBQ0MsV0FBVztBQUVyRCxTQUFTTixNQUFNLEVBQUVULGNBQWMsR0FBRyJ9