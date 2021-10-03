import { ValidationErrors, AbstractControl } from "@angular/forms";

export class PasswordValidators 
{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null 
    {
        if ((control.value as string).indexOf(' ') >= 0)
            return {cannotContainSpace: true};
        else
            return null;
    }

    static senhaAntigaValida(control: AbstractControl) 
    {
        return new Promise((resolve, reject) => {               
            if(control.value == 'abc')
                resolve({senhaAntigaValida: true});
            
                resolve(false);            
        });
    }

    static deveSerIgual(control: AbstractControl) 
    {
        return new Promise((resolve, reject) =>{
            if(control.get('senhaNova')?.value == '' || control.get('senhaNovaConfirmacao')?.value == '')
                resolve(false);
            else if(control.get('senhaNova')?.value != control.get('senhaNovaConfirmacao')?.value)
                resolve({deveSerIgual: true});
            
                resolve(false);
        });
    }
}