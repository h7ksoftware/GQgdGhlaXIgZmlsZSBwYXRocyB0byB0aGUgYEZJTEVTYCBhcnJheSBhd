import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/form.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/form.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { Slot } from "/node_modules/.vite/deps/@radix-ui_react-slot.js?v=7dd7a232";
import { Controller, FormProvider, useFormContext } from "/node_modules/.vite/deps/react-hook-form.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
import { Label } from "/src/components/ui/label.tsx";
const Form = FormProvider;
const FormFieldContext = /*#__PURE__*/ React.createContext({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ _jsxDEV(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ _jsxDEV(Controller, {
            ...props
        }, void 0, false, {
            fileName: "/app/src/components/ui/form.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/form.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_c = FormField;
const useFormField = ()=>{
    _s();
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
_s(useFormField, "eRzki+X5SldVDcAh3BokmSZW9NU=", false, function() {
    return [
        useFormContext
    ];
});
const FormItemContext = /*#__PURE__*/ React.createContext({});
const FormItem = /*#__PURE__*/ _s1(React.forwardRef(_c1 = _s1(({ className, ...props }, ref)=>{
    _s1();
    const id = React.useId();
    return /*#__PURE__*/ _jsxDEV(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ _jsxDEV("div", {
            ref: ref,
            className: cn("space-y-2", className),
            ...props
        }, void 0, false, {
            fileName: "/app/src/components/ui/form.tsx",
            lineNumber: 68,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/form.tsx",
        lineNumber: 67,
        columnNumber: 7
    }, this);
}, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=")), "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c2 = FormItem;
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ _s2(React.forwardRef(_c3 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ _jsxDEV(Label, {
        ref: ref,
        className: cn(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/form.tsx",
        lineNumber: 81,
        columnNumber: 10
    }, this);
}, "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
})), "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
});
_c4 = FormLabel;
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ _s3(React.forwardRef(_c5 = _s3(({ ...props }, ref)=>{
    _s3();
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ _jsxDEV(Slot, {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/form.tsx",
        lineNumber: 90,
        columnNumber: 7
    }, this);
}, "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
})), "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
});
_c6 = FormControl;
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ _s4(React.forwardRef(_c7 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ _jsxDEV("p", {
        ref: ref,
        id: formDescriptionId,
        className: cn("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/form.tsx",
        lineNumber: 106,
        columnNumber: 12
    }, this);
}, "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
})), "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
});
_c8 = FormDescription;
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ _s5(React.forwardRef(_c9 = _s5(({ className, children, ...props }, ref)=>{
    _s5();
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ _jsxDEV("p", {
        ref: ref,
        id: formMessageId,
        className: cn("text-sm font-medium text-destructive", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "/app/src/components/ui/form.tsx",
        lineNumber: 121,
        columnNumber: 7
    }, this);
}, "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
})), "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
});
_c10 = FormMessage;
FormMessage.displayName = "FormMessage";
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
$RefreshReg$(_c, "FormField");
$RefreshReg$(_c1, "FormItem$React.forwardRef");
$RefreshReg$(_c2, "FormItem");
$RefreshReg$(_c3, "FormLabel$React.forwardRef");
$RefreshReg$(_c4, "FormLabel");
$RefreshReg$(_c5, "FormControl$React.forwardRef");
$RefreshReg$(_c6, "FormControl");
$RefreshReg$(_c7, "FormDescription$React.forwardRef");
$RefreshReg$(_c8, "FormDescription");
$RefreshReg$(_c9, "FormMessage$React.forwardRef");
$RefreshReg$(_c10, "FormMessage");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/form.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/form.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgTGFiZWxQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1sYWJlbFwiO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgQ29udHJvbGxlclByb3BzLCBGaWVsZFBhdGgsIEZpZWxkVmFsdWVzLCBGb3JtUHJvdmlkZXIsIHVzZUZvcm1Db250ZXh0IH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XG5cbmNvbnN0IEZvcm0gPSBGb3JtUHJvdmlkZXI7XG5cbnR5cGUgRm9ybUZpZWxkQ29udGV4dFZhbHVlPFxuICBURmllbGRWYWx1ZXMgZXh0ZW5kcyBGaWVsZFZhbHVlcyA9IEZpZWxkVmFsdWVzLFxuICBUTmFtZSBleHRlbmRzIEZpZWxkUGF0aDxURmllbGRWYWx1ZXM+ID0gRmllbGRQYXRoPFRGaWVsZFZhbHVlcz4sXG4+ID0ge1xuICBuYW1lOiBUTmFtZTtcbn07XG5cbmNvbnN0IEZvcm1GaWVsZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEZvcm1GaWVsZENvbnRleHRWYWx1ZT4oe30gYXMgRm9ybUZpZWxkQ29udGV4dFZhbHVlKTtcblxuY29uc3QgRm9ybUZpZWxkID0gPFxuICBURmllbGRWYWx1ZXMgZXh0ZW5kcyBGaWVsZFZhbHVlcyA9IEZpZWxkVmFsdWVzLFxuICBUTmFtZSBleHRlbmRzIEZpZWxkUGF0aDxURmllbGRWYWx1ZXM+ID0gRmllbGRQYXRoPFRGaWVsZFZhbHVlcz4sXG4+KHtcbiAgLi4ucHJvcHNcbn06IENvbnRyb2xsZXJQcm9wczxURmllbGRWYWx1ZXMsIFROYW1lPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtRmllbGRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG5hbWU6IHByb3BzLm5hbWUgfX0+XG4gICAgICA8Q29udHJvbGxlciB7Li4ucHJvcHN9IC8+XG4gICAgPC9Gb3JtRmllbGRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgdXNlRm9ybUZpZWxkID0gKCkgPT4ge1xuICBjb25zdCBmaWVsZENvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEZvcm1GaWVsZENvbnRleHQpO1xuICBjb25zdCBpdGVtQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRm9ybUl0ZW1Db250ZXh0KTtcbiAgY29uc3QgeyBnZXRGaWVsZFN0YXRlLCBmb3JtU3RhdGUgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG5cbiAgY29uc3QgZmllbGRTdGF0ZSA9IGdldEZpZWxkU3RhdGUoZmllbGRDb250ZXh0Lm5hbWUsIGZvcm1TdGF0ZSk7XG5cbiAgaWYgKCFmaWVsZENvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VGb3JtRmllbGQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIDxGb3JtRmllbGQ+XCIpO1xuICB9XG5cbiAgY29uc3QgeyBpZCB9ID0gaXRlbUNvbnRleHQ7XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBuYW1lOiBmaWVsZENvbnRleHQubmFtZSxcbiAgICBmb3JtSXRlbUlkOiBgJHtpZH0tZm9ybS1pdGVtYCxcbiAgICBmb3JtRGVzY3JpcHRpb25JZDogYCR7aWR9LWZvcm0taXRlbS1kZXNjcmlwdGlvbmAsXG4gICAgZm9ybU1lc3NhZ2VJZDogYCR7aWR9LWZvcm0taXRlbS1tZXNzYWdlYCxcbiAgICAuLi5maWVsZFN0YXRlLFxuICB9O1xufTtcblxudHlwZSBGb3JtSXRlbUNvbnRleHRWYWx1ZSA9IHtcbiAgaWQ6IHN0cmluZztcbn07XG5cbmNvbnN0IEZvcm1JdGVtQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Rm9ybUl0ZW1Db250ZXh0VmFsdWU+KHt9IGFzIEZvcm1JdGVtQ29udGV4dFZhbHVlKTtcblxuY29uc3QgRm9ybUl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4+KFxuICAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IGlkID0gUmVhY3QudXNlSWQoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUl0ZW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlkIH19PlxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9e2NuKFwic3BhY2UteS0yXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvRm9ybUl0ZW1Db250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH0sXG4pO1xuRm9ybUl0ZW0uZGlzcGxheU5hbWUgPSBcIkZvcm1JdGVtXCI7XG5cbmNvbnN0IEZvcm1MYWJlbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIExhYmVsUHJpbWl0aXZlLlJvb3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIExhYmVsUHJpbWl0aXZlLlJvb3Q+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gIGNvbnN0IHsgZXJyb3IsIGZvcm1JdGVtSWQgfSA9IHVzZUZvcm1GaWVsZCgpO1xuXG4gIHJldHVybiA8TGFiZWwgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oZXJyb3IgJiYgXCJ0ZXh0LWRlc3RydWN0aXZlXCIsIGNsYXNzTmFtZSl9IGh0bWxGb3I9e2Zvcm1JdGVtSWR9IHsuLi5wcm9wc30gLz47XG59KTtcbkZvcm1MYWJlbC5kaXNwbGF5TmFtZSA9IFwiRm9ybUxhYmVsXCI7XG5cbmNvbnN0IEZvcm1Db250cm9sID0gUmVhY3QuZm9yd2FyZFJlZjxSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTbG90PiwgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTbG90Pj4oXG4gICh7IC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgZXJyb3IsIGZvcm1JdGVtSWQsIGZvcm1EZXNjcmlwdGlvbklkLCBmb3JtTWVzc2FnZUlkIH0gPSB1c2VGb3JtRmllbGQoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2xvdFxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgaWQ9e2Zvcm1JdGVtSWR9XG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9eyFlcnJvciA/IGAke2Zvcm1EZXNjcmlwdGlvbklkfWAgOiBgJHtmb3JtRGVzY3JpcHRpb25JZH0gJHtmb3JtTWVzc2FnZUlkfWB9XG4gICAgICAgIGFyaWEtaW52YWxpZD17ISFlcnJvcn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuKTtcbkZvcm1Db250cm9sLmRpc3BsYXlOYW1lID0gXCJGb3JtQ29udHJvbFwiO1xuXG5jb25zdCBGb3JtRGVzY3JpcHRpb24gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxQYXJhZ3JhcGhFbGVtZW50LCBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MUGFyYWdyYXBoRWxlbWVudD4+KFxuICAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgZm9ybURlc2NyaXB0aW9uSWQgfSA9IHVzZUZvcm1GaWVsZCgpO1xuXG4gICAgcmV0dXJuIDxwIHJlZj17cmVmfSBpZD17Zm9ybURlc2NyaXB0aW9uSWR9IGNsYXNzTmFtZT17Y24oXCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+O1xuICB9LFxuKTtcbkZvcm1EZXNjcmlwdGlvbi5kaXNwbGF5TmFtZSA9IFwiRm9ybURlc2NyaXB0aW9uXCI7XG5cbmNvbnN0IEZvcm1NZXNzYWdlID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MUGFyYWdyYXBoRWxlbWVudCwgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFBhcmFncmFwaEVsZW1lbnQ+PihcbiAgKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBlcnJvciwgZm9ybU1lc3NhZ2VJZCB9ID0gdXNlRm9ybUZpZWxkKCk7XG4gICAgY29uc3QgYm9keSA9IGVycm9yID8gU3RyaW5nKGVycm9yPy5tZXNzYWdlKSA6IGNoaWxkcmVuO1xuXG4gICAgaWYgKCFib2R5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHAgcmVmPXtyZWZ9IGlkPXtmb3JtTWVzc2FnZUlkfSBjbGFzc05hbWU9e2NuKFwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWRlc3RydWN0aXZlXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XG4gICAgICAgIHtib2R5fVxuICAgICAgPC9wPlxuICAgICk7XG4gIH0sXG4pO1xuRm9ybU1lc3NhZ2UuZGlzcGxheU5hbWUgPSBcIkZvcm1NZXNzYWdlXCI7XG5cbmV4cG9ydCB7IHVzZUZvcm1GaWVsZCwgRm9ybSwgRm9ybUl0ZW0sIEZvcm1MYWJlbCwgRm9ybUNvbnRyb2wsIEZvcm1EZXNjcmlwdGlvbiwgRm9ybU1lc3NhZ2UsIEZvcm1GaWVsZCB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNsb3QiLCJDb250cm9sbGVyIiwiRm9ybVByb3ZpZGVyIiwidXNlRm9ybUNvbnRleHQiLCJjbiIsIkxhYmVsIiwiRm9ybSIsIkZvcm1GaWVsZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRm9ybUZpZWxkIiwicHJvcHMiLCJQcm92aWRlciIsInZhbHVlIiwibmFtZSIsInVzZUZvcm1GaWVsZCIsImZpZWxkQ29udGV4dCIsInVzZUNvbnRleHQiLCJpdGVtQ29udGV4dCIsIkZvcm1JdGVtQ29udGV4dCIsImdldEZpZWxkU3RhdGUiLCJmb3JtU3RhdGUiLCJmaWVsZFN0YXRlIiwiRXJyb3IiLCJpZCIsImZvcm1JdGVtSWQiLCJmb3JtRGVzY3JpcHRpb25JZCIsImZvcm1NZXNzYWdlSWQiLCJGb3JtSXRlbSIsImZvcndhcmRSZWYiLCJjbGFzc05hbWUiLCJyZWYiLCJ1c2VJZCIsImRpdiIsImRpc3BsYXlOYW1lIiwiRm9ybUxhYmVsIiwiZXJyb3IiLCJodG1sRm9yIiwiRm9ybUNvbnRyb2wiLCJhcmlhLWRlc2NyaWJlZGJ5IiwiYXJpYS1pbnZhbGlkIiwiRm9ybURlc2NyaXB0aW9uIiwicCIsIkZvcm1NZXNzYWdlIiwiY2hpbGRyZW4iLCJib2R5IiwiU3RyaW5nIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWUEsV0FBVyxRQUFRO0FBRS9CLFNBQVNDLElBQUksUUFBUSx1QkFBdUI7QUFDNUMsU0FBU0MsVUFBVSxFQUEyQ0MsWUFBWSxFQUFFQyxjQUFjLFFBQVEsa0JBQWtCO0FBRXBILFNBQVNDLEVBQUUsUUFBUSxjQUFjO0FBQ2pDLFNBQVNDLEtBQUssUUFBUSx3QkFBd0I7QUFFOUMsTUFBTUMsT0FBT0o7QUFTYixNQUFNSyxpQ0FBbUJSLE1BQU1TLGFBQWEsQ0FBd0IsQ0FBQztBQUVyRSxNQUFNQyxZQUFZLENBR2hCLEVBQ0EsR0FBR0MsT0FDa0M7SUFDckMscUJBQ0UsUUFBQ0gsaUJBQWlCSSxRQUFRO1FBQUNDLE9BQU87WUFBRUMsTUFBTUgsTUFBTUcsSUFBSTtRQUFDO2tCQUNuRCxjQUFBLFFBQUNaO1lBQVksR0FBR1MsS0FBSzs7Ozs7Ozs7Ozs7QUFHM0I7S0FYTUQ7QUFhTixNQUFNSyxlQUFlOztJQUNuQixNQUFNQyxlQUFlaEIsTUFBTWlCLFVBQVUsQ0FBQ1Q7SUFDdEMsTUFBTVUsY0FBY2xCLE1BQU1pQixVQUFVLENBQUNFO0lBQ3JDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxTQUFTLEVBQUUsR0FBR2pCO0lBRXJDLE1BQU1rQixhQUFhRixjQUFjSixhQUFhRixJQUFJLEVBQUVPO0lBRXBE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