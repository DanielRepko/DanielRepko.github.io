function checkPage(){
	switch(window.name)
	{
		case "connect_four":
			loadConnectFourInfo();
			break;
		case "connect_four":
			loadConnectFourInfo();
			break;
		case "pizza_palace":
			loadPizzaPalaceInfo();
			break;
		case "step_ahead":
			loadStepAheadInfo();
			break;
		case "monster_island":
			loadMonsterIslandInfo();
			break;
		case "pood_pood":
			loadPoodPoodInfo();
			break;
		case "tourism_pursuit":
			loadTourismPursuitInfo();
			break;
		default:
			console.log("ERROR: Invalid window name - " + window.name);
			break;
	}
}

//grabbing the elements of the page that will be filled with content
var pageTitle = document.getElementById("previous_work_title");
var projectName = document.getElementById("project_name");
var projectDate = document.getElementById("project_date");
var projectDescription = document.getElementById("project_desc");
var samplePic1 = document.getElementById("sample_pic1");
var samplePic2 = document.getElementById("sample_pic2");
var samplePic3 = document.getElementById("sample_pic3");
var mainPic = document.getElementById("main_pic");

//sets the main_pic to the selected sample_pic
document.getElementById("sample_div1").addEventListener("click", function(){
	mainPic.src = samplePic1.src;
}, false);
document.getElementById("sample_div2").addEventListener("click", function(){
	mainPic.src = samplePic2.src;
}, false);
document.getElementById("sample_div3").addEventListener("click", function(){
	mainPic.src = samplePic3.src;
}, false);


//filling the page with info for the connect four project
function loadConnectFourInfo(){
	//setting the page title
	pageTitle.innerHTML = "Daniel Repko: Connected Activity Of The 4th Kind";
	//setting the project name
	projectName.innerHTML = "Connected Activity Of The 4th Kind";
	//setting the project creation date
	projectDate.innerHTML = "2017"
	//setting the first sample pic
	samplePic1.src = "connect_four_photos/connect_four1.png";
	samplePic1.setAttribute("class", "sample_pic regular");
	//setting the second sample pic
	samplePic2.src = "connect_four_photos/connect_four2.png";
	samplePic2.setAttribute("class", "sample_pic regular");
	//setting the third sample pic
	samplePic3.src = "connect_four_photos/connect_four3.png";
	samplePic3.setAttribute("class", "sample_pic regular");
	//setting the main pic
	mainPic.src = "connect_four_photos/connect_four1.png";
	mainPic.setAttribute("class", "main_pic regular");	
	
	//setting the project description
	projectDescription.innerHTML = "Connected Activity Of The 4th Kind is a Connect Four clone created entirely using Java/JavaFX. It"+
	" was the first major group project that I worked on, and was developed by myself and two other group members. We had (deliberately) not yet been"+
	" taught how to use Git and GitHub, and so we decided to collaborate on the project by sharing the work online using google drive, uploading and"+
	" downloading the entire project every time each person made a change (you can imagine how well that went). The work was split with one person creating the menu and"+
	" options, one person making the spinning coin that decided which player went first, and myself creating the actual game. I was"+
	" especially proud of how I had managed to determine whether a player had won without simply hardcoding every possible win condition,"+
	" but looking back on it, I could probably do the same thing now in half the time, and I could do it in a much cleaner way.";
}

//filling the page with info for the pizza palace project
function loadPizzaPalaceInfo(){
	//setting the page title
	pageTitle.innerHTML = "Daniel Repko: Pizza Palace";
	//setting the project name
	projectName.innerHTML = "Pizza Palace";
	//setting the project creation date
	projectDate.innerHTML = "2017"
	//setting the first sample pic
	samplePic1.src = "pizza_palace_photos/pizza_palace1.png";
	samplePic1.setAttribute("class", "sample_pic mobile");
	//setting the second sample pic
	samplePic2.src = "pizza_palace_photos/pizza_palace2.png";
	samplePic2.setAttribute("class", "sample_pic mobile");
	//setting the third sample pic
	samplePic3.src = "pizza_palace_photos/pizza_palace3.png";
	samplePic3.setAttribute("class", "sample_pic mobile");
	//setting the main pic
	mainPic.src = "pizza_palace_photos/pizza_palace1.png";
	mainPic.setAttribute("class", "main_pic mobile");	
	
	//setting the project description
	projectDescription.innerHTML = "Pizza Palace is a mock-restaurant app, and was developed by myself and one other person using"+
	" Android Studio. The main features of the app are the Current Specials page, the Tip Calculator (both made by my partner), the Delivery Timer, and the Order page (both made by me)."+
	" The Current Specials page contains a list of pizzas (i.e. Meat Lover's, Hawaiian, Vegetarian, etc.) that when selected leads you to the Order page."+
	" On the Order page, you can select the size of your pizza, the type of pizza you want - which will be preselected if you are coming from the Current Specials page -"+
	" different toppings, and your desired payment method. At the bottom of the page is the total cost of your pizza, which is calculated using all of the previously mentioned"+
	" options. When you press the submit button, you are brought to the main page, and a small message pops-up saying that your pizza will be delivered to the address that you entered in the"+
	" options menu. The Delivery Timer uses your phone's built-in timer app to set a timer for 30 min, after which your imaginary pizza would be free. Lastly, the Tip Calculator can be used"+
	" to easily determine how much to tip by entering your desired tip percentage and the total cost of your pizza.";
}

