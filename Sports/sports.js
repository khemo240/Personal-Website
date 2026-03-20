createHeader("Sports", "../index.html");
createOutsideLinks(".");
var body=["My Favorite Sport","My Favorite Team","My Favorite Player"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
appendParagraph(createId(body[0]),appendStrong("Basketball"));
appendParagraph(createId(body[1]),appendStrong("Spurs"));
appendParagraph(createId(body[2]),appendStrong("Steph Curry"));