import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "";
const JWT_EXPIRY = process.env.JWT_EXPIRY || "900s";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "";
const JWT_REFRESH_EXPIRY = process.env.JWT_REFRESH_EXPIRY || "7d";
export function signAccessToken(payload) {
    // @ts-expect-error - JWT type definitions conflict
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
}
export function verifyAccessToken(token) {
    return jwt.verify(token, JWT_SECRET);
}
export function signRefreshToken(payload) {
    // @ts-expect-error - JWT type definitions conflict
    return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: JWT_REFRESH_EXPIRY });
}
export function verifyRefreshToken(token) {
    return jwt.verify(token, JWT_REFRESH_SECRET);
}
//# sourceMappingURL=jwt.js.map