class Movies {
    constructor() {
        this.movies = []
        this.adapter = new MoviesAdapter() //creates a new adapter
        this.initBindingAndEventListeners() //envokes this method
        this.fetchAndLoadMovies()
    }

    initBindingAndEventListeners() {
        this.moviesContainer = document.getElementById('movies-container')
        this.movieForm = document.getElementById('new-movie-form')
        this.movieForm.addEventListener('submit', this.createMovie.bind(this))
    }

    createMovie(e) {
        console.log(this)
        e.preventDefault()
        console.log(this.newMovieTitle.value)
    }

    fetchAndLoadMovies() {
        this.adapter
        .getMovies()
        .then(movies => {
            movies["data"].forEach(movie => this.movies.push(new Movie(movie["attributes"])))
        })
        .then(() => {
            this.render()
        })
    }

    //call this method AFTER app grabs all movies
    render() {
        this.moviesContainer.innerHTML = this.movies.map(movie => movie.renderLi()).join(' ')
    }
}
