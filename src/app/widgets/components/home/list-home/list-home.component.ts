import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {

  movies: any;

  constructor(
    public movieService: MovieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.movieService.getMoviesPopular().subscribe(data => {
      this.movies = data;
    })
  }

  detallePelicula(movie: any, link: string){
    this.movieService.movieDetail = movie;
    this.movieService.linkImage = link
    this.router.navigateByUrl('/detail')
  }

}
