import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router) {}

    ngOnInit(): void {}

    logout(): void {
        this.auth.logout();
    }

    navigatePautas(): void {
        this.router.navigate(['/pautas']);
    }
}
