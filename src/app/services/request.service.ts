import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  getCharacter(name: string){
    return this.http.get('https://rickandmortyapi.com/api/character/?name='+name);
  }
}
