import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edycja',
  templateUrl: './edycja.component.html',
  styleUrls: ['./edycja.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EdycjaComponent implements OnInit {

  sprzet = {}; 
  checkError:boolean = false;
  dataAdd:boolean = false;
  message:string = "";

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getSprzetEdycja(this.route.snapshot.params['id']);
  }

  getSprzetEdycja(id) {
    this.http.get('/edycja/'+id).subscribe(data => {
      this.sprzet = data;
    });
  } 

  updateSprzet(id, data) {
    this.http.put('/edycja/'+id, this.sprzet).subscribe(res => {
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
        this.message = 'Rekord został zedytowany - wróć do strony głównej lub edytuj dalej';
      }
    });
  }

  updateSprzetProcedura(id, data) {
    this.http.put('/edycja/1/'+id, this.sprzet).subscribe(res => {
      console.log(res);
      if(typeof(res) === 'number'){
        this.dataAdd = false;
        this.checkError = true;
        switch(res){
          case 3609: {
            this.message = 'Jeżeli wpisałeś PN to w Uwagach napisz dlaczego!';
            break;
          }
          case 50000: {
            this.message = 'Dla laptopa musisz podać nazwę modelu!';
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
        this.message = 'Rekord został zedytowany procedurą - wróć do strony głównej lub edytuj dalej';
      }
    });
  }

}
