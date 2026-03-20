createHeader("Comics", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Comic","Comics I have read","Comics I am reading"];
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
var comicsIHaveRead = [];
var comicsIamReading = [];
appendParagraph(createId(body[0]),appendStrong(""));

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
