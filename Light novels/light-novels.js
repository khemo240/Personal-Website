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
var lightNovelsIHaveRead = [new LightNovel("Sword Art Online", "Great"),
                    new LightNovel("Re:Zero - Starting Life in Another World", "Great"),
                    new LightNovel("The Rising of the Shield Hero", "Good"),
                    new LightNovel("My Hero Academia: Vigilantes", "Great"),
                    new LightNovel("No Game No Life", "Great"),
                    new LightNovel("Overlord", "Good"),
                    new LightNovel("Konosuba: God's Blessing on This Wonderful World!", "Great"),
                    new LightNovel("That Time I Got Reincarnated as a Slime", "Great"),
                    new LightNovel("The Irregular at Magic High School", "Average"),
                    new LightNovel("A Certain Magical Index", "Good")];
var lightNovelsIamReading = [new LightNovel("Classroom of the Elite", "Great")];
appendParagraph(createId(body[0]),appendStrong("Sword Art Online"));

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
