import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = 'http://161.35.140.236:9005/api/movies/';
  premiere: string = 'now_playing';
  popular: string = 'popular'
  movieDetail: any;
  linkImage: string;

  constructor(
    private http: HttpClient,
    public userService: UserService,
  ) { }

  getMoviesPremiere(){
    const token = this.userService.getToken();
    return this.http.get(this.url + this.premiere + '?page=1', {headers: { 'Authorization': `Bearer ${token}` }});
  }

  getMoviesPopular(){
    const token = this.userService.getToken();
    return this.http.get(this.url + this.popular + '?page=2', {headers: { 'Authorization': `Bearer ${token}` }});
  }

  getMovieCast(id:number){
    const token = this.userService.getToken();
    return this.http.get(this.url + id + '/actors', {headers: { 'Authorization': `Bearer ${token}` }})
  }

  setMovieDetail(movie: any){
    this.movieDetail = movie;
  }
}
