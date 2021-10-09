import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error: any){
        alert('Um erro aconteceu');
        console.log(error)
    }

}