import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { CreatePauta, Pauta } from '../models/pauta.model';
import { VotoResult } from '../models/voto.model';
import { MessageResponse } from '../models/response-message.model';

@Injectable()
export class PautaService extends HttpService {
    getPautas(): Observable<Pauta[]> {
        return this.get('pautas');
    }

    getPautaId(id: string): Observable<Pauta> {
        return this.get(`pautas/${id}`);
    }

    createPauta(data: CreatePauta): Observable<number> {
        return this.post('pautas', data);
    }

    vote(id: number, voto: boolean): Observable<MessageResponse> {
        return this.get(`pautas/${id}/voto/${voto}`);
    }

    pautaResult(id: number): Observable<VotoResult> {
        return this.get(`pautas/${id}/resultado`);
    }
}
