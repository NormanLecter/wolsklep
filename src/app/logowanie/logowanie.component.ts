import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})

export class LogowanieComponent implements OnInit {

  dane : any  = {Login : '', Haslo : ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  zaloguj(){
    this.http.post('/admin/zaloguj/admin/', this.dane).subscribe(res => {
      console.log(res);
      if(typeof(res) === 'number'){
        switch(res){
          // todo: errors and service!
          case 200:{
            alert('Logowanie powiodło się. Kliknij OK by przejść do panelu administratora')
            this.router.navigate(['/admin']);
            break;
          }
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
    });
  }
}
