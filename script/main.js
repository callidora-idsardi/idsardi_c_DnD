
// Step 1 
// variables always go to the top
// these are the connections that you're making to elements on the page 
// use css selectors to make connections to elements with Javascript


// create a 1 to 1 connection with a variable 
let theButton = document.querySelector("#buttonOne"); 

// create a 1 to many connection with a variable 
let theButtons = document.querySelectorAll("#buttonHolder img");
	theHeading = document.querySelector("#headLine h1");
	theSubHeading = document.querySelector("#headLine p");
	puzzleBoard = document.querySelector(".puzzle-board");



// Step 3 
// functionality always goes in the middle

function changeBGImage() {
	theHeading.textContent = "The Best Drag and Drop Game"
	theSubHeading.textContent = "Something else"


	let theNewSource = "images/backGround" + this.id + "jpg";

	console.log(theNewSource); 



//Start with the obect, and then change a property 
//Or run a method 

theHeading.classList.add('green-headline'); 

theSubHeading.classList.add('pink-subheading'); 
debugger;

}

// Step 2 
// event heandling always goes at the bottom => how do we want users to interact with our app  => how do we want the app to behave? 

// how do we want users to interact with our app 

// 1 to many event handling 

theButtons.forEach(button => button.addEventListener("click", 
changeBGImage)); 