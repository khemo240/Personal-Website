createHeader("Groceries", "../index.html");
createOutsideLinks(".");
var body=[ "Grocery List"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
var groceriesList=["Milk","Bread","Bananas","Chicken","Rice","Tomatoes","Cheese"];
for (var item of groceriesList){
    appendParagraph(createId("Grocery List"), "- " + item);
}
