createHeader("Budget", "../index.html");
createOutsideLinks(".");

var body=["Things I want to buy", "Things I am Paying for"];

for (var i in body){
    appendSection(createId(body[i]), body[i]);
}
function Budget(item, price) {
    this.item = item;
    this.price = price;
}

var thingsIWantToBuy=[new Budget("Netflix","7.99"),
            new Budget("crunchyroll","9.99"),
            new Budget("Masters","15,000")            

];
var thingsIamPayingFor=[new Budget("Spotify","9.99 per month"),
            new Budget("youtube premium","11.99 per month"),
        new Budget("Dance classes","2000 per week")]

for (var thing of thingsIWantToBuy) {
    appendParagraph(createId(body[0]), appendStrong(thing.item) + " - $" + thing.price);
}
for (var thing of thingsIamPayingFor) {
    appendParagraph(createId(body[1]), appendStrong(thing.item) + " - $" + thing.price);
}