//filling the page with info for the step ahead project
function loadStepAheadInfo(){
	//setting the page title
	pageTitle.innerHTML = "Daniel Repko: Step Ahead";
	//setting the project name
	projectName.innerHTML = "Step Ahead";
	//setting the project creation date
	projectDate.innerHTML = "2018"
	//setting the first sample pic
	samplePic1.src = "step_ahead_photos/step_ahead1.png";
	samplePic1.setAttribute("class", "sample_pic mobile");
	//setting the second sample pic
	samplePic2.src = "step_ahead_photos/step_ahead2.png";
	samplePic2.setAttribute("class", "sample_pic mobile");
	//setting the third sample pic
	samplePic3.src = "step_ahead_photos/step_ahead3.png";
	samplePic3.setAttribute("class", "sample_pic mobile");
	//setting the main pic
	mainPic.src = "step_ahead_photos/step_ahead1.png";
	mainPic.setAttribute("class", "main_pic mobile");	

	//setting the project description
	projectDescription.innerHTML = "Step Ahead is an exercise assistance app and is the most advanced Android application that I have collaborated"+
	" on. Developed by myself and one other teammate, the Step Ahead application allows the user to track info about their run such as distance traveled (which is done using live location tracking),"+
	" calories burned (based on height, weight, and distance), duration of the run, date, weather, and any photos the user feels like taking during their run. Once the user is done running,"+
	" they can record how they felt, what kind of area they were in, their average heart rate, and some notes about the run, all of which is the persistently saved in a Run Journal, and can be found on the Run Journals page."+
	" The user can also set reminders for themselves to go on more runs or to do regular weight checks. For each weight check, the user can enter their new weight in the Weight Journals page, which not only shows a list of"+
	" every past weight record, but also contains a line graph showing the user's progress. My partner created the Weight Tracking and Reminder part of the application, while I was responsible for the"+
	" recording and saving of Run Journals.";
}  

//filling the page with info for the monster island project
function loadMonsterIslandInfo(){
	//setting the page title
	pageTitle.innerHTML = "Daniel Repko: Monster Island";
	//setting the project name
	projectName.innerHTML = "Monster Island";
	//setting the project creation date
	projectDate.innerHTML = "2019"
	//setting the first sample pic
	samplePic1.src = "monster_island_photos/monster_island1.png";
	samplePic1.setAttribute("class", "sample_pic regular");
	//setting the second sample pic
	samplePic2.src = "monster_island_photos/monster_island2.png";
	samplePic2.setAttribute("class", "sample_pic regular");
	//setting the third sample pic
	samplePic3.src = "monster_island_photos/monster_island3.png";
	samplePic3.setAttribute("class", "sample_pic regular");
	//setting the main pic
	mainPic.src = "monster_island_photos/monster_island1.png";
	mainPic.setAttribute("class", "main_pic regular");	

	//setting the project description
	projectDescription.innerHTML = "Monster Island is, to date, the largest project I have ever worked on. Made with Unity alongside one other person in a combined "+
		"effort of 665 hours, Monster Island is a children's platforming game with a focus on character creation and customization. The player "+
		"is able to create a monster that they can play as by choosing from 100 different parts, ranging from arms, legs, torsos, and heads, which can "+
		"be customized even further by changing their primary and secondary colors. The player is able to collect parts by defeating enemy monsters, each of which "+
		"has it's own unique ability that is linked to a specific part, such as the head or arm. If the player is able to collect this specific part, they can use the "+
		"enemy's ability as their own. I was in charge of creating the Monster Maker (the character creation screen), enemy AI, abilities, weapons, "+
		"animations, as well as all of the visual and musical assets, save for the tilesets that we used to create the level geometry (which we got from the Unity Asset Store). My partner was in charge of everything else, "+
		"including saving and loading the game, creating the various menus, level creation (we designed the levels together, but he is the one that actually made them), and all of the cutscenes. "+
		"The part that I am most proud of is how we were able to customize the monsters by using SVGs for their images. Since SVGs are basically just images represented by XML files, we were able to convert the SVGs to XML in code, "+
		"locate which shapes needed to be recolored (which was done by giving shapes IDs of PRIMARY or SECONDARY), apply the color change, then convert the XML into a Sprite to be displayed in the game. "+
		"This also allowed us to persistently save the player's monster by storing their images in JSON, since we could just store the XMLs in strings.";
}  

