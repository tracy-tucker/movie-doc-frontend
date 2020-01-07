class Movies {
    constructor() {
        this.movies = []
        this.adapter = new MoviesAdapter() //creates a new adapter
        this.bindEventListeners() //envokes this method
    }
}
