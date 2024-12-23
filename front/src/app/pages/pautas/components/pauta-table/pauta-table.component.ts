import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Login } from 'src/app/models/login.model';
import { Pauta } from 'src/app/models/pauta.model';
import { AuthService } from 'src/app/services/auth.service';
import { CriarPautaModalComponent } from '../criar-pauta-modal/criar-pauta-modal.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pauta-table',
    templateUrl: './pauta-table.component.html',
    styleUrls: ['./pauta-table.component.scss'],
})
export class PautaTableComponent implements OnInit {
    @Input() pautas: Pauta[] = [];

    get user(): Login {
        return this.auth.user;
    }

    constructor(private auth: AuthService, private router: Router, private dialog: DialogService) {}

    ngOnInit(): void {

    }

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

    private openModalCreatePauta(): Observable<number> {
        return this.dialog.open(CriarPautaModalComponent, {
            header: 'Nova Pauta',
            width: '60%',
        }).onClose;
    }
}
