let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/TuxFlat.svg') {
        myImage.setAttribute('src', 'images/Tux_Enhanced.svg');
    } else {
        myImage.setAttribute('src', 'images/TuxFlat.svg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');
function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName;
}
myButton.onclick = function() {
    setUserName();
}