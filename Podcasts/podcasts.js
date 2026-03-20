createHeader("Podcasts", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Podcasts","Podcasts I have listened to","Podcasts I am listening to"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function Podcast(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this podcast and would recommend it to others."),
             new Rating("Good", "I like this podcast and would recommend it to others."),
             new Rating("Average", "This podcast is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this podcast and would not recommend it to others."),];
var podcastsIHaveListened = [
                    new Podcast("The Joe Rogan Experience", "Great"),
                    ];
var podcastsIamListening = [new Podcast("Talkville", "Great")];
appendParagraph(createId(body[0]),appendStrong("Grace"));

for (var podcast of podcastsIHaveListened) {
    appendParagraph(createId(body[1]), appendStrong(podcast.name) + " - " + podcast.rating);
}
for (var podcast of podcastsIamListening) {
    appendParagraph(createId(body[2]), appendStrong(podcast.name) + " - " + podcast.rating);
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}
