import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sprzet-goscie',
  templateUrl: './sprzet-goscie.component.html',
  styleUrls: ['./sprzet-goscie.component.css']
})
export class SprzetGoscieComponent implements OnInit {
 
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
