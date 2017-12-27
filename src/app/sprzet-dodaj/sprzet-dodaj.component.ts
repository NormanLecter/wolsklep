import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sprzet-dodaj',
  templateUrl: './sprzet-dodaj.component.html',
  styleUrls: ['./sprzet-dodaj.component.css']
})
export class SprzetDodajComponent implements OnInit {

  sprzet = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveSprzet() {
    this.http.post('/dodaj', this.sprzet).subscribe(res => {
          this.router.navigate(['/start']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
