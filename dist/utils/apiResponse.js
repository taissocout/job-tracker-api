"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor(success, data, error) {
        this.success = success;
        this.data = data;
        this.error = error;
    }
}
exports.ApiResponse = ApiResponse;
