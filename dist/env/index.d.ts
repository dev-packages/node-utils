import { Environment } from './enums/environment.enum';
export declare class EnvUtility {
    static Environment: typeof Environment;
    static get isTestEnvironment(): boolean;
    static get isLocalEnvironment(): boolean;
    static get isDevEnvironment(): boolean;
    static get isProductionEnvironment(): boolean;
}
