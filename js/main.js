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

// Eventlyssnare när man klickar på submit
form.addEventListener("submit", function (event) {
    event.preventDefault();

  

    // Återställer felmeddelande
    errorList.innerHTML = "";
    document.querySelector("#fullname").style.border = "1px solid #ccc";
    document.querySelector("#email").style.border = "1px solid #ccc";
    document.querySelector("#phone").style.border = "1px solid #ccc";

    // Array som används för felmeddelanden
    let errorArr = [];

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
        errorArr.push("Ange ett telefonfummer");
    }


    // Felmeddelande i lista
    errorArr.forEach(error => {
        const liEl = document.createElement("li");
        const textNode = document.createTextNode(error);
        liEl.appendChild(textNode);
        errorList.appendChild(liEl);

    });

    // Sparar i Local Storage
    const user = {
        name: fullnameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    }


    const userJson = JSON.stringify(user);
    localStorage.setItem("user", userJson);

    writeUser();
})

function writeUser() {

    // Hämta information från formuläret
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson);

    // Funktion som körs när inga värden finns
    if (user === null) {
        return;
    }


    // Uppdatera studentkortet

    previewfullname.append(`: ${user.name}`);
    previewemail.append(`: ${user.email}`);
    previewphone.append(`: ${user.phone}`);

    // Lägg till studentkortet i historiken

    // Spara och uppdatera historiken
}


// Array som innehåller sparade studentkort
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {


    // Kontrollera formulärets obligatoriska fält

    // Visa eventuella felmeddelanden

    // Returnera resultatet (true eller false) av valideringen
}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
    // Rensa tidigare felmeddelanden

    // Skriv ut aktuella felmeddelanden till DOM
}


/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
    // Hämta information från formuläret


    // Uppdatera studentkortet

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