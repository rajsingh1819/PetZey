import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';

import { AllAppointmentsComponent } from './appointments/components/all-appointments/all-appointments.component';
import { AddAppointmentComponent } from './appointments/components/add-appointment/add-appointment.component';
import { DoctorsComponent } from './vets/components/doctors/doctors.component';
import { AddDoctorComponent } from './vets/components/add-doctor/add-doctor.component';


import { HeaderComponent } from './shared/header/header.component';


import { AddPetsComponent } from './pets/components/add-pets/add-pets.component';
import { PetsComponent } from './pets/components/pets/pets.component';
import { ClinicInformationComponent } from './clinics/components/clinic-information/clinic-information.component';
import { AddClinicComponent } from './clinics/components/add-clinic/add-clinic.component';
import { AddDepartmentsComponent } from './department/components/add-departments/add-departments.component';
import { DepartmentsComponent } from './department/components/departments/departments.component';
import { AdminDashboardComponent } from './dashboard/components/admin-dashboard/admin-dashboard.component';
import { AddScheduleComponent } from './schedule/components/add-schedule/add-schedule.component';
import { ScheduleComponent } from './schedule/components/schedule/schedule.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPetsComponent } from './pets/components/edit-pets/edit-pets.component';
import { EditVetsComponent } from './vets/components/edit-vets/edit-vets.component';

@NgModule({
  declarations: [
    ClinicInformationComponent,
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    AllAppointmentsComponent,
    AddAppointmentComponent,
    DoctorsComponent,
    AddDoctorComponent,
    AddPetsComponent,
    ScheduleComponent,
    AddScheduleComponent,
    DepartmentsComponent,
    AddDepartmentsComponent,
    HeaderComponent,
    AddClinicComponent,
    AddPetsComponent,
    PetsComponent,
    EditPetsComponent,
    EditVetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
