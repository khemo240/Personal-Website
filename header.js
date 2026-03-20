
function WebsiteBody(headers, titleHeading){
    this.headers=headers;
    this.titleHeading=titleHeading;
}
function outsideLinks(name, link){
    this.name=name;
    this.link=link;
}
var outsideLinksArray=[new outsideLinks("Anime","./Anime/anime.html"),
     new outsideLinks("Manga","./Manga/manga.html"),
      new outsideLinks("Video Games","./Video Games/video-games.html"),
       new outsideLinks("Music","./Music/music.html"),
        new outsideLinks("Movies and TV Shows","./Movies and TV Shows/movies-and-tv.html"),
         new outsideLinks("Books","./Books/books.html"),
          new outsideLinks("Sports","./Sports/sports.html"),
           new outsideLinks("Fitness","./Fitness/fitness.html"),
            new outsideLinks("Food","./Food/food.html"),
             new outsideLinks("Travel","./Travel/travel.html"),
             new outsideLinks("Groceries","./Groceries/groceries.html"), 
             new outsideLinks("Budget","./Budget/budget.html"),
              new outsideLinks("Cars","./Cars/cars.html"),
              new outsideLinks("Light novels","./Light novels/light-novels.html"),
            new outsideLinks("Comics","./Comics/comics.html"),
            new outsideLinks("Cartoon","./Cartoon/cartoon.html"),
            new outsideLinks("Podcasts","./Podcasts/podcasts.html"),
            new outsideLinks("Fashion","./Fashion/fashion.html")];
var websiteBody= new WebsiteBody(
 [ "About","Education","Experience","Skills","Awards","Certifications","Volunteering","Podcast","YouTube","GitHub","Reference","Contact"],
 ["About Me","Education","Work Experience","Skills","Awards","Certifications","Volunteering","My Podcast","YouTube","GitHub","Reference"]
);

function createHeader(titleHeading,index){
    index = (index || "").trim();
    var pageTitle = (index === "" ? "Portfolio" : titleHeading);
    $("title").text("Collin Smith-Brooks | " + pageTitle);
    $("h1").text(titleHeading);
    for (var heading of websiteBody.headers) {
        var href;
        if (heading.toLowerCase() === "contact") {
            href = "#contact";
        } else {
            href = index + "#" + heading.toLowerCase();
        }
        appendAnchor("nav", href, heading);
    }
}

function createOutsideLinks(extradot){
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    for (var i of outsideLinksArray){
        var linkPath = i.link.split('/').pop();
        var linkHtml = "<a href='" + extradot + i.link + "'" + (linkPath === currentPage ? " class='active'" : "") + ">" + i.name + "</a>";
        console.log(linkHtml);
        $("nav").append(linkHtml);
    }
}

