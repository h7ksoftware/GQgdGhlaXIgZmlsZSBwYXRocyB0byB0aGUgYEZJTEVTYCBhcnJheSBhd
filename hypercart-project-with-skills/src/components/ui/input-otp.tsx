import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/input-otp.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/input-otp.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { OTPInput, OTPInputContext } from "/node_modules/.vite/deps/input-otp.js?v=7dd7a232";
import { Dot } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
const InputOTP = /*#__PURE__*/ React.forwardRef(_c = ({ className, containerClassName, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(OTPInput, {
        ref: ref,
        containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
        className: cn("disabled:cursor-not-allowed", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/input-otp.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this));
_c1 = InputOTP;
InputOTP.displayName = "InputOTP";
const InputOTPGroup = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        className: cn("flex items-center", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/input-otp.tsx",
        lineNumber: 20,
        columnNumber: 37
    }, this));
_c3 = InputOTPGroup;
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = /*#__PURE__*/ _s(React.forwardRef(_c4 = _s(({ index, className, ...props }, ref)=>{
    _s();
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        className: cn("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-2 ring-ring ring-offset-background", className),
        ...props,
        children: [
            char,
            hasFakeCaret && /*#__PURE__*/ _jsxDEV("div", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "animate-caret-blink h-4 w-px bg-foreground duration-1000"
                }, void 0, false, {
                    fileName: "/app/src/components/ui/input-otp.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/ui/input-otp.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/input-otp.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}, "JNxNoU/M6j9IpCTBZ1gkBzu503s=")), "JNxNoU/M6j9IpCTBZ1gkBzu503s=");
_c5 = InputOTPSlot;
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = /*#__PURE__*/ React.forwardRef(_c6 = ({ ...props }, ref)=>/*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        role: "separator",
        ...props,
        children: /*#__PURE__*/ _jsxDEV(Dot, {}, void 0, false, {
            fileName: "/app/src/components/ui/input-otp.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/input-otp.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this));
_c7 = InputOTPSeparator;
InputOTPSeparator.displayName = "InputOTPSeparator";
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
$RefreshReg$(_c, "InputOTP$React.forwardRef");
$RefreshReg$(_c1, "InputOTP");
$RefreshReg$(_c2, "InputOTPGroup$React.forwardRef");
$RefreshReg$(_c3, "InputOTPGroup");
$RefreshReg$(_c4, "InputOTPSlot$React.forwardRef");
$RefreshReg$(_c5, "InputOTPSlot");
$RefreshReg$(_c6, "InputOTPSeparator$React.forwardRef");
$RefreshReg$(_c7, "InputOTPSeparator");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/input-otp.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/input-otp.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LW90cC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPVFBJbnB1dCwgT1RQSW5wdXRDb250ZXh0IH0gZnJvbSBcImlucHV0LW90cFwiO1xuaW1wb3J0IHsgRG90IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBJbnB1dE9UUCA9IFJlYWN0LmZvcndhcmRSZWY8UmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgT1RQSW5wdXQ+LCBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIE9UUElucHV0Pj4oXG4gICh7IGNsYXNzTmFtZSwgY29udGFpbmVyQ2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgICA8T1RQSW5wdXRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXtjbihcImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGhhcy1bOmRpc2FibGVkXTpvcGFjaXR5LTUwXCIsIGNvbnRhaW5lckNsYXNzTmFtZSl9XG4gICAgICBjbGFzc05hbWU9e2NuKFwiZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbik7XG5JbnB1dE9UUC5kaXNwbGF5TmFtZSA9IFwiSW5wdXRPVFBcIjtcblxuY29uc3QgSW5wdXRPVFBHcm91cCA9IFJlYWN0LmZvcndhcmRSZWY8UmVhY3QuRWxlbWVudFJlZjxcImRpdlwiPiwgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwiZGl2XCI+PihcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLWNlbnRlclwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+LFxuKTtcbklucHV0T1RQR3JvdXAuZGlzcGxheU5hbWUgPSBcIklucHV0T1RQR3JvdXBcIjtcblxuY29uc3QgSW5wdXRPVFBTbG90ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjxcImRpdlwiPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwiZGl2XCI+ICYgeyBpbmRleDogbnVtYmVyIH1cbj4oKHsgaW5kZXgsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gIGNvbnN0IGlucHV0T1RQQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoT1RQSW5wdXRDb250ZXh0KTtcbiAgY29uc3QgeyBjaGFyLCBoYXNGYWtlQ2FyZXQsIGlzQWN0aXZlIH0gPSBpbnB1dE9UUENvbnRleHQuc2xvdHNbaW5kZXhdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInJlbGF0aXZlIGZsZXggaC0xMCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXIteSBib3JkZXItciBib3JkZXItaW5wdXQgdGV4dC1zbSB0cmFuc2l0aW9uLWFsbCBmaXJzdDpyb3VuZGVkLWwtbWQgZmlyc3Q6Ym9yZGVyLWwgbGFzdDpyb3VuZGVkLXItbWRcIixcbiAgICAgICAgaXNBY3RpdmUgJiYgXCJ6LTEwIHJpbmctMiByaW5nLXJpbmcgcmluZy1vZmZzZXQtYmFja2dyb3VuZFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGFyfVxuICAgICAge2hhc0Zha2VDYXJldCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWNhcmV0LWJsaW5rIGgtNCB3LXB4IGJnLWZvcmVncm91bmQgZHVyYXRpb24tMTAwMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuSW5wdXRPVFBTbG90LmRpc3BsYXlOYW1lID0gXCJJbnB1dE9UUFNsb3RcIjtcblxuY29uc3QgSW5wdXRPVFBTZXBhcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPFJlYWN0LkVsZW1lbnRSZWY8XCJkaXZcIj4sIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImRpdlwiPj4oXG4gICh7IC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICAgIDxkaXYgcmVmPXtyZWZ9IHJvbGU9XCJzZXBhcmF0b3JcIiB7Li4ucHJvcHN9PlxuICAgICAgPERvdCAvPlxuICAgIDwvZGl2PlxuICApLFxuKTtcbklucHV0T1RQU2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gXCJJbnB1dE9UUFNlcGFyYXRvclwiO1xuXG5leHBvcnQgeyBJbnB1dE9UUCwgSW5wdXRPVFBHcm91cCwgSW5wdXRPVFBTbG90LCBJbnB1dE9UUFNlcGFyYXRvciB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiT1RQSW5wdXQiLCJPVFBJbnB1dENvbnRleHQiLCJEb3QiLCJjbiIsIklucHV0T1RQIiwiZm9yd2FyZFJlZiIsImNsYXNzTmFtZSIsImNvbnRhaW5lckNsYXNzTmFtZSIsInByb3BzIiwicmVmIiwiZGlzcGxheU5hbWUiLCJJbnB1dE9UUEdyb3VwIiwiZGl2IiwiSW5wdXRPVFBTbG90IiwiaW5kZXgiLCJpbnB1dE9UUENvbnRleHQiLCJ1c2VDb250ZXh0IiwiY2hhciIsImhhc0Zha2VDYXJldCIsImlzQWN0aXZlIiwic2xvdHMiLCJJbnB1dE9UUFNlcGFyYXRvciIsInJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUMvQixTQUFTQyxRQUFRLEVBQUVDLGVBQWUsUUFBUSxZQUFZO0FBQ3RELFNBQVNDLEdBQUcsUUFBUSxlQUFlO0FBRW5DLFNBQVNDLEVBQUUsUUFBUSxjQUFjO0FBRWpDLE1BQU1DLHlCQUFXTCxNQUFNTSxVQUFVLE1BQy9CLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHQyxPQUFPLEVBQUVDLG9CQUM1QyxRQUFDVDtRQUNDUyxLQUFLQTtRQUNMRixvQkFBb0JKLEdBQUcsc0RBQXNESTtRQUM3RUQsV0FBV0gsR0FBRywrQkFBK0JHO1FBQzVDLEdBQUdFLEtBQUs7Ozs7Ozs7QUFJZkosU0FBU00sV0FBVyxHQUFHO0FBRXZCLE1BQU1DLDhCQUFnQlosTUFBTU0sVUFBVSxPQUNwQyxDQUFDLEVBQUVDLFNBQVMsRUFBRSxHQUFHRSxPQUFPLEVBQUVDLG9CQUFRLFFBQUNHO1FBQUlILEtBQUtBO1FBQUtILFdBQVdILEdBQUcscUJBQXFCRztRQUFhLEdBQUdFLEtBQUs7Ozs7Ozs7QUFFM0dHLGNBQWNELFdBQVcsR0FBRztBQUU1QixNQUFNRyw2QkFBZWQsR0FBQUEsTUFBTU0sVUFBVSxVQUduQyxDQUFDLEVBQUVTLEtBQUssRUFBRVIsU0FBUyxFQUFFLEdBQUdFLE9BQU8sRUFBRUM7O0lBQ2pDLE1BQU1NLGtCQUFrQmhCLE1BQU1pQixVQUFVLENBQUNmO0lBQ3pDLE1BQU0sRUFBRWdCLElBQUksRUFBRUMsWUFBWSxFQUFFQyxRQUFRLEVBQUUsR0FBR0osZ0JBQWdCSyxLQUFLLENBQUNOLE1BQU07SUFFckUscUJBQ0UsUUFBQ0Y7UUFDQ0gsS0FBS0E7UUFDTEgsV0FBV0gsR0FDVCxpS0FDQWdCLFlBQVksZ0RBQ1piO1FBRUQsR0FBR0UsS0FBSzs7WUFFUlM7WUFDQUMsOEJBQ0MsUUFBQ047Z0JBQUlOLFdBQVU7MEJBQ2IsY0FBQSxRQUFDTTtvQkFBSU4sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7O0FBQ0FPLGFBQWFILFdBQVcsR0FBRztBQUUzQixNQUFNVyxrQ0FBb0J0QixNQUFNTSxVQUFVLE9BQ3hDLENBQUMsRUFBRSxHQUFHRyxPQUFPLEVBQUVDLG9CQUNiLFFBQUNHO1FBQUlILEtBQUtBO1FBQUthLE1BQUs7UUFBYSxHQUFHZCxLQUFLO2tCQUN2QyxjQUFBLFFBQUNOOzs7Ozs7Ozs7OztBQUlQbUIsa0JBQWtCWCxXQUFXLEdBQUc7QUFFaEMsU0FBU04sUUFBUSxFQUFFTyxhQUFhLEVBQUVFLFlBQVksRUFBRVEsaUJBQWlCLEdBQUcifQ==