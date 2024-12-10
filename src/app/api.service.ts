
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; 
  private getDataURL='api/data';
  private deleteDataURL = 'api/data';
  private postDataURL = 'api/data';

  constructor(private http: HttpClient) {}

//  GET request
  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.getDataURL}`);
  }

  // POST request
  postData( data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${this.postDataURL}`, data);
  }

  // PUT request
  updateData(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, data);
  }

  // DELETE request
  deleteData(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${this.deleteDataURL}`);
  }
}

















// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class APIService {

//   private apiUrl = ['http://localhost:3000/0',
// 'http://localhost:3000/1',
// 'http://localhost:3000/2',
// 'http://localhost:3000/3']

//   constructor(private http: HttpClient) { }

//    // GET request
//    getData(): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }

//   // POST request
//   postData(cardsList: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, cardsList);
//   }
 
// }


