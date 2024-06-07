"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortNumber = void 0;
/**
 * Сократить число в строку типа '500' | '2К' | '1.5М'
 *
 * @param value
 */
const shortNumber = (value) => {
    if (value > 1e19) {
        throw new RangeError('Expected to be < 1e19');
    }
    if (value < -1e19) {
        throw new RangeError('Expected to be > -1e19');
    }
    if (Math.abs(value) < 1000) {
        return value.toString();
    }
    let shortedNumber;
    let exponent;
    const size = Math.floor(value).toString().length;
    const sign = value < 0 ? '-' : '';
    const suffixes = {
        K: 6,
        M: 9,
        B: 12,
        T: 16,
    };
    value = Math.abs(value);
    exponent = size % 3 === 0 ? size - 3 : size - (size % 3);
    shortedNumber = Math.round(10 * (value / 10 ** exponent)) / 10;
    if (shortedNumber === 1000 && value < 1000000) {
        exponent = 6;
        shortedNumber = 1;
    }
    for (const [suffix, suffixValue] of Object.entries(suffixes)) {
        if (exponent < suffixValue) {
            shortedNumber = `${shortedNumber}${suffix}`;
            break;
        }
    }
    return sign + shortedNumber;
};
exports.shortNumber = shortNumber;
//# sourceMappingURL=short.function.js.map