import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Download.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Download.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const useState = __vite__cjsImport3_react["useState"];
import __vite__cjsImport4_jszip from "/node_modules/.vite/deps/jszip.js?v=7dd7a232"; const JSZip = __vite__cjsImport4_jszip.__esModule ? __vite__cjsImport4_jszip.default : __vite__cjsImport4_jszip;
import { Button } from "/src/components/ui/button.tsx";
import { Progress } from "/src/components/ui/progress.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/src/components/ui/card.tsx";
import { Download as DownloadIcon, ArrowLeft, Copy, Check } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { Textarea } from "/src/components/ui/textarea.tsx";
const FILES = [
    "ai-skills.md",
    "bun.lock",
    "chat-history.md",
    "components.json",
    "eslint.config.js",
    "index.html",
    "package.json",
    "postcss.config.js",
    "public/hyper-attendant-loader.js",
    "public/hyper-cart-loader.js",
    "public/placeholder.svg",
    "public/robots.txt",
    "README.md",
    "src/App.css",
    "src/App.tsx",
    "src/components/CartOverlay.tsx",
    "src/components/NavLink.tsx",
    "src/components/ShoppingAttendant.tsx",
    "src/components/ui/accordion.tsx",
    "src/components/ui/alert-dialog.tsx",
    "src/components/ui/alert.tsx",
    "src/components/ui/aspect-ratio.tsx",
    "src/components/ui/avatar.tsx",
    "src/components/ui/badge.tsx",
    "src/components/ui/breadcrumb.tsx",
    "src/components/ui/button.tsx",
    "src/components/ui/calendar.tsx",
    "src/components/ui/card.tsx",
    "src/components/ui/carousel.tsx",
    "src/components/ui/chart.tsx",
    "src/components/ui/checkbox.tsx",
    "src/components/ui/collapsible.tsx",
    "src/components/ui/command.tsx",
    "src/components/ui/context-menu.tsx",
    "src/components/ui/dialog.tsx",
    "src/components/ui/drawer.tsx",
    "src/components/ui/dropdown-menu.tsx",
    "src/components/ui/form.tsx",
    "src/components/ui/hover-card.tsx",
    "src/components/ui/input-otp.tsx",
    "src/components/ui/input.tsx",
    "src/components/ui/label.tsx",
    "src/components/ui/menubar.tsx",
    "src/components/ui/navigation-menu.tsx",
    "src/components/ui/pagination.tsx",
    "src/components/ui/popover.tsx",
    "src/components/ui/progress.tsx",
    "src/components/ui/radio-group.tsx",
    "src/components/ui/resizable.tsx",
    "src/components/ui/scroll-area.tsx",
    "src/components/ui/select.tsx",
    "src/components/ui/separator.tsx",
    "src/components/ui/sheet.tsx",
    "src/components/ui/sidebar.tsx",
    "src/components/ui/skeleton.tsx",
    "src/components/ui/slider.tsx",
    "src/components/ui/sonner.tsx",
    "src/components/ui/switch.tsx",
    "src/components/ui/table.tsx",
    "src/components/ui/tabs.tsx",
    "src/components/ui/textarea.tsx",
    "src/components/ui/toaster.tsx",
    "src/components/ui/toast.tsx",
    "src/components/ui/toggle-group.tsx",
    "src/components/ui/toggle.tsx",
    "src/components/ui/tooltip.tsx",
    "src/components/ui/use-toast.ts",
    "src/hooks/use-mobile.tsx",
    "src/hooks/use-toast.ts",
    "src/index.css",
    "src/lib/utils.ts",
    "src/main.tsx",
    "src/pages/Dashboard.tsx",
    "src/pages/Download.tsx",
    "src/pages/Index.tsx",
    "src/pages/NotFound.tsx",
    "src/test/example.test.ts",
    "src/test/setup.ts",
    "src/vite-env.d.ts",
    "tailwind.config.ts",
    "tsconfig.app.json",
    "tsconfig.json",
    "tsconfig.node.json",
    "vite.config.ts",
    "vitest.config.ts"
];
export default function Download() {
    _s();
    const [isDownloading, setIsDownloading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("");
    const [snippet, setSnippet] = useState("");
    const [copied, setCopied] = useState(false);
    const handleDownload = async ()=>{
        setIsDownloading(true);
        setProgress(0);
        setStatus("Initializing zip...");
        setSnippet("");
        setCopied(false);
        try {
            const zip = new JSZip();
            let completed = 0;
            for (const file of FILES){
                setStatus("Fetching " + file + "...");
                try {
                    const response = await fetch("/" + file);
                    if (response.ok) {
                        const blob = await response.blob();
                        zip.file(file, blob);
                    } else {
                        console.warn("Failed to fetch " + file + ": " + response.statusText);
                    }
                } catch (err) {
                    console.warn("Error fetching " + file, err);
                }
                completed++;
                setProgress(completed / FILES.length * 100);
            }
            setStatus("Generating zip file...");
            const base64 = await zip.generateAsync({
                type: "base64"
            });
            const codeSnippet = `
const b64 = "${base64}";
const bin = atob(b64);
const arr = new Uint8Array(bin.length);
for(let i=0; i<bin.length; i++) arr[i] = bin.charCodeAt(i);
const blob = new Blob([arr], {type: "application/zip"});
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "hypercart-project.zip";
a.click();
URL.revokeObjectURL(url);
`.trim();
            setSnippet(codeSnippet);
            setStatus("Snippet generated successfully!");
        } catch (error) {
            console.error("Download failed", error);
            setStatus("Download failed. See console for details.");
        } finally{
            setIsDownloading(false);
        }
    };
    const copyToClipboard = async ()=>{
        try {
            await navigator.clipboard.writeText(snippet);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (err) {
            // Fallback for sandboxed iframes
            const textArea = document.createElement("textarea");
            textArea.value = snippet;
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    setCopied(true);
                    setTimeout(()=>setCopied(false), 2000);
                } else {
                    alert("Clipboard access blocked. Please select the text inside the box and copy manually.");
                }
            } catch (e) {
                alert("Clipboard access blocked. Please select the text inside the box and copy manually.");
            }
            document.body.removeChild(textArea);
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [
            /*#__PURE__*/ _jsxDEV("header", {
                className: "border-b px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "h-8 w-8 bg-primary rounded-md flex items-center justify-center",
                                children: /*#__PURE__*/ _jsxDEV("span", {
                                    className: "text-primary-foreground font-bold",
                                    children: "H"
                                }, void 0, false, {
                                    fileName: "/app/src/pages/Download.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/Download.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("h1", {
                                className: "text-xl font-bold tracking-tight",
                                children: "<hyper-cart/>"
                            }, void 0, false, {
                                fileName: "/app/src/pages/Download.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/pages/Download.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("a", {
                        href: "/",
                        className: "text-sm font-medium hover:underline text-muted-foreground flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ _jsxDEV(ArrowLeft, {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "/app/src/pages/Download.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            " Back to Home"
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/pages/Download.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/src/pages/Download.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "flex-1 flex flex-col items-center p-6 mt-10",
                children: /*#__PURE__*/ _jsxDEV(Card, {
                    className: "w-full max-w-2xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV(CardHeader, {
                            children: [
                                /*#__PURE__*/ _jsxDEV(CardTitle, {
                                    children: "Export Project"
                                }, void 0, false, {
                                    fileName: "/app/src/pages/Download.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV(CardDescription, {
                                    children: "Generate a console snippet to download the complete source code for HyperCart, bypassing the sandbox restrictions."
                                }, void 0, false, {
                                    fileName: "/app/src/pages/Download.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/src/pages/Download.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(CardContent, {
                            className: "space-y-6",
                            children: [
                                isDownloading ? /*#__PURE__*/ _jsxDEV("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex justify-between text-sm text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "truncate pr-4",
                                                    children: status
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Download.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    children: [
                                                        Math.round(progress),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Download.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Download.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Progress, {
                                            value: progress
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Download.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/pages/Download.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ _jsxDEV(Button, {
                                    className: "w-full",
                                    size: "lg",
                                    onClick: handleDownload,
                                    disabled: !!snippet,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(DownloadIcon, {
                                            className: "mr-2 h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Download.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        "Generate Download Snippet"
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/pages/Download.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                snippet && /*#__PURE__*/ _jsxDEV("div", {
                                    className: "space-y-4 animate-in fade-in slide-in-from-bottom-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "text-sm text-green-600 dark:text-green-400 font-medium",
                                            children: "Snippet generated! Copy and paste this into your browser's Developer Console (F12) to download the ZIP file."
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Download.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Textarea, {
                                                    value: snippet,
                                                    readOnly: true,
                                                    className: "font-mono text-xs h-40 bg-muted/50 resize-none pr-12"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Download.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Button, {
                                                    size: "icon",
                                                    variant: "secondary",
                                                    className: "absolute top-2 right-2 h-8 w-8",
                                                    onClick: copyToClipboard,
                                                    children: copied ? /*#__PURE__*/ _jsxDEV(Check, {
                                                        className: "h-4 w-4 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Download.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ _jsxDEV(Copy, {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Download.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 78
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Download.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Download.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Button, {
                                            variant: "outline",
                                            className: "w-full",
                                            onClick: ()=>setSnippet(""),
                                            children: "Start Over"
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Download.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/pages/Download.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/src/pages/Download.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/src/pages/Download.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/app/src/pages/Download.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/pages/Download.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(Download, "0TYVP9KorXeWFC9xchPsf+tsbfU=");
_c = Download;
var _c;
$RefreshReg$(_c, "Download");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Download.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Download.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRvd25sb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEpTWmlwIGZyb20gXCJqc3ppcFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9wcm9ncmVzc1wiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmREZXNjcmlwdGlvbiwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBEb3dubG9hZCBhcyBEb3dubG9hZEljb24sIEFycm93TGVmdCwgQ29weSwgQ2hlY2sgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcblxuY29uc3QgRklMRVMgPSBbXG4gIFwiYWktc2tpbGxzLm1kXCIsXG4gIFwiYnVuLmxvY2tcIixcbiAgXCJjaGF0LWhpc3RvcnkubWRcIixcbiAgXCJjb21wb25lbnRzLmpzb25cIixcbiAgXCJlc2xpbnQuY29uZmlnLmpzXCIsXG4gIFwiaW5kZXguaHRtbFwiLFxuICBcInBhY2thZ2UuanNvblwiLFxuICBcInBvc3Rjc3MuY29uZmlnLmpzXCIsXG4gIFwicHVibGljL2h5cGVyLWF0dGVuZGFudC1sb2FkZXIuanNcIixcbiAgXCJwdWJsaWMvaHlwZXItY2FydC1sb2FkZXIuanNcIixcbiAgXCJwdWJsaWMvcGxhY2Vob2xkZXIuc3ZnXCIsXG4gIFwicHVibGljL3JvYm90cy50eHRcIixcbiAgXCJSRUFETUUubWRcIixcbiAgXCJzcmMvQXBwLmNzc1wiLFxuICBcInNyYy9BcHAudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvQ2FydE92ZXJsYXkudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvTmF2TGluay50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy9TaG9wcGluZ0F0dGVuZGFudC50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9hY2NvcmRpb24udHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvYWxlcnQtZGlhbG9nLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL2FsZXJ0LnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL2FzcGVjdC1yYXRpby50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9hdmF0YXIudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvYmFkZ2UudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvYnJlYWRjcnVtYi50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9idXR0b24udHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvY2FsZW5kYXIudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvY2FyZC50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9jYXJvdXNlbC50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9jaGFydC50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9jaGVja2JveC50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9jb2xsYXBzaWJsZS50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9jb21tYW5kLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL2NvbnRleHQtbWVudS50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9kaWFsb2cudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvZHJhd2VyLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnUudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvZm9ybS50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9ob3Zlci1jYXJkLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL2lucHV0LW90cC50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9pbnB1dC50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9sYWJlbC50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9tZW51YmFyLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL25hdmlnYXRpb24tbWVudS50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9wYWdpbmF0aW9uLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL3BvcG92ZXIudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvcHJvZ3Jlc3MudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvcmFkaW8tZ3JvdXAudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvcmVzaXphYmxlLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL3Njcm9sbC1hcmVhLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL3NlbGVjdC50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9zZXBhcmF0b3IudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvc2hlZXQudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvc2lkZWJhci50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9za2VsZXRvbi50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS9zbGlkZXIudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvc29ubmVyLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL3N3aXRjaC50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS90YWJsZS50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS90YWJzLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL3RleHRhcmVhLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL3RvYXN0ZXIudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvdG9hc3QudHN4XCIsXG4gIFwic3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLWdyb3VwLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL3RvZ2dsZS50c3hcIixcbiAgXCJzcmMvY29tcG9uZW50cy91aS90b29sdGlwLnRzeFwiLFxuICBcInNyYy9jb21wb25lbnRzL3VpL3VzZS10b2FzdC50c1wiLFxuICBcInNyYy9ob29rcy91c2UtbW9iaWxlLnRzeFwiLFxuICBcInNyYy9ob29rcy91c2UtdG9hc3QudHNcIixcbiAgXCJzcmMvaW5kZXguY3NzXCIsXG4gIFwic3JjL2xpYi91dGlscy50c1wiLFxuICBcInNyYy9tYWluLnRzeFwiLFxuICBcInNyYy9wYWdlcy9EYXNoYm9hcmQudHN4XCIsXG4gIFwic3JjL3BhZ2VzL0Rvd25sb2FkLnRzeFwiLFxuICBcInNyYy9wYWdlcy9JbmRleC50c3hcIixcbiAgXCJzcmMvcGFnZXMvTm90Rm91bmQudHN4XCIsXG4gIFwic3JjL3Rlc3QvZXhhbXBsZS50ZXN0LnRzXCIsXG4gIFwic3JjL3Rlc3Qvc2V0dXAudHNcIixcbiAgXCJzcmMvdml0ZS1lbnYuZC50c1wiLFxuICBcInRhaWx3aW5kLmNvbmZpZy50c1wiLFxuICBcInRzY29uZmlnLmFwcC5qc29uXCIsXG4gIFwidHNjb25maWcuanNvblwiLFxuICBcInRzY29uZmlnLm5vZGUuanNvblwiLFxuICBcInZpdGUuY29uZmlnLnRzXCIsXG4gIFwidml0ZXN0LmNvbmZpZy50c1wiXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb3dubG9hZCgpIHtcbiAgY29uc3QgW2lzRG93bmxvYWRpbmcsIHNldElzRG93bmxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzbmlwcGV0LCBzZXRTbmlwcGV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzRG93bmxvYWRpbmcodHJ1ZSk7XG4gICAgc2V0UHJvZ3Jlc3MoMCk7XG4gICAgc2V0U3RhdHVzKFwiSW5pdGlhbGl6aW5nIHppcC4uLlwiKTtcbiAgICBzZXRTbmlwcGV0KFwiXCIpO1xuICAgIHNldENvcGllZChmYWxzZSk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpO1xuICAgICAgbGV0IGNvbXBsZXRlZCA9IDA7XG5cbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBGSUxFUykge1xuICAgICAgICBzZXRTdGF0dXMoXCJGZXRjaGluZyBcIiArIGZpbGUgKyBcIi4uLlwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL1wiICsgZmlsZSk7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgICAgemlwLmZpbGUoZmlsZSwgYmxvYik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBmZXRjaCBcIiArIGZpbGUgKyBcIjogXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIkVycm9yIGZldGNoaW5nIFwiICsgZmlsZSwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wbGV0ZWQrKztcbiAgICAgICAgc2V0UHJvZ3Jlc3MoKGNvbXBsZXRlZCAvIEZJTEVTLmxlbmd0aCkgKiAxMDApO1xuICAgICAgfVxuXG4gICAgICBzZXRTdGF0dXMoXCJHZW5lcmF0aW5nIHppcCBmaWxlLi4uXCIpO1xuICAgICAgY29uc3QgYmFzZTY0ID0gYXdhaXQgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiBcImJhc2U2NFwiIH0pO1xuICAgICAgXG4gICAgICBjb25zdCBjb2RlU25pcHBldCA9IGBcbmNvbnN0IGI2NCA9IFwiJHtiYXNlNjR9XCI7XG5jb25zdCBiaW4gPSBhdG9iKGI2NCk7XG5jb25zdCBhcnIgPSBuZXcgVWludDhBcnJheShiaW4ubGVuZ3RoKTtcbmZvcihsZXQgaT0wOyBpPGJpbi5sZW5ndGg7IGkrKykgYXJyW2ldID0gYmluLmNoYXJDb2RlQXQoaSk7XG5jb25zdCBibG9iID0gbmV3IEJsb2IoW2Fycl0sIHt0eXBlOiBcImFwcGxpY2F0aW9uL3ppcFwifSk7XG5jb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuYS5ocmVmID0gdXJsO1xuYS5kb3dubG9hZCA9IFwiaHlwZXJjYXJ0LXByb2plY3QuemlwXCI7XG5hLmNsaWNrKCk7XG5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG5gLnRyaW0oKTtcblxuICAgICAgc2V0U25pcHBldChjb2RlU25pcHBldCk7XG4gICAgICBzZXRTdGF0dXMoXCJTbmlwcGV0IGdlbmVyYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRG93bmxvYWQgZmFpbGVkXCIsIGVycm9yKTtcbiAgICAgIHNldFN0YXR1cyhcIkRvd25sb2FkIGZhaWxlZC4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0Rvd25sb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzbmlwcGV0KTtcbiAgICAgIHNldENvcGllZCh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKGZhbHNlKSwgMjAwMCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBGYWxsYmFjayBmb3Igc2FuZGJveGVkIGlmcmFtZXNcbiAgICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgdGV4dEFyZWEudmFsdWUgPSBzbmlwcGV0O1xuICAgICAgdGV4dEFyZWEuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgICAgIHRleHRBcmVhLmZvY3VzKCk7XG4gICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICBpZiAoc3VjY2Vzc2Z1bCkge1xuICAgICAgICAgIHNldENvcGllZCh0cnVlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZChmYWxzZSksIDIwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiQ2xpcGJvYXJkIGFjY2VzcyBibG9ja2VkLiBQbGVhc2Ugc2VsZWN0IHRoZSB0ZXh0IGluc2lkZSB0aGUgYm94IGFuZCBjb3B5IG1hbnVhbGx5LlwiKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhbGVydChcIkNsaXBib2FyZCBhY2Nlc3MgYmxvY2tlZC4gUGxlYXNlIHNlbGVjdCB0aGUgdGV4dCBpbnNpZGUgdGhlIGJveCBhbmQgY29weSBtYW51YWxseS5cIik7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYm9yZGVyLWIgcHgtNiBweS00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1iYWNrZ3JvdW5kLzgwIGJhY2tkcm9wLWJsdXItbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04IHctOCBiZy1wcmltYXJ5IHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGZvbnQtYm9sZFwiPkg8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0XCI+Jmx0O2h5cGVyLWNhcnQvJmd0OzwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gaG92ZXI6dW5kZXJsaW5lIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgIDxBcnJvd0xlZnQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+IEJhY2sgdG8gSG9tZVxuICAgICAgICA8L2E+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC02IG10LTEwXCI+XG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGxcIj5cbiAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkVGl0bGU+RXhwb3J0IFByb2plY3Q8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+R2VuZXJhdGUgYSBjb25zb2xlIHNuaXBwZXQgdG8gZG93bmxvYWQgdGhlIGNvbXBsZXRlIHNvdXJjZSBjb2RlIGZvciBIeXBlckNhcnQsIGJ5cGFzc2luZyB0aGUgc2FuZGJveCByZXN0cmljdGlvbnMuPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIHtpc0Rvd25sb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlIHByLTRcIj57c3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntNYXRoLnJvdW5kKHByb2dyZXNzKX0lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB2YWx1ZT17cHJvZ3Jlc3N9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBzaXplPVwibGdcIiBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0gZGlzYWJsZWQ9eyEhc25pcHBldH0+XG4gICAgICAgICAgICAgICAgPERvd25sb2FkSWNvbiBjbGFzc05hbWU9XCJtci0yIGgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlIERvd25sb2FkIFNuaXBwZXRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7c25pcHBldCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IGFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JlZW4tNjAwIGRhcms6dGV4dC1ncmVlbi00MDAgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgIFNuaXBwZXQgZ2VuZXJhdGVkISBDb3B5IGFuZCBwYXN0ZSB0aGlzIGludG8geW91ciBicm93c2VyJmFwb3M7cyBEZXZlbG9wZXIgQ29uc29sZSAoRjEyKSB0byBkb3dubG9hZCB0aGUgWklQIGZpbGUuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c25pcHBldH0gXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyBoLTQwIGJnLW11dGVkLzUwIHJlc2l6ZS1ub25lIHByLTEyXCIgXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIiBcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIGgtOCB3LThcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb3BpZWQgPyA8Q2hlY2sgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWdyZWVuLTUwMFwiIC8+IDogPENvcHkgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+fVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cInctZnVsbFwiIG9uQ2xpY2s9eygpID0+IHNldFNuaXBwZXQoXCJcIil9PlxuICAgICAgICAgICAgICAgICAgU3RhcnQgT3ZlclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJKU1ppcCIsIkJ1dHRvbiIsIlByb2dyZXNzIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkRvd25sb2FkIiwiRG93bmxvYWRJY29uIiwiQXJyb3dMZWZ0IiwiQ29weSIsIkNoZWNrIiwiVGV4dGFyZWEiLCJGSUxFUyIsImlzRG93bmxvYWRpbmciLCJzZXRJc0Rvd25sb2FkaW5nIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInN0YXR1cyIsInNldFN0YXR1cyIsInNuaXBwZXQiLCJzZXRTbmlwcGV0IiwiY29waWVkIiwic2V0Q29waWVkIiwiaGFuZGxlRG93bmxvYWQiLCJ6aXAiLCJjb21wbGV0ZWQiLCJmaWxlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiYmxvYiIsImNvbnNvbGUiLCJ3YXJuIiwic3RhdHVzVGV4dCIsImVyciIsImxlbmd0aCIsImJhc2U2NCIsImdlbmVyYXRlQXN5bmMiLCJ0eXBlIiwiY29kZVNuaXBwZXQiLCJ0cmltIiwiZXJyb3IiLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXRUaW1lb3V0IiwidGV4dEFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsImFsZXJ0IiwiZSIsInJlbW92ZUNoaWxkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwic3BhbiIsImgxIiwiYSIsImhyZWYiLCJNYXRoIiwicm91bmQiLCJzaXplIiwib25DbGljayIsImRpc2FibGVkIiwicmVhZE9ubHkiLCJ2YXJpYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxRQUFRLFFBQVEsUUFBUTtBQUNqQyxPQUFPQyxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsTUFBTSxRQUFRLHlCQUF5QjtBQUNoRCxTQUFTQyxRQUFRLFFBQVEsMkJBQTJCO0FBQ3BELFNBQVNDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxRQUFRLHVCQUF1QjtBQUNqRyxTQUFTQyxZQUFZQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLFFBQVEsZUFBZTtBQUNoRixTQUFTQyxRQUFRLFFBQVEsMkJBQTJCO0FBRXBELE1BQU1DLFFBQVE7SUFDWjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNB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