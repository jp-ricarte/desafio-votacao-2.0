import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PautasComponent } from './pages/pautas/pautas.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

import { LayoutComponent } from './pages/layout/layout.component';
import { PautaTableModule } from './pages/pautas/components/pauta-table/pauta-table.module';
import { PautaService } from './services/pauta.service';
import { ToastrModule } from 'ngx-toastr';
import { PautaInformacoesComponent } from './pages/pauta-informacoes/pauta-informacoes.component';
import { CriarPautaModalModule } from './pages/pautas/components/criar-pauta-modal/criar-pauta-modal.module';
import { CountdownGlobalConfig, } from 'ngx-countdown';
import { UtilsModule } from './utils/utils.module';
import { NgxMaskModule } from 'ngx-mask';
import { UserService } from './services/user.service';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

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

        UtilsModule,
        NgxMaskModule.forRoot(),
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
        UserService,
        DialogService,
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        {
            provide: CountdownGlobalConfig,
            useFactory: () => ({ format: `d/M/yy HH:mm:ss` }),
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
