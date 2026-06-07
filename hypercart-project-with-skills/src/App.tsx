import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/App.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import { Toaster } from "/src/components/ui/toaster.tsx";
import { Toaster as Sonner } from "/src/components/ui/sonner.tsx";
import { TooltipProvider } from "/src/components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=7dd7a232";
import { BrowserRouter, Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd7a232";
import Index from "/src/pages/Index.tsx?t=1780871335821";
import Dashboard from "/src/pages/Dashboard.tsx?t=1780866497015";
import Download from "/src/pages/Download.tsx?t=1780872032280";
import NotFound from "/src/pages/NotFound.tsx";
const queryClient = new QueryClient();
const App = ()=>/*#__PURE__*/ _jsxDEV(QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ _jsxDEV(TooltipProvider, {
            children: [
                /*#__PURE__*/ _jsxDEV(Toaster, {}, void 0, false, {
                    fileName: "/app/src/App.tsx",
                    lineNumber: 15,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(Sonner, {}, void 0, false, {
                    fileName: "/app/src/App.tsx",
                    lineNumber: 16,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(BrowserRouter, {
                    children: /*#__PURE__*/ _jsxDEV(Routes, {
                        children: [
                            /*#__PURE__*/ _jsxDEV(Route, {
                                path: "/",
                                element: /*#__PURE__*/ _jsxDEV(Index, {}, void 0, false, {
                                    fileName: "/app/src/App.tsx",
                                    lineNumber: 19,
                                    columnNumber: 36
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/App.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Route, {
                                path: "/dashboard",
                                element: /*#__PURE__*/ _jsxDEV(Dashboard, {}, void 0, false, {
                                    fileName: "/app/src/App.tsx",
                                    lineNumber: 20,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/App.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Route, {
                                path: "/download",
                                element: /*#__PURE__*/ _jsxDEV(Download, {}, void 0, false, {
                                    fileName: "/app/src/App.tsx",
                                    lineNumber: 21,
                                    columnNumber: 44
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/App.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Route, {
                                path: "*",
                                element: /*#__PURE__*/ _jsxDEV(NotFound, {}, void 0, false, {
                                    fileName: "/app/src/App.tsx",
                                    lineNumber: 23,
                                    columnNumber: 36
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/App.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/App.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/App.tsx",
                    lineNumber: 17,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "/app/src/App.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/app/src/App.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9hc3RlclwiO1xuaW1wb3J0IHsgVG9hc3RlciBhcyBTb25uZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Nvbm5lclwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3ZpZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b29sdGlwXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEluZGV4IGZyb20gXCIuL3BhZ2VzL0luZGV4XCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL3BhZ2VzL0Rhc2hib2FyZFwiO1xuaW1wb3J0IERvd25sb2FkIGZyb20gXCIuL3BhZ2VzL0Rvd25sb2FkXCI7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSBcIi4vcGFnZXMvTm90Rm91bmRcIjtcbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgPFRvb2x0aXBQcm92aWRlcj5cbiAgICAgIDxUb2FzdGVyIC8+XG4gICAgICA8U29ubmVyIC8+XG4gICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SW5kZXggLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGFzaGJvYXJkXCIgZWxlbWVudD17PERhc2hib2FyZCAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kb3dubG9hZFwiIGVsZW1lbnQ9ezxEb3dubG9hZCAvPn0gLz5cbiAgICAgICAgICB7LyogQUREIEFMTCBDVVNUT00gUk9VVEVTIEFCT1ZFIFRIRSBDQVRDSC1BTEwgXCIqXCIgUk9VVEUgKi99XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICA8L1Rvb2x0aXBQcm92aWRlcj5cbiAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlRvYXN0ZXIiLCJTb25uZXIiLCJUb29sdGlwUHJvdmlkZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJJbmRleCIsIkRhc2hib2FyZCIsIkRvd25sb2FkIiwiTm90Rm91bmQiLCJxdWVyeUNsaWVudCIsIkFwcCIsImNsaWVudCIsInBhdGgiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLE9BQU8sUUFBUSwwQkFBMEI7QUFDbEQsU0FBU0EsV0FBV0MsTUFBTSxRQUFRLHlCQUF5QjtBQUMzRCxTQUFTQyxlQUFlLFFBQVEsMEJBQTBCO0FBQzFELFNBQVNDLFdBQVcsRUFBRUMsbUJBQW1CLFFBQVEsd0JBQXdCO0FBQ3pFLFNBQVNDLGFBQWEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLFFBQVEsbUJBQW1CO0FBQ2hFLE9BQU9DLFdBQVcsZ0JBQWdCO0FBQ2xDLE9BQU9DLGVBQWUsb0JBQW9CO0FBQzFDLE9BQU9DLGNBQWMsbUJBQW1CO0FBQ3hDLE9BQU9DLGNBQWMsbUJBQW1CO0FBQ3hDLE1BQU1DLGNBQWMsSUFBSVQ7QUFFeEIsTUFBTVUsTUFBTSxrQkFDVixRQUFDVDtRQUFvQlUsUUFBUUY7a0JBQzNCLGNBQUEsUUFBQ1Y7OzhCQUNDLFFBQUNGOzs7Ozs4QkFDRCxRQUFDQzs7Ozs7OEJBQ0QsUUFBQ0k7OEJBQ0MsY0FBQSxRQUFDQzs7MENBQ0MsUUFBQ0M7Z0NBQU1RLE1BQUs7Z0NBQUlDLHVCQUFTLFFBQUNSOzs7Ozs7Ozs7OzBDQUMxQixRQUFDRDtnQ0FBTVEsTUFBSztnQ0FBYUMsdUJBQVMsUUFBQ1A7Ozs7Ozs7Ozs7MENBQ25DLFFBQUNGO2dDQUFNUSxNQUFLO2dDQUFZQyx1QkFBUyxRQUFDTjs7Ozs7Ozs7OzswQ0FFbEMsUUFBQ0g7Z0NBQU1RLE1BQUs7Z0NBQUlDLHVCQUFTLFFBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVg5QkU7QUFrQk4sZUFBZUEsSUFBSSJ9