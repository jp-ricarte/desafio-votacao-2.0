import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../models/login.model';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private token = localStorage.getItem('token');
    private isLogged = new BehaviorSubject<boolean>(!!this.token);

    constructor(
        private router: Router,
        private http: HttpClient,
        private loading: LoadingService
    ) {}

    isLoggedIn(): Observable<boolean> {
        return this.isLogged.asObservable();
    }

    login(email: string, password: string): void {
        this.loading.start();
        this.http
            .post<Token>(
                environment.url + '/login',
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                }
            )
            .pipe(finalize(() => this.loading.stop()))
            .subscribe(
                (response: Token) => {
                    const token = response.token;
                    localStorage.setItem('token', token);
                    this.isLogged.next(true);
                    this.router.navigate(['/pautas']);
                },
                (error) => {
                    console.error('[ERRO DE LOGIN]', error);
                    this.isLogged.next(false);
                }
            );
    }
}
