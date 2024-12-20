import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    form = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
    });
    constructor(private fb: FormBuilder, private auth: AuthService) {}

    ngOnInit(): void {}

    onSubmit(): void {
        this.auth.login(this.form.value.email, this.form.value.password);
    }
}
