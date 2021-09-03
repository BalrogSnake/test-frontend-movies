import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/class/movie/movie';
import { MovieService } from 'src/app/services/movie/movie.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-premiere-home',
  templateUrl: './premiere-home.component.html',
  styleUrls: ['./premiere-home.component.css']
})
export class PremiereHomeComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  movies: Movie;
  arrayLinks = []

  constructor(
    public movieService: MovieService,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.movieService.getMoviesPremiere().subscribe(data => {
      this.movies = data as Movie
      for(let movie of this.movies.data){
        this.arrayLinks.push(this.movies.imageBaseUrl + "" + movie.backdrop_path)
      }
    });
  }

}
