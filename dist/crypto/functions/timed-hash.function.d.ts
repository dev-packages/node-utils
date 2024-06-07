/**
 * Генерирует хэш указанной длинны с добавлением временной метки
 * По умолчанию длинна - 32 символа
 * По умолчанию точность - 1 день
 *
 * @param length
 * @param precision
 *
 * @example timedHash(32); // "19484ef9d0727e142dc1e12086983148fd4" (time: 19484)
 * @example timedHash(32, 3600000); // "467614f9d0727e142dc1e12086983148fd4" (time: 467614)
 */
export declare const timedHash: (length?: number, precision?: number) => string;
