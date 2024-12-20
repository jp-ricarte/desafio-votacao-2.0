import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PautasComponent } from './pages/pautas/pautas.component';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext'

@NgModule({
    declarations: [AppComponent, LoginComponent, PautasComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        
        ButtonModule,
        InputTextModule,
        PasswordModule,

        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
