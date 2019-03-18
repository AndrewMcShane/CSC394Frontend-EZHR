import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


const TOKEN_NAME = 'currentUser';

export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        
        
            const cloned  = request.clone({
                headers: request.headers.set("Content-Type",
                    "application/json")
            });

            return next.handle(cloned);
        
    }
}