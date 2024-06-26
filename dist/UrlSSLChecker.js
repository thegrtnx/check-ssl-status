"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UrlSSLChecker = ({ url }) => {
    const hasSSL = (url) => {
        return url.startsWith("https://");
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null,
            "URL: ",
            url),
        react_1.default.createElement("p", null,
            "Has SSL: ",
            hasSSL(url) ? "Yes" : "No")));
};
exports.default = UrlSSLChecker;
