import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {MyAuthService} from "./my-auth.service";
import {Observable} from 'rxjs';

@Injectable()
export class MyAuthInterceptor implements HttpInterceptor {
  // private auth: MyAuthService
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const isLoggedIn = this.auth.isLoggedIn();

    const tokenAvailable = localStorage.getItem('accessToken') !== null;

    if(tokenAvailable) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
    }
    return next.handle(request);
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   // Get the auth token from the service
  //   const authToken = this.auth.getLoginToken()?.token ?? '';
  //
  //   // Clone the request and add the authorization header
  //   const authReq = req.clone({
  //     headers: req.headers.set('my-auth-token', authToken),
  //   });
  //
  //   // Send cloned request with header to the next handler
  //   return next.handle(authReq);
  // }


}
