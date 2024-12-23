import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoadingService } from '../../../../services/loading.service';
import { PautaService } from '../../../../services/pauta.service';
import { Categorias } from '../../../../models/categorias.model';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-criar-pauta-modal',
    templateUrl: './criar-pauta-modal.component.html',
    styleUrls: ['./criar-pauta-modal.component.scss'],
})
export class CriarPautaModalComponent implements OnInit {
    categorias: Categorias[] = [];
    form = this.fb.group({
        title: [null, Validators.required],
        categoria_id: [null, Validators.required],
        description: [null],
        voting_end: [null],
    });
    constructor(
        private ref: DynamicDialogRef,
        private fb: FormBuilder,
        private pauta: PautaService,
        private loading: LoadingService
    ) {}

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories(): void {
        this.loading.start();
        this.pauta
            .getCategories()
            .pipe(finalize(() => this.loading.stop()))
            .subscribe((categorias) => {
                this.categorias = categorias;
            });
    }

    onSubmit(): void {
        this.loading.start();
        this.pauta
            .createPauta(this.form.getRawValue())
            .pipe(finalize(() => this.loading.stop()))
            .subscribe((idPauta) => {
                this.ref.close(idPauta);
            });
    }
}
