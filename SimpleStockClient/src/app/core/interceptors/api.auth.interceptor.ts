import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiConstants } from "../constants/api.constants";

@Injectable()
export class ApiAuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log('set api');
        // setting X-API-KEY header for each request
        const request = req.clone({
            setHeaders: {
                "X-API-KEY": ApiConstants.YAHOO_API_KEY
            }
        });
        return next.handle(request);
    }
}