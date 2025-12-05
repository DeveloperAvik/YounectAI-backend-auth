import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export const verifyGatewayToken = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header)
        return res.status(401).json({ error: "Missing authorization header" });
    try {
        const token = header.split(" ")[1];
        // @ts-expect-error - JWT type definitions issue
        const payload = jwt.verify(token, env.JWT_SECRET);
        req.user = payload;
        next();
    }
    catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};
//# sourceMappingURL=auth.middleware.js.map