import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Empresas = {
  id: number;
  razaoSocial: string;
};

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {
  public empresas: Empresas[] = [];
  constructor(private readonly httpClient: HttpClient) {
    this.loadEmpresas();
  }

  async loadEmpresas() {
    const urlApi = 'http://localhost:3000/empresas/';
    this.empresas = await this.httpClient.get<Empresas[]>(urlApi).toPromise();
  }
}
