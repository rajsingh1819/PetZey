import { Component, OnInit } from '@angular/core';
import { EditPetsService } from '../../services/edit-pets.service';
//import { petDetails } from '../../models/pet-details';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.css']
})
export class EditPetsComponent implements OnInit {
  petDetails: any;
  editForm = new FormGroup({
    petName: new FormControl(''),
    petAge: new FormControl(''),
    petStatus: new FormControl(''),
    parentFName: new FormControl(''),
    parentLName: new FormControl(''),
    parentEmailId: new FormControl(''),
    parentPhoneNumber: new FormControl(''),
    country: new FormControl(''),
    avatar: new FormControl(''),
    petGender: new FormControl(''),
    biography: new FormControl(''),
    breed: new FormControl('')
  })
  ID: any = this.route.snapshot.params.petId;
  // ID: any = this.route.snapshot.paramMap.get('petId');

  constructor(private editPetsService: EditPetsService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getAllpets();
  }

  getAllpets() {
    this.editPetsService.getupdateDataById(sessionStorage.getItem('petID')).subscribe((resp) => {

      console.log('sdfgbhjnmkjjhgfds', this.ID)

      this.editForm = new FormGroup({
        petName: new FormControl(resp['petName']),
        petAge: new FormControl(resp['petAge']),
        petStatus: new FormControl(resp['petStatus']),
        parentFName: new FormControl(resp['parentFName']),
        parentLName: new FormControl(resp['parentLName']),
        parentEmailId: new FormControl(resp['parentEmailId']),
        parentPhoneNumber: new FormControl(resp['parentPhoneNumber']),
        country: new FormControl(resp['country']),
        avatar: new FormControl(resp['avatar']),
        petGender: new FormControl(resp['petGender']),
        biography: new FormControl(resp['biography']),
        breed: new FormControl(resp['breed']),
      })

    })
  }


  edit() {

  }
}

