import { Environment } from './enums/environment.enum';

export class EnvUtility {
  static Environment = Environment;

  static get isTestEnvironment(): boolean {
    return process.env.NODE_ENV === Environment.TEST;
  }

  static get isLocalEnvironment(): boolean {
    return process.env.NODE_ENV === Environment.LOCAL;
  }

  static get isDevEnvironment(): boolean {
    return [Environment.LOCAL, Environment.STAGING, Environment.DEVELOPMENT].includes(
      <Environment>process.env.NODE_ENV,
    );
  }

  static get isProductionEnvironment(): boolean {
    return process.env.NODE_ENV === Environment.PRODUCTION;
  }
}
