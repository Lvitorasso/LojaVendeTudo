import { ValidationErrors, AbstractControl } from "@angular/forms";

export class UsuarioValidators 
{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null 
    {
        if ((control.value as string).indexOf(' ') >= 0)
            return {cannotContainSpace: true};
        else
            return null;
    }

    static deveSerUnico(control: AbstractControl) : Promise<ValidationErrors | null>
    {
        return new Promise((resolve, reject) =>{
                setTimeout(() => {
                    if(control.value == 'lucas')
                        resolve({deveSerUnico: true});
                    else
                        resolve(null);
            }, 2000);
        });
    }
}