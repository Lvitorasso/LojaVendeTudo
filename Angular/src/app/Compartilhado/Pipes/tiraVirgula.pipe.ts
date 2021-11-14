import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TiraVirgula'
})
export class TiraVirgulaPipe implements PipeTransform {

 transform(palavra: string){
    palavra = palavra.replace(",",".")

    return palavra;
}


}