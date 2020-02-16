#NGXMomo#

This is an angular library for connecting with Mobile Money APIs

This library will help you to use the MTM Collection widget in your angular project.

## Get Started ##
To get start with this momo api widget for angular, simply enter the command bellow in your project root in terminal or CMD

    npm i @linlak/ngxmomo --save

or install via angular cli 

    ng add @linlak/ngxmomo

## Initialization ##

After all the dependencies have been installed, it is now time to add our NgxMomoModule to our application i.e in AppModule

**app.module.ts**


	import { BrowserModule } from '@angular/platform-browser';
	import { NgModule } from '@angular/core';
	
	import { AppComponent } from './app.component';
	import { NgxMomoModule, NgxMomoServiceConfig } from '@linlak/ngxmomo';
	import { HttpClientModule } from '@angular/common/http';
	
	const momoConfig = new NgxMomoServiceConfig()
				.addMomoWidgetProvider({
      				apiUserId: 'b12d7b22-3057-4c8e-ad50-63904171d18c',
      				environ: 'sandbox',
      				currency: 'EUR',
					// url: 'your production url', // optional should be used in production production environment
    			});
	// OR
	/*
	
 	 	const momoConfig = new NgxMomoServiceConfig([
    			new MomoWidgetProvider({
      				apiUserId: 'b12d7b22-3057-4c8e-ad50-63904171d18c',
      				environ: 'sandbox',
      				currency: 'EUR',
					// url: 'your production url', // optional should be used in production production environment
    			}),
  			]);
	*/

	@NgModule({
  		declarations: [
    		AppComponent
  		],
 		imports: [
    		BrowserModule,
    		HttpClientModule,
    		NgxMomoModule.forRoot(momoConfig),
		],
 		providers: [],
 		bootstrap: [AppComponent]
	})
	export class AppModule { }


In styles.scss add the following code

**styles.scss**

	@import"bootstrap/scss/bootstrap.scss";
	.mobile-money-qr-payment {
	    width: 200px;
	    display: inline-block;
	}


In your component files user **momo-qrpayment** directive to display the Momo Buttons

Let us take an example from the momo demo page

**app.component.html**

	<div class="container">
	    <div class="row">
	        <div class="col-12">
	            <h3 class="text-center">Momo App</h3>
	            <div class="row">
	                <div class="col-sm-8 mt-5 mx-auto">
	                    <p>
	                        The following demo is running towards a test backend.
	                        <br> Depending on what amount the invoice has the backend will respond with different statuses.
	
	                    </p>
	                    <ul>
	                        <li>1 - 19 PENDING</li>
	                        <li>20 - 79 FAILED</li>
	                        <li>all other amounts SUCCESSFUL</li>
	                    </ul>
	                    <h2 class="my-2">State: PENDING</h2>
	                    <momo-qrpayment [amount]="10" [externalId]="'Receipt-2112'">
	                    </momo-qrpayment>
	                    <h2 class="my-2">State: SUCCESSFUL</h2>
	                    <momo-qrpayment [amount]="100" [externalId]="'Receipt-2112'">
	                    </momo-qrpayment>
	                    <h2 class="my-2">State: FAILED</h2>
	                    <momo-qrpayment [amount]="60" [externalId]="'Receipt-2112'">
	                    </momo-qrpayment>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
	

**Subscribe to event**

To listen to the event from the service you will create your servce as follows

**invoice.service.ts**

	import { Injectable } from '@angular/core';
	import { NgxMomoService } from '@linlak/ngxmomo';
	
	@Injectable({
	    providedIn: 'root'
	})
	export class InvoiceService {
	    constructor(private momo: NgxMomoService) {
	        this.momo.listen().subscribe(r => console.log(r));
	    }
	}	


Finally we import our InvoiceService into AppComponent

**app.component.ts**

	import { Component } from '@angular/core';
	import { InvoiceService } from './invoice.service';
	
	@Component({
	  selector: 'momo-root',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.scss']
	})
	export class AppComponent {
	  constructor(public invoiceService: InvoiceService) {}
	}

## Bulk SMS Services ##
You can send bulk sms [LinSMS](https://lin-sms.com)