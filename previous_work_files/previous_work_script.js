function checkPage(){
	if (window.name == "connect_four")
	{
		loadConnectFourInfo();
	} 
	else if (window.name == "pizza_palace")
	{
		loadPizzaPalaceInfo();
	} 
	else if (window.name == "step_ahead")
	{
		loadStepAheadInfo();
	}
	else if (window.name == "monster_island")
	{
		loadStepAheadInfo();
	}
	else if (window.name == "pood_pood")
	{
		loadStepAheadInfo();
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
	projectDescription.innerHTML = "Connected Activity Of The 4th Kind is a Connect Four clone created entirely using Java. It"+
	" was the first major group project that I worked on, and was developed by myself and two other group members. We had not been"+
	" taught how to use git and GitHub at the time, and so we decided to collaborate on the project by sharing the work online using google drive, uploading and"+
	" downloading the entire project every time each person made a change. The work was split with one person creating the menu and"+
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
	" Android Studio. The main features of the app are the Current Specials page, the Order page, the Tip Calculator, and the Delivery Timer."+
	" The Current Specials page contains a list of pizzas (i.e. Meat Lover's, Hawaiian, Vegetarian, etc.) that when selected leads you to the Order page."+
	" On the Order page, you can select the size of your pizza, the type of pizza you want - which will be preselected if you are coming from the Current Specials page,"+
	" the different toppings you want, and your desired payment method. At the bottom of the page the is total cost of your pizza, which is calculated using all of the previously mentioned"+
	" options. When you press the submit button, you are brought to the main page, and a toast is displayed saying that your pizza will be delivered to the address that you entered in the"+
	" options menu. The Delivery Timer uses your phone's built-in timer app to set a timer for 30 min, letting you know whether your pizza will be free. Lastly, the Tip Calculator can be used"+
	" to easily determine how much you want to tip the delivery boy by entering the percent you want to tip, as well as the total cost of your pizza.";
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
	
	var fs = require('fs');
	fs.readFile('step_ahead_desc.txt', function(err, data)
	{
		projectDescription.innerHTML = data;
	});
	//setting the project description
	/*projectDescription.innerHTML = "Step Ahead is an exercise assistance app and is the most advanced Android application that I have collaborated"+
	" on. Developed my myself and one other teammate, the Step Ahead application allows the user to track info about their run such as distance traveled,"+
	" calories burned (based on height and weight), duration of the run, what the weather was like, the time that they started, and any photos the user feels like taking. Once the user finishes their run,"+
	" they can record how they felt, what kind of area they were in, their average heart rate, and any notes that they feel like adding to the record."+
	" When the user saves their run, the recorded info is persistently stored in a Run Journal that the user can look back on at their leisure. The user can also set reminders for"+
	" themselves to go on more runs or to do regular weight checks. For each weight check, the user can enter their new weight in the Weight Journals page, which not only shows a list of"+
	" every past weight record, but also conatins a line graph showing the user their progress. The app also allows the user to quickly see any new tweets made by the Step Ahead twitter account.";*/
}  