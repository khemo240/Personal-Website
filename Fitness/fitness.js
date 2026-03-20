createHeader("Fitness", "../index.html");
createOutsideLinks(".");
var body=["Workouts I Do", "Workout Video"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
appendParagraph(createId("Workouts I Do"), "These are the workouts I do:");
var workouts=["Single Forearm Plank",
"Basic Sit-up",
"Knee-High Crunches",
"Basic Crunch",
"Sit-up and Twist",
"Dorsal Raises (Superman)"];
for (var w of workouts) {
    appendParagraph(createId("Workouts I Do"), "- " + w);
}
appendParagraph(createId("Workout Video"), "Video: ");
// Add the link inside the Workout Video section.
appendParagraph(createId("Workout Video"), "<a href='https://www.youtube.com/watch?v=H3jJ29oE8Zg&list=WL&index=89&t=219s' target='_blank'>YouTube workout video</a>");
appendParagraph(createId("Workout Video"), "(Full routine from video)");
