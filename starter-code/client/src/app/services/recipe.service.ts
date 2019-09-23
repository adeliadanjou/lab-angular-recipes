import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {environment} from '../../environments/environment'
import 'rxjs/add/operator/map'

@Injectable()
export class RecipeService {

  constructor(public http: Http) {  }

  getAllDishes(){
  return  this.http.get(`${environment.basicUrl}/api/dishes`)
    .map((res:Response) => res.json())
  }

getDish(id) {
  return this.http.get(`${environment.basicUrl}/api/dishes/${id}`)
  .map((dish:Response) => dish.json())
}

  
}



