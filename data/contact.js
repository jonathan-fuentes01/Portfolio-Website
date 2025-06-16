export let contact = [];

export function keepInfo(){
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