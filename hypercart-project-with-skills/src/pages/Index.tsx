import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Index.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Index.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { CartOverlay } from "/src/components/CartOverlay.tsx?t=1780870179289";
import { ShoppingAttendant } from "/src/components/ShoppingAttendant.tsx?t=1780866316903";
import { Button } from "/src/components/ui/button.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/src/components/ui/tabs.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
import Editor from "/node_modules/.vite/deps/@monaco-editor_react.js?v=7dd7a232";
import CartOverlayCode from "/src/components/CartOverlay.tsx?t=1780870179289&raw";
import { Minus, Plus, Settings2 } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
const DEFAULT_PRODUCTS = [
    {
        id: 101,
        name: "Ergonomic Mechanical Keyboard",
        price: 149.99,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/6e811bf2-f084-4b56-8a78-ea71d8c7c957.jpg",
        description: "Premium tactile switches with customizable RGB backlighting.",
        type: "configurable",
        configFlow: [
            {
                key: "switches",
                step: "Switch Type",
                type: "select",
                options: [
                    "Linear (Red)",
                    "Tactile (Brown)",
                    "Clicky (Blue)"
                ]
            },
            {
                key: "keycaps",
                step: "Keycap Color",
                type: "radio",
                options: [
                    "Dark Matter",
                    "Arctic White",
                    "Retro Grey"
                ]
            }
        ],
        reviewContent: "This keyboard has been rated 5 stars by over 10,000 customers. It features hot-swappable switches and a solid aluminum frame.",
        pageSelector: "#keyboard-specs"
    },
    {
        id: 102,
        name: "Coffee Beans Subscription",
        price: 19.00,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/9475ecc8-626b-45da-ba97-670215b55935.jpg",
        description: "Freshly roasted artisanal coffee beans delivered to your door.",
        type: "subscription",
        interval: "month",
        reviewContent: "Our beans are ethically sourced from single-origin farms in Colombia and Ethiopia.",
        reviewUrl: "https://jsonplaceholder.typicode.com/posts/1"
    },
    {
        id: 103,
        name: "Custom Gaming PC",
        price: 999.00,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/2ed3f05a-1abb-4eb9-b97f-1b882e9dac0a.jpg",
        description: "Build your dream machine with our multi-step configurator.",
        type: "configurable",
        configFlow: [
            {
                key: "cpu",
                step: "Processor",
                type: "select",
                options: [
                    "Intel Core i5",
                    "Intel Core i7",
                    "Intel Core i9",
                    "AMD Ryzen 5",
                    "AMD Ryzen 7",
                    "AMD Ryzen 9"
                ]
            },
            {
                key: "gpu",
                step: "Graphics Card",
                type: "select",
                options: [
                    "RTX 4060",
                    "RTX 4070",
                    "RTX 4080",
                    "RTX 4090",
                    "RX 7900 XTX"
                ]
            },
            {
                key: "ram",
                step: "Memory (RAM)",
                type: "radio",
                options: [
                    {
                        label: "16GB DDR5",
                        description: "Great for casual gaming and multitasking."
                    },
                    {
                        label: "32GB DDR5",
                        description: "Ideal for heavy gaming and streaming."
                    },
                    {
                        label: "64GB DDR5",
                        description: "For professional workloads and extreme multitasking."
                    }
                ]
            },
            {
                key: "engraving",
                step: "Custom Engraving",
                type: "text",
                placeholder: "Enter name or gamer tag..."
            }
        ]
    },
    {
        id: 104,
        name: "Digital Masterclass",
        price: 49.99,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/3699f1bf-6212-4c9a-b0b4-1c305b0dd17b.png",
        description: "Instant access to 40+ hours of video content and resources.",
        type: "digital"
    },
    {
        id: 105,
        name: "Consultation Call",
        price: 150.00,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/6f86073b-9df4-4577-b74c-e74ee84075c7.png",
        description: "Book a 1-on-1 strategy session with our experts.",
        type: "service",
        configFlow: [
            {
                key: "topic",
                step: "Main Topic",
                type: "select",
                options: [
                    "Marketing Strategy",
                    "Technical Review",
                    "Design Audit",
                    "General Advice"
                ]
            },
            {
                key: "notes",
                step: "Preparation Notes",
                type: "text",
                placeholder: "What should we prepare for?"
            }
        ]
    },
    {
        id: 106,
        name: "Custom Streetwear Sneakers",
        price: 189.99,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/43ee0062-aad4-4b7a-9338-eff67a56990f.jpg",
        description: "Design your own signature kicks with premium materials.",
        type: "configurable",
        configFlow: [
            {
                key: "size",
                step: "Shoe Size",
                type: "select",
                options: [
                    "US 7",
                    "US 8",
                    "US 9",
                    "US 10",
                    "US 11",
                    "US 12"
                ]
            },
            {
                key: "color",
                step: "Primary Color",
                type: "cards",
                options: [
                    {
                        label: "Matte Black",
                        image: "https://vibe.filesafe.space/1780845837850401115/assets/43ee0062-aad4-4b7a-9338-eff67a56990f.jpg",
                        description: "Stealthy and versatile."
                    },
                    {
                        label: "Arctic White",
                        image: "https://vibe.filesafe.space/1780845837850401115/assets/6e811bf2-f084-4b56-8a78-ea71d8c7c957.jpg",
                        description: "Clean, crisp, and bright."
                    },
                    {
                        label: "Neon Green",
                        image: "https://vibe.filesafe.space/1780845837850401115/assets/2ed3f05a-1abb-4eb9-b97f-1b882e9dac0a.jpg",
                        description: "Stand out from the crowd."
                    },
                    {
                        label: "Crimson Red",
                        image: "https://vibe.filesafe.space/1780845837850401115/assets/9475ecc8-626b-45da-ba97-670215b55935.jpg",
                        description: "Bold and aggressive."
                    }
                ]
            },
            {
                key: "laces",
                step: "Lace Style",
                type: "radio",
                options: [
                    "Standard",
                    "Reflective",
                    "Elastic"
                ]
            }
        ]
    },
    {
        id: 107,
        name: "Weekly Meal Prep Plan",
        price: 89.99,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/75dfb44d-843f-49da-a1f8-3994c40b2911.jpg",
        description: "Chef-prepared healthy meals delivered weekly.",
        type: "configurable",
        interval: "week",
        configFlow: [
            {
                key: "diet",
                step: "Dietary Preference",
                type: "select",
                options: [
                    "Keto",
                    "Vegan",
                    "Paleo",
                    "Balanced"
                ]
            },
            {
                key: "meals",
                step: "Meals per Week",
                type: "radio",
                options: [
                    "5 Meals",
                    "10 Meals",
                    "14 Meals",
                    "21 Meals"
                ]
            },
            {
                key: "allergies",
                step: "Allergies / Exclusions",
                type: "text",
                placeholder: "e.g., No nuts, no dairy..."
            }
        ]
    },
    {
        id: 108,
        name: "Enterprise Cloud Workspace",
        price: 499.00,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/0cc77f6a-7d26-441b-9aaa-2af7c7d408bf.jpg",
        description: "Scalable cloud infrastructure for your growing team.",
        type: "configurable",
        interval: "month",
        configFlow: [
            {
                key: "tier",
                step: "Service Tier",
                type: "radio",
                options: [
                    "Business",
                    "Enterprise",
                    "Dedicated"
                ]
            },
            {
                key: "seats",
                step: "Number of Seats",
                type: "select",
                options: [
                    "10-50",
                    "51-200",
                    "201-500",
                    "500+"
                ]
            },
            {
                key: "addons",
                step: "Premium Add-ons",
                type: "radio",
                options: [
                    "None",
                    "Advanced Analytics",
                    "24/7 Priority Support",
                    "Both"
                ]
            },
            {
                key: "domain",
                step: "Custom Domain",
                type: "text",
                placeholder: "workspace.yourcompany.com"
            }
        ]
    },
    {
        id: 109,
        name: "Prescription Glasses",
        price: 129.00,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/0cc77f6a-7d26-441b-9aaa-2af7c7d408bf.jpg",
        description: "Stylish frames with custom prescription lenses.",
        type: "configurable",
        configFlow: [
            {
                key: "frame_color",
                step: "Frame Color",
                type: "radio",
                options: [
                    "Tortoise",
                    "Matte Black",
                    "Clear"
                ]
            },
            {
                key: "prescription_verification",
                step: "Verify Prescription",
                description: "We need to verify your prescription with your doctor. (Type 'error' to simulate failure)",
                type: "api",
                endpoint: "/api/verify-prescription",
                successMessage: "Prescription verified successfully!",
                inputs: [
                    {
                        key: "doctor_name",
                        label: "Doctor's Name",
                        type: "text",
                        placeholder: "Dr. Smith"
                    },
                    {
                        key: "rx_number",
                        label: "RX Number",
                        type: "text",
                        placeholder: "RX-12345"
                    }
                ]
            },
            {
                key: "lens_type",
                step: "Lens Type",
                type: "select",
                options: [
                    "Standard",
                    "Blue Light Blocking",
                    "Transition"
                ]
            }
        ]
    }
];
const Index = ()=>{
    _s();
    const [products, setProducts] = useState(DEFAULT_PRODUCTS);
    const [editorContent, setEditorContent] = useState(JSON.stringify(DEFAULT_PRODUCTS, null, 2));
    const [activeTab, setActiveTab] = useState("catalog");
    const [jsonError, setJsonError] = useState("");
    const [cartItems, setCartItems] = useState([]);
    useEffect(()=>{
        const handleCartUpdated = (e)=>setCartItems(e.detail);
        window.addEventListener('cart-updated', handleCartUpdated);
        return ()=>window.removeEventListener('cart-updated', handleCartUpdated);
    }, []);
    const handleApplyJson = ()=>{
        try {
            const parsed = JSON.parse(editorContent);
            setProducts(parsed);
            setJsonError("");
            setActiveTab("catalog");
        } catch (e) {
            setJsonError(e.message);
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [
            /*#__PURE__*/ _jsxDEV("header", {
                className: "border-b px-6 py-4 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-10",
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
                                    fileName: "/app/src/pages/Index.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("h1", {
                                className: "text-xl font-bold tracking-tight",
                                children: "<hyper-cart/>"
                            }, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/pages/Index.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "/dashboard",
                                className: "text-sm font-medium hover:underline text-muted-foreground",
                                children: "Shop Dashboard"
                            }, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("a", {
                                href: "/download",
                                className: "text-sm font-medium hover:underline text-muted-foreground",
                                children: "Export Project"
                            }, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(CartOverlay, {}, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/pages/Index.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/src/pages/Index.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("main", {
                className: "flex-1 max-w-6xl mx-auto px-6 py-16 w-full",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "text-center mb-10 max-w-2xl mx-auto space-y-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                className: "text-4xl font-extrabold tracking-tight lg:text-5xl",
                                children: "Next-Gen Commerce"
                            }, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                className: "text-xl text-muted-foreground",
                                children: "Experience our seamless Snipcart-style overlay. Add items to your cart, checkout, or chat with support without leaving the page."
                            }, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                id: "keyboard-specs",
                                className: "hidden",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h4", {
                                        className: "text-xl font-bold mb-2",
                                        children: "Keyboard Specifications"
                                    }, void 0, false, {
                                        fileName: "/app/src/pages/Index.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("ul", {
                                        className: "list-disc pl-5 text-left text-sm text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("li", {
                                                children: "Switch Type: Cherry MX Red (Linear)"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("li", {
                                                children: "Keycaps: Double-shot PBT"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("li", {
                                                children: "Polling Rate: 1000Hz"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("li", {
                                                children: "Connection: USB-C Detachable"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Index.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/pages/Index.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(Tabs, {
                        value: activeTab,
                        onValueChange: setActiveTab,
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex justify-center mb-8",
                                children: /*#__PURE__*/ _jsxDEV(TabsList, {
                                    className: "grid w-full max-w-3xl grid-cols-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                            value: "catalog",
                                            children: "Product Catalog"
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                            value: "documentation",
                                            children: "Documentation"
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                            value: "editor",
                                            children: "JSON Configurator"
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                            value: "source",
                                            children: "Source Code"
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/pages/Index.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(TabsContent, {
                                value: "catalog",
                                className: "space-y-12",
                                children: [
                                    [
                                        'standard',
                                        'subscription',
                                        'configurable',
                                        'digital',
                                        'service'
                                    ].map((type)=>{
                                        const typeProducts = products.filter((p)=>p.type === type);
                                        if (typeProducts.length === 0) return null;
                                        return /*#__PURE__*/ _jsxDEV("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex items-center gap-2 border-b pb-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            className: "text-2xl font-bold capitalize",
                                                            children: [
                                                                type,
                                                                " Products"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV(Badge, {
                                                            variant: "secondary",
                                                            children: typeProducts.length
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                                    children: typeProducts.map((product)=>/*#__PURE__*/ _jsxDEV("div", {
                                                            id: `product-card-${product.id}`,
                                                            className: "group rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md relative",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    className: "aspect-square bg-muted relative overflow-hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("img", {
                                                                            src: product.image || "https://vibe.filesafe.space/1780845837850401115/assets/6e811bf2-f084-4b56-8a78-ea71d8c7c957.jpg",
                                                                            alt: product.name,
                                                                            className: "object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 234,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        product.type === 'configurable' && /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "absolute top-2 right-2",
                                                                            children: /*#__PURE__*/ _jsxDEV(Badge, {
                                                                                className: "bg-primary/90 hover:bg-primary",
                                                                                children: "Configurable"
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/pages/Index.tsx",
                                                                                lineNumber: 241,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 240,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    className: "p-6 flex-1 flex flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "flex justify-between items-start gap-4 mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                                                    className: "text-lg font-semibold leading-tight",
                                                                                    children: product.name
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                                    lineNumber: 247,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV("span", {
                                                                                    className: "font-bold whitespace-nowrap",
                                                                                    children: [
                                                                                        "$",
                                                                                        product.price.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                                    lineNumber: 248,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 246,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                                            className: "text-sm text-muted-foreground mb-6 flex-1",
                                                                            children: product.description
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 250,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        (()=>{
                                                                            const existingItems = cartItems.filter((item)=>item.id == product.id && !item.groupId);
                                                                            if (existingItems.length > 0) {
                                                                                return /*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "flex flex-col gap-2",
                                                                                    children: [
                                                                                        existingItems.map((cartItem, idx)=>/*#__PURE__*/ _jsxDEV("div", {
                                                                                                className: "flex flex-col gap-2 border p-2 rounded-md bg-muted/20",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                                                        className: "flex items-center justify-between gap-2",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                                                                className: "text-xs font-medium truncate flex-1",
                                                                                                                children: product.type === 'configurable' ? cartItem.configuration ? 'Configured Item' : 'Unconfigured Item' : 'In Cart'
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "/app/src/pages/Index.tsx",
                                                                                                                lineNumber: 261,
                                                                                                                columnNumber: 41
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                                                                className: "flex items-center justify-between bg-background rounded-md border p-0.5",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ _jsxDEV(Button, {
                                                                                                                        variant: "ghost",
                                                                                                                        size: "icon",
                                                                                                                        className: "h-6 w-6 rounded-sm",
                                                                                                                        onClick: ()=>window.HyperCart?.updateQuantity(cartItem.cartItemId || cartItem.id, -1),
                                                                                                                        children: /*#__PURE__*/ _jsxDEV(Minus, {
                                                                                                                            className: "h-3 w-3"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                                                                            lineNumber: 266,
                                                                                                                            columnNumber: 45
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "/app/src/pages/Index.tsx",
                                                                                                                        lineNumber: 265,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                                                                        className: "text-xs font-medium w-6 text-center",
                                                                                                                        children: cartItem.quantity
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "/app/src/pages/Index.tsx",
                                                                                                                        lineNumber: 268,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ _jsxDEV(Button, {
                                                                                                                        variant: "ghost",
                                                                                                                        size: "icon",
                                                                                                                        className: "h-6 w-6 rounded-sm",
                                                                                                                        onClick: ()=>window.HyperCart?.updateQuantity(cartItem.cartItemId || cartItem.id, 1),
                                                                                                                        children: /*#__PURE__*/ _jsxDEV(Plus, {
                                                                                                                            className: "h-3 w-3"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                                                                            lineNumber: 270,
                                                                                                                            columnNumber: 45
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "/app/src/pages/Index.tsx",
                                                                                                                        lineNumber: 269,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "/app/src/pages/Index.tsx",
                                                                                                                lineNumber: 264,
                                                                                                                columnNumber: 41
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "/app/src/pages/Index.tsx",
                                                                                                        lineNumber: 260,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    product.type === 'configurable' && /*#__PURE__*/ _jsxDEV(Button, {
                                                                                                        variant: "outline",
                                                                                                        className: "w-full text-xs h-7",
                                                                                                        onClick: ()=>window.HyperCart?.configureItem(cartItem.cartItemId || cartItem.id, {
                                                                                                                presentation: product.id === 103 || product.id === 101 ? "card-overlay" : "sheet",
                                                                                                                inlineTarget: `#product-card-${product.id}`
                                                                                                            }),
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ _jsxDEV(Settings2, {
                                                                                                                className: "h-3 w-3 mr-1"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "/app/src/pages/Index.tsx",
                                                                                                                lineNumber: 276,
                                                                                                                columnNumber: 43
                                                                                                            }, this),
                                                                                                            cartItem.configuration ? 'Edit Options' : 'Configure'
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "/app/src/pages/Index.tsx",
                                                                                                        lineNumber: 275,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, cartItem.cartItemId || idx, true, {
                                                                                                fileName: "/app/src/pages/Index.tsx",
                                                                                                lineNumber: 259,
                                                                                                columnNumber: 37
                                                                                            }, this)),
                                                                                        product.type === 'configurable' && /*#__PURE__*/ _jsxDEV(Button, {
                                                                                            variant: "secondary",
                                                                                            className: "w-full hyper-add-to-cart mt-1",
                                                                                            "data-hc-id": product.id,
                                                                                            "data-hc-name": product.name,
                                                                                            "data-hc-price": product.price,
                                                                                            "data-hc-image": product.image,
                                                                                            "data-hc-type": product.type,
                                                                                            "data-hc-interval": product.interval,
                                                                                            "data-hc-config-flow": product.configFlow ? JSON.stringify(product.configFlow) : undefined,
                                                                                            "data-hc-review-content": product.reviewContent,
                                                                                            "data-hc-review-url": product.reviewUrl,
                                                                                            "data-hc-page-selector": product.pageSelector,
                                                                                            "data-hc-presentation": product.id === 103 || product.id === 101 ? "card-overlay" : undefined,
                                                                                            "data-hc-inline-target": product.id === 103 || product.id === 101 ? `#product-card-${product.id}` : undefined,
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Plus, {
                                                                                                    className: "h-4 w-4 mr-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                                                    lineNumber: 299,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                " Add Another"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                                            lineNumber: 283,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                                    lineNumber: 257,
                                                                                    columnNumber: 33
                                                                                }, this);
                                                                            }
                                                                            return /*#__PURE__*/ _jsxDEV(Button, {
                                                                                className: "w-full hyper-add-to-cart",
                                                                                "data-hc-id": product.id,
                                                                                "data-hc-name": product.name,
                                                                                "data-hc-price": product.price,
                                                                                "data-hc-image": product.image,
                                                                                "data-hc-type": product.type,
                                                                                "data-hc-interval": product.interval,
                                                                                "data-hc-config-flow": product.configFlow ? JSON.stringify(product.configFlow) : undefined,
                                                                                "data-hc-review-content": product.reviewContent,
                                                                                "data-hc-review-url": product.reviewUrl,
                                                                                "data-hc-page-selector": product.pageSelector,
                                                                                "data-hc-presentation": product.id === 103 || product.id === 101 ? "card-overlay" : undefined,
                                                                                "data-hc-inline-target": product.id === 103 || product.id === 101 ? `#product-card-${product.id}` : undefined,
                                                                                children: "Add to Cart"
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/pages/Index.tsx",
                                                                                lineNumber: 306,
                                                                                columnNumber: 31
                                                                            }, this);
                                                                        })()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, product.id, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, type, true, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "space-y-6 pt-8 border-t",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex items-center gap-2 border-b pb-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        className: "text-2xl font-bold",
                                                        children: "Special Bundles & Auto-Add"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Index.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Badge, {
                                                        variant: "secondary",
                                                        children: "API Demos"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Index.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 334,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "rounded-xl border bg-card p-6 shadow-sm flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                className: "text-xl font-semibold mb-2",
                                                                children: "Starter Bundle (JS API)"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground mb-6 flex-1",
                                                                children: "Add a Keyboard and Coffee Subscription together as a linked group with special discounted pricing."
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                                variant: "default",
                                                                onClick: ()=>{
                                                                    const bundleItems = [
                                                                        {
                                                                            ...DEFAULT_PRODUCTS[0],
                                                                            specialPrice: 99.99
                                                                        },
                                                                        {
                                                                            ...DEFAULT_PRODUCTS[1],
                                                                            specialPrice: 0.00
                                                                        }
                                                                    ];
                                                                    window.HyperCart.addGroup(bundleItems, 'starter-bundle');
                                                                },
                                                                children: "Add Starter Bundle"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/pages/Index.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "rounded-xl border bg-card p-6 shadow-sm flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                className: "text-xl font-semibold mb-2",
                                                                children: "URL Auto-Add Demo"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground mb-6 flex-1",
                                                                children: "Reloads the page with a URL parameter that automatically adds a bundle to the cart on load."
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                                variant: "secondary",
                                                                onClick: ()=>{
                                                                    const bundleItems = [
                                                                        {
                                                                            ...DEFAULT_PRODUCTS[4],
                                                                            specialPrice: 99.00
                                                                        },
                                                                        {
                                                                            ...DEFAULT_PRODUCTS[3],
                                                                            specialPrice: 19.99
                                                                        }
                                                                    ];
                                                                    const payload = btoa(JSON.stringify(bundleItems));
                                                                    window.location.href = `?hc-bundle=${payload}`;
                                                                },
                                                                children: "Test URL Auto-Add"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/pages/Index.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "rounded-xl border bg-card p-6 shadow-sm flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                className: "text-xl font-semibold mb-2",
                                                                children: "Modal Presentation"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground mb-6 flex-1",
                                                                children: "Open the cart in a centered modal dialog instead of a slide-out sheet."
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                                variant: "secondary",
                                                                className: "hyper-add-to-cart",
                                                                "data-hc-id": "110",
                                                                "data-hc-name": "Modal Demo Item",
                                                                "data-hc-price": "0.00",
                                                                "data-hc-presentation": "modal",
                                                                children: "Add & Open Modal"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/pages/Index.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "rounded-xl border bg-card p-6 shadow-sm flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                className: "text-xl font-semibold mb-2",
                                                                children: "Inline Injection"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground mb-6 flex-1",
                                                                children: "Inject the cart UI directly into a container on the page."
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                                variant: "secondary",
                                                                className: "hyper-add-to-cart",
                                                                "data-hc-id": "111",
                                                                "data-hc-name": "Inline Demo Item",
                                                                "data-hc-price": "0.00",
                                                                "data-hc-presentation": "inline",
                                                                "data-hc-inline-target": "#inline-cart-container",
                                                                children: "Add & Inject Inline"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/pages/Index.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "rounded-xl border bg-card p-6 shadow-sm flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                className: "text-xl font-semibold mb-2",
                                                                children: "Card Overlay"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground mb-6 flex-1",
                                                                children: "Project the configuration flow directly over the product card. (Also active on the Custom Gaming PC above)."
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                                variant: "secondary",
                                                                className: "hyper-add-to-cart",
                                                                "data-hc-id": "103",
                                                                "data-hc-name": "Custom Gaming PC",
                                                                "data-hc-price": "999.00",
                                                                "data-hc-type": "configurable",
                                                                "data-hc-config-flow": JSON.stringify(DEFAULT_PRODUCTS[2].configFlow),
                                                                "data-hc-presentation": "card-overlay",
                                                                "data-hc-inline-target": "#demo-card-overlay-target",
                                                                children: "Configure In-Place"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/pages/Index.tsx",
                                                                lineNumber: 408,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/pages/Index.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 338,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                id: "demo-card-overlay-target",
                                                className: "mt-8 rounded-xl relative border bg-muted/30 p-8 text-center text-muted-foreground",
                                                children: 'This container will be overlaid by the configuration flow when you click the "Configure In-Place" button above.'
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 424,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                id: "inline-cart-container",
                                                className: "mt-8"
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 427,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/pages/Index.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(TabsContent, {
                                value: "documentation",
                                className: "space-y-8",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    className: "rounded-lg border bg-card p-6 md:p-10 shadow-sm space-y-8",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    className: "text-2xl font-bold mb-4",
                                                    children: "HyperCart Integration"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    className: "text-muted-foreground mb-6",
                                                    children: [
                                                        "HyperCart is a drop-in shopping cart overlay that works on any website. Simply include our small loader script and add special ",
                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                            children: "data-hc-*"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 146
                                                        }, this),
                                                        " attributes to your existing buttons. The loader will lazy-load the cart plugins only when needed!"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto",
                                                    children: `<script src="https://cdn.hypercart.com/v1/hyper-cart-loader.js" async></script>
<script src="https://cdn.hypercart.com/v1/hyper-attendant-loader.js" async></script>`
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                    className: "text-xl font-semibold border-b pb-2",
                                                    children: "Basic Usage"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    className: "text-muted-foreground",
                                                    children: 'Turn any button or link into an "Add to Cart" button by adding these attributes:'
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto text-muted-foreground",
                                                    children: `<button class="hyper-add-to-cart"\n  data-hc-id="101"\n  data-hc-name="Mechanical Keyboard"\n  data-hc-price="149.99"\n  data-hc-image="/assets/keyboard.jpg">\n  Add to Cart\n</button>`
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                    className: "text-xl font-semibold border-b pb-2",
                                                    children: "Attribute Reference"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: [
                                                                        "data-hc-id ",
                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                            className: "text-xs text-destructive ml-2",
                                                                            children: "*Required"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 456,
                                                                            columnNumber: 85
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 456,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Unique identifier for the product."
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: [
                                                                        "data-hc-name ",
                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                            className: "text-xs text-destructive ml-2",
                                                                            children: "*Required"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 460,
                                                                            columnNumber: 87
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "The display name of the product."
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: [
                                                                        "data-hc-price ",
                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                            className: "text-xs text-destructive ml-2",
                                                                            children: "*Required"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 464,
                                                                            columnNumber: 88
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "The numeric price of the product (e.g. 19.99)."
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: "data-hc-image"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 468,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "URL to the product thumbnail image."
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: "data-hc-type"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "Type of product: ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "standard"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 83
                                                                        }, this),
                                                                        ", ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "subscription"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 106
                                                                        }, this),
                                                                        ", ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "configurable"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 133
                                                                        }, this),
                                                                        ", ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "digital"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 160
                                                                        }, this),
                                                                        ", ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "service"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 182
                                                                        }, this),
                                                                        "."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 473,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: "data-hc-interval"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "For subscriptions. e.g. ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "month"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 477,
                                                                            columnNumber: 90
                                                                        }, this),
                                                                        ", ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "year"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 477,
                                                                            columnNumber: 110
                                                                        }, this),
                                                                        "."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: "data-hc-review-content"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Static text to show in the Overview tab."
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: "data-hc-review-url"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "URL to fetch dynamic JSON data for the Overview tab."
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: "data-hc-presentation"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "How the cart is displayed: ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "sheet"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 93
                                                                        }, this),
                                                                        " (default), ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "modal"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 123
                                                                        }, this),
                                                                        ", ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "inline"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 143
                                                                        }, this),
                                                                        ", or ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "card-overlay"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 167
                                                                        }, this),
                                                                        "."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: "data-hc-inline-target"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "CSS selector for the container when using ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "inline"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 493,
                                                                            columnNumber: 108
                                                                        }, this),
                                                                        " presentation."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 493,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "border p-4 rounded-lg md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "font-mono font-bold text-primary mb-1",
                                                                    children: "data-hc-config-flow"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "A JSON string defining the configuration wizard for ",
                                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                                            children: "configurable"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/pages/Index.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 118
                                                                        }, this),
                                                                        " products."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/pages/Index.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                    className: "text-xl font-semibold border-b pb-2",
                                                    children: "JavaScript API & Bundles"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "You can also control the cart programmatically using the global ",
                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                            children: "window.HyperCart"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 118
                                                        }, this),
                                                        " object. You can add single items or grouped bundles with special pricing."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto text-muted-foreground whitespace-pre",
                                                    children: `// Open the cart drawer
HyperCart.open();

// Add an item programmatically
HyperCart.add({
  id: "201",
  name: "Custom API Item",
  price: 99.00
});

// Add a bundle with special pricing
HyperCart.addGroup([
  { id: "101", name: "Keyboard", price: 149.99, specialPrice: 99.99 },
  { id: "102", name: "Coffee", price: 19.00, specialPrice: 0.00 }
], "starter-bundle");

// Apply a discount code programmatically
HyperCart.applyPromo("SAVE10");

// Set the shipping method programmatically
HyperCart.setShipping("express");

// Get a shareable URL containing the current cart state
const shareUrl = HyperCart.getShareUrl();

// Scan the page for all product configurations
const catalog = HyperCart.scanPage();
console.log("Catalog:", catalog);`
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 502,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                    className: "text-xl font-semibold border-b pb-2",
                                                    children: "Shopping Attendant API"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "The AI Shopping Attendant can be controlled programmatically using the global ",
                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                            children: "window.HyperAttendant"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 132
                                                        }, this),
                                                        " object to create rich conversational experiences."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto text-muted-foreground whitespace-pre",
                                                    children: `// Open or close the attendant chat
HyperAttendant.open();
HyperAttendant.close();

// Send a custom message from the bot with interactive action buttons
HyperAttendant.sendMessage("I noticed you're looking at keyboards!", [
  { label: "Show me", action: () => console.log("Action clicked") }
]);

// Trigger the guided tour
HyperAttendant.tour();

// Highlight any element on the page
HyperAttendant.highlight('#keyboard-specs');

// Suggest specific products in the chat
HyperAttendant.suggestProducts([
  { id: "101", name: "Ergonomic Mechanical Keyboard" }
], "These keyboards match your setup:");

// Open the configuration wizard for a specific product
HyperAttendant.startConfigurator("103");`
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 537,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                    className: "text-xl font-semibold border-b pb-2",
                                                    children: "URL Parameters (Auto-Add & Shared Carts)"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    className: "text-muted-foreground",
                                                    children: [
                                                        "You can automatically add a bundle to the cart when a user visits your site by passing a base64 encoded JSON array to the ",
                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                            children: "hc-bundle"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 176
                                                        }, this),
                                                        " URL parameter. You can also load a completely saved cart state using the ",
                                                        /*#__PURE__*/ _jsxDEV("code", {
                                                            children: "hc-shared-cart"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 272
                                                        }, this),
                                                        " parameter."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto text-muted-foreground",
                                                    children: `// Example Bundle Payload\nconst payload = btoa(JSON.stringify([\n  { id: "101", name: "Keyboard", price: 149.99, specialPrice: 99.99 }\n]));\n\n// Resulting URL:\n// https://your-site.com/?hc-bundle=W3siaWQiOiIxMDEiLCJuYW...\n\n// Resulting Shared Cart URL:\n// https://your-site.com/?hc-shared-cart=W3siaWQiOiIxMDEiLCJuYW...`
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 566,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/pages/Index.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(TabsContent, {
                                value: "editor",
                                className: "space-y-4",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    className: "rounded-lg border bg-card p-6 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            className: "text-lg font-semibold",
                                                            children: "In-Page Configurator"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Edit the JSON below to modify the catalog and configuration flows."
                                                        }, void 0, false, {
                                                            fileName: "/app/src/pages/Index.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Button, {
                                                    onClick: handleApplyJson,
                                                    children: "Apply Changes"
                                                }, void 0, false, {
                                                    fileName: "/app/src/pages/Index.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 578,
                                            columnNumber: 15
                                        }, this),
                                        jsonError && /*#__PURE__*/ _jsxDEV("div", {
                                            className: "bg-destructive/10 text-destructive p-3 rounded-md mb-4 text-sm font-mono",
                                            children: [
                                                "Error: ",
                                                jsonError
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 587,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "h-[500px] border rounded-md overflow-hidden",
                                            children: /*#__PURE__*/ _jsxDEV(Editor, {
                                                height: "100%",
                                                defaultLanguage: "json",
                                                theme: "vs-dark",
                                                value: editorContent,
                                                onChange: (val)=>setEditorContent(val || ""),
                                                options: {
                                                    minimap: {
                                                        enabled: false
                                                    },
                                                    fontSize: 14,
                                                    formatOnPaste: true
                                                }
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 593,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 592,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/pages/Index.tsx",
                                    lineNumber: 577,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 576,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(TabsContent, {
                                value: "source",
                                className: "space-y-4",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    className: "rounded-lg border bg-card p-6 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: /*#__PURE__*/ _jsxDEV("div", {
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        className: "text-lg font-semibold",
                                                        children: "Source Code"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Index.tsx",
                                                        lineNumber: 613,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "View the actual React source code for the Cart Overlay component."
                                                    }, void 0, false, {
                                                        fileName: "/app/src/pages/Index.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 612,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 611,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "h-[600px] border rounded-md overflow-hidden",
                                            children: /*#__PURE__*/ _jsxDEV(Editor, {
                                                height: "100%",
                                                defaultLanguage: "typescript",
                                                theme: "vs-dark",
                                                value: CartOverlayCode,
                                                options: {
                                                    minimap: {
                                                        enabled: true
                                                    },
                                                    fontSize: 14,
                                                    readOnly: true
                                                }
                                            }, void 0, false, {
                                                fileName: "/app/src/pages/Index.tsx",
                                                lineNumber: 619,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/app/src/pages/Index.tsx",
                                            lineNumber: 618,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/pages/Index.tsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/pages/Index.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/pages/Index.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/src/pages/Index.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(ShoppingAttendant, {}, void 0, false, {
                fileName: "/app/src/pages/Index.tsx",
                lineNumber: 635,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/pages/Index.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
};
_s(Index, "FtwY7qOKnxIjN2J/MJasH3Tsrx0=");
_c = Index;
export default Index;
var _c;
$RefreshReg$(_c, "Index");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Index.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Index.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJ0T3ZlcmxheSwgYWRkVG9DYXJ0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9DYXJ0T3ZlcmxheVwiO1xuaW1wb3J0IHsgU2hvcHBpbmdBdHRlbmRhbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Nob3BwaW5nQXR0ZW5kYW50XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgVGFicywgVGFic0NvbnRlbnQsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFic1wiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSBcIkBtb25hY28tZWRpdG9yL3JlYWN0XCI7XG5pbXBvcnQgQ2FydE92ZXJsYXlDb2RlIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FydE92ZXJsYXkudHN4P3Jhd1wiO1xuaW1wb3J0IHsgTWludXMsIFBsdXMsIFRyYXNoMiwgU2V0dGluZ3MyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5cbmNvbnN0IERFRkFVTFRfUFJPRFVDVFMgPSBbXG4gIHtcbiAgICBpZDogMTAxLFxuICAgIG5hbWU6IFwiRXJnb25vbWljIE1lY2hhbmljYWwgS2V5Ym9hcmRcIixcbiAgICBwcmljZTogMTQ5Ljk5LFxuICAgIGltYWdlOiBcImh0dHBzOi8vdmliZS5maWxlc2FmZS5zcGFjZS8xNzgwODQ1ODM3ODUwNDAxMTE1L2Fzc2V0cy82ZTgxMWJmMi1mMDg0LTRiNTYtOGE3OC1lYTcxZDhjN2M5NTcuanBnXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJlbWl1bSB0YWN0aWxlIHN3aXRjaGVzIHdpdGggY3VzdG9taXphYmxlIFJHQiBiYWNrbGlnaHRpbmcuXCIsXG4gICAgdHlwZTogXCJjb25maWd1cmFibGVcIixcbiAgICBjb25maWdGbG93OiBbXG4gICAgICB7IGtleTogXCJzd2l0Y2hlc1wiLCBzdGVwOiBcIlN3aXRjaCBUeXBlXCIsIHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcIkxpbmVhciAoUmVkKVwiLCBcIlRhY3RpbGUgKEJyb3duKVwiLCBcIkNsaWNreSAoQmx1ZSlcIl0gfSxcbiAgICAgIHsga2V5OiBcImtleWNhcHNcIiwgc3RlcDogXCJLZXljYXAgQ29sb3JcIiwgdHlwZTogXCJyYWRpb1wiLCBvcHRpb25zOiBbXCJEYXJrIE1hdHRlclwiLCBcIkFyY3RpYyBXaGl0ZVwiLCBcIlJldHJvIEdyZXlcIl0gfVxuICAgIF0sXG4gICAgcmV2aWV3Q29udGVudDogXCJUaGlzIGtleWJvYXJkIGhhcyBiZWVuIHJhdGVkIDUgc3RhcnMgYnkgb3ZlciAxMCwwMDAgY3VzdG9tZXJzLiBJdCBmZWF0dXJlcyBob3Qtc3dhcHBhYmxlIHN3aXRjaGVzIGFuZCBhIHNvbGlkIGFsdW1pbnVtIGZyYW1lLlwiLFxuICAgIHBhZ2VTZWxlY3RvcjogXCIja2V5Ym9hcmQtc3BlY3NcIlxuICB9LFxuICB7XG4gICAgaWQ6IDEwMixcbiAgICBuYW1lOiBcIkNvZmZlZSBCZWFucyBTdWJzY3JpcHRpb25cIixcbiAgICBwcmljZTogMTkuMDAsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly92aWJlLmZpbGVzYWZlLnNwYWNlLzE3ODA4NDU4Mzc4NTA0MDExMTUvYXNzZXRzLzk0NzVlY2M4LTYyNmItNDVkYS1iYTk3LTY3MDIxNWI1NTkzNS5qcGdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGcmVzaGx5IHJvYXN0ZWQgYXJ0aXNhbmFsIGNvZmZlZSBiZWFucyBkZWxpdmVyZWQgdG8geW91ciBkb29yLlwiLFxuICAgIHR5cGU6IFwic3Vic2NyaXB0aW9uXCIsXG4gICAgaW50ZXJ2YWw6IFwibW9udGhcIixcbiAgICByZXZpZXdDb250ZW50OiBcIk91ciBiZWFucyBhcmUgZXRoaWNhbGx5IHNvdXJjZWQgZnJvbSBzaW5nbGUtb3JpZ2luIGZhcm1zIGluIENvbG9tYmlhIGFuZCBFdGhpb3BpYS5cIixcbiAgICByZXZpZXdVcmw6IFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzFcIlxuICB9LFxuICB7XG4gICAgaWQ6IDEwMyxcbiAgICBuYW1lOiBcIkN1c3RvbSBHYW1pbmcgUENcIixcbiAgICBwcmljZTogOTk5LjAwLFxuICAgIGltYWdlOiBcImh0dHBzOi8vdmliZS5maWxlc2FmZS5zcGFjZS8xNzgwODQ1ODM3ODUwNDAxMTE1L2Fzc2V0cy8yZWQzZjA1YS0xYWJiLTRlYjktYjk3Zi0xYjg4MmU5ZGFjMGEuanBnXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnVpbGQgeW91ciBkcmVhbSBtYWNoaW5lIHdpdGggb3VyIG11bHRpLXN0ZXAgY29uZmlndXJhdG9yLlwiLFxuICAgIHR5cGU6IFwiY29uZmlndXJhYmxlXCIsXG4gICAgY29uZmlnRmxvdzogW1xuICAgICAgeyBrZXk6IFwiY3B1XCIsIHN0ZXA6IFwiUHJvY2Vzc29yXCIsIHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcIkludGVsIENvcmUgaTVcIiwgXCJJbnRlbCBDb3JlIGk3XCIsIFwiSW50ZWwgQ29yZSBpOVwiLCBcIkFNRCBSeXplbiA1XCIsIFwiQU1EIFJ5emVuIDdcIiwgXCJBTUQgUnl6ZW4gOVwiXSB9LFxuICAgICAgeyBrZXk6IFwiZ3B1XCIsIHN0ZXA6IFwiR3JhcGhpY3MgQ2FyZFwiLCB0eXBlOiBcInNlbGVjdFwiLCBvcHRpb25zOiBbXCJSVFggNDA2MFwiLCBcIlJUWCA0MDcwXCIsIFwiUlRYIDQwODBcIiwgXCJSVFggNDA5MFwiLCBcIlJYIDc5MDAgWFRYXCJdIH0sXG4gICAgICB7IGtleTogXCJyYW1cIiwgc3RlcDogXCJNZW1vcnkgKFJBTSlcIiwgdHlwZTogXCJyYWRpb1wiLCBvcHRpb25zOiBbXG4gICAgICAgIHsgbGFiZWw6IFwiMTZHQiBERFI1XCIsIGRlc2NyaXB0aW9uOiBcIkdyZWF0IGZvciBjYXN1YWwgZ2FtaW5nIGFuZCBtdWx0aXRhc2tpbmcuXCIgfSxcbiAgICAgICAgeyBsYWJlbDogXCIzMkdCIEREUjVcIiwgZGVzY3JpcHRpb246IFwiSWRlYWwgZm9yIGhlYXZ5IGdhbWluZyBhbmQgc3RyZWFtaW5nLlwiIH0sXG4gICAgICAgIHsgbGFiZWw6IFwiNjRHQiBERFI1XCIsIGRlc2NyaXB0aW9uOiBcIkZvciBwcm9mZXNzaW9uYWwgd29ya2xvYWRzIGFuZCBleHRyZW1lIG11bHRpdGFza2luZy5cIiB9XG4gICAgICBdfSxcbiAgICAgIHsga2V5OiBcImVuZ3JhdmluZ1wiLCBzdGVwOiBcIkN1c3RvbSBFbmdyYXZpbmdcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVudGVyIG5hbWUgb3IgZ2FtZXIgdGFnLi4uXCIgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiAxMDQsXG4gICAgbmFtZTogXCJEaWdpdGFsIE1hc3RlcmNsYXNzXCIsXG4gICAgcHJpY2U6IDQ5Ljk5LFxuICAgIGltYWdlOiBcImh0dHBzOi8vdmliZS5maWxlc2FmZS5zcGFjZS8xNzgwODQ1ODM3ODUwNDAxMTE1L2Fzc2V0cy8zNjk5ZjFiZi02MjEyLTRjOWEtYjBiNC0xYzMwNWIwZGQxN2IucG5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSW5zdGFudCBhY2Nlc3MgdG8gNDArIGhvdXJzIG9mIHZpZGVvIGNvbnRlbnQgYW5kIHJlc291cmNlcy5cIixcbiAgICB0eXBlOiBcImRpZ2l0YWxcIlxuICB9LFxuICB7XG4gICAgaWQ6IDEwNSxcbiAgICBuYW1lOiBcIkNvbnN1bHRhdGlvbiBDYWxsXCIsXG4gICAgcHJpY2U6IDE1MC4wMCxcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYmUuZmlsZXNhZmUuc3BhY2UvMTc4MDg0NTgzNzg1MDQwMTExNS9hc3NldHMvNmY4NjA3M2ItOWRmNC00NTc3LWI3NGMtZTc0ZWU4NDA3NWM3LnBuZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJvb2sgYSAxLW9uLTEgc3RyYXRlZ3kgc2Vzc2lvbiB3aXRoIG91ciBleHBlcnRzLlwiLFxuICAgIHR5cGU6IFwic2VydmljZVwiLFxuICAgIGNvbmZpZ0Zsb3c6IFtcbiAgICAgIHsga2V5OiBcInRvcGljXCIsIHN0ZXA6IFwiTWFpbiBUb3BpY1wiLCB0eXBlOiBcInNlbGVjdFwiLCBvcHRpb25zOiBbXCJNYXJrZXRpbmcgU3RyYXRlZ3lcIiwgXCJUZWNobmljYWwgUmV2aWV3XCIsIFwiRGVzaWduIEF1ZGl0XCIsIFwiR2VuZXJhbCBBZHZpY2VcIl0gfSxcbiAgICAgIHsga2V5OiBcIm5vdGVzXCIsIHN0ZXA6IFwiUHJlcGFyYXRpb24gTm90ZXNcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIldoYXQgc2hvdWxkIHdlIHByZXBhcmUgZm9yP1wiIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogMTA2LFxuICAgIG5hbWU6IFwiQ3VzdG9tIFN0cmVldHdlYXIgU25lYWtlcnNcIixcbiAgICBwcmljZTogMTg5Ljk5LFxuICAgIGltYWdlOiBcImh0dHBzOi8vdmliZS5maWxlc2FmZS5zcGFjZS8xNzgwODQ1ODM3ODUwNDAxMTE1L2Fzc2V0cy80M2VlMDA2Mi1hYWQ0LTRiN2EtOTMzOC1lZmY2N2E1Njk5MGYuanBnXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzaWduIHlvdXIgb3duIHNpZ25hdHVyZSBraWNrcyB3aXRoIHByZW1pdW0gbWF0ZXJpYWxzLlwiLFxuICAgIHR5cGU6IFwiY29uZmlndXJhYmxlXCIsXG4gICAgY29uZmlnRmxvdzogW1xuICAgICAgeyBrZXk6IFwic2l6ZVwiLCBzdGVwOiBcIlNob2UgU2l6ZVwiLCB0eXBlOiBcInNlbGVjdFwiLCBvcHRpb25zOiBbXCJVUyA3XCIsIFwiVVMgOFwiLCBcIlVTIDlcIiwgXCJVUyAxMFwiLCBcIlVTIDExXCIsIFwiVVMgMTJcIl0gfSxcbiAgICAgIHsga2V5OiBcImNvbG9yXCIsIHN0ZXA6IFwiUHJpbWFyeSBDb2xvclwiLCB0eXBlOiBcImNhcmRzXCIsIG9wdGlvbnM6IFtcbiAgICAgICAgeyBsYWJlbDogXCJNYXR0ZSBCbGFja1wiLCBpbWFnZTogXCJodHRwczovL3ZpYmUuZmlsZXNhZmUuc3BhY2UvMTc4MDg0NTgzNzg1MDQwMTExNS9hc3NldHMvNDNlZTAwNjItYWFkNC00YjdhLTkzMzgtZWZmNjdhNTY5OTBmLmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJTdGVhbHRoeSBhbmQgdmVyc2F0aWxlLlwiIH0sXG4gICAgICAgIHsgbGFiZWw6IFwiQXJjdGljIFdoaXRlXCIsIGltYWdlOiBcImh0dHBzOi8vdmliZS5maWxlc2FmZS5zcGFjZS8xNzgwODQ1ODM3ODUwNDAxMTE1L2Fzc2V0cy82ZTgxMWJmMi1mMDg0LTRiNTYtOGE3OC1lYTcxZDhjN2M5NTcuanBnXCIsIGRlc2NyaXB0aW9uOiBcIkNsZWFuLCBjcmlzcCwgYW5kIGJyaWdodC5cIiB9LFxuICAgICAgICB7IGxhYmVsOiBcIk5lb24gR3JlZW5cIiwgaW1hZ2U6IFwiaHR0cHM6Ly92aWJlLmZpbGVzYWZlLnNwYWNlLzE3ODA4NDU4Mzc4NTA0MDExMTUvYXNzZXRzLzJlZDNmMDVhLTFhYmItNGViOS1iOTdmLTFiODgyZTlkYWMwYS5qcGdcIiwgZGVzY3JpcHRpb246IFwiU3RhbmQgb3V0IGZyb20gdGhlIGNyb3dkLlwiIH0sXG4gICAgICAgIHsgbGFiZWw6IFwiQ3JpbXNvbiBSZWRcIiwgaW1hZ2U6IFwiaHR0cHM6Ly92aWJlLmZpbGVzYWZlLnNwYWNlLzE3ODA4NDU4Mzc4NTA0MDExMTUvYXNzZXRzLzk0NzVlY2M4LTYyNmItNDVkYS1iYTk3LTY3MDIxNWI1NTkzNS5qcGdcIiwgZGVzY3JpcHRpb246IFwiQm9sZCBhbmQgYWdncmVzc2l2ZS5cIiB9XG4gICAgICBdIH0sXG4gICAgICB7IGtleTogXCJsYWNlc1wiLCBzdGVwOiBcIkxhY2UgU3R5bGVcIiwgdHlwZTogXCJyYWRpb1wiLCBvcHRpb25zOiBbXCJTdGFuZGFyZFwiLCBcIlJlZmxlY3RpdmVcIiwgXCJFbGFzdGljXCJdIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogMTA3LFxuICAgIG5hbWU6IFwiV2Vla2x5IE1lYWwgUHJlcCBQbGFuXCIsXG4gICAgcHJpY2U6IDg5Ljk5LFxuICAgIGltYWdlOiBcImh0dHBzOi8vdmliZS5maWxlc2FmZS5zcGFjZS8xNzgwODQ1ODM3ODUwNDAxMTE1L2Fzc2V0cy83NWRmYjQ0ZC04NDNmLTQ5ZGEtYTFmOC0zOTk0YzQwYjI5MTEuanBnXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hlZi1wcmVwYXJlZCBoZWFsdGh5IG1lYWxzIGRlbGl2ZXJlZCB3ZWVrbHkuXCIsXG4gICAgdHlwZTogXCJjb25maWd1cmFibGVcIixcbiAgICBpbnRlcnZhbDogXCJ3ZWVrXCIsXG4gICAgY29uZmlnRmxvdzogW1xuICAgICAgeyBrZXk6IFwiZGlldFwiLCBzdGVwOiBcIkRpZXRhcnkgUHJlZmVyZW5jZVwiLCB0eXBlOiBcInNlbGVjdFwiLCBvcHRpb25zOiBbXCJLZXRvXCIsIFwiVmVnYW5cIiwgXCJQYWxlb1wiLCBcIkJhbGFuY2VkXCJdIH0sXG4gICAgICB7IGtleTogXCJtZWFsc1wiLCBzdGVwOiBcIk1lYWxzIHBlciBXZWVrXCIsIHR5cGU6IFwicmFkaW9cIiwgb3B0aW9uczogW1wiNSBNZWFsc1wiLCBcIjEwIE1lYWxzXCIsIFwiMTQgTWVhbHNcIiwgXCIyMSBNZWFsc1wiXSB9LFxuICAgICAgeyBrZXk6IFwiYWxsZXJnaWVzXCIsIHN0ZXA6IFwiQWxsZXJnaWVzIC8gRXhjbHVzaW9uc1wiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiZS5nLiwgTm8gbnV0cywgbm8gZGFpcnkuLi5cIiB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6IDEwOCxcbiAgICBuYW1lOiBcIkVudGVycHJpc2UgQ2xvdWQgV29ya3NwYWNlXCIsXG4gICAgcHJpY2U6IDQ5OS4wMCxcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYmUuZmlsZXNhZmUuc3BhY2UvMTc4MDg0NTgzNzg1MDQwMTExNS9hc3NldHMvMGNjNzdmNmEtN2QyNi00NDFiLTlhYWEtMmFmN2M3ZDQwOGJmLmpwZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNjYWxhYmxlIGNsb3VkIGluZnJhc3RydWN0dXJlIGZvciB5b3VyIGdyb3dpbmcgdGVhbS5cIixcbiAgICB0eXBlOiBcImNvbmZpZ3VyYWJsZVwiLFxuICAgIGludGVydmFsOiBcIm1vbnRoXCIsXG4gICAgY29uZmlnRmxvdzogW1xuICAgICAgeyBrZXk6IFwidGllclwiLCBzdGVwOiBcIlNlcnZpY2UgVGllclwiLCB0eXBlOiBcInJhZGlvXCIsIG9wdGlvbnM6IFtcIkJ1c2luZXNzXCIsIFwiRW50ZXJwcmlzZVwiLCBcIkRlZGljYXRlZFwiXSB9LFxuICAgICAgeyBrZXk6IFwic2VhdHNcIiwgc3RlcDogXCJOdW1iZXIgb2YgU2VhdHNcIiwgdHlwZTogXCJzZWxlY3RcIiwgb3B0aW9uczogW1wiMTAtNTBcIiwgXCI1MS0yMDBcIiwgXCIyMDEtNTAwXCIsIFwiNTAwK1wiXSB9LFxuICAgICAgeyBrZXk6IFwiYWRkb25zXCIsIHN0ZXA6IFwiUHJlbWl1bSBBZGQtb25zXCIsIHR5cGU6IFwicmFkaW9cIiwgb3B0aW9uczogW1wiTm9uZVwiLCBcIkFkdmFuY2VkIEFuYWx5dGljc1wiLCBcIjI0LzcgUHJpb3JpdHkgU3VwcG9ydFwiLCBcIkJvdGhcIl0gfSxcbiAgICAgIHsga2V5OiBcImRvbWFpblwiLCBzdGVwOiBcIkN1c3RvbSBEb21haW5cIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIndvcmtzcGFjZS55b3VyY29tcGFueS5jb21cIiB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6IDEwOSxcbiAgICBuYW1lOiBcIlByZXNjcmlwdGlvbiBHbGFzc2VzXCIsXG4gICAgcHJpY2U6IDEyOS4wMCxcbiAgICBpbWFnZTogXCJodHRwczovL3ZpYmUuZmlsZXNhZmUuc3BhY2UvMTc4MDg0NTgzNzg1MDQwMTExNS9hc3NldHMvMGNjNzdmNmEtN2QyNi00NDFiLTlhYWEtMmFmN2M3ZDQwOGJmLmpwZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlN0eWxpc2ggZnJhbWVzIHdpdGggY3VzdG9tIHByZXNjcmlwdGlvbiBsZW5zZXMuXCIsXG4gICAgdHlwZTogXCJjb25maWd1cmFibGVcIixcbiAgICBjb25maWdGbG93OiBbXG4gICAgICB7IGtleTogXCJmcmFtZV9jb2xvclwiLCBzdGVwOiBcIkZyYW1lIENvbG9yXCIsIHR5cGU6IFwicmFkaW9cIiwgb3B0aW9uczogW1wiVG9ydG9pc2VcIiwgXCJNYXR0ZSBCbGFja1wiLCBcIkNsZWFyXCJdIH0sXG4gICAgICB7IFxuICAgICAgICBrZXk6IFwicHJlc2NyaXB0aW9uX3ZlcmlmaWNhdGlvblwiLCBcbiAgICAgICAgc3RlcDogXCJWZXJpZnkgUHJlc2NyaXB0aW9uXCIsIFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXZSBuZWVkIHRvIHZlcmlmeSB5b3VyIHByZXNjcmlwdGlvbiB3aXRoIHlvdXIgZG9jdG9yLiAoVHlwZSAnZXJyb3InIHRvIHNpbXVsYXRlIGZhaWx1cmUpXCIsXG4gICAgICAgIHR5cGU6IFwiYXBpXCIsIFxuICAgICAgICBlbmRwb2ludDogXCIvYXBpL3ZlcmlmeS1wcmVzY3JpcHRpb25cIiwgXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiBcIlByZXNjcmlwdGlvbiB2ZXJpZmllZCBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgIHsga2V5OiBcImRvY3Rvcl9uYW1lXCIsIGxhYmVsOiBcIkRvY3RvcidzIE5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkRyLiBTbWl0aFwiIH0sXG4gICAgICAgICAgeyBrZXk6IFwicnhfbnVtYmVyXCIsIGxhYmVsOiBcIlJYIE51bWJlclwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiUlgtMTIzNDVcIiB9XG4gICAgICAgIF0gXG4gICAgICB9LFxuICAgICAgeyBrZXk6IFwibGVuc190eXBlXCIsIHN0ZXA6IFwiTGVucyBUeXBlXCIsIHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcIlN0YW5kYXJkXCIsIFwiQmx1ZSBMaWdodCBCbG9ja2luZ1wiLCBcIlRyYW5zaXRpb25cIl0gfVxuICAgIF1cbiAgfVxuXTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoREVGQVVMVF9QUk9EVUNUUyk7XG4gIGNvbnN0IFtlZGl0b3JDb250ZW50LCBzZXRFZGl0b3JDb250ZW50XSA9IHVzZVN0YXRlKEpTT04uc3RyaW5naWZ5KERFRkFVTFRfUFJPRFVDVFMsIG51bGwsIDIpKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKFwiY2F0YWxvZ1wiKTtcbiAgY29uc3QgW2pzb25FcnJvciwgc2V0SnNvbkVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNhcnRVcGRhdGVkID0gKGU6IGFueSkgPT4gc2V0Q2FydEl0ZW1zKGUuZGV0YWlsKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2FydC11cGRhdGVkJywgaGFuZGxlQ2FydFVwZGF0ZWQpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FydC11cGRhdGVkJywgaGFuZGxlQ2FydFVwZGF0ZWQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQXBwbHlKc29uID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGVkaXRvckNvbnRlbnQpO1xuICAgICAgc2V0UHJvZHVjdHMocGFyc2VkKTtcbiAgICAgIHNldEpzb25FcnJvcihcIlwiKTtcbiAgICAgIHNldEFjdGl2ZVRhYihcImNhdGFsb2dcIik7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBzZXRKc29uRXJyb3IoZS5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmFja2dyb3VuZCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJvcmRlci1iIHB4LTYgcHktNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3RpY2t5IHRvcC0wIGJnLWJhY2tncm91bmQvODAgYmFja2Ryb3AtYmx1ci1tZCB6LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOCB3LTggYmctcHJpbWFyeSByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBmb250LWJvbGRcIj5IPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodFwiPiZsdDtoeXBlci1jYXJ0LyZndDs8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIvZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBob3Zlcjp1bmRlcmxpbmUgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+U2hvcCBEYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIi9kb3dubG9hZFwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gaG92ZXI6dW5kZXJsaW5lIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkV4cG9ydCBQcm9qZWN0PC9hPlxuICAgICAgICAgIDxDYXJ0T3ZlcmxheSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgbWF4LXctNnhsIG14LWF1dG8gcHgtNiBweS0xNiB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMCBtYXgtdy0yeGwgbXgtYXV0byBzcGFjZS15LTRcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgbGc6dGV4dC01eGxcIj5cbiAgICAgICAgICAgIE5leHQtR2VuIENvbW1lcmNlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgRXhwZXJpZW5jZSBvdXIgc2VhbWxlc3MgU25pcGNhcnQtc3R5bGUgb3ZlcmxheS4gQWRkIGl0ZW1zIHRvIHlvdXIgY2FydCwgY2hlY2tvdXQsIG9yIGNoYXQgd2l0aCBzdXBwb3J0IHdpdGhvdXQgbGVhdmluZyB0aGUgcGFnZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBpZD1cImtleWJvYXJkLXNwZWNzXCIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPktleWJvYXJkIFNwZWNpZmljYXRpb25zPC9oND5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgcGwtNSB0ZXh0LWxlZnQgdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgPGxpPlN3aXRjaCBUeXBlOiBDaGVycnkgTVggUmVkIChMaW5lYXIpPC9saT5cbiAgICAgICAgICAgICAgPGxpPktleWNhcHM6IERvdWJsZS1zaG90IFBCVDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Qb2xsaW5nIFJhdGU6IDEwMDBIejwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Db25uZWN0aW9uOiBVU0ItQyBEZXRhY2hhYmxlPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxUYWJzIHZhbHVlPXthY3RpdmVUYWJ9IG9uVmFsdWVDaGFuZ2U9e3NldEFjdGl2ZVRhYn0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLThcIj5cbiAgICAgICAgICAgIDxUYWJzTGlzdCBjbGFzc05hbWU9XCJncmlkIHctZnVsbCBtYXgtdy0zeGwgZ3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICAgICAgPFRhYnNUcmlnZ2VyIHZhbHVlPVwiY2F0YWxvZ1wiPlByb2R1Y3QgQ2F0YWxvZzwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT1cImRvY3VtZW50YXRpb25cIj5Eb2N1bWVudGF0aW9uPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgICAgPFRhYnNUcmlnZ2VyIHZhbHVlPVwiZWRpdG9yXCI+SlNPTiBDb25maWd1cmF0b3I8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJzb3VyY2VcIj5Tb3VyY2UgQ29kZTwvVGFic1RyaWdnZXI+XG4gICAgICAgICAgICA8L1RhYnNMaXN0PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwiY2F0YWxvZ1wiIGNsYXNzTmFtZT1cInNwYWNlLXktMTJcIj5cbiAgICAgICAgICAgIHsvKiBHcm91cCBwcm9kdWN0cyBieSB0eXBlICovfVxuICAgICAgICAgICAge1snc3RhbmRhcmQnLCAnc3Vic2NyaXB0aW9uJywgJ2NvbmZpZ3VyYWJsZScsICdkaWdpdGFsJywgJ3NlcnZpY2UnXS5tYXAodHlwZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGVQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcihwID0+IHAudHlwZSA9PT0gdHlwZSk7XG4gICAgICAgICAgICAgIGlmICh0eXBlUHJvZHVjdHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3R5cGV9IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXItYiBwYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgY2FwaXRhbGl6ZVwiPnt0eXBlfSBQcm9kdWN0czwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e3R5cGVQcm9kdWN0cy5sZW5ndGh9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0eXBlUHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGlkPXtgcHJvZHVjdC1jYXJkLSR7cHJvZHVjdC5pZH1gfSBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLXhsIGJvcmRlciBiZy1jYXJkIHRleHQtY2FyZC1mb3JlZ3JvdW5kIHNoYWRvdy1zbSBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3ctbWQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LXNxdWFyZSBiZy1tdXRlZCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2UgfHwgXCJodHRwczovL3ZpYmUuZmlsZXNhZmUuc3BhY2UvMTc4MDg0NTgzNzg1MDQwMTExNS9hc3NldHMvNmU4MTFiZjItZjA4NC00YjU2LThhNzgtZWE3MWQ4YzdjOTU3LmpwZ1wifSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGwgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnR5cGUgPT09ICdjb25maWd1cmFibGUnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LzkwIGhvdmVyOmJnLXByaW1hcnlcIj5Db25maWd1cmFibGU8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4LTEgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IGdhcC00IG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGxlYWRpbmctdGlnaHRcIj57cHJvZHVjdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHdoaXRlc3BhY2Utbm93cmFwXCI+JHtwcm9kdWN0LnByaWNlLnRvRml4ZWQoMil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNiBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0l0ZW1zID0gY2FydEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT0gcHJvZHVjdC5pZCAmJiAhaXRlbS5ncm91cElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXhpc3RpbmdJdGVtcy5tYXAoKGNhcnRJdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXJ0SXRlbS5jYXJ0SXRlbUlkIHx8IGlkeH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiBib3JkZXIgcC0yIHJvdW5kZWQtbWQgYmctbXV0ZWQvMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHRydW5jYXRlIGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudHlwZSA9PT0gJ2NvbmZpZ3VyYWJsZScgPyAoY2FydEl0ZW0uY29uZmlndXJhdGlvbiA/ICdDb25maWd1cmVkIEl0ZW0nIDogJ1VuY29uZmlndXJlZCBJdGVtJykgOiAnSW4gQ2FydCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWJhY2tncm91bmQgcm91bmRlZC1tZCBib3JkZXIgcC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cImljb25cIiBjbGFzc05hbWU9XCJoLTYgdy02IHJvdW5kZWQtc21cIiBvbkNsaWNrPXsoKSA9PiAod2luZG93IGFzIGFueSkuSHlwZXJDYXJ0Py51cGRhdGVRdWFudGl0eShjYXJ0SXRlbS5jYXJ0SXRlbUlkIHx8IGNhcnRJdGVtLmlkLCAtMSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWludXMgY2xhc3NOYW1lPVwiaC0zIHctM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdy02IHRleHQtY2VudGVyXCI+e2NhcnRJdGVtLnF1YW50aXR5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cImljb25cIiBjbGFzc05hbWU9XCJoLTYgdy02IHJvdW5kZWQtc21cIiBvbkNsaWNrPXsoKSA9PiAod2luZG93IGFzIGFueSkuSHlwZXJDYXJ0Py51cGRhdGVRdWFudGl0eShjYXJ0SXRlbS5jYXJ0SXRlbUlkIHx8IGNhcnRJdGVtLmlkLCAxKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzIGNsYXNzTmFtZT1cImgtMyB3LTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC50eXBlID09PSAnY29uZmlndXJhYmxlJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXhzIGgtN1wiIG9uQ2xpY2s9eygpID0+ICh3aW5kb3cgYXMgYW55KS5IeXBlckNhcnQ/LmNvbmZpZ3VyZUl0ZW0oY2FydEl0ZW0uY2FydEl0ZW1JZCB8fCBjYXJ0SXRlbS5pZCwgeyBwcmVzZW50YXRpb246IHByb2R1Y3QuaWQgPT09IDEwMyB8fCBwcm9kdWN0LmlkID09PSAxMDEgPyBcImNhcmQtb3ZlcmxheVwiIDogXCJzaGVldFwiLCBpbmxpbmVUYXJnZXQ6IGAjcHJvZHVjdC1jYXJkLSR7cHJvZHVjdC5pZH1gIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nczIgY2xhc3NOYW1lPVwiaC0zIHctMyBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbS5jb25maWd1cmF0aW9uID8gJ0VkaXQgT3B0aW9ucycgOiAnQ29uZmlndXJlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnR5cGUgPT09ICdjb25maWd1cmFibGUnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaHlwZXItYWRkLXRvLWNhcnQgbXQtMVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLWlkPXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLW5hbWU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1wcmljZT17cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1pbWFnZT17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy10eXBlPXtwcm9kdWN0LnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtaW50ZXJ2YWw9e3Byb2R1Y3QuaW50ZXJ2YWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtY29uZmlnLWZsb3c9e3Byb2R1Y3QuY29uZmlnRmxvdyA/IEpTT04uc3RyaW5naWZ5KHByb2R1Y3QuY29uZmlnRmxvdykgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtcmV2aWV3LWNvbnRlbnQ9e3Byb2R1Y3QucmV2aWV3Q29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1yZXZpZXctdXJsPXtwcm9kdWN0LnJldmlld1VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1wYWdlLXNlbGVjdG9yPXtwcm9kdWN0LnBhZ2VTZWxlY3Rvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1wcmVzZW50YXRpb249e3Byb2R1Y3QuaWQgPT09IDEwMyB8fCBwcm9kdWN0LmlkID09PSAxMDEgPyBcImNhcmQtb3ZlcmxheVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLWlubGluZS10YXJnZXQ9e3Byb2R1Y3QuaWQgPT09IDEwMyB8fCBwcm9kdWN0LmlkID09PSAxMDEgPyBgI3Byb2R1Y3QtY2FyZC0ke3Byb2R1Y3QuaWR9YCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwiaC00IHctNCBtci0xXCIgLz4gQWRkIEFub3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoeXBlci1hZGQtdG8tY2FydFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLWlkPXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLW5hbWU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1wcmljZT17cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1pbWFnZT17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy10eXBlPXtwcm9kdWN0LnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtaW50ZXJ2YWw9e3Byb2R1Y3QuaW50ZXJ2YWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtY29uZmlnLWZsb3c9e3Byb2R1Y3QuY29uZmlnRmxvdyA/IEpTT04uc3RyaW5naWZ5KHByb2R1Y3QuY29uZmlnRmxvdykgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtcmV2aWV3LWNvbnRlbnQ9e3Byb2R1Y3QucmV2aWV3Q29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1yZXZpZXctdXJsPXtwcm9kdWN0LnJldmlld1VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1wYWdlLXNlbGVjdG9yPXtwcm9kdWN0LnBhZ2VTZWxlY3Rvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1wcmVzZW50YXRpb249e3Byb2R1Y3QuaWQgPT09IDEwMyB8fCBwcm9kdWN0LmlkID09PSAxMDEgPyBcImNhcmQtb3ZlcmxheVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLWlubGluZS10YXJnZXQ9e3Byb2R1Y3QuaWQgPT09IDEwMyB8fCBwcm9kdWN0LmlkID09PSAxMDEgPyBgI3Byb2R1Y3QtY2FyZC0ke3Byb2R1Y3QuaWR9YCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIENhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBwdC04IGJvcmRlci10XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyLWIgcGItMlwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5TcGVjaWFsIEJ1bmRsZXMgJiBBdXRvLUFkZDwvaDM+XG4gICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5BUEkgRGVtb3M8L0JhZGdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBiZy1jYXJkIHAtNiBzaGFkb3ctc20gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+U3RhcnRlciBCdW5kbGUgKEpTIEFQSSk8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNiBmbGV4LTFcIj5BZGQgYSBLZXlib2FyZCBhbmQgQ29mZmVlIFN1YnNjcmlwdGlvbiB0b2dldGhlciBhcyBhIGxpbmtlZCBncm91cCB3aXRoIHNwZWNpYWwgZGlzY291bnRlZCBwcmljaW5nLjwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1bmRsZUl0ZW1zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5ERUZBVUxUX1BST0RVQ1RTWzBdLCBzcGVjaWFsUHJpY2U6IDk5Ljk5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IC4uLkRFRkFVTFRfUFJPRFVDVFNbMV0sIHNwZWNpYWxQcmljZTogMC4wMCB9XG4gICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAod2luZG93IGFzIGFueSkuSHlwZXJDYXJ0LmFkZEdyb3VwKGJ1bmRsZUl0ZW1zLCAnc3RhcnRlci1idW5kbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWRkIFN0YXJ0ZXIgQnVuZGxlXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJnLWNhcmQgcC02IHNoYWRvdy1zbSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj5VUkwgQXV0by1BZGQgRGVtbzwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi02IGZsZXgtMVwiPlJlbG9hZHMgdGhlIHBhZ2Ugd2l0aCBhIFVSTCBwYXJhbWV0ZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGFkZHMgYSBidW5kbGUgdG8gdGhlIGNhcnQgb24gbG9hZC48L3A+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1bmRsZUl0ZW1zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5ERUZBVUxUX1BST0RVQ1RTWzRdLCBzcGVjaWFsUHJpY2U6IDk5LjAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IC4uLkRFRkFVTFRfUFJPRFVDVFNbM10sIHNwZWNpYWxQcmljZTogMTkuOTkgfVxuICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoYnVuZGxlSXRlbXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGA/aGMtYnVuZGxlPSR7cGF5bG9hZH1gO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBUZXN0IFVSTCBBdXRvLUFkZFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBiZy1jYXJkIHAtNiBzaGFkb3ctc20gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+TW9kYWwgUHJlc2VudGF0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1iLTYgZmxleC0xXCI+T3BlbiB0aGUgY2FydCBpbiBhIGNlbnRlcmVkIG1vZGFsIGRpYWxvZyBpbnN0ZWFkIG9mIGEgc2xpZGUtb3V0IHNoZWV0LjwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoeXBlci1hZGQtdG8tY2FydFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtaWQ9XCIxMTBcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLW5hbWU9XCJNb2RhbCBEZW1vIEl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLXByaWNlPVwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtcHJlc2VudGF0aW9uPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgJiBPcGVuIE1vZGFsXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYmctY2FyZCBwLTYgc2hhZG93LXNtIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPklubGluZSBJbmplY3Rpb248L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNiBmbGV4LTFcIj5JbmplY3QgdGhlIGNhcnQgVUkgZGlyZWN0bHkgaW50byBhIGNvbnRhaW5lciBvbiB0aGUgcGFnZS48L3A+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaHlwZXItYWRkLXRvLWNhcnRcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLWlkPVwiMTExXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1uYW1lPVwiSW5saW5lIERlbW8gSXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtcHJpY2U9XCIwLjAwXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1wcmVzZW50YXRpb249XCJpbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLWlubGluZS10YXJnZXQ9XCIjaW5saW5lLWNhcnQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWRkICYgSW5qZWN0IElubGluZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJnLWNhcmQgcC02IHNoYWRvdy1zbSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj5DYXJkIE92ZXJsYXk8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNiBmbGV4LTFcIj5Qcm9qZWN0IHRoZSBjb25maWd1cmF0aW9uIGZsb3cgZGlyZWN0bHkgb3ZlciB0aGUgcHJvZHVjdCBjYXJkLiAoQWxzbyBhY3RpdmUgb24gdGhlIEN1c3RvbSBHYW1pbmcgUEMgYWJvdmUpLjwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoeXBlci1hZGQtdG8tY2FydFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtaWQ9XCIxMDNcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWhjLW5hbWU9XCJDdXN0b20gR2FtaW5nIFBDXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1wcmljZT1cIjk5OS4wMFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtdHlwZT1cImNvbmZpZ3VyYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtY29uZmlnLWZsb3c9e0pTT04uc3RyaW5naWZ5KERFRkFVTFRfUFJPRFVDVFNbMl0uY29uZmlnRmxvdyl9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaGMtcHJlc2VudGF0aW9uPVwiY2FyZC1vdmVybGF5XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1oYy1pbmxpbmUtdGFyZ2V0PVwiI2RlbW8tY2FyZC1vdmVybGF5LXRhcmdldFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3VyZSBJbi1QbGFjZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImRlbW8tY2FyZC1vdmVybGF5LXRhcmdldFwiIGNsYXNzTmFtZT1cIm10LTggcm91bmRlZC14bCByZWxhdGl2ZSBib3JkZXIgYmctbXV0ZWQvMzAgcC04IHRleHQtY2VudGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgIFRoaXMgY29udGFpbmVyIHdpbGwgYmUgb3ZlcmxhaWQgYnkgdGhlIGNvbmZpZ3VyYXRpb24gZmxvdyB3aGVuIHlvdSBjbGljayB0aGUgXCJDb25maWd1cmUgSW4tUGxhY2VcIiBidXR0b24gYWJvdmUuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5saW5lLWNhcnQtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwibXQtOFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9UYWJzQ29udGVudD5cblxuICAgICAgICAgIDxUYWJzQ29udGVudCB2YWx1ZT1cImRvY3VtZW50YXRpb25cIiBjbGFzc05hbWU9XCJzcGFjZS15LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYmctY2FyZCBwLTYgbWQ6cC0xMCBzaGFkb3ctc20gc3BhY2UteS04XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+SHlwZXJDYXJ0IEludGVncmF0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgSHlwZXJDYXJ0IGlzIGEgZHJvcC1pbiBzaG9wcGluZyBjYXJ0IG92ZXJsYXkgdGhhdCB3b3JrcyBvbiBhbnkgd2Vic2l0ZS4gU2ltcGx5IGluY2x1ZGUgb3VyIHNtYWxsIGxvYWRlciBzY3JpcHQgYW5kIGFkZCBzcGVjaWFsIDxjb2RlPmRhdGEtaGMtKjwvY29kZT4gYXR0cmlidXRlcyB0byB5b3VyIGV4aXN0aW5nIGJ1dHRvbnMuIFRoZSBsb2FkZXIgd2lsbCBsYXp5LWxvYWQgdGhlIGNhcnQgcGx1Z2lucyBvbmx5IHdoZW4gbmVlZGVkIVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW11dGVkIHAtNCByb3VuZGVkLW1kIGZvbnQtbW9ubyB0ZXh0LXNtIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAge2A8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmh5cGVyY2FydC5jb20vdjEvaHlwZXItY2FydC1sb2FkZXIuanNcIiBhc3luYz48L3NjcmlwdD5cbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uaHlwZXJjYXJ0LmNvbS92MS9oeXBlci1hdHRlbmRhbnQtbG9hZGVyLmpzXCIgYXN5bmM+PC9zY3JpcHQ+YH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIGJvcmRlci1iIHBiLTJcIj5CYXNpYyBVc2FnZTwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+VHVybiBhbnkgYnV0dG9uIG9yIGxpbmsgaW50byBhbiBcIkFkZCB0byBDYXJ0XCIgYnV0dG9uIGJ5IGFkZGluZyB0aGVzZSBhdHRyaWJ1dGVzOjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW11dGVkIHAtNCByb3VuZGVkLW1kIGZvbnQtbW9ubyB0ZXh0LXNtIG92ZXJmbG93LXgtYXV0byB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgIHtgPGJ1dHRvbiBjbGFzcz1cImh5cGVyLWFkZC10by1jYXJ0XCJcXG4gIGRhdGEtaGMtaWQ9XCIxMDFcIlxcbiAgZGF0YS1oYy1uYW1lPVwiTWVjaGFuaWNhbCBLZXlib2FyZFwiXFxuICBkYXRhLWhjLXByaWNlPVwiMTQ5Ljk5XCJcXG4gIGRhdGEtaGMtaW1hZ2U9XCIvYXNzZXRzL2tleWJvYXJkLmpwZ1wiPlxcbiAgQWRkIHRvIENhcnRcXG48L2J1dHRvbj5gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYm9yZGVyLWIgcGItMlwiPkF0dHJpYnV0ZSBSZWZlcmVuY2U8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgbWItMVwiPmRhdGEtaGMtaWQgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWRlc3RydWN0aXZlIG1sLTJcIj4qUmVxdWlyZWQ8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgcHJvZHVjdC48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1wcmltYXJ5IG1iLTFcIj5kYXRhLWhjLW5hbWUgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWRlc3RydWN0aXZlIG1sLTJcIj4qUmVxdWlyZWQ8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHByb2R1Y3QuPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtcHJpbWFyeSBtYi0xXCI+ZGF0YS1oYy1wcmljZSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZGVzdHJ1Y3RpdmUgbWwtMlwiPipSZXF1aXJlZDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+VGhlIG51bWVyaWMgcHJpY2Ugb2YgdGhlIHByb2R1Y3QgKGUuZy4gMTkuOTkpLjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgbWItMVwiPmRhdGEtaGMtaW1hZ2U8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+VVJMIHRvIHRoZSBwcm9kdWN0IHRodW1ibmFpbCBpbWFnZS48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1wcmltYXJ5IG1iLTFcIj5kYXRhLWhjLXR5cGU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+VHlwZSBvZiBwcm9kdWN0OiA8Y29kZT5zdGFuZGFyZDwvY29kZT4sIDxjb2RlPnN1YnNjcmlwdGlvbjwvY29kZT4sIDxjb2RlPmNvbmZpZ3VyYWJsZTwvY29kZT4sIDxjb2RlPmRpZ2l0YWw8L2NvZGU+LCA8Y29kZT5zZXJ2aWNlPC9jb2RlPi48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1wcmltYXJ5IG1iLTFcIj5kYXRhLWhjLWludGVydmFsPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkZvciBzdWJzY3JpcHRpb25zLiBlLmcuIDxjb2RlPm1vbnRoPC9jb2RlPiwgPGNvZGU+eWVhcjwvY29kZT4uPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtcHJpbWFyeSBtYi0xXCI+ZGF0YS1oYy1yZXZpZXctY29udGVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5TdGF0aWMgdGV4dCB0byBzaG93IGluIHRoZSBPdmVydmlldyB0YWIuPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtcHJpbWFyeSBtYi0xXCI+ZGF0YS1oYy1yZXZpZXctdXJsPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlVSTCB0byBmZXRjaCBkeW5hbWljIEpTT04gZGF0YSBmb3IgdGhlIE92ZXJ2aWV3IHRhYi48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1wcmltYXJ5IG1iLTFcIj5kYXRhLWhjLXByZXNlbnRhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5Ib3cgdGhlIGNhcnQgaXMgZGlzcGxheWVkOiA8Y29kZT5zaGVldDwvY29kZT4gKGRlZmF1bHQpLCA8Y29kZT5tb2RhbDwvY29kZT4sIDxjb2RlPmlubGluZTwvY29kZT4sIG9yIDxjb2RlPmNhcmQtb3ZlcmxheTwvY29kZT4uPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtcHJpbWFyeSBtYi0xXCI+ZGF0YS1oYy1pbmxpbmUtdGFyZ2V0PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkNTUyBzZWxlY3RvciBmb3IgdGhlIGNvbnRhaW5lciB3aGVuIHVzaW5nIDxjb2RlPmlubGluZTwvY29kZT4gcHJlc2VudGF0aW9uLjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC00IHJvdW5kZWQtbGcgbWQ6Y29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtcHJpbWFyeSBtYi0xXCI+ZGF0YS1oYy1jb25maWctZmxvdzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5BIEpTT04gc3RyaW5nIGRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIHdpemFyZCBmb3IgPGNvZGU+Y29uZmlndXJhYmxlPC9jb2RlPiBwcm9kdWN0cy48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYm9yZGVyLWIgcGItMlwiPkphdmFTY3JpcHQgQVBJICYgQnVuZGxlczwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+WW91IGNhbiBhbHNvIGNvbnRyb2wgdGhlIGNhcnQgcHJvZ3JhbW1hdGljYWxseSB1c2luZyB0aGUgZ2xvYmFsIDxjb2RlPndpbmRvdy5IeXBlckNhcnQ8L2NvZGU+IG9iamVjdC4gWW91IGNhbiBhZGQgc2luZ2xlIGl0ZW1zIG9yIGdyb3VwZWQgYnVuZGxlcyB3aXRoIHNwZWNpYWwgcHJpY2luZy48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1tdXRlZCBwLTQgcm91bmRlZC1tZCBmb250LW1vbm8gdGV4dC1zbSBvdmVyZmxvdy14LWF1dG8gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHdoaXRlc3BhY2UtcHJlXCI+XG4gICAgICAgICAgICAgICAgICB7YC8vIE9wZW4gdGhlIGNhcnQgZHJhd2VyXG5IeXBlckNhcnQub3BlbigpO1xuXG4vLyBBZGQgYW4gaXRlbSBwcm9ncmFtbWF0aWNhbGx5XG5IeXBlckNhcnQuYWRkKHtcbiAgaWQ6IFwiMjAxXCIsXG4gIG5hbWU6IFwiQ3VzdG9tIEFQSSBJdGVtXCIsXG4gIHByaWNlOiA5OS4wMFxufSk7XG5cbi8vIEFkZCBhIGJ1bmRsZSB3aXRoIHNwZWNpYWwgcHJpY2luZ1xuSHlwZXJDYXJ0LmFkZEdyb3VwKFtcbiAgeyBpZDogXCIxMDFcIiwgbmFtZTogXCJLZXlib2FyZFwiLCBwcmljZTogMTQ5Ljk5LCBzcGVjaWFsUHJpY2U6IDk5Ljk5IH0sXG4gIHsgaWQ6IFwiMTAyXCIsIG5hbWU6IFwiQ29mZmVlXCIsIHByaWNlOiAxOS4wMCwgc3BlY2lhbFByaWNlOiAwLjAwIH1cbl0sIFwic3RhcnRlci1idW5kbGVcIik7XG5cbi8vIEFwcGx5IGEgZGlzY291bnQgY29kZSBwcm9ncmFtbWF0aWNhbGx5XG5IeXBlckNhcnQuYXBwbHlQcm9tbyhcIlNBVkUxMFwiKTtcblxuLy8gU2V0IHRoZSBzaGlwcGluZyBtZXRob2QgcHJvZ3JhbW1hdGljYWxseVxuSHlwZXJDYXJ0LnNldFNoaXBwaW5nKFwiZXhwcmVzc1wiKTtcblxuLy8gR2V0IGEgc2hhcmVhYmxlIFVSTCBjb250YWluaW5nIHRoZSBjdXJyZW50IGNhcnQgc3RhdGVcbmNvbnN0IHNoYXJlVXJsID0gSHlwZXJDYXJ0LmdldFNoYXJlVXJsKCk7XG5cbi8vIFNjYW4gdGhlIHBhZ2UgZm9yIGFsbCBwcm9kdWN0IGNvbmZpZ3VyYXRpb25zXG5jb25zdCBjYXRhbG9nID0gSHlwZXJDYXJ0LnNjYW5QYWdlKCk7XG5jb25zb2xlLmxvZyhcIkNhdGFsb2c6XCIsIGNhdGFsb2cpO2B9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBib3JkZXItYiBwYi0yXCI+U2hvcHBpbmcgQXR0ZW5kYW50IEFQSTwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+VGhlIEFJIFNob3BwaW5nIEF0dGVuZGFudCBjYW4gYmUgY29udHJvbGxlZCBwcm9ncmFtbWF0aWNhbGx5IHVzaW5nIHRoZSBnbG9iYWwgPGNvZGU+d2luZG93Lkh5cGVyQXR0ZW5kYW50PC9jb2RlPiBvYmplY3QgdG8gY3JlYXRlIHJpY2ggY29udmVyc2F0aW9uYWwgZXhwZXJpZW5jZXMuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbXV0ZWQgcC00IHJvdW5kZWQtbWQgZm9udC1tb25vIHRleHQtc20gb3ZlcmZsb3cteC1hdXRvIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCB3aGl0ZXNwYWNlLXByZVwiPlxuICAgICAgICAgICAgICAgICAge2AvLyBPcGVuIG9yIGNsb3NlIHRoZSBhdHRlbmRhbnQgY2hhdFxuSHlwZXJBdHRlbmRhbnQub3BlbigpO1xuSHlwZXJBdHRlbmRhbnQuY2xvc2UoKTtcblxuLy8gU2VuZCBhIGN1c3RvbSBtZXNzYWdlIGZyb20gdGhlIGJvdCB3aXRoIGludGVyYWN0aXZlIGFjdGlvbiBidXR0b25zXG5IeXBlckF0dGVuZGFudC5zZW5kTWVzc2FnZShcIkkgbm90aWNlZCB5b3UncmUgbG9va2luZyBhdCBrZXlib2FyZHMhXCIsIFtcbiAgeyBsYWJlbDogXCJTaG93IG1lXCIsIGFjdGlvbjogKCkgPT4gY29uc29sZS5sb2coXCJBY3Rpb24gY2xpY2tlZFwiKSB9XG5dKTtcblxuLy8gVHJpZ2dlciB0aGUgZ3VpZGVkIHRvdXJcbkh5cGVyQXR0ZW5kYW50LnRvdXIoKTtcblxuLy8gSGlnaGxpZ2h0IGFueSBlbGVtZW50IG9uIHRoZSBwYWdlXG5IeXBlckF0dGVuZGFudC5oaWdobGlnaHQoJyNrZXlib2FyZC1zcGVjcycpO1xuXG4vLyBTdWdnZXN0IHNwZWNpZmljIHByb2R1Y3RzIGluIHRoZSBjaGF0XG5IeXBlckF0dGVuZGFudC5zdWdnZXN0UHJvZHVjdHMoW1xuICB7IGlkOiBcIjEwMVwiLCBuYW1lOiBcIkVyZ29ub21pYyBNZWNoYW5pY2FsIEtleWJvYXJkXCIgfVxuXSwgXCJUaGVzZSBrZXlib2FyZHMgbWF0Y2ggeW91ciBzZXR1cDpcIik7XG5cbi8vIE9wZW4gdGhlIGNvbmZpZ3VyYXRpb24gd2l6YXJkIGZvciBhIHNwZWNpZmljIHByb2R1Y3Rcbkh5cGVyQXR0ZW5kYW50LnN0YXJ0Q29uZmlndXJhdG9yKFwiMTAzXCIpO2B9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBib3JkZXItYiBwYi0yXCI+VVJMIFBhcmFtZXRlcnMgKEF1dG8tQWRkICYgU2hhcmVkIENhcnRzKTwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+WW91IGNhbiBhdXRvbWF0aWNhbGx5IGFkZCBhIGJ1bmRsZSB0byB0aGUgY2FydCB3aGVuIGEgdXNlciB2aXNpdHMgeW91ciBzaXRlIGJ5IHBhc3NpbmcgYSBiYXNlNjQgZW5jb2RlZCBKU09OIGFycmF5IHRvIHRoZSA8Y29kZT5oYy1idW5kbGU8L2NvZGU+IFVSTCBwYXJhbWV0ZXIuIFlvdSBjYW4gYWxzbyBsb2FkIGEgY29tcGxldGVseSBzYXZlZCBjYXJ0IHN0YXRlIHVzaW5nIHRoZSA8Y29kZT5oYy1zaGFyZWQtY2FydDwvY29kZT4gcGFyYW1ldGVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW11dGVkIHAtNCByb3VuZGVkLW1kIGZvbnQtbW9ubyB0ZXh0LXNtIG92ZXJmbG93LXgtYXV0byB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgIHtgLy8gRXhhbXBsZSBCdW5kbGUgUGF5bG9hZFxcbmNvbnN0IHBheWxvYWQgPSBidG9hKEpTT04uc3RyaW5naWZ5KFtcXG4gIHsgaWQ6IFwiMTAxXCIsIG5hbWU6IFwiS2V5Ym9hcmRcIiwgcHJpY2U6IDE0OS45OSwgc3BlY2lhbFByaWNlOiA5OS45OSB9XFxuXSkpO1xcblxcbi8vIFJlc3VsdGluZyBVUkw6XFxuLy8gaHR0cHM6Ly95b3VyLXNpdGUuY29tLz9oYy1idW5kbGU9VzNzaWFXUWlPaUl4TURFaUxDSnVZVy4uLlxcblxcbi8vIFJlc3VsdGluZyBTaGFyZWQgQ2FydCBVUkw6XFxuLy8gaHR0cHM6Ly95b3VyLXNpdGUuY29tLz9oYy1zaGFyZWQtY2FydD1XM3NpYVdRaU9pSXhNREVpTENKdVlXLi4uYH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1RhYnNDb250ZW50PlxuXG4gICAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwiZWRpdG9yXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJnLWNhcmQgcC02IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj5Jbi1QYWdlIENvbmZpZ3VyYXRvcjwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkVkaXQgdGhlIEpTT04gYmVsb3cgdG8gbW9kaWZ5IHRoZSBjYXRhbG9nIGFuZCBjb25maWd1cmF0aW9uIGZsb3dzLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFwcGx5SnNvbn0+QXBwbHkgQ2hhbmdlczwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHtqc29uRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGVzdHJ1Y3RpdmUvMTAgdGV4dC1kZXN0cnVjdGl2ZSBwLTMgcm91bmRlZC1tZCBtYi00IHRleHQtc20gZm9udC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICBFcnJvcjoge2pzb25FcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNTAwcHhdIGJvcmRlciByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdExhbmd1YWdlPVwianNvblwiXG4gICAgICAgICAgICAgICAgICB0aGVtZT1cInZzLWRhcmtcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRvckNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0RWRpdG9yQ29udGVudCh2YWwgfHwgXCJcIil9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgIG1pbmltYXA6IHsgZW5hYmxlZDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXRPblBhc3RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVGFic0NvbnRlbnQ+XG5cbiAgICAgICAgICA8VGFic0NvbnRlbnQgdmFsdWU9XCJzb3VyY2VcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYmctY2FyZCBwLTYgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPlNvdXJjZSBDb2RlPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+VmlldyB0aGUgYWN0dWFsIFJlYWN0IHNvdXJjZSBjb2RlIGZvciB0aGUgQ2FydCBPdmVybGF5IGNvbXBvbmVudC48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs2MDBweF0gYm9yZGVyIHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U9XCJ0eXBlc2NyaXB0XCJcbiAgICAgICAgICAgICAgICAgIHRoZW1lPVwidnMtZGFya1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Q2FydE92ZXJsYXlDb2RlfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBtaW5pbWFwOiB7IGVuYWJsZWQ6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1RhYnNDb250ZW50PlxuICAgICAgICA8L1RhYnM+XG4gICAgICA8L21haW4+XG4gICAgICA8U2hvcHBpbmdBdHRlbmRhbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FydE92ZXJsYXkiLCJTaG9wcGluZ0F0dGVuZGFudCIsIkJ1dHRvbiIsIlRhYnMiLCJUYWJzQ29udGVudCIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJCYWRnZSIsIkVkaXRvciIsIkNhcnRPdmVybGF5Q29kZSIsIk1pbnVzIiwiUGx1cyIsIlNldHRpbmdzMiIsIkRFRkFVTFRfUFJPRFVDVFMiLCJpZCIsIm5hbWUiLCJwcmljZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwiY29uZmlnRmxvdyIsImtleSIsInN0ZXAiLCJvcHRpb25zIiwicmV2aWV3Q29udGVudCIsInBhZ2VTZWxlY3RvciIsImludGVydmFsIiwicmV2aWV3VXJsIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImVuZHBvaW50Iiwic3VjY2Vzc01lc3NhZ2UiLCJpbnB1dHMiLCJJbmRleCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJlZGl0b3JDb250ZW50Iiwic2V0RWRpdG9yQ29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJqc29uRXJyb3IiLCJzZXRKc29uRXJyb3IiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJoYW5kbGVDYXJ0VXBkYXRlZCIsImUiLCJkZXRhaWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUFwcGx5SnNvbiIsInBhcnNlZCIsInBhcnNlIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsInNwYW4iLCJoMSIsImEiLCJocmVmIiwibWFpbiIsImgyIiwicCIsImg0IiwidWwiLCJsaSIsInZhbHVlIiwib25WYWx1ZUNoYW5nZSIsIm1hcCIsInR5cGVQcm9kdWN0cyIsImZpbHRlciIsImxlbmd0aCIsImgzIiwidmFyaWFudCIsInByb2R1Y3QiLCJpbWciLCJzcmMiLCJhbHQiLCJ0b0ZpeGVkIiwiZXhpc3RpbmdJdGVtcyIsIml0ZW0iLCJncm91cElkIiwiY2FydEl0ZW0iLCJpZHgiLCJjb25maWd1cmF0aW9uIiwic2l6ZSIsIm9uQ2xpY2siLCJIeXBlckNhcnQiLCJ1cGRhdGVRdWFudGl0eSIsImNhcnRJdGVtSWQiLCJxdWFudGl0eSIsImNvbmZpZ3VyZUl0ZW0iLCJwcmVzZW50YXRpb24iLCJpbmxpbmVUYXJnZXQiLCJkYXRhLWhjLWlkIiwiZGF0YS1oYy1uYW1lIiwiZGF0YS1oYy1wcmljZSIsImRhdGEtaGMtaW1hZ2UiLCJkYXRhLWhjLXR5cGUiLCJkYXRhLWhjLWludGVydmFsIiwiZGF0YS1oYy1jb25maWctZmxvdyIsInVuZGVmaW5lZCIsImRhdGEtaGMtcmV2aWV3LWNvbnRlbnQiLCJkYXRhLWhjLXJldmlldy11cmwiLCJkYXRhLWhjLXBhZ2Utc2VsZWN0b3IiLCJkYXRhLWhjLXByZXNlbnRhdGlvbiIsImRhdGEtaGMtaW5saW5lLXRhcmdldCIsImJ1bmRsZUl0ZW1zIiwic3BlY2lhbFByaWNlIiwiYWRkR3JvdXAiLCJwYXlsb2FkIiwiYnRvYSIsImxvY2F0aW9uIiwiY29kZSIsImhlaWdodCIsImRlZmF1bHRMYW5ndWFnZSIsInRoZW1lIiwib25DaGFuZ2UiLCJ2YWwiLCJtaW5pbWFwIiwiZW5hYmxlZCIsImZvbnRTaXplIiwiZm9ybWF0T25QYXN0ZSIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxRQUFRLEVBQUVDLFNBQVMsUUFBUSxRQUFRO0FBQzVDLFNBQVNDLFdBQVcsUUFBbUIsMkJBQTJCO0FBQ2xFLFNBQVNDLGlCQUFpQixRQUFRLGlDQUFpQztBQUNuRSxTQUFTQyxNQUFNLFFBQVEseUJBQXlCO0FBQ2hELFNBQVNDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsUUFBUSx1QkFBdUI7QUFFaEYsU0FBU0MsS0FBSyxRQUFRLHdCQUF3QjtBQUM5QyxPQUFPQyxZQUFZLHVCQUF1QjtBQUMxQyxPQUFPQyxxQkFBcUIsbUNBQW1DO0FBQy9ELFNBQVNDLEtBQUssRUFBRUMsSUFBSSxFQUFVQyxTQUFTLFFBQVEsZUFBZTtBQUc5RCxNQUFNQyxtQkFBbUI7SUFDdkI7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsWUFBWTtZQUNWO2dCQUFFQyxLQUFLO2dCQUFZQyxNQUFNO2dCQUFlSCxNQUFNO2dCQUFVSSxTQUFTO29CQUFDO29CQUFnQjtvQkFBbUI7aUJBQWdCO1lBQUM7WUFDdEg7Z0JBQUVGLEtBQUs7Z0JBQVdDLE1BQU07Z0JBQWdCSCxNQUFNO2dCQUFTSSxTQUFTO29CQUFDO29CQUFlO29CQUFnQjtpQkFBYTtZQUFDO1NBQy9HO1FBQ0RDLGVBQWU7UUFDZkMsY0FBYztJQUNoQjtJQUNBO1FBQ0VYLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxNQUFNO1FBQ05PLFVBQVU7UUFDVkYsZUFB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