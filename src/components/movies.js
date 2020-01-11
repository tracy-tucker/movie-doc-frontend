class Movies {
    constructor() {
        this.movies = [] //contains all movies
        this.adapter = new MoviesAdapter() //creates a new adapter
        this.initBindingAndEventListeners() //envokes this method
        // this.createNewMovieButton() //calls the movie button function created below
        this.fetchAndLoadMovies()
    }

    initBindingAndEventListeners() {
        this.moviesContainer = document.getElementById('movies-container')
        this.movieContainer = document.querySelector('title') //THIS NEEDS TO BE FOR ALL PROPERTIES NOT WORKING
        this.newMovieTitle = document.getElementById('new-movie-title')
        this.newMovieGenre = document.getElementById('new-movie-genre')
        this.newMovieYear = document.getElementById('new-movie-year')
        this.newMovieRating = document.getElementById('new-movie-rating')
        this.newMovieTDescription = document.getElementById('new-movie-description')
        this.movieForm = document.getElementById('new-movie-form')
        this.movieForm.addEventListener('submit', this.createMovie.bind(this)) //binding "this" to Movie, and not the movie-form
        this.moviesContainer.addEventListener('dblclick', this.handleMovieClick.bind(this))
        this.movieContainer.addEventListener('blur', this.updateMovie.bind(this), true) //NOT WORKING
    }

    createMovie(e) {
        e.preventDefault()
        const value = this.newMovieTitle.value
        //THIS IS WHAT I'M TRYING TO DO IN ORDER TO HAVE ALL PROPERTIES FOR MOVIE
        // const value = {
        //     title = this.newMovieTitle.value,
        //     genre = this.newMovieGenre.value,
        //     year = this.newMovieYear.value,
        //     rating = this.newMovieRating.value,
        //     description = this.newMovieDescription.value
        // }

        this.adapter.createMovie(value).then(movie => {
            this.movies.push(new Movie(movie)) //pushed new movie onto the array
            this.newMovieTitle.value = '' //THIS NEEDS TO BE ALL PROPERTIES SOMEHOW!!
            this.render() //shows new movie in browser
        })
    }

    handleMovieClick(e) {
        this.toggleMovie(e)
    }

    toggleMovie(e) {
        const li = e.target
        li.contentEditable = true
        li.focus()
        li.classList.add('editable')
    }

    updateMovie(e) {
        const li = e.target
        li.contentEditable = false
        li.classList.remove('editable') //NOT WORKING
        const newValue = li.innerHTML
        const id = li.dataset.id
        this.adapter.updateMovie(newValue, id)
    }

    // createNewMovieButton() {
    //     this.movieFormDiv.innerHTML = ''
    //     const new_movie_button = document.createElement('button')
    //     new_movie_button.id = 'new-movie-button'
    //     new_movie_button.innerText = 'Record a Movie'
    //     const linebreak = document.createElement('br')
    //     new_movie_button.appendChild(linebreak)
    //     this.movieFormDiv.append(new_movie_button)
    //     new_movie_button.addEventListener('click', this.adapter.renderNewMovieForm.bind(this.adapter))
    // }

    fetchAndLoadMovies() {
        this.adapter
        .getMovies() //gets movies from server
        .then(movies => {
            movies["data"].sort((a, b) => a.id - b.id).forEach(movie => this.movies.push(new Movie(movie["attributes"]))) //iterates over movies & pushes into empty movies array
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
