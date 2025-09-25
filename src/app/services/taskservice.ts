import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Taskservice {
  
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://127.0.0.1:8000/api';
  postTask(data: any) {
    return this.http.post(`${this.apiUrl}/tasks`, data);
  }
}
