import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    movie: Movie = {
        title: '',
        overview: '',
        posterPath: '',
        rating: 0,
        releaseDate: 0,
        voteAverage: 0,
        id: 0,
        genreIds: [],
        genres: [],
        runtime: 0,
        tagline: '',
        backdropPath: ''
    };

    constructor(private service: MoviesService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(x => {
            const id = parseInt(x.id);
            this.service.getMovieById(id).subscribe((data: any) => {
                this.movie = {
                    title: data.title,
                    overview: data.overview,
                    posterPath: data.poster_path,
                    rating: data.rating,
                    releaseDate: data.release_date,
                    voteAverage: data.vote_average,
                    id: data.id,
                    genreIds: data.genre_ids,
                    genres: [],
                    runtime: data.runtime,
                    tagline: data.tagline,
                    backdropPath: data.backdrop_path
                };
            });
        });
    }
    
}