//The Plan:

//on click of menu icon, show other two menu options below it, 
//menu icon swamps to an x

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// WORKS: 
// $('#hamburger').click(function(){
//   $('#dropDown').css('display','unset')

// });

// ----
// ALSO WORKS and BETTER . 

$(document).ready(function(){
  $("#hamburger").click(function(){
    $("#dropDown").slideToggle();
  });
});

var cardarea = document.getElementById("cardarea");

function clearCardArea(){
  cardarea.innerHTML= "";
}

function handleButtonClick(){
  clearCardArea();
  showCard();
}

var lonelyPairCard = {
  title: "The Lonely Pair",
  image: "images/thelonelypair.png",
  description: "These things pass, too, with or without those around you. Take in the taste of the night air and listen to time move. Be thankful for this bittersweet moment.",
};

var mantisKingCard = {
  title: "The Mantis King",
  image: "images/themantisking.png",
  description: "Even those alien to us have rules. Listen carefully, watch carefully, and move with deliberation.",
};

var masterCardList = [
  lonelyPairCard, mantisKingCard
];

var numberOfClick = 0

var togglebutton = document.getElementById("togglebutton");

togglebutton.onclick= handleButtonClick;


function showCard() {
  var randomCard = getRandomCard();
  cardarea.innerHTML = renderCard(randomCard);

}; 

function getRandomCard() {
  return masterCardList[Math.floor(Math.random()*masterCardList.length)]; 
};

function renderCard(card){
  return(`<div class="listpoem">
  <img class="imagecurse" src="${card.image}">

  <h2>${card.title}</h2>

  <p class = "introwelcome">
      ${card.description}
  </p>
</div>`

  )
};

// var item = items[Math.floor(Math.random()*items.length)];


















//------


// add a basic x with an id and then copy what is above and reverse engineer it
//--

// Close the dropdown if the user clicks outside of it


// When user clicks/presses image in the gallery, it opens up a modal that has a styled title, description. they can then click to the next image or x out of it. Will doing this murder me? Maybe.

/* when user presses one link, it highlights?  */

// 1) Load page and have italic intro text slowly fade on


// 2) When they click the "begin" button, 


// - The italic intro text disappears. 

// - The button flashes (lighter border, slightly lighter insides)
// - an image/description loads. -- will I worry about whether 
// the momentary loadind displaces the elements in any way? 



// 3) They have an option to click "again" over and over.
  //-this will switch out the image/description to a new one
  //every time

// 4) After 10(?) clicks (?) 
//  - another button appears
//  - they have an option to look at the image gallery (this
//     may be a post-class part of the project but I would
//     like to learn to do it)

// Pseudocode round 2:

// Go to site: index.html 

// 1) Loads p class introwelcome into site upon -- without an image

// 2)  (intro.html-- research "timed load" with begin button)
//  press begin --> make the button area an a tag and link it to main.html href=index.html

// it links you to the index page with everything -- button says "again"

// 3) Press "Again" 

// returns: image with paired description 
// If/else 5 different times

// Press once 
// get image 1 description 1
// Press second time
// get image 2 description 2
// Press 3rd time 
// etc etc until image 8. 

// After 9th time -> 
// Show "view gallery button"--> links to "gallery" on menu  and also show 
// "Gallery" on menu 

// do that 5 times -- > gallery button and menu option becomes visible 

    