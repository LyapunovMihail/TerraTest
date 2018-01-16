import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
declare var Cookies:any;
import * as utf8 from 'utf8';
import * as base64 from 'base-64';


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
    let authData = this.getStoredAuthData();
    if (authData) this.authorize(authData);
  }

  authorize(authData) { 
    this.appService
      .authorize(authData)
      .subscribe((response) => {
        if (!this.getStoredAuthData())
          this.storeAuthData(authData);
        this.authorization.response = response;
        this.view.currentView = 'receivingPrivateValue';
        setInterval(() => {
          this.appService.refreshAuthorize(this.authorization.response)
          .subscribe((newResponse) => {
            this.authorization.response = newResponse;
          }, (error) => {
            console.log("Request failed: " + JSON.stringify(error));
            this.authorization.error = error;
          });
        }, this.authorization.response.expires_in * 1000);
      }, (error) => {
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
  
  processingAuthData(authData) {
    authData = this.encodeAuthData(authData);
    this.authorize(authData);  
  }

  encodeAuthData(authData) {
    let authDataString = authData.username + ":" + authData.password;
    let bytes = utf8.encode(authDataString);
    let base64authData = base64.encode(bytes);
    return base64authData;
  }

  storeAuthData(authData) {
    Cookies.set("authData", authData);
  }

  getStoredAuthData() {
    let authData = Cookies.get("authData");
    return authData;
  }

}
