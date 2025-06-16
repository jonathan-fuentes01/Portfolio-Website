scrollButtonHandler();
horScrolling();
navbarHighlight();

import {libraries, technology, tools} from '../data/technology.js';
import {contact, keepInfo} from '../data/contact.js';
import {gallery1} from '../data/gallery.js';

function scrollButtonHandler(){ 
    let scrollContainer = document.querySelector('.gallery');
    let backButton = document.querySelector('.js-back-button');
    let forwardButton = document.querySelector('.js-forward-button');

    forwardButton.addEventListener("click", () => {
        scrollContainer.scrollLeft += 900;
    });
    backButton.addEventListener("click", function(){
        scrollContainer.scrollLeft -= 900;
    });
}
function horScrolling() {
    let scrollContainer = document.querySelector('.gallery');
    let backButton = document.querySelector('.js-back-button');
    let forwardButton = document.querySelector('.js-forward-button');

    scrollContainer.addEventListener("wheel", event => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
    });
}

function navbarHighlight(){
    const sections = document.querySelectorAll('section');
    const nav = document.querySelectorAll('nav .nav-container a');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(pageYOffset >= sectionTop){
                currentSection = section.getAttribute('id');
            }
        })
        nav.forEach(a => {
            a.classList.remove('active');
            if(a.classList.contains(currentSection)){
                a.classList.add('active');
            }
        })
    })
}

let galleryHTML = "";

gallery1.forEach( (gallery1) => {
    galleryHTML += `
        <button class = "gallery-image-button js-gallery-button">
        <span>
            <a href = "${gallery1.source}" download>
                <img src="${gallery1.image}" alt="">
            </a>
        </span>
        </button>
    `;
});

document.querySelector('.js-gallery')
    .innerHTML = `
        <div>
            ${galleryHTML}
        </div>
        `;

let languagesHTML = "";
technology.forEach( (technology) => {
        languagesHTML = languagesHTML + `
            <div class = 'item'>
                <img src="${technology.image}" alt="">
                <span class = "label">${technology.name}</span>
            </div>
            `
});

let librariesHTML = ""
libraries.forEach( (libraries) => {
        librariesHTML = librariesHTML + `
            <div class = 'item'>
                <img src="${libraries.image}" alt=""><span class = "label">${libraries.name}</span>
            </div>
            `
});

let toolsHTML = ""
tools.forEach((tools) => {
    toolsHTML += `
        <div class = 'item'>
            <img src = "${tools.image}" alt = "">
            <span class = "label">${tools.name}</span>
        </div>
    `
});

document.querySelector('.language-container')
    .innerHTML = languagesHTML;
document.querySelector('.libraries-container')
    .innerHTML = librariesHTML;
document.querySelector('.tools-container')
    .innerHTML = toolsHTML;