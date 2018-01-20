import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sposob-kupowania-wybor',
  templateUrl: './sposob-kupowania-wybor.component.html',
  styleUrls: ['./sposob-kupowania-wybor.component.css']
})
export class SposobKupowaniaWyborComponent implements OnInit {

  dane : any  = {Login : '', Haslo : ''};
  idSprzetu : number;
  loginOk : boolean = false;
  wysylka = {Imie : '', Nazwisko : '', Miasto : '',  Ulica :  '', NrDomu  :  '', NrMieszkania : '', KodPocztowy : '', NumerKontaktowy : ''};
  klient : any = {};
  checkError:boolean = false;
  dataAdd:boolean = false;
  zatwierdzenie:boolean = true;
  message:string = "";
  id:number;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.idSprzetu = this.route.snapshot.params['id'];
  }

  zaloguj(){
    this.http.post('/admin/zaloguj/klient/', this.dane).subscribe(res => {
      console.log(res);
      if(typeof(res) === 'number'){
        switch(res){
          // todo: errors and service!
          case 404:{
            alert('Podałeś zły login lub/i hasło. Spróbuj ponownie lub wróć do strony startowej.')
            break;
          }
          default: {
              alert('Wystąpił nieoczekiwany problem - spróbuj ponownie.')
            break;
          }
        }
      }
      else if(typeof(res)=='object'){
          this.klient = res;
          this.wysylka.Imie =  this.klient.Imie;
          this.wysylka.Nazwisko = this.klient.Nazwisko;
          this.wysylka.NumerKontaktowy = this.klient.NumerKontaktowy;
          alert('Logowanie powiodło się. Kliknij OK by pojawił się  formularz z danymi uzupełnionym z Twojego konta');
          this.loginOk = true;
      }
    });
  }

  potwierdzWysylke(){
    this.http.post('/dodaj/wysylka/'+this.idSprzetu, this.wysylka).subscribe((res) => {
      console.log(res);
      if(typeof(res) === 'number'){
        this.dataAdd = false;
        this.checkError = true;
        switch(res){
          case 334:{
            this.message = 'Blad 334 -  aktywne triggery, dodaj procedura!';
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
      }
      else if(typeof(res) === 'object'){
        this.checkError = false;
        this.dataAdd = true;
        this.zatwierdzenie = false;
        this.message = 'Zakup został potwierdzony, dane do wysyłki zapisane. Wróć do strony głównej';
      }
    });
  }

  potwierdzWysylkeProcedura(){
    console.log(this.wysylka);
    this.http.post('/dodaj/wysylka/procedura/'+this.idSprzetu, this.wysylka).subscribe((res) => {
      console.log(res);
      if(typeof(res) === 'number'){
        this.dataAdd = false;
        this.checkError = true;
        switch(res){
          case 334:{
            this.message = 'Blad 334 -  aktywne triggery, dodaj procedura!';
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
        this.loginOk = true;
      }
      else if(typeof(res) === 'object'){
        this.checkError = false;
        this.dataAdd = true;
        this.zatwierdzenie = false;
        this.loginOk = true;
        this.message = 'Zakup został potwierdzony, dane do wysyłki zapisane. Wróć do strony głównej';
      }
    });
  }

}
