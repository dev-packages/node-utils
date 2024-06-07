/**
 * Случайное целое число [от] [до] включительно
 *
 * @param from - от
 * @param to - до
 */
export const randomInt = (from: number, to: number): number => {
  return Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1)) + Math.ceil(from);
};
