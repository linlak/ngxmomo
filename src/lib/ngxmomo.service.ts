import { Injectable } from '@angular/core';
import { NgxMomoServiceConfig, MomoEvent } from './data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MomoProvider } from './entities/momo-provider';

@Injectable({
  providedIn: 'root'
})
export class NgxMomoService {
  private providers: Map<string, MomoProvider>;

  constructor(config: NgxMomoServiceConfig, private http: HttpClient) {
    this.providers = config.getProviders();
    this.providers.forEach((provider: MomoProvider, key: string) => {
      provider.initialize().then(r => {
      })
      .catch(error => {
      });
    });
   }

   public getProvider(tagName: string) {
     return this.providers.get(tagName);
   }
}
