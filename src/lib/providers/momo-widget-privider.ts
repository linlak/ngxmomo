import { BaseMomoProvider } from '../entities/base-momo-provider';
import { MomoProviderClass, MtnMomoConfig } from '../entities/momo-provider';
import { MomoEvent } from '../data';
import { map } from 'rxjs/operators';

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

    public initialize(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.loadScript(this.momoProviderObj, () => {
                window.addEventListener('mobile-money-qr-payment-created', (e) => {
                    console.log('mobile-money-qr-payment-created', e);
                });
                window.addEventListener('mobile-money-qr-payment-canceled', e => {
                    console.log('mobile-money-qr-payment-canceled', e);
                });
                window.addEventListener('mobile-money-qr-payment-successful', e => {
                    console.log('mobile-money-qr-payment-successful', e);
                });
                window.addEventListener('mobile-money-qr-payment-failed', e => {
                    console.log('mobile-money-qr-payment-failed', e);
                });

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
