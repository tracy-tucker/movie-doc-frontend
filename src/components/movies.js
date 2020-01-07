class Movies {
    constructor() {
        this.movies = []
        this.adapter = new MoviesAdapter() //creates a new adapter
        //this.bindEventListeners() //envokes this method
        this.fetchAndLoadMovies()
    }

    fetchAndLoadMovies() {
        this.adapter
        .getMovies()
        .then(movies => {
            movies["data"].forEach(movie => this.movies.push(movie["attributes"]))
        })
        .then(() => {
            this.render()
        })
    }

    //call this method AFTER app grabs all movies
    render() {
        const moviesContainer = document.getElementById('movies-container')
        moviesContainer.innerHTML = 'my movies here'
        console.log('my movies are', this.movies)
    }
}
