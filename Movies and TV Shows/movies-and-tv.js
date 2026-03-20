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
var moviesIHaveWatched = [new MovieTV("The Dark Knight", "Great"),
                    new MovieTV("The Avengers", "Good"),
                    new MovieTV("Inception", "Great"),
                    new MovieTV("The Matrix", "Great"),
                new MovieTV("definitely, maybe", "Great")];
var moviesIamWatching = [new MovieTV("Definitely, Maybe", "Great")];
var tvShowsIHaveWatched = [new MovieTV("Game of Thrones", "Great"),
                    ];
var tvShowsIamWatching = [new MovieTV("Blacklist", "Great")];
appendParagraph(createId(body[0]),appendStrong("Definitely, Maybe"));
appendParagraph(createId(body[3]),appendStrong("Vampire Diaries"));

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
