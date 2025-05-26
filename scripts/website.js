scrollButtonHandler();
horScrolling();
navbarHighlight();

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

function keepInfo(){
    let nameElement = document.querySelector('.js-name-input');
    const nameInput = nameElement.value;

    let emailElement = document.querySelector('.js-email-input');
    const emailInput = emailElement.value;

    let textElement = document.querySelector('.js-text-input');
    const textInput = textElement.value;

    contact.push({
        name: nameInput,
        email: emailInput,
        text: textInput
    });
    nameElement.value = "";
    emailElement.value = "";
    textElement.value = ""
}

document.querySelector('.js-submit-button')
    .addEventListener('click', () =>{
        keepInfo();
        console.log(contact);
    });

let languagesHTML = "";
technology.forEach( (technology) => {
        languagesHTML = languagesHTML + `
            <div class = 'item'>
                <img src="${technology.image}" alt=""><span class = "label">${technology.name}</span>
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

document.querySelector('.language-container')
    .innerHTML = languagesHTML;
document.querySelector('.libraries-container')
    .innerHTML = librariesHTML