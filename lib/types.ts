import createSdk, { DeliveryMethod } from '@descope/core-js-sdk';
import { JwTPayload } from 'jose';

type Head<T extends ReadonlyArray<any>> = T extends readonly [] ? never : T[0];

/** All information regarding token including the raw JWT, parsed JWT and cookies */
export interface AuthenticationInfo {
  jwt: string;
  token: JwTPayload;
  cookies?: string[];
}

/** Descope core SDK type */
export type CreateCoreSdk = typeof createSdk;
export type CoreSdkConfig = Head<Parameters<CreateCoreSdk>>;
export type CoreSdk = ReturnType<CreateCoreSdk>;
export type DeliveryMethodForTestUser = DeliveryMethod | 'Embedded';
