import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import authProxy from "./routes/auth.proxy.js";
import userProxy from "./routes/user.proxy.js";
import postProxy from "./routes/post.proxy.js";
import { errorHandler } from "./middlewares/error.middleware.js";
const app = express();
app.use(cors({ origin: env.FRONTEND_URL, credentials: true }));
app.use(express.json());
// Gateway routes
app.use("/auth", authProxy);
app.use("/user", userProxy);
app.use("/posts", postProxy);
app.get("/", (req, res) => res.send("API Gateway Running"));
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map