import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-edit-vets',
  templateUrl: './edit-vets.component.html',
  styles: []
})
export class EditVetsComponent implements OnInit {
  vetDetails: any;
  editForm = new FormGroup({

  })


  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.vetDetails = this.doctorsService.flag;
  }

  update() {
    this.doctorsService.edit(this.vetDetails).subscribe((resp) => {
      console.log(resp);
      alert('data updated successfully');
    })
  }
}

