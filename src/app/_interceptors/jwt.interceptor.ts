import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


const TOKEN_NAME = 'currentUser';

export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        const token = JSON.parse(localStorage.getItem(TOKEN_NAME));
        if(token) {
            const cloned  = request.clone({
                headers: request.headers.set("Authorization",
                    "Bearer" + token.jwt)
            });

            return next.handle(cloned);
        }

        return next.handle(request);
    }
}