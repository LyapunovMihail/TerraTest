import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  authorize(authData) {
  	var myHeaders = new HttpHeaders({
  		"Authorization": `Basic ${authData}`,
  		"Content-type": "application/x-www-form-urlencoded",
  		"Accept": "application/json, text/plain, */*"
  	});
  	var body = "grant_type=password";
  	return this.http.post("https://ta-test.ipname.xyz/api/token", body,{headers:myHeaders});
  }

  refreshAuthorize(data) {
  	var myHeaders = new HttpHeaders({
  		"Authorization": `Bearer ${data.refresh_token}`,
  		"Content-type": "application/x-www-form-urlencoded"
  	});
  	var body = "grant_type=refresh_token";
  	return this.http.post("https://ta-test.ipname.xyz/api/token", body,{headers:myHeaders});
  }

  getPrivateValue(data) {
  	var myHeaders = new HttpHeaders({'Authorization': `Bearer ${data.access_token}`});
		return this.http.get('https://ta-test.ipname.xyz/api/secret', {headers:myHeaders});
  }
}
