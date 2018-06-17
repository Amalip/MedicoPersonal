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
import { poliza } from '../models/poliza.models';

@Injectable()
export class PolizaService {

  serviceUrl: string;

  constructor(private module, private http: Http) {
    this.serviceUrl = `${Configuration.polizaURL}/api/v1/getPolizaById`;
  }
  
  getPolizaData(id: number) : Observable<poliza> {
    return this.http.get(`${this.serviceUrl}/${id}`)
      .map((response: Response): poliza => response.json())
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