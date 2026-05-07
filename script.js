// your JS code here
let element = document.getElementById("level");
let level = 1;

while (element.parentElement) {
    level++;
    element = element.parentElement;
}

alert("The level of the element is: " + level);