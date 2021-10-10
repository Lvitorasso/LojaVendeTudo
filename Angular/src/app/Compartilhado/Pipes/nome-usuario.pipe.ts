import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomeUsuario'
})
export class NomeUsuarioPipe implements PipeTransform {

 transform(nome: string){
    let novoNome = nome;
    let index = (novoNome as string).indexOf("@");

    if(index != null && index != undefined && index > 0)    
        novoNome = (novoNome as string).substring(0,index)

    return novoNome;
}


}