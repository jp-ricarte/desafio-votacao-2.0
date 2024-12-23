import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, Token } from '../models/login.model';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private token = localStorage.getItem('token');
    private isLogged = new BehaviorSubject<boolean>(!!this.token);

    get user(): Login {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    constructor(
        private router: Router,
        private http: HttpClient,
        private loading: LoadingService,
        private toastr: ToastrService
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
                    localStorage.setItem('user', JSON.stringify(response.user));
                    this.isLogged.next(true);
                    this.router.navigate(['/pautas']);
                },
                (error: HttpErrorResponse) => {
                    console.error('[ERRO DE LOGIN]', error);
                    this.toastr.error(error.error.message, 'Ops!');
                    this.isLogged.next(false);
                }
            );
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.isLogged.next(false);
        this.router.navigate(['/login']);
    }
}
