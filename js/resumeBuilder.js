var bio = {};
bio.name = "Anne Shirley";
bio.role = "Schoolteacher";
bio.contacts = {
	"mobile" : "902.286.6532",
	"email" : "anne@greengables.ca",
	"github" : "github.com/anneofgreengables",
	"twitter" : "twitter/anneofgreengables",
	"location" : "Avonlea, PEI, Canada"
};
bio.welcomeMessage = "Tomorrow is a new day with no mistakes in it... yet.";
bio.skills = ["asking questions", "talking", "imagining", "teaching", "daydreaming", "reciting poetry", "reenactment"];
bio.pic = "images/anneshirley.jpg";

function displayBio() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLblog.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.pic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcomeMsg);
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};

displayBio();


var work = {
	"jobs": [
	{
		"employer": "Avonlea School",
		"title": "Schoolteacher",
		"location": "Avonlea, PEI, Canada",
		"dates": "1885 - 1886",
		"description": "Teaching academic basics to several grade levels of elementary-age children in small town one-room schoolhouse."
	},
	{
		"employer": "Summerside High School",
		"title": "Principal and Teacher",
		"location": "Summerside, PEI, Canada",
		"dates": "1887-1890",
		"description": "Besides regular teaching duties, other responsibilities included cultivating a climate that promotes education, shaping students' vision of academic success, nurturing leadership, and managing people."
	}
	]
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

displayWork();

var education = {
	"schools": [
		{
			"name": "Queen's College",
			"location": "Charlottetown, PEI, Canada",
			"degree": "University Studies",
			"majors": ["Teaching"],
			"dates": 1885,
			"url": "http://queenscollege.ca"
		},
		{
			"name": "Redmond College",
			"location": "Kingsport, NS, Canada",
			"degree": "Bachelor of Arts",
			"majors": ["Education"],
			"dates": 1886,
			"url": "http://redmondcollege.ca"
		}
	],
	"onlineCourses": [
		{
			"title": "The Art of Poetry",
			"school": "EdX",
			"dates": 1891,
			"url": "https://www.edx.org/course/art-poetry-bux-arpo222x"
		}
	]
};

function displayEducation() {
	$("#education").append(HTMLschoolStart);
	for (school in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	};
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	for (onlineSchool in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineSchool].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineSchool].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineSchool].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineSchool].url).replace("#", education.onlineCourses[onlineSchool].url);
		$(".education-entry:last").append(formattedURL);
	};
};

displayEducation();

var projects = {
	"projects": [
		{
			"title": "Poetry Readings",
			"dates": "1877-1880",
			"description": "Reenactment of Alfred Lord Tennyson's poem 'Lancelot and Elaine', and recitation of 'The Highwayman'.",
			"images": ["images/anneinboat.jpg", "images/highwayman.jpg"]
		}
	]
};

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (project in projects.projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	};
	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

projects.display();

$("#mapDiv").append(googleMap);
