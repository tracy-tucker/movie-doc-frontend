class Movies {
    constructor() {
        this.movies = [] //contains all movies
        this.adapter = new MoviesAdapter() //creates a new adapter
        this.initBindingAndEventListeners() //envokes this method
        this.fetchAndLoadMovies()
    }

    initBindingAndEventListeners() {
        this.moviesContainer = document.getElementById('movies-container')
        this.titleOptions = document.getElementById('title-options') //sorting by alpha title
        // this.genreOptions = document.getElementById('genre-options') //sorting by alpha genre
        // this.yearOptions = document.getElementById('year-options') //sorting by number year
        this.newMovieTitle = document.getElementById('new-movie-title')
        this.newMovieGenre = document.getElementById('new-movie-genre')
        this.newMovieYear = document.getElementById('new-movie-year')
        this.newMovieRating = document.getElementById('new-movie-rating')
        this.newMovieDescription = document.getElementById('new-movie-description')
        this.movieForm = document.getElementById('new-movie-form')
        // this.movieForm.addEventListener('select', this.populateGenres.bind(this)) //trying to add genre dropdown
        this.movieForm.addEventListener('submit', this.createMovie.bind(this)) //binding "this" to Movie, and not the movie-form
        this.moviesContainer.addEventListener('dblclick', this.handleMovieClick.bind(this))
        this.moviesContainer.addEventListener('blur', this.updateMovie.bind(this), true)
        this.moviesContainer.addEventListener('click', this.deleteMovie.bind(this), true)
        this.titleOptions.addEventListener('click', this.sortTitles.bind(this)) //sorting by alpha title
        // this.genreOptions.addEventListener('click', this.sortGenres.bind(this)) //sorting by alpha Genre
        // this.yearOptions.addEventListener('click', this.sortYears.bind(this)) //sorting by number year
    }

    // populateGenres() {
    //     for (let i = 0; i < this.newMovieGenre.value.length; i++) {
    //         let option = document.createElement('option')
    //         option.innerText = this.newMovieGenre[i].name
    //         popgenre.append(option)
    //     }
    // }

    // populateGenres(e) {
    //     const genre = {
    //         genre_attributes: {name: this.newMovieGenre.value}
    //     }

    //     this.adapter.populateGenres(genre).then(genre => {
    //         for (let i = 0; i < this.genre.length; i++) {
    //             let option = document.createElement('option')
    //             option.innerText = this.genre[i]
    //             this.newMovieGenre.options.appendChild(option)
    //         }
    //     })
    // }

    createMovie(e) {
        e.preventDefault()
        console.log(this)
        // When do we have access to the user's input?
        // Iterate over the form values
        // If empty string, display message to DOM
        const value = {
            title: this.newMovieTitle.value,
            genre_attributes: {name: this.newMovieGenre.value},
            year: this.newMovieYear.value,
            rating: this.newMovieRating.value,
            description: this.newMovieDescription.value
        }
        
        this.adapter.createMovie(value).then(movie => {
            this.movies.push(new Movie(movie.data)) //pushed new movie onto the array
            
            // this.newMovieTitle.value = '' //clears out input field after movie is recorded
            // this.newMovieGenre.value = ''
            // this.newMovieYear.value = ''
            // this.newMovieRating.value = ''
            // this.newMovieDescription.value = ''
            this.render() //shows new movie in browser
        })
    }

    handleMovieClick(e) {
        this.toggleMovie(e)
    }

    toggleMovie(e) {
        const li = e.target
        if (li.dataset.id) {
            li.contentEditable = true
        li.focus()
        li.classList.add('editable')
        }
    }

    updateMovie(e) {
        const li = e.target
        // console.log(li)
        li.contentEditable = false
        li.classList.remove('editable')
        const newValue = li.innerHTML
        const id = li.dataset.id
        const attr = li.dataset.attribute
        this.adapter.updateMovie({[attr]:newValue}, id)
    }

    deleteMovie(e) {
        e.preventDefault()
        const li = e.target
        if (li.attributes && li.attributes.class && li.attributes.class.value === 'removable') {
            const id = li.dataset.movieId
            this.adapter.deleteMovie(id)
            li.parentElement.remove()
        }
    }

    fetchAndLoadMovies() {
        this.adapter
        .getMovies() //gets movies from server
        .then(movies => {
            movies["data"].sort((a,b) => a.id- b.id).forEach(movie => this.movies.push(new Movie(movie))) //iterates over movies & pushes into empty movies array
        })
        .then(() => {
            this.render()
        })
    }

    sortTitles() {
        console.log(this.movies[0].title)
        // this.movies["data"].attributes.title.sort((a,b) => a - b)

        let t = this.movies
        
        for(let i = 0; i < t.length; i++) {
            t[i].title
                // function sort(a,b) {
                //     let y = y.replace(/^the /i, '')
                //     let z = z.replace(/^the /i, '')
                //     return y.t[i].title - z.t[i].title
                // }
        }
    
    }

    //call this method AFTER app grabs all movies
    render() {
        this.moviesContainer.innerHTML = this.movies.map(movie => movie.renderLi()).join(' ')
    }

}