"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Sara Lagerquist
 */

// Hämta element från DOM

const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");


// Array som används för felmeddelanden
let errorArr = [];

// Array som innehåller sparade studentkort
let history = [];

// Eventlyssnare
clearButton.addEventListener("click", clearForm);
form.addEventListener("submit", onSubmit);
deleteHistoryButton.addEventListener("click", deleteHistory);

function onSubmit(event) {
    event.preventDefault();

    // Läser in värden från formuläret
    const name = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const font = fontSelect.value.trim();

    if (!validateForm(name, email, phone, font)) {
        displayErrors();
    } else {
        createStudentCard(name, email, phone, font);
        /*clearForm();*/
    }
}

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
// Validerar formulärets inmatning.
function validateForm(name, email, phone, font) {

    // Kontrollera formulärets obligatoriska fält
    let validate = true;


    // Visa eventuella felmeddelanden
    errorArr = [];
    errorList.innerHTML = "";

    if (name.length === 0) {
        errorArr.push("Ange ett namn");
        validate = false;
    }


    if (email.length === 0) {
        errorArr.push("Ange ett e-post");
        validate = false;
    }


    if (phone.length === 0) {
        errorArr.push("Ange ett telefonnummer");
        validate = false;
    }

    // Returnera resultatet (true eller false) av valideringen
    return validate;
}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {

    // Rensar tidigare felmeddelanden

    // Skriv ut aktuella felmeddelanden till DOM
    if (errorArr.length > 0) {
        for (let i = 0; i < errorArr.length; i++) {
            const liEl = document.createElement("li");
            liEl.innerHTML = (errorArr[i]);

            errorList.appendChild(liEl);

        }
    }

}

/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard(name, email, phone, font) {

    // Hämta information i formuläret


    // Uppdatera studentkortet
    previewFullname.textContent = ` ${name}`;
    previewEmail.textContent = ` ${email}`;
    previewPhone.textContent = ` ${phone}`;

    previewFullname.style.fontFamily = font;
    previewEmail.style.fontFamily = font;
    previewPhone.style.fontFamily = font;

    // Lägg till studentkortet i historiken
    saveHistory(name, email, phone, font);

    // Spara och uppdatera historiken
    renderHistory();
}


// Spara history i localStorage
function saveHistory(name, email, phone, font) {

    const user = {
        name: name,
        email: email,
        phone: phone,
        font: font
    };

    const localStorageData = localStorage.getItem("users");

    let users = JSON.parse(localStorageData);

    if (users === null) {
        users = [];
    }
    users.push(user);

    const usersJson = JSON.stringify(users);

    localStorage.setItem("users", usersJson);
}



/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {

    // Hämta eventuell sparad historik
    const localStorageData = localStorage.getItem("users");

    // Uppdatera history
    history = JSON.parse(localStorageData) || [];
    renderHistory();
}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {

    // Rensa tidigare visad historik
    historySection.innerHTML = "";

    // Skriv ut innehållet i history till DOM
    const localStorageData = localStorage.getItem("users");
    const users = JSON.parse(localStorageData);
    if (users === null) {
        return;
    }

    for (let i = 0; i < users.length; i++) {
        const sectionEl = document.createElement("section");

        const pEl = document.createElement("p");
        pEl.innerHTML = `Namn: ${users[i].name}
        <br>
        E-postadress: ${users[i].email}
        <br>
        Telefon: ${users[i].phone}
        <br>
        Typsnitt: ${users[i].font}`;

        sectionEl.appendChild(pEl);
        historySection.appendChild(sectionEl);
    }
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {

    // Återställer formulär och studentkort
    fullnameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";

    previewFullname.textContent = `Namn: `;
    previewEmail.textContent = `E-post: `;
    previewPhone.textContent = `Telefon: `;

    // Rensa eventuella felmeddelanden
    errorList.innerHTML = "";
}

/**
 * Raderar hela historiken.
 */
function deleteHistory() {

    // Radera sparad historik
    localStorage.removeItem("users");

    // Uppdatera history och visningen på sidan
    history = [];
    historySection.innerHTML = "";
}

loadHistory();
