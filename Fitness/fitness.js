createHeader("Fitness", "../index.html");
createOutsideLinks(".");
var body=["Workouts I Do", "Workout Video"];
for (var i in body) {
    appendSection(createId(body[i]), body[i]);
}
appendParagraph(createId("Workouts I Do"), "These are the workouts I do from the video:");
var workouts=["Single Forearm Plank (1:23): Hold this position for 20-30 seconds. A knee plank modification is available for beginners (1:33).",
"Basic Sit-up (1:47): Perform three sets of ten. Keep hands on the chest or temples, avoiding putting them behind the head (1:53).",
"Knee-High Crunches (2:09): Lay on the floor, raise your legs, and aim to touch your knees with your elbows while squeezing your stomach (2:13).",
"Basic Crunch (2:23): Contract your abs to bring your shoulder blades off the floor (2:33).",
"Sit-up and Twist (2:59): Perform a standard sit-up, but rotate your body at the top, alternating sides (3:03).",
"Dorsal Raises (Superman)"];
for (var w of workouts) {
    appendParagraph(createId("Workouts I Do"), "- " + w);
}
appendParagraph(createId("Workout Video"), "Video: ");
// Add the link inside the Workout Video section.
appendParagraph(createId("Workout Video"), "<a href='https://www.youtube.com/watch?v=H3jJ29oE8Zg&list=WL&index=89&t=219s' target='_blank'>YouTube workout video</a>");
appendParagraph(createId("Workout Video"), "(Full routine from video)");
