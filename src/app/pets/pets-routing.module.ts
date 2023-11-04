import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { EditPetsComponent } from './components/edit-pets/edit-pets.component';

const routes: Routes = [
  { path: 'editPets', component: EditPetsComponent }
];
=======

const routes: Routes = [];
>>>>>>> Team_05_Vash

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
