
console.log('Hi');

//set up the element that triggers my function
let trigger = document.getElementById('h1');

//set up the event listener for clicking on the trigger
trigger.addEventListener('click', function(){
	//what happens on click
	console.log('darkmode button clicked!');
	document.body.classList.toggle('darkmode');

   // Change the text content of the heading based on the current mode
  if (document.body.classList.contains('darkmode')) {
    trigger.innerHTML = "Annie's <span class='dark'>Dark</span> Class Website"; // Underline "Dark"
  } else {
    trigger.innerHTML = "Annie's <span class='light'>Light</span> Class Website"; // Underline "Light"
  }

});

// function functionName(){

// }