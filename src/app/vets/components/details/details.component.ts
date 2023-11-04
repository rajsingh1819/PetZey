import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddVetService } from '../../services/add-vet.service';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  vet:any;
  vetId:any=this.route.snapshot.paramMap.get('id');

  constructor(private detailsVet:AddVetService,private route:ActivatedRoute) { 
    this.getvet();
    console.log(this.vetId);
  }

  ngOnInit(): void {
  }
  getvet(){
    return this.detailsVet.getAllVetsID(this.vetId)
    .subscribe((response: any)=>{
      this.vet=response;

      console.log('sdvsdzdvssdd',this.vet)
    })
    
  }


}

