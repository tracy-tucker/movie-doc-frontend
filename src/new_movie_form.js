function newMovieForm() {
    const movie_form_div = document.getElementById('new-movie-form')
    const movie_form = document.createElement('form') //creates the new form element
    movie_form.setAttribute("action", "") //sets action attribute on form
    movie_form.setAttribute("method", "POST") //set method attribute on form
    movie_form_div.appendChild(movie_form)

    const heading = document.createElement('h2') //heading for new movie form
    heading.innerHTML = "Record a New Movie"
    movie_form.appendChild(heading) //adds heading to the form

    const linebreak = document.createElement('br')
    movie_form.appendChild(linebreak)

    const titleLabel = document.createElement('label') //creates label for title field
    titleLabel.innerHTML = "Movie Title: " //sets the field label
    movie_form.appendChild(titleLabel)

    const inputTitle = document.createElement('input') //created input field for title
    inputTitle.setAttribute('type', 'text')
    inputTitle.setAttribute('title', 'dtitle')
    movie_form.appendChild(inputTitle)

    const linebreak = document.createElement('br')
    movie_form.appendChild(linebreak)

    const genreLabel = document.createElement('label') //creates label for genre field
    genreLabel.innerHTML = "Movie Genre: " //sets the field label
    movie_form.appendChild(genreLabel)

    const inputGenre = document.createElement('input') //created input field for genre
    inputGenre.setAttribute('type', 'number')
    inputGenre.setAttribute('genre', 'dgenre')
    movie_form.appendChild(inputGenre)

    const linebreak = document.createElement('br')
    movie_form.appendChild(linebreak)

    const yearLabel = document.createElement('label') //creates label for year field
    yearLabel.innerHTML = "Movie Year: " //sets the field label
    movie_form.appendChild(yearLabel)

    const inputYear = document.createElement('input') //created input field for year
    inputYear.setAttribute('type', 'text')
    inputYear.setAttribute('year', 'dyear')
    movie_form.appendChild(inputYear)

    const linebreak = document.createElement('br')
    movie_form.appendChild(linebreak)

    const ratingLabel = document.createElement('label') //creates label for rating field
    ratingLabel.innerHTML = "Movie Rating: " //sets the field label
    movie_form.appendChild(ratingLabel)

    const inputRating = document.createElement('input') //created input field for rating
    inputRating.setAttribute('type', 'text')
    inputRating.setAttribute('rating', 'drating')
    movie_form.appendChild(inputRating)

    const linebreak = document.createElement('br')
    movie_form.appendChild(linebreak)

    const descriptionLabel = document.createElement('label') //creates label for description field
    descriptionLabel.innerHTML = "Movie Description: " //sets the field label
    movie_form.appendChild(descriptionLabel)

    const inputDescription = document.createElement('input') //created input field for description
    inputDescription.setAttribute('type', 'textarea')
    inputDescription.setAttribute('description', 'ddescription')
    movie_form.appendChild(inputDescription)

    const linebreak = document.createElement('br')
    movie_form.appendChild(linebreak)

    const submitElement = document.createElement('input') //Append submit button
    submitElement.setAttribute('type', 'submit')
    submitElement.setAttribute('name', 'dsubmit')
    submitElement.setAttribute('value', 'Record Movie')
    movie_form.appendChild(submitElement)

}