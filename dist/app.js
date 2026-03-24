"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const job_routes_1 = require("./routes/job.routes");
const error_middleware_1 = require("./middlewares/error.middleware");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use("/jobs", job_routes_1.jobRoutes);
app.use(error_middleware_1.errorMiddleware);
