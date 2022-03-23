import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Genre } from 'src/app/models/genre';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	movieList: Movie[] = [];
	genreList: Genre[] = [];
	rating: string = '';
	year: string = '';
	searchQuery: string = '';
	filterGenre: string = '';

	constructor(private service: MoviesService) { }

	ngOnInit(): void {
		this.getAllGenres();
		this.getNewMovies();
	}

	updateMovieList(apiData: any): void {
		this.movieList = [];
		let newMovie: Movie;
		for (let movie of apiData.results) {
			newMovie = {
				title: movie.title,
				overview: movie.overview,
				posterPath: movie.poster_path,
				rating: movie.rating,
				releaseDate: movie.release_date,
				voteAverage: movie.vote_average,
				id: movie.id,
				genreIds: movie.genre_ids,
				genres: [],
				runtime: movie.runtime,
				tagline: movie.tagline,
				backdropPath: movie.backdrop_path
			};
			this.movieList.push(newMovie);
		}
		console.log('movieList updated');
		console.log(this.movieList);
	}

	getAllGenres(): void {
		this.service.getAllGenres().subscribe((data: any) => {
			this.genreList = data.genres;
		});
	}

	getNewMovies(): void {
		this.service.getNewMovies().subscribe((data: any) => {
			this.updateMovieList(data);
		});
	}

	searchByQuery(): void {
		this.service.getMovieByQuery(this.searchQuery).subscribe((data: any) => {
			this.updateMovieList(data);
		});
	}

	searchByYear(): void {
		this.service.getMovieByYear(this.year).subscribe((data: any) => {
			this.updateMovieList(data);
		})
	}

	searchByRating(): void {
		this.service.getMovieByRating(this.rating).subscribe((data: any) => {
			this.updateMovieList(data);
		})
	}

	searchByGenre(): void {
		this.service.getMovieByGenre(this.filterGenre).subscribe((data: any) => {
			this.updateMovieList(data);
		});
	}

}