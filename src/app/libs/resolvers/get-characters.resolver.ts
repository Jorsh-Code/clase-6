import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, concatMap, Observable, of ,tap} from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class GetCharactersResolver implements Resolve<any> {

  constructor(private requestService: RequestService, private route: Router){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const characterName: string = route.queryParams['name'];
    let flag: boolean = true;

    /*this.requestService.getCharacters().subscribe((response:any) =>{
      response.results.forEach((character:any) => {
        if(character.name.toLowerCase().includes(characterName)){
          flag = false;
        }
      });
      if(flag) this.route.navigate(['404']);
    });*/

  

    return this.requestService.getCharacters().pipe(
      concatMap((resp: any) => {
        //console.log('entro');
        let temp = (resp.results as any[]).find(item =>{
          return item.name.toLowerCase().includes(characterName);
        })?.name;
        if(!temp){
          throw new Error('UnU');
        } 
        return this.requestService.getCharacter(characterName);
      }),
      catchError((error: any) => {
        if(error.status === 404){
          this.route.navigate(['404']);
        }
        return error;
      })
    );
  }
}
