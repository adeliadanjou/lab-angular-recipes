import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {environment} from '../../environments/environment'
import 'rxjs/add/operator/map'

@Injectable()
export class IngredientsService {

  constructor(public http: Http) { }

  allIngredients(){
  return  this.http.get(`${environment.basicUrl}/api/ingredients`).map((ingredients: Response) => ingredients.json())
  }

}
