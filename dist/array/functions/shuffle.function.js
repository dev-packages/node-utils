"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = void 0;
/**
 * Возвращает новый массив с перемешанными элементами
 *
 * @param array
 */
function shuffleArray(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
exports.shuffleArray = shuffleArray;
//# sourceMappingURL=shuffle.function.js.map