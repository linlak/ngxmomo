import { MomoProvider, MomoProviderClass } from './momo-provider';
import { MomoEvent } from '../data';
import { Observable, Subject } from 'rxjs';

export abstract class BaseMomoProvider implements MomoProvider {
    private eventListener: Subject<MomoEvent> = new Subject<MomoEvent>();
    constructor() {}
    abstract TYPE: string;
    abstract initialize(): Promise<any>;
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
    public notify(eventName: string, eventDetails: any): void {
        this.eventListener.next({type: eventName, details: eventDetails});
    }
    public listen(): Observable<MomoEvent> {
        return this.eventListener.asObservable();
    }
}
