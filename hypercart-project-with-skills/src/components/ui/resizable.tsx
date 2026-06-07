import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/resizable.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/resizable.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import { GripVertical } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import * as ResizablePrimitive from "/node_modules/.vite/deps/react-resizable-panels.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const ResizablePanelGroup = ({ className, ...props })=>/*#__PURE__*/ _jsxDEV(ResizablePrimitive.PanelGroup, {
        className: cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/resizable.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, this);
_c = ResizablePanelGroup;
const ResizablePanel = ResizablePrimitive.Panel;
const ResizableHandle = ({ withHandle, className, ...props })=>/*#__PURE__*/ _jsxDEV(ResizablePrimitive.PanelResizeHandle, {
        className: cn("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90", className),
        ...props,
        children: withHandle && /*#__PURE__*/ _jsxDEV("div", {
            className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",
            children: /*#__PURE__*/ _jsxDEV(GripVertical, {
                className: "h-2.5 w-2.5"
            }, void 0, false, {
                fileName: "/app/src/components/ui/resizable.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/app/src/components/ui/resizable.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/resizable.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this);
_c1 = ResizableHandle;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
var _c, _c1;
$RefreshReg$(_c, "ResizablePanelGroup");
$RefreshReg$(_c1, "ResizableHandle");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/resizable.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/resizable.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2l6YWJsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpcFZlcnRpY2FsIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVzaXphYmxlUHJpbWl0aXZlIGZyb20gXCJyZWFjdC1yZXNpemFibGUtcGFuZWxzXCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IFJlc2l6YWJsZVBhbmVsR3JvdXAgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBSZXNpemFibGVQcmltaXRpdmUuUGFuZWxHcm91cD4pID0+IChcbiAgPFJlc2l6YWJsZVByaW1pdGl2ZS5QYW5lbEdyb3VwXG4gICAgY2xhc3NOYW1lPXtjbihcImZsZXggaC1mdWxsIHctZnVsbCBkYXRhLVtwYW5lbC1ncm91cC1kaXJlY3Rpb249dmVydGljYWxdOmZsZXgtY29sXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuY29uc3QgUmVzaXphYmxlUGFuZWwgPSBSZXNpemFibGVQcmltaXRpdmUuUGFuZWw7XG5cbmNvbnN0IFJlc2l6YWJsZUhhbmRsZSA9ICh7XG4gIHdpdGhIYW5kbGUsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBSZXNpemFibGVQcmltaXRpdmUuUGFuZWxSZXNpemVIYW5kbGU+ICYge1xuICB3aXRoSGFuZGxlPzogYm9vbGVhbjtcbn0pID0+IChcbiAgPFJlc2l6YWJsZVByaW1pdGl2ZS5QYW5lbFJlc2l6ZUhhbmRsZVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggdy1weCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYm9yZGVyIGFmdGVyOmFic29sdXRlIGFmdGVyOmluc2V0LXktMCBhZnRlcjpsZWZ0LTEvMiBhZnRlcjp3LTEgYWZ0ZXI6LXRyYW5zbGF0ZS14LTEvMiBkYXRhLVtwYW5lbC1ncm91cC1kaXJlY3Rpb249dmVydGljYWxdOmgtcHggZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTp3LWZ1bGwgZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTphZnRlcjpsZWZ0LTAgZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTphZnRlcjpoLTEgZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTphZnRlcjp3LWZ1bGwgZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTphZnRlcjotdHJhbnNsYXRlLXktMS8yIGRhdGEtW3BhbmVsLWdyb3VwLWRpcmVjdGlvbj12ZXJ0aWNhbF06YWZ0ZXI6dHJhbnNsYXRlLXgtMCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMSBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTEgWyZbZGF0YS1wYW5lbC1ncm91cC1kaXJlY3Rpb249dmVydGljYWxdPmRpdl06cm90YXRlLTkwXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7d2l0aEhhbmRsZSAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgZmxleCBoLTQgdy0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIGJvcmRlciBiZy1ib3JkZXJcIj5cbiAgICAgICAgPEdyaXBWZXJ0aWNhbCBjbGFzc05hbWU9XCJoLTIuNSB3LTIuNVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8L1Jlc2l6YWJsZVByaW1pdGl2ZS5QYW5lbFJlc2l6ZUhhbmRsZT5cbik7XG5cbmV4cG9ydCB7IFJlc2l6YWJsZVBhbmVsR3JvdXAsIFJlc2l6YWJsZVBhbmVsLCBSZXNpemFibGVIYW5kbGUgfTtcbiJdLCJuYW1lcyI6WyJHcmlwVmVydGljYWwiLCJSZXNpemFibGVQcmltaXRpdmUiLCJjbiIsIlJlc2l6YWJsZVBhbmVsR3JvdXAiLCJjbGFzc05hbWUiLCJwcm9wcyIsIlBhbmVsR3JvdXAiLCJSZXNpemFibGVQYW5lbCIsIlBhbmVsIiwiUmVzaXphYmxlSGFuZGxlIiwid2l0aEhhbmRsZSIsIlBhbmVsUmVzaXplSGFuZGxlIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFlBQVksUUFBUSxlQUFlO0FBQzVDLFlBQVlDLHdCQUF3Qix5QkFBeUI7QUFFN0QsU0FBU0MsRUFBRSxRQUFRLGNBQWM7QUFFakMsTUFBTUMsc0JBQXNCLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLE9BQW1FLGlCQUM5RyxRQUFDSixtQkFBbUJLLFVBQVU7UUFDNUJGLFdBQVdGLEdBQUcscUVBQXFFRTtRQUNsRixHQUFHQyxLQUFLOzs7Ozs7S0FIUEY7QUFPTixNQUFNSSxpQkFBaUJOLG1CQUFtQk8sS0FBSztBQUUvQyxNQUFNQyxrQkFBa0IsQ0FBQyxFQUN2QkMsVUFBVSxFQUNWTixTQUFTLEVBQ1QsR0FBR0MsT0FHSixpQkFDQyxRQUFDSixtQkFBbUJVLGlCQUFpQjtRQUNuQ1AsV0FBV0YsR0FDVCwyb0JBQ0FFO1FBRUQsR0FBR0MsS0FBSztrQkFFUkssNEJBQ0MsUUFBQ0U7WUFBSVIsV0FBVTtzQkFDYixjQUFBLFFBQUNKO2dCQUFhSSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O01BaEIxQks7QUFzQk4sU0FBU04sbUJBQW1CLEVBQUVJLGNBQWMsRUFBRUUsZUFBZSxHQUFHIn0=