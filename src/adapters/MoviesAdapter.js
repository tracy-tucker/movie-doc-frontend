//Communicates with the API
class MoviesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/movies'
        // this.initBindingAndEventListeners()
    }

    getMovies() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createMovie(value) {
        const movie = {
            movie: value
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }).then(res => res.json())
    }

    updateMovie(value, id) {
        const movie = {
            movie: value
        }
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
    }

    deleteMovie(id) {
        fetch(`${this.baseUrl}/${id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        // .then(resp => {return resp})
    }

}