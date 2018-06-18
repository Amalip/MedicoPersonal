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
import { hospitales } from '../models/hospital.models';

@Injectable()
export class HospitalService {

  serviceUrl: string;

  constructor(private http: Http) {
    this.serviceUrl = `${Configuration.hospitalesURL}/api/v1/getHospitales`;
  }
  
  getHospitales() : Observable<hospitales[]> {
    return this.http.get(this.serviceUrl)
      .map((response: Response): hospitales[] => response.json())
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