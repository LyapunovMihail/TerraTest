import { Injectable } from '@angular/core';
declare var $:any;
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }
  
  authorize(authData) {
  	var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://ta-test.ipname.xyz/api/token",
		  "method": "POST",
		  "headers": {
		    "Authorization": `Basic dGVzdDp0ZXN0`,
		    "Content-type": "application/x-www-form-urlencoded",
		    "Accept": "application/json, text/plain, */*"
		  },
		  "data": {
		    "grant_type": "password"
		  }
		}
  	return $.ajax(settings)
  }

  refreshAuthorize(authData) {
  	var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://ta-test.ipname.xyz/api/token",
		  "method": "POST",
		  "headers": {
		    "authorization": `Bearer ${authData.refresh_token}`,
		    "content-type": "application/x-www-form-urlencoded"
		  },
		  "data": {
		    "grant_type": "refresh_token"
		  }
		}
  	return $.ajax(settings)
  }

  getPrivateValue(data) {
  	var myHeaders = new HttpHeaders({'Authorization': `Bearer ${data.access_token}`});
		return this.http.get('https://ta-test.ipname.xyz/api/secret', {headers:myHeaders});
  }
}
