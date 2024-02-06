import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { TokenService } from './token.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private loader: LoaderService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let dupReq = req;
    this.loader.show();
    const token = this.tokenService.getToken();

    if (
      token &&
      (dupReq.url.includes('contacts') || dupReq.url.includes('current'))
    ) {
      dupReq = dupReq.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return next.handle(dupReq).pipe(
      switchMap((event: HttpEvent<any>) => {
        const response: any = event;
        if (response.status === 200 && response.url.includes('login')) {
          this.tokenService.setToken(response.body.accessToken);
        }
        this.loader.hide();
        return of(event);
      })
    );
  }
}
