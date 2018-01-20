import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-szczegoly-sprzet',
  templateUrl: './szczegoly-sprzet.component.html',
  styleUrls: ['./szczegoly-sprzet.component.css']
})
export class SzczegolySprzetComponent implements OnInit {

  sprzet = {}; 

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getSprzetEdycja(this.route.snapshot.params['id']);
  }

  getSprzetEdycja(id) {
    this.http.get('/edycja/szczegoly/'+id).subscribe(data => {
      this.sprzet = data;
    });
  } 

}
