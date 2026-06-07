import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/table.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/table.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { cn } from "/src/lib/utils.ts";
const Table = /*#__PURE__*/ React.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ _jsxDEV("table", {
            ref: ref,
            className: cn("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "/app/src/components/ui/table.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/table.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this));
_c1 = Table;
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("thead", {
        ref: ref,
        className: cn("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/table.tsx",
        lineNumber: 15,
        columnNumber: 37
    }, this));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("tbody", {
        ref: ref,
        className: cn("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/table.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this));
_c5 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ React.forwardRef(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("tfoot", {
        ref: ref,
        className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/table.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ React.forwardRef(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("tr", {
        ref: ref,
        className: cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/table.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this));
_c9 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ React.forwardRef(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("th", {
        ref: ref,
        className: cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/table.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this));
_c11 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ React.forwardRef(_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("td", {
        ref: ref,
        className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/table.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this));
_c13 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ React.forwardRef(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("caption", {
        ref: ref,
        className: cn("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/table.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
$RefreshReg$(_c, "Table$React.forwardRef");
$RefreshReg$(_c1, "Table");
$RefreshReg$(_c2, "TableHeader$React.forwardRef");
$RefreshReg$(_c3, "TableHeader");
$RefreshReg$(_c4, "TableBody$React.forwardRef");
$RefreshReg$(_c5, "TableBody");
$RefreshReg$(_c6, "TableFooter$React.forwardRef");
$RefreshReg$(_c7, "TableFooter");
$RefreshReg$(_c8, "TableRow$React.forwardRef");
$RefreshReg$(_c9, "TableRow");
$RefreshReg$(_c10, "TableHead$React.forwardRef");
$RefreshReg$(_c11, "TableHead");
$RefreshReg$(_c12, "TableCell$React.forwardRef");
$RefreshReg$(_c13, "TableCell");
$RefreshReg$(_c14, "TableCaption$React.forwardRef");
$RefreshReg$(_c15, "TableCaption");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/table.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/table.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgVGFibGUgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxUYWJsZUVsZW1lbnQsIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUVsZW1lbnQ+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICA8dGFibGUgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oXCJ3LWZ1bGwgY2FwdGlvbi1ib3R0b20gdGV4dC1zbVwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gICksXG4pO1xuVGFibGUuZGlzcGxheU5hbWUgPSBcIlRhYmxlXCI7XG5cbmNvbnN0IFRhYmxlSGVhZGVyID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MVGFibGVTZWN0aW9uRWxlbWVudCwgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IDx0aGVhZCByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbihcIlsmX3RyXTpib3JkZXItYlwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+LFxuKTtcblRhYmxlSGVhZGVyLmRpc3BsYXlOYW1lID0gXCJUYWJsZUhlYWRlclwiO1xuXG5jb25zdCBUYWJsZUJvZHkgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50LCBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD4+KFxuICAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICAgIDx0Ym9keSByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbihcIlsmX3RyOmxhc3QtY2hpbGRdOmJvcmRlci0wXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbiAgKSxcbik7XG5UYWJsZUJvZHkuZGlzcGxheU5hbWUgPSBcIlRhYmxlQm9keVwiO1xuXG5jb25zdCBUYWJsZUZvb3RlciA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQsIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50Pj4oXG4gICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gICAgPHRmb290IHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKFwiYm9yZGVyLXQgYmctbXV0ZWQvNTAgZm9udC1tZWRpdW0gWyY+dHJdOmxhc3Q6Ym9yZGVyLWItMFwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gICksXG4pO1xuVGFibGVGb290ZXIuZGlzcGxheU5hbWUgPSBcIlRhYmxlRm9vdGVyXCI7XG5cbmNvbnN0IFRhYmxlUm93ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MVGFibGVSb3dFbGVtZW50LCBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVSb3dFbGVtZW50Pj4oXG4gICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gICAgPHRyXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y24oXCJib3JkZXItYiB0cmFuc2l0aW9uLWNvbG9ycyBkYXRhLVtzdGF0ZT1zZWxlY3RlZF06YmctbXV0ZWQgaG92ZXI6YmctbXV0ZWQvNTBcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuKTtcblRhYmxlUm93LmRpc3BsYXlOYW1lID0gXCJUYWJsZVJvd1wiO1xuXG5jb25zdCBUYWJsZUhlYWQgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxUYWJsZUNlbGxFbGVtZW50LCBSZWFjdC5UaEhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUNlbGxFbGVtZW50Pj4oXG4gICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gICAgPHRoXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiaC0xMiBweC00IHRleHQtbGVmdCBhbGlnbi1taWRkbGUgZm9udC1tZWRpdW0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIFsmOmhhcyhbcm9sZT1jaGVja2JveF0pXTpwci0wXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbik7XG5UYWJsZUhlYWQuZGlzcGxheU5hbWUgPSBcIlRhYmxlSGVhZFwiO1xuXG5jb25zdCBUYWJsZUNlbGwgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxUYWJsZUNlbGxFbGVtZW50LCBSZWFjdC5UZEhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUNlbGxFbGVtZW50Pj4oXG4gICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gICAgPHRkIHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKFwicC00IGFsaWduLW1pZGRsZSBbJjpoYXMoW3JvbGU9Y2hlY2tib3hdKV06cHItMFwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gICksXG4pO1xuVGFibGVDZWxsLmRpc3BsYXlOYW1lID0gXCJUYWJsZUNlbGxcIjtcblxuY29uc3QgVGFibGVDYXB0aW9uID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MVGFibGVDYXB0aW9uRWxlbWVudCwgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlQ2FwdGlvbkVsZW1lbnQ+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8Y2FwdGlvbiByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbihcIm10LTQgdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuICApLFxuKTtcblRhYmxlQ2FwdGlvbi5kaXNwbGF5TmFtZSA9IFwiVGFibGVDYXB0aW9uXCI7XG5cbmV4cG9ydCB7IFRhYmxlLCBUYWJsZUhlYWRlciwgVGFibGVCb2R5LCBUYWJsZUZvb3RlciwgVGFibGVIZWFkLCBUYWJsZVJvdywgVGFibGVDZWxsLCBUYWJsZUNhcHRpb24gfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNuIiwiVGFibGUiLCJmb3J3YXJkUmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJyZWYiLCJkaXYiLCJ0YWJsZSIsImRpc3BsYXlOYW1lIiwiVGFibGVIZWFkZXIiLCJ0aGVhZCIsIlRhYmxlQm9keSIsInRib2R5IiwiVGFibGVGb290ZXIiLCJ0Zm9vdCIsIlRhYmxlUm93IiwidHIiLCJUYWJsZUhlYWQiLCJ0aCIsIlRhYmxlQ2VsbCIsInRkIiwiVGFibGVDYXB0aW9uIiwiY2FwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZQSxXQUFXLFFBQVE7QUFFL0IsU0FBU0MsRUFBRSxRQUFRLGNBQWM7QUFFakMsTUFBTUMsc0JBQVFGLE1BQU1HLFVBQVUsTUFDNUIsQ0FBQyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyxvQkFDeEIsUUFBQ0M7UUFBSUgsV0FBVTtrQkFDYixjQUFBLFFBQUNJO1lBQU1GLEtBQUtBO1lBQUtGLFdBQVdILEdBQUcsaUNBQWlDRztZQUFhLEdBQUdDLEtBQUs7Ozs7Ozs7Ozs7OztBQUkzRkgsTUFBTU8sV0FBVyxHQUFHO0FBRXBCLE1BQU1DLDRCQUFjVixNQUFNRyxVQUFVLE9BQ2xDLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLE9BQU8sRUFBRUMsb0JBQVEsUUFBQ0s7UUFBTUwsS0FBS0E7UUFBS0YsV0FBV0gsR0FBRyxtQkFBbUJHO1FBQWEsR0FBR0MsS0FBSzs7Ozs7OztBQUUzR0ssWUFBWUQsV0FBVyxHQUFHO0FBRTFCLE1BQU1HLDBCQUFZWixNQUFNRyxVQUFVLE9BQ2hDLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLE9BQU8sRUFBRUMsb0JBQ3hCLFFBQUNPO1FBQU1QLEtBQUtBO1FBQUtGLFdBQVdILEdBQUcsOEJBQThCRztRQUFhLEdBQUdDLEtBQUs7Ozs7Ozs7QUFHdEZPLFVBQVVILFdBQVcsR0FBRztBQUV4QixNQUFNSyw0QkFBY2QsTUFBTUcsVUFBVSxPQUNsQyxDQUFDLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPLEVBQUVDLG9CQUN4QixRQUFDUztRQUFNVCxLQUFLQTtRQUFLRixXQUFXSCxHQUFHLDJEQUEyREc7UUFBYSxHQUFHQyxLQUFLOzs7Ozs7O0FBR25IUyxZQUFZTCxXQUFXLEdBQUc7QUFFMUIsTUFBTU8seUJBQVdoQixNQUFNRyxVQUFVLE9BQy9CLENBQUMsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLE9BQU8sRUFBRUMsb0JBQ3hCLFFBQUNXO1FBQ0NYLEtBQUtBO1FBQ0xGLFdBQVdILEdBQUcsK0VBQStFRztRQUM1RixHQUFHQyxLQUFLOzs7Ozs7O0FBSWZXLFNBQVNQLFdBQVcsR0FBRztBQUV2QixNQUFNUywwQkFBWWxCLE1BQU1HLFVBQVUsUUFDaEMsQ0FBQyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyxvQkFDeEIsUUFBQ2E7UUFDQ2IsS0FBS0E7UUFDTEYsV0FBV0gsR0FDVCxvR0FDQUc7UUFFRCxHQUFHQyxLQUFLOzs7Ozs7O0FBSWZhLFVBQVVULFdBQVcsR0FBRztBQUV4QixNQUFNVywwQkFBWXBCLE1BQU1HLFVBQVUsUUFDaEMsQ0FBQyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyxvQkFDeEIsUUFBQ2U7UUFBR2YsS0FBS0E7UUFBS0YsV0FBV0gsR0FBRyxrREFBa0RHO1FBQWEsR0FBR0MsS0FBSzs7Ozs7OztBQUd2R2UsVUFBVVgsV0FBVyxHQUFHO0FBRXhCLE1BQU1hLDZCQUFldEIsTUFBTUcsVUFBVSxRQUNuQyxDQUFDLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPLEVBQUVDLG9CQUN4QixRQUFDaUI7UUFBUWpCLEtBQUtBO1FBQUtGLFdBQVdILEdBQUcsc0NBQXNDRztRQUFhLEdBQUdDLEtBQUs7Ozs7Ozs7QUFHaEdpQixhQUFhYixXQUFXLEdBQUc7QUFFM0IsU0FBU1AsS0FBSyxFQUFFUSxXQUFXLEVBQUVFLFNBQVMsRUFBRUUsV0FBVyxFQUFFSSxTQUFTLEVBQUVGLFFBQVEsRUFBRUksU0FBUyxFQUFFRSxZQUFZLEdBQUcifQ==