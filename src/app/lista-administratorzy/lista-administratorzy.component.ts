import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-administratorzy',
  templateUrl: './lista-administratorzy.component.html',
  styleUrls: ['./lista-administratorzy.component.css']
})
export class ListaAdministratorzyComponent implements OnInit {

  admins : any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/admin/lista/administratorzy/').subscribe(data => {
      this.admins = data;
    });
  }

}
