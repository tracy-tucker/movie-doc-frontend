class Movie {
    constructor(movieJSON) {
        this.id = movieJSON.id
        this.title = movieJSON.title
        this.year = movieJSON.year
        this.rating = movieJSON.rating
        this.description = movieJSON.description
        this.genre_id = movieJSON.genre_id
    }

    renderLi() {
        return `<li>${this.title}</li>
        <li>${this.genre_id}</li>
        <ul>
            <li>${this.year}</li>
            <li>${this.rating}</li>
            <li>${this.description}</li>
        </ul>`
    }
}