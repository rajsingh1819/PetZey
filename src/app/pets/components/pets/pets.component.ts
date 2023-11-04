import { Component, OnInit } from '@angular/core';
import { EditPetsService } from '../../services/edit-pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  petDetails: any;

  constructor(private editPetsService: EditPetsService) { }

  ngOnInit(): void {
    this.getAllpets();
  }
  list: boolean = true;
  card: boolean = false;

  lists() {
    this.list = !this.list;
    this.card = !this.card;
  }
  cards() {
    this.card = !this.card;
    this.list = !this.list;
  }

  getAllpets() {
    this.editPetsService.petDetails().subscribe((resp) => {
      this.petDetails = resp;
      console.log(this.petDetails);
    })
  }

  fetchdeleteData(data: any) {
    sessionStorage.setItem('petID', '89');
    this.editPetsService.deleteData(data.petId).subscribe((resp) => {
      console.log(resp);
      alert('Data deleted succesfully');
      window.location.reload();
    },
      (error) => {
        console.log(error);
      })
  }
}
