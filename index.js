
//Adds New education
function Education(institutionName, degreeAwarded, startYear,endYear, relevantCourse) {
   this.institutionName=institutionName;
   this.degreeAwarded=degreeAwarded;
   this.startYear=startYear;
   this.endYear=endYear;
    this.relevantCourse=relevantCourse;
}
//Create a relevant course
function RelevantCourse(courseName, grade){
    this.courseName=courseName;
    this.grade=grade
}

function WorkExperience(role, companyName,address,startDate,endDate, roleDescription, workType ){
    this.role=role;
    this.companyName=companyName;
    this.address=address;
    this.startDate=startDate;
    this.endDate=endDate;
    this.roleDescription=roleDescription;
    this.workType=workType;
}

function Skill(skillName, Associatedwith){
    this.skillName=skillName;
    this.Associatedwith=Associatedwith;
}
function Award(awardName,yearofIssue) {
    this.awardName=awardName;
    this.yearofIssue=yearofIssue;
}
function Certification(certificationName,issuingCompany,issueDate,expirationDate){
    this.certificationName=certificationName;
    this.issuingCompany=issuingCompany;
    this.issueDate=issueDate;
    this.expirationDate=expirationDate;
}
function Volunteer(organization,role,cause,startDate,endeDate){
    this.organization=organization;
    this.role=role;
    this.cause=cause;
    this.startDate=startDate;
    this.endDate=endeDate;
}
function Reference(name,company, number){
    this.name=name;
    this.company=company;
    this.number=number;
    
}


