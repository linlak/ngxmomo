import { BehaviorSubject } from 'rxjs';
import { MomoEventMain } from '../data';

export type MomoEnvironments = 'sandbox' | 'live';
export interface MomoProvider {
    TYPE: string;
    eventCallback: any;
    initialize(eventCallback: any): Promise<any>;
    loadScript(obj: MomoProviderClass, onload: any): void;
    getApiUser(): string;
    getCurrency(): string;
    notify(event: CustomEvent): void;
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
