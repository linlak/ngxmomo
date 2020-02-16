import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MomoEventMain } from './data';

@Injectable({
    providedIn: 'root'
})

export class MomoService {

    private eventListener: BehaviorSubject<any> = new BehaviorSubject<any>(false);

    public listen(): Observable<MomoEventMain|any> {
        return this.eventListener.asObservable();
    }

    public notify(event: MomoEventMain): void {
        this.eventListener.next(event);
    }
}
