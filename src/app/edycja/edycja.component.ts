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
          this.router.navigate(['/start']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
