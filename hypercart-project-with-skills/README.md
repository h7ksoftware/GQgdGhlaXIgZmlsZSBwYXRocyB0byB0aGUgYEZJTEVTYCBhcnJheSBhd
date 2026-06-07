# HyperCart - Technical Brief & Maintenance Guide

## Overview
HyperCart is a lightweight, drop-in shopping cart overlay and configuration wizard built with React, Vite, and Tailwind CSS. It allows users to add products, configure complex options, and checkout seamlessly without leaving the host page.

## Architecture
- **Frontend Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React state + Custom Events (`cart-updated`, `hc-attendant`, etc.) for cross-component communication.
- **Distribution**: Designed to be compiled into standalone scripts (`hyper-cart-loader.js`, `hyper-attendant-loader.js`) that can be embedded on any website via CDN.
- **Key Components**:
  - `CartOverlay.tsx`: The core cart engine, handles the slide-out UI, multi-step checkout flows, and dynamic product configurators.
  - `ShoppingAttendant.tsx`: An AI-powered companion that can highlight elements, suggest products, and trigger configurations via the global `HyperAttendant` API.
  - `Dashboard.tsx`: A merchant portal for generating embed snippets, scanning pages, and building product configuration flows visually or via a code editor (Monaco).

## How to Use (Integration)
1. Include the loaders in your HTML `<head>`:
   ```html
   <script src="https://cdn.hypercart.com/v1/hyper-cart-loader.js" async></script>
   <script src="https://cdn.hypercart.com/v1/hyper-attendant-loader.js" async></script>
   ```
2. Add `data-hc-*` attributes to any button or link:
   ```html
   <button class="hyper-add-to-cart" 
     data-hc-id="101" 
     data-hc-name="Mechanical Keyboard" 
     data-hc-price="149.99"
     data-hc-type="configurable">
     Add to Cart
   </button>
   ```

## Development & Maintenance
- **Setup**: Run `bun install` or `npm install`.
- **Dev Server**: Run `bun run dev` or `npm run dev`.
- **Build**: Run `bun run build`. 
- **Adding new features**:
  - **Configurator Inputs**: To add a new input type to the configurator, update the switch statement in `CartOverlay.tsx` (inside the configuration wizard rendering block).
  - **Attendant Commands**: To add new Attendant commands, update the `handleAttendantEvent` listener and the global API definition in `ShoppingAttendant.tsx`.
  - **Global APIs**: Core Cart APIs are exposed on `window.HyperCart`. When adding new methods, ensure they are documented in the `Index.tsx` documentation tab.

## AI Agent Skill (Claude Code / Cursor)
If you are an AI agent maintaining this project, adhere to the following rules:

<agent-skill>
<name>HyperCart Maintenance</name>
<description>Guidelines for modifying and extending the HyperCart codebase.</description>
<instructions>
1. **Component Structure**: Always use Tailwind utility classes for styling. Use semantic tokens defined in `src/styles.css` (e.g., `bg-primary`, `text-muted-foreground`) instead of hardcoding colors.
2. **Event System**: Features that need to interact with the cart from outside React must dispatch CustomEvents (e.g., `window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }))`).
3. **Data Attributes**: When parsing product data from the DOM or adding new integration hooks, always use and respect the `data-hc-` namespace.
4. **Testing**: When adding a new feature to the cart or attendant, you MUST update `src/pages/Index.tsx` to include a demo button or configuration testing that feature.
5. **Dependencies**: Shadcn UI components are pre-installed in `src/components/ui`. Re-use them before adding new external libraries.
6. **Form Tracking & Calendar**: Use the CRM integration patterns detailed in the system prompt for any new lead capture or scheduling forms.
</instructions>
</agent-skill>
