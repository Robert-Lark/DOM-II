// Your code goes here
/*
click
mouseover
mouseleave
mousemove
mouseenter


tabindex = "0"

*/

const body = document.querySelector('body');
const home = document.querySelector('.home');
//EVENT LISTENER 1
const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseenter', function(){
    logo.style.color = 'red';
        logo.addEventListener('mouseleave', function(){
            logo.style.color = 'black';
        });
});

//EVENT LISTENER 2

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

//EVENT LISTENER 3

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(function(navLink){
    navLink.addEventListener('mousemove', function (){
        navLink.style.transform = 'scale(1.5)'})
    navLink.addEventListener('mouseleave', function (){
        navLink.style.transform = 'scale(1)'})
    });
        
//EVENT LISTENER 4
const imgContent= document.querySelector('.img-content');
const  map = document.querySelector('.img-content img');
map.classList.add('link');
    const url = document.createElement('a');
    document.body.appendChild(url);
    url.classList.add('img-content');
    url.appendChild(map);
    imgContent.appendChild(url);
    url.href = 'www.google.com';

map.addEventListener('scroll', function(){
    
    
    

})
