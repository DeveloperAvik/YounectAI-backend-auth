import type { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Gateway Error:", err.message || err);
  return res.status(500).json({ error: "Internal Gateway Error" });
};
