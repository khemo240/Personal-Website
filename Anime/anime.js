createHeader("Anime", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Anime","Animes that I have watched","Anime I am Watching"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function Anime(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this anime and would recommend it to others."),
             new Rating("Good", "I like this anime and would recommend it to others."),
             new Rating("Average", "This anime is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this anime and would not recommend it to others."),];
var animeIHaveWatched = [new Anime("One Piece", "Great"),
                    new Anime("Naruto", "Great"),
                    new Anime("Bleach", "Good"),
                    new Anime("Attack on Titan", "Great"),
                    new Anime("Death Note", "Great"),
                    new Anime("Fullmetal Alchemist: Brotherhood", "Great"),
                    new Anime("My Hero Academia", "Great"),
                    new Anime("One Punch man", "Great"),
                    new Anime("Tokyo Ghoul", "Average"),
                    new Anime("Sword Art Online", "Good"),
                    new Anime("Fairy Tail", "Good"),
                    new Anime("Black Clover", "Great"),
                    new Anime("Seven Deadly Sins", "Great"),
                    new Anime("Gurren Lagann", "Great"),
                    new Anime("Mob Psycho 100", "Great"),
                    new Anime("hunter x hunter", "Great"),
                    new Anime("Code Geass", "Great"),
                    new Anime("jojo's bizarre adventure", "Great")];
var animeIamWatching = [new Anime("Classroom of the Elite", "Great")];
appendParagraph(createId(body[0]),appendStrong("Naruto"));

for (var anime of animeIHaveWatched) {
    appendParagraph(createId(body[1]), appendStrong(anime.name) + " - " + anime.rating);
}
for (var anime of animeIamWatching) {
    appendParagraph(createId(body[2]), appendStrong(anime.name) + " - " + anime.rating);
}

appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}