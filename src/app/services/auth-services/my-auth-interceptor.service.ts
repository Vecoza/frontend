import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {MyAuthService} from "./my-auth.service";

@Injectable()
export class MyAuthInterceptor implements HttpInterceptor {

  constructor(private auth: MyAuthService) {
  }



  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service
    const authToken = this.auth.getLoginToken()?.token ?? '';

    // Clone the request and add the authorization header
    const authReq = req.clone({
      headers: req.headers.set('my-auth-token', authToken),
    });

    // Send cloned request with header to the next handler
    return next.handle(authReq);
  }


}
