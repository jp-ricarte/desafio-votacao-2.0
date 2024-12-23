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
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageModule } from 'primeng/message';

import { LayoutComponent } from './pages/layout/layout.component';
import { PautaTableModule } from './pages/pautas/components/pauta-table/pauta-table.module';
import { PautaService } from './services/pauta.service';
import { ToastrModule } from 'ngx-toastr';
import { PautaInformacoesComponent } from './pages/pauta-informacoes/pauta-informacoes.component';
import { CriarPautaModalModule } from './pages/pautas/components/criar-pauta-modal/criar-pauta-modal.module';
import { CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PautasComponent,
        LayoutComponent,
        PautaInformacoesComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PautaTableModule,
        CriarPautaModalModule,

        ButtonModule,
        InputTextModule,
        PasswordModule,
        ToolbarModule,
        ConfirmDialogModule,
        DynamicDialogModule,
        MessageModule,

        ReactiveFormsModule,
        HttpClientModule,
        LoadingModule,

        CountdownModule,

        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
    ],
    providers: [
        ConfirmationService,
        MessageService,
        PautaService,
        DialogService,
        {
            provide: CountdownGlobalConfig,
            useFactory: () => ({ format: `d/M/yy HH:mm:ss` }),
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
