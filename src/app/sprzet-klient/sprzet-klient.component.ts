import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sprzet-klient',
  templateUrl: './sprzet-klient.component.html',
  styleUrls: ['./sprzet-klient.component.css']
})
export class SprzetKlientComponent implements OnInit {

  sprzet: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { 
  }

  ngOnInit() {
    this.http.get('/klient').subscribe(data => {
      this.sprzet = data;
    });
    // todo: catch error
  }

}
