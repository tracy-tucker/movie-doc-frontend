//Communicates with the API
class MoviesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/movies'
        // this.initBindingAndEventListeners()
    }

    // initBindingAndEventListeners() {
    //     this.movieFormDiv = document.getElementById('new-movie-form')
    // }

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
        })
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

    // createMovies(jsonObject) {
    //     const movie = {
    //         title: jsonObject.title,
    //         genre_id: jsonObject.genre_id,
    //         year: jsonObject.year,
    //         rating: jsonObject.rating,
    //         description: jsonObject.description
    //     }
    //     return fetch(this.baseUrl,{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(movie)
    //     })
    //     .then(res => res.json())
    // }

    // renderNewMovieForm() {
        // const new_movie_button = document.getElementById('new-movie-button')
        // new_movie_button.parentNode.removeChild('new_movie_button') //Removes button once it has been clicked

    //     const movie_form = document.createElement('form') //creates new form element
    //     movie_form.id = 'new-movie-form'
    //     movie_form.setAttribute('action', '') //sets the action attribute on the form
    //     const form_group_div = document.createElement('div')
    //     form_group_div.setAttribute('method', 'POST') //sets method attribute on form
    //     form_group_div.setAttribute('class', 'form-group')
    //     form_group_div.appendChild(movie_form)
    //     this.movieFormDiv.appendChild(form_group_div)

    //     const heading = document.createElement('h2') //form heading
    //     heading.innerHTML = 'Record a New Movie'
    //     movie_form.appendChild(heading)

    //     const hardline = document.createElement('hr')
    //     movie_form.appendChild(hardline)

    //     const linebreak = document.createElement('br')
    //     movie_form.appendChild(linebreak)

    //     const titleLabel = document.createElement('label')
    //     titleLabel.innerHTML = 'Movie Title: '
    //     movie_form.appendChild(titleLabel)

    //     const inputTitle = document.createElement('input') //created input field for title
    //     inputTitle.setAttribute('type', 'text')
    //     inputTitle.setAttribute('title', 'dtitle')
    //     movie_form.appendChild(inputTitle)

    //     const titleBreak = document.createElement('br')
    //     movie_form.appendChild(titleBreak)

    //     const genreLabel = document.createElement('label') //creates label for genre field
    //     genreLabel.innerHTML = "Movie Genre: " //sets the field label
    //     movie_form.appendChild(genreLabel)

    //     const inputGenre = document.createElement('input') //created input field for genre
    //     inputGenre.setAttribute('type', 'number')
    //     inputGenre.setAttribute('genre', 'dgenre')
    //     movie_form.appendChild(inputGenre)

    //     const genreBreak = document.createElement('br')
    //     movie_form.appendChild(genreBreak)

    //     const yearLabel = document.createElement('label') //creates label for year field
    //     yearLabel.innerHTML = "Movie Year: " //sets the field label
    //     movie_form.appendChild(yearLabel)

    //     const inputYear = document.createElement('input') //created input field for year
    //     inputYear.setAttribute('type', 'text')
    //     inputYear.setAttribute('year', 'dyear')
    //     movie_form.appendChild(inputYear)

    //     const yearBreak = document.createElement('br')
    //     movie_form.appendChild(yearBreak)

    //     const ratingLabel = document.createElement('label') //creates label for rating field
    //     ratingLabel.innerHTML = "Movie Rating: " //sets the field label
    //     movie_form.appendChild(ratingLabel)

    //     const inputRating = document.createElement('input') //created input field for rating
    //     inputRating.setAttribute('type', 'text')
    //     inputRating.setAttribute('rating', 'drating')
    //     movie_form.appendChild(inputRating)

    //     const ratingBreak = document.createElement('br')
    //     movie_form.appendChild(ratingBreak)

    //     const descriptionLabel = document.createElement('label') //creates label for description field
    //     descriptionLabel.innerHTML = "Movie Description: " //sets the field label
    //     movie_form.appendChild(descriptionLabel)

    //     const inputDescription = document.createElement('input') //created input field for description
    //     inputDescription.setAttribute('type', 'textarea')
    //     inputDescription.setAttribute('description', 'ddescription')
    //     movie_form.appendChild(inputDescription)

    //     const descBreak = document.createElement('br')
    //     movie_form.appendChild(descBreak)

    //     const submitElement = document.createElement('input') //Append submit button
    //     submitElement.setAttribute('type', 'submit')
    //     submitElement.setAttribute('name', 'dsubmit')
    //     submitElement.setAttribute('value', 'Record Movie')
    //     movie_form.appendChild(submitElement)


    //     movie_form.addEventListener("submit", (e) => {
    //         e.preventDefault()
    //         // const [title, genre_id, year, rating, description] = e.target
    //         // const movieObject = {
    //         //     title: title.value,
    //         //     genre_id: genre_id.value,
    //         //     year: year.value,
    //         //     rating: rating.value,
    //         //     description: description.value
    //         // }
	// 		let form_data = new FormData(movie_form)
	// 		let jsonObject = {}
	// 		for (const [key, value] of form_data.entries()) {
	// 			jsonObject[key] = value
	// 		}
	// 		this.createMovies(jsonObject)
	// 	})

    // }

}