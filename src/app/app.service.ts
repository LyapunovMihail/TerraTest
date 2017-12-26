import { Injectable } from '@angular/core';
declare var $:any;

@Injectable()
export class AppService {

  constructor() { }
  

  authorize(authData) {
  	var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://ta-test.ipname.xyz/api/token",
		  "method": "POST",
		  "headers": {
		    "authorization": "Basic dGVzdDp0ZXN0",
		    "content-type": "application/x-www-form-urlencoded"
		  },
		  "data": {
		    "grant_type": "password",
		   	"username": `${authData.username}`,
		   	"password": `${authData.password}`
		  }
		}

  	return $.ajax(settings)
  }

  getPrivateValue(data) {
  	console.log("data: ", data)
  	var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://ta-test.ipname.xyz/api/secret",
		  "method": "GET",
		  "headers": {
		    "authorization": `Bearer ${data.access_token}`
		  }
		}

		return $.ajax(settings)
  }

}
