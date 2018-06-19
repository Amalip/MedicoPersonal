import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../common/configuration.class';
import { AppError } from '../common/errors/app-error.class';
import { BadRequestError } from '../common/errors/bad-request-error-class';
import { NotFoundError } from '../common/errors/not-found-error.class';
import { InternalServerError } from '../common/errors/internal-server-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Historial } from '../models/historial.models';

@Injectable()
export class HistorialService {

  serviceUrl: string;

  constructor(private http: Http) {
    
  }
  
  insertHistorial(historial : Historial) {
    this.serviceUrl = `${Configuration.historialURL}/ServicioFinal/api/v1/insertar`;

    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    this.http.post(this.serviceUrl, JSON.stringify(historial), { headers: headers })
      .catch(this.handleError);
  }

  getHistorial(id : number) : Observable<Historial[]> {
    this.serviceUrl = `${Configuration.historialURL}/ServicioFinal/api/v1/obtener`;

    return this.http.get(`${this.serviceUrl}/${id}`)
      .map((response: Response): Historial[] => response.json())
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    const originalError = error.json();

    switch (error.status) {
      case 400:
        return Observable.throw(new BadRequestError(originalError));
      case 404:
        return Observable.throw(new NotFoundError(originalError));
      case 500:
        return Observable.throw(new InternalServerError(originalError));
      default:
        return Observable.throw(new AppError(originalError));
    }
  }
}