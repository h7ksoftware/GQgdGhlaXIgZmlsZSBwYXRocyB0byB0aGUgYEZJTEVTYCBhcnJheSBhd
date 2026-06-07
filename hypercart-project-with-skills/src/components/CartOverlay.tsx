import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/CartOverlay.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/CartOverlay.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$(), _s1 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import __vite__cjsImport4_reactDom from "/node_modules/.vite/deps/react-dom.js?v=7dd7a232"; const createPortal = __vite__cjsImport4_reactDom["createPortal"];
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "/src/components/ui/sheet.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { Label } from "/src/components/ui/label.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/src/components/ui/tabs.tsx";
import { ScrollArea } from "/src/components/ui/scroll-area.tsx";
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, ShieldCheck, Gift, ArrowLeft, Settings2, RotateCcw, Share2, Tag } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { Badge } from "/src/components/ui/badge.tsx";
import { Textarea } from "/src/components/ui/textarea.tsx";
import { Checkbox } from "/src/components/ui/checkbox.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/src/components/ui/select.tsx";
import { RadioGroup, RadioGroupItem } from "/src/components/ui/radio-group.tsx";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "/src/components/ui/dialog.tsx";
import { Switch } from "/src/components/ui/switch.tsx";
import { Slider } from "/src/components/ui/slider.tsx";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/src/components/ui/accordion.tsx";
import { ToggleGroup, ToggleGroupItem } from "/src/components/ui/toggle-group.tsx";
import { Calendar } from "/src/components/ui/calendar.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "/src/components/ui/popover.tsx";
import { format } from "/node_modules/.vite/deps/date-fns.js?v=7dd7a232";
import { Calendar as CalendarIcon, UploadCloud, Info, AlertCircle } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "/src/components/ui/tooltip.tsx";
import { Progress } from "/src/components/ui/progress.tsx";
import { Alert, AlertDescription, AlertTitle } from "/src/components/ui/alert.tsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "/src/components/ui/hover-card.tsx";
// Stubbed Data
const initialCart = [
    {
        id: 101,
        name: "Ergonomic Mechanical Keyboard",
        price: 149.99,
        quantity: 1,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/6e811bf2-f084-4b56-8a78-ea71d8c7c957.jpg",
        type: "configurable",
        configuration: {
            switches: "Linear (Red)",
            keycaps: "Dark Matter"
        },
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
        quantity: 1,
        image: "https://vibe.filesafe.space/1780845837850401115/assets/9475ecc8-626b-45da-ba97-670215b55935.jpg",
        type: "subscription",
        interval: "month",
        reviewContent: "Our beans are ethically sourced from single-origin farms in Colombia and Ethiopia.",
        reviewUrl: "https://jsonplaceholder.typicode.com/posts/1"
    }
];
const UPSELL_PRODUCTS = [
    {
        id: 901,
        name: "Extended 2-Year Warranty",
        price: 29.99,
        icon: /*#__PURE__*/ _jsxDEV(ShieldCheck, {
            className: "h-5 w-5 text-muted-foreground"
        }, void 0, false, {
            fileName: "/app/src/components/CartOverlay.tsx",
            lineNumber: 36,
            columnNumber: 68
        }, this)
    },
    {
        id: 902,
        name: "Premium Gift Packaging",
        price: 9.99,
        icon: /*#__PURE__*/ _jsxDEV(Gift, {
            className: "h-5 w-5 text-muted-foreground"
        }, void 0, false, {
            fileName: "/app/src/components/CartOverlay.tsx",
            lineNumber: 37,
            columnNumber: 65
        }, this)
    }
];
export const addToCart = (product)=>{
    window.dispatchEvent(new CustomEvent('add-to-cart', {
        detail: product
    }));
    window.dispatchEvent(new CustomEvent('open-cart'));
};
function CartItemReview({ item }) {
    _s();
    const [ajaxContent, setAjaxContent] = useState(null);
    const [pageContent, setPageContent] = useState(null);
    useEffect(()=>{
        if (item.reviewUrl) {
            fetch(item.reviewUrl).then((res)=>res.json()).then((data)=>{
                // Mock handling of JSON response to string
                setAjaxContent(data.body || JSON.stringify(data));
            }).catch((err)=>console.error("Failed to fetch review content", err));
        }
    }, [
        item.reviewUrl
    ]);
    useEffect(()=>{
        if (item.pageSelector) {
            const el = document.querySelector(item.pageSelector);
            if (el) {
                setPageContent(el.innerHTML);
            }
        }
    }, [
        item.pageSelector
    ]);
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "space-y-4 mb-8 pb-8 border-b last:border-0",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0 border",
                        children: item.image ? /*#__PURE__*/ _jsxDEV("img", {
                            src: item.image,
                            alt: item.name,
                            className: "h-full w-full object-cover"
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ _jsxDEV(ShoppingCart, {
                            className: "h-6 w-6 text-muted-foreground/30 m-auto mt-5"
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/app/src/components/CartOverlay.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        children: [
                            /*#__PURE__*/ _jsxDEV("h4", {
                                className: "font-semibold text-lg",
                                children: item.name
                            }, void 0, false, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Product Overview & Details"
                            }, void 0, false, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/components/CartOverlay.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            item.reviewContent && /*#__PURE__*/ _jsxDEV("div", {
                className: "bg-muted/30 p-4 rounded-lg",
                children: /*#__PURE__*/ _jsxDEV("p", {
                    className: "text-sm leading-relaxed",
                    children: item.reviewContent
                }, void 0, false, {
                    fileName: "/app/src/components/CartOverlay.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            pageContent && /*#__PURE__*/ _jsxDEV("div", {
                className: "bg-card border p-4 rounded-lg shadow-sm",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    dangerouslySetInnerHTML: {
                        __html: pageContent
                    }
                }, void 0, false, {
                    fileName: "/app/src/components/CartOverlay.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            ajaxContent && /*#__PURE__*/ _jsxDEV("div", {
                className: "bg-primary/5 border border-primary/20 p-4 rounded-lg",
                children: [
                    /*#__PURE__*/ _jsxDEV("h5", {
                        className: "text-xs font-bold uppercase tracking-wider text-primary mb-2",
                        children: "Live Data"
                    }, void 0, false, {
                        fileName: "/app/src/components/CartOverlay.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-sm italic text-muted-foreground",
                        children: ajaxContent
                    }, void 0, false, {
                        fileName: "/app/src/components/CartOverlay.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            !item.reviewContent && !pageContent && !ajaxContent && /*#__PURE__*/ _jsxDEV("p", {
                className: "text-sm text-muted-foreground italic",
                children: "No additional overview content available for this item."
            }, void 0, false, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/CartOverlay.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(CartItemReview, "qAjIllrcPxCyY6HWn5NgfLhzSeA=");
_c = CartItemReview;
export function CartOverlay() {
    _s1();
    const [isOpen, setIsOpen] = useState(false);
    const [presentationMode, setPresentationMode] = useState('sheet');
    const [inlineTarget, setInlineTarget] = useState(null);
    const [activeTab, setActiveTab] = useState("cart");
    const [cart, setCart] = useState(initialCart);
    const [configuringItem, setConfiguringItem] = useState(null);
    const [configViewMode, setConfigViewMode] = useState('wizard');
    const [configStepIndex, setConfigStepIndex] = useState(0);
    const [configLoading, setConfigLoading] = useState(false);
    const [configError, setConfigError] = useState("");
    const [configResponse, setConfigResponse] = useState(null);
    const [discountCode, setDiscountCode] = useState("");
    const [discountApplied, setDiscountApplied] = useState(0);
    const [orderNotes, setOrderNotes] = useState("");
    const [settings, setSettings] = useState({
        currency: 'USD',
        currencySymbol: '$',
        strings: {
            cart: "Cart",
            checkout: "Checkout",
            overview: "Overview",
            emptyCartTitle: "Your cart is empty",
            emptyCartDesc: "Looks like you haven't added anything to your cart yet.",
            continueShopping: "Continue Shopping",
            proceedToCheckout: "Proceed to Checkout",
            proceedToOptions: "Proceed to Options",
            orderSummary: "Order Summary",
            subtotal: "Subtotal",
            shipping: "Shipping",
            taxes: "Taxes",
            total: "Total",
            pay: "Pay",
            back: "Back",
            continue: "Continue",
            frequentlyAdded: "Frequently Added Together",
            add: "Add",
            added: "Added",
            qty: "Qty",
            locked: "Locked",
            bundle: "Bundle",
            specialBundle: "Special Bundle",
            editConfiguration: "Edit Configuration",
            configureItem: "Configure Item",
            billedEvery: "Billed every",
            calculatedNext: "Calculated next",
            calculated: "Calculated",
            discountCode: "Discount Code",
            apply: "Apply",
            orderNotes: "Order Notes (Optional)",
            discount: "Discount"
        }
    });
    const t = (key)=>settings.strings[key] || key;
    const formatPrice = (price)=>`${settings.currencySymbol}${price.toFixed(2)}`;
    const openConfigurator = (item)=>{
        setConfiguringItem(item);
        if (item.configuration) {
            setConfigViewMode('summary');
        } else {
            setConfigViewMode('wizard');
            setConfigStepIndex(0);
        }
        setConfigError("");
        setConfigResponse(null);
    };
    // Checkout Wizard State
    const [checkoutStep, setCheckoutStep] = useState(1); // 1: Billing, 2: Shipping, 3: Payment
    const [tosAccepted, setTosAccepted] = useState(false);
    const [checkoutData, setCheckoutData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zip: "",
        shippingMethod: "standard",
        // Onboarding additional fields
        companyName: "",
        jobTitle: "",
        industry: "",
        companySize: "1-10",
        experienceLevel: 50,
        newsletter: false,
        marketingEmails: true,
        smsAlerts: false,
        preferredContact: "email",
        foundUs: "",
        projectDescription: "",
        startDate: new Date(),
        teamMembers: [],
        budget: "5k-10k",
        urgency: "medium",
        colorTheme: "dark",
        primaryGoal: "",
        fileUploaded: false,
        referralCode: "",
        surveySatisfaction: "5",
        surveyFeedback: "",
        dietaryRestrictions: [],
        tshirtSize: "L",
        giftWrap: false,
        specialInstructions: "",
        agreedToPolicies: false,
        ageVerification: false
    });
    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const bundleData = params.get('hc-bundle');
        if (bundleData) {
            try {
                const items = JSON.parse(atob(bundleData));
                // Small delay to ensure listeners are ready
                setTimeout(()=>{
                    window.dispatchEvent(new CustomEvent('add-to-cart-group', {
                        detail: {
                            items
                        }
                    }));
                }, 100);
                const newUrl = window.location.pathname;
                window.history.replaceState({}, document.title, newUrl);
            } catch (err) {
                console.error("Failed to parse hc-bundle", err);
            }
        }
        const sharedCartData = params.get('hc-shared-cart');
        if (sharedCartData) {
            try {
                const items = JSON.parse(atob(sharedCartData));
                setCart(items);
                setIsOpen(true);
                const newUrl = window.location.pathname;
                window.history.replaceState({}, document.title, newUrl);
            } catch (err) {
                console.error("Failed to parse hc-shared-cart", err);
            }
        }
        // Listen for manual events
        const handleAddToCart = (e)=>{
            const customEvent = e;
            const product = customEvent.detail;
            const newCartItemId = Date.now();
            setCart((prev)=>{
                const existing = prev.find((item)=>item.id === product.id);
                if (existing && product.type !== "configurable") {
                    return prev.map((item)=>item.id === product.id ? {
                            ...item,
                            quantity: item.quantity + 1
                        } : item);
                }
                return [
                    ...prev,
                    {
                        ...product,
                        quantity: 1,
                        cartItemId: newCartItemId
                    }
                ];
            });
            if (product.type === "configurable" && !product.configuration) {
                openConfigurator({
                    ...product,
                    quantity: 1,
                    cartItemId: newCartItemId
                });
            }
        };
        const handleAddGroup = (e)=>{
            const customEvent = e;
            const { items, groupId = crypto.randomUUID() } = customEvent.detail;
            const newItems = items.map((item)=>({
                    ...item,
                    quantity: item.quantity || 1,
                    cartItemId: Date.now() + Math.random(),
                    groupId
                }));
            setCart((prev)=>[
                    ...prev,
                    ...newItems
                ]);
            setIsOpen(true);
            setActiveTab("cart");
        };
        const handleOpenCart = (e)=>{
            const customEvent = e;
            const mode = customEvent.detail?.presentation || 'sheet';
            const target = customEvent.detail?.inlineTarget || null;
            setPresentationMode(mode);
            if (target) setInlineTarget(target);
            setIsOpen(true);
            setActiveTab("cart");
        };
        // Global click listener for data-vibe-item-* attributes
        const handleGlobalClick = (e)=>{
            const target = e.target;
            const button = target.closest('[data-hc-id]');
            if (button) {
                e.preventDefault();
                const id = button.getAttribute('data-hc-id');
                const name = button.getAttribute('data-hc-name') || 'Item';
                const price = parseFloat(button.getAttribute('data-hc-price') || '0');
                const image = button.getAttribute('data-hc-image') || undefined;
                const type = button.getAttribute('data-hc-type') || 'standard';
                const presentation = button.getAttribute('data-hc-presentation') || 'sheet';
                const inlineTarget = button.getAttribute('data-hc-inline-target') || undefined;
                let configFlow = undefined;
                const configFlowRaw = button.getAttribute('data-hc-config-flow');
                if (configFlowRaw) {
                    try {
                        configFlow = JSON.parse(configFlowRaw);
                    } catch (err) {}
                }
                const interval = button.getAttribute('data-hc-interval') || undefined;
                const reviewContent = button.getAttribute('data-hc-review-content') || undefined;
                const reviewUrl = button.getAttribute('data-hc-review-url') || undefined;
                const pageSelector = button.getAttribute('data-hc-page-selector') || undefined;
                const product = {
                    id,
                    name,
                    price,
                    image,
                    type,
                    configFlow,
                    interval,
                    reviewContent,
                    reviewUrl,
                    pageSelector
                };
                // Dispatch to self
                window.dispatchEvent(new CustomEvent('add-to-cart', {
                    detail: product
                }));
                window.dispatchEvent(new CustomEvent('open-cart', {
                    detail: {
                        presentation,
                        inlineTarget
                    }
                }));
            }
        };
        const handleUpdateQuantity = (e)=>{
            const { cartItemId, delta } = e.detail;
            setCart((prev)=>prev.map((item)=>(item.cartItemId || item.id) === cartItemId ? {
                        ...item,
                        quantity: Math.max(0, item.quantity + delta)
                    } : item).filter((item)=>item.quantity > 0));
        };
        const handleRemoveItem = (e)=>{
            const { cartItemId } = e.detail;
            setCart((prev)=>{
                const itemToRemove = prev.find((i)=>(i.cartItemId || i.id) === cartItemId);
                if (itemToRemove?.groupId) {
                    return prev.filter((item)=>item.groupId !== itemToRemove.groupId);
                }
                return prev.filter((item)=>(item.cartItemId || item.id) !== cartItemId);
            });
        };
        const handleConfigureItem = (e)=>{
            const { cartItemId, presentation, inlineTarget } = e.detail;
            setCart((prev)=>{
                const item = prev.find((i)=>(i.cartItemId || i.id) === cartItemId);
                if (item) {
                    setTimeout(()=>{
                        if (presentation) setPresentationMode(presentation);
                        if (inlineTarget) setInlineTarget(inlineTarget);
                        setIsOpen(true);
                        setActiveTab("cart");
                        openConfigurator(item);
                    }, 0);
                }
                return prev;
            });
        };
        const handleApplyPromo = (e)=>{
            const code = e.detail;
            setDiscountCode(code);
            // Automatically apply if it matches
            if (code.toLowerCase() === 'save10') setDiscountApplied(10);
            else if (code.toLowerCase() === 'half') setDiscountApplied(999999); // Will be capped by subtotal
            else setDiscountApplied(0);
        };
        const handleSetShipping = (e)=>{
            const method = e.detail;
            setCheckoutData((prev)=>({
                    ...prev,
                    shippingMethod: method
                }));
        };
        window.addEventListener('add-to-cart', handleAddToCart);
        window.addEventListener('add-to-cart-group', handleAddGroup);
        window.addEventListener('open-cart', handleOpenCart);
        window.addEventListener('update-quantity', handleUpdateQuantity);
        window.addEventListener('remove-item', handleRemoveItem);
        window.addEventListener('configure-item', handleConfigureItem);
        window.addEventListener('apply-promo', handleApplyPromo);
        window.addEventListener('set-shipping', handleSetShipping);
        document.addEventListener('click', handleGlobalClick);
        // Expose global API
        window.HyperCart = {
            add: (product)=>window.dispatchEvent(new CustomEvent('add-to-cart', {
                    detail: product
                })),
            addGroup: (items, groupId)=>window.dispatchEvent(new CustomEvent('add-to-cart-group', {
                    detail: {
                        items,
                        groupId
                    }
                })),
            open: (options)=>window.dispatchEvent(new CustomEvent('open-cart', {
                    detail: options || {}
                })),
            updateQuantity: (cartItemId, delta)=>window.dispatchEvent(new CustomEvent('update-quantity', {
                    detail: {
                        cartItemId,
                        delta
                    }
                })),
            removeItem: (cartItemId)=>window.dispatchEvent(new CustomEvent('remove-item', {
                    detail: {
                        cartItemId
                    }
                })),
            configureItem: (cartItemId, options)=>window.dispatchEvent(new CustomEvent('configure-item', {
                    detail: {
                        cartItemId,
                        ...options
                    }
                })),
            applyPromo: (code)=>window.dispatchEvent(new CustomEvent('apply-promo', {
                    detail: code
                })),
            setShipping: (method)=>window.dispatchEvent(new CustomEvent('set-shipping', {
                    detail: method
                })),
            getShareUrl: ()=>{
                const payload = btoa(JSON.stringify(cart));
                const url = new URL(window.location.href);
                url.searchParams.set('hc-shared-cart', payload);
                return url.toString();
            },
            scanPage: ()=>{
                const elements = document.querySelectorAll('.hyper-add-to-cart');
                const catalog = [];
                const seenIds = new Set();
                elements.forEach((button)=>{
                    const id = button.getAttribute('data-hc-id');
                    if (!id || seenIds.has(id)) return;
                    seenIds.add(id);
                    let configFlow = undefined;
                    const configFlowStr = button.getAttribute('data-hc-config-flow');
                    if (configFlowStr) {
                        try {
                            configFlow = JSON.parse(configFlowStr);
                        } catch (e) {}
                    }
                    catalog.push({
                        id,
                        name: button.getAttribute('data-hc-name') || 'Item',
                        price: parseFloat(button.getAttribute('data-hc-price') || '0'),
                        image: button.getAttribute('data-hc-image') || undefined,
                        type: button.getAttribute('data-hc-type') || 'standard',
                        interval: button.getAttribute('data-hc-interval') || undefined,
                        configFlow,
                        reviewContent: button.getAttribute('data-hc-review-content') || undefined,
                        reviewUrl: button.getAttribute('data-hc-review-url') || undefined,
                        pageSelector: button.getAttribute('data-hc-page-selector') || undefined,
                        presentation: button.getAttribute('data-hc-presentation') || undefined,
                        inlineTarget: button.getAttribute('data-hc-inline-target') || undefined
                    });
                });
                return catalog;
            }
        };
        return ()=>{
            window.removeEventListener('add-to-cart', handleAddToCart);
            window.removeEventListener('add-to-cart-group', handleAddGroup);
            window.removeEventListener('open-cart', handleOpenCart);
            window.removeEventListener('update-quantity', handleUpdateQuantity);
            window.removeEventListener('remove-item', handleRemoveItem);
            window.removeEventListener('configure-item', handleConfigureItem);
            window.removeEventListener('apply-promo', handleApplyPromo);
            window.removeEventListener('set-shipping', handleSetShipping);
            document.removeEventListener('click', handleGlobalClick);
            delete window.HyperCart;
        };
    }, []);
    useEffect(()=>{
        // Small timeout to ensure parent listeners are attached
        const timer = setTimeout(()=>{
            window.dispatchEvent(new CustomEvent('cart-updated', {
                detail: cart
            }));
        }, 0);
        return ()=>clearTimeout(timer);
    }, [
        cart
    ]);
    const updateQuantity = (cartItemId, delta)=>{
        setCart(cart.map((item)=>(item.cartItemId || item.id) === cartItemId ? {
                ...item,
                quantity: Math.max(0, item.quantity + delta)
            } : item).filter((item)=>item.quantity > 0));
    };
    const removeItem = (cartItemId)=>{
        const itemToRemove = cart.find((i)=>(i.cartItemId || i.id) === cartItemId);
        if (itemToRemove?.groupId) {
            setCart(cart.filter((item)=>item.groupId !== itemToRemove.groupId));
        } else {
            setCart(cart.filter((item)=>(item.cartItemId || item.id) !== cartItemId));
        }
    };
    const saveConfiguration = (cartItemId, configuration)=>{
        setCart(cart.map((item)=>(item.cartItemId || item.id) === cartItemId ? {
                ...item,
                configuration
            } : item));
        setConfiguringItem(null);
        if (presentationMode === 'card-overlay') {
            setIsOpen(false);
            setPresentationMode('sheet');
        }
    };
    const subtotal = cart.reduce((sum, item)=>sum + (item.specialPrice !== undefined ? item.specialPrice : item.price) * item.quantity, 0);
    const discountedSubtotal = Math.max(0, subtotal - discountApplied);
    const shippingCost = checkoutData.shippingMethod === 'express' ? 15.00 : checkoutData.shippingMethod === 'standard' ? 5.00 : 0;
    const taxes = discountedSubtotal * 0.08;
    const total = discountedSubtotal + shippingCost + taxes;
    const totalItems = cart.reduce((sum, item)=>sum + item.quantity, 0);
    const applyDiscount = ()=>{
        if (discountCode.toLowerCase() === 'save10') {
            setDiscountApplied(10);
        } else if (discountCode.toLowerCase() === 'half') {
            setDiscountApplied(subtotal * 0.5);
        } else {
            setDiscountApplied(0);
        }
    };
    const handleShareCart = ()=>{
        const payload = btoa(JSON.stringify(cart));
        const url = new URL(window.location.href);
        url.searchParams.set('hc-shared-cart', payload);
        navigator.clipboard.writeText(url.toString());
        alert("Cart link copied to clipboard!");
    };
    const handleConfigNext = async ()=>{
        if (!configuringItem) return;
        const currentStep = configuringItem.configFlow?.[configStepIndex];
        const isLastStep = configStepIndex === (configuringItem.configFlow?.length || 0) - 1;
        if (currentStep?.type === 'api') {
            setConfigLoading(true);
            setConfigError("");
            setConfigResponse(null);
            try {
                // Stub API call
                await new Promise((resolve)=>setTimeout(resolve, 1000));
                // Mock validation logic based on stub rules
                const inputsValid = currentStep.inputs?.every((input)=>!!configuringItem.configuration?.[input.key]);
                if (!inputsValid) {
                    throw new Error("Please fill in all required fields.");
                }
                // Simulate an error if a specific string is typed (for demo purposes)
                if (currentStep.inputs?.some((input)=>configuringItem.configuration?.[input.key]?.toLowerCase() === 'error')) {
                    throw new Error("Validation failed with endpoint. Please try again.");
                }
                setConfigResponse({
                    message: currentStep.successMessage || "Verification successful!"
                });
                // Wait a bit to show success message, then proceed
                setTimeout(()=>{
                    setConfigResponse(null);
                    if (!isLastStep) setConfigStepIndex((s)=>s + 1);
                    else saveConfiguration(configuringItem.cartItemId || configuringItem.id, configuringItem.configuration);
                }, 1500);
            } catch (err) {
                setConfigError(err.message);
            } finally{
                setConfigLoading(false);
            }
        } else {
            if (!isLastStep) setConfigStepIndex((s)=>s + 1);
            else saveConfiguration(configuringItem.cartItemId || configuringItem.id, configuringItem.configuration);
        }
    };
    const handleCheckoutSubmit = (e)=>{
        e.preventDefault();
        if (checkoutStep < 4) {
            setCheckoutStep(checkoutStep + 1);
        } else {
            // Track checkout submission
            const trackingPayload = {
                type: "external_form_submission",
                timestamp: Date.now(),
                formId: "Checkout Form",
                formData: {
                    first_name: checkoutData.firstName,
                    last_name: checkoutData.lastName,
                    email: checkoutData.email,
                    address: checkoutData.address,
                    city: checkoutData.city,
                    postal_code: checkoutData.zip,
                    "contact.shipping_method": checkoutData.shippingMethod,
                    organization: checkoutData.companyName,
                    "contact.job_title": checkoutData.jobTitle,
                    "contact.industry": checkoutData.industry,
                    "contact.company_size": checkoutData.companySize,
                    "contact.project_description": checkoutData.projectDescription,
                    "contact.budget": checkoutData.budget,
                    "contact.urgency": checkoutData.urgency,
                    "contact.color_theme": checkoutData.colorTheme
                },
                formLabels: {
                    first_name: "First Name",
                    last_name: "Last Name",
                    email: "Email Address",
                    address: "Street Address",
                    city: "City",
                    postal_code: "ZIP Code",
                    "contact.shipping_method": "Shipping Method",
                    organization: "Company Name",
                    "contact.job_title": "Job Title",
                    "contact.industry": "Industry",
                    "contact.company_size": "Company Size",
                    "contact.project_description": "Project Description",
                    "contact.budget": "Budget",
                    "contact.urgency": "Urgency",
                    "contact.color_theme": "Color Theme"
                },
                url: window.location.href,
                title: document.title,
                path: window.location.pathname,
                userAgent: navigator.userAgent,
                trackingId: "tk_5906e99a5f124c62b490ead5b8b9b88c",
                locationId: "QNLLfS2aHRyMKidyKKWO",
                sessionId: crypto.randomUUID(),
                properties: {
                    deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop"
                }
            };
            fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    version: "2021-07-28"
                },
                body: JSON.stringify(trackingPayload)
            }).catch(()=>{});
            alert("Order placed successfully! (Stubbed Checkout)");
            setCart([]);
            setActiveTab("cart");
            setCheckoutStep(1);
            setIsOpen(false);
        }
    };
    const renderConfigurator = ()=>{
        if (!configuringItem) return null;
        return /*#__PURE__*/ _jsxDEV("div", {
            className: "flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-300 bg-card",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex items-center gap-2 mb-6 px-4 pt-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV(Button, {
                            variant: "ghost",
                            size: "icon",
                            onClick: ()=>{
                                if (presentationMode === 'card-overlay') {
                                    setIsOpen(false);
                                    setPresentationMode('sheet');
                                }
                                setConfiguringItem(null);
                            },
                            className: "-ml-2",
                            children: /*#__PURE__*/ _jsxDEV(ArrowLeft, {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 637,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h3", {
                            className: "text-lg font-semibold",
                            children: configViewMode === 'summary' ? `Configuration Summary` : `Configure ${configuringItem.name}`
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 646,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/src/components/CartOverlay.tsx",
                    lineNumber: 636,
                    columnNumber: 9
                }, this),
                configViewMode === 'summary' ? /*#__PURE__*/ _jsxDEV("div", {
                    className: "space-y-6 flex-1 pb-20 overflow-y-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "space-y-4",
                            children: configuringItem.configFlow?.map((step, idx)=>{
                                const val = configuringItem.configuration?.[step.key];
                                if (val === undefined) return null;
                                return /*#__PURE__*/ _jsxDEV("div", {
                                    className: "border-b pb-3",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: step.label || step.step
                                        }, void 0, false, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 657,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "font-medium mt-1",
                                            children: val
                                        }, void 0, false, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 658,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 656,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 651,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "absolute bottom-0 left-0 right-0 p-4 bg-background border-t flex gap-3 z-10",
                            children: [
                                /*#__PURE__*/ _jsxDEV(Button, {
                                    variant: "outline",
                                    className: "flex-1",
                                    onClick: ()=>{
                                        setConfigViewMode('wizard');
                                        setConfigStepIndex(0);
                                    },
                                    children: "Edit Configuration"
                                }, void 0, false, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 664,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV(Button, {
                                    className: "flex-1",
                                    onClick: ()=>{
                                        if (presentationMode === 'card-overlay') {
                                            setIsOpen(false);
                                            setPresentationMode('sheet');
                                        }
                                        setConfiguringItem(null);
                                    },
                                    children: "Done"
                                }, void 0, false, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 670,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 663,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/src/components/CartOverlay.tsx",
                    lineNumber: 650,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ _jsxDEV(_Fragment, {
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "space-y-6 flex-1 pb-20 overflow-y-auto px-4",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex gap-1 mb-6",
                                    children: configuringItem.configFlow?.map((_, idx)=>/*#__PURE__*/ _jsxDEV("div", {
                                            className: `h-1.5 flex-1 rounded-full ${idx <= configStepIndex ? 'bg-primary' : 'bg-muted'}`
                                        }, idx, false, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 687,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 685,
                                    columnNumber: 15
                                }, this),
                                (()=>{
                                    const step = configuringItem.configFlow?.[configStepIndex];
                                    if (!step) return null;
                                    return /*#__PURE__*/ _jsxDEV("div", {
                                        className: "space-y-4 animate-in fade-in slide-in-from-right-4 duration-300",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        className: "text-xl font-semibold",
                                                        children: step.label || step.step
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 23
                                                    }, this),
                                                    step.description && /*#__PURE__*/ _jsxDEV("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: step.description
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 44
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 696,
                                                columnNumber: 21
                                            }, this),
                                            configError && /*#__PURE__*/ _jsxDEV(Alert, {
                                                variant: "destructive",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(AlertCircle, {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(AlertTitle, {
                                                        children: "Error"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(AlertDescription, {
                                                        children: configError
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 705,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 702,
                                                columnNumber: 23
                                            }, this),
                                            configResponse && /*#__PURE__*/ _jsxDEV(Alert, {
                                                className: "bg-primary/10 text-primary border-primary/20",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Info, {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(AlertTitle, {
                                                        children: "Success"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(AlertDescription, {
                                                        children: configResponse.message
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 710,
                                                columnNumber: 23
                                            }, this),
                                            step.type === 'select' && /*#__PURE__*/ _jsxDEV(Select, {
                                                value: configuringItem.configuration?.[step.key] || "",
                                                onValueChange: (v)=>setConfiguringItem({
                                                        ...configuringItem,
                                                        configuration: {
                                                            ...configuringItem.configuration,
                                                            [step.key]: v
                                                        }
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(SelectTrigger, {
                                                        children: /*#__PURE__*/ _jsxDEV(SelectValue, {
                                                            placeholder: `Select ${step.label || step.step}`
                                                        }, void 0, false, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 725,
                                                            columnNumber: 40
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 725,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(SelectContent, {
                                                        children: step.options.map((opt)=>{
                                                            const label = typeof opt === 'string' ? opt : opt.label;
                                                            const value = typeof opt === 'string' ? opt : opt.value || opt.label;
                                                            return /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                value: value,
                                                                children: label
                                                            }, value, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 730,
                                                                columnNumber: 36
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 726,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 718,
                                                columnNumber: 23
                                            }, this),
                                            step.type === 'text' && /*#__PURE__*/ _jsxDEV(Input, {
                                                placeholder: step.placeholder || "",
                                                value: configuringItem.configuration?.[step.key] || "",
                                                onChange: (e)=>setConfiguringItem({
                                                        ...configuringItem,
                                                        configuration: {
                                                            ...configuringItem.configuration,
                                                            [step.key]: e.target.value
                                                        }
                                                    })
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 737,
                                                columnNumber: 23
                                            }, this),
                                            step.type === 'radio' && /*#__PURE__*/ _jsxDEV(RadioGroup, {
                                                value: configuringItem.configuration?.[step.key] || "",
                                                onValueChange: (v)=>setConfiguringItem({
                                                        ...configuringItem,
                                                        configuration: {
                                                            ...configuringItem.configuration,
                                                            [step.key]: v
                                                        }
                                                    }),
                                                className: "flex flex-col space-y-2 mt-4",
                                                children: step.options.map((opt)=>{
                                                    const label = typeof opt === 'string' ? opt : opt.label;
                                                    const value = typeof opt === 'string' ? opt : opt.value || opt.label;
                                                    return /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "flex items-start space-x-3 border p-4 rounded-md hover:bg-muted/50 cursor-pointer transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(RadioGroupItem, {
                                                                value: value,
                                                                id: `${step.key}-${value}`,
                                                                className: "mt-0.5"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 761,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Label, {
                                                                htmlFor: `${step.key}-${value}`,
                                                                className: "cursor-pointer flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: "font-medium text-sm",
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 763,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    opt.description && /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: "text-xs text-muted-foreground mt-1",
                                                                        children: opt.description
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 764,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 762,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, value, true, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 748,
                                                columnNumber: 23
                                            }, this),
                                            step.type === 'cards' && /*#__PURE__*/ _jsxDEV("div", {
                                                className: "grid grid-cols-2 gap-4 mt-4",
                                                children: step.options.map((opt, idx)=>{
                                                    const label = typeof opt === 'string' ? opt : opt.label;
                                                    const value = typeof opt === 'string' ? opt : opt.value || opt.label;
                                                    const isSelected = configuringItem.configuration?.[step.key] === value;
                                                    return /*#__PURE__*/ _jsxDEV("div", {
                                                        className: `border rounded-xl p-3 cursor-pointer transition-all flex flex-col ${isSelected ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:border-primary/50'}`,
                                                        onClick: ()=>setConfiguringItem({
                                                                ...configuringItem,
                                                                configuration: {
                                                                    ...configuringItem.configuration,
                                                                    [step.key]: value
                                                                }
                                                            }),
                                                        children: [
                                                            opt.image && /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "aspect-square mb-3 rounded-md overflow-hidden bg-muted",
                                                                children: /*#__PURE__*/ _jsxDEV("img", {
                                                                    src: opt.image,
                                                                    alt: label,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 789,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 788,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "flex items-center justify-between mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("h5", {
                                                                        className: "font-medium text-sm",
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 793,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: `h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-primary bg-primary' : 'border-input'}`,
                                                                        children: isSelected && /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "h-1.5 w-1.5 rounded-full bg-primary-foreground"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 795,
                                                                            columnNumber: 50
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 794,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 792,
                                                                columnNumber: 31
                                                            }, this),
                                                            opt.description && /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-xs text-muted-foreground leading-tight mt-1",
                                                                children: opt.description
                                                            }, void 0, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 798,
                                                                columnNumber: 51
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 773,
                                                columnNumber: 23
                                            }, this),
                                            step.type === 'api' && /*#__PURE__*/ _jsxDEV("div", {
                                                className: "space-y-4 pt-2",
                                                children: [
                                                    step.inputs?.map((input)=>/*#__PURE__*/ _jsxDEV("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                    children: input.label
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 809,
                                                                    columnNumber: 29
                                                                }, this),
                                                                input.type === 'text' && /*#__PURE__*/ _jsxDEV(Input, {
                                                                    placeholder: input.placeholder || "",
                                                                    value: configuringItem.configuration?.[input.key] || "",
                                                                    onChange: (e)=>setConfiguringItem({
                                                                            ...configuringItem,
                                                                            configuration: {
                                                                                ...configuringItem.configuration,
                                                                                [input.key]: e.target.value
                                                                            }
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 811,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, input.key, true, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 808,
                                                            columnNumber: 27
                                                        }, this)),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "text-xs text-muted-foreground mt-2 flex items-center gap-1.5 bg-muted p-2 rounded",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(ShieldCheck, {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 823,
                                                                columnNumber: 27
                                                            }, this),
                                                            "This information will be securely verified."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 822,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 806,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 695,
                                        columnNumber: 19
                                    }, this);
                                })()
                            ]
                        }, void 0, true, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 683,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "absolute bottom-0 left-0 right-0 p-4 bg-background border-t flex gap-3 z-10",
                            children: [
                                configStepIndex > 0 && /*#__PURE__*/ _jsxDEV(Button, {
                                    variant: "outline",
                                    onClick: ()=>{
                                        setConfigStepIndex((s)=>s - 1);
                                        setConfigError("");
                                        setConfigResponse(null);
                                    },
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 834,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ _jsxDEV(Button, {
                                    className: "flex-1",
                                    onClick: handleConfigNext,
                                    disabled: configLoading || !!configResponse,
                                    children: configLoading ? "Verifying..." : configResponse ? "Success!" : configStepIndex === (configuringItem.configFlow?.length || 0) - 1 ? "Save Configuration" : "Next Step"
                                }, void 0, false, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 842,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 832,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "/app/src/components/CartOverlay.tsx",
            lineNumber: 635,
            columnNumber: 7
        }, this);
    };
    const cartContent = /*#__PURE__*/ _jsxDEV(Tabs, {
        id: "cart-overlay-tabs",
        value: activeTab,
        onValueChange: (v)=>{
            setActiveTab(v);
            if (v !== 'checkout') setCheckoutStep(1);
            if (v !== 'cart') setConfiguringItem(null);
        },
        className: "cart-overlay-tabs flex-1 flex flex-col w-full h-full overflow-hidden mt-8 md:mt-6",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "px-4 pb-4 border-b bg-background shrink-0",
                children: /*#__PURE__*/ _jsxDEV(TabsList, {
                    id: "cart-tabs-list",
                    className: "cart-tabs-list grid w-full grid-cols-3",
                    children: [
                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                            id: "tab-trigger-cart",
                            className: "tab-trigger-cart",
                            value: "cart",
                            onClick: ()=>setConfiguringItem(null),
                            children: t('cart')
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 856,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                            id: "tab-trigger-checkout",
                            className: "tab-trigger-checkout",
                            value: "checkout",
                            disabled: cart.length === 0,
                            children: t('checkout')
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 857,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                            id: "tab-trigger-overview",
                            className: "tab-trigger-overview",
                            value: "overview",
                            children: t('overview')
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 858,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/src/components/CartOverlay.tsx",
                    lineNumber: 855,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 854,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(TabsContent, {
                value: "cart",
                id: "tab-content-cart",
                className: "cart-tab-content flex-1 flex flex-col m-0 data-[state=active]:flex overflow-hidden",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        id: "cart-items-container",
                        className: "cart-items-container flex-1 min-h-0 relative max-h-[70vh] overflow-y-auto",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            className: "p-4 min-h-full flex flex-col",
                            children: configuringItem ? renderConfigurator() : cart.length === 0 ? /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex flex-col items-center justify-center flex-1 text-center space-y-4 py-20",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "h-20 w-20 rounded-full bg-muted flex items-center justify-center",
                                        children: /*#__PURE__*/ _jsxDEV(ShoppingCart, {
                                            className: "h-10 w-10 text-muted-foreground opacity-50"
                                        }, void 0, false, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 869,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 868,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        className: "text-lg font-semibold",
                                        children: t('emptyCartTitle')
                                    }, void 0, false, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 871,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-muted-foreground text-sm max-w-[250px]",
                                        children: t('emptyCartDesc')
                                    }, void 0, false, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 872,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Button, {
                                        variant: "default",
                                        className: "mt-4",
                                        onClick: ()=>setIsOpen(false),
                                        children: t('continueShopping')
                                    }, void 0, false, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 873,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 867,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ _jsxDEV("div", {
                                className: "space-y-6 pb-6",
                                children: [
                                    (()=>{
                                        const groupedCart = [];
                                        const processedGroups = new Set();
                                        cart.forEach((item)=>{
                                            if (item.groupId) {
                                                if (!processedGroups.has(item.groupId)) {
                                                    groupedCart.push({
                                                        isBundle: true,
                                                        groupId: item.groupId,
                                                        items: cart.filter((i)=>i.groupId === item.groupId)
                                                    });
                                                    processedGroups.add(item.groupId);
                                                }
                                            } else {
                                                groupedCart.push({
                                                    isBundle: false,
                                                    item
                                                });
                                            }
                                        });
                                        return groupedCart.map((group)=>{
                                            if (group.isBundle) {
                                                return /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "bundle-group border rounded-xl p-4 bg-muted/10 space-y-4 relative shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "flex justify-between items-center border-b pb-3",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: /*#__PURE__*/ _jsxDEV(Badge, {
                                                                        variant: "default",
                                                                        className: "bg-primary text-primary-foreground",
                                                                        children: t('specialBundle')
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 901,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 900,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV(Button, {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    className: "h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0 rounded-full",
                                                                    onClick: ()=>{
                                                                        setCart(cart.filter((i)=>i.groupId !== group.groupId));
                                                                    },
                                                                    children: /*#__PURE__*/ _jsxDEV(Trash2, {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 906,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 903,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 899,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "space-y-4",
                                                            children: group.items.map((item)=>/*#__PURE__*/ _jsxDEV("div", {
                                                                    className: "flex gap-4 relative",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "h-16 w-16 rounded-md overflow-hidden bg-background flex-shrink-0 border shadow-sm",
                                                                            children: item.image ? /*#__PURE__*/ _jsxDEV("img", {
                                                                                src: item.image,
                                                                                alt: item.name,
                                                                                className: "h-full w-full object-cover"
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 914,
                                                                                columnNumber: 39
                                                                            }, this) : /*#__PURE__*/ _jsxDEV("div", {
                                                                                className: "h-full w-full flex items-center justify-center",
                                                                                children: /*#__PURE__*/ _jsxDEV(ShoppingCart, {
                                                                                    className: "h-6 w-6 text-muted-foreground/30"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 917,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 916,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 912,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "flex-1 flex flex-col justify-center",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                                                    className: "font-medium text-sm leading-tight",
                                                                                    children: item.name
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 922,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "flex items-center justify-between mt-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                                            className: "text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md flex items-center gap-1.5",
                                                                                            children: [
                                                                                                t('qty'),
                                                                                                ": ",
                                                                                                item.quantity,
                                                                                                " ",
                                                                                                /*#__PURE__*/ _jsxDEV("span", {
                                                                                                    className: "w-1 h-1 rounded-full bg-muted-foreground/50"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 925,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                " ",
                                                                                                t('locked')
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 924,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "text-right",
                                                                                            children: item.specialPrice !== undefined ? /*#__PURE__*/ _jsxDEV(_Fragment, {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                                                        className: "text-[10px] line-through text-muted-foreground mr-1.5",
                                                                                                        children: formatPrice(item.price * item.quantity)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                        lineNumber: 930,
                                                                                                        columnNumber: 45
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                                                        className: "font-semibold text-sm text-primary",
                                                                                                        children: formatPrice(item.specialPrice * item.quantity)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                        lineNumber: 931,
                                                                                                        columnNumber: 45
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true) : /*#__PURE__*/ _jsxDEV("span", {
                                                                                                className: "font-semibold text-sm",
                                                                                                children: formatPrice(item.price * item.quantity)
                                                                                            }, void 0, false, {
                                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                lineNumber: 934,
                                                                                                columnNumber: 43
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 927,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 923,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 921,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, item.cartItemId || item.id, true, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 911,
                                                                    columnNumber: 33
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 909,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, `bundle-${group.groupId}`, true, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 27
                                                }, this);
                                            }
                                            const item = group.item;
                                            const uniqueId = item.cartItemId || item.id;
                                            return /*#__PURE__*/ _jsxDEV("div", {
                                                id: `cart-item-${uniqueId}`,
                                                className: "cart-item flex gap-4 group",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "h-24 w-24 rounded-md overflow-hidden bg-muted flex-shrink-0 border",
                                                        children: item.image ? /*#__PURE__*/ _jsxDEV("img", {
                                                            src: item.image,
                                                            alt: item.name,
                                                            className: "h-full w-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 952,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "h-full w-full flex items-center justify-center",
                                                            children: /*#__PURE__*/ _jsxDEV(ShoppingCart, {
                                                                className: "h-8 w-8 text-muted-foreground/30"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 955,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 954,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 950,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "flex-1 flex flex-col justify-between py-1",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "flex justify-between items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxDEV("h4", {
                                                                                className: "font-medium text-sm leading-tight",
                                                                                children: item.name
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 962,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            item.type === 'subscription' && /*#__PURE__*/ _jsxDEV("div", {
                                                                                className: "flex items-center gap-1 mt-1 text-xs text-muted-foreground bg-muted w-fit px-2 py-0.5 rounded-full",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxDEV(RotateCcw, {
                                                                                        className: "h-3 w-3"
                                                                                    }, void 0, false, {
                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                        lineNumber: 965,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    t('billedEvery'),
                                                                                    " ",
                                                                                    item.interval
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 964,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            item.type === 'configurable' && /*#__PURE__*/ _jsxDEV("div", {
                                                                                className: "flex items-center gap-1 mt-1 text-xs text-muted-foreground",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxDEV(Settings2, {
                                                                                        className: "h-3 w-3"
                                                                                    }, void 0, false, {
                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                        lineNumber: 971,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ _jsxDEV("button", {
                                                                                        onClick: ()=>openConfigurator(item),
                                                                                        className: "underline hover:text-primary transition-colors",
                                                                                        children: item.configuration ? t('editConfiguration') : t('configureItem')
                                                                                    }, void 0, false, {
                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                        lineNumber: 972,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 970,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 961,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV(Button, {
                                                                        variant: "ghost",
                                                                        size: "icon",
                                                                        className: "h-6 w-6 text-muted-foreground hover:text-destructive shrink-0 -mr-2 -mt-2",
                                                                        onClick: ()=>removeItem(uniqueId),
                                                                        children: /*#__PURE__*/ _jsxDEV(Trash2, {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 979,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 978,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 960,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "flex items-center justify-between mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: "flex items-center gap-1 bg-muted/50 rounded-md border p-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                                                variant: "ghost",
                                                                                size: "icon",
                                                                                className: "h-7 w-7 rounded-sm",
                                                                                onClick: ()=>updateQuantity(uniqueId, -1),
                                                                                children: /*#__PURE__*/ _jsxDEV(Minus, {
                                                                                    className: "h-3 w-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 985,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 984,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                                className: "text-xs font-medium w-6 text-center",
                                                                                children: item.quantity
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 987,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                                                variant: "ghost",
                                                                                size: "icon",
                                                                                className: "h-7 w-7 rounded-sm",
                                                                                onClick: ()=>updateQuantity(uniqueId, 1),
                                                                                children: /*#__PURE__*/ _jsxDEV(Plus, {
                                                                                    className: "h-3 w-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 989,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 988,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 983,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: "text-right",
                                                                        children: [
                                                                            item.specialPrice !== undefined ? /*#__PURE__*/ _jsxDEV(_Fragment, {
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                                                        className: "text-[10px] line-through text-muted-foreground",
                                                                                        children: formatPrice(item.price * item.quantity)
                                                                                    }, void 0, false, {
                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                        lineNumber: 995,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                                                        className: "font-semibold text-sm text-primary",
                                                                                        children: formatPrice(item.specialPrice * item.quantity)
                                                                                    }, void 0, false, {
                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                        lineNumber: 996,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true) : /*#__PURE__*/ _jsxDEV("p", {
                                                                                className: "font-semibold text-sm",
                                                                                children: formatPrice(item.price * item.quantity)
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 999,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            item.type === 'subscription' && /*#__PURE__*/ _jsxDEV("span", {
                                                                                className: "text-[10px] text-muted-foreground uppercase tracking-wider",
                                                                                children: [
                                                                                    "/",
                                                                                    item.interval
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1001,
                                                                                columnNumber: 66
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 992,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 982,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 959,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, uniqueId, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 949,
                                                columnNumber: 25
                                            }, this);
                                        });
                                    })(),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "pt-6 mt-6 border-t",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h4", {
                                                className: "text-sm font-semibold mb-4",
                                                children: t('frequentlyAdded')
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1012,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "space-y-3",
                                                children: UPSELL_PRODUCTS.map((upsell)=>{
                                                    const inCart = cart.some((item)=>item.id === upsell.id);
                                                    return /*#__PURE__*/ _jsxDEV("div", {
                                                        id: `upsell-item-${upsell.id}`,
                                                        className: "upsell-item flex items-center justify-between p-3 rounded-lg border bg-muted/30",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: "h-10 w-10 rounded-md bg-background border flex items-center justify-center shrink-0",
                                                                        children: upsell.icon
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1019,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                className: "text-sm font-medium leading-none",
                                                                                children: upsell.name
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1023,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                className: "text-xs text-muted-foreground mt-1",
                                                                                children: [
                                                                                    "+",
                                                                                    formatPrice(upsell.price)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1024,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1022,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1018,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                                variant: inCart ? "secondary" : "outline",
                                                                size: "sm",
                                                                className: "h-8 text-xs",
                                                                onClick: ()=>{
                                                                    if (inCart) {
                                                                        setCart(cart.filter((i)=>i.id !== upsell.id));
                                                                    } else {
                                                                        setCart([
                                                                            ...cart,
                                                                            {
                                                                                ...upsell,
                                                                                quantity: 1,
                                                                                image: "",
                                                                                cartItemId: Date.now()
                                                                            }
                                                                        ]);
                                                                    }
                                                                },
                                                                children: inCart ? t('added') : t('add')
                                                            }, void 0, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1027,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, upsell.id, true, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1013,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1011,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 876,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 865,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "/app/src/components/CartOverlay.tsx",
                        lineNumber: 864,
                        columnNumber: 13
                    }, this),
                    !configuringItem && cart.length > 0 && /*#__PURE__*/ _jsxDEV("div", {
                        id: "cart-footer",
                        className: "cart-footer p-4 border-t bg-card space-y-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 relative z-10",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "space-y-3 pb-3 border-b",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "text-sm font-medium",
                                                children: "Cart Actions"
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1054,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                variant: "ghost",
                                                size: "sm",
                                                className: "h-8 text-xs",
                                                onClick: handleShareCart,
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Share2, {
                                                        className: "h-3.5 w-3.5 mr-1.5"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1056,
                                                        columnNumber: 23
                                                    }, this),
                                                    " Share Cart"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1055,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1053,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Input, {
                                                placeholder: t('discountCode'),
                                                value: discountCode,
                                                onChange: (e)=>setDiscountCode(e.target.value),
                                                className: "h-9 text-sm"
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1060,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                variant: "secondary",
                                                className: "h-9",
                                                onClick: applyDiscount,
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Tag, {
                                                        className: "h-4 w-4 mr-1.5"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1067,
                                                        columnNumber: 23
                                                    }, this),
                                                    t('apply')
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1066,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1059,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Textarea, {
                                        placeholder: t('orderNotes'),
                                        value: orderNotes,
                                        onChange: (e)=>setOrderNotes(e.target.value),
                                        className: "min-h-[60px] text-sm resize-none"
                                    }, void 0, false, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1071,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 1052,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "text-muted-foreground",
                                                children: t('subtotal')
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1080,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "font-medium",
                                                children: formatPrice(subtotal)
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1081,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1079,
                                        columnNumber: 19
                                    }, this),
                                    discountApplied > 0 && /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex justify-between text-sm text-primary font-medium",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                children: t('discount')
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1085,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                children: [
                                                    "-",
                                                    formatPrice(discountApplied)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1086,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1084,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "text-muted-foreground",
                                                children: t('shipping')
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1090,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "text-muted-foreground",
                                                children: t('calculatedNext')
                                            }, void 0, false, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1091,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1089,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 1078,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Button, {
                                className: "w-full h-12 text-base font-medium",
                                onClick: ()=>{
                                    const itemToConfigure = cart.find((item)=>item.type === 'configurable' && !item.configuration);
                                    if (itemToConfigure) {
                                        openConfigurator(itemToConfigure);
                                    } else {
                                        setActiveTab("checkout");
                                    }
                                },
                                children: cart.some((item)=>item.type === 'configurable' && !item.configuration) ? t('proceedToOptions') : t('proceedToCheckout')
                            }, void 0, false, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 1094,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/components/CartOverlay.tsx",
                        lineNumber: 1051,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 863,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ _jsxDEV(TabsContent, {
                value: "checkout",
                id: "tab-content-checkout",
                className: "checkout-tab-content flex-1 flex flex-col m-0 data-[state=active]:flex overflow-hidden bg-muted/10",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    id: "checkout-layout",
                    className: "checkout-layout flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            id: "checkout-form-area",
                            className: "checkout-form-area flex-1 md:min-h-screen md:relative order-1",
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                className: "md:absolute md:inset-0 h-full w-full overflow-visible md:overflow-y-auto",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    className: "p-4 md:p-8",
                                    children: /*#__PURE__*/ _jsxDEV("div", {
                                        className: "max-w-xl mx-auto space-y-8 pb-8",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                className: "mb-8 space-y-4",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Progress, {
                                                        value: checkoutStep / 4 * 100,
                                                        className: "h-2"
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1122,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        id: "checkout-wizard-header",
                                                        className: "checkout-wizard-header flex items-center justify-between overflow-x-auto pb-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "flex items-center gap-2 shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: `h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold ${checkoutStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`,
                                                                        children: "1"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1125,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                        className: `text-sm font-medium ${checkoutStep >= 1 ? 'text-foreground' : 'text-muted-foreground'}`,
                                                                        children: "Onboarding"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1126,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1124,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: `h-px w-8 sm:flex-1 mx-2 sm:mx-4 shrink-0 ${checkoutStep >= 2 ? 'bg-primary' : 'bg-border'}`
                                                            }, void 0, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1128,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "flex items-center gap-2 shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: `h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold ${checkoutStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`,
                                                                        children: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1130,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                        className: `text-sm font-medium ${checkoutStep >= 2 ? 'text-foreground' : 'text-muted-foreground'}`,
                                                                        children: "Billing"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1131,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1129,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: `h-px w-8 sm:flex-1 mx-2 sm:mx-4 shrink-0 ${checkoutStep >= 3 ? 'bg-primary' : 'bg-border'}`
                                                            }, void 0, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1133,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "flex items-center gap-2 shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: `h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold ${checkoutStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`,
                                                                        children: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1135,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                        className: `text-sm font-medium ${checkoutStep >= 3 ? 'text-foreground' : 'text-muted-foreground'}`,
                                                                        children: "Shipping"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1136,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1134,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: `h-px w-8 sm:flex-1 mx-2 sm:mx-4 shrink-0 ${checkoutStep >= 4 ? 'bg-primary' : 'bg-border'}`
                                                            }, void 0, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1138,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                className: "flex items-center gap-2 shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: `h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold ${checkoutStep >= 4 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`,
                                                                        children: "4"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1140,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                        className: `text-sm font-medium ${checkoutStep >= 4 ? 'text-foreground' : 'text-muted-foreground'}`,
                                                                        children: "Payment"
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1141,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1139,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1123,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1121,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("form", {
                                                id: "checkout-form",
                                                onSubmit: handleCheckoutSubmit,
                                                className: "checkout-form space-y-8",
                                                children: [
                                                    checkoutStep === 1 && /*#__PURE__*/ _jsxDEV("div", {
                                                        id: "checkout-step-onboarding",
                                                        className: "checkout-step-onboarding space-y-8 animate-in fade-in slide-in-from-right-4 duration-300",
                                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                                    className: "text-xl font-semibold",
                                                                    children: "Tell us about yourself"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1152,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Please complete this onboarding questionnaire to proceed."
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1153,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV(Alert, {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV(AlertCircle, {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1156,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV(AlertTitle, {
                                                                            children: "Why do we need this?"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1157,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV(AlertDescription, {
                                                                            children: [
                                                                                "Your information helps us tailor the experience and ensure your project gets matched with the right team.",
                                                                                /*#__PURE__*/ _jsxDEV(HoverCard, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV(HoverCardTrigger, {
                                                                                            asChild: true,
                                                                                            children: /*#__PURE__*/ _jsxDEV("span", {
                                                                                                className: "underline ml-1 cursor-pointer font-medium",
                                                                                                children: "Learn more"
                                                                                            }, void 0, false, {
                                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                lineNumber: 1162,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1161,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV(HoverCardContent, {
                                                                                            className: "w-80",
                                                                                            children: /*#__PURE__*/ _jsxDEV("div", {
                                                                                                className: "space-y-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsxDEV("h4", {
                                                                                                        className: "text-sm font-semibold",
                                                                                                        children: "Data Privacy"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                        lineNumber: 1166,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                                                                        className: "text-sm text-muted-foreground",
                                                                                                        children: "We never sell your data. This information is strictly used for the onboarding process and is securely stored."
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                        lineNumber: 1167,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                lineNumber: 1165,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1164,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1160,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1158,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1155,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV(Accordion, {
                                                                    type: "multiple",
                                                                    defaultValue: [
                                                                        "personal",
                                                                        "preferences",
                                                                        "survey",
                                                                        "upload"
                                                                    ],
                                                                    className: "w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV(AccordionItem, {
                                                                            value: "personal",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV(AccordionTrigger, {
                                                                                    children: "Professional Information"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1177,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV(AccordionContent, {
                                                                                    className: "space-y-4 pt-4",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "space-y-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            htmlFor: "companyName",
                                                                                                            children: "Company Name"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1181,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(Input, {
                                                                                                            id: "companyName",
                                                                                                            placeholder: "Acme Corp",
                                                                                                            value: checkoutData.companyName,
                                                                                                            onChange: (e)=>setCheckoutData({
                                                                                                                    ...checkoutData,
                                                                                                                    companyName: e.target.value
                                                                                                                })
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1182,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1180,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "space-y-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            htmlFor: "jobTitle",
                                                                                                            children: "Job Title"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1185,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(Input, {
                                                                                                            id: "jobTitle",
                                                                                                            placeholder: "Manager",
                                                                                                            value: checkoutData.jobTitle,
                                                                                                            onChange: (e)=>setCheckoutData({
                                                                                                                    ...checkoutData,
                                                                                                                    jobTitle: e.target.value
                                                                                                                })
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1186,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1184,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1179,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    children: "Industry"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1190,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Select, {
                                                                                                    value: checkoutData.industry,
                                                                                                    onValueChange: (v)=>setCheckoutData({
                                                                                                            ...checkoutData,
                                                                                                            industry: v
                                                                                                        }),
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(SelectTrigger, {
                                                                                                            children: /*#__PURE__*/ _jsxDEV(SelectValue, {
                                                                                                                placeholder: "Select industry"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                lineNumber: 1192,
                                                                                                                columnNumber: 52
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1192,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(SelectContent, {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                    value: "tech",
                                                                                                                    children: "Technology"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1194,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                    value: "health",
                                                                                                                    children: "Healthcare"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1195,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                    value: "finance",
                                                                                                                    children: "Finance"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1196,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                    value: "edu",
                                                                                                                    children: "Education"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1197,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                    value: "other",
                                                                                                                    children: "Other"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1198,
                                                                                                                    columnNumber: 39
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1193,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1191,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1189,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    children: "Company Size"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1203,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(RadioGroup, {
                                                                                                    value: checkoutData.companySize,
                                                                                                    onValueChange: (v)=>setCheckoutData({
                                                                                                            ...checkoutData,
                                                                                                            companySize: v
                                                                                                        }),
                                                                                                    className: "flex flex-wrap gap-4",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                                            className: "flex items-center space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(RadioGroupItem, {
                                                                                                                    value: "1-10",
                                                                                                                    id: "size-1"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1205,
                                                                                                                    columnNumber: 82
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                                    htmlFor: "size-1",
                                                                                                                    children: "1-10"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1205,
                                                                                                                    columnNumber: 125
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1205,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                                            className: "flex items-center space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(RadioGroupItem, {
                                                                                                                    value: "11-50",
                                                                                                                    id: "size-2"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1206,
                                                                                                                    columnNumber: 82
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                                    htmlFor: "size-2",
                                                                                                                    children: "11-50"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1206,
                                                                                                                    columnNumber: 126
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1206,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                                            className: "flex items-center space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(RadioGroupItem, {
                                                                                                                    value: "51-200",
                                                                                                                    id: "size-3"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1207,
                                                                                                                    columnNumber: 82
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                                    htmlFor: "size-3",
                                                                                                                    children: "51-200"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1207,
                                                                                                                    columnNumber: 127
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1207,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                                            className: "flex items-center space-x-2",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(RadioGroupItem, {
                                                                                                                    value: "201+",
                                                                                                                    id: "size-4"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1208,
                                                                                                                    columnNumber: 82
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                                    htmlFor: "size-4",
                                                                                                                    children: "201+"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1208,
                                                                                                                    columnNumber: 125
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1208,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1204,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1202,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1178,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1176,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV(AccordionItem, {
                                                                            value: "preferences",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV(AccordionTrigger, {
                                                                                    children: "Preferences & Notifications"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1216,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV(AccordionContent, {
                                                                                    className: "space-y-6 pt-4",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "flex items-center justify-between border p-4 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "space-y-0.5",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            children: "Newsletter"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1220,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                                                                            className: "text-sm text-muted-foreground",
                                                                                                            children: "Receive weekly updates."
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1221,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1219,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Switch, {
                                                                                                    checked: checkoutData.newsletter,
                                                                                                    onCheckedChange: (c)=>setCheckoutData({
                                                                                                            ...checkoutData,
                                                                                                            newsletter: c
                                                                                                        })
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1223,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1218,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "flex items-center justify-between border p-4 rounded-lg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "space-y-0.5",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            children: "SMS Alerts"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1227,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                                                                            className: "text-sm text-muted-foreground",
                                                                                                            children: "Get delivery notifications via text."
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1228,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1226,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Switch, {
                                                                                                    checked: checkoutData.smsAlerts,
                                                                                                    onCheckedChange: (c)=>setCheckoutData({
                                                                                                            ...checkoutData,
                                                                                                            smsAlerts: c
                                                                                                        })
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1230,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1225,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    children: "Preferred Contact Method"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1233,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(ToggleGroup, {
                                                                                                    type: "single",
                                                                                                    value: checkoutData.preferredContact,
                                                                                                    onValueChange: (v)=>v && setCheckoutData({
                                                                                                            ...checkoutData,
                                                                                                            preferredContact: v
                                                                                                        }),
                                                                                                    className: "justify-start",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(ToggleGroupItem, {
                                                                                                            value: "email",
                                                                                                            "aria-label": "Email",
                                                                                                            children: "Email"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1235,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(ToggleGroupItem, {
                                                                                                            value: "phone",
                                                                                                            "aria-label": "Phone",
                                                                                                            children: "Phone"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1236,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(ToggleGroupItem, {
                                                                                                            value: "slack",
                                                                                                            "aria-label": "Slack",
                                                                                                            children: "Slack"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1237,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1234,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1232,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-3",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    children: "Experience Level (1-100)"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1241,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Slider, {
                                                                                                    value: [
                                                                                                        checkoutData.experienceLevel
                                                                                                    ],
                                                                                                    onValueChange: ([v])=>setCheckoutData({
                                                                                                            ...checkoutData,
                                                                                                            experienceLevel: v
                                                                                                        }),
                                                                                                    max: 100,
                                                                                                    step: 1
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1242,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                                                    className: "text-xs text-right text-muted-foreground",
                                                                                                    children: [
                                                                                                        checkoutData.experienceLevel,
                                                                                                        "%"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1243,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1240,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1217,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1215,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV(AccordionItem, {
                                                                            value: "survey",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV(AccordionTrigger, {
                                                                                    children: "Project & Survey"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1250,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV(AccordionContent, {
                                                                                    className: "space-y-4 pt-4",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    children: "Project Description"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1253,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Textarea, {
                                                                                                    placeholder: "Tell us about your goals...",
                                                                                                    value: checkoutData.projectDescription,
                                                                                                    onChange: (e)=>setCheckoutData({
                                                                                                            ...checkoutData,
                                                                                                            projectDescription: e.target.value
                                                                                                        }),
                                                                                                    className: "min-h-[100px]"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1254,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1252,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "flex items-center gap-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            children: "Desired Start Date"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1258,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(TooltipProvider, {
                                                                                                            children: /*#__PURE__*/ _jsxDEV(Tooltip, {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ _jsxDEV(TooltipTrigger, {
                                                                                                                        asChild: true,
                                                                                                                        children: /*#__PURE__*/ _jsxDEV(Info, {
                                                                                                                            className: "h-4 w-4 text-muted-foreground"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                            lineNumber: 1261,
                                                                                                                            columnNumber: 65
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                        lineNumber: 1261,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ _jsxDEV(TooltipContent, {
                                                                                                                        children: /*#__PURE__*/ _jsxDEV("p", {
                                                                                                                            children: "When do you want to begin?"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                            lineNumber: 1262,
                                                                                                                            columnNumber: 57
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                        lineNumber: 1262,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                lineNumber: 1260,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1259,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1257,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Popover, {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(PopoverTrigger, {
                                                                                                            asChild: true,
                                                                                                            children: /*#__PURE__*/ _jsxDEV(Button, {
                                                                                                                variant: "outline",
                                                                                                                className: "w-full justify-start text-left font-normal",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ _jsxDEV(CalendarIcon, {
                                                                                                                        className: "mr-2 h-4 w-4"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                        lineNumber: 1269,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    checkoutData.startDate ? format(checkoutData.startDate, "PPP") : /*#__PURE__*/ _jsxDEV("span", {
                                                                                                                        children: "Pick a date"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                        lineNumber: 1270,
                                                                                                                        columnNumber: 107
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                lineNumber: 1268,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1267,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(PopoverContent, {
                                                                                                            className: "w-auto p-0",
                                                                                                            children: /*#__PURE__*/ _jsxDEV(Calendar, {
                                                                                                                mode: "single",
                                                                                                                selected: checkoutData.startDate,
                                                                                                                onSelect: (d)=>d && setCheckoutData({
                                                                                                                        ...checkoutData,
                                                                                                                        startDate: d
                                                                                                                    }),
                                                                                                                initialFocus: true
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                lineNumber: 1273,
                                                                                                                columnNumber: 76
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1273,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1266,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1256,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    children: "How did you find us?"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1277,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Select, {
                                                                                                    value: checkoutData.foundUs,
                                                                                                    onValueChange: (v)=>setCheckoutData({
                                                                                                            ...checkoutData,
                                                                                                            foundUs: v
                                                                                                        }),
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(SelectTrigger, {
                                                                                                            children: /*#__PURE__*/ _jsxDEV(SelectValue, {
                                                                                                                placeholder: "Select an option"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                lineNumber: 1279,
                                                                                                                columnNumber: 52
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1279,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(SelectContent, {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                    value: "google",
                                                                                                                    children: "Google"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1281,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                    value: "social",
                                                                                                                    children: "Social Media"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1282,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                    value: "friend",
                                                                                                                    children: "Friend/Colleague"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1283,
                                                                                                                    columnNumber: 39
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1280,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1278,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1276,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    children: "Satisfaction Expectation"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1288,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(RadioGroup, {
                                                                                                    value: checkoutData.surveySatisfaction,
                                                                                                    onValueChange: (v)=>setCheckoutData({
                                                                                                            ...checkoutData,
                                                                                                            surveySatisfaction: v
                                                                                                        }),
                                                                                                    className: "flex justify-between max-w-sm",
                                                                                                    children: [
                                                                                                        1,
                                                                                                        2,
                                                                                                        3,
                                                                                                        4,
                                                                                                        5
                                                                                                    ].map((rating)=>/*#__PURE__*/ _jsxDEV("div", {
                                                                                                            className: "flex flex-col items-center space-y-1",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(RadioGroupItem, {
                                                                                                                    value: rating.toString(),
                                                                                                                    id: `rating-${rating}`
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1292,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                                    htmlFor: `rating-${rating}`,
                                                                                                                    children: rating
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1293,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, rating, true, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1291,
                                                                                                            columnNumber: 39
                                                                                                        }, this))
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1289,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1287,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1251,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1249,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV(AccordionItem, {
                                                                            value: "upload",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV(AccordionTrigger, {
                                                                                    children: "Uploads & Extras"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1303,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV(AccordionContent, {
                                                                                    className: "space-y-4 pt-4",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    children: "Reference Document (Optional)"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1306,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(UploadCloud, {
                                                                                                            className: "h-8 w-8 text-muted-foreground mb-2"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1308,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                                                                            className: "text-sm font-medium",
                                                                                                            children: "Click to upload or drag and drop"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1309,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                                                                            className: "text-xs text-muted-foreground",
                                                                                                            children: "PDF, DOCX, or ZIP (max 10MB)"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1310,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(Input, {
                                                                                                            type: "file",
                                                                                                            className: "hidden",
                                                                                                            onChange: ()=>setCheckoutData({
                                                                                                                    ...checkoutData,
                                                                                                                    fileUploaded: true
                                                                                                                })
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1311,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        checkoutData.fileUploaded && /*#__PURE__*/ _jsxDEV(Badge, {
                                                                                                            variant: "secondary",
                                                                                                            className: "mt-2",
                                                                                                            children: "File selected"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1312,
                                                                                                            columnNumber: 67
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1307,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1305,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "grid grid-cols-2 gap-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "space-y-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            children: "T-Shirt Size (Gift)"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1317,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(Select, {
                                                                                                            value: checkoutData.tshirtSize,
                                                                                                            onValueChange: (v)=>setCheckoutData({
                                                                                                                    ...checkoutData,
                                                                                                                    tshirtSize: v
                                                                                                                }),
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectTrigger, {
                                                                                                                    children: /*#__PURE__*/ _jsxDEV(SelectValue, {
                                                                                                                        placeholder: "Size"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                        lineNumber: 1319,
                                                                                                                        columnNumber: 54
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1319,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(SelectContent, {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                            value: "S",
                                                                                                                            children: "Small"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                            lineNumber: 1321,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                            value: "M",
                                                                                                                            children: "Medium"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                            lineNumber: 1322,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                            value: "L",
                                                                                                                            children: "Large"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                            lineNumber: 1323,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ _jsxDEV(SelectItem, {
                                                                                                                            value: "XL",
                                                                                                                            children: "X-Large"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                            lineNumber: 1324,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1320,
                                                                                                                    columnNumber: 39
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1318,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1316,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                                    className: "space-y-2",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                            children: "Theme Preference"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1329,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ _jsxDEV(ToggleGroup, {
                                                                                                            type: "single",
                                                                                                            value: checkoutData.colorTheme,
                                                                                                            onValueChange: (v)=>v && setCheckoutData({
                                                                                                                    ...checkoutData,
                                                                                                                    colorTheme: v
                                                                                                                }),
                                                                                                            className: "justify-start",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ _jsxDEV(ToggleGroupItem, {
                                                                                                                    value: "light",
                                                                                                                    children: "Light"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1331,
                                                                                                                    columnNumber: 39
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ _jsxDEV(ToggleGroupItem, {
                                                                                                                    value: "dark",
                                                                                                                    children: "Dark"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                                    lineNumber: 1332,
                                                                                                                    columnNumber: 39
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                            lineNumber: 1330,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1328,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1315,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "flex items-center space-x-2 pt-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Checkbox, {
                                                                                                    id: "age-verify",
                                                                                                    checked: checkoutData.ageVerification,
                                                                                                    onCheckedChange: (c)=>setCheckoutData({
                                                                                                            ...checkoutData,
                                                                                                            ageVerification: !!c
                                                                                                        })
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1337,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    htmlFor: "age-verify",
                                                                                                    className: "text-sm font-medium leading-none",
                                                                                                    children: "I verify that I am over 18 years old"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1338,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1336,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1304,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1302,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1174,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 1151,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1150,
                                                        columnNumber: 23
                                                    }, this),
                                                    checkoutStep === 2 && /*#__PURE__*/ _jsxDEV("div", {
                                                        id: "checkout-step-billing",
                                                        className: "checkout-step-billing space-y-6 animate-in fade-in slide-in-from-right-4 duration-300",
                                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                                    className: "text-xl font-semibold",
                                                                    children: "Billing Details"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1351,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    className: "space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                    htmlFor: "email",
                                                                                    children: "Email Address"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1354,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                                                    id: "email",
                                                                                    type: "email",
                                                                                    placeholder: "john@example.com",
                                                                                    value: checkoutData.email,
                                                                                    onChange: (e)=>setCheckoutData({
                                                                                            ...checkoutData,
                                                                                            email: e.target.value
                                                                                        }),
                                                                                    onBlur: ()=>{
                                                                                        if (checkoutData.email && checkoutData.email.includes('@')) {
                                                                                            console.log("Triggering Visual Visitor / Retargeting pixel for:", checkoutData.email);
                                                                                            // Stub for Abandoned Cart recovery hook
                                                                                            fetch('/api/retargeting/identify', {
                                                                                                method: 'POST',
                                                                                                body: JSON.stringify({
                                                                                                    email: checkoutData.email,
                                                                                                    cart
                                                                                                })
                                                                                            }).catch(()=>{});
                                                                                        }
                                                                                    },
                                                                                    required: true
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1355,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1353,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "grid grid-cols-2 gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                            htmlFor: "firstName",
                                                                                            children: "First Name"
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1365,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV(Input, {
                                                                                            id: "firstName",
                                                                                            placeholder: "John",
                                                                                            value: checkoutData.firstName,
                                                                                            onChange: (e)=>setCheckoutData({
                                                                                                    ...checkoutData,
                                                                                                    firstName: e.target.value
                                                                                                }),
                                                                                            required: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1366,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1364,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                            htmlFor: "lastName",
                                                                                            children: "Last Name"
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1369,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV(Input, {
                                                                                            id: "lastName",
                                                                                            placeholder: "Doe",
                                                                                            value: checkoutData.lastName,
                                                                                            onChange: (e)=>setCheckoutData({
                                                                                                    ...checkoutData,
                                                                                                    lastName: e.target.value
                                                                                                }),
                                                                                            required: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1370,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1368,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1363,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                    htmlFor: "address",
                                                                                    children: "Street Address"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1374,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                                                    id: "address",
                                                                                    placeholder: "123 Main St",
                                                                                    value: checkoutData.address,
                                                                                    onChange: (e)=>setCheckoutData({
                                                                                            ...checkoutData,
                                                                                            address: e.target.value
                                                                                        }),
                                                                                    required: true
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1375,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1373,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "grid grid-cols-2 gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                            htmlFor: "city",
                                                                                            children: "City"
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1379,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV(Input, {
                                                                                            id: "city",
                                                                                            placeholder: "New York",
                                                                                            value: checkoutData.city,
                                                                                            onChange: (e)=>setCheckoutData({
                                                                                                    ...checkoutData,
                                                                                                    city: e.target.value
                                                                                                }),
                                                                                            required: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1380,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1378,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                            htmlFor: "zip",
                                                                                            children: "ZIP Code"
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1383,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV(Input, {
                                                                                            id: "zip",
                                                                                            placeholder: "10001",
                                                                                            value: checkoutData.zip,
                                                                                            onChange: (e)=>setCheckoutData({
                                                                                                    ...checkoutData,
                                                                                                    zip: e.target.value
                                                                                                }),
                                                                                            required: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1384,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1382,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1377,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1352,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 1350,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1349,
                                                        columnNumber: 23
                                                    }, this),
                                                    checkoutStep === 3 && /*#__PURE__*/ _jsxDEV("div", {
                                                        id: "checkout-step-shipping",
                                                        className: "checkout-step-shipping space-y-6 animate-in fade-in slide-in-from-right-4 duration-300",
                                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                                    className: "text-xl font-semibold",
                                                                    children: "Shipping Method"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1396,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV(RadioGroup, {
                                                                    value: checkoutData.shippingMethod,
                                                                    onValueChange: (v)=>setCheckoutData({
                                                                            ...checkoutData,
                                                                            shippingMethod: v
                                                                        }),
                                                                    className: "space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "flex items-center justify-between space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-muted/50",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "flex items-center space-x-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV(RadioGroupItem, {
                                                                                            value: "standard",
                                                                                            id: "standard"
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1400,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                            htmlFor: "standard",
                                                                                            className: "font-medium cursor-pointer",
                                                                                            children: "Standard Shipping (3-5 days)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1401,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1399,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV("span", {
                                                                                    className: "text-sm font-medium",
                                                                                    children: "Free"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1403,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1398,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "flex items-center justify-between space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-muted/50",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "flex items-center space-x-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV(RadioGroupItem, {
                                                                                            value: "express",
                                                                                            id: "express"
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1407,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                            htmlFor: "express",
                                                                                            className: "font-medium cursor-pointer",
                                                                                            children: "Express Shipping (1-2 days)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1408,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1406,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV("span", {
                                                                                    className: "text-sm font-medium",
                                                                                    children: "$15.00"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1410,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1405,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1397,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 1395,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1394,
                                                        columnNumber: 23
                                                    }, this),
                                                    checkoutStep === 4 && /*#__PURE__*/ _jsxDEV("div", {
                                                        id: "checkout-step-payment",
                                                        className: "checkout-step-payment space-y-6 animate-in fade-in slide-in-from-right-4 duration-300",
                                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                                    className: "text-xl font-semibold",
                                                                    children: "Payment"
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1421,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    className: "rounded-lg border bg-card p-6 space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "flex items-center gap-2 text-sm font-medium mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV(CreditCard, {
                                                                                    className: "h-5 w-5 text-primary"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1424,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                "Secured Credit Card"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1423,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            className: "space-y-4",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV(Label, {
                                                                                            children: "Card Number"
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1429,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV(Input, {
                                                                                            placeholder: "**** **** **** 4242"
                                                                                        }, void 0, false, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1430,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1428,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    className: "grid grid-cols-2 gap-4",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    children: "Expiry Date"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1434,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                                                                    placeholder: "MM/YY"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1435,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1433,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                                            className: "space-y-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxDEV(Label, {
                                                                                                    children: "CVC"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1438,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ _jsxDEV(Input, {
                                                                                                    placeholder: "123"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                                    lineNumber: 1439,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                                            lineNumber: 1437,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1432,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1427,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1422,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 1420,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1419,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1146,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1118,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 1117,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 1116,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 1115,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            id: "checkout-summary-sidebar",
                            className: "checkout-summary-sidebar w-full md:w-80 md:h-[93vh] bg-card border-t md:border-t-0 md:border-l p-4 md:p-6 flex flex-col shrink-0 order-2",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    id: "order-summary-title",
                                    className: "order-summary-title font-semibold text-lg mb-4",
                                    children: t('orderSummary')
                                }, void 0, false, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 1455,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex-1 md:overflow-y-auto -mx-4 md:-mx-6 px-4 md:px-6 mb-4 max-h-[35vh] md:max-h-none overflow-y-auto",
                                    children: /*#__PURE__*/ _jsxDEV("div", {
                                        className: "space-y-4 pb-4",
                                        children: cart.map((item)=>/*#__PURE__*/ _jsxDEV("div", {
                                                id: `summary-item-${item.cartItemId || item.id}`,
                                                className: "summary-item flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                className: "text-muted-foreground",
                                                                children: [
                                                                    item.quantity,
                                                                    "x"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1461,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                className: "line-clamp-1",
                                                                children: [
                                                                    item.name,
                                                                    " ",
                                                                    item.groupId && /*#__PURE__*/ _jsxDEV(Badge, {
                                                                        variant: "secondary",
                                                                        className: "ml-1 text-[8px] h-4 px-1",
                                                                        children: t('bundle')
                                                                    }, void 0, false, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1462,
                                                                        columnNumber: 87
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1462,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1460,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "font-medium whitespace-nowrap",
                                                        children: item.specialPrice !== undefined ? formatPrice(item.specialPrice * item.quantity) : formatPrice(item.price * item.quantity)
                                                    }, void 0, false, {
                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                        lineNumber: 1464,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, item.cartItemId || item.id, true, {
                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                lineNumber: 1459,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1457,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 1456,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    id: "checkout-summary-totals",
                                    className: "checkout-summary-totals space-y-3 pt-4 border-t",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "text-muted-foreground",
                                                    children: t('subtotal')
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1474,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    children: formatPrice(subtotal)
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1475,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 1473,
                                            columnNumber: 19
                                        }, this),
                                        discountApplied > 0 && /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex justify-between text-sm text-primary",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    children: t('discount')
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1479,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    children: [
                                                        "-",
                                                        formatPrice(discountApplied)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1480,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 1478,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "text-muted-foreground",
                                                    children: t('shipping')
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1484,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    children: checkoutStep >= 3 ? formatPrice(shippingCost) : t('calculated')
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1485,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 1483,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    className: "text-muted-foreground",
                                                    children: t('taxes')
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1488,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    children: formatPrice(taxes)
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1489,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 1487,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex justify-between font-semibold text-lg pt-2 border-t",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    children: t('total')
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1492,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    children: formatPrice(total)
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1493,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 1491,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 1472,
                                    columnNumber: 17
                                }, this),
                                checkoutStep === 4 && /*#__PURE__*/ _jsxDEV("div", {
                                    className: "mt-6 flex items-start space-x-2 bg-muted/50 p-3 rounded-md border",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Checkbox, {
                                            id: "terms",
                                            checked: tosAccepted,
                                            onCheckedChange: (c)=>setTosAccepted(!!c),
                                            className: "mt-0.5"
                                        }, void 0, false, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 1499,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("label", {
                                            htmlFor: "terms",
                                            className: "text-xs font-medium leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                            children: [
                                                "I agree to the ",
                                                /*#__PURE__*/ _jsxDEV(Dialog, {
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(DialogTrigger, {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ _jsxDEV("button", {
                                                                type: "button",
                                                                className: "underline text-primary",
                                                                children: "Terms of Service"
                                                            }, void 0, false, {
                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                lineNumber: 1508,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 1507,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV(DialogContent, {
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(DialogHeader, {
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV(DialogTitle, {
                                                                            children: "Terms of Service"
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1512,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV(DialogDescription, {
                                                                            children: "Please read our terms of service carefully before proceeding."
                                                                        }, void 0, false, {
                                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                                            lineNumber: 1513,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1511,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV(ScrollArea, {
                                                                    className: "h-[400px] w-full rounded-md border p-4",
                                                                    children: /*#__PURE__*/ _jsxDEV("div", {
                                                                        className: "space-y-4 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                children: /*#__PURE__*/ _jsxDEV("strong", {
                                                                                    children: "1. Acceptance of Terms"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1519,
                                                                                    columnNumber: 34
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1519,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                children: "By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement."
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1520,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                children: /*#__PURE__*/ _jsxDEV("strong", {
                                                                                    children: "2. Use License"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1521,
                                                                                    columnNumber: 34
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1521,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                children: "Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only."
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1522,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                children: /*#__PURE__*/ _jsxDEV("strong", {
                                                                                    children: "3. Disclaimer"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1523,
                                                                                    columnNumber: 34
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1523,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                children: "The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties."
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1524,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                children: /*#__PURE__*/ _jsxDEV("strong", {
                                                                                    children: "4. Limitations"
                                                                                }, void 0, false, {
                                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                                    lineNumber: 1525,
                                                                                    columnNumber: 34
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1525,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                children: "In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on our website."
                                                                            }, void 0, false, {
                                                                                fileName: "/app/src/components/CartOverlay.tsx",
                                                                                lineNumber: 1526,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/app/src/components/CartOverlay.tsx",
                                                                        lineNumber: 1518,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                                    lineNumber: 1517,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/app/src/components/CartOverlay.tsx",
                                                            lineNumber: 1510,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/app/src/components/CartOverlay.tsx",
                                                    lineNumber: 1506,
                                                    columnNumber: 38
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 1505,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 1498,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "mt-6 flex gap-3",
                                    children: [
                                        checkoutStep > 1 && /*#__PURE__*/ _jsxDEV(Button, {
                                            type: "button",
                                            variant: "outline",
                                            onClick: ()=>setCheckoutStep(checkoutStep - 1),
                                            children: t('back')
                                        }, void 0, false, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 1537,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Button, {
                                            type: "submit",
                                            form: "checkout-form",
                                            className: "flex-1",
                                            disabled: checkoutStep === 4 && !tosAccepted,
                                            children: checkoutStep < 4 ? t('continue') : `${t('pay')} ${formatPrice(total)}`
                                        }, void 0, false, {
                                            fileName: "/app/src/components/CartOverlay.tsx",
                                            lineNumber: 1541,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 1535,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 1454,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/src/components/CartOverlay.tsx",
                    lineNumber: 1113,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 1112,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ _jsxDEV(TabsContent, {
                value: "overview",
                id: "tab-content-overview",
                className: "overview-tab-content flex-1 flex flex-col m-0 data-[state=active]:flex overflow-hidden bg-muted/10",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    id: "overview-content-container",
                    className: "overview-content-container flex-1 min-h-0 relative max-h-[70vh] overflow-y-auto",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "mb-6 text-center space-y-2",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        className: "font-semibold text-xl tracking-tight",
                                        children: "Your Cart Overview"
                                    }, void 0, false, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1559,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Discover more about the items you've selected."
                                    }, void 0, false, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1560,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 1558,
                                columnNumber: 17
                            }, this),
                            cart.length === 0 ? /*#__PURE__*/ _jsxDEV("div", {
                                className: "text-center py-12",
                                children: /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-muted-foreground",
                                    children: "Your cart is empty. Add some items to see their overview!"
                                }, void 0, false, {
                                    fileName: "/app/src/components/CartOverlay.tsx",
                                    lineNumber: 1565,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 1564,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ _jsxDEV("div", {
                                className: "space-y-2",
                                children: cart.map((item)=>/*#__PURE__*/ _jsxDEV(CartItemReview, {
                                        item: item
                                    }, item.cartItemId || item.id, false, {
                                        fileName: "/app/src/components/CartOverlay.tsx",
                                        lineNumber: 1570,
                                        columnNumber: 23
                                    }, this))
                            }, void 0, false, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 1568,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/app/src/components/CartOverlay.tsx",
                        lineNumber: 1557,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/components/CartOverlay.tsx",
                    lineNumber: 1556,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 1555,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "/app/src/components/CartOverlay.tsx",
        lineNumber: 853,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ _jsxDEV(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxDEV(Button, {
                variant: "outline",
                size: "icon",
                className: "relative h-10 w-10 rounded-full",
                onClick: ()=>{
                    setPresentationMode('sheet');
                    setIsOpen(true);
                    setActiveTab("cart");
                },
                children: [
                    /*#__PURE__*/ _jsxDEV(ShoppingCart, {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "/app/src/components/CartOverlay.tsx",
                        lineNumber: 1587,
                        columnNumber: 9
                    }, this),
                    totalItems > 0 && /*#__PURE__*/ _jsxDEV(Badge, {
                        className: "absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-0 text-[10px]",
                        children: totalItems
                    }, void 0, false, {
                        fileName: "/app/src/components/CartOverlay.tsx",
                        lineNumber: 1589,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 1582,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(Sheet, {
                open: isOpen && presentationMode === 'sheet',
                onOpenChange: setIsOpen,
                children: /*#__PURE__*/ _jsxDEV(SheetContent, {
                    id: "cart-overlay-sheet",
                    className: `cart-overlay-sheet w-full p-0 flex flex-col gap-0 border-l transition-all duration-300 ${activeTab === 'checkout' ? 'sm:max-w-[70vw]' : 'sm:max-w-md'}`,
                    children: [
                        /*#__PURE__*/ _jsxDEV(SheetHeader, {
                            className: "sr-only",
                            children: /*#__PURE__*/ _jsxDEV(SheetTitle, {
                                children: "HyperCart Overlay"
                            }, void 0, false, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 1598,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 1597,
                            columnNumber: 11
                        }, this),
                        cartContent
                    ]
                }, void 0, true, {
                    fileName: "/app/src/components/CartOverlay.tsx",
                    lineNumber: 1596,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 1595,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(Dialog, {
                open: isOpen && presentationMode === 'modal',
                onOpenChange: setIsOpen,
                children: /*#__PURE__*/ _jsxDEV(DialogContent, {
                    className: `p-0 flex flex-col gap-0 overflow-hidden ${activeTab === 'checkout' ? 'sm:max-w-[70vw] h-[90vh]' : 'sm:max-w-2xl h-[80vh]'}`,
                    children: [
                        /*#__PURE__*/ _jsxDEV(DialogHeader, {
                            className: "sr-only",
                            children: /*#__PURE__*/ _jsxDEV(DialogTitle, {
                                children: "HyperCart Modal"
                            }, void 0, false, {
                                fileName: "/app/src/components/CartOverlay.tsx",
                                lineNumber: 1607,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/components/CartOverlay.tsx",
                            lineNumber: 1606,
                            columnNumber: 11
                        }, this),
                        cartContent
                    ]
                }, void 0, true, {
                    fileName: "/app/src/components/CartOverlay.tsx",
                    lineNumber: 1605,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 1604,
                columnNumber: 7
            }, this),
            presentationMode === 'inline' && inlineTarget && document.querySelector(inlineTarget) && /*#__PURE__*/ createPortal(/*#__PURE__*/ _jsxDEV("div", {
                className: "hyper-cart-inline w-full border rounded-xl overflow-hidden bg-background shadow-sm flex flex-col h-[800px] max-h-[90vh]",
                children: cartContent
            }, void 0, false, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 1614,
                columnNumber: 9
            }, this), document.querySelector(inlineTarget)),
            presentationMode === 'card-overlay' && inlineTarget && document.querySelector(inlineTarget) && configuringItem && /*#__PURE__*/ createPortal(/*#__PURE__*/ _jsxDEV("div", {
                className: "absolute inset-0 z-20 bg-card flex flex-col rounded-xl overflow-hidden",
                children: renderConfigurator()
            }, void 0, false, {
                fileName: "/app/src/components/CartOverlay.tsx",
                lineNumber: 1621,
                columnNumber: 9
            }, this), document.querySelector(inlineTarget))
        ]
    }, void 0, true);
}
_s1(CartOverlay, "bdPMJ4BbvEIqZmVsT8lRQoGN1iQ=");
_c1 = CartOverlay;
var _c, _c1;
$RefreshReg$(_c, "CartItemReview");
$RefreshReg$(_c1, "CartOverlay");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/CartOverlay.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/CartOverlay.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhcnRPdmVybGF5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBTaGVldCwgU2hlZXRDb250ZW50LCBTaGVldEhlYWRlciwgU2hlZXRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2hlZXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xuaW1wb3J0IHsgVGFicywgVGFic0NvbnRlbnQsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFic1wiO1xuaW1wb3J0IHsgU2Nyb2xsQXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2Nyb2xsLWFyZWFcIjtcbmltcG9ydCB7IFNob3BwaW5nQ2FydCwgUGx1cywgTWludXMsIFRyYXNoMiwgU2VuZCwgTWVzc2FnZUNpcmNsZSwgQ3JlZGl0Q2FyZCwgU2hpZWxkQ2hlY2ssIEdpZnQsIEFycm93UmlnaHQsIEFycm93TGVmdCwgU2V0dGluZ3MyLCBSb3RhdGVDY3csIFNoYXJlMiwgVGFnIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jaGVja2JveFwiO1xuaW1wb3J0IHsgU2VsZWN0LCBTZWxlY3RDb250ZW50LCBTZWxlY3RJdGVtLCBTZWxlY3RUcmlnZ2VyLCBTZWxlY3RWYWx1ZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2VsZWN0XCI7XG5pbXBvcnQgeyBSYWRpb0dyb3VwLCBSYWRpb0dyb3VwSXRlbSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvcmFkaW8tZ3JvdXBcIjtcbmltcG9ydCB7IERpYWxvZywgRGlhbG9nQ29udGVudCwgRGlhbG9nRGVzY3JpcHRpb24sIERpYWxvZ0hlYWRlciwgRGlhbG9nVGl0bGUsIERpYWxvZ1RyaWdnZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zd2l0Y2hcIjtcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2xpZGVyXCI7XG5pbXBvcnQgeyBBY2NvcmRpb24sIEFjY29yZGlvbkNvbnRlbnQsIEFjY29yZGlvbkl0ZW0sIEFjY29yZGlvblRyaWdnZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2FjY29yZGlvblwiO1xuaW1wb3J0IHsgVG9nZ2xlR3JvdXAsIFRvZ2dsZUdyb3VwSXRlbSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9nZ2xlLWdyb3VwXCI7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FsZW5kYXJcIjtcbmltcG9ydCB7IFBvcG92ZXIsIFBvcG92ZXJDb250ZW50LCBQb3BvdmVyVHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvcG9wb3ZlclwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBDYWxlbmRhciBhcyBDYWxlbmRhckljb24sIFVwbG9hZENsb3VkLCBJbmZvLCBBbGVydENpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAsIFRvb2x0aXBDb250ZW50LCBUb29sdGlwUHJvdmlkZXIsIFRvb2x0aXBUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b29sdGlwXCI7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvcHJvZ3Jlc3NcIjtcbmltcG9ydCB7IEFsZXJ0LCBBbGVydERlc2NyaXB0aW9uLCBBbGVydFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hbGVydFwiO1xuaW1wb3J0IHsgSG92ZXJDYXJkLCBIb3ZlckNhcmRDb250ZW50LCBIb3ZlckNhcmRUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9ob3Zlci1jYXJkXCI7XG5cbi8vIFN0dWJiZWQgRGF0YVxuY29uc3QgaW5pdGlhbENhcnQgPSBbXG4gIHsgaWQ6IDEwMSwgbmFtZTogXCJFcmdvbm9taWMgTWVjaGFuaWNhbCBLZXlib2FyZFwiLCBwcmljZTogMTQ5Ljk5LCBxdWFudGl0eTogMSwgaW1hZ2U6IFwiaHR0cHM6Ly92aWJlLmZpbGVzYWZlLnNwYWNlLzE3ODA4NDU4Mzc4NTA0MDExMTUvYXNzZXRzLzZlODExYmYyLWYwODQtNGI1Ni04YTc4LWVhNzFkOGM3Yzk1Ny5qcGdcIiwgdHlwZTogXCJjb25maWd1cmFibGVcIiwgY29uZmlndXJhdGlvbjogeyBzd2l0Y2hlczogXCJMaW5lYXIgKFJlZClcIiwga2V5Y2FwczogXCJEYXJrIE1hdHRlclwiIH0sIGNvbmZpZ0Zsb3c6IFsgeyBrZXk6IFwic3dpdGNoZXNcIiwgc3RlcDogXCJTd2l0Y2ggVHlwZVwiLCB0eXBlOiBcInNlbGVjdFwiLCBvcHRpb25zOiBbXCJMaW5lYXIgKFJlZClcIiwgXCJUYWN0aWxlIChCcm93bilcIiwgXCJDbGlja3kgKEJsdWUpXCJdIH0sIHsga2V5OiBcImtleWNhcHNcIiwgc3RlcDogXCJLZXljYXAgQ29sb3JcIiwgdHlwZTogXCJyYWRpb1wiLCBvcHRpb25zOiBbXCJEYXJrIE1hdHRlclwiLCBcIkFyY3RpYyBXaGl0ZVwiLCBcIlJldHJvIEdyZXlcIl0gfSBdLCByZXZpZXdDb250ZW50OiBcIlRoaXMga2V5Ym9hcmQgaGFzIGJlZW4gcmF0ZWQgNSBzdGFycyBieSBvdmVyIDEwLDAwMCBjdXN0b21lcnMuIEl0IGZlYXR1cmVzIGhvdC1zd2FwcGFibGUgc3dpdGNoZXMgYW5kIGEgc29saWQgYWx1bWludW0gZnJhbWUuXCIsIHBhZ2VTZWxlY3RvcjogXCIja2V5Ym9hcmQtc3BlY3NcIiB9LFxuICB7IGlkOiAxMDIsIG5hbWU6IFwiQ29mZmVlIEJlYW5zIFN1YnNjcmlwdGlvblwiLCBwcmljZTogMTkuMDAsIHF1YW50aXR5OiAxLCBpbWFnZTogXCJodHRwczovL3ZpYmUuZmlsZXNhZmUuc3BhY2UvMTc4MDg0NTgzNzg1MDQwMTExNS9hc3NldHMvOTQ3NWVjYzgtNjI2Yi00NWRhLWJhOTctNjcwMjE1YjU1OTM1LmpwZ1wiLCB0eXBlOiBcInN1YnNjcmlwdGlvblwiLCBpbnRlcnZhbDogXCJtb250aFwiLCByZXZpZXdDb250ZW50OiBcIk91ciBiZWFucyBhcmUgZXRoaWNhbGx5IHNvdXJjZWQgZnJvbSBzaW5nbGUtb3JpZ2luIGZhcm1zIGluIENvbG9tYmlhIGFuZCBFdGhpb3BpYS5cIiwgcmV2aWV3VXJsOiBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xXCIgfSxcbl07XG5cbmNvbnN0IFVQU0VMTF9QUk9EVUNUUyA9IFtcbiAgeyBpZDogOTAxLCBuYW1lOiBcIkV4dGVuZGVkIDItWWVhciBXYXJyYW50eVwiLCBwcmljZTogMjkuOTksIGljb246IDxTaGllbGRDaGVjayBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+IH0sXG4gIHsgaWQ6IDkwMiwgbmFtZTogXCJQcmVtaXVtIEdpZnQgUGFja2FnaW5nXCIsIHByaWNlOiA5Ljk5LCBpY29uOiA8R2lmdCBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+IH1cbl07XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdDogYW55KSA9PiB7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWRkLXRvLWNhcnQnLCB7IGRldGFpbDogcHJvZHVjdCB9KSk7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb3Blbi1jYXJ0JykpO1xufTtcblxuZnVuY3Rpb24gQ2FydEl0ZW1SZXZpZXcoeyBpdGVtIH06IHsgaXRlbTogYW55IH0pIHtcbiAgY29uc3QgW2FqYXhDb250ZW50LCBzZXRBamF4Q29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3BhZ2VDb250ZW50LCBzZXRQYWdlQ29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpdGVtLnJldmlld1VybCkge1xuICAgICAgZmV0Y2goaXRlbS5yZXZpZXdVcmwpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAvLyBNb2NrIGhhbmRsaW5nIG9mIEpTT04gcmVzcG9uc2UgdG8gc3RyaW5nXG4gICAgICAgICAgc2V0QWpheENvbnRlbnQoZGF0YS5ib2R5IHx8IEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHJldmlldyBjb250ZW50XCIsIGVycikpO1xuICAgIH1cbiAgfSwgW2l0ZW0ucmV2aWV3VXJsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXRlbS5wYWdlU2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpdGVtLnBhZ2VTZWxlY3Rvcik7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgc2V0UGFnZUNvbnRlbnQoZWwuaW5uZXJIVE1MKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpdGVtLnBhZ2VTZWxlY3Rvcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWItOCBwYi04IGJvcmRlci1iIGxhc3Q6Ym9yZGVyLTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IHctMTYgcm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW4gYmctbXV0ZWQgZmxleC1zaHJpbmstMCBib3JkZXJcIj5cbiAgICAgICAgICB7aXRlbS5pbWFnZSA/IChcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8U2hvcHBpbmdDYXJ0IGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kLzMwIG0tYXV0byBtdC01XCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnXCI+e2l0ZW0ubmFtZX08L2g0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+UHJvZHVjdCBPdmVydmlldyAmIERldGFpbHM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIHtpdGVtLnJldmlld0NvbnRlbnQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW11dGVkLzMwIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWRcIj57aXRlbS5yZXZpZXdDb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7cGFnZUNvbnRlbnQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNhcmQgYm9yZGVyIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1zbVwiPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwYWdlQ29udGVudCB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHthamF4Q29udGVudCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS81IGJvcmRlciBib3JkZXItcHJpbWFyeS8yMCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1wcmltYXJ5IG1iLTJcIj5MaXZlIERhdGE8L2g1PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gaXRhbGljIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnthamF4Q29udGVudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIFxuICAgICAgeyFpdGVtLnJldmlld0NvbnRlbnQgJiYgIXBhZ2VDb250ZW50ICYmICFhamF4Q29udGVudCAmJiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGl0YWxpY1wiPk5vIGFkZGl0aW9uYWwgb3ZlcnZpZXcgY29udGVudCBhdmFpbGFibGUgZm9yIHRoaXMgaXRlbS48L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FydE92ZXJsYXkoKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcmVzZW50YXRpb25Nb2RlLCBzZXRQcmVzZW50YXRpb25Nb2RlXSA9IHVzZVN0YXRlPCdzaGVldCcgfCAnbW9kYWwnIHwgJ2lubGluZScgfCAnY2FyZC1vdmVybGF5Jz4oJ3NoZWV0Jyk7XG4gIGNvbnN0IFtpbmxpbmVUYXJnZXQsIHNldElubGluZVRhcmdldF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKFwiY2FydFwiKTtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGU8YW55W10+KGluaXRpYWxDYXJ0KTtcbiAgY29uc3QgW2NvbmZpZ3VyaW5nSXRlbSwgc2V0Q29uZmlndXJpbmdJdGVtXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY29uZmlnVmlld01vZGUsIHNldENvbmZpZ1ZpZXdNb2RlXSA9IHVzZVN0YXRlPCd3aXphcmQnIHwgJ3N1bW1hcnknPignd2l6YXJkJyk7XG4gIGNvbnN0IFtjb25maWdTdGVwSW5kZXgsIHNldENvbmZpZ1N0ZXBJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NvbmZpZ0xvYWRpbmcsIHNldENvbmZpZ0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29uZmlnRXJyb3IsIHNldENvbmZpZ0Vycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29uZmlnUmVzcG9uc2UsIHNldENvbmZpZ1Jlc3BvbnNlXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IFtkaXNjb3VudENvZGUsIHNldERpc2NvdW50Q29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rpc2NvdW50QXBwbGllZCwgc2V0RGlzY291bnRBcHBsaWVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbb3JkZXJOb3Rlcywgc2V0T3JkZXJOb3Rlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgXG4gIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGUoe1xuICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICBjdXJyZW5jeVN5bWJvbDogJyQnLFxuICAgIHN0cmluZ3M6IHtcbiAgICAgIGNhcnQ6IFwiQ2FydFwiLFxuICAgICAgY2hlY2tvdXQ6IFwiQ2hlY2tvdXRcIixcbiAgICAgIG92ZXJ2aWV3OiBcIk92ZXJ2aWV3XCIsXG4gICAgICBlbXB0eUNhcnRUaXRsZTogXCJZb3VyIGNhcnQgaXMgZW1wdHlcIixcbiAgICAgIGVtcHR5Q2FydERlc2M6IFwiTG9va3MgbGlrZSB5b3UgaGF2ZW4ndCBhZGRlZCBhbnl0aGluZyB0byB5b3VyIGNhcnQgeWV0LlwiLFxuICAgICAgY29udGludWVTaG9wcGluZzogXCJDb250aW51ZSBTaG9wcGluZ1wiLFxuICAgICAgcHJvY2VlZFRvQ2hlY2tvdXQ6IFwiUHJvY2VlZCB0byBDaGVja291dFwiLFxuICAgICAgcHJvY2VlZFRvT3B0aW9uczogXCJQcm9jZWVkIHRvIE9wdGlvbnNcIixcbiAgICAgIG9yZGVyU3VtbWFyeTogXCJPcmRlciBTdW1tYXJ5XCIsXG4gICAgICBzdWJ0b3RhbDogXCJTdWJ0b3RhbFwiLFxuICAgICAgc2hpcHBpbmc6IFwiU2hpcHBpbmdcIixcbiAgICAgIHRheGVzOiBcIlRheGVzXCIsXG4gICAgICB0b3RhbDogXCJUb3RhbFwiLFxuICAgICAgcGF5OiBcIlBheVwiLFxuICAgICAgYmFjazogXCJCYWNrXCIsXG4gICAgICBjb250aW51ZTogXCJDb250aW51ZVwiLFxuICAgICAgZnJlcXVlbnRseUFkZGVkOiBcIkZyZXF1ZW50bHkgQWRkZWQgVG9nZXRoZXJcIixcbiAgICAgIGFkZDogXCJBZGRcIixcbiAgICAgIGFkZGVkOiBcIkFkZGVkXCIsXG4gICAgICBxdHk6IFwiUXR5XCIsXG4gICAgICBsb2NrZWQ6IFwiTG9ja2VkXCIsXG4gICAgICBidW5kbGU6IFwiQnVuZGxlXCIsXG4gICAgICBzcGVjaWFsQnVuZGxlOiBcIlNwZWNpYWwgQnVuZGxlXCIsXG4gICAgICBlZGl0Q29uZmlndXJhdGlvbjogXCJFZGl0IENvbmZpZ3VyYXRpb25cIixcbiAgICAgIGNvbmZpZ3VyZUl0ZW06IFwiQ29uZmlndXJlIEl0ZW1cIixcbiAgICAgIGJpbGxlZEV2ZXJ5OiBcIkJpbGxlZCBldmVyeVwiLFxuICAgICAgY2FsY3VsYXRlZE5leHQ6IFwiQ2FsY3VsYXRlZCBuZXh0XCIsXG4gICAgICBjYWxjdWxhdGVkOiBcIkNhbGN1bGF0ZWRcIixcbiAgICAgIGRpc2NvdW50Q29kZTogXCJEaXNjb3VudCBDb2RlXCIsXG4gICAgICBhcHBseTogXCJBcHBseVwiLFxuICAgICAgb3JkZXJOb3RlczogXCJPcmRlciBOb3RlcyAoT3B0aW9uYWwpXCIsXG4gICAgICBkaXNjb3VudDogXCJEaXNjb3VudFwiXG4gICAgfVxuICB9KTtcblxuICBjb25zdCB0ID0gKGtleToga2V5b2YgdHlwZW9mIHNldHRpbmdzLnN0cmluZ3MpID0+IHNldHRpbmdzLnN0cmluZ3Nba2V5XSB8fCBrZXk7XG4gIGNvbnN0IGZvcm1hdFByaWNlID0gKHByaWNlOiBudW1iZXIpID0+IGAke3NldHRpbmdzLmN1cnJlbmN5U3ltYm9sfSR7cHJpY2UudG9GaXhlZCgyKX1gO1xuXG4gIGNvbnN0IG9wZW5Db25maWd1cmF0b3IgPSAoaXRlbTogYW55KSA9PiB7XG4gICAgc2V0Q29uZmlndXJpbmdJdGVtKGl0ZW0pO1xuICAgIGlmIChpdGVtLmNvbmZpZ3VyYXRpb24pIHtcbiAgICAgIHNldENvbmZpZ1ZpZXdNb2RlKCdzdW1tYXJ5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENvbmZpZ1ZpZXdNb2RlKCd3aXphcmQnKTtcbiAgICAgIHNldENvbmZpZ1N0ZXBJbmRleCgwKTtcbiAgICB9XG4gICAgc2V0Q29uZmlnRXJyb3IoXCJcIik7XG4gICAgc2V0Q29uZmlnUmVzcG9uc2UobnVsbCk7XG4gIH07XG4gIFxuICAvLyBDaGVja291dCBXaXphcmQgU3RhdGVcbiAgY29uc3QgW2NoZWNrb3V0U3RlcCwgc2V0Q2hlY2tvdXRTdGVwXSA9IHVzZVN0YXRlKDEpOyAvLyAxOiBCaWxsaW5nLCAyOiBTaGlwcGluZywgMzogUGF5bWVudFxuICBjb25zdCBbdG9zQWNjZXB0ZWQsIHNldFRvc0FjY2VwdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NoZWNrb3V0RGF0YSwgc2V0Q2hlY2tvdXREYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogXCJcIixcbiAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgbGFzdE5hbWU6IFwiXCIsXG4gICAgYWRkcmVzczogXCJcIixcbiAgICBjaXR5OiBcIlwiLFxuICAgIHppcDogXCJcIixcbiAgICBzaGlwcGluZ01ldGhvZDogXCJzdGFuZGFyZFwiLFxuICAgIC8vIE9uYm9hcmRpbmcgYWRkaXRpb25hbCBmaWVsZHNcbiAgICBjb21wYW55TmFtZTogXCJcIixcbiAgICBqb2JUaXRsZTogXCJcIixcbiAgICBpbmR1c3RyeTogXCJcIixcbiAgICBjb21wYW55U2l6ZTogXCIxLTEwXCIsXG4gICAgZXhwZXJpZW5jZUxldmVsOiA1MCxcbiAgICBuZXdzbGV0dGVyOiBmYWxzZSxcbiAgICBtYXJrZXRpbmdFbWFpbHM6IHRydWUsXG4gICAgc21zQWxlcnRzOiBmYWxzZSxcbiAgICBwcmVmZXJyZWRDb250YWN0OiBcImVtYWlsXCIsXG4gICAgZm91bmRVczogXCJcIixcbiAgICBwcm9qZWN0RGVzY3JpcHRpb246IFwiXCIsXG4gICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgpLFxuICAgIHRlYW1NZW1iZXJzOiBbXSxcbiAgICBidWRnZXQ6IFwiNWstMTBrXCIsXG4gICAgdXJnZW5jeTogXCJtZWRpdW1cIixcbiAgICBjb2xvclRoZW1lOiBcImRhcmtcIixcbiAgICBwcmltYXJ5R29hbDogXCJcIixcbiAgICBmaWxlVXBsb2FkZWQ6IGZhbHNlLFxuICAgIHJlZmVycmFsQ29kZTogXCJcIixcbiAgICBzdXJ2ZXlTYXRpc2ZhY3Rpb246IFwiNVwiLFxuICAgIHN1cnZleUZlZWRiYWNrOiBcIlwiLFxuICAgIGRpZXRhcnlSZXN0cmljdGlvbnM6IFtdLFxuICAgIHRzaGlydFNpemU6IFwiTFwiLFxuICAgIGdpZnRXcmFwOiBmYWxzZSxcbiAgICBzcGVjaWFsSW5zdHJ1Y3Rpb25zOiBcIlwiLFxuICAgIGFncmVlZFRvUG9saWNpZXM6IGZhbHNlLFxuICAgIGFnZVZlcmlmaWNhdGlvbjogZmFsc2VcbiAgfSk7XG4gIFxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGNvbnN0IGJ1bmRsZURhdGEgPSBwYXJhbXMuZ2V0KCdoYy1idW5kbGUnKTtcbiAgICBpZiAoYnVuZGxlRGF0YSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGF0b2IoYnVuZGxlRGF0YSkpO1xuICAgICAgICAvLyBTbWFsbCBkZWxheSB0byBlbnN1cmUgbGlzdGVuZXJzIGFyZSByZWFkeVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FkZC10by1jYXJ0LWdyb3VwJywgeyBkZXRhaWw6IHsgaXRlbXMgfSB9KSk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIGNvbnN0IG5ld1VybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgbmV3VXJsKTtcbiAgICAgIH0gY2F0Y2goZXJyKSB7IGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaGMtYnVuZGxlXCIsIGVycik7IH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGFyZWRDYXJ0RGF0YSA9IHBhcmFtcy5nZXQoJ2hjLXNoYXJlZC1jYXJ0Jyk7XG4gICAgaWYgKHNoYXJlZENhcnREYXRhKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2UoYXRvYihzaGFyZWRDYXJ0RGF0YSkpO1xuICAgICAgICBzZXRDYXJ0KGl0ZW1zKTtcbiAgICAgICAgc2V0SXNPcGVuKHRydWUpO1xuICAgICAgICBjb25zdCBuZXdVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIG5ld1VybCk7XG4gICAgICB9IGNhdGNoKGVycikgeyBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGhjLXNoYXJlZC1jYXJ0XCIsIGVycik7IH1cbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gZm9yIG1hbnVhbCBldmVudHNcbiAgICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gZSBhcyBDdXN0b21FdmVudDtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBjdXN0b21FdmVudC5kZXRhaWw7XG4gICAgICBjb25zdCBuZXdDYXJ0SXRlbUlkID0gRGF0ZS5ub3coKTtcbiAgICAgIFxuICAgICAgc2V0Q2FydChwcmV2ID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBwcmV2LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nICYmIHByb2R1Y3QudHlwZSAhPT0gXCJjb25maWd1cmFibGVcIikge1xuICAgICAgICAgIHJldHVybiBwcmV2Lm1hcChpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9IDogaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsuLi5wcmV2LCB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxLCBjYXJ0SXRlbUlkOiBuZXdDYXJ0SXRlbUlkIH1dO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcm9kdWN0LnR5cGUgPT09IFwiY29uZmlndXJhYmxlXCIgJiYgIXByb2R1Y3QuY29uZmlndXJhdGlvbikge1xuICAgICAgICBvcGVuQ29uZmlndXJhdG9yKHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEsIGNhcnRJdGVtSWQ6IG5ld0NhcnRJdGVtSWQgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUFkZEdyb3VwID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjdXN0b21FdmVudCA9IGUgYXMgQ3VzdG9tRXZlbnQ7XG4gICAgICBjb25zdCB7IGl0ZW1zLCBncm91cElkID0gY3J5cHRvLnJhbmRvbVVVSUQoKSB9ID0gY3VzdG9tRXZlbnQuZGV0YWlsO1xuICAgICAgY29uc3QgbmV3SXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gKHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgfHwgMSwgY2FydEl0ZW1JZDogRGF0ZS5ub3coKSArIE1hdGgucmFuZG9tKCksIGdyb3VwSWQgfSkpO1xuICAgICAgc2V0Q2FydChwcmV2ID0+IFsuLi5wcmV2LCAuLi5uZXdJdGVtc10pO1xuICAgICAgc2V0SXNPcGVuKHRydWUpO1xuICAgICAgc2V0QWN0aXZlVGFiKFwiY2FydFwiKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZU9wZW5DYXJ0ID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjdXN0b21FdmVudCA9IGUgYXMgQ3VzdG9tRXZlbnQ7XG4gICAgICBjb25zdCBtb2RlID0gY3VzdG9tRXZlbnQuZGV0YWlsPy5wcmVzZW50YXRpb24gfHwgJ3NoZWV0JztcbiAgICAgIGNvbnN0IHRhcmdldCA9IGN1c3RvbUV2ZW50LmRldGFpbD8uaW5saW5lVGFyZ2V0IHx8IG51bGw7XG4gICAgICBcbiAgICAgIHNldFByZXNlbnRhdGlvbk1vZGUobW9kZSk7XG4gICAgICBpZiAodGFyZ2V0KSBzZXRJbmxpbmVUYXJnZXQodGFyZ2V0KTtcbiAgICAgIHNldElzT3Blbih0cnVlKTtcbiAgICAgIHNldEFjdGl2ZVRhYihcImNhcnRcIik7XG4gICAgfTtcblxuICAgIC8vIEdsb2JhbCBjbGljayBsaXN0ZW5lciBmb3IgZGF0YS12aWJlLWl0ZW0tKiBhdHRyaWJ1dGVzXG4gICAgY29uc3QgaGFuZGxlR2xvYmFsQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBidXR0b24gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtaGMtaWRdJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBcbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtaWQnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtbmFtZScpIHx8ICdJdGVtJztcbiAgICAgICAgY29uc3QgcHJpY2UgPSBwYXJzZUZsb2F0KGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtcHJpY2UnKSB8fCAnMCcpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtaW1hZ2UnKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWhjLXR5cGUnKSB8fCAnc3RhbmRhcmQnO1xuICAgICAgICBjb25zdCBwcmVzZW50YXRpb24gPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWhjLXByZXNlbnRhdGlvbicpIHx8ICdzaGVldCc7XG4gICAgICAgIGNvbnN0IGlubGluZVRhcmdldCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtaW5saW5lLXRhcmdldCcpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb25maWdGbG93ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBjb25maWdGbG93UmF3ID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1oYy1jb25maWctZmxvdycpO1xuICAgICAgICBpZiAoY29uZmlnRmxvd1Jhdykge1xuICAgICAgICAgIHRyeSB7IGNvbmZpZ0Zsb3cgPSBKU09OLnBhcnNlKGNvbmZpZ0Zsb3dSYXcpOyB9IGNhdGNoKGVycikge31cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1oYy1pbnRlcnZhbCcpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgcmV2aWV3Q29udGVudCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtcmV2aWV3LWNvbnRlbnQnKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHJldmlld1VybCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtcmV2aWV3LXVybCcpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgcGFnZVNlbGVjdG9yID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1oYy1wYWdlLXNlbGVjdG9yJykgfHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBwcmljZSxcbiAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGNvbmZpZ0Zsb3csXG4gICAgICAgICAgaW50ZXJ2YWwsXG4gICAgICAgICAgcmV2aWV3Q29udGVudCxcbiAgICAgICAgICByZXZpZXdVcmwsXG4gICAgICAgICAgcGFnZVNlbGVjdG9yXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBEaXNwYXRjaCB0byBzZWxmXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWRkLXRvLWNhcnQnLCB7IGRldGFpbDogcHJvZHVjdCB9KSk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb3Blbi1jYXJ0JywgeyBkZXRhaWw6IHsgcHJlc2VudGF0aW9uLCBpbmxpbmVUYXJnZXQgfSB9KSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZVF1YW50aXR5ID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGNhcnRJdGVtSWQsIGRlbHRhIH0gPSAoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsO1xuICAgICAgc2V0Q2FydChwcmV2ID0+IHByZXYubWFwKGl0ZW0gPT4gKGl0ZW0uY2FydEl0ZW1JZCB8fCBpdGVtLmlkKSA9PT0gY2FydEl0ZW1JZCA/IHsgLi4uaXRlbSwgcXVhbnRpdHk6IE1hdGgubWF4KDAsIGl0ZW0ucXVhbnRpdHkgKyBkZWx0YSkgfSA6IGl0ZW0pLmZpbHRlcihpdGVtID0+IGl0ZW0ucXVhbnRpdHkgPiAwKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZUl0ZW0gPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgY2FydEl0ZW1JZCB9ID0gKGUgYXMgQ3VzdG9tRXZlbnQpLmRldGFpbDtcbiAgICAgIHNldENhcnQocHJldiA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IHByZXYuZmluZChpID0+IChpLmNhcnRJdGVtSWQgfHwgaS5pZCkgPT09IGNhcnRJdGVtSWQpO1xuICAgICAgICBpZiAoaXRlbVRvUmVtb3ZlPy5ncm91cElkKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuZmlsdGVyKGl0ZW0gPT4gaXRlbS5ncm91cElkICE9PSBpdGVtVG9SZW1vdmUuZ3JvdXBJZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXYuZmlsdGVyKGl0ZW0gPT4gKGl0ZW0uY2FydEl0ZW1JZCB8fCBpdGVtLmlkKSAhPT0gY2FydEl0ZW1JZCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ29uZmlndXJlSXRlbSA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBjYXJ0SXRlbUlkLCBwcmVzZW50YXRpb24sIGlubGluZVRhcmdldCB9ID0gKGUgYXMgQ3VzdG9tRXZlbnQpLmRldGFpbDtcbiAgICAgIHNldENhcnQocHJldiA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBwcmV2LmZpbmQoaSA9PiAoaS5jYXJ0SXRlbUlkIHx8IGkuaWQpID09PSBjYXJ0SXRlbUlkKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVzZW50YXRpb24pIHNldFByZXNlbnRhdGlvbk1vZGUocHJlc2VudGF0aW9uKTtcbiAgICAgICAgICAgIGlmIChpbmxpbmVUYXJnZXQpIHNldElubGluZVRhcmdldChpbmxpbmVUYXJnZXQpO1xuICAgICAgICAgICAgc2V0SXNPcGVuKHRydWUpO1xuICAgICAgICAgICAgc2V0QWN0aXZlVGFiKFwiY2FydFwiKTtcbiAgICAgICAgICAgIG9wZW5Db25maWd1cmF0b3IoaXRlbSk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQXBwbHlQcm9tbyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgY29kZSA9IChlIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWw7XG4gICAgICBzZXREaXNjb3VudENvZGUoY29kZSk7XG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IGFwcGx5IGlmIGl0IG1hdGNoZXNcbiAgICAgIGlmIChjb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdzYXZlMTAnKSBzZXREaXNjb3VudEFwcGxpZWQoMTApO1xuICAgICAgZWxzZSBpZiAoY29kZS50b0xvd2VyQ2FzZSgpID09PSAnaGFsZicpIHNldERpc2NvdW50QXBwbGllZCg5OTk5OTkpOyAvLyBXaWxsIGJlIGNhcHBlZCBieSBzdWJ0b3RhbFxuICAgICAgZWxzZSBzZXREaXNjb3VudEFwcGxpZWQoMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNldFNoaXBwaW5nID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBtZXRob2QgPSAoZSBhcyBDdXN0b21FdmVudCkuZGV0YWlsO1xuICAgICAgc2V0Q2hlY2tvdXREYXRhKHByZXYgPT4gKHsgLi4ucHJldiwgc2hpcHBpbmdNZXRob2Q6IG1ldGhvZCB9KSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdhZGQtdG8tY2FydCcsIGhhbmRsZUFkZFRvQ2FydCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FkZC10by1jYXJ0LWdyb3VwJywgaGFuZGxlQWRkR3JvdXApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcGVuLWNhcnQnLCBoYW5kbGVPcGVuQ2FydCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZS1xdWFudGl0eScsIGhhbmRsZVVwZGF0ZVF1YW50aXR5KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVtb3ZlLWl0ZW0nLCBoYW5kbGVSZW1vdmVJdGVtKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29uZmlndXJlLWl0ZW0nLCBoYW5kbGVDb25maWd1cmVJdGVtKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYXBwbHktcHJvbW8nLCBoYW5kbGVBcHBseVByb21vKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2V0LXNoaXBwaW5nJywgaGFuZGxlU2V0U2hpcHBpbmcpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlR2xvYmFsQ2xpY2spO1xuICAgIFxuICAgIC8vIEV4cG9zZSBnbG9iYWwgQVBJXG4gICAgKHdpbmRvdyBhcyBhbnkpLkh5cGVyQ2FydCA9IHtcbiAgICAgIGFkZDogKHByb2R1Y3Q6IGFueSkgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdhZGQtdG8tY2FydCcsIHsgZGV0YWlsOiBwcm9kdWN0IH0pKSxcbiAgICAgIGFkZEdyb3VwOiAoaXRlbXM6IGFueVtdLCBncm91cElkPzogc3RyaW5nKSA9PiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FkZC10by1jYXJ0LWdyb3VwJywgeyBkZXRhaWw6IHsgaXRlbXMsIGdyb3VwSWQgfSB9KSksXG4gICAgICBvcGVuOiAob3B0aW9ucz86IHsgcHJlc2VudGF0aW9uPzogc3RyaW5nLCBpbmxpbmVUYXJnZXQ/OiBzdHJpbmcgfSkgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvcGVuLWNhcnQnLCB7IGRldGFpbDogb3B0aW9ucyB8fCB7fSB9KSksXG4gICAgICB1cGRhdGVRdWFudGl0eTogKGNhcnRJdGVtSWQ6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd1cGRhdGUtcXVhbnRpdHknLCB7IGRldGFpbDogeyBjYXJ0SXRlbUlkLCBkZWx0YSB9IH0pKSxcbiAgICAgIHJlbW92ZUl0ZW06IChjYXJ0SXRlbUlkOiBudW1iZXIpID0+IHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmVtb3ZlLWl0ZW0nLCB7IGRldGFpbDogeyBjYXJ0SXRlbUlkIH0gfSkpLFxuICAgICAgY29uZmlndXJlSXRlbTogKGNhcnRJdGVtSWQ6IG51bWJlciwgb3B0aW9ucz86IHsgcHJlc2VudGF0aW9uPzogc3RyaW5nLCBpbmxpbmVUYXJnZXQ/OiBzdHJpbmcgfSkgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjb25maWd1cmUtaXRlbScsIHsgZGV0YWlsOiB7IGNhcnRJdGVtSWQsIC4uLm9wdGlvbnMgfSB9KSksXG4gICAgICBhcHBseVByb21vOiAoY29kZTogc3RyaW5nKSA9PiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FwcGx5LXByb21vJywgeyBkZXRhaWw6IGNvZGUgfSkpLFxuICAgICAgc2V0U2hpcHBpbmc6IChtZXRob2Q6IHN0cmluZykgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZXQtc2hpcHBpbmcnLCB7IGRldGFpbDogbWV0aG9kIH0pKSxcbiAgICAgIGdldFNoYXJlVXJsOiAoKSA9PiB7XG4gICAgICAgICBjb25zdCBwYXlsb2FkID0gYnRvYShKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdoYy1zaGFyZWQtY2FydCcsIHBheWxvYWQpO1xuICAgICAgICAgcmV0dXJuIHVybC50b1N0cmluZygpO1xuICAgICAgfSxcbiAgICAgIHNjYW5QYWdlOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmh5cGVyLWFkZC10by1jYXJ0Jyk7XG4gICAgICAgIGNvbnN0IGNhdGFsb2c6IGFueVtdID0gW107XG4gICAgICAgIGNvbnN0IHNlZW5JZHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWhjLWlkJyk7XG4gICAgICAgICAgaWYgKCFpZCB8fCBzZWVuSWRzLmhhcyhpZCkpIHJldHVybjtcbiAgICAgICAgICBzZWVuSWRzLmFkZChpZCk7XG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IGNvbmZpZ0Zsb3cgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY29uc3QgY29uZmlnRmxvd1N0ciA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtY29uZmlnLWZsb3cnKTtcbiAgICAgICAgICBpZiAoY29uZmlnRmxvd1N0cikge1xuICAgICAgICAgICAgdHJ5IHsgY29uZmlnRmxvdyA9IEpTT04ucGFyc2UoY29uZmlnRmxvd1N0cik7IH0gY2F0Y2goZSkge31cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgY2F0YWxvZy5wdXNoKHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZTogYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1oYy1uYW1lJykgfHwgJ0l0ZW0nLFxuICAgICAgICAgICAgcHJpY2U6IHBhcnNlRmxvYXQoYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1oYy1wcmljZScpIHx8ICcwJyksXG4gICAgICAgICAgICBpbWFnZTogYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1oYy1pbWFnZScpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHR5cGU6IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtdHlwZScpIHx8ICdzdGFuZGFyZCcsXG4gICAgICAgICAgICBpbnRlcnZhbDogYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1oYy1pbnRlcnZhbCcpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvbmZpZ0Zsb3csXG4gICAgICAgICAgICByZXZpZXdDb250ZW50OiBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWhjLXJldmlldy1jb250ZW50JykgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmV2aWV3VXJsOiBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWhjLXJldmlldy11cmwnKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBwYWdlU2VsZWN0b3I6IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtcGFnZS1zZWxlY3RvcicpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHByZXNlbnRhdGlvbjogYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1oYy1wcmVzZW50YXRpb24nKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBpbmxpbmVUYXJnZXQ6IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGMtaW5saW5lLXRhcmdldCcpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjYXRhbG9nO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FkZC10by1jYXJ0JywgaGFuZGxlQWRkVG9DYXJ0KTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdhZGQtdG8tY2FydC1ncm91cCcsIGhhbmRsZUFkZEdyb3VwKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuLWNhcnQnLCBoYW5kbGVPcGVuQ2FydCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndXBkYXRlLXF1YW50aXR5JywgaGFuZGxlVXBkYXRlUXVhbnRpdHkpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlbW92ZS1pdGVtJywgaGFuZGxlUmVtb3ZlSXRlbSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29uZmlndXJlLWl0ZW0nLCBoYW5kbGVDb25maWd1cmVJdGVtKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdhcHBseS1wcm9tbycsIGhhbmRsZUFwcGx5UHJvbW8pO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NldC1zaGlwcGluZycsIGhhbmRsZVNldFNoaXBwaW5nKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlR2xvYmFsQ2xpY2spO1xuICAgICAgZGVsZXRlICh3aW5kb3cgYXMgYW55KS5IeXBlckNhcnQ7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU21hbGwgdGltZW91dCB0byBlbnN1cmUgcGFyZW50IGxpc3RlbmVycyBhcmUgYXR0YWNoZWRcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYXJ0LXVwZGF0ZWQnLCB7IGRldGFpbDogY2FydCB9KSk7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtjYXJ0XSk7XG5cbiAgY29uc3QgdXBkYXRlUXVhbnRpdHkgPSAoY2FydEl0ZW1JZDogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgc2V0Q2FydChjYXJ0Lm1hcChpdGVtID0+IChpdGVtLmNhcnRJdGVtSWQgfHwgaXRlbS5pZCkgPT09IGNhcnRJdGVtSWQgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBNYXRoLm1heCgwLCBpdGVtLnF1YW50aXR5ICsgZGVsdGEpIH0gOiBpdGVtKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnF1YW50aXR5ID4gMCkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSAoY2FydEl0ZW1JZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gY2FydC5maW5kKGkgPT4gKGkuY2FydEl0ZW1JZCB8fCBpLmlkKSA9PT0gY2FydEl0ZW1JZCk7XG4gICAgaWYgKGl0ZW1Ub1JlbW92ZT8uZ3JvdXBJZCkge1xuICAgICAgc2V0Q2FydChjYXJ0LmZpbHRlcihpdGVtID0+IGl0ZW0uZ3JvdXBJZCAhPT0gaXRlbVRvUmVtb3ZlLmdyb3VwSWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q2FydChjYXJ0LmZpbHRlcihpdGVtID0+IChpdGVtLmNhcnRJdGVtSWQgfHwgaXRlbS5pZCkgIT09IGNhcnRJdGVtSWQpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2F2ZUNvbmZpZ3VyYXRpb24gPSAoY2FydEl0ZW1JZDogbnVtYmVyLCBjb25maWd1cmF0aW9uOiBhbnkpID0+IHtcbiAgICBzZXRDYXJ0KGNhcnQubWFwKGl0ZW0gPT4gKGl0ZW0uY2FydEl0ZW1JZCB8fCBpdGVtLmlkKSA9PT0gY2FydEl0ZW1JZCA/IHsgLi4uaXRlbSwgY29uZmlndXJhdGlvbiB9IDogaXRlbSkpO1xuICAgIHNldENvbmZpZ3VyaW5nSXRlbShudWxsKTtcbiAgICBpZiAocHJlc2VudGF0aW9uTW9kZSA9PT0gJ2NhcmQtb3ZlcmxheScpIHtcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICBzZXRQcmVzZW50YXRpb25Nb2RlKCdzaGVldCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdWJ0b3RhbCA9IGNhcnQucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIChpdGVtLnNwZWNpYWxQcmljZSAhPT0gdW5kZWZpbmVkID8gaXRlbS5zcGVjaWFsUHJpY2UgOiBpdGVtLnByaWNlKSAqIGl0ZW0ucXVhbnRpdHksIDApO1xuICBjb25zdCBkaXNjb3VudGVkU3VidG90YWwgPSBNYXRoLm1heCgwLCBzdWJ0b3RhbCAtIGRpc2NvdW50QXBwbGllZCk7XG4gIGNvbnN0IHNoaXBwaW5nQ29zdCA9IGNoZWNrb3V0RGF0YS5zaGlwcGluZ01ldGhvZCA9PT0gJ2V4cHJlc3MnID8gMTUuMDAgOiBjaGVja291dERhdGEuc2hpcHBpbmdNZXRob2QgPT09ICdzdGFuZGFyZCcgPyA1LjAwIDogMDtcbiAgY29uc3QgdGF4ZXMgPSBkaXNjb3VudGVkU3VidG90YWwgKiAwLjA4O1xuICBjb25zdCB0b3RhbCA9IGRpc2NvdW50ZWRTdWJ0b3RhbCArIHNoaXBwaW5nQ29zdCArIHRheGVzO1xuICBjb25zdCB0b3RhbEl0ZW1zID0gY2FydC5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eSwgMCk7XG5cbiAgY29uc3QgYXBwbHlEaXNjb3VudCA9ICgpID0+IHtcbiAgICBpZiAoZGlzY291bnRDb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdzYXZlMTAnKSB7XG4gICAgICBzZXREaXNjb3VudEFwcGxpZWQoMTApO1xuICAgIH0gZWxzZSBpZiAoZGlzY291bnRDb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdoYWxmJykge1xuICAgICAgc2V0RGlzY291bnRBcHBsaWVkKHN1YnRvdGFsICogMC41KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RGlzY291bnRBcHBsaWVkKDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaGFyZUNhcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdoYy1zaGFyZWQtY2FydCcsIHBheWxvYWQpO1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHVybC50b1N0cmluZygpKTtcbiAgICBhbGVydChcIkNhcnQgbGluayBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDb25maWdOZXh0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghY29uZmlndXJpbmdJdGVtKSByZXR1cm47XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSBjb25maWd1cmluZ0l0ZW0uY29uZmlnRmxvdz8uW2NvbmZpZ1N0ZXBJbmRleF07XG4gICAgY29uc3QgaXNMYXN0U3RlcCA9IGNvbmZpZ1N0ZXBJbmRleCA9PT0gKGNvbmZpZ3VyaW5nSXRlbS5jb25maWdGbG93Py5sZW5ndGggfHwgMCkgLSAxO1xuXG4gICAgaWYgKGN1cnJlbnRTdGVwPy50eXBlID09PSAnYXBpJykge1xuICAgICAgc2V0Q29uZmlnTG9hZGluZyh0cnVlKTtcbiAgICAgIHNldENvbmZpZ0Vycm9yKFwiXCIpO1xuICAgICAgc2V0Q29uZmlnUmVzcG9uc2UobnVsbCk7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBTdHViIEFQSSBjYWxsXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBNb2NrIHZhbGlkYXRpb24gbG9naWMgYmFzZWQgb24gc3R1YiBydWxlc1xuICAgICAgICBjb25zdCBpbnB1dHNWYWxpZCA9IGN1cnJlbnRTdGVwLmlucHV0cz8uZXZlcnkoKGlucHV0OiBhbnkpID0+IFxuICAgICAgICAgICEhY29uZmlndXJpbmdJdGVtLmNvbmZpZ3VyYXRpb24/LltpbnB1dC5rZXldXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpbnB1dHNWYWxpZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBmaWxsIGluIGFsbCByZXF1aXJlZCBmaWVsZHMuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2ltdWxhdGUgYW4gZXJyb3IgaWYgYSBzcGVjaWZpYyBzdHJpbmcgaXMgdHlwZWQgKGZvciBkZW1vIHB1cnBvc2VzKVxuICAgICAgICBpZiAoY3VycmVudFN0ZXAuaW5wdXRzPy5zb21lKChpbnB1dDogYW55KSA9PiBjb25maWd1cmluZ0l0ZW0uY29uZmlndXJhdGlvbj8uW2lucHV0LmtleV0/LnRvTG93ZXJDYXNlKCkgPT09ICdlcnJvcicpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsaWRhdGlvbiBmYWlsZWQgd2l0aCBlbmRwb2ludC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldENvbmZpZ1Jlc3BvbnNlKHsgbWVzc2FnZTogY3VycmVudFN0ZXAuc3VjY2Vzc01lc3NhZ2UgfHwgXCJWZXJpZmljYXRpb24gc3VjY2Vzc2Z1bCFcIiB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFdhaXQgYSBiaXQgdG8gc2hvdyBzdWNjZXNzIG1lc3NhZ2UsIHRoZW4gcHJvY2VlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRDb25maWdSZXNwb25zZShudWxsKTtcbiAgICAgICAgICBpZiAoIWlzTGFzdFN0ZXApIHNldENvbmZpZ1N0ZXBJbmRleChzID0+IHMgKyAxKTtcbiAgICAgICAgICBlbHNlIHNhdmVDb25maWd1cmF0aW9uKGNvbmZpZ3VyaW5nSXRlbS5jYXJ0SXRlbUlkIHx8IGNvbmZpZ3VyaW5nSXRlbS5pZCwgY29uZmlndXJpbmdJdGVtLmNvbmZpZ3VyYXRpb24pO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIHNldENvbmZpZ0Vycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldENvbmZpZ0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWlzTGFzdFN0ZXApIHNldENvbmZpZ1N0ZXBJbmRleChzID0+IHMgKyAxKTtcbiAgICAgIGVsc2Ugc2F2ZUNvbmZpZ3VyYXRpb24oY29uZmlndXJpbmdJdGVtLmNhcnRJdGVtSWQgfHwgY29uZmlndXJpbmdJdGVtLmlkLCBjb25maWd1cmluZ0l0ZW0uY29uZmlndXJhdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrb3V0U3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY2hlY2tvdXRTdGVwIDwgNCkge1xuICAgICAgc2V0Q2hlY2tvdXRTdGVwKGNoZWNrb3V0U3RlcCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcmFjayBjaGVja291dCBzdWJtaXNzaW9uXG4gICAgICBjb25zdCB0cmFja2luZ1BheWxvYWQgPSB7XG4gICAgICAgIHR5cGU6IFwiZXh0ZXJuYWxfZm9ybV9zdWJtaXNzaW9uXCIsXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgZm9ybUlkOiBcIkNoZWNrb3V0IEZvcm1cIixcbiAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICBmaXJzdF9uYW1lOiBjaGVja291dERhdGEuZmlyc3ROYW1lLFxuICAgICAgICAgIGxhc3RfbmFtZTogY2hlY2tvdXREYXRhLmxhc3ROYW1lLFxuICAgICAgICAgIGVtYWlsOiBjaGVja291dERhdGEuZW1haWwsXG4gICAgICAgICAgYWRkcmVzczogY2hlY2tvdXREYXRhLmFkZHJlc3MsXG4gICAgICAgICAgY2l0eTogY2hlY2tvdXREYXRhLmNpdHksXG4gICAgICAgICAgcG9zdGFsX2NvZGU6IGNoZWNrb3V0RGF0YS56aXAsXG4gICAgICAgICAgXCJjb250YWN0LnNoaXBwaW5nX21ldGhvZFwiOiBjaGVja291dERhdGEuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgICAgb3JnYW5pemF0aW9uOiBjaGVja291dERhdGEuY29tcGFueU5hbWUsXG4gICAgICAgICAgXCJjb250YWN0LmpvYl90aXRsZVwiOiBjaGVja291dERhdGEuam9iVGl0bGUsXG4gICAgICAgICAgXCJjb250YWN0LmluZHVzdHJ5XCI6IGNoZWNrb3V0RGF0YS5pbmR1c3RyeSxcbiAgICAgICAgICBcImNvbnRhY3QuY29tcGFueV9zaXplXCI6IGNoZWNrb3V0RGF0YS5jb21wYW55U2l6ZSxcbiAgICAgICAgICBcImNvbnRhY3QucHJvamVjdF9kZXNjcmlwdGlvblwiOiBjaGVja291dERhdGEucHJvamVjdERlc2NyaXB0aW9uLFxuICAgICAgICAgIFwiY29udGFjdC5idWRnZXRcIjogY2hlY2tvdXREYXRhLmJ1ZGdldCxcbiAgICAgICAgICBcImNvbnRhY3QudXJnZW5jeVwiOiBjaGVja291dERhdGEudXJnZW5jeSxcbiAgICAgICAgICBcImNvbnRhY3QuY29sb3JfdGhlbWVcIjogY2hlY2tvdXREYXRhLmNvbG9yVGhlbWVcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybUxhYmVsczoge1xuICAgICAgICAgIGZpcnN0X25hbWU6IFwiRmlyc3QgTmFtZVwiLFxuICAgICAgICAgIGxhc3RfbmFtZTogXCJMYXN0IE5hbWVcIixcbiAgICAgICAgICBlbWFpbDogXCJFbWFpbCBBZGRyZXNzXCIsXG4gICAgICAgICAgYWRkcmVzczogXCJTdHJlZXQgQWRkcmVzc1wiLFxuICAgICAgICAgIGNpdHk6IFwiQ2l0eVwiLFxuICAgICAgICAgIHBvc3RhbF9jb2RlOiBcIlpJUCBDb2RlXCIsXG4gICAgICAgICAgXCJjb250YWN0LnNoaXBwaW5nX21ldGhvZFwiOiBcIlNoaXBwaW5nIE1ldGhvZFwiLFxuICAgICAgICAgIG9yZ2FuaXphdGlvbjogXCJDb21wYW55IE5hbWVcIixcbiAgICAgICAgICBcImNvbnRhY3Quam9iX3RpdGxlXCI6IFwiSm9iIFRpdGxlXCIsXG4gICAgICAgICAgXCJjb250YWN0LmluZHVzdHJ5XCI6IFwiSW5kdXN0cnlcIixcbiAgICAgICAgICBcImNvbnRhY3QuY29tcGFueV9zaXplXCI6IFwiQ29tcGFueSBTaXplXCIsXG4gICAgICAgICAgXCJjb250YWN0LnByb2plY3RfZGVzY3JpcHRpb25cIjogXCJQcm9qZWN0IERlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgXCJjb250YWN0LmJ1ZGdldFwiOiBcIkJ1ZGdldFwiLFxuICAgICAgICAgIFwiY29udGFjdC51cmdlbmN5XCI6IFwiVXJnZW5jeVwiLFxuICAgICAgICAgIFwiY29udGFjdC5jb2xvcl90aGVtZVwiOiBcIkNvbG9yIFRoZW1lXCJcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LnRpdGxlLFxuICAgICAgICBwYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgdHJhY2tpbmdJZDogXCJ0a181OTA2ZTk5YTVmMTI0YzYyYjQ5MGVhZDViOGI5Yjg4Y1wiLFxuICAgICAgICBsb2NhdGlvbklkOiBcIlFOTExmUzJhSFJ5TUtpZHlLS1dPXCIsXG4gICAgICAgIHNlc3Npb25JZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGRldmljZVR5cGU6IC9Nb2JpbGV8QW5kcm9pZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCJtb2JpbGVcIiA6IFwiZGVza3RvcFwiLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgZmV0Y2goXCJodHRwczovL2JhY2tlbmQubGVhZGNvbm5lY3RvcmhxLmNvbS9leHRlcm5hbC10cmFja2luZy9ldmVudHNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgdmVyc2lvbjogXCIyMDIxLTA3LTI4XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRyYWNraW5nUGF5bG9hZCksXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7fSk7XG5cbiAgICAgIGFsZXJ0KFwiT3JkZXIgcGxhY2VkIHN1Y2Nlc3NmdWxseSEgKFN0dWJiZWQgQ2hlY2tvdXQpXCIpO1xuICAgICAgc2V0Q2FydChbXSk7XG4gICAgICBzZXRBY3RpdmVUYWIoXCJjYXJ0XCIpO1xuICAgICAgc2V0Q2hlY2tvdXRTdGVwKDEpO1xuICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQ29uZmlndXJhdG9yID0gKCkgPT4ge1xuICAgIGlmICghY29uZmlndXJpbmdJdGVtKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtZnVsbCBhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1yaWdodC00IGR1cmF0aW9uLTMwMCBiZy1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItNiBweC00IHB0LTRcIj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXNlbnRhdGlvbk1vZGUgPT09ICdjYXJkLW92ZXJsYXknKSB7XG4gICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgIHNldFByZXNlbnRhdGlvbk1vZGUoJ3NoZWV0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRDb25maWd1cmluZ0l0ZW0obnVsbCk7XG4gICAgICAgICAgfX0gY2xhc3NOYW1lPVwiLW1sLTJcIj5cbiAgICAgICAgICAgIDxBcnJvd0xlZnQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPntjb25maWdWaWV3TW9kZSA9PT0gJ3N1bW1hcnknID8gYENvbmZpZ3VyYXRpb24gU3VtbWFyeWAgOiBgQ29uZmlndXJlICR7Y29uZmlndXJpbmdJdGVtLm5hbWV9YH08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHtjb25maWdWaWV3TW9kZSA9PT0gJ3N1bW1hcnknID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGZsZXgtMSBwYi0yMCBvdmVyZmxvdy15LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAge2NvbmZpZ3VyaW5nSXRlbS5jb25maWdGbG93Py5tYXAoKHN0ZXA6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gY29uZmlndXJpbmdJdGVtLmNvbmZpZ3VyYXRpb24/LltzdGVwLmtleV07XG4gICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiYm9yZGVyLWIgcGItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57c3RlcC5sYWJlbCB8fCBzdGVwLnN0ZXB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbXQtMVwiPnt2YWx9PC9wPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBwLTQgYmctYmFja2dyb3VuZCBib3JkZXItdCBmbGV4IGdhcC0zIHotMTBcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImZsZXgtMVwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDb25maWdWaWV3TW9kZSgnd2l6YXJkJyk7XG4gICAgICAgICAgICAgICAgc2V0Q29uZmlnU3RlcEluZGV4KDApO1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICBFZGl0IENvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZmxleC0xXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcmVzZW50YXRpb25Nb2RlID09PSAnY2FyZC1vdmVybGF5Jykge1xuICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIHNldFByZXNlbnRhdGlvbk1vZGUoJ3NoZWV0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldENvbmZpZ3VyaW5nSXRlbShudWxsKTtcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgRG9uZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBmbGV4LTEgcGItMjAgb3ZlcmZsb3cteS1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgICAgey8qIFByb2dyZXNzIEluZGljYXRvciAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIG1iLTZcIj5cbiAgICAgICAgICAgICAgICB7Y29uZmlndXJpbmdJdGVtLmNvbmZpZ0Zsb3c/Lm1hcCgoXzogYW55LCBpZHg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPXtgaC0xLjUgZmxleC0xIHJvdW5kZWQtZnVsbCAke2lkeCA8PSBjb25maWdTdGVwSW5kZXggPyAnYmctcHJpbWFyeScgOiAnYmctbXV0ZWQnfWB9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBjb25maWd1cmluZ0l0ZW0uY29uZmlnRmxvdz8uW2NvbmZpZ1N0ZXBJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKCFzdGVwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgYW5pbWF0ZS1pbiBmYWRlLWluIHNsaWRlLWluLWZyb20tcmlnaHQtNCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+e3N0ZXAubGFiZWwgfHwgc3RlcC5zdGVwfTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAge3N0ZXAuZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57c3RlcC5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlnRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydENpcmNsZSBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFRpdGxlPkVycm9yPC9BbGVydFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0RGVzY3JpcHRpb24+e2NvbmZpZ0Vycm9yfTwvQWxlcnREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHtjb25maWdSZXNwb25zZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IGNsYXNzTmFtZT1cImJnLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5IGJvcmRlci1wcmltYXJ5LzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5mbyBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFRpdGxlPlN1Y2Nlc3M8L0FsZXJ0VGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnREZXNjcmlwdGlvbj57Y29uZmlnUmVzcG9uc2UubWVzc2FnZX08L0FsZXJ0RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7c3RlcC50eXBlID09PSAnc2VsZWN0JyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maWd1cmluZ0l0ZW0uY29uZmlndXJhdGlvbj8uW3N0ZXAua2V5XSB8fCBcIlwifSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2KSA9PiBzZXRDb25maWd1cmluZ0l0ZW0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb25maWd1cmluZ0l0ZW0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uOiB7IC4uLmNvbmZpZ3VyaW5nSXRlbS5jb25maWd1cmF0aW9uLCBbc3RlcC5rZXldOiB2IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyPjxTZWxlY3RWYWx1ZSBwbGFjZWhvbGRlcj17YFNlbGVjdCAke3N0ZXAubGFiZWwgfHwgc3RlcC5zdGVwfWB9IC8+PC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLm9wdGlvbnMubWFwKChvcHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdHlwZW9mIG9wdCA9PT0gJ3N0cmluZycgPyBvcHQgOiBvcHQubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2Ygb3B0ID09PSAnc3RyaW5nJyA/IG9wdCA6IChvcHQudmFsdWUgfHwgb3B0LmxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNlbGVjdEl0ZW0ga2V5PXt2YWx1ZX0gdmFsdWU9e3ZhbHVlfT57bGFiZWx9PC9TZWxlY3RJdGVtPjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7c3RlcC50eXBlID09PSAndGV4dCcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzdGVwLnBsYWNlaG9sZGVyIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlndXJpbmdJdGVtLmNvbmZpZ3VyYXRpb24/LltzdGVwLmtleV0gfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlndXJpbmdJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlndXJpbmdJdGVtLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbjogeyAuLi5jb25maWd1cmluZ0l0ZW0uY29uZmlndXJhdGlvbiwgW3N0ZXAua2V5XTogZS50YXJnZXQudmFsdWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtzdGVwLnR5cGUgPT09ICdyYWRpbycgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZ3VyaW5nSXRlbS5jb25maWd1cmF0aW9uPy5bc3RlcC5rZXldIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodikgPT4gc2V0Q29uZmlndXJpbmdJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlndXJpbmdJdGVtLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbjogeyAuLi5jb25maWd1cmluZ0l0ZW0uY29uZmlndXJhdGlvbiwgW3N0ZXAua2V5XTogdiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yIG10LTRcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLm9wdGlvbnMubWFwKChvcHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnID8gb3B0IDogb3B0LmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnID8gb3B0IDogKG9wdC52YWx1ZSB8fCBvcHQubGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2YWx1ZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBzcGFjZS14LTMgYm9yZGVyIHAtNCByb3VuZGVkLW1kIGhvdmVyOmJnLW11dGVkLzUwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cEl0ZW0gdmFsdWU9e3ZhbHVlfSBpZD17YCR7c3RlcC5rZXl9LSR7dmFsdWV9YH0gY2xhc3NOYW1lPVwibXQtMC41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtgJHtzdGVwLmtleX0tJHt2YWx1ZX1gfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXNtXCI+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0LmRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtMVwiPntvcHQuZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7c3RlcC50eXBlID09PSAnY2FyZHMnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAub3B0aW9ucy5tYXAoKG9wdDogYW55LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnID8gb3B0IDogb3B0LmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnID8gb3B0IDogKG9wdC52YWx1ZSB8fCBvcHQubGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gY29uZmlndXJpbmdJdGVtLmNvbmZpZ3VyYXRpb24/LltzdGVwLmtleV0gPT09IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIHJvdW5kZWQteGwgcC0zIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsIGZsZXggZmxleC1jb2wgJHtpc1NlbGVjdGVkID8gJ2JvcmRlci1wcmltYXJ5IGJnLXByaW1hcnkvNSByaW5nLTEgcmluZy1wcmltYXJ5JyA6ICdob3Zlcjpib3JkZXItcHJpbWFyeS81MCd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbmZpZ3VyaW5nSXRlbSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ3VyaW5nSXRlbSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHsgLi4uY29uZmlndXJpbmdJdGVtLmNvbmZpZ3VyYXRpb24sIFtzdGVwLmtleV06IHZhbHVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHQuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC1zcXVhcmUgbWItMyByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiBiZy1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtvcHQuaW1hZ2V9IGFsdD17bGFiZWx9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1zbVwiPntsYWJlbH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtNCB3LTQgcm91bmRlZC1mdWxsIGJvcmRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMCAke2lzU2VsZWN0ZWQgPyAnYm9yZGVyLXByaW1hcnkgYmctcHJpbWFyeScgOiAnYm9yZGVyLWlucHV0J31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiA8ZGl2IGNsYXNzTmFtZT1cImgtMS41IHctMS41IHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LWZvcmVncm91bmRcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHQuZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy10aWdodCBtdC0xXCI+e29wdC5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAge3N0ZXAudHlwZSA9PT0gJ2FwaScgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLmlucHV0cz8ubWFwKChpbnB1dDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbnB1dC5rZXl9IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD57aW5wdXQubGFiZWx9PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXQudHlwZSA9PT0gJ3RleHQnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2lucHV0LnBsYWNlaG9sZGVyIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maWd1cmluZ0l0ZW0uY29uZmlndXJhdGlvbj8uW2lucHV0LmtleV0gfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb25maWd1cmluZ0l0ZW0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ3VyaW5nSXRlbSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbjogeyAuLi5jb25maWd1cmluZ0l0ZW0uY29uZmlndXJhdGlvbiwgW2lucHV0LmtleV06IGUudGFyZ2V0LnZhbHVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBiZy1tdXRlZCBwLTIgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hpZWxkQ2hlY2sgY2xhc3NOYW1lPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGluZm9ybWF0aW9uIHdpbGwgYmUgc2VjdXJlbHkgdmVyaWZpZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgcC00IGJnLWJhY2tncm91bmQgYm9yZGVyLXQgZmxleCBnYXAtMyB6LTEwXCI+XG4gICAgICAgICAgICAgIHtjb25maWdTdGVwSW5kZXggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0Q29uZmlnU3RlcEluZGV4KHMgPT4gcyAtIDEpO1xuICAgICAgICAgICAgICAgICAgc2V0Q29uZmlnRXJyb3IoXCJcIik7XG4gICAgICAgICAgICAgICAgICBzZXRDb25maWdSZXNwb25zZShudWxsKTtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4LTFcIiBvbkNsaWNrPXtoYW5kbGVDb25maWdOZXh0fSBkaXNhYmxlZD17Y29uZmlnTG9hZGluZyB8fCAhIWNvbmZpZ1Jlc3BvbnNlfT5cbiAgICAgICAgICAgICAgICB7Y29uZmlnTG9hZGluZyA/IFwiVmVyaWZ5aW5nLi4uXCIgOiBjb25maWdSZXNwb25zZSA/IFwiU3VjY2VzcyFcIiA6IChjb25maWdTdGVwSW5kZXggPT09IChjb25maWd1cmluZ0l0ZW0uY29uZmlnRmxvdz8ubGVuZ3RoIHx8IDApIC0gMSA/IFwiU2F2ZSBDb25maWd1cmF0aW9uXCIgOiBcIk5leHQgU3RlcFwiKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY2FydENvbnRlbnQgPSAoXG4gICAgPFRhYnMgaWQ9XCJjYXJ0LW92ZXJsYXktdGFic1wiIHZhbHVlPXthY3RpdmVUYWJ9IG9uVmFsdWVDaGFuZ2U9eyh2KSA9PiB7IHNldEFjdGl2ZVRhYih2KTsgaWYodiAhPT0gJ2NoZWNrb3V0Jykgc2V0Q2hlY2tvdXRTdGVwKDEpOyBpZih2ICE9PSAnY2FydCcpIHNldENvbmZpZ3VyaW5nSXRlbShudWxsKTsgfX0gY2xhc3NOYW1lPVwiY2FydC1vdmVybGF5LXRhYnMgZmxleC0xIGZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbXQtOCBtZDptdC02XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcGItNCBib3JkZXItYiBiZy1iYWNrZ3JvdW5kIHNocmluay0wXCI+XG4gICAgICAgIDxUYWJzTGlzdCBpZD1cImNhcnQtdGFicy1saXN0XCIgY2xhc3NOYW1lPVwiY2FydC10YWJzLWxpc3QgZ3JpZCB3LWZ1bGwgZ3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICA8VGFic1RyaWdnZXIgaWQ9XCJ0YWItdHJpZ2dlci1jYXJ0XCIgY2xhc3NOYW1lPVwidGFiLXRyaWdnZXItY2FydFwiIHZhbHVlPVwiY2FydFwiIG9uQ2xpY2s9eygpID0+IHNldENvbmZpZ3VyaW5nSXRlbShudWxsKX0+e3QoJ2NhcnQnKX08L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgIDxUYWJzVHJpZ2dlciBpZD1cInRhYi10cmlnZ2VyLWNoZWNrb3V0XCIgY2xhc3NOYW1lPVwidGFiLXRyaWdnZXItY2hlY2tvdXRcIiB2YWx1ZT1cImNoZWNrb3V0XCIgZGlzYWJsZWQ9e2NhcnQubGVuZ3RoID09PSAwfT57dCgnY2hlY2tvdXQnKX08L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgIDxUYWJzVHJpZ2dlciBpZD1cInRhYi10cmlnZ2VyLW92ZXJ2aWV3XCIgY2xhc3NOYW1lPVwidGFiLXRyaWdnZXItb3ZlcnZpZXdcIiB2YWx1ZT1cIm92ZXJ2aWV3XCI+e3QoJ292ZXJ2aWV3Jyl9PC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgPC9UYWJzTGlzdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENhcnQgVGFiICovfVxuICAgICAgICAgIDxUYWJzQ29udGVudCB2YWx1ZT1cImNhcnRcIiBpZD1cInRhYi1jb250ZW50LWNhcnRcIiBjbGFzc05hbWU9XCJjYXJ0LXRhYi1jb250ZW50IGZsZXgtMSBmbGV4IGZsZXgtY29sIG0tMCBkYXRhLVtzdGF0ZT1hY3RpdmVdOmZsZXggb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2FydC1pdGVtcy1jb250YWluZXJcIiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1zLWNvbnRhaW5lciBmbGV4LTEgbWluLWgtMCByZWxhdGl2ZSBtYXgtaC1bNzB2aF0gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG1pbi1oLWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgIHtjb25maWd1cmluZ0l0ZW0gPyByZW5kZXJDb25maWd1cmF0b3IoKSA6IGNhcnQubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LTEgdGV4dC1jZW50ZXIgc3BhY2UteS00IHB5LTIwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMjAgdy0yMCByb3VuZGVkLWZ1bGwgYmctbXV0ZWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNob3BwaW5nQ2FydCBjbGFzc05hbWU9XCJoLTEwIHctMTAgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG9wYWNpdHktNTBcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e3QoJ2VtcHR5Q2FydFRpdGxlJyl9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtIG1heC13LVsyNTBweF1cIj57dCgnZW1wdHlDYXJ0RGVzYycpfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlZmF1bHRcIiBjbGFzc05hbWU9XCJtdC00XCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+e3QoJ2NvbnRpbnVlU2hvcHBpbmcnKX08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBwYi02XCI+XG4gICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBlZENhcnQ6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZEdyb3VwcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FydC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmdyb3VwSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJvY2Vzc2VkR3JvdXBzLmhhcyhpdGVtLmdyb3VwSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwZWRDYXJ0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQnVuZGxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGl0ZW0uZ3JvdXBJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogY2FydC5maWx0ZXIoaSA9PiBpLmdyb3VwSWQgPT09IGl0ZW0uZ3JvdXBJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZEdyb3Vwcy5hZGQoaXRlbS5ncm91cElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBlZENhcnQucHVzaCh7IGlzQnVuZGxlOiBmYWxzZSwgaXRlbSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cGVkQ2FydC5tYXAoZ3JvdXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cC5pc0J1bmRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BidW5kbGUtJHtncm91cC5ncm91cElkfWB9IGNsYXNzTmFtZT1cImJ1bmRsZS1ncm91cCBib3JkZXIgcm91bmRlZC14bCBwLTQgYmctbXV0ZWQvMTAgc3BhY2UteS00IHJlbGF0aXZlIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJvcmRlci1iIHBiLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiPnt0KCdzcGVjaWFsQnVuZGxlJyl9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwiaWNvblwiIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZGVzdHJ1Y3RpdmUgaG92ZXI6YmctZGVzdHJ1Y3RpdmUvMTAgc2hyaW5rLTAgcm91bmRlZC1mdWxsXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYXJ0KGNhcnQuZmlsdGVyKGkgPT4gaS5ncm91cElkICE9PSBncm91cC5ncm91cElkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z3JvdXAuaXRlbXMubWFwKChpdGVtOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uY2FydEl0ZW1JZCB8fCBpdGVtLmlkfSBjbGFzc05hbWU9XCJmbGV4IGdhcC00IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IHctMTYgcm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW4gYmctYmFja2dyb3VuZCBmbGV4LXNocmluay0wIGJvcmRlciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmltYWdlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnQgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LW11dGVkLWZvcmVncm91bmQvMzBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc20gbGVhZGluZy10aWdodFwiPntpdGVtLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LW11dGVkLWZvcmVncm91bmQgYmctbXV0ZWQgcHgtMiBweS0xIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdxdHknKX06IHtpdGVtLnF1YW50aXR5fSA8c3BhbiBjbGFzc05hbWU9XCJ3LTEgaC0xIHJvdW5kZWQtZnVsbCBiZy1tdXRlZC1mb3JlZ3JvdW5kLzUwXCIgLz4ge3QoJ2xvY2tlZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNwZWNpYWxQcmljZSAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gbGluZS10aHJvdWdoIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtci0xLjVcIj57Zm9ybWF0UHJpY2UoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNtIHRleHQtcHJpbWFyeVwiPntmb3JtYXRQcmljZShpdGVtLnNwZWNpYWxQcmljZSAqIGl0ZW0ucXVhbnRpdHkpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc21cIj57Zm9ybWF0UHJpY2UoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGdyb3VwLml0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pcXVlSWQgPSBpdGVtLmNhcnRJdGVtSWQgfHwgaXRlbS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3VuaXF1ZUlkfSBpZD17YGNhcnQtaXRlbS0ke3VuaXF1ZUlkfWB9IGNsYXNzTmFtZT1cImNhcnQtaXRlbSBmbGV4IGdhcC00IGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yNCB3LTI0IHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuIGJnLW11dGVkIGZsZXgtc2hyaW5rLTAgYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaW1hZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnQgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LW11dGVkLWZvcmVncm91bmQvMzBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHB5LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1zbSBsZWFkaW5nLXRpZ2h0XCI+e2l0ZW0ubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50eXBlID09PSAnc3Vic2NyaXB0aW9uJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBtdC0xIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGJnLW11dGVkIHctZml0IHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdGF0ZUNjdyBjbGFzc05hbWU9XCJoLTMgdy0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdiaWxsZWRFdmVyeScpfSB7aXRlbS5pbnRlcnZhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHlwZSA9PT0gJ2NvbmZpZ3VyYWJsZScgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgbXQtMSB0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdzMiBjbGFzc05hbWU9XCJoLTMgdy0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb3BlbkNvbmZpZ3VyYXRvcihpdGVtKX0gY2xhc3NOYW1lPVwidW5kZXJsaW5lIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb25maWd1cmF0aW9uID8gdCgnZWRpdENvbmZpZ3VyYXRpb24nKSA6IHQoJ2NvbmZpZ3VyZUl0ZW0nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCIgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1kZXN0cnVjdGl2ZSBzaHJpbmstMCAtbXItMiAtbXQtMlwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0odW5pcXVlSWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYmctbXV0ZWQvNTAgcm91bmRlZC1tZCBib3JkZXIgcC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwiaWNvblwiIGNsYXNzTmFtZT1cImgtNyB3LTcgcm91bmRlZC1zbVwiIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVF1YW50aXR5KHVuaXF1ZUlkLCAtMSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNaW51cyBjbGFzc05hbWU9XCJoLTMgdy0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdy02IHRleHQtY2VudGVyXCI+e2l0ZW0ucXVhbnRpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCIgY2xhc3NOYW1lPVwiaC03IHctNyByb3VuZGVkLXNtXCIgb25DbGljaz17KCkgPT4gdXBkYXRlUXVhbnRpdHkodW5pcXVlSWQsIDEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1cyBjbGFzc05hbWU9XCJoLTMgdy0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zcGVjaWFsUHJpY2UgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gbGluZS10aHJvdWdoIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPntmb3JtYXRQcmljZShpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNtIHRleHQtcHJpbWFyeVwiPntmb3JtYXRQcmljZShpdGVtLnNwZWNpYWxQcmljZSAqIGl0ZW0ucXVhbnRpdHkpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc21cIj57Zm9ybWF0UHJpY2UoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHlwZSA9PT0gJ3N1YnNjcmlwdGlvbicgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPi97aXRlbS5pbnRlcnZhbH08L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7LyogVXBzZWxscyBTZWN0aW9uICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IG10LTYgYm9yZGVyLXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCBtYi00XCI+e3QoJ2ZyZXF1ZW50bHlBZGRlZCcpfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAge1VQU0VMTF9QUk9EVUNUUy5tYXAodXBzZWxsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluQ2FydCA9IGNhcnQuc29tZShpdGVtID0+IGl0ZW0uaWQgPT09IHVwc2VsbC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dXBzZWxsLmlkfSBpZD17YHVwc2VsbC1pdGVtLSR7dXBzZWxsLmlkfWB9IGNsYXNzTmFtZT1cInVwc2VsbC1pdGVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTMgcm91bmRlZC1sZyBib3JkZXIgYmctbXV0ZWQvMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLW1kIGJnLWJhY2tncm91bmQgYm9yZGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1cHNlbGwuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLW5vbmVcIj57dXBzZWxsLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0xXCI+K3tmb3JtYXRQcmljZSh1cHNlbGwucHJpY2UpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtpbkNhcnQgPyBcInNlY29uZGFyeVwiIDogXCJvdXRsaW5lXCJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbkNhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYXJ0KGNhcnQuZmlsdGVyKGkgPT4gaS5pZCAhPT0gdXBzZWxsLmlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FydChbLi4uY2FydCwgeyAuLi51cHNlbGwsIHF1YW50aXR5OiAxLCBpbWFnZTogXCJcIiwgY2FydEl0ZW1JZDogRGF0ZS5ub3coKSB9XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luQ2FydCA/IHQoJ2FkZGVkJykgOiB0KCdhZGQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyFjb25maWd1cmluZ0l0ZW0gJiYgY2FydC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcnQtZm9vdGVyXCIgY2xhc3NOYW1lPVwiY2FydC1mb290ZXIgcC00IGJvcmRlci10IGJnLWNhcmQgc3BhY2UteS00IHNoYWRvdy1bMF8tMTBweF8yMHB4Xy0xMHB4X3JnYmEoMCwwLDAsMC4wNSldIHNocmluay0wIHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBwYi0zIGJvcmRlci1iXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5DYXJ0IEFjdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwiaC04IHRleHQteHNcIiBvbkNsaWNrPXtoYW5kbGVTaGFyZUNhcnR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxTaGFyZTIgY2xhc3NOYW1lPVwiaC0zLjUgdy0zLjUgbXItMS41XCIgLz4gU2hhcmUgQ2FydFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnZGlzY291bnRDb2RlJyl9IFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudENvZGV9IFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGlzY291bnRDb2RlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cImgtOVwiIG9uQ2xpY2s9e2FwcGx5RGlzY291bnR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWcgY2xhc3NOYW1lPVwiaC00IHctNCBtci0xLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdhcHBseScpfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnb3JkZXJOb3RlcycpfSBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29yZGVyTm90ZXN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0T3JkZXJOb3RlcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi1oLVs2MHB4XSB0ZXh0LXNtIHJlc2l6ZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnt0KCdzdWJ0b3RhbCcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57Zm9ybWF0UHJpY2Uoc3VidG90YWwpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge2Rpc2NvdW50QXBwbGllZCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc20gdGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2Rpc2NvdW50Jyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPi17Zm9ybWF0UHJpY2UoZGlzY291bnRBcHBsaWVkKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57dCgnc2hpcHBpbmcnKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnt0KCdjYWxjdWxhdGVkTmV4dCcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIiBcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVRvQ29uZmlndXJlID0gY2FydC5maW5kKGl0ZW0gPT4gaXRlbS50eXBlID09PSAnY29uZmlndXJhYmxlJyAmJiAhaXRlbS5jb25maWd1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Ub0NvbmZpZ3VyZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG9wZW5Db25maWd1cmF0b3IoaXRlbVRvQ29uZmlndXJlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVUYWIoXCJjaGVja291dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2FydC5zb21lKGl0ZW0gPT4gaXRlbS50eXBlID09PSAnY29uZmlndXJhYmxlJyAmJiAhaXRlbS5jb25maWd1cmF0aW9uKSA/IHQoJ3Byb2NlZWRUb09wdGlvbnMnKSA6IHQoJ3Byb2NlZWRUb0NoZWNrb3V0Jyl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1RhYnNDb250ZW50PlxuXG4gICAgICAgICAgey8qIENoZWNrb3V0IFRhYiAoV2l6YXJkKSAqL31cbiAgICAgICAgICA8VGFic0NvbnRlbnQgdmFsdWU9XCJjaGVja291dFwiIGlkPVwidGFiLWNvbnRlbnQtY2hlY2tvdXRcIiBjbGFzc05hbWU9XCJjaGVja291dC10YWItY29udGVudCBmbGV4LTEgZmxleCBmbGV4LWNvbCBtLTAgZGF0YS1bc3RhdGU9YWN0aXZlXTpmbGV4IG92ZXJmbG93LWhpZGRlbiBiZy1tdXRlZC8xMFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImNoZWNrb3V0LWxheW91dFwiIGNsYXNzTmFtZT1cImNoZWNrb3V0LWxheW91dCBmbGV4LTEgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBvdmVyZmxvdy15LWF1dG8gbWQ6b3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIHsvKiBDaGVja291dCBGb3JtIEFyZWEgKi99XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGVja291dC1mb3JtLWFyZWFcIiBjbGFzc05hbWU9XCJjaGVja291dC1mb3JtLWFyZWEgZmxleC0xIG1kOm1pbi1oLXNjcmVlbiBtZDpyZWxhdGl2ZSBvcmRlci0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDphYnNvbHV0ZSBtZDppbnNldC0wIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctdmlzaWJsZSBtZDpvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG1kOnAtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXhsIG14LWF1dG8gc3BhY2UteS04IHBiLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHsvKiBXaXphcmQgSGVhZGVyICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgdmFsdWU9eyhjaGVja291dFN0ZXAgLyA0KSAqIDEwMH0gY2xhc3NOYW1lPVwiaC0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNoZWNrb3V0LXdpemFyZC1oZWFkZXJcIiBjbGFzc05hbWU9XCJjaGVja291dC13aXphcmQtaGVhZGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBvdmVyZmxvdy14LWF1dG8gcGItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC04IHctOCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbSBmb250LXNlbWlib2xkICR7Y2hlY2tvdXRTdGVwID49IDEgPyAnYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCcgOiAnYmctbXV0ZWQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kJ31gfT4xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtbWVkaXVtICR7Y2hlY2tvdXRTdGVwID49IDEgPyAndGV4dC1mb3JlZ3JvdW5kJyA6ICd0ZXh0LW11dGVkLWZvcmVncm91bmQnfWB9Pk9uYm9hcmRpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoLXB4IHctOCBzbTpmbGV4LTEgbXgtMiBzbTpteC00IHNocmluay0wICR7Y2hlY2tvdXRTdGVwID49IDIgPyAnYmctcHJpbWFyeScgOiAnYmctYm9yZGVyJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC04IHctOCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbSBmb250LXNlbWlib2xkICR7Y2hlY2tvdXRTdGVwID49IDIgPyAnYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCcgOiAnYmctbXV0ZWQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kJ31gfT4yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtbWVkaXVtICR7Y2hlY2tvdXRTdGVwID49IDIgPyAndGV4dC1mb3JlZ3JvdW5kJyA6ICd0ZXh0LW11dGVkLWZvcmVncm91bmQnfWB9PkJpbGxpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoLXB4IHctOCBzbTpmbGV4LTEgbXgtMiBzbTpteC00IHNocmluay0wICR7Y2hlY2tvdXRTdGVwID49IDMgPyAnYmctcHJpbWFyeScgOiAnYmctYm9yZGVyJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC04IHctOCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbSBmb250LXNlbWlib2xkICR7Y2hlY2tvdXRTdGVwID49IDMgPyAnYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCcgOiAnYmctbXV0ZWQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kJ31gfT4zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtbWVkaXVtICR7Y2hlY2tvdXRTdGVwID49IDMgPyAndGV4dC1mb3JlZ3JvdW5kJyA6ICd0ZXh0LW11dGVkLWZvcmVncm91bmQnfWB9PlNoaXBwaW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC1weCB3LTggc206ZmxleC0xIG14LTIgc206bXgtNCBzaHJpbmstMCAke2NoZWNrb3V0U3RlcCA+PSA0ID8gJ2JnLXByaW1hcnknIDogJ2JnLWJvcmRlcid9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtOCB3LTggcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc20gZm9udC1zZW1pYm9sZCAke2NoZWNrb3V0U3RlcCA+PSA0ID8gJ2JnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQnIDogJ2JnLW11dGVkIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCd9YH0+NDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC1zbSBmb250LW1lZGl1bSAke2NoZWNrb3V0U3RlcCA+PSA0ID8gJ3RleHQtZm9yZWdyb3VuZCcgOiAndGV4dC1tdXRlZC1mb3JlZ3JvdW5kJ31gfT5QYXltZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImNoZWNrb3V0LWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlQ2hlY2tvdXRTdWJtaXR9IGNsYXNzTmFtZT1cImNoZWNrb3V0LWZvcm0gc3BhY2UteS04XCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7LyogU3RlcCAxOiBPbmJvYXJkaW5nIC8gSW5mb3JtYXRpb24gQ29sbGVjdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgICAge2NoZWNrb3V0U3RlcCA9PT0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNoZWNrb3V0LXN0ZXAtb25ib2FyZGluZ1wiIGNsYXNzTmFtZT1cImNoZWNrb3V0LXN0ZXAtb25ib2FyZGluZyBzcGFjZS15LTggYW5pbWF0ZS1pbiBmYWRlLWluIHNsaWRlLWluLWZyb20tcmlnaHQtNCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5UZWxsIHVzIGFib3V0IHlvdXJzZWxmPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5QbGVhc2UgY29tcGxldGUgdGhpcyBvbmJvYXJkaW5nIHF1ZXN0aW9ubmFpcmUgdG8gcHJvY2VlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0Q2lyY2xlIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFRpdGxlPldoeSBkbyB3ZSBuZWVkIHRoaXM/PC9BbGVydFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBpbmZvcm1hdGlvbiBoZWxwcyB1cyB0YWlsb3IgdGhlIGV4cGVyaWVuY2UgYW5kIGVuc3VyZSB5b3VyIHByb2plY3QgZ2V0cyBtYXRjaGVkIHdpdGggdGhlIHJpZ2h0IHRlYW0uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG92ZXJDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG92ZXJDYXJkVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZSBtbC0xIGN1cnNvci1wb2ludGVyIGZvbnQtbWVkaXVtXCI+TGVhcm4gbW9yZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ib3ZlckNhcmRUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG92ZXJDYXJkQ29udGVudCBjbGFzc05hbWU9XCJ3LTgwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5EYXRhIFByaXZhY3k8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5XZSBuZXZlciBzZWxsIHlvdXIgZGF0YS4gVGhpcyBpbmZvcm1hdGlvbiBpcyBzdHJpY3RseSB1c2VkIGZvciB0aGUgb25ib2FyZGluZyBwcm9jZXNzIGFuZCBpcyBzZWN1cmVseSBzdG9yZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hvdmVyQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hvdmVyQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIHR5cGU9XCJtdWx0aXBsZVwiIGRlZmF1bHRWYWx1ZT17W1wicGVyc29uYWxcIiwgXCJwcmVmZXJlbmNlc1wiLCBcInN1cnZleVwiLCBcInVwbG9hZFwiXX0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBlcnNvbmFsICYgUHJvZmVzc2lvbmFsICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHZhbHVlPVwicGVyc29uYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25UcmlnZ2VyPlByb2Zlc3Npb25hbCBJbmZvcm1hdGlvbjwvQWNjb3JkaW9uVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50IGNsYXNzTmFtZT1cInNwYWNlLXktNCBwdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImNvbXBhbnlOYW1lXCI+Q29tcGFueSBOYW1lPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cImNvbXBhbnlOYW1lXCIgcGxhY2Vob2xkZXI9XCJBY21lIENvcnBcIiB2YWx1ZT17Y2hlY2tvdXREYXRhLmNvbXBhbnlOYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRDaGVja291dERhdGEoey4uLmNoZWNrb3V0RGF0YSwgY29tcGFueU5hbWU6IGUudGFyZ2V0LnZhbHVlfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiam9iVGl0bGVcIj5Kb2IgVGl0bGU8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwiam9iVGl0bGVcIiBwbGFjZWhvbGRlcj1cIk1hbmFnZXJcIiB2YWx1ZT17Y2hlY2tvdXREYXRhLmpvYlRpdGxlfSBvbkNoYW5nZT17ZSA9PiBzZXRDaGVja291dERhdGEoey4uLmNoZWNrb3V0RGF0YSwgam9iVGl0bGU6IGUudGFyZ2V0LnZhbHVlfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD5JbmR1c3RyeTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17Y2hlY2tvdXREYXRhLmluZHVzdHJ5fSBvblZhbHVlQ2hhbmdlPXsodikgPT4gc2V0Q2hlY2tvdXREYXRhKHsuLi5jaGVja291dERhdGEsIGluZHVzdHJ5OiB2fSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXI+PFNlbGVjdFZhbHVlIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGluZHVzdHJ5XCIgLz48L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJ0ZWNoXCI+VGVjaG5vbG9neTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJoZWFsdGhcIj5IZWFsdGhjYXJlPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cImZpbmFuY2VcIj5GaW5hbmNlPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cImVkdVwiPkVkdWNhdGlvbjwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJvdGhlclwiPk90aGVyPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+Q29tcGFueSBTaXplPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCB2YWx1ZT17Y2hlY2tvdXREYXRhLmNvbXBhbnlTaXplfSBvblZhbHVlQ2hhbmdlPXsodikgPT4gc2V0Q2hlY2tvdXREYXRhKHsuLi5jaGVja291dERhdGEsIGNvbXBhbnlTaXplOiB2fSl9IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPjxSYWRpb0dyb3VwSXRlbSB2YWx1ZT1cIjEtMTBcIiBpZD1cInNpemUtMVwiIC8+PExhYmVsIGh0bWxGb3I9XCJzaXplLTFcIj4xLTEwPC9MYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+PFJhZGlvR3JvdXBJdGVtIHZhbHVlPVwiMTEtNTBcIiBpZD1cInNpemUtMlwiIC8+PExhYmVsIGh0bWxGb3I9XCJzaXplLTJcIj4xMS01MDwvTGFiZWw+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPjxSYWRpb0dyb3VwSXRlbSB2YWx1ZT1cIjUxLTIwMFwiIGlkPVwic2l6ZS0zXCIgLz48TGFiZWwgaHRtbEZvcj1cInNpemUtM1wiPjUxLTIwMDwvTGFiZWw+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPjxSYWRpb0dyb3VwSXRlbSB2YWx1ZT1cIjIwMStcIiBpZD1cInNpemUtNFwiIC8+PExhYmVsIGh0bWxGb3I9XCJzaXplLTRcIj4yMDErPC9MYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcmVmZXJlbmNlcyAmIFRvZ2dsZXMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gdmFsdWU9XCJwcmVmZXJlbmNlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblRyaWdnZXI+UHJlZmVyZW5jZXMgJiBOb3RpZmljYXRpb25zPC9BY2NvcmRpb25UcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnQgY2xhc3NOYW1lPVwic3BhY2UteS02IHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPk5ld3NsZXR0ZXI8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5SZWNlaXZlIHdlZWtseSB1cGRhdGVzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e2NoZWNrb3V0RGF0YS5uZXdzbGV0dGVyfSBvbkNoZWNrZWRDaGFuZ2U9eyhjKSA9PiBzZXRDaGVja291dERhdGEoey4uLmNoZWNrb3V0RGF0YSwgbmV3c2xldHRlcjogY30pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPlNNUyBBbGVydHM8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5HZXQgZGVsaXZlcnkgbm90aWZpY2F0aW9ucyB2aWEgdGV4dC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtjaGVja291dERhdGEuc21zQWxlcnRzfSBvbkNoZWNrZWRDaGFuZ2U9eyhjKSA9PiBzZXRDaGVja291dERhdGEoey4uLmNoZWNrb3V0RGF0YSwgc21zQWxlcnRzOiBjfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD5QcmVmZXJyZWQgQ29udGFjdCBNZXRob2Q8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVHcm91cCB0eXBlPVwic2luZ2xlXCIgdmFsdWU9e2NoZWNrb3V0RGF0YS5wcmVmZXJyZWRDb250YWN0fSBvblZhbHVlQ2hhbmdlPXsodikgPT4gdiAmJiBzZXRDaGVja291dERhdGEoey4uLmNoZWNrb3V0RGF0YSwgcHJlZmVycmVkQ29udGFjdDogdn0pfSBjbGFzc05hbWU9XCJqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlR3JvdXBJdGVtIHZhbHVlPVwiZW1haWxcIiBhcmlhLWxhYmVsPVwiRW1haWxcIj5FbWFpbDwvVG9nZ2xlR3JvdXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUdyb3VwSXRlbSB2YWx1ZT1cInBob25lXCIgYXJpYS1sYWJlbD1cIlBob25lXCI+UGhvbmU8L1RvZ2dsZUdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVHcm91cEl0ZW0gdmFsdWU9XCJzbGFja1wiIGFyaWEtbGFiZWw9XCJTbGFja1wiPlNsYWNrPC9Ub2dnbGVHcm91cEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub2dnbGVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPkV4cGVyaWVuY2UgTGV2ZWwgKDEtMTAwKTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciB2YWx1ZT17W2NoZWNrb3V0RGF0YS5leHBlcmllbmNlTGV2ZWxdfSBvblZhbHVlQ2hhbmdlPXsoW3ZdKSA9PiBzZXRDaGVja291dERhdGEoey4uLmNoZWNrb3V0RGF0YSwgZXhwZXJpZW5jZUxldmVsOiB2fSl9IG1heD17MTAwfSBzdGVwPXsxfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yaWdodCB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57Y2hlY2tvdXREYXRhLmV4cGVyaWVuY2VMZXZlbH0lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU3VydmV5ICYgVGV4dCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB2YWx1ZT1cInN1cnZleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblRyaWdnZXI+UHJvamVjdCAmIFN1cnZleTwvQWNjb3JkaW9uVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50IGNsYXNzTmFtZT1cInNwYWNlLXktNCBwdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPlByb2plY3QgRGVzY3JpcHRpb248L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgYWJvdXQgeW91ciBnb2Fscy4uLlwiIHZhbHVlPXtjaGVja291dERhdGEucHJvamVjdERlc2NyaXB0aW9ufSBvbkNoYW5nZT17ZSA9PiBzZXRDaGVja291dERhdGEoey4uLmNoZWNrb3V0RGF0YSwgcHJvamVjdERlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZX0pfSBjbGFzc05hbWU9XCJtaW4taC1bMTAwcHhdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPkRlc2lyZWQgU3RhcnQgRGF0ZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFRyaWdnZXIgYXNDaGlsZD48SW5mbyBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+PC9Ub29sdGlwVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcENvbnRlbnQ+PHA+V2hlbiBkbyB5b3Ugd2FudCB0byBiZWdpbj88L3A+PC9Ub29sdGlwQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LXN0YXJ0IHRleHQtbGVmdCBmb250LW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhckljb24gY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hlY2tvdXREYXRhLnN0YXJ0RGF0ZSA/IGZvcm1hdChjaGVja291dERhdGEuc3RhcnREYXRlLCBcIlBQUFwiKSA6IDxzcGFuPlBpY2sgYSBkYXRlPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJDb250ZW50IGNsYXNzTmFtZT1cInctYXV0byBwLTBcIj48Q2FsZW5kYXIgbW9kZT1cInNpbmdsZVwiIHNlbGVjdGVkPXtjaGVja291dERhdGEuc3RhcnREYXRlfSBvblNlbGVjdD17KGQpID0+IGQgJiYgc2V0Q2hlY2tvdXREYXRhKHsuLi5jaGVja291dERhdGEsIHN0YXJ0RGF0ZTogZH0pfSBpbml0aWFsRm9jdXMgLz48L1BvcG92ZXJDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPkhvdyBkaWQgeW91IGZpbmQgdXM/PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtjaGVja291dERhdGEuZm91bmRVc30gb25WYWx1ZUNoYW5nZT17KHYpID0+IHNldENoZWNrb3V0RGF0YSh7Li4uY2hlY2tvdXREYXRhLCBmb3VuZFVzOiB2fSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXI+PFNlbGVjdFZhbHVlIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGFuIG9wdGlvblwiIC8+PC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiZ29vZ2xlXCI+R29vZ2xlPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cInNvY2lhbFwiPlNvY2lhbCBNZWRpYTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJmcmllbmRcIj5GcmllbmQvQ29sbGVhZ3VlPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+U2F0aXNmYWN0aW9uIEV4cGVjdGF0aW9uPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCB2YWx1ZT17Y2hlY2tvdXREYXRhLnN1cnZleVNhdGlzZmFjdGlvbn0gb25WYWx1ZUNoYW5nZT17KHYpID0+IHNldENoZWNrb3V0RGF0YSh7Li4uY2hlY2tvdXREYXRhLCBzdXJ2ZXlTYXRpc2ZhY3Rpb246IHZ9KX0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWF4LXctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKHJhdGluZyA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyYXRpbmd9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwSXRlbSB2YWx1ZT17cmF0aW5nLnRvU3RyaW5nKCl9IGlkPXtgcmF0aW5nLSR7cmF0aW5nfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9e2ByYXRpbmctJHtyYXRpbmd9YH0+e3JhdGluZ308L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEZpbGUgVXBsb2FkICYgRXh0cmFzICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHZhbHVlPVwidXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uVHJpZ2dlcj5VcGxvYWRzICYgRXh0cmFzPC9BY2NvcmRpb25UcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnQgY2xhc3NOYW1lPVwic3BhY2UteS00IHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+UmVmZXJlbmNlIERvY3VtZW50IChPcHRpb25hbCk8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCByb3VuZGVkLWxnIHAtNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1tdXRlZC81MCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZENsb3VkIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1iLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPkNsaWNrIHRvIHVwbG9hZCBvciBkcmFnIGFuZCBkcm9wPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5QREYsIERPQ1gsIG9yIFpJUCAobWF4IDEwTUIpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiaGlkZGVuXCIgb25DaGFuZ2U9eygpID0+IHNldENoZWNrb3V0RGF0YSh7Li4uY2hlY2tvdXREYXRhLCBmaWxlVXBsb2FkZWQ6IHRydWV9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVja291dERhdGEuZmlsZVVwbG9hZGVkICYmIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPVwibXQtMlwiPkZpbGUgc2VsZWN0ZWQ8L0JhZGdlPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+VC1TaGlydCBTaXplIChHaWZ0KTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtjaGVja291dERhdGEudHNoaXJ0U2l6ZX0gb25WYWx1ZUNoYW5nZT17KHYpID0+IHNldENoZWNrb3V0RGF0YSh7Li4uY2hlY2tvdXREYXRhLCB0c2hpcnRTaXplOiB2fSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VHJpZ2dlcj48U2VsZWN0VmFsdWUgcGxhY2Vob2xkZXI9XCJTaXplXCIgLz48L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiU1wiPlNtYWxsPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiTVwiPk1lZGl1bTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cIkxcIj5MYXJnZTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cIlhMXCI+WC1MYXJnZTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD5UaGVtZSBQcmVmZXJlbmNlPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVHcm91cCB0eXBlPVwic2luZ2xlXCIgdmFsdWU9e2NoZWNrb3V0RGF0YS5jb2xvclRoZW1lfSBvblZhbHVlQ2hhbmdlPXsodikgPT4gdiAmJiBzZXRDaGVja291dERhdGEoey4uLmNoZWNrb3V0RGF0YSwgY29sb3JUaGVtZTogdn0pfSBjbGFzc05hbWU9XCJqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVHcm91cEl0ZW0gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9Ub2dnbGVHcm91cEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVHcm91cEl0ZW0gdmFsdWU9XCJkYXJrXCI+RGFyazwvVG9nZ2xlR3JvdXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub2dnbGVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggaWQ9XCJhZ2UtdmVyaWZ5XCIgY2hlY2tlZD17Y2hlY2tvdXREYXRhLmFnZVZlcmlmaWNhdGlvbn0gb25DaGVja2VkQ2hhbmdlPXsoYykgPT4gc2V0Q2hlY2tvdXREYXRhKHsuLi5jaGVja291dERhdGEsIGFnZVZlcmlmaWNhdGlvbjogISFjfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJhZ2UtdmVyaWZ5XCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLW5vbmVcIj5JIHZlcmlmeSB0aGF0IEkgYW0gb3ZlciAxOCB5ZWFycyBvbGQ8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFN0ZXAgMjogQmlsbGluZyAqL31cbiAgICAgICAgICAgICAgICAgICAge2NoZWNrb3V0U3RlcCA9PT0gMiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNoZWNrb3V0LXN0ZXAtYmlsbGluZ1wiIGNsYXNzTmFtZT1cImNoZWNrb3V0LXN0ZXAtYmlsbGluZyBzcGFjZS15LTYgYW5pbWF0ZS1pbiBmYWRlLWluIHNsaWRlLWluLWZyb20tcmlnaHQtNCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5CaWxsaW5nIERldGFpbHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgQWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiam9obkBleGFtcGxlLmNvbVwiIHZhbHVlPXtjaGVja291dERhdGEuZW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldENoZWNrb3V0RGF0YSh7Li4uY2hlY2tvdXREYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWV9KX0gb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja291dERhdGEuZW1haWwgJiYgY2hlY2tvdXREYXRhLmVtYWlsLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyaWdnZXJpbmcgVmlzdWFsIFZpc2l0b3IgLyBSZXRhcmdldGluZyBwaXhlbCBmb3I6XCIsIGNoZWNrb3V0RGF0YS5lbWFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3R1YiBmb3IgQWJhbmRvbmVkIENhcnQgcmVjb3ZlcnkgaG9va1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKCcvYXBpL3JldGFyZ2V0aW5nL2lkZW50aWZ5JywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogY2hlY2tvdXREYXRhLmVtYWlsLCBjYXJ0IH0pIH0pLmNhdGNoKCgpID0+IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cImZpcnN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiSm9oblwiIHZhbHVlPXtjaGVja291dERhdGEuZmlyc3ROYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRDaGVja291dERhdGEoey4uLmNoZWNrb3V0RGF0YSwgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZX0pfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwibGFzdE5hbWVcIiBwbGFjZWhvbGRlcj1cIkRvZVwiIHZhbHVlPXtjaGVja291dERhdGEubGFzdE5hbWV9IG9uQ2hhbmdlPXtlID0+IHNldENoZWNrb3V0RGF0YSh7Li4uY2hlY2tvdXREYXRhLCBsYXN0TmFtZTogZS50YXJnZXQudmFsdWV9KX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIj5TdHJlZXQgQWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJhZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCIxMjMgTWFpbiBTdFwiIHZhbHVlPXtjaGVja291dERhdGEuYWRkcmVzc30gb25DaGFuZ2U9e2UgPT4gc2V0Q2hlY2tvdXREYXRhKHsuLi5jaGVja291dERhdGEsIGFkZHJlc3M6IGUudGFyZ2V0LnZhbHVlfSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImNpdHlcIj5DaXR5PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwiY2l0eVwiIHBsYWNlaG9sZGVyPVwiTmV3IFlvcmtcIiB2YWx1ZT17Y2hlY2tvdXREYXRhLmNpdHl9IG9uQ2hhbmdlPXtlID0+IHNldENoZWNrb3V0RGF0YSh7Li4uY2hlY2tvdXREYXRhLCBjaXR5OiBlLnRhcmdldC52YWx1ZX0pfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInppcFwiPlpJUCBDb2RlPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwiemlwXCIgcGxhY2Vob2xkZXI9XCIxMDAwMVwiIHZhbHVlPXtjaGVja291dERhdGEuemlwfSBvbkNoYW5nZT17ZSA9PiBzZXRDaGVja291dERhdGEoey4uLmNoZWNrb3V0RGF0YSwgemlwOiBlLnRhcmdldC52YWx1ZX0pfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFN0ZXAgMzogU2hpcHBpbmcgKi99XG4gICAgICAgICAgICAgICAgICAgIHtjaGVja291dFN0ZXAgPT09IDMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGVja291dC1zdGVwLXNoaXBwaW5nXCIgY2xhc3NOYW1lPVwiY2hlY2tvdXQtc3RlcC1zaGlwcGluZyBzcGFjZS15LTYgYW5pbWF0ZS1pbiBmYWRlLWluIHNsaWRlLWluLWZyb20tcmlnaHQtNCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5TaGlwcGluZyBNZXRob2Q8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cCB2YWx1ZT17Y2hlY2tvdXREYXRhLnNoaXBwaW5nTWV0aG9kfSBvblZhbHVlQ2hhbmdlPXsodikgPT4gc2V0Q2hlY2tvdXREYXRhKHsuLi5jaGVja291dERhdGEsIHNoaXBwaW5nTWV0aG9kOiB2fSl9IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtMiBib3JkZXIgcC00IHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctbXV0ZWQvNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwSXRlbSB2YWx1ZT1cInN0YW5kYXJkXCIgaWQ9XCJzdGFuZGFyZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwic3RhbmRhcmRcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBjdXJzb3ItcG9pbnRlclwiPlN0YW5kYXJkIFNoaXBwaW5nICgzLTUgZGF5cyk8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+RnJlZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTIgYm9yZGVyIHAtNCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLW11dGVkLzUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cEl0ZW0gdmFsdWU9XCJleHByZXNzXCIgaWQ9XCJleHByZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJleHByZXNzXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gY3Vyc29yLXBvaW50ZXJcIj5FeHByZXNzIFNoaXBwaW5nICgxLTIgZGF5cyk8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+JDE1LjAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7LyogU3RlcCA0OiBQYXltZW50ICovfVxuICAgICAgICAgICAgICAgICAgICB7Y2hlY2tvdXRTdGVwID09PSA0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hlY2tvdXQtc3RlcC1wYXltZW50XCIgY2xhc3NOYW1lPVwiY2hlY2tvdXQtc3RlcC1wYXltZW50IHNwYWNlLXktNiBhbmltYXRlLWluIGZhZGUtaW4gc2xpZGUtaW4tZnJvbS1yaWdodC00IGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPlBheW1lbnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJnLWNhcmQgcC02IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSBmb250LW1lZGl1bSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlZGl0Q2FyZCBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWN1cmVkIENyZWRpdCBDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD5DYXJkIE51bWJlcjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIioqKiogKioqKiAqKioqIDQyNDJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+RXhwaXJ5IERhdGU8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk1NL1lZXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPkNWQzwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiMTIzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogT3JkZXIgU3VtbWFyeSBTaWRlYmFyICovfVxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hlY2tvdXQtc3VtbWFyeS1zaWRlYmFyXCIgY2xhc3NOYW1lPVwiY2hlY2tvdXQtc3VtbWFyeS1zaWRlYmFyIHctZnVsbCBtZDp3LTgwIG1kOmgtWzkzdmhdIGJnLWNhcmQgYm9yZGVyLXQgbWQ6Ym9yZGVyLXQtMCBtZDpib3JkZXItbCBwLTQgbWQ6cC02IGZsZXggZmxleC1jb2wgc2hyaW5rLTAgb3JkZXItMlwiPlxuICAgICAgICAgICAgICAgIDxoMyBpZD1cIm9yZGVyLXN1bW1hcnktdGl0bGVcIiBjbGFzc05hbWU9XCJvcmRlci1zdW1tYXJ5LXRpdGxlIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBtYi00XCI+e3QoJ29yZGVyU3VtbWFyeScpfTwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWQ6b3ZlcmZsb3cteS1hdXRvIC1teC00IG1kOi1teC02IHB4LTQgbWQ6cHgtNiBtYi00IG1heC1oLVszNXZoXSBtZDptYXgtaC1ub25lIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgcGItNFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2FydC5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uY2FydEl0ZW1JZCB8fCBpdGVtLmlkfSBpZD17YHN1bW1hcnktaXRlbS0ke2l0ZW0uY2FydEl0ZW1JZCB8fCBpdGVtLmlkfWB9IGNsYXNzTmFtZT1cInN1bW1hcnktaXRlbSBmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e2l0ZW0ucXVhbnRpdHl9eDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZS1jbGFtcC0xXCI+e2l0ZW0ubmFtZX0ge2l0ZW0uZ3JvdXBJZCAmJiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1bOHB4XSBoLTQgcHgtMVwiPnt0KCdidW5kbGUnKX08L0JhZGdlPn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNwZWNpYWxQcmljZSAhPT0gdW5kZWZpbmVkID8gZm9ybWF0UHJpY2UoaXRlbS5zcGVjaWFsUHJpY2UgKiBpdGVtLnF1YW50aXR5KSA6IGZvcm1hdFByaWNlKGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hlY2tvdXQtc3VtbWFyeS10b3RhbHNcIiBjbGFzc05hbWU9XCJjaGVja291dC1zdW1tYXJ5LXRvdGFscyBzcGFjZS15LTMgcHQtNCBib3JkZXItdFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnt0KCdzdWJ0b3RhbCcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdFByaWNlKHN1YnRvdGFsKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtkaXNjb3VudEFwcGxpZWQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIHRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdkaXNjb3VudCcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4te2Zvcm1hdFByaWNlKGRpc2NvdW50QXBwbGllZCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e3QoJ3NoaXBwaW5nJyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2hlY2tvdXRTdGVwID49IDMgPyBmb3JtYXRQcmljZShzaGlwcGluZ0Nvc3QpIDogdCgnY2FsY3VsYXRlZCcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnt0KCd0YXhlcycpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdFByaWNlKHRheGVzKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZm9udC1zZW1pYm9sZCB0ZXh0LWxnIHB0LTIgYm9yZGVyLXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ3RvdGFsJyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0UHJpY2UodG90YWwpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2NoZWNrb3V0U3RlcCA9PT0gNCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBpdGVtcy1zdGFydCBzcGFjZS14LTIgYmctbXV0ZWQvNTAgcC0zIHJvdW5kZWQtbWQgYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlcm1zXCIgXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9zQWNjZXB0ZWR9IFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KGMpID0+IHNldFRvc0FjY2VwdGVkKCEhYyl9IFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTAuNVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVybXNcIiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIGxlYWRpbmctdGlnaHQgcGVlci1kaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgcGVlci1kaXNhYmxlZDpvcGFjaXR5LTcwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgSSBhZ3JlZSB0byB0aGUgPERpYWxvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LXByaW1hcnlcIj5UZXJtcyBvZiBTZXJ2aWNlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ1RyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGU+VGVybXMgb2YgU2VydmljZTwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHJlYWQgb3VyIHRlcm1zIG9mIHNlcnZpY2UgY2FyZWZ1bGx5IGJlZm9yZSBwcm9jZWVkaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQXJlYSBjbGFzc05hbWU9XCJoLVs0MDBweF0gdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+MS4gQWNjZXB0YW5jZSBvZiBUZXJtczwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJ5IGFjY2Vzc2luZyBhbmQgdXNpbmcgdGhpcyBzZXJ2aWNlLCB5b3UgYWNjZXB0IGFuZCBhZ3JlZSB0byBiZSBib3VuZCBieSB0aGUgdGVybXMgYW5kIHByb3Zpc2lvbiBvZiB0aGlzIGFncmVlbWVudC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPjIuIFVzZSBMaWNlbnNlPC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGVybWlzc2lvbiBpcyBncmFudGVkIHRvIHRlbXBvcmFyaWx5IGRvd25sb2FkIG9uZSBjb3B5IG9mIHRoZSBtYXRlcmlhbHMgb24gdGhpcyB3ZWJzaXRlIGZvciBwZXJzb25hbCwgbm9uLWNvbW1lcmNpYWwgdHJhbnNpdG9yeSB2aWV3aW5nIG9ubHkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz4zLiBEaXNjbGFpbWVyPC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIG1hdGVyaWFscyBvbiB0aGlzIHdlYnNpdGUgYXJlIHByb3ZpZGVkIG9uIGFuICdhcyBpcycgYmFzaXMuIFdlIG1ha2Ugbm8gd2FycmFudGllcywgZXhwcmVzc2VkIG9yIGltcGxpZWQsIGFuZCBoZXJlYnkgZGlzY2xhaW0gYW5kIG5lZ2F0ZSBhbGwgb3RoZXIgd2FycmFudGllcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPjQuIExpbWl0YXRpb25zPC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW4gbm8gZXZlbnQgc2hhbGwgd2Ugb3Igb3VyIHN1cHBsaWVycyBiZSBsaWFibGUgZm9yIGFueSBkYW1hZ2VzIGFyaXNpbmcgb3V0IG9mIHRoZSB1c2Ugb3IgaW5hYmlsaXR5IHRvIHVzZSB0aGUgbWF0ZXJpYWxzIG9uIG91ciB3ZWJzaXRlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPi5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAge2NoZWNrb3V0U3RlcCA+IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eygpID0+IHNldENoZWNrb3V0U3RlcChjaGVja291dFN0ZXAgLSAxKX0+XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2JhY2snKX1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICBmb3JtPVwiY2hlY2tvdXQtZm9ybVwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTFcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tvdXRTdGVwID09PSA0ICYmICF0b3NBY2NlcHRlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NoZWNrb3V0U3RlcCA8IDQgPyB0KCdjb250aW51ZScpIDogYCR7dCgncGF5Jyl9ICR7Zm9ybWF0UHJpY2UodG90YWwpfWB9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1RhYnNDb250ZW50PlxuXG4gICAgICAgICAgey8qIE92ZXJ2aWV3IFRhYiAqL31cbiAgICAgICAgICA8VGFic0NvbnRlbnQgdmFsdWU9XCJvdmVydmlld1wiIGlkPVwidGFiLWNvbnRlbnQtb3ZlcnZpZXdcIiBjbGFzc05hbWU9XCJvdmVydmlldy10YWItY29udGVudCBmbGV4LTEgZmxleCBmbGV4LWNvbCBtLTAgZGF0YS1bc3RhdGU9YWN0aXZlXTpmbGV4IG92ZXJmbG93LWhpZGRlbiBiZy1tdXRlZC8xMFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJ2aWV3LWNvbnRlbnQtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwib3ZlcnZpZXctY29udGVudC1jb250YWluZXIgZmxleC0xIG1pbi1oLTAgcmVsYXRpdmUgbWF4LWgtWzcwdmhdIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiB0ZXh0LWNlbnRlciBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgdHJhY2tpbmctdGlnaHRcIj5Zb3VyIENhcnQgT3ZlcnZpZXc8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5EaXNjb3ZlciBtb3JlIGFib3V0IHRoZSBpdGVtcyB5b3UndmUgc2VsZWN0ZWQuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtjYXJ0Lmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+WW91ciBjYXJ0IGlzIGVtcHR5LiBBZGQgc29tZSBpdGVtcyB0byBzZWUgdGhlaXIgb3ZlcnZpZXchPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXJ0Lm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FydEl0ZW1SZXZpZXcga2V5PXtpdGVtLmNhcnRJdGVtSWQgfHwgaXRlbS5pZH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVGFic0NvbnRlbnQ+XG4gICAgICAgIDwvVGFicz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cImljb25cIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTEwIHctMTAgcm91bmRlZC1mdWxsXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBzZXRQcmVzZW50YXRpb25Nb2RlKCdzaGVldCcpO1xuICAgICAgICBzZXRJc09wZW4odHJ1ZSk7XG4gICAgICAgIHNldEFjdGl2ZVRhYihcImNhcnRcIik7XG4gICAgICB9fT5cbiAgICAgICAgPFNob3BwaW5nQ2FydCBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAge3RvdGFsSXRlbXMgPiAwICYmIChcbiAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXJpZ2h0LTIgLXRvcC0yIGZsZXggaC01IHctNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIHAtMCB0ZXh0LVsxMHB4XVwiPlxuICAgICAgICAgICAge3RvdGFsSXRlbXN9XG4gICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgKX1cbiAgICAgIDwvQnV0dG9uPlxuXG4gICAgICA8U2hlZXQgb3Blbj17aXNPcGVuICYmIHByZXNlbnRhdGlvbk1vZGUgPT09ICdzaGVldCd9IG9uT3BlbkNoYW5nZT17c2V0SXNPcGVufT5cbiAgICAgICAgPFNoZWV0Q29udGVudCBpZD1cImNhcnQtb3ZlcmxheS1zaGVldFwiIGNsYXNzTmFtZT17YGNhcnQtb3ZlcmxheS1zaGVldCB3LWZ1bGwgcC0wIGZsZXggZmxleC1jb2wgZ2FwLTAgYm9yZGVyLWwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7YWN0aXZlVGFiID09PSAnY2hlY2tvdXQnID8gJ3NtOm1heC13LVs3MHZ3XScgOiAnc206bWF4LXctbWQnfWB9PlxuICAgICAgICAgIDxTaGVldEhlYWRlciBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICA8U2hlZXRUaXRsZT5IeXBlckNhcnQgT3ZlcmxheTwvU2hlZXRUaXRsZT5cbiAgICAgICAgICA8L1NoZWV0SGVhZGVyPlxuICAgICAgICAgIHtjYXJ0Q29udGVudH1cbiAgICAgICAgPC9TaGVldENvbnRlbnQ+XG4gICAgICA8L1NoZWV0PlxuXG4gICAgICA8RGlhbG9nIG9wZW49e2lzT3BlbiAmJiBwcmVzZW50YXRpb25Nb2RlID09PSAnbW9kYWwnfSBvbk9wZW5DaGFuZ2U9e3NldElzT3Blbn0+XG4gICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17YHAtMCBmbGV4IGZsZXgtY29sIGdhcC0wIG92ZXJmbG93LWhpZGRlbiAke2FjdGl2ZVRhYiA9PT0gJ2NoZWNrb3V0JyA/ICdzbTptYXgtdy1bNzB2d10gaC1bOTB2aF0nIDogJ3NtOm1heC13LTJ4bCBoLVs4MHZoXSd9YH0+XG4gICAgICAgICAgPERpYWxvZ0hlYWRlciBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICA8RGlhbG9nVGl0bGU+SHlwZXJDYXJ0IE1vZGFsPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cbiAgICAgICAgICB7Y2FydENvbnRlbnR9XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuXG4gICAgICB7cHJlc2VudGF0aW9uTW9kZSA9PT0gJ2lubGluZScgJiYgaW5saW5lVGFyZ2V0ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5saW5lVGFyZ2V0KSAmJiBjcmVhdGVQb3J0YWwoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHlwZXItY2FydC1pbmxpbmUgdy1mdWxsIGJvcmRlciByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1iYWNrZ3JvdW5kIHNoYWRvdy1zbSBmbGV4IGZsZXgtY29sIGgtWzgwMHB4XSBtYXgtaC1bOTB2aF1cIj5cbiAgICAgICAgICB7Y2FydENvbnRlbnR9XG4gICAgICAgIDwvZGl2PixcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbmxpbmVUYXJnZXQpIVxuICAgICAgKX1cblxuICAgICAge3ByZXNlbnRhdGlvbk1vZGUgPT09ICdjYXJkLW92ZXJsYXknICYmIGlubGluZVRhcmdldCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlubGluZVRhcmdldCkgJiYgY29uZmlndXJpbmdJdGVtICYmIGNyZWF0ZVBvcnRhbChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHotMjAgYmctY2FyZCBmbGV4IGZsZXgtY29sIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAge3JlbmRlckNvbmZpZ3VyYXRvcigpfVxuICAgICAgICA8L2Rpdj4sXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5saW5lVGFyZ2V0KSFcbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVQb3J0YWwiLCJTaGVldCIsIlNoZWV0Q29udGVudCIsIlNoZWV0SGVhZGVyIiwiU2hlZXRUaXRsZSIsIkJ1dHRvbiIsIklucHV0IiwiTGFiZWwiLCJUYWJzIiwiVGFic0NvbnRlbnQiLCJUYWJzTGlzdCIsIlRhYnNUcmlnZ2VyIiwiU2Nyb2xsQXJlYSIsIlNob3BwaW5nQ2FydCIsIlBsdXMiLCJNaW51cyIsIlRyYXNoMiIsIkNyZWRpdENhcmQiLCJTaGllbGRDaGVjayIsIkdpZnQiLCJBcnJvd0xlZnQiLCJTZXR0aW5nczIiLCJSb3RhdGVDY3ciLCJTaGFyZTIiLCJUYWciLCJCYWRnZSIsIlRleHRhcmVhIiwiQ2hlY2tib3giLCJTZWxlY3QiLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0SXRlbSIsIlNlbGVjdFRyaWdnZXIiLCJTZWxlY3RWYWx1ZSIsIlJhZGlvR3JvdXAiLCJSYWRpb0dyb3VwSXRlbSIsIkRpYWxvZyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dEZXNjcmlwdGlvbiIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiRGlhbG9nVHJpZ2dlciIsIlN3aXRjaCIsIlNsaWRlciIsIkFjY29yZGlvbiIsIkFjY29yZGlvbkNvbnRlbnQiLCJBY2NvcmRpb25JdGVtIiwiQWNjb3JkaW9uVHJpZ2dlciIsIlRvZ2dsZUdyb3VwIiwiVG9nZ2xlR3JvdXBJdGVtIiwiQ2FsZW5kYXIiLCJQb3BvdmVyIiwiUG9wb3ZlckNvbnRlbnQiLCJQb3BvdmVyVHJpZ2dlciIsImZvcm1hdCIsIkNhbGVuZGFySWNvbiIsIlVwbG9hZENsb3VkIiwiSW5mbyIsIkFsZXJ0Q2lyY2xlIiwiVG9vbHRpcCIsIlRvb2x0aXBDb250ZW50IiwiVG9vbHRpcFByb3ZpZGVyIiwiVG9vbHRpcFRyaWdnZXIiLCJQcm9ncmVzcyIsIkFsZXJ0IiwiQWxlcnREZXNjcmlwdGlvbiIsIkFsZXJ0VGl0bGUiLCJIb3ZlckNhcmQiLCJIb3ZlckNhcmRDb250ZW50IiwiSG92ZXJDYXJkVHJpZ2dlciIsImluaXRpYWxDYXJ0IiwiaWQiLCJuYW1lIiwicHJpY2UiLCJxdWFudGl0eSIsImltYWdlIiwidHlwZSIsImNvbmZpZ3VyYXRpb24iLCJzd2l0Y2hlcyIsImtleWNhcHMiLCJjb25maWdGbG93Iiwia2V5Iiwic3RlcCIsIm9wdGlvbnMiLCJyZXZpZXdDb250ZW50IiwicGFnZVNlbGVjdG9yIiwiaW50ZXJ2YWwiLCJyZXZpZXdVcmwiLCJVUFNFTExfUFJPRFVDVFMiLCJpY29uIiwiY2xhc3NOYW1lIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIkNhcnRJdGVtUmV2aWV3IiwiaXRlbSIsImFqYXhDb250ZW50Iiwic2V0QWpheENvbnRlbnQiLCJwYWdlQ29udGVudCIsInNldFBhZ2VDb250ZW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoNCIsInAiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImg1IiwiQ2FydE92ZXJsYXkiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJwcmVzZW50YXRpb25Nb2RlIiwic2V0UHJlc2VudGF0aW9uTW9kZSIsImlubGluZVRhcmdldCIsInNldElubGluZVRhcmdldCIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImNhcnQiLCJzZXRDYXJ0IiwiY29uZmlndXJpbmdJdGVtIiwic2V0Q29uZmlndXJpbmdJdGVtIiwiY29uZmlnVmlld01vZGUiLCJzZXRDb25maWdWaWV3TW9kZSIsImNvbmZpZ1N0ZXBJbmRleCIsInNldENvbmZpZ1N0ZXBJbmRleCIsImNvbmZpZ0xvYWRpbmciLCJzZXRDb25maWdMb2FkaW5nIiwiY29uZmlnRXJyb3IiLCJzZXRDb25maWdFcnJvciIsImNvbmZpZ1Jlc3BvbnNlIiwic2V0Q29uZmlnUmVzcG9uc2UiLCJkaXNjb3VudENvZGUiLCJzZXREaXNjb3VudENvZGUiLCJkaXNjb3VudEFwcGxpZWQiLCJzZXREaXNjb3VudEFwcGxpZWQiLCJvcmRlck5vdGVzIiwic2V0T3JkZXJOb3RlcyIsInNldHRpbmdzIiwic2V0U2V0dGluZ3MiLCJjdXJyZW5jeSIsImN1cnJlbmN5U3ltYm9sIiwic3RyaW5ncyIsImNoZWNrb3V0Iiwib3ZlcnZpZXciLCJlbXB0eUNhcnRUaXRsZSIsImVtcHR5Q2FydERlc2MiLCJjb250aW51ZVNob3BwaW5nIiwicHJvY2VlZFRvQ2hlY2tvdXQiLCJwcm9jZWVkVG9PcHRpb25zIiwib3JkZXJTdW1tYXJ5Iiwic3VidG90YWwiLCJzaGlwcGluZyIsInRheGVzIiwidG90YWwiLCJwYXkiLCJiYWNrIiwiY29udGludWUiLCJmcmVxdWVudGx5QWRkZWQiLCJhZGQiLCJhZGRlZCIsInF0eSIsImxvY2tlZCIsImJ1bmRsZSIsInNwZWNpYWxCdW5kbGUiLCJlZGl0Q29uZmlndXJhdGlvbiIsImNvbmZpZ3VyZUl0ZW0iLCJiaWxsZWRFdmVyeSIsImNhbGN1bGF0ZWROZXh0IiwiY2FsY3VsYXRlZCIsImFwcGx5IiwiZGlzY291bnQiLCJ0IiwiZm9ybWF0UHJpY2UiLCJ0b0ZpeGVkIiwib3BlbkNvbmZpZ3VyYXRvciIsImNoZWNrb3V0U3RlcCIsInNldENoZWNrb3V0U3RlcCIsInRvc0FjY2VwdGVkIiwic2V0VG9zQWNjZXB0ZWQiLCJjaGVja291dERhdGEiLCJzZXRDaGVja291dERhdGEiLCJlbWFpbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJ6aXAiLCJzaGlwcGluZ01ldGhvZCIsImNvbXBhbnlOYW1lIiwiam9iVGl0bGUiLCJpbmR1c3RyeSIsImNvbXBhbnlTaXplIiwiZXhwZXJpZW5jZUxldmVsIiwibmV3c2xldHRlciIsIm1hcmtldGluZ0VtYWlscyIsInNtc0FsZXJ0cyIsInByZWZlcnJlZENvbnRhY3QiLCJmb3VuZFVzIiwicHJvamVjdERlc2NyaXB0aW9uIiwic3RhcnREYXRlIiwiRGF0ZSIsInRlYW1NZW1iZXJzIiwiYnVkZ2V0IiwidXJnZW5jeSIsImNvbG9yVGhlbWUiLCJwcmltYXJ5R29hbCIsImZpbGVVcGxvYWRlZCIsInJlZmVycmFsQ29kZSIsInN1cnZleVNhdGlzZmFjdGlvbiIsInN1cnZleUZlZWRiYWNrIiwiZGlldGFyeVJlc3RyaWN0aW9ucyIsInRzaGlydFNpemUiLCJnaWZ0V3JhcCIsInNwZWNpYWxJbnN0cnVjdGlvbnMiLCJhZ3JlZWRUb1BvbGljaWVzIiwiYWdlVmVyaWZpY2F0aW9uIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJidW5kbGVEYXRhIiwiZ2V0IiwiaXRlbXMiLCJwYXJzZSIsImF0b2IiLCJzZXRUaW1lb3V0IiwibmV3VXJsIiwicGF0aG5hbWUiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJzaGFyZWRDYXJ0RGF0YSIsImhhbmRsZUFkZFRvQ2FydCIsImUiLCJjdXN0b21FdmVudCIsIm5ld0NhcnRJdGVtSWQiLCJub3ciLCJwcmV2IiwiZXhpc3RpbmciLCJmaW5kIiwibWFwIiwiY2FydEl0ZW1JZCIsImhhbmRsZUFkZEdyb3VwIiwiZ3JvdXBJZCIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJuZXdJdGVtcyIsIk1hdGgiLCJyYW5kb20iLCJoYW5kbGVPcGVuQ2FydCIsIm1vZGUiLCJwcmVzZW50YXRpb24iLCJ0YXJnZXQiLCJoYW5kbGVHbG9iYWxDbGljayIsImJ1dHRvbiIsImNsb3Nlc3QiLCJwcmV2ZW50RGVmYXVsdCIsImdldEF0dHJpYnV0ZSIsInBhcnNlRmxvYXQiLCJ1bmRlZmluZWQiLCJjb25maWdGbG93UmF3IiwiaGFuZGxlVXBkYXRlUXVhbnRpdHkiLCJkZWx0YSIsIm1heCIsImZpbHRlciIsImhhbmRsZVJlbW92ZUl0ZW0iLCJpdGVtVG9SZW1vdmUiLCJpIiwiaGFuZGxlQ29uZmlndXJlSXRlbSIsImhhbmRsZUFwcGx5UHJvbW8iLCJjb2RlIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVTZXRTaGlwcGluZyIsIm1ldGhvZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJIeXBlckNhcnQiLCJhZGRHcm91cCIsIm9wZW4iLCJ1cGRhdGVRdWFudGl0eSIsInJlbW92ZUl0ZW0iLCJhcHBseVByb21vIiwic2V0U2hpcHBpbmciLCJnZXRTaGFyZVVybCIsInBheWxvYWQiLCJidG9hIiwidXJsIiwiVVJMIiwiaHJlZiIsInNlYXJjaFBhcmFtcyIsInNldCIsInRvU3RyaW5nIiwic2NhblBhZ2UiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYXRhbG9nIiwic2VlbklkcyIsIlNldCIsImZvckVhY2giLCJoYXMiLCJjb25maWdGbG93U3RyIiwicHVzaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsInNhdmVDb25maWd1cmF0aW9uIiwicmVkdWNlIiwic3VtIiwic3BlY2lhbFByaWNlIiwiZGlzY291bnRlZFN1YnRvdGFsIiwic2hpcHBpbmdDb3N0IiwidG90YWxJdGVtcyIsImFwcGx5RGlzY291bnQiLCJoYW5kbGVTaGFyZUNhcnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJhbGVydCIsImhhbmRsZUNvbmZpZ05leHQiLCJjdXJyZW50U3RlcCIsImlzTGFzdFN0ZXAiLCJsZW5ndGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsImlucHV0c1ZhbGlkIiwiaW5wdXRzIiwiZXZlcnkiLCJpbnB1dCIsIkVycm9yIiwic29tZSIsIm1lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsInMiLCJoYW5kbGVDaGVja291dFN1Ym1pdCIsInRyYWNraW5nUGF5bG9hZCIsInRpbWVzdGFtcCIsImZvcm1JZCIsImZvcm1EYXRhIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBvc3RhbF9jb2RlIiwib3JnYW5pemF0aW9uIiwiZm9ybUxhYmVscyIsInBhdGgiLCJ1c2VyQWdlbnQiLCJ0cmFja2luZ0lkIiwibG9jYXRpb25JZCIsInNlc3Npb25JZCIsInByb3BlcnRpZXMiLCJkZXZpY2VUeXBlIiwidGVzdCIsImhlYWRlcnMiLCJ2ZXJzaW9uIiwicmVuZGVyQ29uZmlndXJhdG9yIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIiwiaDMiLCJpZHgiLCJ2YWwiLCJsYWJlbCIsIl8iLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwib25WYWx1ZUNoYW5nZSIsInYiLCJwbGFjZWhvbGRlciIsIm9wdCIsIm9uQ2hhbmdlIiwiaHRtbEZvciIsImlzU2VsZWN0ZWQiLCJkaXNhYmxlZCIsImNhcnRDb250ZW50IiwiZ3JvdXBlZENhcnQiLCJwcm9jZXNzZWRHcm91cHMiLCJpc0J1bmRsZSIsImdyb3VwIiwic3BhbiIsInVuaXF1ZUlkIiwidXBzZWxsIiwiaW5DYXJ0IiwiaXRlbVRvQ29uZmlndXJlIiwiZm9ybSIsIm9uU3VibWl0IiwiYXNDaGlsZCIsImRlZmF1bHRWYWx1ZSIsImNoZWNrZWQiLCJvbkNoZWNrZWRDaGFuZ2UiLCJjIiwiYXJpYS1sYWJlbCIsInNlbGVjdGVkIiwib25TZWxlY3QiLCJkIiwiaW5pdGlhbEZvY3VzIiwicmF0aW5nIiwib25CbHVyIiwiaW5jbHVkZXMiLCJsb2ciLCJyZXF1aXJlZCIsInN0cm9uZyIsIm9uT3BlbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBUSxFQUFFQyxTQUFTLFFBQVEsUUFBUTtBQUM1QyxTQUFTQyxZQUFZLFFBQVEsWUFBWTtBQUN6QyxTQUFTQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxVQUFVLFFBQVEsd0JBQXdCO0FBQ3JGLFNBQVNDLE1BQU0sUUFBUSx5QkFBeUI7QUFDaEQsU0FBU0MsS0FBSyxRQUFRLHdCQUF3QjtBQUM5QyxTQUFTQyxLQUFLLFFBQVEsd0JBQXdCO0FBQzlDLFNBQVNDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsUUFBUSx1QkFBdUI7QUFDaEYsU0FBU0MsVUFBVSxRQUFRLDhCQUE4QjtBQUN6RCxTQUFTQyxZQUFZLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQXVCQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsSUFBSSxFQUFjQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsUUFBUSxlQUFlO0FBQy9LLFNBQVNDLEtBQUssUUFBUSx3QkFBd0I7QUFDOUMsU0FBU0MsUUFBUSxRQUFRLDJCQUEyQjtBQUNwRCxTQUFTQyxRQUFRLFFBQVEsMkJB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