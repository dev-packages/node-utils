"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomFloat = void 0;
/**
 * Случайное число с плавающей точкой [от] [до] включительно
 *
 * @param from - от
 * @param to - до
 * @param toFixed - количество знаков после запятой
 */
const randomFloat = (from, to, toFixed = 2) => {
    return parseFloat((Math.random() * (to - from) + from).toFixed(toFixed));
};
exports.randomFloat = randomFloat;
//# sourceMappingURL=random-float.function.js.map