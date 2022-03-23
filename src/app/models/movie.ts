import { Genre } from './genre';

export interface Movie {
    title: string;
    overview: string;
    posterPath: string;
    rating: number;
    releaseDate: number;
    voteAverage: number;
    id: number;
    genreIds: number[];
    genres: Genre[];
    runtime: number;
    tagline: string;
    backdropPath: string;
}