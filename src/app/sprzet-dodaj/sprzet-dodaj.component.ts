import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sprzet-dodaj',
  templateUrl: './sprzet-dodaj.component.html',
  styleUrls: ['./sprzet-dodaj.component.css']
})
export class SprzetDodajComponent implements OnInit {

  sprzet = {};
  checkError:boolean = false;
  dataAdd:boolean = false;
  message:string = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  // todo: other way to do this with procedure
  saveSprzetProcedura() {
    this.http.post('/dodaj/1', this.sprzet).subscribe((res) => {
      console.log(res);
      if(typeof(res) === 'number'){
        this.dataAdd = false;
        this.checkError = true;
        switch(res){
          case 8114: {
            this.message = 'ID musi być typu Integer i niepuste!';
            break;
          }
          case 2627: {
            this.message = 'Podane ID już istnieje w bazie danych!';
            break;
          }
          case 50000: {
            this.message = 'Nazwa Marki musi być dłuższa niż 1 znak!';
            break;
          }
          case 547: {
            this.message = 'Nazwa Marki nie może być pusta!';
            break;
          } 
          case 3609: {
            this.message = 'Trigger SQL - Marka musi się zaczynać od litery!';
            break;
          }
          default: {
            this.message = 'Nieznany błąd bazy danych - spróbuj dodać rekord ponownie.'
            break;
          }
        }
      }
      else if(typeof(res) === 'object'){
        this.checkError = false;
        this.dataAdd = true;
        this.message = 'Rekord został dodany poprawnie procedurą - wróć do strony głównej lub dodaj kolejny rekord';
      }
    });
  }

  saveSprzet() {
    this.http.post('/dodaj', this.sprzet).subscribe((res) => {
      console.log(res);
      if(typeof(res) === 'number'){
        this.dataAdd = false;
        this.checkError = true;
        switch(res){
          case 245: {
            this.message = 'ID musi być typu Integer!';
            break;
          }
          case 2627: {
            this.message = 'Podane ID już istnieje w bazie danych!';
            break;
          }
          case 334: {
            this.message = 'Blad 334 - aktywne triggery, dodaj procedura!';
            break;
          }
          default: {
            this.message = 'Nieznany błąd bazy danych - spróbuj dodać rekord ponownie.'
            break;
          }
        }
      }
      else if(typeof(res) === 'string'){
        this.dataAdd = false;
        this.checkError = true;
        if(res == 'Marka'){
          this.message = 'Marka nie może być pusta i musi się zaczynać z dużej liter lub cyfry.'
        }
      }
      else if(typeof(res) === 'object'){
        this.checkError = false;
        this.dataAdd = true;
        this.message = 'Rekord został dodany poprawnie - wróć do strony głównej lub dodaj kolejny rekord';
      }
    });
  }
}
