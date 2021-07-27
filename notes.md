let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'Pancakes2.jpg') {
      myImage.setAttribute('src','Mayhem3.jpg');
    } else {
      myImage.setAttribute('src','Pancakes2.jpg');
    }
}
above goes in main.js


<img src="Pancakes2.jpg" alt="A delicious looking stack of pancakes drowned in fruit.">
goes in html




    <body id="top" class="bg-gradient-to-r from-blue-900 via-blue-400 to-blue-900 ... text-white text-center grid place-items-center">
       
        <h1 class="text-2xl">Fried rice</h1>
        
        <p>At Mozilla, we’re a global community of</p>
       


       <button>Change user</button>
       <script src="main.js"></script>
    </body>


    ABOVE is what you can put in html (gives Change User)


    let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Fried rice on a fishstick, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Fried rice on a fishstick, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }