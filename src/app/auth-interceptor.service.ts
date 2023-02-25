import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { api_key } from './../../enviroment'

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append('Authorization', 'Bearer 33e433d9875d0d5f8f62df971a0c7d72720bbe2248ee5d9ef2d5ba08a33704352b569bbf5cc8d94d754d29d5a071920621a5a853c635411ba5b9584b64188448533299fe4934d00d210f481d09521acd19dc81e4adc971027ea4a26b04e6103f65cfe01a8bc63ce7881d2392a9f48c860d11594844c680c03e34699e3308898b')
    });
    return next.handle(modifiedRequest);
  }
}
