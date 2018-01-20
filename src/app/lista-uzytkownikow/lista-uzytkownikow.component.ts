import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lista-uzytkownikow',
  templateUrl: './lista-uzytkownikow.component.html',
  styleUrls: ['./lista-uzytkownikow.component.css']
})
export class ListaUzytkownikowComponent implements OnInit {

  klients : any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/admin/lista/klienci/').subscribe(data => {
      this.klients = data;
    });
  }

  usunKlienta(id) {
    this.http.delete('/admin/klient/usun/'+id).subscribe(res => {
        alert('Usuwanie Klienta o ID powiodło się. Zostaniesz przeniesiony na stronę główną');
          this.router.navigate(['/start']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
