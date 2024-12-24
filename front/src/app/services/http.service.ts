import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private baseUrl: string = environment.url;

    constructor(private toastr: ToastrService, private http: HttpClient) {
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', '*/*')
            .set('Access-Control-Allow-Origin', '*')
            .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'Erro desconhecido';
        if (error.error?.message) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = 'Mensagem: ' + error.message;
        }
        this.toastr.error(errorMessage, 'Ops!');
        return throwError(errorMessage);
    }

    get<T>(endpoint: string): Observable<T> {
        return this.http
            .get<T>(`${this.baseUrl}/${endpoint}`, {
                headers: this.getHeaders(),
            })
            .pipe(catchError(this.handleError.bind(this)));
    }

    post<T>(endpoint: string, body: any): Observable<T> {
        return this.http
            .post<T>(`${this.baseUrl}/${endpoint}`, body, {
                headers: this.getHeaders(),
            })
            .pipe(catchError(this.handleError.bind(this)));
    }

    put<T>(endpoint: string, body: any): Observable<T> {
        return this.http
            .put<T>(`${this.baseUrl}/${endpoint}`, body, {
                headers: this.getHeaders(),
            })
            .pipe(catchError(this.handleError.bind(this)));
    }

    patch<T>(endpoint: string, body: any): Observable<T> {
        return this.http
            .patch<T>(`${this.baseUrl}/${endpoint}`, body, {
                headers: this.getHeaders(),
            })
            .pipe(catchError(this.handleError.bind(this)));
    }

    delete<T>(endpoint: string): Observable<T> {
        return this.http
            .delete<T>(`${this.baseUrl}/${endpoint}`, {
                headers: this.getHeaders(),
            })
            .pipe(catchError(this.handleError.bind(this)));
    }
}
