import { Router } from "express";
import { env } from "../config/env.js";
import { createServiceProxy } from "../utils/proxy.js";
import { verifyGatewayToken } from "../middlewares/auth.middleware.js";
const router = Router();
router.use("/", verifyGatewayToken, createServiceProxy(env.POST_SERVICE_URL));
export default router;
//# sourceMappingURL=post.proxy.js.map