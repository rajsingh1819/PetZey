import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './appointments/components/add-appointment/add-appointment.component';

import { AllAppointmentsComponent } from './appointments/components/all-appointments/all-appointments.component';

import { ClinicInformationComponent } from './clinics/components/clinic-information/clinic-information.component';
import { AddClinicComponent } from './clinics/components/add-clinic/add-clinic.component';



import { AddPetsComponent } from './pets/components/add-pets/add-pets.component';
import { PetsComponent } from './pets/components/pets/pets.component';

import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AddDoctorComponent } from './vets/components/add-doctor/add-doctor.component';
import { DoctorsComponent } from './vets/components/doctors/doctors.component';
import { AddDepartmentsComponent } from './department/components/add-departments/add-departments.component';
import { DepartmentsComponent } from './department/components/departments/departments.component';
import { AdminDashboardComponent } from './dashboard/components/admin-dashboard/admin-dashboard.component';
import { AddScheduleComponent } from './schedule/components/add-schedule/add-schedule.component';
import { ScheduleComponent } from './schedule/components/schedule/schedule.component';
import { EditPetsComponent } from './pets/components/edit-pets/edit-pets.component';
import { EditVetsComponent } from './vets/components/edit-vets/edit-vets.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },


  { path: 'allAppointments', component: AllAppointmentsComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'addAppointments', component: AddAppointmentComponent },

  { path: 'vets', component: DoctorsComponent },
  { path: 'addVets', component: AddDoctorComponent },
  { path: 'editVets/:id', component: EditVetsComponent },


  { path: 'pets', component: PetsComponent },
  { path: 'addPets', component: AddPetsComponent },
  { path: 'editPets/:id', component: EditPetsComponent },


  { path: 'schedule', component: ScheduleComponent },
  { path: 'addSchedule', component: AddScheduleComponent },

  { path: 'departments', component: DepartmentsComponent },
  { path: 'addDepartment', component: AddDepartmentsComponent },



  { path: 'clinic', component: ClinicInformationComponent },
  { path: 'addClinic', component: AddClinicComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
