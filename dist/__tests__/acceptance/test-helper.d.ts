import { Loopback4GithubAppApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Loopback4GithubAppApplication;
    client: Client;
}
