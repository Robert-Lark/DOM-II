// Your code goes here
/*
Event Listeners used:

mouseenter
mouseleave
mouseover
mousemove
click
keypress
scroll
mouseup
mousedown
dblclick
contextmenu


*/

const body = document.querySelector('body');
const home = document.querySelector('.home');
//EVENT LISTENER 1 Mouseenter Mouseleave 
// changes the logo when hovered over
const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseenter', function(){
    logo.style = 'color: red;';
    
        logo.addEventListener('mouseleave', function(){
            logo.style = 'color: black; border: none;'
        });
});

//EVENT LISTENER 2 mouseover
// Secret Bambam image appears when ! is hovered over

const secretBamBam = document.querySelector('h2');
secretBamBam.innerHTML = 'Welcome To Fun Bus<span class ="secret">!</span>'
const secret = secretBamBam.querySelector('.secret');

secret.addEventListener('mouseover', function() {
    const img = document.createElement('img');
    img.src = 'img/Screen Shot 2020-05-21 at 6.40.49 PM.png';
    img.style.height = '100vh';
    img.style.width = '100vw';    
    img.classList.add('secret');
    document.body.prepend(img);
    secret.addEventListener('mouseleave', function() {
        img.style.height = '0.1px';
        img.style.width = '0.1px';   
})
})

//EVENT LISTENER 3 Mousemove mouseleave
// enlarge and shrink nav links useing .forEach

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(function(navLink){
    navLink.addEventListener('mousemove', function (){
        navLink.style.transform = 'scale(1.5)'})
    navLink.addEventListener('mouseleave', function (){
        navLink.style.transform = 'scale(1)'})
    });
        
//EVENT LISTENER 4 click
// single click on the image of a map will take you to 
// googleMaps

const imgContent= document.querySelector('.img-content');
const  map = document.querySelector('.img-content img');
map.classList.add('link');
const url = document.createElement('a');
document.body.appendChild(url);
url.classList.add('img-content');
url.appendChild(map);
imgContent.appendChild(url);

map.addEventListener('click', function(){ 
    url.href = 'https://www.google.com/maps';
})


//EVENT LISTENER 5 KEYDOWN 
//when the p key is hit will take you to sneezing panda video

/*
//query selectors

const destination = document.querySelector('.destination');
const footer = document.querySelector('footer');

//button code
const button = document.createElement('button');
document.body.appendChild(button);
destination.appendChild(button);
button.style = "width: 150px; height: 40px; background-color: red; border: 2px solid black; margin: 15% 0% 2% 128%; font-family: times new roman; font-weight: bold;"
button.innerText = ('BACK TO THE TOP');

//link code

const bottomA = document.createElement('a');
document.body.appendChild(bottomA);
bottomA.classList.add = ('bottom');
bottomA.href = 'https://www.youtube.com/watch?v=93hq0YU3Gqk';
bottomA.appendChild(button);
destination.appendChild(bottomA);

//event listener

document.addEventListener('keypress', function(event){
    if (event.key === 's') {
        bottomA.href = 'https://www.youtube.com/watch?v=93hq0YU3Gqk';
        button.click()
    }})

*/

//EVENT LISTENER 5 KEYDOWN harder version

// Pressing the B key will take you to the 
// bottom of the page
//query selectors
const destination = document.querySelectorAll('.destination')[1];
const footer = document.querySelector('.footer');
const header = document.querySelector('header');
//button code (placed at the bottom of the page - when clicked will take you to the top of the page)

const button = document.createElement('button');
document.body.appendChild(button);
button.id = 'button';
destination.appendChild(button);
button.style = "width: 150px; height: 40px; background-color: red; border: 2px solid black; margin: 15% 0% 2% 12%; font-family: times new roman; font-weight: bold;"
button.innerText = ('BACK TO THE TOP');
header.id = 'header';
//link code
//create the link
const bottomA = document.createElement('a');
//put it on the page
document.body.appendChild(bottomA);
//give it the same class as button
bottomA.classList.add = ('bottom');
//give it a local url of header so when clicked it will take 
//you to the header
bottomA.href = '#header';
//put it on the button
bottomA.appendChild(button);
destination.appendChild(bottomA);
//event listener if the b key is pressed the link will
//change from .header to .footer and the button will be clicked.
document.addEventListener('keypress', function(event){
    if (event.key === 'b') {
        bottomA.href = '#button';
        button.click()
    } else {
        null
    }})



