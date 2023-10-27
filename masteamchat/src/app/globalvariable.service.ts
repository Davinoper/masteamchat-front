import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService {
  minhaVariavelGlobal: any;

  constructor() { }

  setMinhaVariavelGlobal(valor: any) {
    this.minhaVariavelGlobal = valor;
  }

  getMinhaVariavelGlobal() {
    return this.minhaVariavelGlobal;
  }
}