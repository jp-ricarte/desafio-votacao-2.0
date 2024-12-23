import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPautaModalComponent } from './criar-pauta-modal.component';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
    declarations: [CriarPautaModalComponent],
    imports: [
        CommonModule,
        UtilsModule
    ],
    exports: [CriarPautaModalComponent]
})
export class CriarPautaModalModule {}