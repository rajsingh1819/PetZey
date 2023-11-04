import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditPetsService } from '../../services/edit-pets.service';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {
  addForm = new FormGroup({
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
  constructor(private editPetsService: EditPetsService) { }

  ngOnInit(): void {
  }
  post() {
    this.editPetsService.postData(this.addForm.value).subscribe((resp) => {
      console.log(resp);
      alert('data updated succesfully')
      location.assign('pets')
    },
      (error) => {
        console.log(error);
      }
    )
  }
}
