import { BaseMomoProvider } from '../entities/base-momo-provider';
import { MomoProviderClass, MtnMomoConfig } from '../entities/momo-provider';
import { MomoEvent } from '../data';
import { map } from 'rxjs/operators';
import { MomoService } from '../momo.service';

declare let mobileMoneyReinitializeWidgets: any;
export class MomoWidgetProvider extends BaseMomoProvider {
    public static readonly PROVIDER_TYPE = 'mtnmomowidget';
    public TYPE = 'mtnmomowidget';
    private momoConfig: MtnMomoConfig;

    public momoProviderObj: MomoProviderClass = new MomoProviderClass();

    constructor(config: MtnMomoConfig, private momo: MomoService) {
        super();
        this.momoConfig =  config;
        this.momoProviderObj.name = 'mtnmomowidget';
        this.momoProviderObj.url = config.url || 'https://widget.northeurope.cloudapp.azure.com:9443/v0.1.0/mobile-money-widget-mtn.js';
    }

    public initialize(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.loadScript(this.momoProviderObj, () => {
                window.addEventListener('mobile-money-qr-payment-created', (e) => {
                    this.momo.notify({
                        provider: this.TYPE,
                        event: {
                            type: 'mobile-money-qr-payment-created',
                            details: e
                        }
                    });
                });
                window.addEventListener('mobile-money-qr-payment-canceled', e => {
                    this.momo.notify({
                        provider: this.TYPE,
                        event: {
                            type: 'mobile-money-qr-payment-canceled',
                            details: e
                        }
                    });
                });
                window.addEventListener('mobile-money-qr-payment-successful', e => {
                    this.momo.notify({
                        provider: this.TYPE,
                        event: {
                            type: 'mobile-money-qr-payment-successful',
                            details: e
                        }
                    });
                });
                window.addEventListener('mobile-money-qr-payment-failed', e => {
                    this.momo.notify({
                        provider: this.TYPE,
                        event: {
                            type: 'mobile-money-qr-payment-failed',
                            details: e
                        }
                    });
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
