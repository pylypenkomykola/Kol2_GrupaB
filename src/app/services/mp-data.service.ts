import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MPDataService {

  url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url + '/api/forum/posts');
  }

  getPost(id) {
    return this.http.get(this.url + '/api/forum/posts/' + id);
  }
}
