import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from './loading/loading.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        ToolbarModule,
        ConfirmDialogModule,
        DynamicDialogModule,
        MessageModule,
        TableModule,
        DropdownModule,
        TagModule,
        ToastModule,
        TooltipModule,
        ConfirmDialogModule,
        DynamicDialogModule,

        ReactiveFormsModule,
        HttpClientModule,
        LoadingModule,
        CountdownModule
    ],
    exports: [
        ButtonModule,
        InputTextModule,
        PasswordModule,
        ToolbarModule,
        ConfirmDialogModule,
        DynamicDialogModule,
        MessageModule,
        TableModule,
        DropdownModule,
        TagModule,
        ToastModule,
        TooltipModule,
        ConfirmDialogModule,
        DynamicDialogModule,

        ReactiveFormsModule,
        HttpClientModule,
        LoadingModule,
        CountdownModule
    ],
})
export class UtilsModule {}
