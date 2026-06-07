var _s = $RefreshSig$();
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd7a232"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport0_react);
const MOBILE_BREAKPOINT = 768;
export function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = React.useState(undefined);
    React.useEffect(()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZS1tb2JpbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNT0JJTEVfQlJFQUtQT0lOVCA9IDc2ODtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzTW9iaWxlKCkge1xuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHtNT0JJTEVfQlJFQUtQT0lOVCAtIDF9cHgpYCk7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UKTtcbiAgICB9O1xuICAgIG1xbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIG9uQ2hhbmdlKTtcbiAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UKTtcbiAgICByZXR1cm4gKCkgPT4gbXFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb25DaGFuZ2UpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuICEhaXNNb2JpbGU7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNT0JJTEVfQlJFQUtQT0lOVCIsInVzZUlzTW9iaWxlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidXNlRWZmZWN0IiwibXFsIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm9uQ2hhbmdlIiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO0FBQUEsWUFBWUEsV0FBVyxRQUFRO0FBRS9CLE1BQU1DLG9CQUFvQjtBQUUxQixPQUFPLFNBQVNDOztJQUNkLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSixNQUFNSyxRQUFRLENBQXNCQztJQUVwRU4sTUFBTU8sU0FBUyxDQUFDO1FBQ2QsTUFBTUMsTUFBTUMsT0FBT0MsVUFBVSxDQUFDLENBQUMsWUFBWSxFQUFFVCxvQkFBb0IsRUFBRSxHQUFHLENBQUM7UUFDdkUsTUFBTVUsV0FBVztZQUNmUCxZQUFZSyxPQUFPRyxVQUFVLEdBQUdYO1FBQ2xDO1FBQ0FPLElBQUlLLGdCQUFnQixDQUFDLFVBQVVGO1FBQy9CUCxZQUFZSyxPQUFPRyxVQUFVLEdBQUdYO1FBQ2hDLE9BQU8sSUFBTU8sSUFBSU0sbUJBQW1CLENBQUMsVUFBVUg7SUFDakQsR0FBRyxFQUFFO0lBRUwsT0FBTyxDQUFDLENBQUNSO0FBQ1g7R0FkZ0JEIn0=