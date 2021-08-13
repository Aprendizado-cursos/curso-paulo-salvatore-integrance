import { Component } from '@angular/core';
import { EmpresasService } from './empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.sass'],
})
export class EmpresasComponent {
  constructor(public readonly service: EmpresasService) {
    console.log(service);
  }
}
