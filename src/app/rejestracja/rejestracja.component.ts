import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.css']
})
export class RejestracjaComponent implements OnInit {

  uzytkownik : any = {};
  checkError:boolean = false;
  dataAdd:boolean = false;
  message:string = "";

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  zarejestrujAdmin(){
    this.http.post('/admin/zarejestruj/admin/', this.uzytkownik).subscribe(res => {
      console.log(res);
      if(typeof(res) === 'number'){
        this.dataAdd = false;
        this.checkError = true;
        switch(res){
          case 334: {
            this.message = 'Blad 334 -  aktywne triggery, dodaj procedura!';
            break;
          }
          // todo: errors and service!
          default: {
            this.message = 'Nieznany błąd bazy danych - spróbuj dodać rekord ponownie.'
            break;
          }
        }
      }
      else if(typeof(res) === 'object'){
        this.checkError = false;
        this.dataAdd = true;
        this.message = 'Admin został zarejestrowany - wróć do strony głównej lub zarejestruj kolejne konto';
      }
    });
  }

  zarejestrujKlient(){
    this.http.post('/admin/zarejestruj/klient/', this.uzytkownik).subscribe(res => {
      console.log(res);
      if(typeof(res) === 'number'){
        this.dataAdd = false;
        this.checkError = true;
        switch(res){
          case 334: {
            this.message = 'Blad 334 -  aktywne triggery, dodaj procedura!';
            break;
          }
          // todo: errors and service!
          default: {
            this.message = 'Nieznany błąd bazy danych - spróbuj dodać rekord ponownie.'
            break;
          }
        }
      }
      else if(typeof(res) === 'object'){
        this.checkError = false;
        this.dataAdd = true;
        this.message = 'Klient został zarejestrowany - wróć do strony głównej lub rejestruj kolejne konto';
      }
    });
  }

}
