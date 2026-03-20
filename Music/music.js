createHeader("Music", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Music","Music I have listened to","Music I am listening to"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function Music(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this music and would recommend it to others."),
             new Rating("Good", "I like this music and would recommend it to others."),
             new Rating("Average", "This music is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this music and would not recommend it to others."),];
var musicIHaveListened = [new Music("Every song by G-Eazy", "Great")];
var musicIamListening = [new Music("Helium - G-Eazy", "Great")];
appendParagraph(createId(body[0]),appendStrong("Every song by G-Eazy"));

for (var music of musicIHaveListened) {
    appendParagraph(createId(body[1]), appendStrong(music.name) + " - " + music.rating);
}
for (var music of musicIamListening) {
    appendParagraph(createId(body[2]), appendStrong(music.name) + " - " + music.rating);
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}
