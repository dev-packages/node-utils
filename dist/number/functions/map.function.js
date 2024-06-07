"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapNumber = void 0;
/**
 * Конвертирует число из одного диапазона в другой
 * ex: map(0.5, 0, 1, 0, 100); // 50 (конвертировать число 0.5 из диапазона от 0 до 1 в диапазон от 0 до 100).
 *
 * @param value
 * @param sourceFrom
 * @param sourceTo
 * @param targetFrom
 * @param targetTo
 */
const mapNumber = (value, sourceFrom, sourceTo, targetFrom, targetTo) => {
    return ((value - sourceFrom) * (targetTo - targetFrom)) / (sourceTo - sourceFrom) + targetFrom;
};
exports.mapNumber = mapNumber;
//# sourceMappingURL=map.function.js.map