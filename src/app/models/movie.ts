export interface Movie {
    title: string;
    overview: string;
    posterPath: string;
    rating: number;
    releaseDate: number;
    voteAverage: number;
    id: number;
    genreIds: number[];
    genres: {
        id: number,
        name: string,
    }[];
    runtime: number;
    tagline: string;
    backdropPath: string;
}