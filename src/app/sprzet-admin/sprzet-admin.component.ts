import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sprzet-admin',
  templateUrl: './sprzet-admin.component.html',
  styleUrls: ['./sprzet-admin.component.css']
})
export class SprzetAdminComponent implements OnInit {
 
  sprzet: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/admin').subscribe(data => {
      this.sprzet = data;
    });
  }

  deleteSprzet(id) {
    this.http.delete('/edycja/'+id).subscribe(res => {
        alert('Usuwanie rekordu o ID ' + id + " powiodło się. Zostaniesz przeniesiony na stronę główną");
          this.router.navigate(['/start']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  deleteSprzetProcedura(id) {
    this.http.delete('/edycja/1/'+id).subscribe(res => {
      console.log(res);
      if(typeof(res) === 'object'){
        alert('Usuwanie rekordu prcocedurą o ID ' + id + " powiodło się. Zostaniesz przeniesiony na stronę główną");
        this.router.navigate(['/start']);
      }
      if(typeof(res) === 'number'){
        switch(res){
          case 50000: {
            alert('W bazie danych nie istnieje rekord z ID : ' + id);
            break;
          }
          default: {
            alert('Nieznany błąd bazy danych - spróbuj dodać rekord ponownie.');
            break;
          }
        }
      }
    }, (err) => {
      console.log(err);
    }
  );
  }
  
} 
