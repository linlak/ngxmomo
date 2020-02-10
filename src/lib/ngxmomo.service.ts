import { Injectable } from '@angular/core';
import { NgxMomoServiceConfig, MomoEvent } from './data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxMomoService {

  private momoConfig: NgxMomoServiceConfig;
  private initialized: false;
  private requestToPayUrl = '';
  private momoEvent: BehaviorSubject<MomoEvent|null> = new BehaviorSubject(null);

  constructor(config: NgxMomoServiceConfig, private http: HttpClient) {
    this.momoConfig = config;
   }

   public listen(): Observable<MomoEvent|null> {
     return this.momoEvent.asObservable();
   }
   private httpHeaders() {
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
       })
     };
     return httpOptions;
   }

   public requestToPay(data: any): void {
     const req = this.http.post(this.requestToPayUrl, data, this.httpHeaders()).pipe(
       map((data: any) => data)
     );
   }
   public notify(eventName: string, eventDetails: any): void {
     this.momoEvent.next({name: eventName, details: eventDetails});
   }
}
