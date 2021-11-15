import { Injectable } from '@angular/core';
import { localStorageService } from '../localStorageService';

@Injectable()
export class CarrinhoService {

  constructor(private localdb: localStorageService) {
  }

}