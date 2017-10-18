import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  public active: boolean = false;
  constructor() { }
}
