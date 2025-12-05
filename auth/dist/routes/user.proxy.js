import { Router } from "express";
import { env } from "../config/env.js";
import { createServiceProxy } from "../utils/proxy.js";
import { verifyGatewayToken } from "../middlewares/auth.middleware.js";
const router = Router();
// protect user routes
router.use("/", verifyGatewayToken, createServiceProxy(env.USER_SERVICE_URL));
export default router;
//# sourceMappingURL=user.proxy.js.map