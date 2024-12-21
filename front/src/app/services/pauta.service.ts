import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Pauta } from '../models/pauta.model';

@Injectable()
export class PautaService extends HttpService {
    getPautas(): Observable<Pauta[]> {
        return this.get('pautas');
    }
}
