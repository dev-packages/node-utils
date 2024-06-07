import { EnvUtility } from './env';
import { StringUtility } from './string';
import { NumberUtility } from './number';
import { DateUtility } from './date';
import { ArrayUtility } from './array';
import { CryptoUtility } from './crypto';
import { Counter } from './counter';
import { Parser } from './parser';

export class Utils {
  static Env = EnvUtility;

  static String = StringUtility;

  static Number = NumberUtility;

  static Date = DateUtility;

  static Array = ArrayUtility;

  static Crypto = CryptoUtility;

  static Counter = Counter;

  static Parser = Parser;

  static async wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static safeParseJson<T>(json: any, defaultValue?: T): T | undefined {
    try {
      return JSON.parse(json);
    } catch {
      return defaultValue;
    }
  }
}