function Profile(name,experinceName,intro,aboutMe,education,workExperience,skills,awards,certifications,volunteer,relevantLinks,reference){
    this.name=name;
    this.experinceName=experinceName;
    this.intro=intro;
    this.aboutMe=aboutMe;
    this.education=education;
    this.workExperience=workExperience;
    this.skills=skills;
    this.awards=awards;
    this.certifications=certifications;
    this.volunteer=volunteer;
    this.relevantLinks=relevantLinks;
    this.reference=reference;
}
function RelevantLink(name,link){
    this.name=name;
    this.link=link;
}
var profile= new Profile("Collin Smith-Brooks",["Biochemist","Aviation Professional","Podcaster","Web Developer"],["science","aviation","customer service","web development","media"],"I am a Biochemistry graduate with diverse experience in aviation, customer service, and media. I host the Reframing Mindset Podcast and I am passionate about problem-solving, communication, and leadership.",[new Education("University Of The West Indies","BSc Biochemistry","2018","2015",[new RelevantCourse("BioEnergetics and Cell Metabolism","Pass"), new RelevantCourse("Software Engineering","Pass"),new RelevantCourse("Object Oriented Design and Implemation","Pass"),new RelevantCourse("Discrete Mathematics","Pass"),new RelevantCourse("Critical Reading and Writing","Pass")]),
new Education("Herbert Morrison Technical High (Sixth Form Programme)","ASc Natural Science","2013","2015",[new RelevantCourse("Biology Unit 2","2"),new RelevantCourse("Caribbean Studies","4"),new RelevantCourse("Chemistry Unit 2","1"),new RelevantCourse("Pure Mathematics Unit 2","3"),new RelevantCourse("Biology Unit 1","2"),new RelevantCourse("Chemistry Unit 1","2"),new RelevantCourse("Communication Studies","3"), new RelevantCourse("Pure Mathematics Unit 1","3")]),
new Education("Herbert Morrison Technical High","Diploma","2008","2013",[new RelevantCourse("Principle of Business","1"),new RelevantCourse("Biology","2"),new RelevantCourse("Chemistry","3"),new RelevantCourse("Geography","2"),new RelevantCourse("Information Technology","1"),new RelevantCourse("Technical Drawing","2")]),
new Education("Chester Castle All Age","Certificate","2002","2008",[new RelevantCourse("Mathematics","Pass"),new RelevantCourse("Science","Pass"),new RelevantCourse("Language Arts","Pass")])],[new WorkExperience("Ramp Agent","Menzies Aviation","Donald Sangster International Airport","Nov 2023","April 2025","responsible for under-wing services for aircraft,including guiding and parking aircraft,loading and unloading luggage and cargo, and performing cabin maintenance tasks.","Contract"),
    new WorkExperience("Airside Vehicle Operator","Menzies Aviation","Donald Sangster International Airport","March 2024","April 2025","Operating Vehicles Airside","Contract"),
new WorkExperience("Podcast Host","Reframing Mindset Podcast","Westmoreland","Oct 2020","Present","Podcast where I clear my head of my thoughts that are preventing clarity, practice my speech and other random things.","Full-time"),
new WorkExperience("Service Advisor","Advanced CallCenter Technologies"," Barnett Tech Park, 3 Megabyte Drive, Montego Bay","August 2023","September 2023","Maintenance of Health insurance policies for customers of Florida Blue.","Full-time"),
new WorkExperience("Customer Care Representative","Advanced CallCenter Technologies","Barnett Tech Park, 3 Megabyte Drive, Montego Bay","Nov 2022","Aug 2023","Checked to ensure that appropriate changes were made to resolve customers' problems via utilizing active listening skills, as well as, displaying and executing solutions through product and technical knowledge, Obtained and examined all relevant information in order to assess validity of complaints and to determine possible causes, such as extreme weather conditions that could increase utility bills. Kept records of customer interactions and transactions, recording details of inquiries, complaints, and comments, as well as actions taken.","Full-time"),
new WorkExperience("Security Guard","Reggae Sumfest","Montego Bay, Jamaica (primarily at Catherine Hall Stadium)","July 2022","July 2022","Secure WiPay bathroom both to allow only authorized persons to use the bathroom","freelance"),
new WorkExperience("Peace Ambassador","Violence prevention Alliance"," Corinaldi Avenue, Montego Bay","June 2019","June 2019","Help some children get some experience using technology","freelance"),
new WorkExperience("Audio/Phone Technician","Aston Preson Hall","UWI Mona","Sep 2017","May 2018","Prior to 2017 Preston media was a phone-based radio program broadcast over analogue phones in the various clusters.The broadcast was improved using Instagram live to allow for a visual broadcast and wider audience and greater promotion opportunities to the University of the West Indies population.","Full-time"),
new WorkExperience("Cluster Treasurer","Aston Preston Hall","UWI Mona","Sep 2017","May 2018","Made over $70,000 selling juice for the cluster Acquired a fridge for the monopoly to allow for the selling of juice to be secured and efficient for the coming years Allowed for the subsidizing of the transportation for the first cluster trip in over 3 years Assist with the Execution of the cluster’s food sale which made a net profit of $12,000 Cluster has a profit of $10,000 to initiate activities for the next academic year.","Full-time"),
new WorkExperience("Domestic Affairs Chairperson","Aston Preston Hall","UWI Mona","Sep 2016","April 2017","Responsible for 13 committee members. Spearhead the logistics and setup for 20 events held on Aston Preston during the 2016-2017 academic year.","Full-time"),
new WorkExperience("Web Developer","Mystic Light Studio","Paradise Norwood,Montego Bay","Jun 2019","Aug 2019","Write well designed, testable, efficient code by using the best software development practices, Create website layout/user interface by using standard HTML/CSS practices, Integrate data from various back-end services and databases, Gather and refine specifications and requirements based on technical needs, Create and maintain software documentation, Be responsible for maintaining, expanding, and scaling our site.","Full-time"),
new WorkExperience("Radiologist Assistant","Cornwall Regional Hospital","Mount Salem","Sep 2013","Oct 2013","Sets up the imaging room to coincide with the examination being performed to include the use of proper isolations precautions when needed.  Safely transfers patient to and from carts, beds and wheelchairs utilizing multiple lifting devices.  Positions the patient, ensuring patient comfort and modesty. Checks the order for complete information and appropriateness criteria.","Internship")],[new Skill("Java","University of the West Indies"),
    new Skill("Python","University of the West Indies"),
    new Skill("C","Univserity of the West Indies"),
    new Skill("C++/C#","Self Learn"),
new Skill("Angular","Mystic Light Studio"),
new Skill("Flutter", "Mystic Light Studio"),
new Skill("Aseptic Techniques","University of the West Indies"),
new Skill("Spectrophotometry","University of the West Indies"),
new Skill("Protein Purification","University of the West Indies"),
new Skill("Airport operations","Menzies Avaition"),
new Skill("Defensive Driving","Airside Vehicle Operator"),
new Skill("Customer Service","Advanced CallCenter Technologies"),
new Skill("Event Management","Domestic Affiars Chairperson"),
new Skill("Budgeting","cluster Treasurer"),
new Skill("IT Literacy","Herbert Morrison Technical High"),
new Skill("Leadership","University oF the West indies"),
new Skill("Analytical Thinking","University of the West Indies"),
new Skill("Teamwork","Menzies Avaition"),
new Skill("Detail-oriented",""),
new Skill("Self-motivated",""),
new Skill("Critical-Thinker","University of the West Indies"),
new Skill("S.M.A.R.T goals","Domestic Affairs Chairperson"),
new Skill("Focus","Service Advisor"),
new Skill("Social Collaboration","Customer Service Representative"),
new Skill("Apprenticeship","Cluster Treasurer"),
new Skill("Delegation","Cluster Treasurer"),
new Skill("Sorting","Radiologist Assistant"),
new Skill("Team building","Peace Ambassador"),
new Skill("Working with Children","Peace Ambassador"),
new Skill("Medicare Supplements","Service Advisor"),
new Skill("Medicare Advantage","Service Advisor"),
new Skill("Medicare","Service Advisor"),
new Skill("U.S. Health Insurance Portability and Accountability Act (HIPPA)","Service Advisor"),
new Skill("Health Care","Service Advisor"),
new Skill("One Note","Service Advisor"),
new Skill("Health Insurance","Service Advisor"),
new Skill("Computer Literacy","Herbert Morrison Technical High"),
new Skill("Attention to Detail","Audio/Phone Technician"),
new Skill("Physical Security","Reggae Sumfest"),
new Skill("Problem-solving","Customer Serivce Representative"),
new Skill("Biochemistry","University of the West Indies"),
new Skill("Chemistry","Herbert Morrison Technical High (Sixth form Programme)"),
new Skill("Laboratory Skills","Herbert Morrison Technical High (Sixth form Programme)"),
new Skill("Science","Herbert Morrison Technical High"),
new Skill("Basketball","Herbert Morrison Technical High"),
new Skill("Airport Security","Menzies Aviation"),
new Skill("Luggage","Menzies Aviation"),
new Skill("Professional Driving","Airide Vehicle Operator"),
new Skill("High Performance Driving","Airside Vehicle Operator"),
new Skill("Baggage Handling Systems","Menzies Avaition"),
new Skill("Teamwork",""),
new Skill("Conflict Resolution","Customer Service Representative"),
new Skill("Customer Service","Customer Service Representative"),
new Skill("Team Leadership","Domestic Affiars Chairperson"),
new Skill("Budget Management","Cluster Treasurer"),
new Skill("Communication","Reframing Mindset Podcast"),
new Skill(".Net Core","Mystic Lights Studio"),
new Skill("Microsoft Office","Herbert Morrison Technical High"),
new Skill("Management",""),
new Skill("Microsoft Excel","Herbert Morrison Technical High School"),
new Skill("Leadership","Domestic Affairs Chairperson"),
new Skill("Research","University of the West Indies"),
new Skill("Microsoft Word","Herbert Morrison Technical High"),
new Skill("Microsoft Powerpoint","Herbert Morrison Technical High"),
new Skill(".Net Franmework","Mystic Lights Studio"),
new Skill("Angular Command Line Interface (CLI)","Mystic Lights Studio"),
new Skill("AngularJS","Mystic Light Studio"),
new Skill("HTML",""),
new Skill("CSS",""),
new Skill("Javascript",""),
new Skill("JQuery","")],[new Award("Outstanding Service in Media & Communication","2018"),
    new Award("Outstanding Service in Mentorship","2018"),
    new Award("Outstanding Service in Hall Committee (Domestic Affairs Chairperson)","2017"),
    new Award("MVP in Track and Field","2016"),
    new Award("Team Player Award","2018"),
    new Award("Dancing Dynamite","2017"),
new Award("Third place Grade 7","2009")],[new Certification("Dangerous Goods- Module 02 Limitations","Menzies Aviation","Apr 2024","Apr 2026"),
    new Certification("Dangerous Goods -Module 01 General philosophy","Menzies Aviation","Apr 2024","Apr 2026"),
    new Certification("Dangerous Goods - Module 00 Introduction","Menzies Aviation","Apr 2024","Apr 2026"),
    new Certification("Corporate   induction Module 3 - Responsibly","Menzies Aviation","Apr 2024",""),
    new Certification("Fire Safety","Menzies Aviation","Apr 2024",""),
    new Certification("Corporate induction Module 4 - Safely","Menzies Aviation","Apr 2024",""),
    new Certification("Safely (Recurrent)","Menzies Aviation","Apr 2024",""),
    new Certification("Anti Slavery anti-trafficking ","Menzies Aviation","Apr 2024",""),
    new Certification("Corporate induction Module 2- Operating","Menzies Aviation","Apr 2024",""),
    new Certification("Dignity and Respect","Menzies Aviation","Apr 2024",""),
    new Certification("Corporate induction Module 1 -Human Factors Foundations","Menzies Aviation","Apr 2024",""),
    new Certification("Human Factors Foundations","Menzies Aviation","Apr 2024",""),
    new Certification("Corporate induction Module 5 - Effectively","Menzies Aviation","Apr 2024",""),
    new Certification("Personal Protective Equipment & Hearing Conservation","Menzies Aviation","Apr 2024",""),
    new Certification("Corporate Induction-Uniform And Appearance Standards","Menzies Aviation","Apr 2024",""),
    new Certification("Basic Security Awareness","Menzies Aviation","Apr 2024",""),
    new Certification("Corporate Induction Module 3 - Responsibly Aviation Security","Menzies Aviation","Apr 2024",""),
    new Certification("Corporate   induction Module 3 - Responsibly- Security in the workplace","Menzies Aviation","Apr 2024",""),
    new Certification("Data Protection introduction","Menzies Aviation","Apr 2024",""),
    new Certification("Menzies Culture","Menzies Aviation","Apr 2024",""),
    new Certification("Aircraft Airside Awareness","Menzies Aviation","Apr 2024",""),
    new Certification("Manual Handling and Ergonomics","Menzies Aviation","Apr 2024",""),
    new Certification("Anti Drug and Alcohol","Menzies Aviation","Apr 2024",""),
    new Certification("Regulatory Compliance (Americas)","Menzies Aviation","Apr 2024",""),
    new Certification("Florida Blue Certification","Adavanced CallCenter Technologies","Sep 2023","")],[new Volunteer("Craig Town Mentorship","Assisting Children of Craig town with school work","Children","Sep 2015","April 2018"),
    new Volunteer("Aston Preston Hall Second Year Experience","Mental Health Ambassador","Health","Oct 2016","Apr 2017")
],[new RelevantLink("Reframing Mindset Podcast","https://open.spotify.com/embed/show/0P0RbTxZssrgLTndXawchz?utm_source=generator"),
    new RelevantLink("Youtube","https://www.youtube.com/embed/g_80-VmUkik"),
    new RelevantLink("Github Project","https://github.com/khemo240/Personal-Website")
],[new Reference("Emilio Campbell","Mystic Lights Studio","204-441-7724"),
    new Reference("Pagan Glashin-Lewis","Advanced CallCenter Technologies","876-363-3242"),
    new Reference("Kamar Johnson","Menzies Aviation","876-827-6674")]);


