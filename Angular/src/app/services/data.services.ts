import { BadRequestError } from './../Compartilhado/Erros/bad-request-error';
import { AppError } from './../Compartilhado/Erros/app-error';
import { NotFoundError } from './../Compartilhado/Erros/not-found-error';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';

export class DataService {

  constructor(private httpClient: HttpClient) { 
  }

  getAll(url: any){
    return this.httpClient.get(url).pipe(map((response: any) => response)).pipe(
      catchError(this.handleError));
  }

  createPost(url: any, resource: any, httpOpt: any)
  {
    return this.httpClient.post(url, JSON.stringify(resource), httpOpt).pipe(
      catchError(this.handleError));
  }

  update(url: any, resource: any)
  {
    return this.httpClient.patch(url+'/'+resource.id, JSON.stringify({isRead: true})).pipe(
      catchError(this.handleError));
  }

  delete(url: any, id: any)
  {
    return this.httpClient.delete(url+'/'+id).pipe(
      catchError(this.handleError));
  }

  private handleError(error: Response){
    if(error.status == 404)
      return throwError(new NotFoundError(error.json)); 
    else if(error.status == 400)
      return throwError(new BadRequestError(error.json));
    else          
      return throwError(new AppError(error.json));
  }

}
