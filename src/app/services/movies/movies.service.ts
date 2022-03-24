import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    apiKey: string = '5bb66be09b904cd9c1f452f029594012';
    favoriteMovies: Movie[] = [];

    constructor(private http: HttpClient) { }

    getNewMovies(): any {
        return this.http.get('https://api.themoviedb.org/3/movie/now_playing?', {
            params: { api_key: this.apiKey },
        });
    }

    getAllGenres(): any {
        return this.http.get('https://api.themoviedb.org/3/genre/movie/list?', {
            params: { api_key: this.apiKey },
        });
    }

    getMovieByQuery(searchQuery: string): any {
        return this.http.get('https://api.themoviedb.org/3/search/movie?', {
            params: { query: searchQuery, api_key: this.apiKey },
        });
    }

    getMovieByYear(year: string): any {
        return this.http.get('https://api.themoviedb.org/3/discover/movie?', {
            params: { api_key: this.apiKey, primary_release_year: year }
        });
    }

    getMovieByRating(rating: string): any {
        return this.http.get('https://api.themoviedb.org/3/discover/movie?', {
            params: { api_key: this.apiKey, 'vote_average.gte': rating }
        });
    }

    getMovieByGenre(filterGenre: string): any {
        return this.http.get('https://api.themoviedb.org/3/discover/movie?', {
            params: { api_key: this.apiKey, 'with_genres': filterGenre }
        });
    }

    getMovieById(id: number): any {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: { api_key: this.apiKey }
        });
    }

    getFavorites(): Movie[] {
        return this.favoriteMovies;
    }

    setFavorites(movieArray: Movie[]): void {
        this.favoriteMovies = movieArray;
    }

}