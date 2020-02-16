import { Injectable } from '@angular/core';
import { NgxMomoServiceConfig, MomoEvent, MomoEventMain } from './data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MomoProvider } from './entities/momo-provider';

@Injectable({
  providedIn: 'root'
})
export class NgxMomoService {
  private providers: Map<string, MomoProvider>;
  public eventListener: BehaviorSubject<any> = new BehaviorSubject<any>(false);

    public listen(): Observable<MomoEventMain|any> {
        return this.eventListener.asObservable();
    }

    private eventCallback(momoEvent: MomoEventMain): void {
      this.notifyEvt(momoEvent);
    }
  constructor(config: NgxMomoServiceConfig, private http: HttpClient) {
    this.providers = config.getProviders();
    this.providers.forEach((provider: MomoProvider, key: string) => {
      provider.initialize(this.eventCallback.bind(this)).then(r => {
      })
      .catch(error => {
      });
    });
   }

   public getProvider(tagName: string) {
     return this.providers.get(tagName);
   }

  private notifyEvt(evt: MomoEventMain): void {
     this.eventListener.next(evt);
   }
}
