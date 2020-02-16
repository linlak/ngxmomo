import { BaseMomoProvider } from '../entities/base-momo-provider';
import { MomoProviderClass, MtnMomoConfig } from '../entities/momo-provider';
import { MomoEventMain } from '../data';
import { BehaviorSubject } from 'rxjs';

declare let mobileMoneyReinitializeWidgets: any;
export class MomoWidgetProvider extends BaseMomoProvider {
    public static readonly PROVIDER_TYPE = 'mtnmomowidget';
    public TYPE = 'mtnmomowidget';
    private momoConfig: MtnMomoConfig;

    public momoProviderObj: MomoProviderClass = new MomoProviderClass();

    constructor(config: MtnMomoConfig) {
        super();
        this.momoConfig =  config;
        this.momoProviderObj.name = 'mtnmomowidget';
        this.momoProviderObj.url = config.url || 'https://widget.northeurope.cloudapp.azure.com:9443/v0.1.0/mobile-money-widget-mtn.js';
    }

    public initialize(eventCallback: any): Promise<any> {

        return new Promise((resolve, reject) => {
            this.loadScript(this.momoProviderObj, () => {
                this.eventCallback = eventCallback;
                window.addEventListener('mobile-money-qr-payment-created', (e: CustomEvent) => this.notify(e));
                window.addEventListener('mobile-money-qr-payment-canceled', (e: CustomEvent) => this.notify(e));
                window.addEventListener('mobile-money-qr-payment-successful', (e: CustomEvent) => this.notify(e));
                window.addEventListener('mobile-money-qr-payment-failed', (e: CustomEvent) => this.notify( e));

                mobileMoneyReinitializeWidgets();
                resolve();
            });
        });
    }

     public getApiUser(): string {
     return this.momoConfig.apiUserId;
   }
   public getCurrency(): string {
     return this.momoConfig.currency;
   }
}