//filling the page with info for the Pood Pood project
function loadPoodPoodInfo(){
	//setting the page title
	pageTitle.innerHTML = "Daniel Repko: Pood Pood";
	//setting the project name
	projectName.innerHTML = "Pood Pood";
	//setting the project creation date
	projectDate.innerHTML = "2019 - Present"
	//setting the first sample pic
	samplePic1.src = "pood_pood_photos/pood_pood1.png";
	samplePic1.setAttribute("class", "sample_pic regular");
	//setting the second sample pic
	samplePic2.src = "pood_pood_photos/pood_pood2.png";
	samplePic2.setAttribute("class", "sample_pic regular");
	//setting the third sample pic
	samplePic3.src = "pood_pood_photos/pood_pood3.png";
	samplePic3.setAttribute("class", "sample_pic regular");
	//setting the main pic
	mainPic.src = "pood_pood_photos/pood_pood1.png";
	mainPic.setAttribute("class", "main_pic regular");	

	//setting the project description
	projectDescription.innerHTML = "Pood Pood is a past Unity school assignment turned side project. It is what I have coined as a \"top-down side-scrolling\" puzzle platformer. "+
	"The main mechanic is that you can only move from left to right, unless you change the perspective to top-down, at which point you can move in any direction other than vertical, "+
	"and you walk right over platforms that were previously too tall to jump over, as if the change in perspective has removed all depth. The catch is that there are certain platforms "+ 
	"that you cannot walk over in top-down mode, and so the levels would be a mix of these different platforms, with the puzzle being how to get from one part of the level to the other "+
	"by cleverly changing perspectives as needed. As of now it is little more than a tech demo, as I have only gotten as far as coding the perspective change as well as \"removing depth\" "+
	"when in top-down mode.";
}  

//filling the page with info for the pizza palace project
function loadTourismPursuitInfo(){
	//setting the page title
	pageTitle.innerHTML = "Daniel Repko: South Dundas Tourism Pursuit";
	//setting the project name
	projectName.innerHTML = "South Dundas Tourism Pursuit";
	//setting the project creation date
	projectDate.innerHTML = "2021"
	//setting the first sample pic
	samplePic1.src = "tourism_pursuit_photos/tourism_pursuit1.png";
	samplePic1.setAttribute("class", "sample_pic mobile");
	//setting the second sample pic
	samplePic2.src = "tourism_pursuit_photos/tourism_pursuit2.png";
	samplePic2.setAttribute("class", "sample_pic mobile");
	//setting the third sample pic
	samplePic3.src = "tourism_pursuit_photos/tourism_pursuit3.png";
	samplePic3.setAttribute("class", "sample_pic mobile");
	//setting the main pic
	mainPic.src = "tourism_pursuit_photos/tourism_pursuit1.png";
	mainPic.setAttribute("class", "main_pic mobile");	
	
	//setting the project description
	projectDescription.innerHTML = "South Dundas Tourism Pursuit is a tourism app for Android and IOS (available on Google Play and Apple Store) that I developed using Unity alongside a class of eight"+
	" others as a capstone project. Our professor approached South Dundas Tourism and made a deal to have us create a tourism app for them so that we could experience working on a professional"+
	" project. Our professor had the whole class work as one team, with himself acting as project manager. While it was still technically a school assignment, our professor did everything he could to" +
	" make the process as professional as possible, such as having us work in week-long sprints, having stand-up meetings each class, and even using a kanban board on Jira to assign tasks. How the app" +
	" works is that there are QR codes posted at certain tourist attractions around the South Dundas area. If you find one of these QR codes, you can open the Tourism Pursuit app and scan it, upon which you"+
	" will unlock the badge for that location. Unlocking a location’s badge allows you to see more information about that spot, and for select locations, you will even unlock a minigame themed around the"+
	" attraction. As we only had a single semester to create the entire app, the development was split into two main stages: the first half of the semester was used for the main app, and the second was used" +
	" to create the minigames. For development of the main application, most people settled into their own roles as they started getting assigned more and more tasks related to specific areas of the app, such" +
	" as Badges, Achievements, Details Page, etc. I ended up being more of a generalist as I started requesting to simply be assigned whatever needed to be done (our professor allowed us to pick and choose what" +
	" we got to work on to an extent, so long as we fulfilled the quota for each sprint). I did this because I wanted to challenge myself by getting a wide range of different tasks that I may not already be"+
	" knowledgeable on how to complete. The biggest thing I implemented in the main app was allowing the user to tweet about whatever badge they have just unlocked from within the app. I did this by using Twity," +
	" an MIT licensed API that acts as a Façade for Twitter’s existing API, to implement pin-based authentication. This allowed the user to be redirected to a web page where they could log into Twitter (if they were" +
	" not already logged in) and recieve a seven-digit pin that they could enter in the app to allow authorization to tweet from their account, a process that only needs to be done once. Other things I did for" +
	" the main app include creating a pop-up component to allow the team to more easily create pop-ups that can come in from any direction, adding screen transitions, creating scrims and scrim fades, as well" +
	" as miscellaneous bug fixes. For the minigame half of development, we were split into four teams of two, with each team working on one minigame. I worked on the minigame for Upper Canada Village, which is" +
	" a puzzle game where you have to fit Tetris shaped objects onto a grid. My partner made the main gameplay, while I created the visual and audio assets for the game (I even made the music myself in LMMS)," +
	" as well as helping to tweak and refine the gameplay.";
}
