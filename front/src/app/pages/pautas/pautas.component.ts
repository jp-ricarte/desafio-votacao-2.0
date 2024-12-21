import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Pauta } from 'src/app/models/pauta.model';
import { LoadingService } from 'src/app/services/loading.service';
import { PautaService } from 'src/app/services/pauta.service';

@Component({
    templateUrl: './pautas.component.html',
    styleUrls: ['./pautas.component.scss'],
})
export class PautasComponent implements OnInit {
    pautas: Pauta[] = [];

    constructor(private pauta: PautaService, private loading: LoadingService) {}

    ngOnInit(): void {
        this.getPautas();
    }

    getPautas(): void {
        this.loading.start();
        this.pauta
            .getPautas()
            .pipe(finalize(() => this.loading.stop()))
            .subscribe((response) => {
                this.pautas = response;
            });
    }
}
