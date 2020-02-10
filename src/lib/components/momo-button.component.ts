import { OnInit, OnDestroy, Component } from '@angular/core';
import { NgxMomoService } from '../ngxmomo.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'momo-momo-button',
    template: `
        <button (click)="performRequest()">Momo Button</button>
    `,
    styles: []
})

export class MomoBottonComponent implements OnInit, OnDestroy {
    private momoListener: Subscription;
    constructor(private momo: NgxMomoService) {}
    ngOnInit() {
        this.momoListener = this.momo.listen().subscribe(r => {
            console.log(r);
        });
    }
    ngOnDestroy() {
        this.momoListener.unsubscribe();
    }

    performRequest() {
        this.momo.notify('created', {});
    }
}
