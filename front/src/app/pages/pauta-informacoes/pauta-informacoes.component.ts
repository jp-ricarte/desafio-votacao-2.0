import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { Pauta } from 'src/app/models/pauta.model';
import { LoadingService } from 'src/app/services/loading.service';
import { PautaService } from 'src/app/services/pauta.service';
import { ToastrService } from 'ngx-toastr';
import { VotoResult } from 'src/app/models/voto.model';
import { MessageResponse } from 'src/app/models/response-message.model';

@Component({
    templateUrl: './pauta-informacoes.component.html',
    styleUrls: ['./pauta-informacoes.component.scss'],
})
export class PautaInformacoesComponent implements OnInit {
    pauta: Pauta;
    results: VotoResult;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pautaService: PautaService,
        private confirmationService: ConfirmationService,
        private loading: LoadingService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.getPauta(params.id);
            }
        });
    }

    getPauta(id: string): void {
        this.loading.start();
        this.pautaService
            .getPautaId(id)
            .pipe(finalize(() => this.loading.stop()))
            .subscribe((pauta) => {
                if (pauta?.id) {
                    this.pauta = pauta;
                    this.pautaResult();
                }
                else {
                    this.toastr.warning('Pauta não encontrada');
                    this.router.navigate(['/pautas']);
                }
            });
    }

    vote(voto: boolean): void {
        this.confirmVote(voto, () => {
            this.loading.start();
            this.pautaService
                .vote(this.pauta.id, voto)
                .pipe(finalize(() => this.loading.stop()))
                .subscribe((message: MessageResponse) => {
                    this.toastr.success(message.message);
                    this.pautaResult();
                });
        });
    }

    pautaResult(): void {
        this.loading.start();
        this.pautaService
            .pautaResult(this.pauta.id)
            .pipe(finalize(() => this.loading.stop()))
            .subscribe((results) => {
                this.results = results;
            });
    }

    private confirmVote(voto: boolean, onAccept: () => void): void {
        this.confirmationService.confirm({
            message: `Você tem certeza que deseja confirmar o voto ${
                voto ? 'SIM' : 'NÃO'
            }?`,
            header: 'Confirmação',
            acceptLabel: 'Confirmar',
            rejectLabel: 'Cancelar',
            rejectButtonStyleClass: 'p-button-secondary',
            accept: onAccept,
        });
    }
}
