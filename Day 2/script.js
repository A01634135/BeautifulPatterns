// Object Date
var now = new Date()
var h = now.getHours()
var m = now.getMinutes()
var s = now.getSeconds()

// Handling variable data
var current_hour = "The current hour is: " + h + ":" + m + "." + s
console.log(current_hour)

var starnge_hour = "Strange hour: " + 10000 + h + ":" + m + "." + s
console.log(starnge_hour)

// Flow control
if(h < 10){
	h = "0" + h
}

if(m < 10){
	m = "0" + m
}

if(s < 10){
	s = "0" + s
}

var current_hour_modified = "Current hour modified: " + h + ":" + m + "." + s
console.log(current_hour_modified)

/* Function concept
	- Void functions
  - Functions that return an object
*/
function addZeros(time){
    if(time < 10){
        time = "0"+time
    }
    return time
}

var current_hour_modified_with_functions = "Current Hour Modified with functions : " + addZeros(h) + ":" + addZeros(m) + "." + addZeros(s)

console.log(current_hour_modified_with_functions)


function modify_hour(){
  if(h < 10){
    h = "0" + h
  }

  if(m < 10){
    m = "0" + m
  }

  if(s < 10){
    s = "0" + s
  }
}

modify_hour()
var current_hour_modified = "Modified hour with fucntions: " + h + ":" + m + "." + s
console.log(current_hour_modified)

// Add content from HTML day_3.js

// Generate alert
// Will help to visualilze the change in functions, in the system's console
// and on the wesite
alert("Cool Alert")

var cool_text = document.getElementById("id_of_cool_text")
var text = "The text on the page is: '" + cool_text.textContent + "' "
console.log(text)

// More info on finction getElementById
// https://developer.mozilla.org/es/docs/Web/API/Document/getElementById

cool_text.textContent = "New cool text"

// Concept of Setters y Getters functions to modify objects
function get_text(element){
	return element.textContent
}

function set_text(element, text){
	element.textContent = text
}

alert("Another cool alert")

set_text(cool_text, "HELLOOOO")
console.log("The new cool text is: " + get_text(cool_text))
