//Communicates with the API
class MoviesAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/movies'
        this.initBindingAndEventListeners()
    }

    initBindingAndEventListeners() {
        this.movieFormDiv = document.getElementById('new-movie-form')
    }

    getMovies() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createMovies(jsonObject) {
        const movie = {
            body: jsonObject
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'appliction/json'
            },
            body: JSON.stringify(movie)
        })
    }

    renderNewMovieForm() {
        // const new_movie_button = document.getElementById('new-movie-button')
        // new_movie_button.parentNode.removeChild('new_movie_button') //Removes button once it has been clicked

        const movie_form = document.createElement('form') //creates new form element
        movie_form.id = 'new-movie-form'
        movie_form.setAttribute('action', '') //sets the action attribute on the form
        const form_group_div = document.createElement('div')
        form_group_div.setAttribute('method', 'POST') //sets method attribute on form
        form_group_div.setAttribute('class', 'form-group')
        form_group_div.appendChild(movie_form)
        this.movieFormDiv.appendChild(form_group_div)

        const heading = document.createElement('h2') //form heading
        heading.innerHTML = 'Record a New Movie'
        movie_form.appendChild(heading)

        const hardline = document.createElement('hr')
        movie_form.appendChild(hardline)

        const linebreak = document.createElement('br')
        movie_form.appendChild(linebreak)

        const titleLabel = document.createElement('label')
        titleLabel.innerHTML = 'Movie Title: '
        movie_form.appendChild(titleLabel)

        const inputTitle = document.createElement('input') //created input field for title
        inputTitle.setAttribute('type', 'text')
        inputTitle.setAttribute('title', 'dtitle')
        movie_form.appendChild(inputTitle)

        const titleBreak = document.createElement('br')
        movie_form.appendChild(titleBreak)


        movie_form.addEventListener("submit", (e) => {
			e.preventDefault()
			let form_data = new FormData(movie_form)
			let jsonObject = {}
			for (const [key, value] of form_data.entries()) {
				jsonObject[key] = value
			}
			this.createMovies(jsonObject)
		})

    }

}