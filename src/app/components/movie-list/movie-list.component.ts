import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

    @Input() movieList: Movie[] = [];
    favoritesList: Movie[] = [];

    constructor(private service: MoviesService) { }

    ngOnInit(): void {
        this.favoritesList = this.service.getFavorites();
    }

    isFavorite(movie: Movie): boolean {
        let movieIsFavorite: boolean = false;
        for (let favorite of this.favoritesList) {
            if (favorite.id === movie.id) {
                movieIsFavorite = true;
                break;
            }
        }
        return movieIsFavorite;
    }

    addFavorite(movie: Movie): void {
        this.favoritesList.push(movie);
        this.service.setFavorites(this.favoritesList);
        console.log('this movie added to favoritesList:');
        console.log(movie.title);
        console.log('updated favoritesList:');
        console.log(this.favoritesList);
    }

    removeFavorite(movie: Movie): void {
        let index = this.favoritesList.findIndex((fav: Movie) => fav.id === movie.id);
        this.favoritesList.splice(index, 1);
        this.service.setFavorites(this.favoritesList);
        console.log('this movie removed from favoritesList:');
        console.log(movie.title);
        console.log('updated favoritesList:');
        console.log(this.favoritesList);
    }

}