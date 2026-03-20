createHeader("Groceries", "../index.html");
createOutsideLinks(".");
var body=["Groceries", "Weekly Grocery List"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
var groceriesList=["Milk","Eggs","Bread","Bananas","Chicken","Rice","Tomatoes","Cheese"];
for (var item of groceriesList){
    appendParagraph(createId("Weekly Grocery List"), "- " + item);
}
appendSection(createId("ratings"), "Ratings");
appendParagraph(createId("ratings"), appendStrong("Great") + " - Any food that becomes a staple.");