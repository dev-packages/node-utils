export declare class Counter {
    static counters: Record<string, number>;
    static next(name: string): number;
}
