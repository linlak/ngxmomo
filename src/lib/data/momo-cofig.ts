import { MomoProvider, MtnMomoConfig } from '../entities/momo-provider';
import { MomoWidgetProvider } from '../providers/momo-widget-privider';
import { BehaviorSubject, Observable } from 'rxjs';
import { MomoEvent } from './momo-events';

export interface NgxMomoServiceConfigItem {
    provider: MomoProvider;
}
export class NgxMomoServiceConfig {
    private providers: Map<string, MomoProvider> = new Map<string, MomoProvider>();
    constructor(providers?: NgxMomoServiceConfigItem[]) {

        if (providers) {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < providers.length; i++) {
                const element = providers[i];
                this.providers.set(element.provider.TYPE, element.provider);
            }
        }
    }
    getProviders() {
        return this.providers;
    }
    private addProvider(provider: MomoProvider) {
        if (!this.providers.get(provider.TYPE)) {
            this.providers.set(provider.TYPE, provider);
        }
    }

    public addMomoWidgetProvider(config: MtnMomoConfig) {
        this.addProvider(new MomoWidgetProvider(config));
        return this;
    }
}
