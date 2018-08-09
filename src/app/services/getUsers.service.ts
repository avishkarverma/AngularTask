import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GetUsersService {
constructor(private http:HttpClient) {
}

getUserbyName(userName) {
    return this.http.get('https://api.github.com/search/users?q='+userName);
}

}