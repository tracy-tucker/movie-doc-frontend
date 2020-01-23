movie-doc-frontend is the JavaScript frontend for the JS Portfolio Project

## Backend Repo: movie-doc-api

[https://github.com/treuther/movie-doc-api](https://github.com/treuther/movie-doc-api)

## Description

Movie Doc App is a single page application(SPA) that allows a user to record every movie they've ever watched. The user can track the title, genre, title of release, parental guidance rating and a description. This SPA is written with HTML, CSS and Object Oriented JavaScript for the frontend and a Rails API backend. Both are utilized to create the client-server relationship.

## Installation Instructions

Fork and clone the repo to your local machine.

Change directory into movie-doc-api and run:

* bundle install

Setup and seed the database:

* rails db:create
* rails db:migrate
* rails db:seed

If you are using POSTGRESSQL:

* service postgresql start

Run the Rails server:

* rails s

Navigate to the movie-doc-frontend in your local machine file directory.

Open the index.html file in the Chrome browser.

## Usage

* Complete the Movie Doc app form to input a new movie
* When finished, click on the *Record Movie* button
* Scroll down to see your full list of movies
* Double-click on a line item to edit your movie details - click away from the line item to save
* Click the *delete* button if you wish to delete the record
* Use the sorting options at the top to filter your search by title, genre or year

