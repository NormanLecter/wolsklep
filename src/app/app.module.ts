import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorServiceService } from './error-service.service'

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { SprzetAdminComponent } from './sprzet-admin/sprzet-admin.component';
import { EdycjaComponent } from './edycja/edycja.component';
import { SprzetDodajComponent } from './sprzet-dodaj/sprzet-dodaj.component';
import { SprzetKlientComponent } from './sprzet-klient/sprzet-klient.component';
import { SprzetGoscieComponent } from './sprzet-goscie/sprzet-goscie.component';
import { ZamowienieComponent } from './zamowienie/zamowienie.component';
import { ListaZamowienComponent } from './lista-zamowien/lista-zamowien.component';
import { SzczegolySprzetComponent } from './szczegoly-sprzet/szczegoly-sprzet.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { ListaUzytkownikowComponent } from './lista-uzytkownikow/lista-uzytkownikow.component';
import { SposobKupowaniaWyborComponent } from './sposob-kupowania-wybor/sposob-kupowania-wybor.component';
import { FormularzKupnaComponent } from './formularz-kupna/formularz-kupna.component';
import { ListaZakupyComponent } from './lista-zakupy/lista-zakupy.component';
import { EdycjaProfilComponent } from './edycja-profil/edycja-profil.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { ListaGwarancjeComponent } from './lista-gwarancje/lista-gwarancje.component';
import { ListaAdministratorzyComponent } from './lista-administratorzy/lista-administratorzy.component';

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
    path: 'klient',
    component: SprzetKlientComponent,
    data: { title: 'Sprzet - wykaz : Klient' }
  },
  {
    path: 'goscie',
    component: SprzetGoscieComponent,
    data: { title: 'Sprzet - wykaz : Gosc' }
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
  {
    path: 'zamowienie',
    component: ZamowienieComponent,
    data: { title: 'Złóż zamówienie' }
  },
  {
    path: 'lista-zamowien',
    component: ListaZamowienComponent,
    data: { title: 'Zamowienia' }
  },
  {
    path: 'szczegoly/:id',
    component: SzczegolySprzetComponent,
    data: { title: 'Zamowienia' }
  },
  {
    path: 'rejestracja',
    component: RejestracjaComponent,
    data: { title: 'Rejestracja' }
  },
  {
    path: 'lista-uzytkownikow',
    component: ListaUzytkownikowComponent,
    data: { title: 'Lista - Klienci' }
  },
  {
    path: 'sposob-kupowania/:id',
    component: SposobKupowaniaWyborComponent,
    data: { title: 'Zaloguj się' }
  },
  {
    path: 'formularz-kupna/:id',
    component: FormularzKupnaComponent,
    data: { title: 'Dane kupującego' }
  },
  {
    path: 'lista-zakupy',
    component: ListaZakupyComponent,
    data: { title: 'Sprzedane przedmioty' }
  },
  {
    path: 'edycja-profil',
    component: EdycjaProfilComponent,
    data: { title: 'Edytuj swój profil' }
  },
  {
    path: 'logowanie',
    component: LogowanieComponent,
    data: { title: 'Zaloguj się' }
  },
  {
    path: 'lista-gwarancje',
    component: ListaGwarancjeComponent,
    data: { title: 'Wystawione gwarancje' }
  },
  {
    path: 'lista-administratorow',
    component: ListaAdministratorzyComponent,
    data: { title: 'Lista - Administratorzy' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SprzetAdminComponent,
    EdycjaComponent,
    SprzetDodajComponent,
    SprzetKlientComponent,
    SprzetGoscieComponent,
    ZamowienieComponent,
    ListaZamowienComponent,
    SzczegolySprzetComponent,
    RejestracjaComponent,
    ListaUzytkownikowComponent,
    SposobKupowaniaWyborComponent,
    ListaZakupyComponent,
    EdycjaProfilComponent,
    LogowanieComponent,
    ListaGwarancjeComponent,
    FormularzKupnaComponent,
    ListaAdministratorzyComponent
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
  providers: [ErrorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }