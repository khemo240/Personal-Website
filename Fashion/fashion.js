createHeader("Fashion", "../index.html");
createOutsideLinks(".");
var body=["Shoe size","Pants size","Shirt size"];
for( var i in body){
    appendSection(createId(body[i]), appendStrong(body[i]));
}
appendParagraph(createId(body[0]), "My shoe size is 12");
appendParagraph(createId(body[1]), "My pants size is 36");
appendParagraph(createId(body[2]), "My shirt size is Large");