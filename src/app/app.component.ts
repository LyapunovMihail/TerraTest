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
    this.appService
      .authorize(authData)
      .done((response) => {
        this.authorization.response = response;
        this.view.currentView = 'receivingPrivateValue';
        setInterval(() => {
          this.appService.refreshAuthorize(this.authorization.response)
          .done((newResponse) => {
            this.authorization.response = newResponse;
          })
          .fail((error) => {
            console.log("Request failed: " + JSON.stringify(error));
            this.authorization.error = error;
          });
        }, this.authorization.response.expires_in * 1000);
      })
      .fail((error) => {
        console.log("Request failed: " + JSON.stringify(error));
        this.authorization.error = error;
      });
  }

  getPrivateValue(data) {
  	this.appService
    	.getPrivateValue(data)
    	.subscribe((response) => {
			  this.receivingPrivateValue.response = response;
			}, (error) => {
        console.log("Request failed: " + JSON.stringify(error));
        this.receivingPrivateValue.error = error;
      });
  }
  
}
