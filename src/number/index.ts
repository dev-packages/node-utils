import { mapNumber, randomFloat, randomInt, shortNumber } from './functions';
import { MAX_INT_32 } from './constants';

export class NumberUtility {
  static MAX_INT_32 = MAX_INT_32;

  static map = mapNumber;

  static randomFloat = randomFloat;

  static randomInt = randomInt;

  static short = shortNumber;
}
