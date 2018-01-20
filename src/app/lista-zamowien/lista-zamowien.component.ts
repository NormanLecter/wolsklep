import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lista-zamowien',
  templateUrl: './lista-zamowien.component.html',
  styleUrls: ['./lista-zamowien.component.css']
})
export class ListaZamowienComponent implements OnInit {

  zamowienia : any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/admin/lista/zamowien/').subscribe(data => {
      console.log(data);
      this.zamowienia = data;
    });
    // todo: catch error
  }

}
