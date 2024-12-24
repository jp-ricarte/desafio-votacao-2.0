import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    isRegister: boolean;
    loginForm = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]],
    });
    registerForm = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]],
        cpf: [null, [Validators.required, Validators.minLength(11)]],
        username: [null, [Validators.required]],
    });

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private user: UserService,
        private loading: LoadingService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {}

    login(): void {
        this.auth.login(
            this.loginForm.value.email,
            this.loginForm.value.password
        );
    }

    register(): void {
        this.loading.start();
        this.user
            .createUser(this.registerForm.getRawValue())
            .pipe(finalize(() => this.loading.stop()))
            .subscribe((response) => {
                this.toastr.success(response.message);
                this.isRegister = false;
            });
    }
}
