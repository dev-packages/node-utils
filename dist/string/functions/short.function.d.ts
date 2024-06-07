/**
 * Сокращает строку до указанного количества символов
 *
 * @example short('Hello world', 5); // 'Hello...'
 * @example short('Hello world', [5, 5]); // 'Hello...world'
 * @example short('Hello world', [5, 3]); // 'Hello...rld'
 * @example short('Hello world', [3, 5]); // 'Hel...world'
 * @example short('Hello world', [3, 3]); // 'Hel...rld'
 *
 * @param value
 * @param count
 */
export declare const shortString: (value: string, count: number | [start: number, end: number]) => string;
