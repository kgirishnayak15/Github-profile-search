import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public token:any;
  constructor() { }
  gettoken(){
    fetch('https://github.com/login/oauth/access_token')
      .then(response => response.json())
      .then((data) => {
        this.token = data;
        console.log(this.token.access_token);
      });
  // const query = window.location.search.substring(1)
  // const token = query.split('access_token=')[1]

	// Call the user info API using the fetch browser library
	// fetch('https://github.com/login/oauth/access_token', {
	// 		headers: {
	// 			// Include the token in the Authorization header
  //       Authorization: 'token ' + token
        
  // 		}

	// 	})
	// 	// Parse the response as JSON
	// 	.then(res => res.json())
	// 	.then((data) => {
  //     this.token = data;
  //   console.log(this.token)})
  //   return localStorage.getItem('token')
   
  }
}
