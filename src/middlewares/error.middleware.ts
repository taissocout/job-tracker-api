import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    error: "Internal server error",
  });
}
