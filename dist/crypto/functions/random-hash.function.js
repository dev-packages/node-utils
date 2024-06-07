"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomHash = void 0;
/**
 * UUID указанной длинны без символа "-"
 * По умолчанию длинна - 32 символа
 *
 * @param length
 *
 * @example randomHash(32); // "FW0RbZ7NiIS0E5kVRElLscM4Ot6E3GmJ"
 */
const randomHash = (length = 32) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
exports.randomHash = randomHash;
//# sourceMappingURL=random-hash.function.js.map