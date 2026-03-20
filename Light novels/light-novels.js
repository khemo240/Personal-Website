createHeader("Light novels", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Light Novels","Light Novels I have read","Light Novels I am reading"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function LightNovel(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this light novel and would recommend it to others."),
             new Rating("Good", "I like this light novel and would recommend it to others."),
             new Rating("Average", "This light novel is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this light novel and would not recommend it to others."),];
var lightNovelsIHaveRead = [];
var lightNovelsIamReading = [new LightNovel("Classroom of the Elite", "Great")];
appendParagraph(createId(body[0]),appendStrong("Classroom of the Elite"));

for (var ln of lightNovelsIHaveRead) {
    appendParagraph(createId(body[1]), appendStrong(ln.name) + " - " + ln.rating);
}
for (var ln of lightNovelsIamReading) {
    appendParagraph(createId(body[2]), appendStrong(ln.name) + " - " + ln.rating);
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}
