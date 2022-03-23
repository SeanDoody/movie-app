import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Genre } from 'src/app/models/genre';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    genreList: Genre[] = [];
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
    genreString: string = '';

    constructor(private service: MoviesService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getAllGenres();
        this.getMovieInfo();
    }

    getAllGenres(): void {
		this.service.getAllGenres().subscribe((data: any) => {
			this.genreList = data.genres;
		});
	}

    getMovieInfo(): void {
        this.route.params.subscribe(x => {
            const id = parseInt(x.id);
            this.service.getMovieById(id).subscribe((data: any) => {
                this.movie = {
                    title: data.title,
                    overview: data.overview,
                    posterPath: data.poster_path,
                    rating: 0,
                    releaseDate: data.release_date,
                    voteAverage: data.vote_average,
                    id: data.id,
                    genreIds: [],
                    genres: data.genres,
                    runtime: data.runtime,
                    tagline: data.tagline,
                    backdropPath: data.backdrop_path
                };
                for (let genre of this.movie.genres) {
                    this.genreString += `${genre.name}, `;
                }
                this.genreString = this.genreString.slice(0, this.genreString.length - 2);
            });
        });
    }
    
}