//EVENT LISTENER 6 scroll
//Scrolling makes the nav-bar fade
const navContainer = document.createElement('div')
document.body.prepend(navContainer);
navContainer.appendChild(header);
navContainer.classList.add('fade-scroll');
const script = document.createElement('script');
document.body.prepend(script);
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'
document.addEventListener('scroll', function() {  
    var documentEl = $(document),
        fadeElem = $('.fade-scroll');
    documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();
        fadeElem.each(function() {
            var $this = $(this),
                elemOffsetTop = $this.offset().top;
            if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/400);
        }); 
    });
});



//EVENT LISTENER 7 Mouseup + event propagation
//Un-depressing the mouse over the intro will turn the background 
//red

const anotherMouseEvent = document.querySelectorAll('.content-section');

home.addEventListener('mouseup', function(){
    home.style.background = ('green');
/*

//NESTED EVENT LISTENERS:
    anotherMouseEvent.forEach(function(anotherMouseEvent){
        anotherMouseEvent.addEventListener('mouseup', function(event){
            anotherMouseEvent.style.backgroundColor = 'red';
            event.stopPropagation();
        })
    })
    anotherMouseEvent.forEach(function(anotherMouseEvent){
        anotherMouseEvent.addEventListener('mousedown', function(event){
            anotherMouseEvent.style.backgroundColor = 'gold';
            event.stopPropagation();
        })
    })
*/
})
anotherMouseEvent.forEach(function(anotherMouseEvent){
    anotherMouseEvent.addEventListener('mouseup', function(event){
        anotherMouseEvent.style.backgroundColor = 'red';
        event.stopPropagation();
    })
})


//EVENT LISTENER 8 Mousedown + event propagation
//depressing the mouse over the content section will turn the background 
//yellow



    anotherMouseEvent.forEach(function(anotherMouseEvent){
        anotherMouseEvent.addEventListener('mousedown', function(event){
            anotherMouseEvent.style.backgroundColor = 'gold';
            event.stopPropagation();
        })
    })


//EVENT LISTENER 9 
// double clicking on the img will change it. 
const imgTag = document.querySelector('.content-destination img')

document.addEventListener('dblclick', function(){
imgTag.src = 'img/postcard 1.jpg'

})

//Event Listener 10
// right clicking on the image will change it.
document.addEventListener('contextmenu', function(){
    imgTag.src = 'img/destination.jpg'
})


//preventing default nav behavior

const navA = document.querySelector('.nav-link');

navA.addEventListener('click', function(event){
    event.preventDefault();
})



//stretch


const stretchDiv = document.createElement('div'); stretchDiv.id = 'stretch'; document.body.appendChild(stretchDiv);
const img001 = document.createElement('img')
img001.src = 'img/Screen Shot 2020-06-08 at 1.41.48 PM.png'; 
const img002 = document.createElement('img')
img002.src = 'img/Screen Shot 2020-06-08 at 1.41.27 PM.png'; 
const img003 = document.createElement('img')
img003.src = 'img/Screen Shot 2020-06-08 at 1.41.17 PM.png'; 
const img004 = document.createElement('img')
img004.src = 'img/Screen Shot 2020-06-08 at 1.40.56 PM.png';
//document.body.appendChild(img001);
// document.body.appendChild(img002);
// document.body.appendChild(img003);
// document.body.appendChild(img004);
const section001 = document.createElement('section'); section001.classList.add('panel');section001.classList.add('red'); document.body.appendChild(section001);
const section002 = document.createElement('section'); section002.classList.add('panel');section002.classList.add('orange'); document.body.appendChild(section002);
const section003 = document.createElement('section'); section003.classList.add('panel');section003.classList.add('purple'); document.body.appendChild(section003);
const section004 = document.createElement('section'); section004.classList.add('panel');section004.classList.add('green'); document.body.appendChild(section004);

const allSections = document.querySelector('section .panel'); 

//stretchDiv.appendChild(img001);
stretchDiv.appendChild(section001);
stretchDiv.appendChild(section002);
stretchDiv.appendChild(section003);
stretchDiv.appendChild(section004);

section001.appendChild(img001);
section002.appendChild(img002);
section003.appendChild(img003);
section004.appendChild(img004);

const panel = document.querySelector('.panel');
panel.style = 'position: absolute; will-change: transform;';

document.addEventListener('scroll', function(){
    gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -100, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});


gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
})

