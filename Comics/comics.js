createHeader("Comics", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Comics","Comics I have read","Comics I am reading"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function Comic(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this comic and would recommend it to others."),
             new Rating("Good", "I like this comic and would recommend it to others."),
             new Rating("Average", "This comic is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this comic and would not recommend it to others."),];
var comicsIHaveRead = [new Comic("Spider-Man", "Great"),
                    new Comic("Batman: The Dark Knight Returns", "Great"),
                    new Comic("Watchmen", "Great"),
                    new Comic("The Avengers", "Good"),
                    new Comic("X-Men", "Great"),
                    new Comic("Superman", "Good"),
                    new Comic("Iron Man", "Great"),
                    new Comic("Wonder Woman", "Great"),
                    new Comic("The Flash", "Average"),
                    new Comic("Green Lantern", "Good")];
var comicsIamReading = [new Comic("The Amazing Spider-Man", "Great")];
appendParagraph(createId(body[0]),appendStrong("Spider-Man"));

for (var comic of comicsIHaveRead) {
    appendParagraph(createId(body[1]), appendStrong(comic.name) + " - " + comic.rating);
}
for (var comic of comicsIamReading) {
    appendParagraph(createId(body[2]), appendStrong(comic.name) + " - " + comic.rating);
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}
