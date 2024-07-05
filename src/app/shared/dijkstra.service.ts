import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Graph } from '../models/graph';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DijkstraService {

  private static BASE_URL = `${environment.urlAPI}/graph`;

  constructor(private http: HttpClient) { }


  getGraph(node?: string): Observable<Graph> {
    let obs$;
    if (node && node.length > 0){
      obs$ = this.http.get<Graph>(DijkstraService.BASE_URL + '/' + node);
    } else {
      obs$ = this.http.get<Graph>(DijkstraService.BASE_URL);
    }

    return obs$;
  }}
