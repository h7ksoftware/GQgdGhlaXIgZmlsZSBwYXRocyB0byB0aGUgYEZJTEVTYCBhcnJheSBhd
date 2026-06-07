import { defineConfig } from "/node_modules/.vite/deps/vitest_config.js?v=36685d2a";
import react from "/node_modules/.vite/deps/@vitejs_plugin-react-swc.js?v=9c073005";
import path from "/@id/__vite-browser-external:path";
export default defineConfig({
    plugins: [
        react()
    ],
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: [
            "./src/test/setup.ts"
        ],
        include: [
            "src/**/*.{test,spec}.{ts,tsx}"
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpdGVzdC5jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVzdC9jb25maWdcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgc2V0dXBGaWxlczogW1wiLi9zcmMvdGVzdC9zZXR1cC50c1wiXSxcbiAgICBpbmNsdWRlOiBbXCJzcmMvKiovKi57dGVzdCxzcGVjfS57dHMsdHN4fVwiXSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKVxuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmVDb25maWciLCJyZWFjdCIsInBhdGgiLCJwbHVnaW5zIiwidGVzdCIsImVudmlyb25tZW50IiwiZ2xvYmFscyIsInNldHVwRmlsZXMiLCJpbmNsdWRlIiwicmVzb2x2ZSIsImFsaWFzIiwiX19kaXJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxZQUFZLFFBQVEsZ0JBQWdCO0FBQzdDLE9BQU9DLFdBQVcsMkJBQTJCO0FBQzdDLE9BQU9DLFVBQVUsT0FBTztBQUV4QixlQUFlRixhQUFhO0lBQzFCRyxTQUFTO1FBQUNGO0tBQVE7SUFDbEJHLE1BQU07UUFDSkMsYUFBYTtRQUNiQyxTQUFTO1FBQ1RDLFlBQVk7WUFBQztTQUFzQjtRQUNuQ0MsU0FBUztZQUFDO1NBQWdDO0lBQzVDO0lBQ0FDLFNBQVM7UUFDUEMsT0FBTztZQUNMLEtBQUtSLEtBQUtPLE9BQU8sQ0FBQ0UsV0FBVztRQUMvQjtJQUNGO0FBQ0YsR0FBRyJ9