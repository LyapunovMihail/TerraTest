import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
declare var Cookies:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(
    private appService: AppService) { 
  }

  authorization = {
  	response: null,
  	error: {}
  }

  receivingPrivateValue = {
  	response: null,
  	error: {}
  }

  view = {
  	currentView: "authorization"
  } 

  ngOnInit() {
    var authData = this.getStoredAuthData();
    if (authData.username && authData.password) 
      this.authorize(authData);
  }

  storeAuthData(authData) {
    Cookies.set("username", authData.username);
    Cookies.set("password", authData.password);
  }

  getStoredAuthData() {
    var username = Cookies.get("username");
    var password = Cookies.get("password");
    return {username: username, password: password};
  }

  checkAuthData(authData) {
    var error = {username: '', password: ''};
    if (authData.username !== 'test') error.username = 'Неверный логин';
    if (authData.password !== 'test') error.password = 'Неверный пароль';
    this.authorization.error = error;
    if (!error.username && !error.password) {
      this.storeAuthData(authData);
      this.authorize(authData);
    }
  }

  authorize(authData) {
    let self = this;
    this.appService
      .authorize(authData)
      .done((response) => {
        self.authorization.response = response;
        self.view.currentView = 'receivingPrivateValue';
        setInterval(() => {
          self.appService.refreshAuthorize(self.authorization.response)
          .done((newResponse) => {
            self.authorization.response = newResponse;
          })
          .fail((error) => {
            console.log("Request failed: " + JSON.stringify(error));
            self.authorization.error = error;
          });
        }, self.authorization.response.expires_in * 1000);
      })
      .fail((error) => {
        console.log("Request failed: " + JSON.stringify(error));
        self.authorization.error = error;
      });
  }

  getPrivateValue(data) {
  	let self = this;
  	this.appService
    	.getPrivateValue(data)
    	.subscribe((response) => {
			  self.receivingPrivateValue.response = response;
			}, (error) => {
        console.log("Request failed: " + JSON.stringify(error));
        self.receivingPrivateValue.error = error;
      });
  }
  
}
