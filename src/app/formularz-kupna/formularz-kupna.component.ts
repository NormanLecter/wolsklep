import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formularz-kupna',
  templateUrl: './formularz-kupna.component.html',
  styleUrls: ['./formularz-kupna.component.css']
})
export class FormularzKupnaComponent implements OnInit {

  wysylka = {};
  checkError:boolean = false;
  dataAdd:boolean = false;
  zatwierdzenie:boolean = true;
  message:string = "";
  id:number;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.id =this.route.snapshot.params['id'];
  }

  potwierdzWysylke(){
    this.http.post('/dodaj/wysylka/'+this.id, this.wysylka).subscribe((res) => {
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
    this.http.post('/dodaj/wysylka/procedura/'+this.id, this.wysylka).subscribe((res) => {
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

}
