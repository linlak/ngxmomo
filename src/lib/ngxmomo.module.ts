import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { NgxMomoComponent } from './ngxmomo.component';
import { NgxMomoServiceConfig } from './data';
import { NgxMomoService } from './ngxmomo.service';
import { MomoBottonComponent } from './components/momo-button.component';
import { MomoQrpaymentComponent } from './components/momo-qrpayment.component';



@NgModule({
  declarations: [
    NgxMomoComponent,
    MomoBottonComponent,
    MomoQrpaymentComponent,
  ],
  imports: [
  ],
  exports: [
    NgxMomoComponent,
    MomoBottonComponent,
    MomoQrpaymentComponent,
  ]
})
export class NgxMomoModule {
  private static alreadCalled = false;
  constructor(@Optional() @SkipSelf() parentModule?: NgxMomoModule) {
    if (parentModule) {
        NgxMomoModule.alreadCalled = true;
      }
  }

  /**
   * the forRoot function is used to initialize the momo library in the root module i.e AppModule
   * const momoConfig = new NgxMomoServiceConfig();
   *
   * import: [
   *  .............
   *  NgxMomoModule.forRoot(momoConfig),
   *  ..............
   * ]
   *
   */

  static forRoot(config: NgxMomoServiceConfig): ModuleWithProviders {
    if (NgxMomoModule.alreadCalled) {
      return;
    }
    return {
      ngModule: NgxMomoModule,
      providers: [
        NgxMomoService,
        {
          provide: NgxMomoServiceConfig,
          useValue: config
        }
      ]
    };
  }


 }
