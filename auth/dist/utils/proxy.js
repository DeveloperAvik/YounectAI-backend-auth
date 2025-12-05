import { createProxyMiddleware } from "http-proxy-middleware";
export const createServiceProxy = (target) => createProxyMiddleware({
    target,
    changeOrigin: true,
    secure: false,
    timeout: 5000,
    proxyTimeout: 5000,
});
//# sourceMappingURL=proxy.js.map