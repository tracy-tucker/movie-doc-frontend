//Communicates with the API
class MoviesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/movies'
    }

    getMovies() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}