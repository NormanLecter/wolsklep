import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-gwarancje',
  templateUrl: './lista-gwarancje.component.html',
  styleUrls: ['./lista-gwarancje.component.css']
})
export class ListaGwarancjeComponent implements OnInit {

  gwarancja: any; 

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/admin/lista/gwarancji/').subscribe(data => {
      this.gwarancja = data;
    });
  }

  // todo !!!
  zakonczGwarancje(id){

  }

}
