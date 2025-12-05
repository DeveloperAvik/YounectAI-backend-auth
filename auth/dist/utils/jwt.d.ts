import jwt from "jsonwebtoken";
export declare function signAccessToken(payload: object): never;
export declare function verifyAccessToken(token: string): string | jwt.JwtPayload;
export declare function signRefreshToken(payload: object): never;
export declare function verifyRefreshToken(token: string): string | jwt.JwtPayload;
//# sourceMappingURL=jwt.d.ts.map