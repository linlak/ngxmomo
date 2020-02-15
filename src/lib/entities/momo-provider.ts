import { Observable } from 'rxjs';
import { MomoEvent } from '../data';

export type MomoEnvironments = 'sandbox' | 'live';
export interface MomoProvider {
    TYPE: string;
    initialize(): Promise<any>;
    listen(): Observable<MomoEvent>;
    loadScript(obj: MomoProviderClass, onload: any): void;
    getApiUser(): string;
    getCurrency(): string;
}

export interface MtnMomoConfig {
    apiUserId: string;
    environ?: MomoEnvironments;
    url?: string;
    currency?: string;
}

export class MomoProviderClass {
    // TYPE: string;
    name: string;
    url: string;
    currency = 'EUR';
    environ: MomoEnvironments = 'sandbox';
}
