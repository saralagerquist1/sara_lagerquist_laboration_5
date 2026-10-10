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



// Array som innehåller sparade studentkort
let history = [];

// Eventlyssnare
form.addEventListener("submit", function (event) {
    // Förhindrar att sidan laddas om
    event.preventDefault();

    const valid = validateForm();

    if (!valid) {
        return;
    }

    // Sparar i Local Storage
    const user = {
        name: fullnameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    }

    const userJson = JSON.stringify(user);
    localStorage.setItem("user", userJson);

    // Rensar förmulär efter lyckad submit
    fullnameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";

    createStudentCard();

});

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */

function validateForm() {


    // Kontrollera formulärets obligatoriska fält

    // Array som används för felmeddelanden
    let errorArr = [];

    // Visa eventuella felmeddelanden

    // Validera namn
    if (fullnameInput.value.length === 0) {
        errorArr.push("Ange ett namn");
    }

    // Validera e-post
    if (emailInput.value.length === 0) {
        errorArr.push("Ange ett e-post");
    }

    // Validera telefon
    if (phoneInput.value.length === 0) {
        errorArr.push("Ange ett telefonnummer");
    }

    // 
    displayErrors(errorArr);

    // Returnera resultatet av validering
    return errorArr.length === 0;
}


/**
 * Visar felmeddelanden på sidan.
 */

function displayErrors(errorArr) {

    // Rensa tidigare felmeddelanden
    errorList.innerHTML = "";
    document.querySelector("#fullname").style.border = "1px solid #ccc";
    document.querySelector("#email").style.border = "1px solid #ccc";
    document.querySelector("#phone").style.border = "1px solid #ccc";

    // Skriv ut aktuella felmeddelanden till DOM
    errorArr.forEach(error => {
        const liEl = document.createElement("li");
        const textNode = document.createTextNode(error);

        liEl.appendChild(textNode);
        errorList.appendChild(liEl);

    });


}


/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {

    // Hämta information från formuläret
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson);

    // Funktion som körs när inga värden finns
    if (user === null) {
        return;
    }

    // Uppdatera studentkortet
    previewfullname.textContent = `Namn ${user.name}`;
    previewemail.textContent = `E-post ${user.email}`;
    previewphone.textContent = `Telefon ${user.phone}`;
    // Lägg till studentkortet i historiken

    // Spara och uppdatera historiken
}





/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    // Spara history i localStorage
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
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {

    // Återställ formulär och studentkort

    


    // Rensa eventuella felmeddelanden
}


/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik

    // Uppdatera history och visningen på sidan
}


// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - skapa studentkort om valideringen lyckas


// När användaren klickar på "Rensa"


// När användaren klickar på "Radera historik"


// När sidan laddas:
// - läs in och visa eventuell tidigare historik