import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { petDetails } from '../models/pet-details';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EditPetsService {

  constructor(private http: HttpClient) { }

  geturl = 'https://pet-db.onrender.com/Patients';
  deleteurl = 'http://15.206.64.114:9331/pet/delete';
  posturl: any = 'http://15.206.64.114:9331/pet/addpet'

  //get
  petDetails() {
    return this.http.get(this.geturl);
  }
  // DELETE
  deleteData(id: any) {
    return this.http.delete<any>(this.deleteurl + "/" + id);
  }
  //post
  postData(data: any) {
    return this.http.post(this.posturl, data);
  }
  // UPDATE
  getupdateDataById(id: any) {
    return this.http.get<any>("https://pet-db.onrender.com/Patients/" + id);
  }
  updateData(data: any, id: any) {
    return this.http.put<any>("http://15.206.64.114:9331/pet/pet/edit" + id, data);
  }

}


