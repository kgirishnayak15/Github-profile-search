
import { Component, OnInit } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRET } from '../credentials/cred'
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  public userquery: string;
  public getProfile: any;
  public getRepos: any[];
  public getGist: any[];
  public getFollower: any[];
  public errorMessage: string;
  constructor() { }
  fnslice(x) {
    var myJSON = JSON.stringify(x);
    var newjson = myJSON.slice(2, myJSON.indexOf('":{"'))
    return newjson
  }
  searchUser() {
    fetch('https://api.github.com/users/' + this.userquery + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '')

      .then(response => response.json())
      .then((data) => {
        this.getProfile = data;
      });
    fetch('https://api.github.com/users/' + this.userquery + '/repos' + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '')
      .then(response => response.json())
      .then((data) => {
        this.getRepos = data;
      });
    fetch('https://api.github.com/users/' + this.userquery + '/gists' + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '')
      .then(response => response.json())
      .then((data) => {
        this.getGist = data;
      });
    fetch('https://api.github.com/users/' + this.userquery + '/followers' + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '')
      .then(response => response.json())
      .then((data) => {
        this.getFollower = data;
      });
  }
  logout(){
    window.location.reload();
    console.log("i am called");
  }
  ngOnInit(): void {
 
  }

}
