let health = 100;

function slap() {
  document.getElementById('health'); --health
}

function punch() {
  document.getElementById('health'); --health
}

function kick() {
  document.getElementById('health'); --health
}
// function punch(); { }
// On the slap button element, add the attribute onClick = "slap()"
// If things are working properly you should be able to hit the slap button and see the alert window with a decrease in health.
// To prevent having to show the targets health in popup, let's link the target's health directly to the user interface.
// Add a span element to the header for the target's health, example:
//   < span > Health: <span id="health">--</span></span >
//     The id is important so we can call the element from JS easily.
// creat function slap()
// Have the function reduce the health variable by 1.
// For now, have the function alert(health).
// Test the function by calling slap() at the end of the game.js file.
// You should see an alert of 99 show on the screen.
// If this is working, remove the test to prevent popups on every page load.



// BUTTON PUNCH AND KICK
// Add 2 more buttons Punch, and Kick to the UI, as well as their respective functions in javascript.
// Have the punch function decrease the target's health by 5, and kick by 10.
// Don't forget to call update inside each function.
// Declare 2 more variables 'name', and 'hits' where you initialized the health variable. - Name your target whatever you want, what datatype would a name be ? -Set the variable hits with a value of 0, every time the target is hit by a Slap, Punch, or Kick this variable should be increased by 1.
// Add a placeholder for target name, and hits inside the header next to health.
// Wire everything up like you did for "Slap".


// function update() {
  // update health
  // We are now going to add a function to manipulate the user interface by using the DOM API.
  // To do this, javascript is required.
  // You should know by now that selectors are required in order to select specific elements inside the DOM.
  // In this case, we will use the infamous "document.getElementById("WHATEVER - ID")";
  // Add a function called update().This will be responsible for updating the user interface whenever a value changes.
  // Have the function set the "innerText" of the element with the id "health"
  // Add a call to the update() function at the bottom of your js file.If it is working, you should see the target's health on the screen.
  // There is no need to delete the call you just added, it is recommended so you always start off with populated values.
  // If it is working, make sure you add a call to update at the end of the slap function.This way the screen is updated after every slap.
// } 
