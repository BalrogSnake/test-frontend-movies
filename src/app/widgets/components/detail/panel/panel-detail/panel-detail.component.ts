import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-panel-detail',
  templateUrl: './panel-detail.component.html',
  styleUrls: ['./panel-detail.component.css']
})
export class PanelDetailComponent implements OnInit {

  movie: any;
  linkImage: string;
  cast:any;

  constructor(
    public movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.movie = this.movieService.movieDetail;
    this.linkImage = this.movieService.linkImage;
    if(this.movie == null){
      this.router.navigateByUrl('/home')
    }
    this.movieService.getMovieCast(this.movie.id).subscribe(data => {
      this.cast = data;
      console.log(this.cast)
    })
  }

}
