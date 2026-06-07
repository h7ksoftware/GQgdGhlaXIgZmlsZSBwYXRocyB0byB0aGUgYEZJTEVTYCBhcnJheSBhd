export default {
    darkMode: [
        "class"
    ],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}"
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))"
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))"
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            keyframes: {
                "accordion-down": {
                    from: {
                        height: "0"
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)"
                    }
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)"
                    },
                    to: {
                        height: "0"
                    }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out"
            }
        }
    },
    plugins: [
        require("tailwindcss-animate")
    ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhaWx3aW5kLmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhcmtNb2RlOiBbXCJjbGFzc1wiXSxcbiAgY29udGVudDogW1wiLi9wYWdlcy8qKi8qLnt0cyx0c3h9XCIsIFwiLi9jb21wb25lbnRzLyoqLyoue3RzLHRzeH1cIiwgXCIuL2FwcC8qKi8qLnt0cyx0c3h9XCIsIFwiLi9zcmMvKiovKi57dHMsdHN4fVwiXSxcbiAgcHJlZml4OiBcIlwiLFxuICB0aGVtZToge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgcGFkZGluZzogXCIycmVtXCIsXG4gICAgICBzY3JlZW5zOiB7XG4gICAgICAgIFwiMnhsXCI6IFwiMTQwMHB4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZXh0ZW5kOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgYm9yZGVyOiBcImhzbCh2YXIoLS1ib3JkZXIpKVwiLFxuICAgICAgICBpbnB1dDogXCJoc2wodmFyKC0taW5wdXQpKVwiLFxuICAgICAgICByaW5nOiBcImhzbCh2YXIoLS1yaW5nKSlcIixcbiAgICAgICAgYmFja2dyb3VuZDogXCJoc2wodmFyKC0tYmFja2dyb3VuZCkpXCIsXG4gICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLWZvcmVncm91bmQpKVwiLFxuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tcHJpbWFyeSkpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tcHJpbWFyeS1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tc2Vjb25kYXJ5KSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3RydWN0aXZlOiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tZGVzdHJ1Y3RpdmUpKVwiLFxuICAgICAgICAgIGZvcmVncm91bmQ6IFwiaHNsKHZhcigtLWRlc3RydWN0aXZlLWZvcmVncm91bmQpKVwiLFxuICAgICAgICB9LFxuICAgICAgICBtdXRlZDoge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLW11dGVkKSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZW50OiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tYWNjZW50KSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1hY2NlbnQtZm9yZWdyb3VuZCkpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHBvcG92ZXI6IHtcbiAgICAgICAgICBERUZBVUxUOiBcImhzbCh2YXIoLS1wb3BvdmVyKSlcIixcbiAgICAgICAgICBmb3JlZ3JvdW5kOiBcImhzbCh2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpKVwiLFxuICAgICAgICB9LFxuICAgICAgICBjYXJkOiB7XG4gICAgICAgICAgREVGQVVMVDogXCJoc2wodmFyKC0tY2FyZCkpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tY2FyZC1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2lkZWJhcjoge1xuICAgICAgICAgIERFRkFVTFQ6IFwiaHNsKHZhcigtLXNpZGViYXItYmFja2dyb3VuZCkpXCIsXG4gICAgICAgICAgZm9yZWdyb3VuZDogXCJoc2wodmFyKC0tc2lkZWJhci1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgICBwcmltYXJ5OiBcImhzbCh2YXIoLS1zaWRlYmFyLXByaW1hcnkpKVwiLFxuICAgICAgICAgIFwicHJpbWFyeS1mb3JlZ3JvdW5kXCI6IFwiaHNsKHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKSlcIixcbiAgICAgICAgICBhY2NlbnQ6IFwiaHNsKHZhcigtLXNpZGViYXItYWNjZW50KSlcIixcbiAgICAgICAgICBcImFjY2VudC1mb3JlZ3JvdW5kXCI6IFwiaHNsKHZhcigtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQpKVwiLFxuICAgICAgICAgIGJvcmRlcjogXCJoc2wodmFyKC0tc2lkZWJhci1ib3JkZXIpKVwiLFxuICAgICAgICAgIHJpbmc6IFwiaHNsKHZhcigtLXNpZGViYXItcmluZykpXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYm9yZGVyUmFkaXVzOiB7XG4gICAgICAgIGxnOiBcInZhcigtLXJhZGl1cylcIixcbiAgICAgICAgbWQ6IFwiY2FsYyh2YXIoLS1yYWRpdXMpIC0gMnB4KVwiLFxuICAgICAgICBzbTogXCJjYWxjKHZhcigtLXJhZGl1cykgLSA0cHgpXCIsXG4gICAgICB9LFxuICAgICAga2V5ZnJhbWVzOiB7XG4gICAgICAgIFwiYWNjb3JkaW9uLWRvd25cIjoge1xuICAgICAgICAgIGZyb206IHtcbiAgICAgICAgICAgIGhlaWdodDogXCIwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgaGVpZ2h0OiBcInZhcigtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodClcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBcImFjY29yZGlvbi11cFwiOiB7XG4gICAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgaGVpZ2h0OiBcInZhcigtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodClcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIFwiYWNjb3JkaW9uLWRvd25cIjogXCJhY2NvcmRpb24tZG93biAwLjJzIGVhc2Utb3V0XCIsXG4gICAgICAgIFwiYWNjb3JkaW9uLXVwXCI6IFwiYWNjb3JkaW9uLXVwIDAuMnMgZWFzZS1vdXRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlcXVpcmUoXCJ0YWlsd2luZGNzcy1hbmltYXRlXCIpXSxcbn0gc2F0aXNmaWVzIENvbmZpZztcbiJdLCJuYW1lcyI6WyJkYXJrTW9kZSIsImNvbnRlbnQiLCJwcmVmaXgiLCJ0aGVtZSIsImNvbnRhaW5lciIsImNlbnRlciIsInBhZGRpbmciLCJzY3JlZW5zIiwiZXh0ZW5kIiwiY29sb3JzIiwiYm9yZGVyIiwiaW5wdXQiLCJyaW5nIiwiYmFja2dyb3VuZCIsImZvcmVncm91bmQiLCJwcmltYXJ5IiwiREVGQVVMVCIsInNlY29uZGFyeSIsImRlc3RydWN0aXZlIiwibXV0ZWQiLCJhY2NlbnQiLCJwb3BvdmVyIiwiY2FyZCIsInNpZGViYXIiLCJib3JkZXJSYWRpdXMiLCJsZyIsIm1kIiwic20iLCJrZXlmcmFtZXMiLCJmcm9tIiwiaGVpZ2h0IiwidG8iLCJhbmltYXRpb24iLCJwbHVnaW5zIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6IkFBRUEsZUFBZTtJQUNiQSxVQUFVO1FBQUM7S0FBUTtJQUNuQkMsU0FBUztRQUFDO1FBQXlCO1FBQThCO1FBQXVCO0tBQXNCO0lBQzlHQyxRQUFRO0lBQ1JDLE9BQU87UUFDTEMsV0FBVztZQUNUQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsU0FBUztnQkFDUCxPQUFPO1lBQ1Q7UUFDRjtRQUNBQyxRQUFRO1lBQ05DLFFBQVE7Z0JBQ05DLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLE1BQU07Z0JBQ05DLFlBQVk7Z0JBQ1pDLFlBQVk7Z0JBQ1pDLFNBQVM7b0JBQ1BDLFNBQVM7b0JBQ1RGLFlBQVk7Z0JBQ2Q7Z0JBQ0FHLFdBQVc7b0JBQ1RELFNBQVM7b0JBQ1RGLFlBQVk7Z0JBQ2Q7Z0JBQ0FJLGFBQWE7b0JBQ1hGLFNBQVM7b0JBQ1RGLFlBQVk7Z0JBQ2Q7Z0JBQ0FLLE9BQU87b0JBQ0xILFNBQVM7b0JBQ1RGLFlBQVk7Z0JBQ2Q7Z0JBQ0FNLFFBQVE7b0JBQ05KLFNBQVM7b0JBQ1RGLFlBQVk7Z0JBQ2Q7Z0JBQ0FPLFNBQVM7b0JBQ1BMLFNBQVM7b0JBQ1RGLFlBQVk7Z0JBQ2Q7Z0JBQ0FRLE1BQU07b0JBQ0pOLFNBQVM7b0JBQ1RGLFlBQVk7Z0JBQ2Q7Z0JBQ0FTLFNBQVM7b0JBQ1BQLFNBQVM7b0JBQ1RGLFlBQVk7b0JBQ1pDLFNBQVM7b0JBQ1Qsc0JBQXNCO29CQUN0QkssUUFBUTtvQkFDUixxQkFBcUI7b0JBQ3JCVixRQUFRO29CQUNSRSxNQUFNO2dCQUNSO1lBQ0Y7WUFDQVksY0FBYztnQkFDWkMsSUFBSTtnQkFDSkMsSUFBSTtnQkFDSkMsSUFBSTtZQUNOO1lBQ0FDLFdBQVc7Z0JBQ1Qsa0JBQWtCO29CQUNoQkMsTUFBTTt3QkFDSkMsUUFBUTtvQkFDVjtvQkFDQUMsSUFBSTt3QkFDRkQsUUFBUTtvQkFDVjtnQkFDRjtnQkFDQSxnQkFBZ0I7b0JBQ2RELE1BQU07d0JBQ0pDLFFBQVE7b0JBQ1Y7b0JBQ0FDLElBQUk7d0JBQ0ZELFFBQVE7b0JBQ1Y7Z0JBQ0Y7WUFDRjtZQUNBRSxXQUFXO2dCQUNULGtCQUFrQjtnQkFDbEIsZ0JBQWdCO1lBQ2xCO1FBQ0Y7SUFDRjtJQUNBQyxTQUFTO1FBQUNDLFFBQVE7S0FBdUI7QUFDM0MsRUFBbUIifQ==