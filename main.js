// for (var i in li) {
//   li[i].style.color = "gray";
// } 
// should NOT use for-in loops on HTML obj or arrays because 
// they're for accessing properties.
// HTML objects have extra properties.

// SELECTORS 
// .querySelector(".class");         selects one
// .querySelectorAll("query");       selects all 
// .getElementsByTagName("tag");
// .getElementById("id");
// 

// PROPERTIES:
// .children
// .style
//

// ADD CONTENT:
// parent.appendChild("newItemWithHTML"); 
// .innerHtml= "<tag>content</tag>";
// .innerTxt = "text";
// .insertBefore(html, lists[0].firstChild)

// or .remove
// .createElement


// LOOPING ELEMENTS 
// var li = document.getElementsByTagName("li");
// for (var i=0; i < li.length ; i++) {
//   li[i].style.color = "gray";
// } 


// ANIMALS AND SOUNDS TABLE
var animals = {
               Animals: "Sounds",
               cow: "moo", 
               dog: "woof", 
               fish: "blub", 
               frog: "croak", 
               whale: "awuu",
               };

var table = document.createElement("table");
var tbody = document.createElement("tbody");

document.querySelector('body').appendChild(table);
table.appendChild(tbody);

for (var animal in animals) {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText = animal;
  var td2 = document.createElement("td");
  td2.innerText = animals[animal];
  tbody.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
}


// AESTHETICS (broken)
var br = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");
var tabled = document.querySelector("table");


// EVENTS, HANDLERS, LISTENERS

// One way to add an event listener. 
window.addEventListener("click", function(){
  alert("AH HA YOU CLICKED ME");
});
// Named the selector to easily find and access. 
var button = document.querySelector("button");
// Always name in case you want to remove later. 
function annoyingAlert() { 
  alert("YOU CLICKED ON THE BUTTON!");
  }
// Altogether. 
//button.addEventListener("click", annoyingAlert);

// Fancier Button Example
var clickCount = 0;
button.addEventListener('click', function(e) {
  clickCount++;
  button.innerText = "Number of times you've clicked on me: " + clickCount;
  console.log("is e.target the same as button?", e.target === button);
  console.log("Here's the entire event!", e);
});

// Add event listeners to a bunch of elements!
var list = document.querySelectorAll('li');
for (var i=0; i < list.length; i++) {
  list[i].addEventListener('click', function() {
    console.log('Good job, Katie!');
  });
}

// Check to see if your target

