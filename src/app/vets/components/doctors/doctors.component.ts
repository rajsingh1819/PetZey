import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor(private doctorsService: DoctorsService) { }
  vetsDetails: any;
  public vetList: any;
  condition: boolean | undefined;

  ngOnInit(): void {
    this.fetchVetsData();
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

  edit(e: any) {
    this.doctorsService.setTemp(e)
  }

  fetchVetsData() {
    this.doctorsService.getVetsData().subscribe((resp) => {
      this.vetsDetails = resp;
    })
  }

  fetchDeleteData(vetList: any) {
    window.location.reload();
    return this.doctorsService.deleteVet(vetList.id).subscribe((resp) => {
    })
  }


}


