

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/gold1.jpg') {
      myImage.setAttribute('src', 'images/gold2.jpg');
    } else {
      myImage.setAttribute('src', 'images/gold1.jpg');
    }
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Congratulations! Dear ' + myName + ', let us take the journey';
    if(!localStorage.getItem('name')) {
      setUserName();
    } else {
      var storedName = localStorage.getItem('name');
      myHeading.textContent = 'Mozilla is cool, ' + storedName;
    }
}

myButton.onclick = function() {
    setUserName();
}