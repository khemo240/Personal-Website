function appendParagraph(sectionId, content) {
    $("#" + sectionId).append("<p>" + content + "</p>");
}
function appendAnchor(section, link, text) {
    var sanitizedLink = (link || "").trim();
    var isExternal = /^(https?:\/\/)/i.test(sanitizedLink);
    var isHash = sanitizedLink.includes("#");
    var a;
    if (isHash || !isExternal) {
        a = "<a href='" + sanitizedLink + "'>" + text + "</a>";
    } else {
        a = "<a href='" + sanitizedLink + "' target='_blank'>" + text + "</a>";
    }
    if (section) {
        $(section).append(a);
    }
    return a;
}
function appendUnorderdList(sectionId, items) {
    var ul = $("<ul></ul>");
    for (var item of items) {
        ul.append("<li>" + item + "</li>");
    }
    $("#" + sectionId).append(ul);
}
function appendFrame(sectionId, src) {
    $("#" + sectionId).append("<iframe src='" + src + "' width='100%' height='232' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>");
}
function appendStrong(sectionId, text) {
    // If only one argument is passed, return a <strong> string for concatenation.
    if (text === undefined) {
        return "<strong>" + sectionId + "</strong>";
    }
    $("#" + sectionId).append("<strong>" + text + "</strong>");
}
function createId(text) {
    if (!text) {
        return "";
    }
    return text
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

function appendSection(section, heading) {
    $("main").append("<section id='" + section + "'><h2>" + heading + "</h2></section>");
}
