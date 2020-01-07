class Movies {
    constructor() {
        this.movies = []
        this.adapter = new MoviesAdapter() //creates a new adapter
        this.initBindingAndEventListeners() //envokes this method
        this.fetchAndLoadMovies()
    }

    initBindingAndEventListeners() {
        this.moviesContainer = document.getElementById('movies-container')
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
