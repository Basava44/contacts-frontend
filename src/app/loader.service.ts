import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new BehaviorSubject<any>(false);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  loaderState = this.loaderSubject.asObservable();
  constructor() {
    this.loaderSubject.next({ show: false });
  }
  show() {
    this.loaderSubject.next({ show: true });
  }
  hide() {
    this.loaderSubject.next({ show: false });
  }
}
