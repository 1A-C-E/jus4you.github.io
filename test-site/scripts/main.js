var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/Users/archiecolemaneke/web-projects/test-site/images/Morcha-Browsers-Firefox.ico') {
      myImage.setAttribute ('src','/Users/archiecolemaneke/web-projects/test-site/images/Firefox_Nightly_Logo,_2017.png');
    } else {
      myImage.setAttribute ('src','/Users/archiecolemaneke/web-projects/test-site/images/Morcha-Browsers-Firefox.ico');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}