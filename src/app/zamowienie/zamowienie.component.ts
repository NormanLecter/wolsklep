import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zamowienie',
  templateUrl: './zamowienie.component.html',
  styleUrls: ['./zamowienie.component.css']
})
export class ZamowienieComponent implements OnInit { 

  zamowienie = {Marka : '', Model : '', Typ : '', PN : '', SN : '', Uwagi :  '',  NumerKontaktowy :  '', AdresEmail : ''};
  checkError:boolean = false;
  dataAdd:boolean = false;
  message:string = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

 // todo: other way to do this with procedure
 zamowProcedura() {
  this.http.post('/dodaj/nowe/zamowienie/procedura', this.zamowienie).subscribe((res) => {
    console.log(res);
    if(typeof(res) === 'number'){
      this.dataAdd = false;
      this.checkError = true;
      switch(res){
        case 3609: {
          this.message = 'Trigger SQL - Identyczne zamówienie już istnieje!';
          break;
        }
        case 50000: {
          this.message = 'Typ, Numer telefonu i adres e-mail nie mogą być puste!';
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
      this.message = 'Zamówienie procedurą zostało złożone poprawnie - wróć do ofert kupna lub złóż kolejne zamówienie';
    }
  });
}

zamow() {
  this.http.post('/dodaj/nowe/zamowienie', this.zamowienie).subscribe((res) => {
    console.log(res);
    if(typeof(res) === 'number'){
      this.dataAdd = false;
      this.checkError = true;
      switch(res){
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
      if(res == 'Typ'){
        this.message = 'Musisz podać typ zamawianego sprzętu.';
      }
      if(res == 'NumerKontaktowy'){
        this.message = 'Musisz podać numer kontaktowy w celu weryfikacji / finalizacji zamówienia.';
      }
      if(res == 'AdresEmail'){
        this.message = 'Musisz podać adres email w celu weryfikacji / finalizacji zamówienia.';
      }
    }
    else if(typeof(res) === 'object'){
      this.checkError = false;
      this.dataAdd = true;
      this.message = 'Zamówienie zostało złożone poprawnie - wróć do ofert kupna lub złóż kolejne zamówienie';
    }
  });
}
}
