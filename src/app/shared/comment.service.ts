import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private static BASE_URL = `${environment.urlAPI}/comments`;

  constructor(private http: HttpClient) { }


  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(CommentService.BASE_URL);
  }

  getById(id: number) {
    return this.http.get<Comment>(CommentService.BASE_URL + '/' + id);
  }


  create(comment: Comment) {
    return this.http.post(CommentService.BASE_URL, comment);
  }

  delete(id: number) {
    return this.http.delete(CommentService.BASE_URL + '/' + id);
  }
}
