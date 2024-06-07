"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInt = void 0;
/**
 * Случайное целое число [от] [до] включительно
 *
 * @param from - от
 * @param to - до
 */
const randomInt = (from, to) => {
    return Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1)) + Math.ceil(from);
};
exports.randomInt = randomInt;
//# sourceMappingURL=random-int.function.js.map