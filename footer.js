function Contact(contactName,link){
    this.contactName=contactName;
    this.link=link;
}

var contacts=[new Contact("Collin.smith240@gmail.com","mailto:collin.smith240@gmail.com"),
    new Contact("Linkedin","https://www.linkedin.com/in/collin-smith-brooks-asc-bsc-035612166/"),
    new Contact("Podcast","https://creators.spotify.com/pod/profile/cssb"),
new Contact("Youtube","https://www.youtube.com/channel/UC69NN_C7y_wLDJkCQH_FtBA"),
new Contact("Github","https://github.com/khemo240"),
new Contact("X","https://x.com/khemo240"),
new Contact("Threads","https://www.threads.com/@khemo__"),
new Contact("Snapchat","https://www.snapchat.com/@khemo240"),
new Contact("whatsapp","https://wa.me/18763100259")]

$("body").append("<footer id='contact'><p>" + appendStrong("Contact: ") + "</p></footer>");
for (var index = 0; index < contacts.length; index++){
    var i = contacts[index];
    appendAnchor("#contact p", i.link, i.contactName);
    if (index < contacts.length - 1) {
        $("#contact p").append(" | ");
    }
}