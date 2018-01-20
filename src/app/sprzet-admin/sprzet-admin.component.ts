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
    // todo: catch error
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

  // todo: other way  to do this
  testOk(id) {
    this.http.delete('/edycja/2/'+id).subscribe(res => {
      console.log(res);
      if(typeof(res) === 'object'){
        alert('Wystawianie przedmiotu na sprzedaż o ID ' + id + " powiodło się");
      }
      if(typeof(res) === 'number'){
        switch(res){
          case 334: {
            alert('Blad 334 -  aktywne triggery, dodaj procedura!');
            break;
          }
          case 50000: {
            alert('Sprzet o ID : ' + id + ' jest już wystawiony na sprzedaż!');
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
    })
  }

  // todo: other way to to this
  testOkProcedura(id) {
    this.http.delete('/edycja/22/'+id).subscribe(res => {
    console.log(res);
    if(typeof(res) === 'object'){
      alert('Wystawianie przedmiotu na sprzedaż o ID ' + id + " procedurą powiodło się");
    }
    if(typeof(res) === 'number'){
      switch(res){
        case 334: {
          alert('Blad 334 -  aktywne triggery, dodaj procedura!');
          break;
        }
        case 50000: {
          alert('Sprzet o ID : ' + id + ' jest już wystawiony na sprzedaż!');
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
  })
}

raportMarki(){
  this.http.post('/admin/marki/', this.sprzet).subscribe((res) => {
    console.log(res);
    if(typeof(res) === 'number'){
          alert('Raport nie został wygenerowany. Spróbuj ponownie.');
        }
    else if(typeof(res) === 'object'){
      alert('Raport został wygenerowany poprawnie - wynik w pliku raportMarki.txt');
    }
  });
}

raportTypy(){
  this.http.post('/admin/typy/', this.sprzet).subscribe((res) => {
    console.log(res);
    if(typeof(res) === 'number'){
          alert('Raport nie został wygenerowany. Spróbuj ponownie.');
        }
    else if(typeof(res) === 'object'){
      alert('Raport został wygenerowany poprawnie - wynik w pliku raportTypy.txt');
    }
  });
}

}
