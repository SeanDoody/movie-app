import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
	selector: 'app-watch-list',
	templateUrl: './watch-list.component.html',
	styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

	favoritesList: Movie[] = [];

	constructor(private service: MoviesService) { }

	ngOnInit(): void {
		this.favoritesList = this.service.getFavorites();
		console.log(this.favoritesList);
	}

	removeMovie(movie: Movie) {
		let index = this.favoritesList.findIndex((fav: Movie) => fav.id === movie.id);
		this.favoritesList.splice(index, 1);
		this.service.setFavorites(this.favoritesList);
	}

}