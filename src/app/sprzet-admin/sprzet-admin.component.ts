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
          // todo : why reload doesn't work
          this.router.navigate(['/start']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  deleteSprzetProcedura(id) {
    this.http.delete('/edycja/1/'+id).subscribe(res => {
      // todo : why reload doesn't work
      console.log(res);
      if(typeof(res) === 'number'){
        switch(res){
          // todo: check if that work..
          case 50000: {
            alert('Nie możesz usunąć sprzętu marki ASUS.');
            break;
          }
         // todo: errors and service!
          default: {
            alert('Nieznany błąd bazy danych - spróbuj dodać rekord ponownie.');
            break;
          }
        }
      }
      else if(typeof(res) === 'object'){
        this.router.navigate(['/start']);
      }
        }, (err) => {
          console.log(err);
        }
      );
  }
}
