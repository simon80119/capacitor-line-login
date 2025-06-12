import { WebPlugin } from '@capacitor/core';
import type { LineLoginPlugin, SetupOptions, Result, LoginResult, GetAccessTokenResult } from './definitions';
export declare class LineLoginWeb extends WebPlugin implements LineLoginPlugin {
    setup(options: SetupOptions): Promise<void>;
    login(): Promise<LoginResult>;
    logout(): Promise<Result>;
    getAccessToken(): Promise<GetAccessTokenResult>;
    refreshAccessToken(): Promise<GetAccessTokenResult>;
    verifyAccessToken(): Promise<Result>;
}
