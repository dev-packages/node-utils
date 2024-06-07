import { randomHash } from './random-hash.function';

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
export const timedHash = (length = 32, precision = 86400000): string => {
  const hash = randomHash(length);
  const timestamp = Math.round(Date.now() / precision);
  return `${timestamp}${hash}`.substring(0, length);
};
