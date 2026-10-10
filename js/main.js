"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Sara Lagerquist
 */

// Hämta element från DOM

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

const form = document.querySelector("#studentform");



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

    if (!validateForm(name, email, phone)) {
        displayErrors();
    } else {
        saveHistory(name, email, phone);
        clearForm();
    }

    // Rensar förmulär efter lyckad submit





};

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */


// Validerar formuläret
function validateForm(name, email, phone) {

    // Array för felmeddelanden

    errorArr = [];
    errorList.innerHTML = "";

    // Kontrollera formulärets obligatoriska fält
    let validate = true;



    // Visa eventuella felmeddelanden
    // Validera namn
    if (name.length === 0) {
        errorArr.push("Ange ett namn");
        validate = false;
    }

    // Validera e-post
    if (email.length === 0) {
        errorArr.push("Ange ett e-post");
        validate = false;
    }

    // Validera telefon
    if (phone.length === 0) {
        errorArr.push("Ange ett telefonnummer");
        validate = false;
    }

    // Returnera resultatet av validering
    return validate;
}

/**
 * Visar felmeddelanden på sidan.
 */

function displayErrors() {

    // Rensa tidigare felmeddelanden


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

function createStudentCard() {

    // Hämta information från formuläret


    // Funktion som körs när inga värden finns


    // Uppdatera studentkortet

    // Lägg till studentkortet i historiken

    // Spara och uppdatera historiken
}

/**
 * Sparar historiken i localStorage.
 */

function saveHistory(name, email, phone) {

    // Spara history i localStorage
    const user = {
        name: name,
        email: email,
        phone: phone
    }

    const localStorageData = localStorage.getItem("users");

    let users = JSON.parse(localStorageData);

    if (users === null) {
        users = [];
    }
    users.push(user);

    const usersJson = JSON.stringify(users);

    localStorage.setItem("users", usersJson);

    renderHistory();
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik

    // Uppdatera history
}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {

    // Rensa tidigare visad historik

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
        Telefon: ${users[i].phone}`;

        sectionEl.appendChild(pEl);
        historySection.appendChild(sectionEl);
    }
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */


function clearForm() {

    // Återställ formulär och studentkort

    fullnameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";

    // Rensa eventuella felmeddelanden
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


// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - skapa studentkort om valideringen lyckas


// När användaren klickar på "Rensa"


// När användaren klickar på "Radera historik"


// När sidan laddas:
// - läs in och visa eventuell tidigare historik