import { EnvUtility } from './env';
import { StringUtility } from './string';
import { NumberUtility } from './number';
import { DateUtility } from './date';
import { ArrayUtility } from './array';
import { CryptoUtility } from './crypto';
import { Counter } from './counter';
import { Parser } from './parser';
export declare class Utils {
    static Env: typeof EnvUtility;
    static String: typeof StringUtility;
    static Number: typeof NumberUtility;
    static Date: typeof DateUtility;
    static Array: typeof ArrayUtility;
    static Crypto: typeof CryptoUtility;
    static Counter: typeof Counter;
    static Parser: typeof Parser;
    static wait(ms: number): Promise<void>;
    static safeParseJson<T>(json: any, defaultValue?: T): T | undefined;
}
