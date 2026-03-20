createHeader("Food", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Foods","Foods I eat","Foods I want to try"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
function Food(name,rating){
    this.name = name;
    this.rating = rating;
}

function Rating(name, meaning){
    this.name = name;
    this.meaning = meaning;
}
var Ratings=[new Rating("Great", "I really like this food and would recommend it to others."),
             new Rating("Good", "I like this food and would recommend it to others."),
             new Rating("Average", "This food is okay, but I wouldn't necessarily recommend it to others."),
             new Rating("Bad", "I don't like this food and would not recommend it to others."),];
var foodsIEat = [new Food("Pizza", "Great"),
                    new Food("Pasta", "Great"),
                    new Food("Sushi", "Good"),
                    new Food("Tacos", "Great"),
                    new Food("Burgers", "Good"),
                    new Food("Chicken", "Great"),
                    new Food("Rice", "Average"),
                    new Food("Salmon", "Great"),
                    new Food("Steak", "Great"),
                    new Food("Salad", "Good")];
var foodsIWantToTry = [new Food("Korean BBQ", "Great"), new Food("Thai Curry", "Great")];
appendParagraph(createId(body[0]),appendStrong("Pizza"));

for (var food of foodsIEat) {
    appendParagraph(createId(body[1]), appendStrong(food.name) + " - " + food.rating);
}
for (var food of foodsIWantToTry) {
    appendParagraph(createId(body[2]), appendStrong(food.name) + " - " + food.rating);
}
appendSection(createId("ratings"), "Ratings");
for (var rating of Ratings) {
    appendParagraph(createId("ratings"), appendStrong(rating.name) + " - " + rating.meaning);
}
