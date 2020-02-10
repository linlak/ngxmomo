import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { NgxMomoComponent } from './ngxmomo.component';
import { NgxMomoServiceConfig } from './data';
import { NgxMomoService } from './ngxmomo.service';
import { MomoBottonComponent } from './components/momo-button.component';



@NgModule({
  declarations: [
    NgxMomoComponent,
    MomoBottonComponent,
  ],
  imports: [
  ],
  exports: [
    NgxMomoComponent,
    MomoBottonComponent,
  ]
})
export class NgxMomoModule {
  private static alreadCalled = false;
  constructor(@Optional() @SkipSelf() parentModule?: NgxMomoModule) {
    console.log('NgxMomoModule');
    if (parentModule) {
        console.log('NgxMomoModule is called more than once');
        NgxMomoModule.alreadCalled = true;
      }
  }

  /**
   * the forRoot function is used to initialize the momo library in the root module i.e AppModule
   * const momoConfig = new NgxMomoServiceConfig({
   *                      apiUserId: 'your apiUserId',
   *                      environ: 'sandbox', // can be 'sandbox' or 'live'
   *                      currency: 'EUR', // the currency supported by platiform api and your api settings
   *                    });
   *
   * import: [
   *  .............
   *  NgxMomoModule.forRoot(momoConfig),
   *  ..............
   * ]
   *
   */

  static forRoot(config: NgxMomoServiceConfig): ModuleWithProviders {
    console.log('NgxMomoModule forRoot');
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
