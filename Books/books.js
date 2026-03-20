createHeader("Books", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Books","Books I have read","Books I am reading"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function Book(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this book and would recommend it to others."),
             new Rating("Good", "I like this book and would recommend it to others."),
             new Rating("Average", "This book is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this book and would not recommend it to others."),];
var booksIHaveRead = [new Book("Animal Farm", "Good"),
                    new Book("Free Agent Lifestyle", "Great"),
];
var booksIamReading = [new Book("12 Rules for Life", "Great")];
appendParagraph(createId(body[0]),appendStrong("Free Agent Lifestyle"));

for (var book of booksIHaveRead) {
    appendParagraph(createId(body[1]), appendStrong(book.name) + " - " + book.rating);
}
for (var book of booksIamReading) {
    appendParagraph(createId(body[2]), appendStrong(book.name) + " - " + book.rating);
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}