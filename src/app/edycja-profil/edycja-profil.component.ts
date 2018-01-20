import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edycja-profil',
  templateUrl: './edycja-profil.component.html',
  styleUrls: ['./edycja-profil.component.css']
})
export class EdycjaProfilComponent implements OnInit {

  dane : any  = {Login : '', Haslo : ''};
  logowanie : any = {};
  loginOk : boolean = false;
  checkError:boolean = false;
  dataAdd:boolean = false;
  message:string = "";
  daneEdycja : any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
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
          this.logowanie = res;
          console.log(this.logowanie);
          alert('Logowanie powiodło się. Kliknij OK by pojawił się  formularz z danymi uzupełnionym z Twojego konta');
          this.loginOk = true;
      }
    });
  }

  edytujKonto(){
    this.http.put('/admin/klient/edytuj/'+this.logowanie._id, this.logowanie).subscribe((res) => {
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
        this.message = 'Zmiany zostały zapisane. Edytuj więcej lub wróć do strony głownej';
      }
    });
  }

}
