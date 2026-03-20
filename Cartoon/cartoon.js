createHeader("Cartoon", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Cartoon","Cartoons I have watched","Cartoons I am watching"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function Cartoon(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this cartoon and would recommend it to others."),
             new Rating("Good", "I like this cartoon and would recommend it to others."),
             new Rating("Average", "This cartoon is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this cartoon and would not recommend it to others."),];
var cartoonsIHaveWatched = [new Cartoon("Tom and Jerry", "Great"),
                    new Cartoon("Looney Tunes", "Great"),
                    new Cartoon("Family Guy", "Average"),
                    new Cartoon("Avatar: The Last Airbender", "Great"),
                    new Cartoon("SpongeBob SquarePants", "Good"),
                    ];
var cartoonsIamWatching = [new Cartoon("Johnny Test", "Great")];
appendParagraph(createId(body[0]),appendStrong("Tom and Jerry"));

for (var cartoon of cartoonsIHaveWatched) {
    appendParagraph(createId(body[1]), appendStrong(cartoon.name) + " - " + cartoon.rating);
}
for (var cartoon of cartoonsIamWatching) {
    appendParagraph(createId(body[2]), appendStrong(cartoon.name) + " - " + cartoon.rating);
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}
