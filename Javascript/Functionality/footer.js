//information

//notes: i need to figure out why the FAQs move the divs below the button when the screen is smaller

//need to make the header more dynamic where it will change the header to an abbreiviated title and nav to abbriviated buttons

const FAQsContent = [
  {q: "What are the applications of a Nueral Netwrok?", a: "A nueral Network is able to identify what objects are. If you design a nueral network appropriately they can learn almost anything."},
  {q: "Does this network learn?", a: "Backpropogstion isn't yet a part of this network but an expression of backpropogation is coming."}
];

const settingsSwitches = [
  {ls: "Use tanh function", rs: "Use sigmoid function"}
];

//*********                    **********
//*********     BOTTOM NAV     **********
//*********                    **********

//Settings Switches

var settingsSwitchRow = [];
var slideIsLeft = [];

if(document.getElementById('bottomNavBox') != null) {

  for(let i = 0; i < settingsSwitches.length; i++) {

    slideIsLeft.push(true);

    var row = document.createElement("tr");
    var leftSideT = document.createElement("td");
    var switchContainer = document.createElement("td");
    var switchToggleDiv = document.createElement("div");
    var slide = document.createElement("div");
    var rightSideT = document.createElement("td");

    settingsSwitchRow.push({row, leftSideT, switchToggleDiv, switchContainer, slide, rightSideT});

    // create leftSide

    settingsSwitchRow[i].leftSideT.setAttribute("class", "switchOption"); settingsSwitchRow[i].leftSideT.appendChild(document.createTextNode(settingsSwitches[i].ls));

    //create slide

    settingsSwitchRow[i].slide.setAttribute("class", "slide");
    var idString = "slideToggle"+i;
    settingsSwitchRow[i].slide.setAttribute("id", idString);
    settingsSwitchRow[i].slide.appendChild(document.createTextNode("|||"));

    // create switchToggle
    //need to check if there are any saved settings. If there are create the switches as on or off respectively

    settingsSwitchRow[i].switchToggleDiv.setAttribute("class", "switchToggle");
    settingsSwitchRow[i].switchToggleDiv.appendChild(settingsSwitchRow[i].slide);
    settingsSwitchRow[i].switchToggleDiv.i = i;
    settingsSwitchRow[i].switchToggleDiv.addEventListener("click", toggleSwitch);

    // create switch Container
    settingsSwitchRow[i].switchContainer.appendChild(settingsSwitchRow[i].switchToggleDiv);

    //create rightSide
    settingsSwitchRow[i].rightSideT.setAttribute("class", "switchOption"); settingsSwitchRow[i].rightSideT.appendChild(document.createTextNode(settingsSwitches[i].rs));

    // create Row
    settingsSwitchRow[i].row.appendChild(settingsSwitchRow[i].leftSideT);
    settingsSwitchRow[i].row.appendChild(settingsSwitchRow[i].switchContainer);
    settingsSwitchRow[i].row.appendChild(settingsSwitchRow[i].rightSideT);

    //place container in the settingsDiv
    document.getElementById('settingsTable').appendChild(settingsSwitchRow[i].row);

  }

  //Faqs

  var faqNumDivs = [];
  var isExtended = [];

  for(let i = 0; i < FAQsContent.length; i++) {

    isExtended.push(false);

    //Divs creation

    var faqContainer = document.createElement("div"); //creates <div>
    var questionDiv = document.createElement("div");
    var extendButton = document.createElement("div");
    var questionTextDiv = document.createElement("div");
    var answerDiv = document.createElement("div");

    faqNumDivs.push({faqContainer, questionDiv, extendButton, questionTextDiv, answerDiv});

    //make extend button

    faqNumDivs[i].extendButton.setAttribute("class", "smallButton");
    var idString = "extendButton"+i;
    faqNumDivs[i].extendButton.setAttribute("id", idString);
    faqNumDivs[i].extendButton.appendChild(document.createTextNode("+"));
    faqNumDivs[i].extendButton.i = i;
    faqNumDivs[i].extendButton.addEventListener("click", toggleShowAnswer);

    //make questiontextDiv

    faqNumDivs[i].questionTextDiv.setAttribute("class", "questionTextDiv"); faqNumDivs[i].questionTextDiv.appendChild(document.createTextNode(FAQsContent[i].q));

    //make question div

    faqNumDivs[i].questionDiv.setAttribute("class", "questionDiv");
    faqNumDivs[i].questionDiv.appendChild(faqNumDivs[i].extendButton);
    faqNumDivs[i].questionDiv.appendChild(faqNumDivs[i].questionTextDiv);

    //make answer div

    faqNumDivs[i].answerDiv.setAttribute("class", "answerDiv");
    var idString = "answerDiv"+i;
    faqNumDivs[i].answerDiv.setAttribute("id", idString);
    faqNumDivs[i].answerDiv.appendChild(document.createTextNode(FAQsContent[i].a));

    //make faq container

    faqNumDivs[i].faqContainer.appendChild(faqNumDivs[i].questionDiv);
    faqNumDivs[i].faqContainer.appendChild(faqNumDivs[i].answerDiv);

    //attach faq container
    document.getElementById('FAQDiv').appendChild(faqNumDivs[i].faqContainer);

  }

  //bottom nav button initializers

  var informationDiv = document.getElementById('informationDiv');

  var aboutButton = document.getElementById('AboutButton');
  var aboutDiv = document.getElementById('aboutDiv');

  var settingsButton = document.getElementById('SettingsButton');
  var settingsDiv = document.getElementById('settingsDiv');

  var faqButton = document.getElementById('FAQButton');
  var faqDiv = document.getElementById('FAQDiv');

  var contactButton = document.getElementById('ContactButton');
  var contactDiv = document.getElementById('contactUsDiv');

  // bottom nav buttons

  aboutButton.addEventListener("click", toggleAboutDiv);
  settingsButton.addEventListener("click", toggleSettingsDiv);
  faqButton.addEventListener("click", toggleFAQDiv);
  contactButton.addEventListener("click", toggleContactDiv);

} else {
  console.log('no bottom nav here')
}

