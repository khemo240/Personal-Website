createHeader("Manga", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Manga","Manga that I have read","Manga I am reading"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function Manga(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this manga and would recommend it to others."),
             new Rating("Good", "I like this manga and would recommend it to others."),
             new Rating("Average", "This manga is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this manga and would not recommend it to others."),];
var mangaIHaveRead = [new Manga("Naruto", "Great"),
                    new Manga("Seven Deadly Sins", "Great"),];
var mangaIamReading = [new Manga("One Piece", "Great")];
appendParagraph(createId(body[0]),appendStrong("Naruto"));

for (var manga of mangaIHaveRead) {
    appendParagraph(createId(body[1]), appendStrong(manga.name) + " - " + manga.rating);
}
for (var manga of mangaIamReading) {
    appendParagraph(createId(body[2]), appendStrong(manga.name) + " - " + manga.rating);
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}