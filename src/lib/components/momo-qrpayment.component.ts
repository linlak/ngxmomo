import { OnInit, OnDestroy, Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxMomoService } from '../ngxmomo.service';
import { Subscription } from 'rxjs';
import { MomoProvider } from '../entities/momo-provider';
import { MomoWidgetProvider } from '../providers/momo-widget-privider';
import { MomoEvent } from '../data';

@Component({
    selector: 'momo-qrpayment',
    template: `
        <div>
            <div
                class="mobile-money-qr-payment"
                [attr.data-api-user-id]="apiUserId"
                [attr.data-amount]="amount"
                [attr.data-currency]="currency"
                [attr.data-external-id]="externalId"
            >
            </div>
        </div>
    `,
    styles: []
})

export class MomoQrpaymentComponent implements OnInit, OnDestroy {
    @Input() externalId?: string;
    @Input() amount?: number;
    private momoProvider: MomoProvider| null;
    apiUserId: string;
    currency: string;
    constructor(public momo: NgxMomoService) {
        this.momoProvider = this.momo.getProvider('mtnmomowidget');
        if ( !this.momoProvider && !(this.momoProvider instanceof MomoWidgetProvider)) {
            throw new Error(`${MomoWidgetProvider.PROVIDER_TYPE} was not initialized`);
        }
        this.apiUserId = this.momoProvider.getApiUser();
        this.currency = this.momoProvider.getCurrency();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
