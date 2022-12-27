import { AuthService } from './auth.service';
import { Restaurant } from './../model/restaurant.model';
import { Injectable, OnInit } from '@angular/core';
import { Menu } from '../model/menu.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { restaurantWrapper } from '../model/restaurantWrapped.model';





const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
providedIn: 'root'
})

export class MenuService {
apiURL: string = 'http://localhost:8082/api';
apiURLRest: string ='http://localhost:8082/rest';


menus! : Menu[];
restaurants: Restaurant[] = [];




constructor(private http : HttpClient, private authService: AuthService) {
  /*this.restaurants = [ {idRest : 1, nomRest : "Popolare"},
  {idRest : 2, nomRest : "Village"}];*/
  /*this.menus = [
  { idMenu : 1, nomMenu : "Jus", prixMenu : 4.500,restaurant : {idRest : 1, nomRest : "Popolare"}},
  { idMenu : 2, nomMenu : "Café", prixMenu : 3.500,restaurant : {idRest : 2, nomRest : "Village"}},
  { idMenu : 3, nomMenu :"Poulet Mexicain", prixMenu : 16.900,restaurant : {idRest : 1, nomRest : "Popolare"}}
  ];*/
  }




    listeMenu(): Observable<Menu[]>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<Menu[]>(this.apiURL+"/all",{headers:httpHeaders});

      }

      ajouterMenu( prod: Menu):Observable<Menu>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.post<Menu>(this.apiURL, prod, {headers:httpHeaders});
        }

        supprimerMenu(id : number) {
          const url = `${this.apiURL}/${id}`;
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.delete(url,  {headers:httpHeaders});
          }

         consulterMenu(id: number): Observable<Menu> {
            const url = `${this.apiURL}/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
              return this.http.get<Menu>(url,{headers:httpHeaders});
            }

        updateMenu(prod :Menu) : Observable<Menu>    {
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
              return this.http.put<Menu>(this.apiURL, prod, {headers:httpHeaders});
            }



            listeRestaurants():Observable<restaurantWrapper>{
              let jwt = this.authService.getToken();
              jwt = "Bearer "+jwt;
              let httpHeaders = new HttpHeaders({"Authorization":jwt})
              return  this.http.get<restaurantWrapper>(this.apiURLRest,{headers:httpHeaders});

                  }

                  rechercherParRestaurant(idRest: number):Observable<Menu[]> {
                    let jwt = this.authService.getToken();
                    jwt = "Bearer "+jwt;
                    let httpHeaders = new HttpHeaders({"Authorization":jwt})
                    const url = `${this.apiURL}/prodscast/${idRest}`;
                    return this.http.get<Menu[]>(url,{headers:httpHeaders});
                    }

                    rechercherParNom(nom: string):Observable< Menu[]> {
                      let jwt = this.authService.getToken();
                      jwt = "Bearer "+jwt;
                      let httpHeaders = new HttpHeaders({"Authorization":jwt})
                      const url = `${this.apiURL}/prodsByName/${nom}`;
                      return this.http.get<Menu[]>(url,{headers:httpHeaders});
                      }

      ajouterRestaurant( rest: Restaurant):Observable<Restaurant>{
        return this.http.post<Restaurant>(this.apiURLRest, rest, httpOptions);
        }


}

