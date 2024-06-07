"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvUtility = void 0;
const environment_enum_1 = require("./enums/environment.enum");
class EnvUtility {
    static Environment = environment_enum_1.Environment;
    static get isTestEnvironment() {
        return process.env.NODE_ENV === environment_enum_1.Environment.TEST;
    }
    static get isLocalEnvironment() {
        return process.env.NODE_ENV === environment_enum_1.Environment.LOCAL;
    }
    static get isDevEnvironment() {
        return [environment_enum_1.Environment.LOCAL, environment_enum_1.Environment.STAGING, environment_enum_1.Environment.DEVELOPMENT].includes(process.env.NODE_ENV);
    }
    static get isProductionEnvironment() {
        return process.env.NODE_ENV === environment_enum_1.Environment.PRODUCTION;
    }
}
exports.EnvUtility = EnvUtility;
//# sourceMappingURL=index.js.map