createHeader("Travel", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Destinations","Places I have visited","Places I want to visit"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function Destination(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I loved this destination and would recommend it to others."),
             new Rating("Good", "I liked this destination and would recommend it to others."),
             new Rating("Average", "This destination is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I didn't like this destination and would not recommend it to others."),];
var placesIHaveVisited = [new Destination("Canada", "Great")];
var placesIWantToVisit = [new Destination("Japan", "Great"),];
appendParagraph(createId(body[0]),appendStrong("Canada"));

for (var place of placesIHaveVisited) {
    appendParagraph(createId(body[1]), appendStrong(place.name) + " - " + place.rating);
}
for (var place of placesIWantToVisit) {
    appendParagraph(createId(body[2]), appendStrong(place.name));
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}
