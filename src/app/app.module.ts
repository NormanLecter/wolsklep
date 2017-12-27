import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { SprzetAdminComponent } from './sprzet-admin/sprzet-admin.component';
import { EdycjaComponent } from './edycja/edycja.component';
import { SprzetDodajComponent } from './sprzet-dodaj/sprzet-dodaj.component';

const appRoutes: Routes = [
  {
    path: 'start',
    component: StartComponent,
    data: { title: 'Start' }
  },
  { path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: SprzetAdminComponent,
    data: { title: 'Sprzet - wykaz : Admin' }
  },
  {
    path: 'edycja/:id',
    component: EdycjaComponent,
    data: { title: 'Edycja' }
  },
  {
    path: 'dodaj',
    component: SprzetDodajComponent,
    data: { title: 'Dodaj sprzęt' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SprzetAdminComponent,
    EdycjaComponent,
    SprzetDodajComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }