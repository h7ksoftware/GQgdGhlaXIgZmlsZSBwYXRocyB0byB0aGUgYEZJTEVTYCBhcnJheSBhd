import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/carousel.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/carousel.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import useEmblaCarousel from "/node_modules/.vite/deps/embla-carousel-react.js?v=7dd7a232";
import { ArrowLeft, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
import { Button } from "/src/components/ui/button.tsx";
const CarouselContext = /*#__PURE__*/ React.createContext(null);
function useCarousel() {
    _s();
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
_s(useCarousel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const Carousel = /*#__PURE__*/ _s1(React.forwardRef(_c = _s1(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref)=>{
    _s1();
    const [carouselRef, api] = useEmblaCarousel({
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api)=>{
        if (!api) {
            return;
        }
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(()=>{
        api?.scrollPrev();
    }, [
        api
    ]);
    const scrollNext = React.useCallback(()=>{
        api?.scrollNext();
    }, [
        api
    ]);
    const handleKeyDown = React.useCallback((event)=>{
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollPrev();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollNext();
        }
    }, [
        scrollPrev,
        scrollNext
    ]);
    React.useEffect(()=>{
        if (!api || !setApi) {
            return;
        }
        setApi(api);
    }, [
        api,
        setApi
    ]);
    React.useEffect(()=>{
        if (!api) {
            return;
        }
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return ()=>{
            api?.off("select", onSelect);
        };
    }, [
        api,
        onSelect
    ]);
    return /*#__PURE__*/ _jsxDEV(CarouselContext.Provider, {
        value: {
            carouselRef,
            api: api,
            opts,
            orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        },
        children: /*#__PURE__*/ _jsxDEV("div", {
            ref: ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children: children
        }, void 0, false, {
            fileName: "/app/src/components/ui/carousel.tsx",
            lineNumber: 118,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/carousel.tsx",
        lineNumber: 106,
        columnNumber: 7
    }, this);
}, "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        useEmblaCarousel
    ];
})), "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        useEmblaCarousel
    ];
});
_c1 = Carousel;
Carousel.displayName = "Carousel";
const CarouselContent = /*#__PURE__*/ _s2(React.forwardRef(_c2 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { carouselRef, orientation } = useCarousel();
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: carouselRef,
        className: "overflow-hidden",
        children: /*#__PURE__*/ _jsxDEV("div", {
            ref: ref,
            className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
            ...props
        }, void 0, false, {
            fileName: "/app/src/components/ui/carousel.tsx",
            lineNumber: 140,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/carousel.tsx",
        lineNumber: 139,
        columnNumber: 7
    }, this);
}, "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
})), "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
});
_c3 = CarouselContent;
CarouselContent.displayName = "CarouselContent";
const CarouselItem = /*#__PURE__*/ _s3(React.forwardRef(_c4 = _s3(({ className, ...props }, ref)=>{
    _s3();
    const { orientation } = useCarousel();
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
    }, void 0, false, {
        fileName: "/app/src/components/ui/carousel.tsx",
        lineNumber: 156,
        columnNumber: 7
    }, this);
}, "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
})), "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
});
_c5 = CarouselItem;
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = /*#__PURE__*/ _s4(React.forwardRef(_c6 = _s4(({ className, variant = "outline", size = "icon", ...props }, ref)=>{
    _s4();
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /*#__PURE__*/ _jsxDEV(Button, {
        ref: ref,
        variant: variant,
        size: size,
        className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV(ArrowLeft, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/app/src/components/ui/carousel.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV("span", {
                className: "sr-only",
                children: "Previous slide"
            }, void 0, false, {
                fileName: "/app/src/components/ui/carousel.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/carousel.tsx",
        lineNumber: 173,
        columnNumber: 7
    }, this);
}, "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
})), "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
});
_c7 = CarouselPrevious;
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = /*#__PURE__*/ _s5(React.forwardRef(_c8 = _s5(({ className, variant = "outline", size = "icon", ...props }, ref)=>{
    _s5();
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /*#__PURE__*/ _jsxDEV(Button, {
        ref: ref,
        variant: variant,
        size: size,
        className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV(ArrowRight, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/app/src/components/ui/carousel.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV("span", {
                className: "sr-only",
                children: "Next slide"
            }, void 0, false, {
                fileName: "/app/src/components/ui/carousel.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/carousel.tsx",
        lineNumber: 201,
        columnNumber: 7
    }, this);
}, "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
})), "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
});
_c9 = CarouselNext;
CarouselNext.displayName = "CarouselNext";
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
$RefreshReg$(_c, "Carousel$React.forwardRef");
$RefreshReg$(_c1, "Carousel");
$RefreshReg$(_c2, "CarouselContent$React.forwardRef");
$RefreshReg$(_c3, "CarouselContent");
$RefreshReg$(_c4, "CarouselItem$React.forwardRef");
$RefreshReg$(_c5, "CarouselItem");
$RefreshReg$(_c6, "CarouselPrevious$React.forwardRef");
$RefreshReg$(_c7, "CarouselPrevious");
$RefreshReg$(_c8, "CarouselNext$React.forwardRef");
$RefreshReg$(_c9, "CarouselNext");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/carousel.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/carousel.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VFbWJsYUNhcm91c2VsLCB7IHR5cGUgVXNlRW1ibGFDYXJvdXNlbFR5cGUgfSBmcm9tIFwiZW1ibGEtY2Fyb3VzZWwtcmVhY3RcIjtcbmltcG9ydCB7IEFycm93TGVmdCwgQXJyb3dSaWdodCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5cbnR5cGUgQ2Fyb3VzZWxBcGkgPSBVc2VFbWJsYUNhcm91c2VsVHlwZVsxXTtcbnR5cGUgVXNlQ2Fyb3VzZWxQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczx0eXBlb2YgdXNlRW1ibGFDYXJvdXNlbD47XG50eXBlIENhcm91c2VsT3B0aW9ucyA9IFVzZUNhcm91c2VsUGFyYW1ldGVyc1swXTtcbnR5cGUgQ2Fyb3VzZWxQbHVnaW4gPSBVc2VDYXJvdXNlbFBhcmFtZXRlcnNbMV07XG5cbnR5cGUgQ2Fyb3VzZWxQcm9wcyA9IHtcbiAgb3B0cz86IENhcm91c2VsT3B0aW9ucztcbiAgcGx1Z2lucz86IENhcm91c2VsUGx1Z2luO1xuICBvcmllbnRhdGlvbj86IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiO1xuICBzZXRBcGk/OiAoYXBpOiBDYXJvdXNlbEFwaSkgPT4gdm9pZDtcbn07XG5cbnR5cGUgQ2Fyb3VzZWxDb250ZXh0UHJvcHMgPSB7XG4gIGNhcm91c2VsUmVmOiBSZXR1cm5UeXBlPHR5cGVvZiB1c2VFbWJsYUNhcm91c2VsPlswXTtcbiAgYXBpOiBSZXR1cm5UeXBlPHR5cGVvZiB1c2VFbWJsYUNhcm91c2VsPlsxXTtcbiAgc2Nyb2xsUHJldjogKCkgPT4gdm9pZDtcbiAgc2Nyb2xsTmV4dDogKCkgPT4gdm9pZDtcbiAgY2FuU2Nyb2xsUHJldjogYm9vbGVhbjtcbiAgY2FuU2Nyb2xsTmV4dDogYm9vbGVhbjtcbn0gJiBDYXJvdXNlbFByb3BzO1xuXG5jb25zdCBDYXJvdXNlbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENhcm91c2VsQ29udGV4dFByb3BzIHwgbnVsbD4obnVsbCk7XG5cbmZ1bmN0aW9uIHVzZUNhcm91c2VsKCkge1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDYXJvdXNlbENvbnRleHQpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUNhcm91c2VsIG11c3QgYmUgdXNlZCB3aXRoaW4gYSA8Q2Fyb3VzZWwgLz5cIik7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuY29uc3QgQ2Fyb3VzZWwgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4gJiBDYXJvdXNlbFByb3BzPihcbiAgKHsgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIiwgb3B0cywgc2V0QXBpLCBwbHVnaW5zLCBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICBjb25zdCBbY2Fyb3VzZWxSZWYsIGFwaV0gPSB1c2VFbWJsYUNhcm91c2VsKFxuICAgICAge1xuICAgICAgICAuLi5vcHRzLFxuICAgICAgICBheGlzOiBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcInhcIiA6IFwieVwiLFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnMsXG4gICAgKTtcbiAgICBjb25zdCBbY2FuU2Nyb2xsUHJldiwgc2V0Q2FuU2Nyb2xsUHJldl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NhblNjcm9sbE5leHQsIHNldENhblNjcm9sbE5leHRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3Qgb25TZWxlY3QgPSBSZWFjdC51c2VDYWxsYmFjaygoYXBpOiBDYXJvdXNlbEFwaSkgPT4ge1xuICAgICAgaWYgKCFhcGkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRDYW5TY3JvbGxQcmV2KGFwaS5jYW5TY3JvbGxQcmV2KCkpO1xuICAgICAgc2V0Q2FuU2Nyb2xsTmV4dChhcGkuY2FuU2Nyb2xsTmV4dCgpKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBzY3JvbGxQcmV2ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgYXBpPy5zY3JvbGxQcmV2KCk7XG4gICAgfSwgW2FwaV0pO1xuXG4gICAgY29uc3Qgc2Nyb2xsTmV4dCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGFwaT8uc2Nyb2xsTmV4dCgpO1xuICAgIH0sIFthcGldKTtcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAgIChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2Nyb2xsUHJldigpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNjcm9sbE5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtzY3JvbGxQcmV2LCBzY3JvbGxOZXh0XSxcbiAgICApO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICghYXBpIHx8ICFzZXRBcGkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRBcGkoYXBpKTtcbiAgICB9LCBbYXBpLCBzZXRBcGldKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoIWFwaSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9uU2VsZWN0KGFwaSk7XG4gICAgICBhcGkub24oXCJyZUluaXRcIiwgb25TZWxlY3QpO1xuICAgICAgYXBpLm9uKFwic2VsZWN0XCIsIG9uU2VsZWN0KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgYXBpPy5vZmYoXCJzZWxlY3RcIiwgb25TZWxlY3QpO1xuICAgICAgfTtcbiAgICB9LCBbYXBpLCBvblNlbGVjdF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJvdXNlbENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICBjYXJvdXNlbFJlZixcbiAgICAgICAgICBhcGk6IGFwaSxcbiAgICAgICAgICBvcHRzLFxuICAgICAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbiB8fCAob3B0cz8uYXhpcyA9PT0gXCJ5XCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIiksXG4gICAgICAgICAgc2Nyb2xsUHJldixcbiAgICAgICAgICBzY3JvbGxOZXh0LFxuICAgICAgICAgIGNhblNjcm9sbFByZXYsXG4gICAgICAgICAgY2FuU2Nyb2xsTmV4dCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihcInJlbGF0aXZlXCIsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgcm9sZT1cInJlZ2lvblwiXG4gICAgICAgICAgYXJpYS1yb2xlZGVzY3JpcHRpb249XCJjYXJvdXNlbFwiXG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2Fyb3VzZWxDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH0sXG4pO1xuQ2Fyb3VzZWwuZGlzcGxheU5hbWUgPSBcIkNhcm91c2VsXCI7XG5cbmNvbnN0IENhcm91c2VsQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTERpdkVsZW1lbnQsIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50Pj4oXG4gICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjYXJvdXNlbFJlZiwgb3JpZW50YXRpb24gfSA9IHVzZUNhcm91c2VsKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2Nhcm91c2VsUmVmfSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4XCIsIG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwiLW1sLTRcIiA6IFwiLW10LTQgZmxleC1jb2xcIiwgY2xhc3NOYW1lKX1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuKTtcbkNhcm91c2VsQ29udGVudC5kaXNwbGF5TmFtZSA9IFwiQ2Fyb3VzZWxDb250ZW50XCI7XG5cbmNvbnN0IENhcm91c2VsSXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTERpdkVsZW1lbnQsIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50Pj4oXG4gICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gdXNlQ2Fyb3VzZWwoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICByb2xlPVwiZ3JvdXBcIlxuICAgICAgICBhcmlhLXJvbGVkZXNjcmlwdGlvbj1cInNsaWRlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcIm1pbi13LTAgc2hyaW5rLTAgZ3Jvdy0wIGJhc2lzLWZ1bGxcIiwgb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCJwbC00XCIgOiBcInB0LTRcIiwgY2xhc3NOYW1lKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuKTtcbkNhcm91c2VsSXRlbS5kaXNwbGF5TmFtZSA9IFwiQ2Fyb3VzZWxJdGVtXCI7XG5cbmNvbnN0IENhcm91c2VsUHJldmlvdXMgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQnV0dG9uPj4oXG4gICh7IGNsYXNzTmFtZSwgdmFyaWFudCA9IFwib3V0bGluZVwiLCBzaXplID0gXCJpY29uXCIsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHNjcm9sbFByZXYsIGNhblNjcm9sbFByZXYgfSA9IHVzZUNhcm91c2VsKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgdmFyaWFudD17dmFyaWFudH1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICBcImFic29sdXRlIGgtOCB3LTggcm91bmRlZC1mdWxsXCIsXG4gICAgICAgICAgb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICA/IFwiLWxlZnQtMTIgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yXCJcbiAgICAgICAgICAgIDogXCItdG9wLTEyIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgcm90YXRlLTkwXCIsXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICApfVxuICAgICAgICBkaXNhYmxlZD17IWNhblNjcm9sbFByZXZ9XG4gICAgICAgIG9uQ2xpY2s9e3Njcm9sbFByZXZ9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEFycm93TGVmdCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzIHNsaWRlPC9zcGFuPlxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfSxcbik7XG5DYXJvdXNlbFByZXZpb3VzLmRpc3BsYXlOYW1lID0gXCJDYXJvdXNlbFByZXZpb3VzXCI7XG5cbmNvbnN0IENhcm91c2VsTmV4dCA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBCdXR0b24+PihcbiAgKHsgY2xhc3NOYW1lLCB2YXJpYW50ID0gXCJvdXRsaW5lXCIsIHNpemUgPSBcImljb25cIiwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBvcmllbnRhdGlvbiwgc2Nyb2xsTmV4dCwgY2FuU2Nyb2xsTmV4dCB9ID0gdXNlQ2Fyb3VzZWwoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiYWJzb2x1dGUgaC04IHctOCByb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgICBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgID8gXCItcmlnaHQtMTIgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yXCJcbiAgICAgICAgICAgIDogXCItYm90dG9tLTEyIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgcm90YXRlLTkwXCIsXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICApfVxuICAgICAgICBkaXNhYmxlZD17IWNhblNjcm9sbE5leHR9XG4gICAgICAgIG9uQ2xpY2s9e3Njcm9sbE5leHR9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0IHNsaWRlPC9zcGFuPlxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfSxcbik7XG5DYXJvdXNlbE5leHQuZGlzcGxheU5hbWUgPSBcIkNhcm91c2VsTmV4dFwiO1xuXG5leHBvcnQgeyB0eXBlIENhcm91c2VsQXBpLCBDYXJvdXNlbCwgQ2Fyb3VzZWxDb250ZW50LCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsUHJldmlvdXMsIENhcm91c2VsTmV4dCB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJBcnJvd0xlZnQiLCJBcnJvd1JpZ2h0IiwiY24iLCJCdXR0b24iLCJDYXJvdXNlbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2Fyb3VzZWwiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIiwiQ2Fyb3VzZWwiLCJmb3J3YXJkUmVmIiwib3JpZW50YXRpb24iLCJvcHRzIiwic2V0QXBpIiwicGx1Z2lucyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJyZWYiLCJjYXJvdXNlbFJlZiIsImFwaSIsImF4aXMiLCJjYW5TY3JvbGxQcmV2Iiwic2V0Q2FuU2Nyb2xsUHJldiIsInVzZVN0YXRlIiwiY2FuU2Nyb2xsTmV4dCIsInNldENhblNjcm9sbE5leHQiLCJvblNlbGVjdCIsInVzZUNhbGxiYWNrIiwic2Nyb2xsUHJldiIsInNjcm9sbE5leHQiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsIm9uIiwib2ZmIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiIsIm9uS2V5RG93bkNhcHR1cmUiLCJyb2xlIiwiYXJpYS1yb2xlZGVzY3JpcHRpb24iLCJkaXNwbGF5TmFtZSIsIkNhcm91c2VsQ29udGVudCIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsUHJldmlvdXMiLCJ2YXJpYW50Iiwic2l6ZSIsImRpc2FibGVkIiwib25DbGljayIsInNwYW4iLCJDYXJvdXNlbE5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUMvQixPQUFPQyxzQkFBcUQsdUJBQXVCO0FBQ25GLFNBQVNDLFNBQVMsRUFBRUMsVUFBVSxRQUFRLGVBQWU7QUFFckQsU0FBU0MsRUFBRSxRQUFRLGNBQWM7QUFDakMsU0FBU0MsTUFBTSxRQUFRLHlCQUF5QjtBQXVCaEQsTUFBTUMsZ0NBQWtCTixNQUFNTyxhQUFhLENBQThCO0FBRXpFLFNBQVNDOztJQUNQLE1BQU1DLFVBQVVULE1BQU1VLFVBQVUsQ0FBQ0o7SUFFakMsSUFBSSxDQUFDRyxTQUFTO1FBQ1osTUFBTSxJQUFJRSxNQUFNO0lBQ2xCO0lBRUEsT0FBT0Y7QUFDVDtHQVJTRDtBQVVULE1BQU1JLHlCQUFXWixJQUFBQSxNQUFNYSxVQUFVLFVBQy9CLENBQUMsRUFBRUMsY0FBYyxZQUFZLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFLEdBQUdDLE9BQU8sRUFBRUM7O0lBQ3JGLE1BQU0sQ0FBQ0MsYUFBYUMsSUFBSSxHQUFHdEIsaUJBQ3pCO1FBQ0UsR0FBR2MsSUFBSTtRQUNQUyxNQUFNVixnQkFBZ0IsZUFBZSxNQUFNO0lBQzdDLEdBQ0FHO0lBRUYsTUFBTSxDQUFDUSxlQUFlQyxpQkFBaUIsR0FBRzFCLE1BQU0yQixRQUFRLENBQUM7SUFDekQsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBRzdCLE1BQU0yQixRQUFRLENBQUM7SUFFekQsTUFBTUcsV0FBVzlCLE1BQU0rQixXQUFXLENBQUMsQ0FBQ1I7UUFDbEMsSUFBSSxDQUFDQSxLQUFLO1lBQ1I7UUFDRjtRQUVBRyxpQkFBaUJILElBQUlFLGFB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