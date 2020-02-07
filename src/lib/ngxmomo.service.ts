import { Injectable } from '@angular/core';
import { MomoCollectionsService } from './services';

@Injectable({
  providedIn: 'root'
})
export class NGXMomoService {

  constructor(private momoCollections: MomoCollectionsService) { }
}
