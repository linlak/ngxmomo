import { MomoProvider, MomoProviderClass } from './momo-provider';
import {  MomoEventMain } from '../data';
import {  BehaviorSubject } from 'rxjs';

export abstract class BaseMomoProvider implements MomoProvider {
    eventCallback: any;
    constructor() {}
    abstract TYPE: string;
    abstract initialize(eventCallback: any): Promise<any>;
    abstract getApiUser(): string;
    abstract getCurrency(): string;
    public loadScript(obj: MomoProviderClass, onload: any): void {
        if (document.getElementById(obj.name)) {
            return;
        }

        const momoJs = document.createElement('script');
        momoJs.async = false;
        momoJs.src = obj.url;
        momoJs.onload = onload;

        document.head.appendChild(momoJs);
    }
    public notify(eventDetails: CustomEvent): void {
        this.eventCallback({
            provider: this.TYPE,
            event: {
                type: eventDetails.type,
                details: eventDetails.detail
            }
        });
    }
}