createHeader(profile.name,"");
createOutsideLinks("");

$("#about p").text(profile.aboutMe);
//button not ready to download resume
$("button").click(function(){
    alert("Resume not available for download as yet. View Website.");
});
var count=1;
for (var i of profile.experinceName){
    var heroH2=$(".hero h2");
    heroH2.append(i);
    if(count !== profile.experinceName.length){
        heroH2.append(" | ");
        count++;
    }
}
count=2;
for (var i of profile.intro){
    var heroP=$(".hero p")
    heroP.append(i);
    if (count !== profile.intro.length && count <= profile.intro.length){
        heroP.append(", ");
        count++;
    }else if(count === profile.intro.length){
        heroP.append(" and ");
        count++;
    }else if(count > profile.intro.length){
        heroP.append(".");
    }
    
}
count=0;
for( var title of websiteBody.titleHeading){
   appendSection(websiteBody.headers[count].toLowerCase(), title);
    count++;
}
appendParagraph("about", profile.aboutMe);
count=2;
for (var i of profile.education){
    var courses="";
    var skillsArray =[];
    var skills="";
     for (var v of i.relevantCourse){
        courses+=v.courseName+"("+v.grade+")";
        if (count <= i.relevantCourse.length){
            courses+=", ";
            count++;
        }
    }
    for (var j of profile.skills){
        if(j.Associatedwith.toLowerCase() === i.institutionName.toLowerCase()){
            skillsArray.push(j.skillName);
        }
            }
    count=2;
    for(var k of skillsArray){
        skills+=k;
        if (count <= skillsArray.length){
            skills+=", ";
            count++;
        }
    }
    count=2;
    appendParagraph("education", appendStrong(i.institutionName) + " — " + i.degreeAwarded + ", " + i.startYear + "–" + i.endYear + "<br>" + appendStrong("Relevant courses:") + " " + courses + "<br>" + appendStrong("Relevant skills:") + " " + skills);
}
var experienceItems = [];
for(var i of profile.workExperience){
    var skillsArray=[];
    var skills="";
    for (var j of profile.skills){
        if(j.Associatedwith.toLowerCase() === i.companyName.toLowerCase()|| j.Associatedwith.toLowerCase()=== i.role.toLowerCase()){
            skillsArray.push(j.skillName);
        }
    }
    count=2;
    for(var k of skillsArray){
        skills+=k;
        if (count <= skillsArray.length){
            skills+=", ";
            count++;
        }
    }
    experienceItems.push(appendStrong(i.role) + ", " + i.companyName + ", " + i.address + ", " + i.roleDescription + ", " + i.workType + " (" + i.startDate + "–" + i.endDate + ") <br>" + appendStrong("Relevant skills:") + " " + skills);
}
appendUnorderdList("experience", experienceItems);
$("#skills").append("<div class='skills-grid'></div>");
var skills=""
for (var i of profile.skills){
   skills+="<div>"+i.skillName+"</div>";
}
$("#skills .skills-grid").append(skills);

