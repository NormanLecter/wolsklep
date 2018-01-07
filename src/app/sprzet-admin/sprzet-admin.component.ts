import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sprzet-admin',
  templateUrl: './sprzet-admin.component.html',
  styleUrls: ['./sprzet-admin.component.css']
})
export class SprzetAdminComponent implements OnInit {

  sprzet: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/admin').subscribe(data => {
      this.sprzet = data;
    });
  }

  deleteSprzet(id) {
    this.http.delete('/edycja/'+id).subscribe(res => {
          // todo : why reload doesn't work
          this.router.navigate(['/start']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
