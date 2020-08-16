import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../components/person/person-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirthdayServiceService {
  private headersOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, HEAD, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me'
    }
  };

  constructor(private http: HttpClient) { }

  /**
   * Get age, how many days until his birthday, first name and last name,
   * and if today is his birthay get a random poem
   * @param data Person information (birthday date and names)
   */
  public getBirthDay(data: Person) {
    const response = this.http.get('http://localhost:8080/api/v1/person/' + data.name + '/' + data.birthdayDate);
    return response;
  }
}
