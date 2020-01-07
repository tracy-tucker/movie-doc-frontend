class Movie {
    constructor(movieJSON) {
        this.id = movieJSON.id
        this.title = movieJSON.title
        this.year = movieJSON.year
        this.rating = movieJSON.rating
        this.description = movieJSON.description
    }
}