var awardsItems = [];
for (var i of profile.awards){
    awardsItems.push(appendStrong(i.awardName) + " (" + i.yearofIssue + ")");
}
appendUnorderdList("awards", awardsItems);

var certificationItems = [];
for (var i of profile.certifications){
    var dateString = i.issueDate;
    if (i.expirationDate !== "") {
        dateString += "–" + i.expirationDate;
    }
    certificationItems.push(appendStrong(i.certificationName) + ", " + i.issuingCompany + ", " + dateString);
}
appendUnorderdList("certifications", certificationItems);

var volunteeringItems = [];
for (var i of profile.volunteer){
    volunteeringItems.push(appendStrong(i.organization) + " — " + i.role + ", " + i.cause + " (" + i.startDate + "–" + i.endDate + ")");
}
appendUnorderdList("volunteering", volunteeringItems);

appendParagraph("podcast", "Listen to episodes of my " + appendStrong(profile.relevantLinks[0].name) + " below:");
appendFrame("podcast", profile.relevantLinks[0].link);

appendParagraph("youtube", "Check out my latest videos on my YouTube channel:");
appendFrame("youtube", profile.relevantLinks[1].link);
appendParagraph("youtube", appendAnchor(null,contacts[3].link, "Visit my YouTube channel"));

appendParagraph("github", "Explore my coding projects and contributions:");
appendParagraph("github", appendAnchor(null, profile.relevantLinks[2].link, "View my GitHub Project"));
appendParagraph("github", appendAnchor(null, contacts[4].link, "Visit my GitHub Profile"));

var referenceItems = [];
for (var i of profile.reference){
    referenceItems.push(appendStrong(i.name) + ", " + i.company + ", " + i.number);
}
appendUnorderdList("reference", referenceItems);


