import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private baseUrl: string = environment.url;

    constructor(private http: HttpClient, private message: MessageService) {}

    private getHeaders(): HttpHeaders {
        return new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'Erro desconhecido';
        if (error.error instanceof ErrorEvent) {
            errorMessage = 'Erro: ' + error.error.message;
        } else {
            errorMessage = 'Código do erro: ' + error.status + 'Mensagem: ' + error.message;
        }
        this.message.add({
            severity: 'error',
            summary: 'Ops!',
            detail: errorMessage,
        });
        return throwError(errorMessage);
    }

    get<T>(endpoint: string): Observable<T> {
        return this.http
            .get<T>(`${this.baseUrl}/${endpoint}`, {
                headers: this.getHeaders(),
            })
            .pipe(catchError(this.handleError));
    }

    post<T>(endpoint: string, body: any): Observable<T> {
        return this.http
            .post<T>(`${this.baseUrl}/${endpoint}`, body, {
                headers: this.getHeaders(),
            })
            .pipe(catchError(this.handleError));
    }

    put<T>(endpoint: string, body: any): Observable<T> {
        return this.http
            .put<T>(`${this.baseUrl}/${endpoint}`, body, {
                headers: this.getHeaders(),
            })
            .pipe(catchError(this.handleError));
    }

    patch<T>(endpoint: string, body: any): Observable<T> {
        return this.http
            .patch<T>(`${this.baseUrl}/${endpoint}`, body, {
                headers: this.getHeaders(),
            })
            .pipe(catchError(this.handleError));
    }

    delete<T>(endpoint: string): Observable<T> {
        return this.http
            .delete<T>(`${this.baseUrl}/${endpoint}`, {
                headers: this.getHeaders(),
            })
            .pipe(catchError(this.handleError));
    }
}
