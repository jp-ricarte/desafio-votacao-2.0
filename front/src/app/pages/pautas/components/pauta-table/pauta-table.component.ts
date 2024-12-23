import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Login } from '../../../../models/login.model';
import { Pauta } from '../../../../models/pauta.model';
import { AuthService } from '../../../../services/auth.service';
import { CriarPautaModalComponent } from '../criar-pauta-modal/criar-pauta-modal.component';
import { Observable } from 'rxjs';
import { Categorias } from '../../../../models/categorias.model';

@Component({
    selector: 'app-pauta-table',
    templateUrl: './pauta-table.component.html',
    styleUrls: ['./pauta-table.component.scss'],
})
export class PautaTableComponent {
    pautasOriginal: Pauta[] = [];
    filteredPautas: Pauta[] = [];

    @Input() set pautas(value: Pauta[]) {
        this.pautasOriginal = value;
        this.filteredPautas = value;
    }

    @Input() categorias: Categorias[] = [];

    get user(): Login {
        return this.auth.user;
    }

    constructor(private auth: AuthService, private router: Router, private dialog: DialogService) {}

    openPauta(id: number): void {
        this.router.navigate(['/pautas', id]);
    }

    createPauta(): void {
        this.openModalCreatePauta().subscribe((pauta) => {
            if (pauta) {
                this.openPauta(pauta);
            }
        });
    }

    onSelectChange(event: Event): void {
        const target = event.target as HTMLSelectElement;
        const value = target.value;
        if (value) {
            this.filteredPautas = this.pautasOriginal.filter(pauta => pauta.categoria_id === +value);
        }
        else {
            this.filteredPautas = this.pautasOriginal;
        }
    }

    private openModalCreatePauta(): Observable<number> {
        return this.dialog.open(CriarPautaModalComponent, {
            header: 'Nova Pauta',
            width: '60%',
        }).onClose;
    }
}
