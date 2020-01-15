class Movie {
    constructor(movieJSON) {
        this.id = movieJSON.id
        this.title = movieJSON.attributes.title
        this.year = movieJSON.attributes.year
        this.rating = movieJSON.attributes.rating
        this.description = movieJSON.attributes.description
        this.genre_id = movieJSON.attributes.genre_id
    }

    renderLi() {
        return `<ul>
            <li data-id=${this.id} data-attribute='title'>${this.title}</li>
            <li data-id=${this.id} data-attribute='genre_id'>${this.genre_id}</li>
            <ul>
                <li data-id=${this.id} data-attribute='year'>${this.year}</li>
                <li data-id=${this.id} data-attribute='rating'>${this.rating}</li>
                <li data-id=${this.id} data-attribute='description'>${this.description}</li>
            </ul>
        </ul>`
    }
}