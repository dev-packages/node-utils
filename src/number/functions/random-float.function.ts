/**
 * Случайное число с плавающей точкой [от] [до] включительно
 *
 * @param from - от
 * @param to - до
 * @param toFixed - количество знаков после запятой
 */
export const randomFloat = (from: number, to: number, toFixed = 2): number => {
  return parseFloat((Math.random() * (to - from) + from).toFixed(toFixed));
};
