import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BreadcrumComponent } from './Components/breadcrum/breadcrum.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { DevExtremeModule } from './Shared/DevExtreme/DevExtreme.module';

import { PatientService } from './Services/Patient.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    DevExtremeModule,
    NgbModule
  ],
  providers: [
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
