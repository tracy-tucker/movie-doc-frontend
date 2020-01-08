class Movies {
    constructor() {
        this.movies = []
        this.adapter = new MoviesAdapter() //creates a new adapter
        this.initBindingAndEventListeners() //envokes this method
        this.createNewMovieButton() //calls the movie button function created below
        this.fetchAndLoadMovies()
    }

    initBindingAndEventListeners() {
        this.moviesContainer = document.getElementById('movies-container')
        this.movieFormDiv = document.getElementById('new-movie-form')
    }

    createNewMovieButton() {
        this.movieFormDiv.innerHTML = ''
        const new_movie_button = document.createElement('button')
        new_movie_button.id = 'new-movie-button'
        new_movie_button.innerText = 'Record a Movie'
        const linebreak = document.createElement('br')
        new_movie_button.appendChild(linebreak)
        this.movieFormDiv.append(new_movie_button)
        new_movie_button.addEventListener('click', this.adapter.renderNewMovieForm.bind(this.adapter))
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
