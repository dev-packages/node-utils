"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    static counters = {};
    static next(name) {
        if (!Counter.counters[name]) {
            Counter.counters[name] = 0;
        }
        return ++Counter.counters[name];
    }
}
exports.Counter = Counter;
//# sourceMappingURL=index.js.map