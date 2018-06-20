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
import { Taxi } from '../models/taxi.models';

@Injectable()
export class TaxiService {
  
  serviceUrl: string;

  constructor(private http: Http) {
    this.serviceUrl = `${Configuration.taxilURL}ConsumoAPI/servicio`;
  }
  
  solicitarTaxi (taxiData : Taxi) {
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    this.http.post(this.serviceUrl, JSON.stringify(taxiData), { headers: headers })
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