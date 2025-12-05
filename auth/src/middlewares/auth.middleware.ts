import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const verifyGatewayToken = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: "Missing authorization header" });

  try {
    const token = header.split(" ")[1];
    // @ts-expect-error - JWT type definitions issue
    const payload = jwt.verify(token, (env as any).JWT_SECRET);
    (req as any).user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
