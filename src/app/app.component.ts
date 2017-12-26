import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private appService: AppService) { 
  }

  authorization = {
  	response: null,
  	error: null
  }

  gettingPrivateValue = {
  	response: null,
  	error: null
  }

  view = {
  	currentView: "authorization"
  } 

  authorize(authData) {
  	let self = this;

    this.appService
    	.authorize(authData)
    	.done(function (response) {
			  self.authorization.response = response;
			  self.view.currentView = 'gettingPrivateValue';
			})
			.fail(function(error) {
				console.log("Request failed: " + JSON.stringify(error));
				self.authorization.error = error;
			});
  }
  
  getPrivateValue(data) {
  	let self = this;

  	this.appService
    	.getPrivateValue(data)
    	.done(function (response) {
			  self.gettingPrivateValue.response = response;
			})
			.fail(function(error) {
				console.log("Request failed: " + JSON.stringify(error));
				self.gettingPrivateValue.error = error;
			});
  }

  backToView(view) {
  	this.view.currentView = view;
  	this.authorization.response = null;
  	this.authorization.error = null;
  	this.gettingPrivateValue.response = null;
  	this.gettingPrivateValue.error = null;
  }
}
