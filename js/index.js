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

home.addEventListener('mousedown', function(){
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
