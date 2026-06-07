import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/NavLink.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/NavLink.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import { NavLink as RouterNavLink } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd7a232";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const forwardRef = __vite__cjsImport4_react["forwardRef"];
import { cn } from "/src/lib/utils.ts";
const NavLink = /*#__PURE__*/ forwardRef(_c = ({ className, activeClassName, pendingClassName, to, ...props }, ref)=>{
    return /*#__PURE__*/ _jsxDEV(RouterNavLink, {
        ref: ref,
        to: to,
        className: ({ isActive, isPending })=>cn(className, isActive && activeClassName, isPending && pendingClassName),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/NavLink.tsx",
        lineNumber: 14,
        columnNumber: 7
    }, this);
});
_c1 = NavLink;
NavLink.displayName = "NavLink";
export { NavLink };
var _c, _c1;
$RefreshReg$(_c, "NavLink$forwardRef");
$RefreshReg$(_c1, "NavLink");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/NavLink.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/NavLink.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkxpbmsudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdkxpbmsgYXMgUm91dGVyTmF2TGluaywgTmF2TGlua1Byb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmludGVyZmFjZSBOYXZMaW5rQ29tcGF0UHJvcHMgZXh0ZW5kcyBPbWl0PE5hdkxpbmtQcm9wcywgXCJjbGFzc05hbWVcIj4ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGFjdGl2ZUNsYXNzTmFtZT86IHN0cmluZztcbiAgcGVuZGluZ0NsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgTmF2TGluayA9IGZvcndhcmRSZWY8SFRNTEFuY2hvckVsZW1lbnQsIE5hdkxpbmtDb21wYXRQcm9wcz4oXG4gICh7IGNsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lLCBwZW5kaW5nQ2xhc3NOYW1lLCB0bywgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXJOYXZMaW5rXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB0bz17dG99XG4gICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUsIGlzUGVuZGluZyB9KSA9PlxuICAgICAgICAgIGNuKGNsYXNzTmFtZSwgaXNBY3RpdmUgJiYgYWN0aXZlQ2xhc3NOYW1lLCBpc1BlbmRpbmcgJiYgcGVuZGluZ0NsYXNzTmFtZSlcbiAgICAgICAgfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH0sXG4pO1xuXG5OYXZMaW5rLmRpc3BsYXlOYW1lID0gXCJOYXZMaW5rXCI7XG5cbmV4cG9ydCB7IE5hdkxpbmsgfTtcbiJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiUm91dGVyTmF2TGluayIsImZvcndhcmRSZWYiLCJjbiIsImNsYXNzTmFtZSIsImFjdGl2ZUNsYXNzTmFtZSIsInBlbmRpbmdDbGFzc05hbWUiLCJ0byIsInByb3BzIiwicmVmIiwiaXNBY3RpdmUiLCJpc1BlbmRpbmciLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxXQUFXQyxhQUFhLFFBQXNCLG1CQUFtQjtBQUMxRSxTQUFTQyxVQUFVLFFBQVEsUUFBUTtBQUNuQyxTQUFTQyxFQUFFLFFBQVEsY0FBYztBQVFqQyxNQUFNSCx3QkFBVUUsZ0JBQ2QsQ0FBQyxFQUFFRSxTQUFTLEVBQUVDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUVDLEVBQUUsRUFBRSxHQUFHQyxPQUFPLEVBQUVDO0lBQy9ELHFCQUNFLFFBQUNSO1FBQ0NRLEtBQUtBO1FBQ0xGLElBQUlBO1FBQ0pILFdBQVcsQ0FBQyxFQUFFTSxRQUFRLEVBQUVDLFNBQVMsRUFBRSxHQUNqQ1IsR0FBR0MsV0FBV00sWUFBWUwsaUJBQWlCTSxhQUFhTDtRQUV6RCxHQUFHRSxLQUFLOzs7Ozs7QUFHZjs7QUFHRlIsUUFBUVksV0FBVyxHQUFHO0FBRXRCLFNBQVNaLE9BQU8sR0FBRyJ9