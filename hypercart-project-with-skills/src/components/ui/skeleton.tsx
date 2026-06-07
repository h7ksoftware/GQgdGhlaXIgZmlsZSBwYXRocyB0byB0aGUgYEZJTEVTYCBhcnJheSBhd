import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/skeleton.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/skeleton.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import { cn } from "/src/lib/utils.ts";
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ _jsxDEV("div", {
        className: cn("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/skeleton.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Skeleton;
export { Skeleton };
var _c;
$RefreshReg$(_c, "Skeleton");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/skeleton.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/skeleton.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNrZWxldG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5mdW5jdGlvbiBTa2VsZXRvbih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+KSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y24oXCJhbmltYXRlLXB1bHNlIHJvdW5kZWQtbWQgYmctbXV0ZWRcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IHsgU2tlbGV0b24gfTtcbiJdLCJuYW1lcyI6WyJjbiIsIlNrZWxldG9uIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsRUFBRSxRQUFRLGNBQWM7QUFFakMsU0FBU0MsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsT0FBNkM7SUFDN0UscUJBQU8sUUFBQ0M7UUFBSUYsV0FBV0YsR0FBRyxxQ0FBcUNFO1FBQWEsR0FBR0MsS0FBSzs7Ozs7O0FBQ3RGO0tBRlNGO0FBSVQsU0FBU0EsUUFBUSxHQUFHIn0=