import { Injectable } from '@angular/core';

@Injectable()
export class localStorageService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } 
    catch (e) {
      console.error('Erro ao salvar no localStorage', e);
    }
  }

  get(key: string) 
  {
    try 
    {
      if(!localStorage.getItem(key))
        return null

      return JSON.parse(localStorage.getItem(key) || '{}');
    } 
    catch (e) {
      console.error('Erro ao pegar do localStorage', e);
      return null;
    }
  }

  remove(key: string){
    try {
      return localStorage.removeItem(key);
    } 
    catch (e) {
      console.error('Erro ao remover do localStorage', e);
      return null;
    }
  }

  getAll() 
  {
    try 
    {
      let item: any[] = [];

      Object.keys(localStorage).forEach(data => 
        {
          if(data.includes('produto'))
          {
             item.push(localStorage.getItem(data));
          }
        });
        
        if(item === [] || !item)
          return null;

        return item;
    } 
    catch (e) {
      console.error('Erro ao pegar do localStorage', e);
      return null;
    }
  }
}