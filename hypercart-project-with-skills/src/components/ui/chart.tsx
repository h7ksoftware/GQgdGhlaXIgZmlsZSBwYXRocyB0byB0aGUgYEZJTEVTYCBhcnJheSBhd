import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/chart.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/chart.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as RechartsPrimitive from "/node_modules/.vite/deps/recharts.js?v=7dd7a232";
import { cn } from "/src/lib/utils.ts";
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
    light: "",
    dark: ".dark"
};
const ChartContext = /*#__PURE__*/ React.createContext(null);
function useChart() {
    _s();
    const context = React.useContext(ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <ChartContainer />");
    }
    return context;
}
_s(useChart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ChartContainer = /*#__PURE__*/ _s1(React.forwardRef(_c = _s1(({ id, className, children, config, ...props }, ref)=>{
    _s1();
    const uniqueId = React.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
    return /*#__PURE__*/ _jsxDEV(ChartContext.Provider, {
        value: {
            config
        },
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-chart": chartId,
            ref: ref,
            className: cn("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className),
            ...props,
            children: [
                /*#__PURE__*/ _jsxDEV(ChartStyle, {
                    id: chartId,
                    config: config
                }, void 0, false, {
                    fileName: "/app/src/components/ui/chart.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(RechartsPrimitive.ResponsiveContainer, {
                    children: children
                }, void 0, false, {
                    fileName: "/app/src/components/ui/chart.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/app/src/components/ui/chart.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/app/src/components/ui/chart.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}, "j7NPILheLIfrWAvm8S/GM4Sml/8=")), "j7NPILheLIfrWAvm8S/GM4Sml/8=");
_c1 = ChartContainer;
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config })=>{
    const colorConfig = Object.entries(config).filter(([_, config])=>config.theme || config.color);
    if (!colorConfig.length) {
        return null;
    }
    return /*#__PURE__*/ _jsxDEV("style", {
        dangerouslySetInnerHTML: {
            __html: Object.entries(THEMES).map(([theme, prefix])=>`
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig])=>{
                    const color = itemConfig.theme?.[theme] || itemConfig.color;
                    return color ? `  --color-${key}: ${color};` : null;
                }).join("\n")}
}
`).join("\n")
        }
    }, void 0, false, {
        fileName: "/app/src/components/ui/chart.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
};
_c2 = ChartStyle;
const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartTooltipContent = /*#__PURE__*/ _s2(React.forwardRef(_c3 = _s2(({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref)=>{
    _s2();
    const { config } = useChart();
    const tooltipLabel = React.useMemo(()=>{
        if (hideLabel || !payload?.length) {
            return null;
        }
        const [item] = payload;
        const key = `${labelKey || item.dataKey || item.name || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
        if (labelFormatter) {
            return /*#__PURE__*/ _jsxDEV("div", {
                className: cn("font-medium", labelClassName),
                children: labelFormatter(value, payload)
            }, void 0, false, {
                fileName: "/app/src/components/ui/chart.tsx",
                lineNumber: 137,
                columnNumber: 16
            }, this);
        }
        if (!value) {
            return null;
        }
        return /*#__PURE__*/ _jsxDEV("div", {
            className: cn("font-medium", labelClassName),
            children: value
        }, void 0, false, {
            fileName: "/app/src/components/ui/chart.tsx",
            lineNumber: 144,
            columnNumber: 14
        }, this);
    }, [
        label,
        labelFormatter,
        payload,
        hideLabel,
        labelClassName,
        config,
        labelKey
    ]);
    if (!active || !payload?.length) {
        return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        className: cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className),
        children: [
            !nestLabel ? tooltipLabel : null,
            /*#__PURE__*/ _jsxDEV("div", {
                className: "grid gap-1.5",
                children: payload.map((item, index)=>{
                    const key = `${nameKey || item.name || item.dataKey || "value"}`;
                    const itemConfig = getPayloadConfigFromPayload(config, item, key);
                    const indicatorColor = color || item.payload.fill || item.color;
                    return /*#__PURE__*/ _jsxDEV("div", {
                        className: cn("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"),
                        children: formatter && item?.value !== undefined && item.name ? formatter(item.value, item.name, item, index, item.payload) : /*#__PURE__*/ _jsxDEV(_Fragment, {
                            children: [
                                itemConfig?.icon ? /*#__PURE__*/ _jsxDEV(itemConfig.icon, {}, void 0, false, {
                                    fileName: "/app/src/components/ui/chart.tsx",
                                    lineNumber: 181,
                                    columnNumber: 23
                                }, this) : !hideIndicator && /*#__PURE__*/ _jsxDEV("div", {
                                    className: cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                                        "h-2.5 w-2.5": indicator === "dot",
                                        "w-1": indicator === "line",
                                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                                        "my-0.5": nestLabel && indicator === "dashed"
                                    }),
                                    style: {
                                        "--color-bg": indicatorColor,
                                        "--color-border": indicatorColor
                                    }
                                }, void 0, false, {
                                    fileName: "/app/src/components/ui/chart.tsx",
                                    lineNumber: 184,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "grid gap-1.5",
                                            children: [
                                                nestLabel ? tooltipLabel : null,
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "text-muted-foreground",
                                                    children: itemConfig?.label || item.name
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/ui/chart.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/components/ui/chart.tsx",
                                            lineNumber: 206,
                                            columnNumber: 23
                                        }, this),
                                        item.value && /*#__PURE__*/ _jsxDEV("span", {
                                            className: "font-mono font-medium tabular-nums text-foreground",
                                            children: item.value.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "/app/src/components/ui/chart.tsx",
                                            lineNumber: 211,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/components/ui/chart.tsx",
                                    lineNumber: 200,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true)
                    }, item.dataKey, false, {
                        fileName: "/app/src/components/ui/chart.tsx",
                        lineNumber: 169,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "/app/src/components/ui/chart.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/ui/chart.tsx",
        lineNumber: 154,
        columnNumber: 7
    }, this);
}, "nRMgiGinpZEd+NE7/dAtqF0Z2iA=", false, function() {
    return [
        useChart
    ];
})), "nRMgiGinpZEd+NE7/dAtqF0Z2iA=", false, function() {
    return [
        useChart
    ];
});
_c4 = ChartTooltipContent;
ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegend = RechartsPrimitive.Legend;
const ChartLegendContent = /*#__PURE__*/ _s3(React.forwardRef(_c5 = _s3(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref)=>{
    _s3();
    const { config } = useChart();
    if (!payload?.length) {
        return null;
    }
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: ref,
        className: cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className),
        children: payload.map((item)=>{
            const key = `${nameKey || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            return /*#__PURE__*/ _jsxDEV("div", {
                className: cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
                children: [
                    itemConfig?.icon && !hideIcon ? /*#__PURE__*/ _jsxDEV(itemConfig.icon, {}, void 0, false, {
                        fileName: "/app/src/components/ui/chart.tsx",
                        lineNumber: 259,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ _jsxDEV("div", {
                        className: "h-2 w-2 shrink-0 rounded-[2px]",
                        style: {
                            backgroundColor: item.color
                        }
                    }, void 0, false, {
                        fileName: "/app/src/components/ui/chart.tsx",
                        lineNumber: 261,
                        columnNumber: 15
                    }, this),
                    itemConfig?.label
                ]
            }, item.value, true, {
                fileName: "/app/src/components/ui/chart.tsx",
                lineNumber: 254,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "/app/src/components/ui/chart.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}, "qnidj+dVqj1Euuv2nRBc6D+LeAA=", false, function() {
    return [
        useChart
    ];
})), "qnidj+dVqj1Euuv2nRBc6D+LeAA=", false, function() {
    return [
        useChart
    ];
});
_c6 = ChartLegendContent;
ChartLegendContent.displayName = "ChartLegend";
// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
    if (typeof payload !== "object" || payload === null) {
        return undefined;
    }
    const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : undefined;
    let configLabelKey = key;
    if (key in payload && typeof payload[key] === "string") {
        configLabelKey = payload[key];
    } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config ? config[configLabelKey] : config[key];
}
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "ChartContainer$React.forwardRef");
$RefreshReg$(_c1, "ChartContainer");
$RefreshReg$(_c2, "ChartStyle");
$RefreshReg$(_c3, "ChartTooltipContent$React.forwardRef");
$RefreshReg$(_c4, "ChartTooltipContent");
$RefreshReg$(_c5, "ChartLegendContent$React.forwardRef");
$RefreshReg$(_c6, "ChartLegendContent");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/chart.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/chart.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlY2hhcnRzUHJpbWl0aXZlIGZyb20gXCJyZWNoYXJ0c1wiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG4vLyBGb3JtYXQ6IHsgVEhFTUVfTkFNRTogQ1NTX1NFTEVDVE9SIH1cbmNvbnN0IFRIRU1FUyA9IHsgbGlnaHQ6IFwiXCIsIGRhcms6IFwiLmRhcmtcIiB9IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBDaGFydENvbmZpZyA9IHtcbiAgW2sgaW4gc3RyaW5nXToge1xuICAgIGxhYmVsPzogUmVhY3QuUmVhY3ROb2RlO1xuICAgIGljb24/OiBSZWFjdC5Db21wb25lbnRUeXBlO1xuICB9ICYgKHsgY29sb3I/OiBzdHJpbmc7IHRoZW1lPzogbmV2ZXIgfSB8IHsgY29sb3I/OiBuZXZlcjsgdGhlbWU6IFJlY29yZDxrZXlvZiB0eXBlb2YgVEhFTUVTLCBzdHJpbmc+IH0pO1xufTtcblxudHlwZSBDaGFydENvbnRleHRQcm9wcyA9IHtcbiAgY29uZmlnOiBDaGFydENvbmZpZztcbn07XG5cbmNvbnN0IENoYXJ0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q2hhcnRDb250ZXh0UHJvcHMgfCBudWxsPihudWxsKTtcblxuZnVuY3Rpb24gdXNlQ2hhcnQoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENoYXJ0Q29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQ2hhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIDxDaGFydENvbnRhaW5lciAvPlwiKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5jb25zdCBDaGFydENvbnRhaW5lciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxEaXZFbGVtZW50LFxuICBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPiAmIHtcbiAgICBjb25maWc6IENoYXJ0Q29uZmlnO1xuICAgIGNoaWxkcmVuOiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgUmVjaGFydHNQcmltaXRpdmUuUmVzcG9uc2l2ZUNvbnRhaW5lcj5bXCJjaGlsZHJlblwiXTtcbiAgfVxuPigoeyBpZCwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgY29uZmlnLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgY29uc3QgdW5pcXVlSWQgPSBSZWFjdC51c2VJZCgpO1xuICBjb25zdCBjaGFydElkID0gYGNoYXJ0LSR7aWQgfHwgdW5pcXVlSWQucmVwbGFjZSgvOi9nLCBcIlwiKX1gO1xuXG4gIHJldHVybiAoXG4gICAgPENoYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb25maWcgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIGRhdGEtY2hhcnQ9e2NoYXJ0SWR9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiZmxleCBhc3BlY3QtdmlkZW8ganVzdGlmeS1jZW50ZXIgdGV4dC14cyBbJl8ucmVjaGFydHMtY2FydGVzaWFuLWF4aXMtdGlja190ZXh0XTpmaWxsLW11dGVkLWZvcmVncm91bmQgWyZfLnJlY2hhcnRzLWNhcnRlc2lhbi1ncmlkX2xpbmVbc3Ryb2tlPScjY2NjJ11dOnN0cm9rZS1ib3JkZXIvNTAgWyZfLnJlY2hhcnRzLWN1cnZlLnJlY2hhcnRzLXRvb2x0aXAtY3Vyc29yXTpzdHJva2UtYm9yZGVyIFsmXy5yZWNoYXJ0cy1kb3Rbc3Ryb2tlPScjZmZmJ11dOnN0cm9rZS10cmFuc3BhcmVudCBbJl8ucmVjaGFydHMtbGF5ZXJdOm91dGxpbmUtbm9uZSBbJl8ucmVjaGFydHMtcG9sYXItZ3JpZF9bc3Ryb2tlPScjY2NjJ11dOnN0cm9rZS1ib3JkZXIgWyZfLnJlY2hhcnRzLXJhZGlhbC1iYXItYmFja2dyb3VuZC1zZWN0b3JdOmZpbGwtbXV0ZWQgWyZfLnJlY2hhcnRzLXJlY3RhbmdsZS5yZWNoYXJ0cy10b29sdGlwLWN1cnNvcl06ZmlsbC1tdXRlZCBbJl8ucmVjaGFydHMtcmVmZXJlbmNlLWxpbmVfW3N0cm9rZT0nI2NjYyddXTpzdHJva2UtYm9yZGVyIFsmXy5yZWNoYXJ0cy1zZWN0b3Jbc3Ryb2tlPScjZmZmJ11dOnN0cm9rZS10cmFuc3BhcmVudCBbJl8ucmVjaGFydHMtc2VjdG9yXTpvdXRsaW5lLW5vbmUgWyZfLnJlY2hhcnRzLXN1cmZhY2VdOm91dGxpbmUtbm9uZVwiLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8Q2hhcnRTdHlsZSBpZD17Y2hhcnRJZH0gY29uZmlnPXtjb25maWd9IC8+XG4gICAgICAgIDxSZWNoYXJ0c1ByaW1pdGl2ZS5SZXNwb25zaXZlQ29udGFpbmVyPntjaGlsZHJlbn08L1JlY2hhcnRzUHJpbWl0aXZlLlJlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NoYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn0pO1xuQ2hhcnRDb250YWluZXIuZGlzcGxheU5hbWUgPSBcIkNoYXJ0XCI7XG5cbmNvbnN0IENoYXJ0U3R5bGUgPSAoeyBpZCwgY29uZmlnIH06IHsgaWQ6IHN0cmluZzsgY29uZmlnOiBDaGFydENvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IGNvbG9yQ29uZmlnID0gT2JqZWN0LmVudHJpZXMoY29uZmlnKS5maWx0ZXIoKFtfLCBjb25maWddKSA9PiBjb25maWcudGhlbWUgfHwgY29uZmlnLmNvbG9yKTtcblxuICBpZiAoIWNvbG9yQ29uZmlnLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3R5bGVcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgIF9faHRtbDogT2JqZWN0LmVudHJpZXMoVEhFTUVTKVxuICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAoW3RoZW1lLCBwcmVmaXhdKSA9PiBgXG4ke3ByZWZpeH0gW2RhdGEtY2hhcnQ9JHtpZH1dIHtcbiR7Y29sb3JDb25maWdcbiAgLm1hcCgoW2tleSwgaXRlbUNvbmZpZ10pID0+IHtcbiAgICBjb25zdCBjb2xvciA9IGl0ZW1Db25maWcudGhlbWU/Llt0aGVtZSBhcyBrZXlvZiB0eXBlb2YgaXRlbUNvbmZpZy50aGVtZV0gfHwgaXRlbUNvbmZpZy5jb2xvcjtcbiAgICByZXR1cm4gY29sb3IgPyBgICAtLWNvbG9yLSR7a2V5fTogJHtjb2xvcn07YCA6IG51bGw7XG4gIH0pXG4gIC5qb2luKFwiXFxuXCIpfVxufVxuYCxcbiAgICAgICAgICApXG4gICAgICAgICAgLmpvaW4oXCJcXG5cIiksXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBDaGFydFRvb2x0aXAgPSBSZWNoYXJ0c1ByaW1pdGl2ZS5Ub29sdGlwO1xuXG5jb25zdCBDaGFydFRvb2x0aXBDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBSZWNoYXJ0c1ByaW1pdGl2ZS5Ub29sdGlwPiAmXG4gICAgUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4gJiB7XG4gICAgICBoaWRlTGFiZWw/OiBib29sZWFuO1xuICAgICAgaGlkZUluZGljYXRvcj86IGJvb2xlYW47XG4gICAgICBpbmRpY2F0b3I/OiBcImxpbmVcIiB8IFwiZG90XCIgfCBcImRhc2hlZFwiO1xuICAgICAgbmFtZUtleT86IHN0cmluZztcbiAgICAgIGxhYmVsS2V5Pzogc3RyaW5nO1xuICAgIH1cbj4oXG4gIChcbiAgICB7XG4gICAgICBhY3RpdmUsXG4gICAgICBwYXlsb2FkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaW5kaWNhdG9yID0gXCJkb3RcIixcbiAgICAgIGhpZGVMYWJlbCA9IGZhbHNlLFxuICAgICAgaGlkZUluZGljYXRvciA9IGZhbHNlLFxuICAgICAgbGFiZWwsXG4gICAgICBsYWJlbEZvcm1hdHRlcixcbiAgICAgIGxhYmVsQ2xhc3NOYW1lLFxuICAgICAgZm9ybWF0dGVyLFxuICAgICAgY29sb3IsXG4gICAgICBuYW1lS2V5LFxuICAgICAgbGFiZWxLZXksXG4gICAgfSxcbiAgICByZWYsXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB1c2VDaGFydCgpO1xuXG4gICAgY29uc3QgdG9vbHRpcExhYmVsID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICBpZiAoaGlkZUxhYmVsIHx8ICFwYXlsb2FkPy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtpdGVtXSA9IHBheWxvYWQ7XG4gICAgICBjb25zdCBrZXkgPSBgJHtsYWJlbEtleSB8fCBpdGVtLmRhdGFLZXkgfHwgaXRlbS5uYW1lIHx8IFwidmFsdWVcIn1gO1xuICAgICAgY29uc3QgaXRlbUNvbmZpZyA9IGdldFBheWxvYWRDb25maWdGcm9tUGF5bG9hZChjb25maWcsIGl0ZW0sIGtleSk7XG4gICAgICBjb25zdCB2YWx1ZSA9XG4gICAgICAgICFsYWJlbEtleSAmJiB0eXBlb2YgbGFiZWwgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICA/IGNvbmZpZ1tsYWJlbCBhcyBrZXlvZiB0eXBlb2YgY29uZmlnXT8ubGFiZWwgfHwgbGFiZWxcbiAgICAgICAgICA6IGl0ZW1Db25maWc/LmxhYmVsO1xuXG4gICAgICBpZiAobGFiZWxGb3JtYXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbihcImZvbnQtbWVkaXVtXCIsIGxhYmVsQ2xhc3NOYW1lKX0+e2xhYmVsRm9ybWF0dGVyKHZhbHVlLCBwYXlsb2FkKX08L2Rpdj47XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y24oXCJmb250LW1lZGl1bVwiLCBsYWJlbENsYXNzTmFtZSl9Pnt2YWx1ZX08L2Rpdj47XG4gICAgfSwgW2xhYmVsLCBsYWJlbEZvcm1hdHRlciwgcGF5bG9hZCwgaGlkZUxhYmVsLCBsYWJlbENsYXNzTmFtZSwgY29uZmlnLCBsYWJlbEtleV0pO1xuXG4gICAgaWYgKCFhY3RpdmUgfHwgIXBheWxvYWQ/Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbmVzdExhYmVsID0gcGF5bG9hZC5sZW5ndGggPT09IDEgJiYgaW5kaWNhdG9yICE9PSBcImRvdFwiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJncmlkIG1pbi13LVs4cmVtXSBpdGVtcy1zdGFydCBnYXAtMS41IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ib3JkZXIvNTAgYmctYmFja2dyb3VuZCBweC0yLjUgcHktMS41IHRleHQteHMgc2hhZG93LXhsXCIsXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7IW5lc3RMYWJlbCA/IHRvb2x0aXBMYWJlbCA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMS41XCI+XG4gICAgICAgICAge3BheWxvYWQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYCR7bmFtZUtleSB8fCBpdGVtLm5hbWUgfHwgaXRlbS5kYXRhS2V5IHx8IFwidmFsdWVcIn1gO1xuICAgICAgICAgICAgY29uc3QgaXRlbUNvbmZpZyA9IGdldFBheWxvYWRDb25maWdGcm9tUGF5bG9hZChjb25maWcsIGl0ZW0sIGtleSk7XG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3JDb2xvciA9IGNvbG9yIHx8IGl0ZW0ucGF5bG9hZC5maWxsIHx8IGl0ZW0uY29sb3I7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uZGF0YUtleX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgXCJmbGV4IHctZnVsbCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBnYXAtMiBbJj5zdmddOmgtMi41IFsmPnN2Z106dy0yLjUgWyY+c3ZnXTp0ZXh0LW11dGVkLWZvcmVncm91bmRcIixcbiAgICAgICAgICAgICAgICAgIGluZGljYXRvciA9PT0gXCJkb3RcIiAmJiBcIml0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0dGVyICYmIGl0ZW0/LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgaXRlbS5uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyKGl0ZW0udmFsdWUsIGl0ZW0ubmFtZSwgaXRlbSwgaW5kZXgsIGl0ZW0ucGF5bG9hZClcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1Db25maWc/Lmljb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPGl0ZW1Db25maWcuaWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICFoaWRlSW5kaWNhdG9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcInNocmluay0wIHJvdW5kZWQtWzJweF0gYm9yZGVyLVstLWNvbG9yLWJvcmRlcl0gYmctWy0tY29sb3ItYmddXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgtMi41IHctMi41XCI6IGluZGljYXRvciA9PT0gXCJkb3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInctMVwiOiBpbmRpY2F0b3IgPT09IFwibGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidy0wIGJvcmRlci1bMS41cHhdIGJvcmRlci1kYXNoZWQgYmctdHJhbnNwYXJlbnRcIjogaW5kaWNhdG9yID09PSBcImRhc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibXktMC41XCI6IG5lc3RMYWJlbCAmJiBpbmRpY2F0b3IgPT09IFwiZGFzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWNvbG9yLWJnXCI6IGluZGljYXRvckNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWNvbG9yLWJvcmRlclwiOiBpbmRpY2F0b3JDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtMSBqdXN0aWZ5LWJldHdlZW4gbGVhZGluZy1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXN0TGFiZWwgPyBcIml0ZW1zLWVuZFwiIDogXCJpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXN0TGFiZWwgPyB0b29sdGlwTGFiZWwgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e2l0ZW1Db25maWc/LmxhYmVsIHx8IGl0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtbWVkaXVtIHRhYnVsYXItbnVtcyB0ZXh0LWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWUudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuKTtcbkNoYXJ0VG9vbHRpcENvbnRlbnQuZGlzcGxheU5hbWUgPSBcIkNoYXJ0VG9vbHRpcFwiO1xuXG5jb25zdCBDaGFydExlZ2VuZCA9IFJlY2hhcnRzUHJpbWl0aXZlLkxlZ2VuZDtcblxuY29uc3QgQ2hhcnRMZWdlbmRDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICZcbiAgICBQaWNrPFJlY2hhcnRzUHJpbWl0aXZlLkxlZ2VuZFByb3BzLCBcInBheWxvYWRcIiB8IFwidmVydGljYWxBbGlnblwiPiAmIHtcbiAgICAgIGhpZGVJY29uPzogYm9vbGVhbjtcbiAgICAgIG5hbWVLZXk/OiBzdHJpbmc7XG4gICAgfVxuPigoeyBjbGFzc05hbWUsIGhpZGVJY29uID0gZmFsc2UsIHBheWxvYWQsIHZlcnRpY2FsQWxpZ24gPSBcImJvdHRvbVwiLCBuYW1lS2V5IH0sIHJlZikgPT4ge1xuICBjb25zdCB7IGNvbmZpZyB9ID0gdXNlQ2hhcnQoKTtcblxuICBpZiAoIXBheWxvYWQ/Lmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiLCB2ZXJ0aWNhbEFsaWduID09PSBcInRvcFwiID8gXCJwYi0zXCIgOiBcInB0LTNcIiwgY2xhc3NOYW1lKX1cbiAgICA+XG4gICAgICB7cGF5bG9hZC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7bmFtZUtleSB8fCBpdGVtLmRhdGFLZXkgfHwgXCJ2YWx1ZVwifWA7XG4gICAgICAgIGNvbnN0IGl0ZW1Db25maWcgPSBnZXRQYXlsb2FkQ29uZmlnRnJvbVBheWxvYWQoY29uZmlnLCBpdGVtLCBrZXkpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgWyY+c3ZnXTpoLTMgWyY+c3ZnXTp3LTMgWyY+c3ZnXTp0ZXh0LW11dGVkLWZvcmVncm91bmRcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l0ZW1Db25maWc/Lmljb24gJiYgIWhpZGVJY29uID8gKFxuICAgICAgICAgICAgICA8aXRlbUNvbmZpZy5pY29uIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0yIHctMiBzaHJpbmstMCByb3VuZGVkLVsycHhdXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpdGVtLmNvbG9yLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2l0ZW1Db25maWc/LmxhYmVsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59KTtcbkNoYXJ0TGVnZW5kQ29udGVudC5kaXNwbGF5TmFtZSA9IFwiQ2hhcnRMZWdlbmRcIjtcblxuLy8gSGVscGVyIHRvIGV4dHJhY3QgaXRlbSBjb25maWcgZnJvbSBhIHBheWxvYWQuXG5mdW5jdGlvbiBnZXRQYXlsb2FkQ29uZmlnRnJvbVBheWxvYWQoY29uZmlnOiBDaGFydENvbmZpZywgcGF5bG9hZDogdW5rbm93biwga2V5OiBzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBwYXlsb2FkICE9PSBcIm9iamVjdFwiIHx8IHBheWxvYWQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgcGF5bG9hZFBheWxvYWQgPVxuICAgIFwicGF5bG9hZFwiIGluIHBheWxvYWQgJiYgdHlwZW9mIHBheWxvYWQucGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJiBwYXlsb2FkLnBheWxvYWQgIT09IG51bGxcbiAgICAgID8gcGF5bG9hZC5wYXlsb2FkXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICBsZXQgY29uZmlnTGFiZWxLZXk6IHN0cmluZyA9IGtleTtcblxuICBpZiAoa2V5IGluIHBheWxvYWQgJiYgdHlwZW9mIHBheWxvYWRba2V5IGFzIGtleW9mIHR5cGVvZiBwYXlsb2FkXSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbmZpZ0xhYmVsS2V5ID0gcGF5bG9hZFtrZXkgYXMga2V5b2YgdHlwZW9mIHBheWxvYWRdIGFzIHN0cmluZztcbiAgfSBlbHNlIGlmIChcbiAgICBwYXlsb2FkUGF5bG9hZCAmJlxuICAgIGtleSBpbiBwYXlsb2FkUGF5bG9hZCAmJlxuICAgIHR5cGVvZiBwYXlsb2FkUGF5bG9hZFtrZXkgYXMga2V5b2YgdHlwZW9mIHBheWxvYWRQYXlsb2FkXSA9PT0gXCJzdHJpbmdcIlxuICApIHtcbiAgICBjb25maWdMYWJlbEtleSA9IHBheWxvYWRQYXlsb2FkW2tleSBhcyBrZXlvZiB0eXBlb2YgcGF5bG9hZFBheWxvYWRdIGFzIHN0cmluZztcbiAgfVxuXG4gIHJldHVybiBjb25maWdMYWJlbEtleSBpbiBjb25maWcgPyBjb25maWdbY29uZmlnTGFiZWxLZXldIDogY29uZmlnW2tleSBhcyBrZXlvZiB0eXBlb2YgY29uZmlnXTtcbn1cblxuZXhwb3J0IHsgQ2hhcnRDb250YWluZXIsIENoYXJ0VG9vbHRpcCwgQ2hhcnRUb29sdGlwQ29udGVudCwgQ2hhcnRMZWdlbmQsIENoYXJ0TGVnZW5kQ29udGVudCwgQ2hhcnRTdHlsZSB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlY2hhcnRzUHJpbWl0aXZlIiwiY24iLCJUSEVNRVMiLCJsaWdodCIsImRhcmsiLCJDaGFydENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2hhcnQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIiwiQ2hhcnRDb250YWluZXIiLCJmb3J3YXJkUmVmIiwiaWQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImNvbmZpZyIsInByb3BzIiwicmVmIiwidW5pcXVlSWQiLCJ1c2VJZCIsImNoYXJ0SWQiLCJyZXBsYWNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiIsImRhdGEtY2hhcnQiLCJDaGFydFN0eWxlIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsImRpc3BsYXlOYW1lIiwiY29sb3JDb25maWciLCJPYmplY3QiLCJlbnRyaWVzIiwiZmlsdGVyIiwiXyIsInRoZW1lIiwiY29sb3IiLCJsZW5ndGgiLCJzdHlsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwibWFwIiwicHJlZml4Iiwia2V5IiwiaXRlbUNvbmZpZyIsImpvaW4iLCJDaGFydFRvb2x0aXAiLCJUb29sdGlwIiwiQ2hhcnRUb29sdGlwQ29udGVudCIsImFjdGl2ZSIsInBheWxvYWQiLCJpbmRpY2F0b3IiLCJoaWRlTGFiZWwiLCJoaWRlSW5kaWNhdG9yIiwibGFiZWwiLCJsYWJlbEZvcm1hdHRlciIsImxhYmVsQ2xhc3NOYW1lIiwiZm9ybWF0dGVyIiwibmFtZUtleSIsImxhYmVsS2V5IiwidG9vbHRpcExhYmVsIiwidXNlTWVtbyIsIml0ZW0iLCJkYXRhS2V5IiwibmFtZSIsImdldFBheWxvYWRDb25maWdGcm9tUGF5bG9hZCIsIm5lc3RMYWJlbCIsImluZGV4IiwiaW5kaWNhdG9yQ29sb3IiLCJmaWxsIiwidW5kZWZpbmVkIiwiaWNvbiIsInNwYW4iLCJ0b0xvY2FsZVN0cmluZyIsIkNoYXJ0TGVnZW5kIiwiTGVnZW5kIiwiQ2hhcnRMZWdlbmRDb250ZW50IiwiaGlkZUljb24iLCJ2ZXJ0aWNhbEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwicGF5bG9hZFBheWxvYWQiLCJjb25maWdMYWJlbEtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWUEsV0FBVyxRQUFRO0FBQy9CLFlBQVlDLHVCQUF1QixXQUFXO0FBRTlDLFNBQVNDLEVBQUUsUUFBUSxjQUFjO0FBRWpDLHVDQUF1QztBQUN2QyxNQUFNQyxTQUFTO0lBQUVDLE9BQU87SUFBSUMsTUFBTTtBQUFRO0FBYTFDLE1BQU1DLDZCQUFlTixNQUFNTyxhQUFhLENBQTJCO0FBRW5FLFNBQVNDOztJQUNQLE1BQU1DLFVBQVVULE1BQU1VLFVBQVUsQ0FBQ0o7SUFFakMs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