//nav button functions

function toggleAboutDiv() {

  if (aboutDiv.style.display === "block") {

    informationDiv.style.display = "none";

    aboutDiv.style.display = "none";
    aboutButton.style.border = "3px solid white";
    aboutButton.style.backgroundColor = "white";

  } else {

    informationDiv.style.display = "block";

    //        aboutButton.style.backgroundColor = "lightgrey";
    //        settingsButton.style.backgroundColor = "white";
    //        faqButton.style.backgroundColor = "white";
    //        contactButton.style.backgroundColor = "white";

    aboutButton.style.border = "3px solid #543210";
    settingsButton.style.border = "3px solid white";
    faqButton.style.border = "3px solid white";
    contactButton.style.border = "3px solid white";

    aboutDiv.style.display = "block";
    settingsDiv.style.display = "none";
    faqDiv.style.display = "none";
    contactDiv.style.display = "none";
  }
}

function toggleSettingsDiv() {
  if (settingsDiv.style.display === "block") {

    informationDiv.style.display = "none";

    settingsDiv.style.display = "none";
    settingsButton.style.border = "3px solid white";
    settingsButton.style.backgroundColor = "white";

  } else {

    informationDiv.style.display = "block";

    //        settingsButton.style.backgroundColor = "lightgrey";
    //        aboutButton.style.backgroundColor = "white";
    //        faqButton.style.backgroundColor = "white";
    //        contactButton.style.backgroundColor = "white";

    settingsButton.style.border = "3px solid #543210";
    aboutButton.style.border = "3px solid white";
    faqButton.style.border = "3px solid white";
    contactButton.style.border = "3px solid white";

    settingsDiv.style.display = "block";
    aboutDiv.style.display = "none";
    faqDiv.style.display = "none";
    contactDiv.style.display = "none";
  }
}

function toggleFAQDiv() {
  if (faqDiv.style.display === "block") {

    informationDiv.style.display = "none";

    faqDiv.style.display = "none";
    faqButton.style.border = "3px solid white";
    faqButton.style.backgroundColor = "white";

  } else {

    informationDiv.style.display = "block";

    //        faqButton.style.backgroundColor = "lightgrey";
    //        settingsButton.style.backgroundColor = "white";
    //        aboutButton.style.backgroundColor = "white";
    //        contactButton.style.backgroundColor = "white";

    faqButton.style.border = "3px solid #543210";
    settingsButton.style.border = "3px solid white";
    aboutButton.style.border = "3px solid white";
    contactButton.style.border = "3px solid white";

    faqDiv.style.display = "block";
    settingsDiv.style.display = "none";
    aboutDiv.style.display = "none";
    contactDiv.style.display = "none";
  }
}

//toggle contact US

function toggleContactDiv() {
  if (contactDiv.style.display === "block") {

    informationDiv.style.display = "none";

    contactDiv.style.display = "none";
    contactButton.style.border = "3px solid white";
    contactButton.style.backgroundColor = "white";

  } else {

    informationDiv.style.display = "block";

    //        contactButton.style.backgroundColor = "lightgrey";
    //        settingsButton.style.backgroundColor = "white";
    //        faqButton.style.backgroundColor = "white";
    //        aboutButton.style.backgroundColor = "white";

    contactButton.style.border = "3px solid #543210";
    settingsButton.style.border = "3px solid white";
    faqButton.style.border = "3px solid white";
    aboutButton.style.border = "3px solid white";

    contactDiv.style.display = "block";
    settingsDiv.style.display = "none";
    faqDiv.style.display = "none";
    aboutDiv.style.display = "none";
  }
}

// settings toggle

function toggleSwitch() {

  if (slideIsLeft[event.currentTarget.i]) {
    settingsSwitchRow[event.currentTarget.i].switchToggleDiv.style.flexDirection = "row-reverse";
    slideIsLeft[event.currentTarget.i] = false;

  } else {
    settingsSwitchRow[event.currentTarget.i]
    settingsSwitchRow[event.currentTarget.i].switchToggleDiv.style.flexDirection = "row";
    slideIsLeft[event.currentTarget.i] = true;

  }
}

//faq buttons toggle

function toggleShowAnswer() {

  if (isExtended[event.target.i]) {

    faqNumDivs[event.target.i].extendButton.innerHTML = "+";
    faqNumDivs[event.target.i].answerDiv.style.display = "none";
    isExtended[event.target.i] = false;

  } else {

    faqNumDivs[event.target.i].extendButton.innerHTML = "-";
    faqNumDivs[event.target.i].answerDiv.style.display = "block";
    isExtended[event.target.i] = true;

  }
}
