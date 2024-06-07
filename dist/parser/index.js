"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
class Parser {
    static ip(value) {
        return Parser.ipV4(value) || Parser.ipV6(value);
    }
    static ipV4(value) {
        const ipv4Regex = /(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;
        const match = value.match(ipv4Regex);
        return match ? match[0] : null;
    }
    static ipV6(value) {
        const ipv6Regex = /(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}/;
        const match = value.match(ipv6Regex);
        return match ? match[0] : null;
    }
}
exports.Parser = Parser;
//# sourceMappingURL=index.js.map