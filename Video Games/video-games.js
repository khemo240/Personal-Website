createHeader("Video Games", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Video Games","Video Games I have played","Video Games I am playing"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function VideoGame(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this game and would recommend it to others."),
             new Rating("Good", "I like this game and would recommend it to others."),
             new Rating("Average", "This game is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this game and would not recommend it to others."),];
var gamesIHavePlayed = [new VideoGame("Call of Duty: Modern Warfare", "Good")];
var gamesIamPlaying = [new VideoGame("Pokemon Go", "Good")];
appendParagraph(createId(body[0]),appendStrong("Overwatch"));

for (var game of gamesIHavePlayed) {
    appendParagraph(createId(body[1]), appendStrong(game.name) + " - " + game.rating);
}
for (var game of gamesIamPlaying) {
    appendParagraph(createId(body[2]), appendStrong(game.name) + " - " + game.rating);
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}
