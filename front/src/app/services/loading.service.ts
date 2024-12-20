import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private loading = new BehaviorSubject<boolean>(false);
    loading$ = this.loading.asObservable();

    start(): void {
        this.loading.next(true);
    }

    stop(): void {
        this.loading.next(false);
    }
}
