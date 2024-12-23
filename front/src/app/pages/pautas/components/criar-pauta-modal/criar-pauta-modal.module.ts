import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarPautaModalComponent } from './criar-pauta-modal.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { LoadingModule } from 'src/app/utils/loading/loading.module';

@NgModule({
    declarations: [CriarPautaModalComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonModule,
        TooltipModule,
        LoadingModule

    ],
    exports: [CriarPautaModalComponent]
})
export class CriarPautaModalModule {}