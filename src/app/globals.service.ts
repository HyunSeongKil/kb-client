import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  apiServerUrl = 'http://localhost:58081/kb';

  constructor() {}
}
