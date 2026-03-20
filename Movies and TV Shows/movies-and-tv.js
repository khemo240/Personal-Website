createHeader("Movies and TV Shows", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Movies","Movies I have watched","Movies I am watching", "My Favorite TV Shows","TV Shows I have watched","TV Shows I am watching"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function MovieTV(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this movie/TV show and would recommend it to others."),
             new Rating("Good", "I like this movie/TV show and would recommend it to others."),
             new Rating("Average", "This movie/TV show is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this movie/TV show and would not recommend it to others."),];
var moviesIHaveWatched = [new MovieTV("The Shawshank Redemption", "Great"),
                    new MovieTV("The Godfather", "Great"),
                    new MovieTV("Pulp Fiction", "Great"),
                    new MovieTV("The Dark Knight", "Great"),
                    new MovieTV("The Avengers", "Good"),
                    new MovieTV("Inception", "Great")];
var moviesIamWatching = [new MovieTV("Dune", "Great")];
var tvShowsIHaveWatched = [new MovieTV("Breaking Bad", "Great"),
                    new MovieTV("Stranger Things", "Good"),
                    new MovieTV("Game of Thrones", "Great"),
                    new MovieTV("The Office", "Great")];
var tvShowsIamWatching = [new MovieTV("The Mandalorian", "Great")];
appendParagraph(createId(body[0]),appendStrong("The Shawshank Redemption"));
appendParagraph(createId(body[3]),appendStrong("Breaking Bad"));

for (var movie of moviesIHaveWatched) {
    appendParagraph(createId(body[1]), appendStrong(movie.name) + " - " + movie.rating);
}
for (var movie of moviesIamWatching) {
    appendParagraph(createId(body[2]), appendStrong(movie.name) + " - " + movie.rating);
}
for (var tv of tvShowsIHaveWatched) {
    appendParagraph(createId(body[4]), appendStrong(tv.name) + " - " + tv.rating);
}
for (var tv of tvShowsIamWatching) {
    appendParagraph(createId(body[5]), appendStrong(tv.name) + " - " + tv.rating);
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}
