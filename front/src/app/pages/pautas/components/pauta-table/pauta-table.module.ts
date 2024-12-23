import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PautaTableComponent } from './pauta-table.component';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
    declarations: [
        PautaTableComponent,
    ],
    imports: [
        CommonModule,
        UtilsModule
    ],
    exports: [
        PautaTableComponent
    ],
})
export class PautaTableModule {}