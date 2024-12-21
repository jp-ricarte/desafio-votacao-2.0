import { Component, Input, OnInit } from '@angular/core';
import { Pauta } from 'src/app/models/pauta.model';

@Component({
  selector: 'app-pauta-table',
  templateUrl: './pauta-table.component.html',
  styleUrls: ['./pauta-table.component.scss']
})
export class PautaTableComponent implements OnInit {
  @Input() pautas: Pauta[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
