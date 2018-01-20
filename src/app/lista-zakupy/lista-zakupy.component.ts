import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-zakupy',
  templateUrl: './lista-zakupy.component.html',
  styleUrls: ['./lista-zakupy.component.css']
})
export class ListaZakupyComponent implements OnInit {

  wysylka: any; 

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/admin/lista/wysylek/').subscribe(data => {
      this.wysylka = data;
    });
  }

}
