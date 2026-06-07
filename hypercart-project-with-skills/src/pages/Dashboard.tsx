import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Dashboard.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Dashboard.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const useState = __vite__cjsImport3_react["useState"];
import { Button } from "/src/components/ui/button.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { Label } from "/src/components/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/src/components/ui/select.tsx";
import { Copy, Check, ArrowLeft, Code, ArrowRight, RefreshCw, CheckCircle2, Globe, Search, Settings2, UploadCloud, LayoutTemplate, Plus, Trash2, GripVertical } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd7a232";
import Editor from "/node_modules/.vite/deps/@monaco-editor_react.js?v=7dd7a232";
const MOCK_SCANNED_PRODUCTS = [
    {
        id: "101",
        name: "Ergonomic Mechanical Keyboard",
        price: "149.99",
        type: "configurable"
    },
    {
        id: "102",
        name: "Coffee Beans Subscription",
        price: "19.00",
        type: "subscription"
    },
    {
        id: "103",
        name: "Custom Gaming PC",
        price: "999.00",
        type: "configurable"
    }
];
export default function Dashboard() {
    _s();
    const [currentStep, setCurrentStep] = useState(1);
    const [catalogName, setCatalogName] = useState("");
    const [targetUrl, setTargetUrl] = useState("");
    const [copied, setCopied] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false);
    const [connectionConfirmed, setConnectionConfirmed] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [scannedProducts, setScannedProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [productConfigs, setProductConfigs] = useState({});
    const [isPublishing, setIsPublishing] = useState(false);
    const [published, setPublished] = useState(false);
    const [builderMode, setBuilderMode] = useState("visual");
    const catalogId = catalogName.toLowerCase().replace(/[^a-z0-9]/g, '-') || 'my-catalog';
    const generatedSnippet = `<script src="https://cdn.hypercart.com/v1/hyper-cart-loader.js" async></script>
<script>
  window.hcConfig = {
    catalogId: "${catalogId}",
    endpoint: "https://api.hypercart.com/v1/catalogs/${catalogId}"
  };
</script>`;
    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const handleConfirmConnection = ()=>{
        setIsConfirming(true);
        setTimeout(()=>{
            setIsConfirming(false);
            setConnectionConfirmed(true);
            setTimeout(()=>setCurrentStep(4), 1000);
        }, 2000);
    };
    const handleScan = ()=>{
        setIsScanning(true);
        setTimeout(()=>{
            setIsScanning(false);
            setScannedProducts(MOCK_SCANNED_PRODUCTS);
            // Initialize empty configs
            const initialConfigs = {};
            MOCK_SCANNED_PRODUCTS.forEach((p)=>{
                initialConfigs[p.id] = p.type === 'configurable' ? '[\n  {\n    "key": "example",\n    "step": "Example Step",\n    "type": "select",\n    "options": ["Option 1", "Option 2"]\n  }\n]' : '[]';
            });
            setProductConfigs(initialConfigs);
        }, 2500);
    };
    const handlePublish = ()=>{
        setIsPublishing(true);
        setTimeout(()=>{
            setIsPublishing(false);
            setPublished(true);
        }, 2000);
    };
    const steps = [
        {
            num: 1,
            title: "Name Catalog"
        },
        {
            num: 2,
            title: "Embed Snippet"
        },
        {
            num: 3,
            title: "Confirm"
        },
        {
            num: 4,
            title: "Scan"
        },
        {
            num: 5,
            title: "Configure"
        },
        {
            num: 6,
            title: "Review"
        },
        {
            num: 7,
            title: "Publish"
        }
    ];
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [
            /*#__PURE__*/ _jsxDEV("header", {
                className: "border-b px-6 py-4 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-10",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV(Link, {
                            to: "/",
                            children: /*#__PURE__*/ _jsxDEV(Button, {
                                variant: "ghost",
                                size: "icon",
                                children: /*#__PURE__*/ _jsxDEV(ArrowLeft, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "/app/src/pages/Dashboard.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/Dashboard.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/pages/Dashboard.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "h-8 w-8 bg-primary rounded-md flex items-center justify-center",
                                    children: /*#__PURE__*/ _jsxDEV("span", {
                                        className: "text-primary-foreground font-bold",
                                        children: "H"
                                    }, void 0, false, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/app/src/pages/Dashboard.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h1", {
                                    className: "text-xl font-bold tracking-tight",
                                    children: "Merchant Dashboard"
                                }, void 0, false, {
                                    fileName: "/app/src/pages/Dashboard.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/src/pages/Dashboard.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/src/pages/Dashboard.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/app/src/pages/Dashboard.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("main", {
                className: "flex-1 max-w-5xl mx-auto px-6 py-12 w-full flex flex-col",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "mb-12",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex items-center justify-between relative",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted rounded-full -z-10"
                                }, void 0, false, {
                                    fileName: "/app/src/pages/Dashboard.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full -z-10 transition-all duration-500",
                                    style: {
                                        width: `${(currentStep - 1) / (steps.length - 1) * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "/app/src/pages/Dashboard.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                steps.map((step)=>/*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex flex-col items-center gap-2 bg-background px-2",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: `w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${currentStep === step.num ? "border-primary bg-primary text-primary-foreground" : currentStep > step.num ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background text-muted-foreground"}`,
                                                children: currentStep > step.num ? /*#__PURE__*/ _jsxDEV(Check, {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 45
                                                }, this) : step.num
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: `text-xs font-medium hidden sm:block ${currentStep >= step.num ? "text-foreground" : "text-muted-foreground"}`,
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, step.num, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "/app/src/pages/Dashboard.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/app/src/pages/Dashboard.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex-1 bg-card border rounded-xl shadow-sm overflow-hidden flex flex-col",
                        children: [
                            currentStep === 1 && /*#__PURE__*/ _jsxDEV("div", {
                                className: "p-8 md:p-12 max-w-2xl mx-auto w-full flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                className: "text-3xl font-bold",
                                                children: "Create a New Catalog"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-muted-foreground",
                                                children: "Give your catalog a name and specify the target website URL where HyperCart will be installed."
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-full space-y-6 text-left",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        htmlFor: "catalogName",
                                                        children: "Catalog Name"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Input, {
                                                        id: "catalogName",
                                                        placeholder: "e.g., Main Store, Summer Sale...",
                                                        value: catalogName,
                                                        onChange: (e)=>setCatalogName(e.target.value),
                                                        className: "h-12 text-lg"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        htmlFor: "targetUrl",
                                                        children: "Target Website URL"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Input, {
                                                        id: "targetUrl",
                                                        placeholder: "https://www.your-store.com",
                                                        value: targetUrl,
                                                        onChange: (e)=>setTargetUrl(e.target.value),
                                                        className: "h-12 text-lg"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Button, {
                                        size: "lg",
                                        className: "w-full h-12 text-lg mt-8",
                                        disabled: !catalogName || !targetUrl,
                                        onClick: ()=>setCurrentStep(2),
                                        children: [
                                            "Next: Embed Snippet ",
                                            /*#__PURE__*/ _jsxDEV(ArrowRight, {
                                                className: "ml-2 h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 180,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/pages/Dashboard.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            currentStep === 2 && /*#__PURE__*/ _jsxDEV("div", {
                                className: "p-8 md:p-12 w-full flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "space-y-4 max-w-2xl",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                className: "text-3xl font-bold",
                                                children: "Embed the Loader"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-muted-foreground",
                                                children: [
                                                    "Copy the snippet below and paste it into the ",
                                                    /*#__PURE__*/ _jsxDEV("code", {
                                                        children: "<head>"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 99
                                                    }, this),
                                                    " of your website at ",
                                                    /*#__PURE__*/ _jsxDEV("strong", {
                                                        children: targetUrl
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 144
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-full max-w-3xl bg-zinc-950 text-zinc-50 rounded-xl p-6 relative text-left",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                size: "sm",
                                                variant: "secondary",
                                                className: "absolute top-4 right-4",
                                                onClick: ()=>copyToClipboard(generatedSnippet),
                                                children: [
                                                    copied ? /*#__PURE__*/ _jsxDEV(Check, {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 29
                                                    }, this) : /*#__PURE__*/ _jsxDEV(Copy, {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 66
                                                    }, this),
                                                    copied ? "Copied!" : "Copy Code"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("pre", {
                                                className: "font-mono text-sm overflow-x-auto pt-8 pb-2",
                                                children: /*#__PURE__*/ _jsxDEV("code", {
                                                    children: generatedSnippet
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex gap-4 w-full max-w-md mt-8",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                variant: "outline",
                                                size: "lg",
                                                className: "flex-1",
                                                onClick: ()=>setCurrentStep(1),
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                size: "lg",
                                                className: "flex-1",
                                                onClick: ()=>setCurrentStep(3),
                                                children: [
                                                    "I've Embedded It ",
                                                    /*#__PURE__*/ _jsxDEV(ArrowRight, {
                                                        className: "ml-2 h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/pages/Dashboard.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            currentStep === 3 && /*#__PURE__*/ _jsxDEV("div", {
                                className: "p-8 md:p-12 max-w-2xl mx-auto w-full flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                className: "text-3xl font-bold",
                                                children: "Verify Installation"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-muted-foreground",
                                                children: "We'll ping your website to verify that the HyperCart loader is installed correctly."
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-full h-48 border-2 border-dashed rounded-xl flex items-center justify-center bg-muted/20",
                                        children: connectionConfirmed ? /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex flex-col items-center text-primary animate-in zoom-in duration-300",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(CheckCircle2, {
                                                    className: "h-16 w-16 mb-4"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "text-xl font-semibold",
                                                    children: "Connection Successful!"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Dashboard.tsx",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ _jsxDEV(Globe, {
                                            className: `h-16 w-16 text-muted-foreground ${isConfirming ? "animate-pulse text-primary" : ""}`
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Dashboard.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    !connectionConfirmed && /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex gap-4 w-full mt-8",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                variant: "outline",
                                                size: "lg",
                                                className: "flex-1",
                                                onClick: ()=>setCurrentStep(2),
                                                disabled: isConfirming,
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 240,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                size: "lg",
                                                className: "flex-1",
                                                onClick: handleConfirmConnection,
                                                disabled: isConfirming,
                                                children: isConfirming ? /*#__PURE__*/ _jsxDEV(_Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(RefreshCw, {
                                                            className: "mr-2 h-5 w-5 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Verifying..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ _jsxDEV(_Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(Search, {
                                                            className: "mr-2 h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Verify Connection"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/pages/Dashboard.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            currentStep === 4 && /*#__PURE__*/ _jsxDEV("div", {
                                className: "p-8 md:p-12 w-full flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "space-y-4 max-w-2xl",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                className: "text-3xl font-bold",
                                                children: "Scan Your Website"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-muted-foreground",
                                                children: [
                                                    "We'll scan ",
                                                    /*#__PURE__*/ _jsxDEV("strong", {
                                                        children: targetUrl
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 65
                                                    }, this),
                                                    " for any elements with ",
                                                    /*#__PURE__*/ _jsxDEV("code", {
                                                        children: "data-hc-*"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 116
                                                    }, this),
                                                    " attributes to build your product list automatically."
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    scannedProducts.length === 0 ? /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-full max-w-md mt-8",
                                        children: /*#__PURE__*/ _jsxDEV(Button, {
                                            size: "lg",
                                            className: "w-full h-14 text-lg",
                                            onClick: handleScan,
                                            disabled: isScanning,
                                            children: isScanning ? /*#__PURE__*/ _jsxDEV(_Fragment, {
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(RefreshCw, {
                                                        className: "mr-2 h-6 w-6 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 25
                                                    }, this),
                                                    " Scanning Page..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ _jsxDEV(_Fragment, {
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Search, {
                                                        className: "mr-2 h-6 w-6"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 25
                                                    }, this),
                                                    " Scan for Products"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Dashboard.tsx",
                                            lineNumber: 265,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-full max-w-3xl text-left space-y-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        className: "text-xl font-semibold",
                                                        children: [
                                                            "Found ",
                                                            scannedProducts.length,
                                                            " Products"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Button, {
                                                        variant: "outline",
                                                        size: "sm",
                                                        onClick: handleScan,
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(RefreshCw, {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 78
                                                            }, this),
                                                            " Rescan"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "border rounded-xl overflow-hidden",
                                                children: /*#__PURE__*/ _jsxDEV("table", {
                                                    className: "w-full text-sm text-left",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("thead", {
                                                            className: "bg-muted text-muted-foreground",
                                                            children: /*#__PURE__*/ _jsxDEV("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("th", {
                                                                        className: "px-6 py-3 font-medium",
                                                                        children: "ID"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                        lineNumber: 284,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("th", {
                                                                        className: "px-6 py-3 font-medium",
                                                                        children: "Name"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                        lineNumber: 285,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("th", {
                                                                        className: "px-6 py-3 font-medium",
                                                                        children: "Price"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                        lineNumber: 286,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("th", {
                                                                        className: "px-6 py-3 font-medium",
                                                                        children: "Type"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                        lineNumber: 287,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("tbody", {
                                                            className: "divide-y",
                                                            children: scannedProducts.map((p)=>/*#__PURE__*/ _jsxDEV("tr", {
                                                                    className: "bg-card",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("td", {
                                                                            className: "px-6 py-4 font-mono",
                                                                            children: p.id
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                            lineNumber: 293,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("td", {
                                                                            className: "px-6 py-4 font-medium",
                                                                            children: p.name
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                            lineNumber: 294,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("td", {
                                                                            className: "px-6 py-4",
                                                                            children: [
                                                                                "$",
                                                                                p.price
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                            lineNumber: 295,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("td", {
                                                                            className: "px-6 py-4 capitalize",
                                                                            children: p.type
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, p.id, true, {
                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex justify-end pt-4",
                                                children: /*#__PURE__*/ _jsxDEV(Button, {
                                                    size: "lg",
                                                    onClick: ()=>{
                                                        setSelectedProductId(scannedProducts[0].id);
                                                        setCurrentStep(5);
                                                    },
                                                    children: [
                                                        "Next: Build Configurations ",
                                                        /*#__PURE__*/ _jsxDEV(ArrowRight, {
                                                            className: "ml-2 h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 50
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 303,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/pages/Dashboard.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this),
                            currentStep === 5 && /*#__PURE__*/ _jsxDEV("div", {
                                className: "w-full flex flex-col h-[600px] animate-in fade-in slide-in-from-bottom-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "p-6 border-b flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h2", {
                                                        className: "text-2xl font-bold",
                                                        children: "Configurations Builder"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        className: "text-muted-foreground text-sm",
                                                        children: "Define the configuration flow (wizard) for your configurable products."
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                onClick: ()=>setCurrentStep(6),
                                                children: [
                                                    "Next: Review ",
                                                    /*#__PURE__*/ _jsxDEV(ArrowRight, {
                                                        className: "ml-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex flex-1 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "w-64 border-r bg-muted/20 flex flex-col overflow-y-auto",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wider",
                                                        children: "Products"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "flex-1 px-2 space-y-1",
                                                        children: scannedProducts.map((p)=>/*#__PURE__*/ _jsxDEV("button", {
                                                                onClick: ()=>setSelectedProductId(p.id),
                                                                className: `w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedProductId === p.id ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted"}`,
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: "truncate",
                                                                        children: p.name
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                        lineNumber: 344,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: `text-xs mt-0.5 ${selectedProductId === p.id ? "text-primary-foreground/70" : "text-muted-foreground"}`,
                                                                        children: p.type
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                        lineNumber: 345,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, p.id, true, {
                                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex-1 flex flex-col bg-zinc-950 text-zinc-50 overflow-hidden",
                                                children: selectedProductId ? /*#__PURE__*/ _jsxDEV(_Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    className: "text-sm font-medium flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV(Settings2, {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                            lineNumber: 359,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Configuration for ",
                                                                        scannedProducts.find((p)=>p.id === selectedProductId)?.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    className: "flex items-center gap-1 bg-zinc-950 p-1 rounded-md border border-zinc-800",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV(Button, {
                                                                            variant: "ghost",
                                                                            size: "sm",
                                                                            className: `h-7 px-3 text-xs ${builderMode === 'visual' ? 'bg-zinc-800 text-zinc-50' : 'text-zinc-400 hover:text-zinc-50'}`,
                                                                            onClick: ()=>setBuilderMode('visual'),
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV(LayoutTemplate, {
                                                                                    className: "h-3 w-3 mr-1.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                    lineNumber: 369,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                " Visual"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV(Button, {
                                                                            variant: "ghost",
                                                                            size: "sm",
                                                                            className: `h-7 px-3 text-xs ${builderMode === 'code' ? 'bg-zinc-800 text-zinc-50' : 'text-zinc-400 hover:text-zinc-50'}`,
                                                                            onClick: ()=>setBuilderMode('code'),
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV(Code, {
                                                                                    className: "h-3 w-3 mr-1.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                    lineNumber: 377,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                " Code"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                            lineNumber: 371,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "flex-1 overflow-y-auto",
                                                            children: builderMode === 'code' ? /*#__PURE__*/ _jsxDEV(Editor, {
                                                                height: "100%",
                                                                defaultLanguage: "json",
                                                                theme: "vs-dark",
                                                                value: productConfigs[selectedProductId] || "",
                                                                onChange: (val)=>setProductConfigs((prev)=>({
                                                                            ...prev,
                                                                            [selectedProductId]: val || ""
                                                                        })),
                                                                options: {
                                                                    minimap: {
                                                                        enabled: false
                                                                    },
                                                                    fontSize: 14,
                                                                    formatOnPaste: true
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "p-6 max-w-3xl mx-auto space-y-6",
                                                                children: (()=>{
                                                                    let config = [];
                                                                    try {
                                                                        config = JSON.parse(productConfigs[selectedProductId] || "[]");
                                                                    } catch (e) {
                                                                        return /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "p-8 text-center border border-destructive/50 bg-destructive/10 rounded-xl text-destructive-foreground",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                                    className: "font-semibold mb-2",
                                                                                    children: "Invalid JSON"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                    lineNumber: 405,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                                    className: "text-sm opacity-80",
                                                                                    children: "Please fix the JSON errors in Code mode before using the Visual Builder."
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                    lineNumber: 406,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                            lineNumber: 404,
                                                                            columnNumber: 35
                                                                        }, this);
                                                                    }
                                                                    const updateConfig = (newConfig)=>{
                                                                        setProductConfigs((prev)=>({
                                                                                ...prev,
                                                                                [selectedProductId]: JSON.stringify(newConfig, null, 2)
                                                                            }));
                                                                    };
                                                                    const addStep = ()=>{
                                                                        updateConfig([
                                                                            ...config,
                                                                            {
                                                                                key: `step_${config.length + 1}`,
                                                                                step: "New Step",
                                                                                type: "select",
                                                                                options: [
                                                                                    "Option 1"
                                                                                ]
                                                                            }
                                                                        ]);
                                                                    };
                                                                    const updateStep = (index, updates)=>{
                                                                        const newConfig = [
                                                                            ...config
                                                                        ];
                                                                        newConfig[index] = {
                                                                            ...newConfig[index],
                                                                            ...updates
                                                                        };
                                                                        updateConfig(newConfig);
                                                                    };
                                                                    const removeStep = (index)=>{
                                                                        const newConfig = [
                                                                            ...config
                                                                        ];
                                                                        newConfig.splice(index, 1);
                                                                        updateConfig(newConfig);
                                                                    };
                                                                    return /*#__PURE__*/ _jsxDEV(_Fragment, {
                                                                        children: [
                                                                            config.length === 0 ? /*#__PURE__*/ _jsxDEV("div", {
                                                                                className: "text-center p-12 border border-dashed border-zinc-800 rounded-xl text-zinc-500",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxDEV(LayoutTemplate, {
                                                                                        className: "h-12 w-12 mx-auto mb-4 opacity-20"
                                                                                    }, void 0, false, {
                                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                                        lineNumber: 435,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                                                        children: "No configuration steps defined yet."
                                                                                    }, void 0, false, {
                                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                                        lineNumber: 436,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                                                lineNumber: 434,
                                                                                columnNumber: 37
                                                                            }, this) : config.map((step, idx)=>/*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-sm",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "bg-zinc-800/50 px-4 py-3 flex items-center justify-between border-b border-zinc-800",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "flex items-center gap-3",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(GripVertical, {
                                                                                                            className: "h-4 w-4 text-zinc-500 cursor-move"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 443,
                                                                                                            columnNumber: 45
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                                                            className: "font-medium text-sm text-zinc-200",
                                                                                                            children: [
                                                                                                                "Step ",
                                                                                                                idx + 1,
                                                                                                                ": ",
                                                                                                                step.step || "Untitled"
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 444,
                                                                                                            columnNumber: 45
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                    lineNumber: 442,
                                                                                                    columnNumber: 43
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Button, {
                                                                                                    variant: "ghost",
                                                                                                    size: "icon",
                                                                                                    className: "h-8 w-8 text-zinc-400 hover:text-destructive hover:bg-destructive/10",
                                                                                                    onClick: ()=>removeStep(idx),
                                                                                                    children: /*#__PURE__*/ _jsxDEV(Trash2, {
                                                                                                        className: "h-4 w-4"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                        lineNumber: 447,
                                                                                                        columnNumber: 45
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                    lineNumber: 446,
                                                                                                    columnNumber: 43
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                            lineNumber: 441,
                                                                                            columnNumber: 41
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "p-5 space-y-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "grid grid-cols-2 gap-4",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                                            className: "space-y-1.5",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                                    className: "text-xs text-zinc-400",
                                                                                                                    children: "Step Title"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                    lineNumber: 453,
                                                                                                                    columnNumber: 47
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                                                                                    value: step.step || "",
                                                                                                                    onChange: (e)=>updateStep(idx, {
                                                                                                                            step: e.target.value
                                                                                                                        }),
                                                                                                                    className: "bg-zinc-950 border-zinc-800 h-9"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                    lineNumber: 454,
                                                                                                                    columnNumber: 47
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 452,
                                                                                                            columnNumber: 45
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                                            className: "space-y-1.5",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                                    className: "text-xs text-zinc-400",
                                                                                                                    children: "Data Key"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                    lineNumber: 461,
                                                                                                                    columnNumber: 47
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                                                                                    value: step.key || "",
                                                                                                                    onChange: (e)=>updateStep(idx, {
                                                                                                                            key: e.target.value
                                                                                                                        }),
                                                                                                                    className: "bg-zinc-950 border-zinc-800 h-9 font-mono text-xs"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                    lineNumber: 462,
                                                                                                                    columnNumber: 47
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 460,
                                                                                                            columnNumber: 45
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                    lineNumber: 451,
                                                                                                    columnNumber: 43
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "space-y-1.5",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            className: "text-xs text-zinc-400",
                                                                                                            children: "Description (Optional)"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 471,
                                                                                                            columnNumber: 45
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(Input, {
                                                                                                            value: step.description || "",
                                                                                                            onChange: (e)=>updateStep(idx, {
                                                                                                                    description: e.target.value
                                                                                                                }),
                                                                                                            className: "bg-zinc-950 border-zinc-800 h-9",
                                                                                                            placeholder: "Help text for this step..."
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 472,
                                                                                                            columnNumber: 45
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                    lineNumber: 470,
                                                                                                    columnNumber: 43
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "space-y-1.5",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            className: "text-xs text-zinc-400",
                                                                                                            children: "Input Type"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 481,
                                                                                                            columnNumber: 45
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(Select, {
                                                                                                            value: step.type || "select",
                                                                                                            onValueChange: (val)=>updateStep(idx, {
                                                                                                                    type: val
                                                                                                                }),
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectTrigger, {
                                                                                                                    className: "bg-zinc-950 border-zinc-800 h-9",
                                                                                                                    children: /*#__PURE__*/ _jsxDEV(SelectValue, {}, void 0, false, {
                                                                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                        lineNumber: 484,
                                                                                                                        columnNumber: 49
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                    lineNumber: 483,
                                                                                                                    columnNumber: 47
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectContent, {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                            value: "select",
                                                                                                                            children: "Dropdown Select"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                            lineNumber: 487,
                                                                                                                            columnNumber: 49
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                            value: "radio",
                                                                                                                            children: "Radio Buttons"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                            lineNumber: 488,
                                                                                                                            columnNumber: 49
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                            value: "cards",
                                                                                                                            children: "Visual Cards"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                            lineNumber: 489,
                                                                                                                            columnNumber: 49
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                            value: "text",
                                                                                                                            children: "Text Input"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                            lineNumber: 490,
                                                                                                                            columnNumber: 49
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                            value: "api",
                                                                                                                            children: "API Validation"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                            lineNumber: 491,
                                                                                                                            columnNumber: 49
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                    lineNumber: 486,
                                                                                                                    columnNumber: 47
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 482,
                                                                                                            columnNumber: 45
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                    lineNumber: 480,
                                                                                                    columnNumber: 43
                                                                                                }, this),
                                                                                                step.type === 'text' && /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "space-y-1.5 pt-2 border-t border-zinc-800/50",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            className: "text-xs text-zinc-400",
                                                                                                            children: "Placeholder Text"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 499,
                                                                                                            columnNumber: 47
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(Input, {
                                                                                                            value: step.placeholder || "",
                                                                                                            onChange: (e)=>updateStep(idx, {
                                                                                                                    placeholder: e.target.value
                                                                                                                }),
                                                                                                            className: "bg-zinc-950 border-zinc-800 h-9"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 500,
                                                                                                            columnNumber: 47
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                    lineNumber: 498,
                                                                                                    columnNumber: 45
                                                                                                }, this),
                                                                                                [
                                                                                                    'select',
                                                                                                    'radio',
                                                                                                    'cards'
                                                                                                ].includes(step.type) && /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "space-y-3 pt-3 border-t border-zinc-800/50",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            className: "text-xs text-zinc-400",
                                                                                                            children: "Options"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 510,
                                                                                                            columnNumber: 47
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                                            className: "space-y-2",
                                                                                                            children: [
                                                                                                                (step.options || []).map((opt, optIdx)=>{
                                                                                                                    const isObj = typeof opt === 'object' && opt !== null;
                                                                                                                    const optLabel = isObj ? opt.label : opt;
                                                                                                                    return /*#__PURE__*/ _jsxDEV("div", {
                                                                                                                        className: "flex items-start gap-2",
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                                                                                className: "flex-1 space-y-2",
                                                                                                                                children: /*#__PURE__*/ _jsxDEV(Input, {
                                                                                                                                    value: optLabel || "",
                                                                                                                                    onChange: (e)=>{
                                                                                                                                        const newOpts = [
                                                                                                                                            ...step.options || []
                                                                                                                                        ];
                                                                                                                                        if (isObj) {
                                                                                                                                            newOpts[optIdx] = {
                                                                                                                                                ...opt,
                                                                                                                                                label: e.target.value
                                                                                                                                            };
                                                                                                                                        } else {
                                                                                                                                            newOpts[optIdx] = e.target.value;
                                                                                                                                        }
                                                                                                                                        updateStep(idx, {
                                                                                                                                            options: newOpts
                                                                                                                                        });
                                                                                                                                    },
                                                                                                                                    className: "bg-zinc-950 border-zinc-800 h-9",
                                                                                                                                    placeholder: "Option label"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                                    lineNumber: 518,
                                                                                                                                    columnNumber: 57
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                                lineNumber: 517,
                                                                                                                                columnNumber: 55
                                                                                                                            }, this),
                                                                                                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                                                                                                variant: "ghost",
                                                                                                                                size: "icon",
                                                                                                                                className: "h-9 w-9 text-zinc-500 hover:text-destructive shrink-0",
                                                                                                                                onClick: ()=>{
                                                                                                                                    const newOpts = [
                                                                                                                                        ...step.options || []
                                                                                                                                    ];
                                                                                                                                    newOpts.splice(optIdx, 1);
                                                                                                                                    updateStep(idx, {
                                                                                                                                        options: newOpts
                                                                                                                                    });
                                                                                                                                },
                                                                                                                                children: /*#__PURE__*/ _jsxDEV(Trash2, {
                                                                                                                                    className: "h-4 w-4"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                                    lineNumber: 543,
                                                                                                                                    columnNumber: 57
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                                lineNumber: 533,
                                                                                                                                columnNumber: 55
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, optIdx, true, {
                                                                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                        lineNumber: 516,
                                                                                                                        columnNumber: 53
                                                                                                                    }, this);
                                                                                                                }),
                                                                                                                /*#__PURE__*/ _jsxDEV(Button, {
                                                                                                                    variant: "outline",
                                                                                                                    size: "sm",
                                                                                                                    className: "w-full border-dashed border-zinc-700 hover:bg-zinc-800 text-zinc-400 mt-2",
                                                                                                                    onClick: ()=>updateStep(idx, {
                                                                                                                            options: [
                                                                                                                                ...step.options || [],
                                                                                                                                "New Option"
                                                                                                                            ]
                                                                                                                        }),
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsxDEV(Plus, {
                                                                                                                            className: "h-4 w-4 mr-2"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                            lineNumber: 554,
                                                                                                                            columnNumber: 51
                                                                                                                        }, this),
                                                                                                                        " Add Option"
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                                    lineNumber: 548,
                                                                                                                    columnNumber: 49
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                            lineNumber: 511,
                                                                                                            columnNumber: 47
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                                    lineNumber: 509,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                                                            lineNumber: 450,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                                                    lineNumber: 440,
                                                                                    columnNumber: 39
                                                                                }, this)),
                                                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                                                variant: "outline",
                                                                                className: "w-full border-dashed border-zinc-700 bg-zinc-900 hover:bg-zinc-800 py-8 text-zinc-400",
                                                                                onClick: addStep,
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxDEV(Plus, {
                                                                                        className: "h-5 w-5 mr-2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                                                        lineNumber: 569,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    " Add Next Step"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                                                lineNumber: 564,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true);
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex-1 flex items-center justify-center text-zinc-500 flex-col gap-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(LayoutTemplate, {
                                                            className: "h-12 w-12 opacity-20"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Select a product from the sidebar to edit its configuration"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/pages/Dashboard.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            currentStep === 6 && /*#__PURE__*/ _jsxDEV("div", {
                                className: "p-8 md:p-12 w-full flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "space-y-4 max-w-2xl",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                className: "text-3xl font-bold",
                                                children: "Review Catalog Data"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 593,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-muted-foreground",
                                                children: "Verify your product list and configuration flows before publishing to the HyperCart CDN."
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 594,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 592,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "border rounded-xl overflow-hidden bg-muted/10 h-[400px] flex flex-col",
                                        children: /*#__PURE__*/ _jsxDEV(Editor, {
                                            height: "100%",
                                            defaultLanguage: "json",
                                            theme: "vs-dark",
                                            value: JSON.stringify(scannedProducts.map((p)=>({
                                                    ...p,
                                                    configFlow: productConfigs[p.id] ? JSON.parse(productConfigs[p.id]) : []
                                                })), null, 2),
                                            options: {
                                                minimap: {
                                                    enabled: false
                                                },
                                                fontSize: 14,
                                                readOnly: true
                                            }
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Dashboard.tsx",
                                            lineNumber: 598,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 597,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex gap-4 w-full max-w-md mt-8 self-end",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                variant: "outline",
                                                size: "lg",
                                                className: "flex-1",
                                                onClick: ()=>setCurrentStep(5),
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 619,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                size: "lg",
                                                className: "flex-1",
                                                onClick: ()=>setCurrentStep(7),
                                                children: [
                                                    "Looks Good ",
                                                    /*#__PURE__*/ _jsxDEV(ArrowRight, {
                                                        className: "ml-2 h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Dashboard.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 622,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 618,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/pages/Dashboard.tsx",
                                lineNumber: 591,
                                columnNumber: 13
                            }, this),
                            currentStep === 7 && /*#__PURE__*/ _jsxDEV("div", {
                                className: "p-8 md:p-12 max-w-2xl mx-auto w-full flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                className: "text-3xl font-bold",
                                                children: "Publish Configuration"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 633,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                className: "text-muted-foreground",
                                                children: "Deploy your catalog settings to the edge. The HyperCart snippet on your website will automatically pick up these changes."
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 634,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 632,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-full h-48 border-2 border-dashed rounded-xl flex items-center justify-center bg-muted/20",
                                        children: published ? /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex flex-col items-center text-primary animate-in zoom-in duration-300",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(CheckCircle2, {
                                                    className: "h-16 w-16 mb-4"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "text-xl font-semibold",
                                                    children: "Published Successfully!"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    className: "text-muted-foreground text-sm mt-2",
                                                    children: "Your store is now live with the latest configuration."
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Dashboard.tsx",
                                            lineNumber: 639,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ _jsxDEV(UploadCloud, {
                                            className: `h-16 w-16 text-muted-foreground ${isPublishing ? "animate-bounce text-primary" : ""}`
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Dashboard.tsx",
                                            lineNumber: 645,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 637,
                                        columnNumber: 15
                                    }, this),
                                    !published ? /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex gap-4 w-full mt-8",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                variant: "outline",
                                                size: "lg",
                                                className: "flex-1",
                                                onClick: ()=>setCurrentStep(6),
                                                disabled: isPublishing,
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 651,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                size: "lg",
                                                className: "flex-1",
                                                onClick: handlePublish,
                                                disabled: isPublishing,
                                                children: isPublishing ? /*#__PURE__*/ _jsxDEV(_Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(RefreshCw, {
                                                            className: "mr-2 h-5 w-5 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                            lineNumber: 656,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Publishing..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ _jsxDEV(_Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(UploadCloud, {
                                                            className: "mr-2 h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Dashboard.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Publish to CDN"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 654,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 650,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex gap-4 w-full mt-8",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                variant: "outline",
                                                size: "lg",
                                                className: "flex-1",
                                                onClick: ()=>{
                                                    setCurrentStep(1);
                                                    setPublished(false);
                                                    setCatalogName("");
                                                    setTargetUrl("");
                                                    setConnectionConfirmed(false);
                                                    setScannedProducts([]);
                                                },
                                                children: "Start Over"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 664,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Link, {
                                                to: "/",
                                                className: "flex-1",
                                                children: /*#__PURE__*/ _jsxDEV(Button, {
                                                    size: "lg",
                                                    className: "w-full",
                                                    children: "Return Home"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Dashboard.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Dashboard.tsx",
                                                lineNumber: 674,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Dashboard.tsx",
                                        lineNumber: 663,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/pages/Dashboard.tsx",
                                lineNumber: 631,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/pages/Dashboard.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/src/pages/Dashboard.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/pages/Dashboard.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "YkSRX8flFlkP12iA2rm2upSRUnE=");
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Dashboard.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Dashboard.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRhc2hib2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBTZWxlY3QsIFNlbGVjdENvbnRlbnQsIFNlbGVjdEl0ZW0sIFNlbGVjdFRyaWdnZXIsIFNlbGVjdFZhbHVlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZWxlY3RcIjtcbmltcG9ydCB7IENvcHksIENoZWNrLCBBcnJvd0xlZnQsIENvZGUsIEFycm93UmlnaHQsIFJlZnJlc2hDdywgQ2hlY2tDaXJjbGUyLCBHbG9iZSwgU2VhcmNoLCBTZXR0aW5nczIsIFVwbG9hZENsb3VkLCBMYXlvdXRUZW1wbGF0ZSwgUGx1cywgVHJhc2gyLCBHcmlwVmVydGljYWwgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBFZGl0b3IgZnJvbSBcIkBtb25hY28tZWRpdG9yL3JlYWN0XCI7XG5cbmNvbnN0IE1PQ0tfU0NBTk5FRF9QUk9EVUNUUyA9IFtcbiAgeyBpZDogXCIxMDFcIiwgbmFtZTogXCJFcmdvbm9taWMgTWVjaGFuaWNhbCBLZXlib2FyZFwiLCBwcmljZTogXCIxNDkuOTlcIiwgdHlwZTogXCJjb25maWd1cmFibGVcIiB9LFxuICB7IGlkOiBcIjEwMlwiLCBuYW1lOiBcIkNvZmZlZSBCZWFucyBTdWJzY3JpcHRpb25cIiwgcHJpY2U6IFwiMTkuMDBcIiwgdHlwZTogXCJzdWJzY3JpcHRpb25cIiB9LFxuICB7IGlkOiBcIjEwM1wiLCBuYW1lOiBcIkN1c3RvbSBHYW1pbmcgUENcIiwgcHJpY2U6IFwiOTk5LjAwXCIsIHR5cGU6IFwiY29uZmlndXJhYmxlXCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2NhdGFsb2dOYW1lLCBzZXRDYXRhbG9nTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RhcmdldFVybCwgc2V0VGFyZ2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ29uZmlybWluZywgc2V0SXNDb25maXJtaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Nvbm5lY3Rpb25Db25maXJtZWQsIHNldENvbm5lY3Rpb25Db25maXJtZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3QgW2lzU2Nhbm5pbmcsIHNldElzU2Nhbm5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2Nhbm5lZFByb2R1Y3RzLCBzZXRTY2FubmVkUHJvZHVjdHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgXG4gIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RJZCwgc2V0U2VsZWN0ZWRQcm9kdWN0SWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtwcm9kdWN0Q29uZmlncywgc2V0UHJvZHVjdENvbmZpZ3NdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oe30pO1xuICBcbiAgY29uc3QgW2lzUHVibGlzaGluZywgc2V0SXNQdWJsaXNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3B1Ymxpc2hlZCwgc2V0UHVibGlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2J1aWxkZXJNb2RlLCBzZXRCdWlsZGVyTW9kZV0gPSB1c2VTdGF0ZTxcInZpc3VhbFwiIHwgXCJjb2RlXCI+KFwidmlzdWFsXCIpO1xuXG4gIGNvbnN0IGNhdGFsb2dJZCA9IGNhdGFsb2dOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldL2csICctJykgfHwgJ215LWNhdGFsb2cnO1xuXG4gIGNvbnN0IGdlbmVyYXRlZFNuaXBwZXQgPSBgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5oeXBlcmNhcnQuY29tL3YxL2h5cGVyLWNhcnQtbG9hZGVyLmpzXCIgYXN5bmM+PC9zY3JpcHQ+XG48c2NyaXB0PlxuICB3aW5kb3cuaGNDb25maWcgPSB7XG4gICAgY2F0YWxvZ0lkOiBcIiR7Y2F0YWxvZ0lkfVwiLFxuICAgIGVuZHBvaW50OiBcImh0dHBzOi8vYXBpLmh5cGVyY2FydC5jb20vdjEvY2F0YWxvZ3MvJHtjYXRhbG9nSWR9XCJcbiAgfTtcbjwvc2NyaXB0PmA7XG5cbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuICAgIHNldENvcGllZCh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZChmYWxzZSksIDIwMDApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1Db25uZWN0aW9uID0gKCkgPT4ge1xuICAgIHNldElzQ29uZmlybWluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzQ29uZmlybWluZyhmYWxzZSk7XG4gICAgICBzZXRDb25uZWN0aW9uQ29uZmlybWVkKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50U3RlcCg0KSwgMTAwMCk7XG4gICAgfSwgMjAwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2NhbiA9ICgpID0+IHtcbiAgICBzZXRJc1NjYW5uaW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNTY2FubmluZyhmYWxzZSk7XG4gICAgICBzZXRTY2FubmVkUHJvZHVjdHMoTU9DS19TQ0FOTkVEX1BST0RVQ1RTKTtcbiAgICAgIFxuICAgICAgLy8gSW5pdGlhbGl6ZSBlbXB0eSBjb25maWdzXG4gICAgICBjb25zdCBpbml0aWFsQ29uZmlnczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgICAgTU9DS19TQ0FOTkVEX1BST0RVQ1RTLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGluaXRpYWxDb25maWdzW3AuaWRdID0gcC50eXBlID09PSAnY29uZmlndXJhYmxlJyA/ICdbXFxuICB7XFxuICAgIFwia2V5XCI6IFwiZXhhbXBsZVwiLFxcbiAgICBcInN0ZXBcIjogXCJFeGFtcGxlIFN0ZXBcIixcXG4gICAgXCJ0eXBlXCI6IFwic2VsZWN0XCIsXFxuICAgIFwib3B0aW9uc1wiOiBbXCJPcHRpb24gMVwiLCBcIk9wdGlvbiAyXCJdXFxuICB9XFxuXScgOiAnW10nO1xuICAgICAgfSk7XG4gICAgICBzZXRQcm9kdWN0Q29uZmlncyhpbml0aWFsQ29uZmlncyk7XG4gICAgfSwgMjUwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHVibGlzaCA9ICgpID0+IHtcbiAgICBzZXRJc1B1Ymxpc2hpbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc1B1Ymxpc2hpbmcoZmFsc2UpO1xuICAgICAgc2V0UHVibGlzaGVkKHRydWUpO1xuICAgIH0sIDIwMDApO1xuICB9O1xuXG4gIGNvbnN0IHN0ZXBzID0gW1xuICAgIHsgbnVtOiAxLCB0aXRsZTogXCJOYW1lIENhdGFsb2dcIiB9LFxuICAgIHsgbnVtOiAyLCB0aXRsZTogXCJFbWJlZCBTbmlwcGV0XCIgfSxcbiAgICB7IG51bTogMywgdGl0bGU6IFwiQ29uZmlybVwiIH0sXG4gICAgeyBudW06IDQsIHRpdGxlOiBcIlNjYW5cIiB9LFxuICAgIHsgbnVtOiA1LCB0aXRsZTogXCJDb25maWd1cmVcIiB9LFxuICAgIHsgbnVtOiA2LCB0aXRsZTogXCJSZXZpZXdcIiB9LFxuICAgIHsgbnVtOiA3LCB0aXRsZTogXCJQdWJsaXNoXCIgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWJhY2tncm91bmQgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJib3JkZXItYiBweC02IHB5LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHN0aWNreSB0b3AtMCBiZy1iYWNrZ3JvdW5kLzgwIGJhY2tkcm9wLWJsdXItbWQgei0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCI+XG4gICAgICAgICAgICAgIDxBcnJvd0xlZnQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTggdy04IGJnLXByaW1hcnkgcm91bmRlZC1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBmb250LWJvbGRcIj5IPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRcIj5NZXJjaGFudCBEYXNoYm9hcmQ8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgbWF4LXctNXhsIG14LWF1dG8gcHgtNiBweS0xMiB3LWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICB7LyogV2l6YXJkIFByb2dyZXNzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LWZ1bGwgaC0xIGJnLW11dGVkIHJvdW5kZWQtZnVsbCAtei0xMFwiIC8+XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIGgtMSBiZy1wcmltYXJ5IHJvdW5kZWQtZnVsbCAtei0xMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIiBcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAkeygoY3VycmVudFN0ZXAgLSAxKSAvIChzdGVwcy5sZW5ndGggLSAxKSkgKiAxMDB9JWAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtzdGVwcy5tYXAoKHN0ZXApID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3N0ZXAubnVtfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1iYWNrZ3JvdW5kIHB4LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMTAgaC0xMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIGJvcmRlci0yIHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA9PT0gc3RlcC5udW0gXG4gICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItcHJpbWFyeSBiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kXCIgXG4gICAgICAgICAgICAgICAgICAgIDogY3VycmVudFN0ZXAgPiBzdGVwLm51bSBcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLXByaW1hcnkgYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci1tdXRlZCBiZy1iYWNrZ3JvdW5kIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiXG4gICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgICAge2N1cnJlbnRTdGVwID4gc3RlcC5udW0gPyA8Q2hlY2sgY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+IDogc3RlcC5udW19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC14cyBmb250LW1lZGl1bSBoaWRkZW4gc206YmxvY2sgJHtjdXJyZW50U3RlcCA+PSBzdGVwLm51bSA/IFwidGV4dC1mb3JlZ3JvdW5kXCIgOiBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwifWB9PlxuICAgICAgICAgICAgICAgICAge3N0ZXAudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU3RlcCBDb250ZW50ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBiZy1jYXJkIGJvcmRlciByb3VuZGVkLXhsIHNoYWRvdy1zbSBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBTVEVQIDE6IE5hbWUgQ2F0YWxvZyAqL31cbiAgICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDEgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggbWQ6cC0xMiBtYXgtdy0yeGwgbXgtYXV0byB3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgc3BhY2UteS04IGFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPkNyZWF0ZSBhIE5ldyBDYXRhbG9nPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5HaXZlIHlvdXIgY2F0YWxvZyBhIG5hbWUgYW5kIHNwZWNpZnkgdGhlIHRhcmdldCB3ZWJzaXRlIFVSTCB3aGVyZSBIeXBlckNhcnQgd2lsbCBiZSBpbnN0YWxsZWQuPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNwYWNlLXktNiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJjYXRhbG9nTmFtZVwiPkNhdGFsb2cgTmFtZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2F0YWxvZ05hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCBNYWluIFN0b3JlLCBTdW1tZXIgU2FsZS4uLlwiIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2F0YWxvZ05hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0YWxvZ05hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHRleHQtbGdcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ0YXJnZXRVcmxcIj5UYXJnZXQgV2Vic2l0ZSBVUkw8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICBpZD1cInRhcmdldFVybFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vd3d3LnlvdXItc3RvcmUuY29tXCIgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXJnZXRVcmx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFyZ2V0VXJsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMiB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTIgdGV4dC1sZyBtdC04XCIgXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYXRhbG9nTmFtZSB8fCAhdGFyZ2V0VXJsfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTdGVwKDIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTmV4dDogRW1iZWQgU25pcHBldCA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJtbC0yIGgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogU1RFUCAyOiBFbWJlZCBTbmlwcGV0ICovfVxuICAgICAgICAgIHtjdXJyZW50U3RlcCA9PT0gMiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBtZDpwLTEyIHctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBzcGFjZS15LTggYW5pbWF0ZS1pbiBmYWRlLWluIHNsaWRlLWluLWZyb20tYm90dG9tLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPkVtYmVkIHRoZSBMb2FkZXI8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkNvcHkgdGhlIHNuaXBwZXQgYmVsb3cgYW5kIHBhc3RlIGl0IGludG8gdGhlIDxjb2RlPiZsdDtoZWFkJmd0OzwvY29kZT4gb2YgeW91ciB3ZWJzaXRlIGF0IDxzdHJvbmc+e3RhcmdldFVybH08L3N0cm9uZz4uPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0zeGwgYmctemluYy05NTAgdGV4dC16aW5jLTUwIHJvdW5kZWQteGwgcC02IHJlbGF0aXZlIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21cIiBcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weVRvQ2xpcGJvYXJkKGdlbmVyYXRlZFNuaXBwZXQpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjb3BpZWQgPyA8Q2hlY2sgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz4gOiA8Q29weSBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPn1cbiAgICAgICAgICAgICAgICAgIHtjb3BpZWQgPyBcIkNvcGllZCFcIiA6IFwiQ29weSBDb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1zbSBvdmVyZmxvdy14LWF1dG8gcHQtOCBwYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8Y29kZT57Z2VuZXJhdGVkU25pcHBldH08L2NvZGU+XG4gICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCB3LWZ1bGwgbWF4LXctbWQgbXQtOFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJmbGV4LTFcIiBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U3RlcCgxKX0+XG4gICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJmbGV4LTFcIiBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U3RlcCgzKX0+XG4gICAgICAgICAgICAgICAgICBJJ3ZlIEVtYmVkZGVkIEl0IDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cIm1sLTIgaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiBTVEVQIDM6IENvbmZpcm0gQ29ubmVjdGlvbiAqL31cbiAgICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDMgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggbWQ6cC0xMiBtYXgtdy0yeGwgbXgtYXV0byB3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgc3BhY2UteS04IGFuaW1hdGUtaW4gZmFkZS1pbiBzbGlkZS1pbi1mcm9tLWJvdHRvbS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPlZlcmlmeSBJbnN0YWxsYXRpb248L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPldlJ2xsIHBpbmcgeW91ciB3ZWJzaXRlIHRvIHZlcmlmeSB0aGF0IHRoZSBIeXBlckNhcnQgbG9hZGVyIGlzIGluc3RhbGxlZCBjb3JyZWN0bHkuPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IGJvcmRlci0yIGJvcmRlci1kYXNoZWQgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1tdXRlZC8yMFwiPlxuICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uQ29uZmlybWVkID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LXByaW1hcnkgYW5pbWF0ZS1pbiB6b29tLWluIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGNsYXNzTmFtZT1cImgtMTYgdy0xNiBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+Q29ubmVjdGlvbiBTdWNjZXNzZnVsITwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8R2xvYmUgY2xhc3NOYW1lPXtgaC0xNiB3LTE2IHRleHQtbXV0ZWQtZm9yZWdyb3VuZCAke2lzQ29uZmlybWluZyA/IFwiYW5pbWF0ZS1wdWxzZSB0ZXh0LXByaW1hcnlcIiA6IFwiXCJ9YH0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7IWNvbm5lY3Rpb25Db25maXJtZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCB3LWZ1bGwgbXQtOFwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImZsZXgtMVwiIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTdGVwKDIpfSBkaXNhYmxlZD17aXNDb25maXJtaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImZsZXgtMVwiIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm1Db25uZWN0aW9ufSBkaXNhYmxlZD17aXNDb25maXJtaW5nfT5cbiAgICAgICAgICAgICAgICAgICAge2lzQ29uZmlybWluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8PjxSZWZyZXNoQ3cgY2xhc3NOYW1lPVwibXItMiBoLTUgdy01IGFuaW1hdGUtc3BpblwiIC8+IFZlcmlmeWluZy4uLjwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDw+PFNlYXJjaCBjbGFzc05hbWU9XCJtci0yIGgtNSB3LTVcIiAvPiBWZXJpZnkgQ29ubmVjdGlvbjwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIFNURVAgNDogU2NhbiBSZXN1bHRzICovfVxuICAgICAgICAgIHtjdXJyZW50U3RlcCA9PT0gNCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBtZDpwLTEyIHctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBzcGFjZS15LTggYW5pbWF0ZS1pbiBmYWRlLWluIHNsaWRlLWluLWZyb20tYm90dG9tLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPlNjYW4gWW91ciBXZWJzaXRlPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5XZSdsbCBzY2FuIDxzdHJvbmc+e3RhcmdldFVybH08L3N0cm9uZz4gZm9yIGFueSBlbGVtZW50cyB3aXRoIDxjb2RlPmRhdGEtaGMtKjwvY29kZT4gYXR0cmlidXRlcyB0byBidWlsZCB5b3VyIHByb2R1Y3QgbGlzdCBhdXRvbWF0aWNhbGx5LjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAge3NjYW5uZWRQcm9kdWN0cy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgbXQtOFwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xNCB0ZXh0LWxnXCIgb25DbGljaz17aGFuZGxlU2Nhbn0gZGlzYWJsZWQ9e2lzU2Nhbm5pbmd9PlxuICAgICAgICAgICAgICAgICAgICB7aXNTY2FubmluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8PjxSZWZyZXNoQ3cgY2xhc3NOYW1lPVwibXItMiBoLTYgdy02IGFuaW1hdGUtc3BpblwiIC8+IFNjYW5uaW5nIFBhZ2UuLi48Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8PjxTZWFyY2ggY2xhc3NOYW1lPVwibXItMiBoLTYgdy02XCIgLz4gU2NhbiBmb3IgUHJvZHVjdHM8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTN4bCB0ZXh0LWxlZnQgc3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+Rm91bmQge3NjYW5uZWRQcm9kdWN0cy5sZW5ndGh9IFByb2R1Y3RzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9e2hhbmRsZVNjYW59PjxSZWZyZXNoQ3cgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz4gUmVzY2FuPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1tdXRlZCB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBmb250LW1lZGl1bVwiPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyBmb250LW1lZGl1bVwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGZvbnQtbWVkaXVtXCI+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIGZvbnQtbWVkaXVtXCI+VHlwZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2Nhbm5lZFByb2R1Y3RzLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cC5pZH0gY2xhc3NOYW1lPVwiYmctY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tb25vXCI+e3AuaWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtXCI+e3AubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj4ke3AucHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IGNhcGl0YWxpemVcIj57cC50eXBlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBwdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvZHVjdElkKHNjYW5uZWRQcm9kdWN0c1swXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFN0ZXAoNSk7XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgIE5leHQ6IEJ1aWxkIENvbmZpZ3VyYXRpb25zIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cIm1sLTIgaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIFNURVAgNTogQ29uZmlndXJhdGlvbnMgQnVpbGRlciAqL31cbiAgICAgICAgICB7Y3VycmVudFN0ZXAgPT09IDUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBoLVs2MDBweF0gYW5pbWF0ZS1pbiBmYWRlLWluIHNsaWRlLWluLWZyb20tYm90dG9tLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgYm9yZGVyLWIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5Db25maWd1cmF0aW9ucyBCdWlsZGVyPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtXCI+RGVmaW5lIHRoZSBjb25maWd1cmF0aW9uIGZsb3cgKHdpemFyZCkgZm9yIHlvdXIgY29uZmlndXJhYmxlIHByb2R1Y3RzLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTdGVwKDYpfT5cbiAgICAgICAgICAgICAgICAgIE5leHQ6IFJldmlldyA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJtbC0yIGgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIHsvKiBTaWRlYmFyICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02NCBib3JkZXItciBiZy1tdXRlZC8yMCBmbGV4IGZsZXgtY29sIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5Qcm9kdWN0czwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcHgtMiBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAge3NjYW5uZWRQcm9kdWN0cy5tYXAocCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRQcm9kdWN0SWQocC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgdGV4dC1sZWZ0IHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9kdWN0SWQgPT09IHAuaWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgZm9udC1tZWRpdW1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaG92ZXI6YmctbXV0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPntwLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQteHMgbXQtMC41ICR7c2VsZWN0ZWRQcm9kdWN0SWQgPT09IHAuaWQgPyBcInRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kLzcwXCIgOiBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cC50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogRWRpdG9yIEFyZWEgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBiZy16aW5jLTk1MCB0ZXh0LXppbmMtNTAgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9kdWN0SWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy16aW5jLTkwMCBweC00IHB5LTMgYm9yZGVyLWIgYm9yZGVyLXppbmMtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nczIgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3VyYXRpb24gZm9yIHtzY2FubmVkUHJvZHVjdHMuZmluZChwID0+IHAuaWQgPT09IHNlbGVjdGVkUHJvZHVjdElkKT8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBiZy16aW5jLTk1MCBwLTEgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXppbmMtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC03IHB4LTMgdGV4dC14cyAke2J1aWxkZXJNb2RlID09PSAndmlzdWFsJyA/ICdiZy16aW5jLTgwMCB0ZXh0LXppbmMtNTAnIDogJ3RleHQtemluYy00MDAgaG92ZXI6dGV4dC16aW5jLTUwJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJ1aWxkZXJNb2RlKCd2aXN1YWwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXRUZW1wbGF0ZSBjbGFzc05hbWU9XCJoLTMgdy0zIG1yLTEuNVwiIC8+IFZpc3VhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTcgcHgtMyB0ZXh0LXhzICR7YnVpbGRlck1vZGUgPT09ICdjb2RlJyA/ICdiZy16aW5jLTgwMCB0ZXh0LXppbmMtNTAnIDogJ3RleHQtemluYy00MDAgaG92ZXI6dGV4dC16aW5jLTUwJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJ1aWxkZXJNb2RlKCdjb2RlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29kZSBjbGFzc05hbWU9XCJoLTMgdy0zIG1yLTEuNVwiIC8+IENvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtidWlsZGVyTW9kZSA9PT0gJ2NvZGUnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExhbmd1YWdlPVwianNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJ2cy1kYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdENvbmZpZ3Nbc2VsZWN0ZWRQcm9kdWN0SWRdIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHNldFByb2R1Y3RDb25maWdzKHByZXYgPT4gKHsgLi4ucHJldiwgW3NlbGVjdGVkUHJvZHVjdElkXTogdmFsIHx8IFwiXCIgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltYXA6IHsgZW5hYmxlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdE9uUGFzdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IG1heC13LTN4bCBteC1hdXRvIHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmZpZzogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IEpTT04ucGFyc2UocHJvZHVjdENvbmZpZ3Nbc2VsZWN0ZWRQcm9kdWN0SWRdIHx8IFwiW11cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggdGV4dC1jZW50ZXIgYm9yZGVyIGJvcmRlci1kZXN0cnVjdGl2ZS81MCBiZy1kZXN0cnVjdGl2ZS8xMCByb3VuZGVkLXhsIHRleHQtZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtYi0yXCI+SW52YWxpZCBKU09OPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBvcGFjaXR5LTgwXCI+UGxlYXNlIGZpeCB0aGUgSlNPTiBlcnJvcnMgaW4gQ29kZSBtb2RlIGJlZm9yZSB1c2luZyB0aGUgVmlzdWFsIEJ1aWxkZXIuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVDb25maWcgPSAobmV3Q29uZmlnOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0Q29uZmlncyhwcmV2ID0+ICh7IC4uLnByZXYsIFtzZWxlY3RlZFByb2R1Y3RJZF06IEpTT04uc3RyaW5naWZ5KG5ld0NvbmZpZywgbnVsbCwgMikgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkU3RlcCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ29uZmlnKFsuLi5jb25maWcsIHsga2V5OiBgc3RlcF8ke2NvbmZpZy5sZW5ndGggKyAxfWAsIHN0ZXA6IFwiTmV3IFN0ZXBcIiwgdHlwZTogXCJzZWxlY3RcIiwgb3B0aW9uczogW1wiT3B0aW9uIDFcIl0gfV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RlcCA9IChpbmRleDogbnVtYmVyLCB1cGRhdGVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gWy4uLmNvbmZpZ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvbmZpZ1tpbmRleF0gPSB7IC4uLm5ld0NvbmZpZ1tpbmRleF0sIC4uLnVwZGF0ZXMgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ29uZmlnKG5ld0NvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVTdGVwID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gWy4uLmNvbmZpZ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvbmZpZy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb25maWcobmV3Q29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMTIgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXppbmMtODAwIHJvdW5kZWQteGwgdGV4dC16aW5jLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0VGVtcGxhdGUgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIG14LWF1dG8gbWItNCBvcGFjaXR5LTIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gY29uZmlndXJhdGlvbiBzdGVwcyBkZWZpbmVkIHlldC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm1hcCgoc3RlcCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImJnLXppbmMtOTAwIGJvcmRlciBib3JkZXItemluYy04MDAgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy16aW5jLTgwMC81MCBweC00IHB5LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci16aW5jLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpcFZlcnRpY2FsIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC16aW5jLTUwMCBjdXJzb3ItbW92ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc20gdGV4dC16aW5jLTIwMFwiPlN0ZXAge2lkeCArIDF9OiB7c3RlcC5zdGVwIHx8IFwiVW50aXRsZWRcIn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cImljb25cIiBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtemluYy00MDAgaG92ZXI6dGV4dC1kZXN0cnVjdGl2ZSBob3ZlcjpiZy1kZXN0cnVjdGl2ZS8xMFwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZVN0ZXAoaWR4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC16aW5jLTQwMFwiPlN0ZXAgVGl0bGU8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGVwLnN0ZXAgfHwgXCJcIn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVN0ZXAoaWR4LCB7IHN0ZXA6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctemluYy05NTAgYm9yZGVyLXppbmMtODAwIGgtOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXppbmMtNDAwXCI+RGF0YSBLZXk8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGVwLmtleSB8fCBcIlwifSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlU3RlcChpZHgsIHsga2V5OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXppbmMtOTUwIGJvcmRlci16aW5jLTgwMCBoLTkgZm9udC1tb25vIHRleHQteHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC16aW5jLTQwMFwiPkRlc2NyaXB0aW9uIChPcHRpb25hbCk8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0ZXAuZGVzY3JpcHRpb24gfHwgXCJcIn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVTdGVwKGlkeCwgeyBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctemluYy05NTAgYm9yZGVyLXppbmMtODAwIGgtOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZWxwIHRleHQgZm9yIHRoaXMgc3RlcC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXppbmMtNDAwXCI+SW5wdXQgVHlwZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e3N0ZXAudHlwZSB8fCBcInNlbGVjdFwifSBvblZhbHVlQ2hhbmdlPXsodmFsKSA9PiB1cGRhdGVTdGVwKGlkeCwgeyB0eXBlOiB2YWwgfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGNsYXNzTmFtZT1cImJnLXppbmMtOTUwIGJvcmRlci16aW5jLTgwMCBoLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwic2VsZWN0XCI+RHJvcGRvd24gU2VsZWN0PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJyYWRpb1wiPlJhZGlvIEJ1dHRvbnM8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cImNhcmRzXCI+VmlzdWFsIENhcmRzPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJ0ZXh0XCI+VGV4dCBJbnB1dDwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiYXBpXCI+QVBJIFZhbGlkYXRpb248L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogVHlwZSBTcGVjaWZpYyBGaWVsZHMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcC50eXBlID09PSAndGV4dCcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41IHB0LTIgYm9yZGVyLXQgYm9yZGVyLXppbmMtODAwLzUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC16aW5jLTQwMFwiPlBsYWNlaG9sZGVyIFRleHQ8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGVwLnBsYWNlaG9sZGVyIHx8IFwiXCJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVTdGVwKGlkeCwgeyBwbGFjZWhvbGRlcjogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy16aW5jLTk1MCBib3JkZXItemluYy04MDAgaC05XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbJ3NlbGVjdCcsICdyYWRpbycsICdjYXJkcyddLmluY2x1ZGVzKHN0ZXAudHlwZSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBwdC0zIGJvcmRlci10IGJvcmRlci16aW5jLTgwMC81MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtemluYy00MDBcIj5PcHRpb25zPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhzdGVwLm9wdGlvbnMgfHwgW10pLm1hcCgob3B0OiBhbnksIG9wdElkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT2JqID0gdHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0ICE9PSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRMYWJlbCA9IGlzT2JqID8gb3B0LmxhYmVsIDogb3B0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtvcHRJZHh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wdExhYmVsIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdPcHRzID0gWy4uLihzdGVwLm9wdGlvbnMgfHwgW10pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc09iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdPcHRzW29wdElkeF0gPSB7IC4uLm9wdCwgbGFiZWw6IGUudGFyZ2V0LnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdPcHRzW29wdElkeF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVN0ZXAoaWR4LCB7IG9wdGlvbnM6IG5ld09wdHMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy16aW5jLTk1MCBib3JkZXItemluYy04MDAgaC05XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wdGlvbiBsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiaWNvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgdy05IHRleHQtemluYy01MDAgaG92ZXI6dGV4dC1kZXN0cnVjdGl2ZSBzaHJpbmstMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdPcHRzID0gWy4uLihzdGVwLm9wdGlvbnMgfHwgW10pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdPcHRzLnNwbGljZShvcHRJZHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVN0ZXAoaWR4LCB7IG9wdGlvbnM6IG5ld09wdHMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItZGFzaGVkIGJvcmRlci16aW5jLTcwMCBob3ZlcjpiZy16aW5jLTgwMCB0ZXh0LXppbmMtNDAwIG10LTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVTdGVwKGlkeCwgeyBvcHRpb25zOiBbLi4uKHN0ZXAub3B0aW9ucyB8fCBbXSksIFwiTmV3IE9wdGlvblwiXSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz4gQWRkIE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWRhc2hlZCBib3JkZXItemluYy03MDAgYmctemluYy05MDAgaG92ZXI6YmctemluYy04MDAgcHktOCB0ZXh0LXppbmMtNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFN0ZXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwiaC01IHctNSBtci0yXCIgLz4gQWRkIE5leHQgU3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtemluYy01MDAgZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0VGVtcGxhdGUgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIG9wYWNpdHktMjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBhIHByb2R1Y3QgZnJvbSB0aGUgc2lkZWJhciB0byBlZGl0IGl0cyBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIFNURVAgNjogUmV2aWV3ICovfVxuICAgICAgICAgIHtjdXJyZW50U3RlcCA9PT0gNiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBtZDpwLTEyIHctZnVsbCBmbGV4IGZsZXgtY29sIHNwYWNlLXktOCBhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtYXgtdy0yeGxcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+UmV2aWV3IENhdGFsb2cgRGF0YTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+VmVyaWZ5IHlvdXIgcHJvZHVjdCBsaXN0IGFuZCBjb25maWd1cmF0aW9uIGZsb3dzIGJlZm9yZSBwdWJsaXNoaW5nIHRvIHRoZSBIeXBlckNhcnQgQ0ROLjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctbXV0ZWQvMTAgaC1bNDAwcHhdIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRMYW5ndWFnZT1cImpzb25cIlxuICAgICAgICAgICAgICAgICAgdGhlbWU9XCJ2cy1kYXJrXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgICAgc2Nhbm5lZFByb2R1Y3RzLm1hcChwID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ucCxcbiAgICAgICAgICAgICAgICAgICAgICBjb25maWdGbG93OiBwcm9kdWN0Q29uZmlnc1twLmlkXSA/IEpTT04ucGFyc2UocHJvZHVjdENvbmZpZ3NbcC5pZF0pIDogW11cbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBtaW5pbWFwOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCB3LWZ1bGwgbWF4LXctbWQgbXQtOCBzZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJmbGV4LTFcIiBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U3RlcCg1KX0+XG4gICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJmbGV4LTFcIiBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U3RlcCg3KX0+XG4gICAgICAgICAgICAgICAgICBMb29rcyBHb29kIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cIm1sLTIgaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiBTVEVQIDc6IFB1Ymxpc2ggKi99XG4gICAgICAgICAge2N1cnJlbnRTdGVwID09PSA3ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IG1kOnAtMTIgbWF4LXctMnhsIG14LWF1dG8gdy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHNwYWNlLXktOCBhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5QdWJsaXNoIENvbmZpZ3VyYXRpb248L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkRlcGxveSB5b3VyIGNhdGFsb2cgc2V0dGluZ3MgdG8gdGhlIGVkZ2UuIFRoZSBIeXBlckNhcnQgc25pcHBldCBvbiB5b3VyIHdlYnNpdGUgd2lsbCBhdXRvbWF0aWNhbGx5IHBpY2sgdXAgdGhlc2UgY2hhbmdlcy48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLW11dGVkLzIwXCI+XG4gICAgICAgICAgICAgICAge3B1Ymxpc2hlZCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1wcmltYXJ5IGFuaW1hdGUtaW4gem9vbS1pbiBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBjbGFzc05hbWU9XCJoLTE2IHctMTYgbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPlB1Ymxpc2hlZCBTdWNjZXNzZnVsbHkhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBtdC0yXCI+WW91ciBzdG9yZSBpcyBub3cgbGl2ZSB3aXRoIHRoZSBsYXRlc3QgY29uZmlndXJhdGlvbi48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPFVwbG9hZENsb3VkIGNsYXNzTmFtZT17YGgtMTYgdy0xNiB0ZXh0LW11dGVkLWZvcmVncm91bmQgJHtpc1B1Ymxpc2hpbmcgPyBcImFuaW1hdGUtYm91bmNlIHRleHQtcHJpbWFyeVwiIDogXCJcIn1gfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHshcHVibGlzaGVkID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCB3LWZ1bGwgbXQtOFwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImZsZXgtMVwiIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTdGVwKDYpfSBkaXNhYmxlZD17aXNQdWJsaXNoaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImZsZXgtMVwiIG9uQ2xpY2s9e2hhbmRsZVB1Ymxpc2h9IGRpc2FibGVkPXtpc1B1Ymxpc2hpbmd9PlxuICAgICAgICAgICAgICAgICAgICB7aXNQdWJsaXNoaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDw+PFJlZnJlc2hDdyBjbGFzc05hbWU9XCJtci0yIGgtNSB3LTUgYW5pbWF0ZS1zcGluXCIgLz4gUHVibGlzaGluZy4uLjwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDw+PFVwbG9hZENsb3VkIGNsYXNzTmFtZT1cIm1yLTIgaC01IHctNVwiIC8+IFB1Ymxpc2ggdG8gQ0ROPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgdy1mdWxsIG10LThcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJmbGV4LTFcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTdGVwKDEpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQdWJsaXNoZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDYXRhbG9nTmFtZShcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGFyZ2V0VXJsKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW9uQ29uZmlybWVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2Nhbm5lZFByb2R1Y3RzKFtdKTtcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBTdGFydCBPdmVyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJldHVybiBIb21lXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIklucHV0IiwiTGFiZWwiLCJTZWxlY3QiLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0SXRlbSIsIlNlbGVjdFRyaWdnZXIiLCJTZWxlY3RWYWx1ZSIsIkNvcHkiLCJDaGVjayIsIkFycm93TGVmdCIsIkNvZGUiLCJBcnJvd1JpZ2h0IiwiUmVmcmVzaEN3IiwiQ2hlY2tDaXJjbGUyIiwiR2xvYmUiLCJTZWFyY2giLCJTZXR0aW5nczIiLCJVcGxvYWRDbG91ZCIsIkxheW91dFRlbXBsYXRlIiwiUGx1cyIsIlRyYXNoMiIsIkdyaXBWZXJ0aWNhbCIsIkxpbmsiLCJFZGl0b3IiLCJNT0NLX1NDQU5ORURfUFJPRFVDVFMiLCJpZCIsIm5hbWUiLCJwcmljZSIsInR5cGUiLCJEYXNoYm9hcmQiLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwiY2F0YWxvZ05hbWUiLCJzZXRDYXRhbG9nTmFtZSIsInRhcmdldFVybCIsInNldFRhcmdldFVybCIsImNvcGllZCIsInNldENvcGllZCIsImlzQ29uZmlybWluZyIsInNldElzQ29uZmlybWluZyIsImNvbm5lY3Rpb25Db25maXJtZWQiLCJzZXRDb25uZWN0aW9uQ29uZmlybWVkIiwiaXNTY2FubmluZyIsInNldElzU2Nhbm5pbmciLCJzY2FubmVkUHJvZHVjdHMiLCJzZXRTY2FubmVkUHJvZHVjdHMiLCJzZWxlY3RlZFByb2R1Y3RJZCIsInNldFNlbGVjdGVkUHJvZHVjdElkIiwicHJvZHVjdENvbmZpZ3MiLCJzZXRQcm9kdWN0Q29uZmlncyIsImlzUHVibGlzaGluZyIsInNldElzUHVibGlzaGluZyIsInB1Ymxpc2hlZCIsInNldFB1Ymxpc2hlZCIsImJ1aWxkZXJNb2RlIiwic2V0QnVpbGRlck1vZGUiLCJjYXRhbG9nSWQiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJnZW5lcmF0ZWRTbmlwcGV0IiwiY29weVRvQ2xpcGJvYXJkIiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJoYW5kbGVDb25maXJtQ29ubmVjdGlvbiIsImhhbmRsZVNjYW4iLCJpbml0aWFsQ29uZmlncyIsImZvckVhY2giLCJwIiwiaGFuZGxlUHVibGlzaCIsInN0ZXBzIiwibnVtIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJ0byIsInZhcmlhbnQiLCJzaXplIiwic3BhbiIsImgxIiwibWFpbiIsInN0eWxlIiwid2lkdGgiLCJsZW5ndGgiLCJtYXAiLCJzdGVwIiwiaDIiLCJodG1sRm9yIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImRpc2FibGVkIiwib25DbGljayIsImNvZGUiLCJzdHJvbmciLCJwcmUiLCJoMyIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJ0ZCIsImJ1dHRvbiIsImZpbmQiLCJoZWlnaHQiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJ0aGVtZSIsInZhbCIsInByZXYiLCJvcHRpb25zIiwibWluaW1hcCIsImVuYWJsZWQiLCJmb250U2l6ZSIsImZvcm1hdE9uUGFzdGUiLCJjb25maWciLCJKU09OIiwicGFyc2UiLCJ1cGRhdGVDb25maWciLCJuZXdDb25maWciLCJzdHJpbmdpZnkiLCJhZGRTdGVwIiwia2V5IiwidXBkYXRlU3RlcCIsImluZGV4IiwidXBkYXRlcyIsInJlbW92ZVN0ZXAiLCJzcGxpY2UiLCJpZHgiLCJkZXNjcmlwdGlvbiIsIm9uVmFsdWVDaGFuZ2UiLCJpbmNsdWRlcyIsIm9wdCIsIm9wdElkeCIsImlzT2JqIiwib3B0TGFiZWwiLCJsYWJlbCIsIm5ld09wdHMiLCJjb25maWdGbG93IiwicmVhZE9ubHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFFBQVEsUUFBbUIsUUFBUTtBQUM1QyxTQUFTQyxNQUFNLFFBQVEseUJBQXlCO0FBQ2hELFNBQVNDLEtBQUssUUFBUSx3QkFBd0I7QUFDOUMsU0FBU0MsS0FBSyxRQUFRLHdCQUF3QjtBQUM5QyxTQUFTQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsUUFBUSx5QkFBeUI7QUFDdkcsU0FBU0MsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGNBQWMsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksUUFBUSxlQUFlO0FBQ3BMLFNBQVNDLElBQUksUUFBUSxtQkFBbUI7QUFDeEMsT0FBT0MsWUFBWSx1QkFBdUI7QUFFMUMsTUFBTUMsd0JBQXdCO0lBQzVCO1FBQUVDLElBQUk7UUFBT0MsTUFBTTtRQUFpQ0MsT0FBTztRQUFVQyxNQUFNO0lBQWU7SUFDMUY7UUFBRUgsSUFBSTtRQUFPQyxNQUFNO1FBQTZCQyxPQUFPO1FBQVNDLE1BQU07SUFBZTtJQUNyRjtRQUFFSCxJQUFJO1FBQU9DLE1BQU07UUFB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