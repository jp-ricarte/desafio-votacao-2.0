import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { LayoutComponent } from './pages/layout/layout.component';
import { PautaTableModule } from './pages/pautas/components/pauta-table/pauta-table.module';
import { PautaService } from './services/pauta.service';

@NgModule({
    declarations: [AppComponent, LoginComponent, PautasComponent, LayoutComponent],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PautaTableModule,

        ToastModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        ToolbarModule,

        ReactiveFormsModule,
        HttpClientModule,
        LoadingModule
    ],
    providers: [MessageService, PautaService],
    bootstrap: [AppComponent],
})
export class AppModule {}
