import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ShoppingAttendant.tsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ShoppingAttendant.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "/@id/__x00__jsx-source/jsx-dev-runtime";
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
import { Button } from "/src/components/ui/button.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { ScrollArea } from "/src/components/ui/scroll-area.tsx";
import { Bot, X, Send, Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=7dd7a232";
import { Badge } from "/src/components/ui/badge.tsx";
export function ShoppingAttendant() {
    _s();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: "1",
            role: "bot",
            content: "Hi! I'm your Shopping Attendant. I can help you find products, give you a tour, or help configure custom items. What would you like to do?",
            actions: [
                {
                    label: "Take a Tour",
                    action: ()=>handleCommand("tour")
                },
                {
                    label: "Find a Keyboard",
                    action: ()=>handleCommand("find_keyboard")
                }
            ]
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);
    useEffect(()=>{
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [
        messages,
        isTyping
    ]);
    useEffect(()=>{
        const handleAttendantEvent = (e)=>{
            const { command, args } = e.detail;
            if (command === 'open') setIsOpen(true);
            if (command === 'close') setIsOpen(false);
            if (command === 'message') {
                addMessage("bot", args.message, args.actions);
            }
            if (command === 'tour') {
                setIsOpen(true);
                handleCommand('tour');
            }
            if (command === 'highlight') {
                highlightElement(args.selector);
            }
            if (command === 'startConfigurator') {
                const productElement = document.querySelector(`[data-hc-id="${args.productId}"]`);
                if (productElement) {
                    productElement.click();
                }
            }
            if (command === 'suggestProducts') {
                setIsOpen(true);
                addMessage("bot", args.message || "I found these products for you:", args.products.map((p)=>({
                        label: `View ${p.name || p.id}`,
                        action: ()=>highlightElement(`[data-hc-id="${p.id}"]`)
                    })));
            }
        };
        window.addEventListener('hc-attendant', handleAttendantEvent);
        window.HyperAttendant = {
            open: ()=>window.dispatchEvent(new CustomEvent('hc-attendant', {
                    detail: {
                        command: 'open'
                    }
                })),
            close: ()=>window.dispatchEvent(new CustomEvent('hc-attendant', {
                    detail: {
                        command: 'close'
                    }
                })),
            sendMessage: (msg, actions)=>window.dispatchEvent(new CustomEvent('hc-attendant', {
                    detail: {
                        command: 'message',
                        args: {
                            message: msg,
                            actions
                        }
                    }
                })),
            tour: ()=>window.dispatchEvent(new CustomEvent('hc-attendant', {
                    detail: {
                        command: 'tour'
                    }
                })),
            highlight: (selector)=>window.dispatchEvent(new CustomEvent('hc-attendant', {
                    detail: {
                        command: 'highlight',
                        args: {
                            selector
                        }
                    }
                })),
            startConfigurator: (productId)=>window.dispatchEvent(new CustomEvent('hc-attendant', {
                    detail: {
                        command: 'startConfigurator',
                        args: {
                            productId
                        }
                    }
                })),
            suggestProducts: (products, message)=>window.dispatchEvent(new CustomEvent('hc-attendant', {
                    detail: {
                        command: 'suggestProducts',
                        args: {
                            products,
                            message
                        }
                    }
                })),
            on: (event, callback)=>window.addEventListener(`hc-attendant-${event}`, callback)
        };
        window.dispatchEvent(new CustomEvent('hc-attendant-ready'));
        return ()=>{
            window.removeEventListener('hc-attendant', handleAttendantEvent);
            delete window.HyperAttendant;
        };
    }, []);
    const addMessage = (role, content, actions)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    id: Date.now().toString(),
                    role,
                    content,
                    actions
                }
            ]);
    };
    const handleCommand = (cmd)=>{
        if (cmd === "tour") {
            addMessage("user", "Take a Tour");
            setIsTyping(true);
            setTimeout(()=>{
                setIsTyping(false);
                addMessage("bot", "Let's start the tour! I've highlighted the Product Catalog for you. You can browse our standard, subscription, and configurable items there.", [
                    {
                        label: "Highlight Catalog",
                        action: ()=>highlightElement('[value="catalog"]')
                    },
                    {
                        label: "Next: Bundles",
                        action: ()=>handleCommand("tour_bundles")
                    }
                ]);
            }, 1000);
        } else if (cmd === "tour_bundles") {
            addMessage("user", "Next: Bundles");
            setIsTyping(true);
            setTimeout(()=>{
                setIsTyping(false);
                addMessage("bot", "Check out the Special Bundles section! You can add multiple items at a discount.", [
                    {
                        label: "Highlight Bundles",
                        action: ()=>highlightElement('h3:contains("Special Bundles")')
                    }
                ]);
            }, 1000);
        } else if (cmd === "find_keyboard") {
            addMessage("user", "Find a Keyboard");
            setIsTyping(true);
            setTimeout(()=>{
                setIsTyping(false);
                addMessage("bot", "I found the Ergonomic Mechanical Keyboard. Would you like me to open the configurator for it so we can customize it together?", [
                    {
                        label: "Configure Keyboard",
                        action: ()=>{
                            window.HyperCart?.add({
                                id: 101,
                                name: "Ergonomic Mechanical Keyboard",
                                price: 149.99,
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
                                ]
                            });
                            setTimeout(()=>{
                                // Open configurator for the last added item
                                const cart = window.HyperCart?.scanPage?.() || []; // Just a fallback if needed
                                // The cart overlay listens to add-to-cart, we can just open it
                                window.HyperCart?.open();
                            }, 100);
                        }
                    }
                ]);
            }, 1000);
        }
    };
    const highlightElement = (selector)=>{
        // Simple mock highlight
        document.querySelectorAll('.hc-highlight').forEach((el)=>el.classList.remove('hc-highlight', 'ring-4', 'ring-primary', 'ring-offset-2', 'transition-all'));
        let el = null;
        if (selector.includes(':contains')) {
            const match = selector.match(/:contains\("([^"]+)"\)/);
            const text = match ? match[1] : null;
            if (text) {
                const elements = Array.from(document.querySelectorAll('h3, h2, h4, p, span, button'));
                el = elements.find((e)=>e.textContent?.includes(text)) || null;
            }
        } else {
            el = document.querySelector(selector);
        }
        if (el) {
            el.classList.add('hc-highlight', 'ring-4', 'ring-primary', 'ring-offset-2', 'transition-all', 'rounded-md');
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            setTimeout(()=>{
                el?.classList.remove('hc-highlight', 'ring-4', 'ring-primary', 'ring-offset-2', 'transition-all', 'rounded-md');
            }, 3000);
        }
    };
    const simulateBotResponse = (text)=>{
        setIsTyping(true);
        // Fuzzy search mock
        const lowerText = text.toLowerCase();
        setTimeout(()=>{
            setIsTyping(false);
            if (lowerText.includes("tour")) {
                handleCommand("tour");
                return;
            }
            if (lowerText.includes("keyboard")) {
                handleCommand("find_keyboard");
                return;
            }
            if (lowerText.includes("pc") || lowerText.includes("computer")) {
                addMessage("bot", "We have a Custom Gaming PC that you can configure completely. Want to start building?", [
                    {
                        label: "Configure PC",
                        action: ()=>{
                            window.HyperCart?.add({
                                id: 103,
                                name: "Custom Gaming PC",
                                price: 999.00,
                                type: "configurable",
                                configFlow: [
                                    {
                                        key: "cpu",
                                        step: "Processor",
                                        type: "select",
                                        options: [
                                            "Intel Core i5",
                                            "Intel Core i7",
                                            "Intel Core i9"
                                        ]
                                    },
                                    {
                                        key: "gpu",
                                        step: "Graphics Card",
                                        type: "select",
                                        options: [
                                            "RTX 4060",
                                            "RTX 4070",
                                            "RTX 4080"
                                        ]
                                    }
                                ]
                            });
                        }
                    }
                ]);
                return;
            }
            addMessage("bot", "I'm still learning! But I can help you find products or take you on a tour of the store.", [
                {
                    label: "Take a Tour",
                    action: ()=>handleCommand("tour")
                }
            ]);
        }, 1500);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!inputValue.trim()) return;
        const text = inputValue;
        addMessage("user", text);
        setInputValue("");
        simulateBotResponse(text);
    };
    return /*#__PURE__*/ _jsxDEV(_Fragment, {
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4",
            children: [
                isOpen && /*#__PURE__*/ _jsxDEV("div", {
                    className: "w-[350px] h-[500px] bg-card border rounded-2xl shadow-xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "p-4 border-b bg-primary text-primary-foreground flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Bot, {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "/app/src/components/ShoppingAttendant.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            className: "font-semibold",
                                            children: "Shopping Attendant"
                                        }, void 0, false, {
                                            fileName: "/app/src/components/ShoppingAttendant.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Badge, {
                                            variant: "secondary",
                                            className: "text-[10px] h-4 px-1 ml-1 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30",
                                            children: "AI"
                                        }, void 0, false, {
                                            fileName: "/app/src/components/ShoppingAttendant.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/app/src/components/ShoppingAttendant.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV(Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground",
                                    onClick: ()=>setIsOpen(false),
                                    children: /*#__PURE__*/ _jsxDEV(X, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "/app/src/components/ShoppingAttendant.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/app/src/components/ShoppingAttendant.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/app/src/components/ShoppingAttendant.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ _jsxDEV(ScrollArea, {
                            className: "flex-1 p-4",
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                className: "space-y-4",
                                ref: scrollRef,
                                children: [
                                    messages.map((msg)=>/*#__PURE__*/ _jsxDEV("div", {
                                            className: `flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`,
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: `max-w-[85%] rounded-2xl px-4 py-2 text-sm ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`,
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/ShoppingAttendant.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 21
                                                }, this),
                                                msg.actions && msg.actions.length > 0 && /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "flex flex-wrap gap-2 mt-2 ml-1",
                                                    children: msg.actions.map((action, idx)=>/*#__PURE__*/ _jsxDEV(Button, {
                                                            variant: "outline",
                                                            size: "sm",
                                                            className: "h-7 text-xs rounded-full border-primary/20 hover:border-primary/50",
                                                            onClick: action.action,
                                                            children: action.label
                                                        }, idx, false, {
                                                            fileName: "/app/src/components/ShoppingAttendant.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/ShoppingAttendant.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, msg.id, true, {
                                            fileName: "/app/src/components/ShoppingAttendant.tsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, this)),
                                    isTyping && /*#__PURE__*/ _jsxDEV("div", {
                                        className: "flex items-start",
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            className: "bg-muted rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/ShoppingAttendant.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0.2s]"
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/ShoppingAttendant.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0.4s]"
                                                }, void 0, false, {
                                                    fileName: "/app/src/components/ShoppingAttendant.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/app/src/components/ShoppingAttendant.tsx",
                                            lineNumber: 265,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/src/components/ShoppingAttendant.tsx",
                                        lineNumber: 264,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/components/ShoppingAttendant.tsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/components/ShoppingAttendant.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "p-3 border-t bg-background",
                            children: /*#__PURE__*/ _jsxDEV("form", {
                                onSubmit: handleSubmit,
                                className: "flex gap-2 relative",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Input, {
                                        value: inputValue,
                                        onChange: (e)=>setInputValue(e.target.value),
                                        placeholder: "Ask me anything...",
                                        className: "pr-10 rounded-full bg-muted/50 border-transparent focus-visible:bg-background focus-visible:ring-primary/20"
                                    }, void 0, false, {
                                        fileName: "/app/src/components/ShoppingAttendant.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Button, {
                                        type: "submit",
                                        size: "icon",
                                        className: "absolute right-1 top-1 h-8 w-8 rounded-full",
                                        disabled: !inputValue.trim() || isTyping,
                                        children: /*#__PURE__*/ _jsxDEV(Send, {
                                            className: "h-4 w-4 ml-0.5"
                                        }, void 0, false, {
                                            fileName: "/app/src/components/ShoppingAttendant.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/app/src/components/ShoppingAttendant.tsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/app/src/components/ShoppingAttendant.tsx",
                                lineNumber: 276,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/app/src/components/ShoppingAttendant.tsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/app/src/components/ShoppingAttendant.tsx",
                    lineNumber: 223,
                    columnNumber: 11
                }, this),
                !isOpen && /*#__PURE__*/ _jsxDEV(Button, {
                    onClick: ()=>setIsOpen(true),
                    className: "h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                    children: /*#__PURE__*/ _jsxDEV(Sparkles, {
                        className: "h-6 w-6"
                    }, void 0, false, {
                        fileName: "/app/src/components/ShoppingAttendant.tsx",
                        lineNumber: 301,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/app/src/components/ShoppingAttendant.tsx",
                    lineNumber: 297,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "/app/src/components/ShoppingAttendant.tsx",
            lineNumber: 221,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(ShoppingAttendant, "Gp+8U0iXHlzHkEqDsriH2Q9gqN0=");
_c = ShoppingAttendant;
var _c;
$RefreshReg$(_c, "ShoppingAttendant");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ShoppingAttendant.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ShoppingAttendant.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNob3BwaW5nQXR0ZW5kYW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IFNjcm9sbEFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Njcm9sbC1hcmVhXCI7XG5pbXBvcnQgeyBCb3QsIFgsIFNlbmQsIFNwYXJrbGVzLCBNYXAsIFNlYXJjaCwgQXJyb3dSaWdodCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuXG50eXBlIE1lc3NhZ2UgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHJvbGU6IFwidXNlclwiIHwgXCJib3RcIjtcbiAgY29udGVudDogc3RyaW5nO1xuICBhY3Rpb25zPzogeyBsYWJlbDogc3RyaW5nOyBhY3Rpb246ICgpID0+IHZvaWQgfVtdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNob3BwaW5nQXR0ZW5kYW50KCkge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW1xuICAgIHtcbiAgICAgIGlkOiBcIjFcIixcbiAgICAgIHJvbGU6IFwiYm90XCIsXG4gICAgICBjb250ZW50OiBcIkhpISBJJ20geW91ciBTaG9wcGluZyBBdHRlbmRhbnQuIEkgY2FuIGhlbHAgeW91IGZpbmQgcHJvZHVjdHMsIGdpdmUgeW91IGEgdG91ciwgb3IgaGVscCBjb25maWd1cmUgY3VzdG9tIGl0ZW1zLiBXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvP1wiLFxuICAgICAgYWN0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiBcIlRha2UgYSBUb3VyXCIsIGFjdGlvbjogKCkgPT4gaGFuZGxlQ29tbWFuZChcInRvdXJcIikgfSxcbiAgICAgICAgeyBsYWJlbDogXCJGaW5kIGEgS2V5Ym9hcmRcIiwgYWN0aW9uOiAoKSA9PiBoYW5kbGVDb21tYW5kKFwiZmluZF9rZXlib2FyZFwiKSB9XG4gICAgICBdXG4gICAgfVxuICBdKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1R5cGluZywgc2V0SXNUeXBpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjcm9sbFJlZi5jdXJyZW50KSB7XG4gICAgICBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxUb3AgPSBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9LCBbbWVzc2FnZXMsIGlzVHlwaW5nXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVBdHRlbmRhbnRFdmVudCA9IChlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHsgY29tbWFuZCwgYXJncyB9ID0gZS5kZXRhaWw7XG4gICAgICBpZiAoY29tbWFuZCA9PT0gJ29wZW4nKSBzZXRJc09wZW4odHJ1ZSk7XG4gICAgICBpZiAoY29tbWFuZCA9PT0gJ2Nsb3NlJykgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgIGlmIChjb21tYW5kID09PSAnbWVzc2FnZScpIHtcbiAgICAgICAgYWRkTWVzc2FnZShcImJvdFwiLCBhcmdzLm1lc3NhZ2UsIGFyZ3MuYWN0aW9ucyk7XG4gICAgICB9XG4gICAgICBpZiAoY29tbWFuZCA9PT0gJ3RvdXInKSB7XG4gICAgICAgIHNldElzT3Blbih0cnVlKTtcbiAgICAgICAgaGFuZGxlQ29tbWFuZCgndG91cicpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbW1hbmQgPT09ICdoaWdobGlnaHQnKSB7XG4gICAgICAgIGhpZ2hsaWdodEVsZW1lbnQoYXJncy5zZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBpZiAoY29tbWFuZCA9PT0gJ3N0YXJ0Q29uZmlndXJhdG9yJykge1xuICAgICAgICBjb25zdCBwcm9kdWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWhjLWlkPVwiJHthcmdzLnByb2R1Y3RJZH1cIl1gKTtcbiAgICAgICAgaWYgKHByb2R1Y3RFbGVtZW50KSB7XG4gICAgICAgICAgKHByb2R1Y3RFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY29tbWFuZCA9PT0gJ3N1Z2dlc3RQcm9kdWN0cycpIHtcbiAgICAgICAgc2V0SXNPcGVuKHRydWUpO1xuICAgICAgICBhZGRNZXNzYWdlKFwiYm90XCIsIGFyZ3MubWVzc2FnZSB8fCBcIkkgZm91bmQgdGhlc2UgcHJvZHVjdHMgZm9yIHlvdTpcIiwgYXJncy5wcm9kdWN0cy5tYXAoKHA6IGFueSkgPT4gKHtcbiAgICAgICAgICBsYWJlbDogYFZpZXcgJHtwLm5hbWUgfHwgcC5pZH1gLFxuICAgICAgICAgIGFjdGlvbjogKCkgPT4gaGlnaGxpZ2h0RWxlbWVudChgW2RhdGEtaGMtaWQ9XCIke3AuaWR9XCJdYClcbiAgICAgICAgfSkpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYy1hdHRlbmRhbnQnLCBoYW5kbGVBdHRlbmRhbnRFdmVudCk7XG4gICAgXG4gICAgKHdpbmRvdyBhcyBhbnkpLkh5cGVyQXR0ZW5kYW50ID0ge1xuICAgICAgb3BlbjogKCkgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdoYy1hdHRlbmRhbnQnLCB7IGRldGFpbDogeyBjb21tYW5kOiAnb3BlbicgfSB9KSksXG4gICAgICBjbG9zZTogKCkgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdoYy1hdHRlbmRhbnQnLCB7IGRldGFpbDogeyBjb21tYW5kOiAnY2xvc2UnIH0gfSkpLFxuICAgICAgc2VuZE1lc3NhZ2U6IChtc2c6IHN0cmluZywgYWN0aW9ucz86IGFueVtdKSA9PiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2hjLWF0dGVuZGFudCcsIHsgZGV0YWlsOiB7IGNvbW1hbmQ6ICdtZXNzYWdlJywgYXJnczogeyBtZXNzYWdlOiBtc2csIGFjdGlvbnMgfSB9IH0pKSxcbiAgICAgIHRvdXI6ICgpID0+IHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaGMtYXR0ZW5kYW50JywgeyBkZXRhaWw6IHsgY29tbWFuZDogJ3RvdXInIH0gfSkpLFxuICAgICAgaGlnaGxpZ2h0OiAoc2VsZWN0b3I6IHN0cmluZykgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdoYy1hdHRlbmRhbnQnLCB7IGRldGFpbDogeyBjb21tYW5kOiAnaGlnaGxpZ2h0JywgYXJnczogeyBzZWxlY3RvciB9IH0gfSkpLFxuICAgICAgc3RhcnRDb25maWd1cmF0b3I6IChwcm9kdWN0SWQ6IHN0cmluZykgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdoYy1hdHRlbmRhbnQnLCB7IGRldGFpbDogeyBjb21tYW5kOiAnc3RhcnRDb25maWd1cmF0b3InLCBhcmdzOiB7IHByb2R1Y3RJZCB9IH0gfSkpLFxuICAgICAgc3VnZ2VzdFByb2R1Y3RzOiAocHJvZHVjdHM6IGFueVtdLCBtZXNzYWdlPzogc3RyaW5nKSA9PiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2hjLWF0dGVuZGFudCcsIHsgZGV0YWlsOiB7IGNvbW1hbmQ6ICdzdWdnZXN0UHJvZHVjdHMnLCBhcmdzOiB7IHByb2R1Y3RzLCBtZXNzYWdlIH0gfSB9KSksXG4gICAgICBvbjogKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGhjLWF0dGVuZGFudC0ke2V2ZW50fWAsIGNhbGxiYWNrIGFzIGFueSlcbiAgICB9O1xuXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdoYy1hdHRlbmRhbnQtcmVhZHknKSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hjLWF0dGVuZGFudCcsIGhhbmRsZUF0dGVuZGFudEV2ZW50KTtcbiAgICAgIGRlbGV0ZSAod2luZG93IGFzIGFueSkuSHlwZXJBdHRlbmRhbnQ7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGFkZE1lc3NhZ2UgPSAocm9sZTogXCJ1c2VyXCIgfCBcImJvdFwiLCBjb250ZW50OiBzdHJpbmcsIGFjdGlvbnM/OiBhbnlbXSkgPT4ge1xuICAgIHNldE1lc3NhZ2VzKHByZXYgPT4gWy4uLnByZXYsIHsgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSwgcm9sZSwgY29udGVudCwgYWN0aW9ucyB9XSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29tbWFuZCA9IChjbWQ6IHN0cmluZykgPT4ge1xuICAgIGlmIChjbWQgPT09IFwidG91clwiKSB7XG4gICAgICBhZGRNZXNzYWdlKFwidXNlclwiLCBcIlRha2UgYSBUb3VyXCIpO1xuICAgICAgc2V0SXNUeXBpbmcodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNUeXBpbmcoZmFsc2UpO1xuICAgICAgICBhZGRNZXNzYWdlKFwiYm90XCIsIFwiTGV0J3Mgc3RhcnQgdGhlIHRvdXIhIEkndmUgaGlnaGxpZ2h0ZWQgdGhlIFByb2R1Y3QgQ2F0YWxvZyBmb3IgeW91LiBZb3UgY2FuIGJyb3dzZSBvdXIgc3RhbmRhcmQsIHN1YnNjcmlwdGlvbiwgYW5kIGNvbmZpZ3VyYWJsZSBpdGVtcyB0aGVyZS5cIiwgW1xuICAgICAgICAgIHsgbGFiZWw6IFwiSGlnaGxpZ2h0IENhdGFsb2dcIiwgYWN0aW9uOiAoKSA9PiBoaWdobGlnaHRFbGVtZW50KCdbdmFsdWU9XCJjYXRhbG9nXCJdJykgfSxcbiAgICAgICAgICB7IGxhYmVsOiBcIk5leHQ6IEJ1bmRsZXNcIiwgYWN0aW9uOiAoKSA9PiBoYW5kbGVDb21tYW5kKFwidG91cl9idW5kbGVzXCIpIH1cbiAgICAgICAgXSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2UgaWYgKGNtZCA9PT0gXCJ0b3VyX2J1bmRsZXNcIikge1xuICAgICAgYWRkTWVzc2FnZShcInVzZXJcIiwgXCJOZXh0OiBCdW5kbGVzXCIpO1xuICAgICAgc2V0SXNUeXBpbmcodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNUeXBpbmcoZmFsc2UpO1xuICAgICAgICBhZGRNZXNzYWdlKFwiYm90XCIsIFwiQ2hlY2sgb3V0IHRoZSBTcGVjaWFsIEJ1bmRsZXMgc2VjdGlvbiEgWW91IGNhbiBhZGQgbXVsdGlwbGUgaXRlbXMgYXQgYSBkaXNjb3VudC5cIiwgW1xuICAgICAgICAgIHsgbGFiZWw6IFwiSGlnaGxpZ2h0IEJ1bmRsZXNcIiwgYWN0aW9uOiAoKSA9PiBoaWdobGlnaHRFbGVtZW50KCdoMzpjb250YWlucyhcIlNwZWNpYWwgQnVuZGxlc1wiKScpIH1cbiAgICAgICAgXSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2UgaWYgKGNtZCA9PT0gXCJmaW5kX2tleWJvYXJkXCIpIHtcbiAgICAgIGFkZE1lc3NhZ2UoXCJ1c2VyXCIsIFwiRmluZCBhIEtleWJvYXJkXCIpO1xuICAgICAgc2V0SXNUeXBpbmcodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNUeXBpbmcoZmFsc2UpO1xuICAgICAgICBhZGRNZXNzYWdlKFwiYm90XCIsIFwiSSBmb3VuZCB0aGUgRXJnb25vbWljIE1lY2hhbmljYWwgS2V5Ym9hcmQuIFdvdWxkIHlvdSBsaWtlIG1lIHRvIG9wZW4gdGhlIGNvbmZpZ3VyYXRvciBmb3IgaXQgc28gd2UgY2FuIGN1c3RvbWl6ZSBpdCB0b2dldGhlcj9cIiwgW1xuICAgICAgICAgIHsgbGFiZWw6IFwiQ29uZmlndXJlIEtleWJvYXJkXCIsIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLkh5cGVyQ2FydD8uYWRkKHtcbiAgICAgICAgICAgICAgaWQ6IDEwMSxcbiAgICAgICAgICAgICAgbmFtZTogXCJFcmdvbm9taWMgTWVjaGFuaWNhbCBLZXlib2FyZFwiLFxuICAgICAgICAgICAgICBwcmljZTogMTQ5Ljk5LFxuICAgICAgICAgICAgICB0eXBlOiBcImNvbmZpZ3VyYWJsZVwiLFxuICAgICAgICAgICAgICBjb25maWdGbG93OiBbXG4gICAgICAgICAgICAgICAgeyBrZXk6IFwic3dpdGNoZXNcIiwgc3RlcDogXCJTd2l0Y2ggVHlwZVwiLCB0eXBlOiBcInNlbGVjdFwiLCBvcHRpb25zOiBbXCJMaW5lYXIgKFJlZClcIiwgXCJUYWN0aWxlIChCcm93bilcIiwgXCJDbGlja3kgKEJsdWUpXCJdIH0sXG4gICAgICAgICAgICAgICAgeyBrZXk6IFwia2V5Y2Fwc1wiLCBzdGVwOiBcIktleWNhcCBDb2xvclwiLCB0eXBlOiBcInJhZGlvXCIsIG9wdGlvbnM6IFtcIkRhcmsgTWF0dGVyXCIsIFwiQXJjdGljIFdoaXRlXCIsIFwiUmV0cm8gR3JleVwiXSB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIE9wZW4gY29uZmlndXJhdG9yIGZvciB0aGUgbGFzdCBhZGRlZCBpdGVtXG4gICAgICAgICAgICAgIGNvbnN0IGNhcnQgPSAod2luZG93IGFzIGFueSkuSHlwZXJDYXJ0Py5zY2FuUGFnZT8uKCkgfHwgW107IC8vIEp1c3QgYSBmYWxsYmFjayBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgLy8gVGhlIGNhcnQgb3ZlcmxheSBsaXN0ZW5zIHRvIGFkZC10by1jYXJ0LCB3ZSBjYW4ganVzdCBvcGVuIGl0XG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5IeXBlckNhcnQ/Lm9wZW4oKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgXSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGlnaGxpZ2h0RWxlbWVudCA9IChzZWxlY3Rvcjogc3RyaW5nKSA9PiB7XG4gICAgLy8gU2ltcGxlIG1vY2sgaGlnaGxpZ2h0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhjLWhpZ2hsaWdodCcpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGMtaGlnaGxpZ2h0JywgJ3JpbmctNCcsICdyaW5nLXByaW1hcnknLCAncmluZy1vZmZzZXQtMicsICd0cmFuc2l0aW9uLWFsbCcpKTtcbiAgICBcbiAgICBsZXQgZWw6IEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICBpZiAoc2VsZWN0b3IuaW5jbHVkZXMoJzpjb250YWlucycpKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKC86Y29udGFpbnNcXChcIihbXlwiXSspXCJcXCkvKTtcbiAgICAgIGNvbnN0IHRleHQgPSBtYXRjaCA/IG1hdGNoWzFdIDogbnVsbDtcbiAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMywgaDIsIGg0LCBwLCBzcGFuLCBidXR0b24nKSk7XG4gICAgICAgIGVsID0gZWxlbWVudHMuZmluZChlID0+IGUudGV4dENvbnRlbnQ/LmluY2x1ZGVzKHRleHQpKSB8fCBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGlmIChlbCkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaGMtaGlnaGxpZ2h0JywgJ3JpbmctNCcsICdyaW5nLXByaW1hcnknLCAncmluZy1vZmZzZXQtMicsICd0cmFuc2l0aW9uLWFsbCcsICdyb3VuZGVkLW1kJyk7XG4gICAgICBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsPy5jbGFzc0xpc3QucmVtb3ZlKCdoYy1oaWdobGlnaHQnLCAncmluZy00JywgJ3JpbmctcHJpbWFyeScsICdyaW5nLW9mZnNldC0yJywgJ3RyYW5zaXRpb24tYWxsJywgJ3JvdW5kZWQtbWQnKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaW11bGF0ZUJvdFJlc3BvbnNlID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIHNldElzVHlwaW5nKHRydWUpO1xuICAgIFxuICAgIC8vIEZ1enp5IHNlYXJjaCBtb2NrXG4gICAgY29uc3QgbG93ZXJUZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNUeXBpbmcoZmFsc2UpO1xuICAgICAgXG4gICAgICBpZiAobG93ZXJUZXh0LmluY2x1ZGVzKFwidG91clwiKSkge1xuICAgICAgICBoYW5kbGVDb21tYW5kKFwidG91clwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAobG93ZXJUZXh0LmluY2x1ZGVzKFwia2V5Ym9hcmRcIikpIHtcbiAgICAgICAgaGFuZGxlQ29tbWFuZChcImZpbmRfa2V5Ym9hcmRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGxvd2VyVGV4dC5pbmNsdWRlcyhcInBjXCIpIHx8IGxvd2VyVGV4dC5pbmNsdWRlcyhcImNvbXB1dGVyXCIpKSB7XG4gICAgICAgIGFkZE1lc3NhZ2UoXCJib3RcIiwgXCJXZSBoYXZlIGEgQ3VzdG9tIEdhbWluZyBQQyB0aGF0IHlvdSBjYW4gY29uZmlndXJlIGNvbXBsZXRlbHkuIFdhbnQgdG8gc3RhcnQgYnVpbGRpbmc/XCIsIFtcbiAgICAgICAgICB7IGxhYmVsOiBcIkNvbmZpZ3VyZSBQQ1wiLCBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5IeXBlckNhcnQ/LmFkZCh7XG4gICAgICAgICAgICAgIGlkOiAxMDMsXG4gICAgICAgICAgICAgIG5hbWU6IFwiQ3VzdG9tIEdhbWluZyBQQ1wiLFxuICAgICAgICAgICAgICBwcmljZTogOTk5LjAwLFxuICAgICAgICAgICAgICB0eXBlOiBcImNvbmZpZ3VyYWJsZVwiLFxuICAgICAgICAgICAgICBjb25maWdGbG93OiBbXG4gICAgICAgICAgICAgICAgeyBrZXk6IFwiY3B1XCIsIHN0ZXA6IFwiUHJvY2Vzc29yXCIsIHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcIkludGVsIENvcmUgaTVcIiwgXCJJbnRlbCBDb3JlIGk3XCIsIFwiSW50ZWwgQ29yZSBpOVwiXSB9LFxuICAgICAgICAgICAgICAgIHsga2V5OiBcImdwdVwiLCBzdGVwOiBcIkdyYXBoaWNzIENhcmRcIiwgdHlwZTogXCJzZWxlY3RcIiwgb3B0aW9uczogW1wiUlRYIDQwNjBcIiwgXCJSVFggNDA3MFwiLCBcIlJUWCA0MDgwXCJdIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYWRkTWVzc2FnZShcImJvdFwiLCBcIkknbSBzdGlsbCBsZWFybmluZyEgQnV0IEkgY2FuIGhlbHAgeW91IGZpbmQgcHJvZHVjdHMgb3IgdGFrZSB5b3Ugb24gYSB0b3VyIG9mIHRoZSBzdG9yZS5cIiwgW1xuICAgICAgICB7IGxhYmVsOiBcIlRha2UgYSBUb3VyXCIsIGFjdGlvbjogKCkgPT4gaGFuZGxlQ29tbWFuZChcInRvdXJcIikgfVxuICAgICAgXSk7XG4gICAgfSwgMTUwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWlucHV0VmFsdWUudHJpbSgpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgdGV4dCA9IGlucHV0VmFsdWU7XG4gICAgYWRkTWVzc2FnZShcInVzZXJcIiwgdGV4dCk7XG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcbiAgICBzaW11bGF0ZUJvdFJlc3BvbnNlKHRleHQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBGbG9hdGluZyBCdXR0b24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS02IHJpZ2h0LTYgei01MCBmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBnYXAtNFwiPlxuICAgICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzM1MHB4XSBoLVs1MDBweF0gYmctY2FyZCBib3JkZXIgcm91bmRlZC0yeGwgc2hhZG93LXhsIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIGFuaW1hdGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNCBmYWRlLWluIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLWIgYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxCb3QgY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlNob3BwaW5nIEF0dGVuZGFudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGgtNCBweC0xIG1sLTEgYmctcHJpbWFyeS1mb3JlZ3JvdW5kLzIwIHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGhvdmVyOmJnLXByaW1hcnktZm9yZWdyb3VuZC8zMFwiPkFJPC9CYWRnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cImljb25cIiBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGhvdmVyOmJnLXByaW1hcnktZm9yZWdyb3VuZC8yMCBob3Zlcjp0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9PlxuICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8U2Nyb2xsQXJlYSBjbGFzc05hbWU9XCJmbGV4LTEgcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCIgcmVmPXtzY3JvbGxSZWZ9PlxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e21zZy5pZH0gY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCAke21zZy5yb2xlID09PSBcInVzZXJcIiA/IFwiaXRlbXMtZW5kXCIgOiBcIml0ZW1zLXN0YXJ0XCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWF4LXctWzg1JV0gcm91bmRlZC0yeGwgcHgtNCBweS0yIHRleHQtc20gJHtcbiAgICAgICAgICAgICAgICAgICAgICBtc2cucm9sZSA9PT0gXCJ1c2VyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCByb3VuZGVkLWJyLXNtXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctbXV0ZWQgdGV4dC1mb3JlZ3JvdW5kIHJvdW5kZWQtYmwtc21cIlxuICAgICAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge21zZy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge21zZy5hY3Rpb25zICYmIG1zZy5hY3Rpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTIgbXQtMiBtbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bXNnLmFjdGlvbnMubWFwKChhY3Rpb24sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNyB0ZXh0LXhzIHJvdW5kZWQtZnVsbCBib3JkZXItcHJpbWFyeS8yMCBob3Zlcjpib3JkZXItcHJpbWFyeS81MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWN0aW9uLmFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7aXNUeXBpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbXV0ZWQgcm91bmRlZC0yeGwgcm91bmRlZC1ibC1zbSBweC00IHB5LTMgZmxleCBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLjUgaC0xLjUgYmctbXV0ZWQtZm9yZWdyb3VuZC81MCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLjUgaC0xLjUgYmctbXV0ZWQtZm9yZWdyb3VuZC81MCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1ib3VuY2UgW2FuaW1hdGlvbi1kZWxheTowLjJzXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEuNSBoLTEuNSBiZy1tdXRlZC1mb3JlZ3JvdW5kLzUwIHJvdW5kZWQtZnVsbCBhbmltYXRlLWJvdW5jZSBbYW5pbWF0aW9uLWRlbGF5OjAuNHNdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2Nyb2xsQXJlYT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLXQgYmctYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc2sgbWUgYW55dGhpbmcuLi5cIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByLTEwIHJvdW5kZWQtZnVsbCBiZy1tdXRlZC81MCBib3JkZXItdHJhbnNwYXJlbnQgZm9jdXMtdmlzaWJsZTpiZy1iYWNrZ3JvdW5kIGZvY3VzLXZpc2libGU6cmluZy1wcmltYXJ5LzIwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgICBzaXplPVwiaWNvblwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMSB0b3AtMSBoLTggdy04IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlucHV0VmFsdWUudHJpbSgpIHx8IGlzVHlwaW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTZW5kIGNsYXNzTmFtZT1cImgtNCB3LTQgbWwtMC41XCIgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFpc09wZW4gJiYgKFxuICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTE0IHctMTQgcm91bmRlZC1mdWxsIHNoYWRvdy1sZyBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOi10cmFuc2xhdGUteS0xXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkJ1dHRvbiIsIklucHV0IiwiU2Nyb2xsQXJlYSIsIkJvdCIsIlgiLCJTZW5kIiwiU3BhcmtsZXMiLCJCYWRnZSIsIlNob3BwaW5nQXR0ZW5kYW50IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImlkIiwicm9sZSIsImNvbnRlbnQiLCJhY3Rpb25zIiwibGFiZWwiLCJhY3Rpb24iLCJoYW5kbGVDb21tYW5kIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpc1R5cGluZyIsInNldElzVHlwaW5nIiwic2Nyb2xsUmVmIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImhhbmRsZUF0dGVuZGFudEV2ZW50IiwiZSIsImNvbW1hbmQiLCJhcmdzIiwiZGV0YWlsIiwiYWRkTWVzc2FnZSIsIm1lc3NhZ2UiLCJoaWdobGlnaHRFbGVtZW50Iiwic2VsZWN0b3IiLCJwcm9kdWN0RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2R1Y3RJZCIsImNsaWNrIiwicHJvZHVjdHMiLCJtYXAiLCJwIiwibmFtZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJIeXBlckF0dGVuZGFudCIsIm9wZW4iLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJjbG9zZSIsInNlbmRNZXNzYWdlIiwibXNnIiwidG91ciIsImhpZ2hsaWdodCIsInN0YXJ0Q29uZmlndXJhdG9yIiwic3VnZ2VzdFByb2R1Y3RzIiwib24iLCJldmVudCIsImNhbGxiYWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByZXYiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJjbWQiLCJzZXRUaW1lb3V0IiwiSHlwZXJDYXJ0IiwiYWRkIiwicHJpY2UiLCJ0eXBlIiwiY29uZmlnRmxvdyIsImtleSIsInN0ZXAiLCJvcHRpb25zIiwiY2FydCIsInNjYW5QYWdlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImluY2x1ZGVzIiwibWF0Y2giLCJ0ZXh0IiwiZWxlbWVudHMiLCJBcnJheSIsImZyb20iLCJmaW5kIiwidGV4dENvbnRlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJzaW11bGF0ZUJvdFJlc3BvbnNlIiwibG93ZXJUZXh0IiwidG9Mb3dlckNhc2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIiwicmVmIiwibGVuZ3RoIiwiaWR4IiwiZm9ybSIsIm9uU3VibWl0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLFFBQVEsUUFBUTtBQUNwRCxTQUFTQyxNQUFNLFFBQVEseUJBQXlCO0FBQ2hELFNBQVNDLEtBQUssUUFBUSx3QkFB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