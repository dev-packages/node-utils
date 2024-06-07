"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const env_1 = require("./env");
const string_1 = require("./string");
const number_1 = require("./number");
const date_1 = require("./date");
const array_1 = require("./array");
const crypto_1 = require("./crypto");
const counter_1 = require("./counter");
const parser_1 = require("./parser");
class Utils {
    static Env = env_1.EnvUtility;
    static String = string_1.StringUtility;
    static Number = number_1.NumberUtility;
    static Date = date_1.DateUtility;
    static Array = array_1.ArrayUtility;
    static Crypto = crypto_1.CryptoUtility;
    static Counter = counter_1.Counter;
    static Parser = parser_1.Parser;
    static async wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    static safeParseJson(json, defaultValue) {
        try {
            return JSON.parse(json);
        }
        catch {
            return defaultValue;
        }
    }
}
exports.Utils = Utils;
//# sourceMappingURL=index.js.map