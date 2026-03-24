"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
const appError_1 = require("../utils/appError");
function errorMiddleware(err, req, res, _next) {
    if (err instanceof appError_1.AppError) {
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
