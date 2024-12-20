import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PautasComponent } from './pages/pautas/pautas.component';
import { LoadingModule } from './utils/loading/loading.module';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    declarations: [AppComponent, LoginComponent, PautasComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        
        ButtonModule,
        InputTextModule,
        PasswordModule,
        ToastModule,
        ToolbarModule,

        ReactiveFormsModule,
        HttpClientModule,
        LoadingModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent],
})
export class AppModule {}
