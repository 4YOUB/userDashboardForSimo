import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})



export class UserDataService {
 
  constructor() {

  }

  

   getUserData(){
    return axios.get('https://jsonplaceholder.typicode.com/users/1')
                      .then( (res) => res.data)
    
  }
  
}
