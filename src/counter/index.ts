export class Counter {
  static counters: Record<string, number> = {};

  static next(name: string): number {
    if (!Counter.counters[name]) {
      Counter.counters[name] = 0;
    }

    return ++Counter.counters[name];
  }
}
