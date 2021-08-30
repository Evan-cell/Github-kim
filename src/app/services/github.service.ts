import { CLIENT_ID, CLIENT_SECRET } from './cridentials/GithubCre';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }
  // for github-profile
  public getProfile(searchQuery:string){
    let dataUrl = `http://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  }

  // for github repos
}
