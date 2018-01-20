import { Injectable } from '@angular/core';
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ErrorServiceService {

  private errors: Observable<Array<number>>;

  constructor() { }

  addToErrors(errorNumber){
    this.errors = new Observable(observe => {
      observe.next(errorNumber);
    })
  }

}
