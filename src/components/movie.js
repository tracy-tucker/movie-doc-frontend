class Movie {
    constructor(movieJSON) {
        this.id = movieJSON.id
        this.title = movieJSON.attributes.title
        this.year = movieJSON.attributes.year
        this.rating = movieJSON.attributes.rating
        this.description = movieJSON.attributes.description
        this.genre = movieJSON.attributes.genre
    }

    renderLi() {
        return `<ul>
            <li data-id=${this.id} data-attribute='title'>TITLE: ${this.title}</li>
            <li data-id=${this.id} data-attribute='genre'>GENRE: ${this.genre.name}</li>
            <ul>
                <li data-id=${this.id} data-attribute='year'>YEAR: ${this.year}</li>
                <li data-id=${this.id} data-attribute='rating'>RATING: ${this.rating}</li>
                <li data-id=${this.id} data-attribute='description'>DESCRIPTION: ${this.description}</li>
            </ul>
        </ul>`
    }
}