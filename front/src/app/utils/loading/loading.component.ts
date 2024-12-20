import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoadingComponent implements OnInit {
    constructor(public loadingService: LoadingService) {}

    ngOnInit(): void {}
}
