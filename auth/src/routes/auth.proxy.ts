import { Router } from "express";
import { env } from "../config/env.js";
import { createServiceProxy } from "../utils/proxy.js";

const router = Router();

router.use("/", createServiceProxy(env.AUTH_SERVICE_URL));

export default router;
