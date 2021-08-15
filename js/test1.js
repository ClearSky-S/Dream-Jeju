let myImage = document.querySelector('img');
myImage.onclick=()=>{
    let mySrc = myImage.getAttribute('src');
    console.log(mySrc);
    if(mySrc === "images/icon-1.jpg"){
        myImage.setAttribute('src',"images/icon-2.jpg")
    } else{
        myImage.setAttribute('src',"images/icon-1.jpg")
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Enter your name');
    if(!myName){
        setUserName();
    } else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;

    }
}

myButton.onclick = setUserName;


if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }