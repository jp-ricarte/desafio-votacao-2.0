import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PautaTableComponent } from './pauta-table.component';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CriarPautaModalComponent } from '../criar-pauta-modal/criar-pauta-modal.component';

@NgModule({
    declarations: [
        PautaTableComponent,
    ],
    imports: [
        CommonModule,
        TableModule,
        TagModule,
        ButtonModule
    ],
    exports: [
        PautaTableComponent
    ],
})
export class PautaTableModule {}