import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DoctorsService {


  geturl = 'https://pet-db.onrender.com/Doctors';
  //editurl = 'https://bt-vet.learn.skillassure.com/vet/vet/editVetDetails';

  constructor(private http: HttpClient) { }
  [x: string]: any;

  getVetsData() {
    return this.http.get(this.geturl)
  }


  flag: any;
  setTemp(data: any) {
    this.flag = data;
  }

  edit(data: any) {
    return this.http.put('https://pet-db.onrender.com/Doctors/' + data.id, data);
  }

  getAllVets(): Observable<any> {
    return this.http.get<any[]>("https://pet-db.onrender.com/Doctors")
  }

  getAllVetsID(id: any): Observable<any> {
    return this.http.get<any[]>("https://pet-db.onrender.com/Doctors/" + id)
  }

  deleteVet(id: any) {
    return this.http.delete("https://pet-db.onrender.com/Doctors/" + id)
  }


}
