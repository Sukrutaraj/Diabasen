let isReading = false;
let currentSpeech = null;

/* ========================= */
/* UPPLÄSNINGSFUNKTION */
/* ========================= */

function toggleRead() {

    if (!isReading) {

        const content = document.querySelector('.readable-content');
        if (!content) return;

        const text = content.innerText;

        currentSpeech = new SpeechSynthesisUtterance(text);
        currentSpeech.lang = "sv-SE";
        currentSpeech.rate = 1;

        currentSpeech.onend = function () {
            isReading = false;
            updateButton();
        };

        window.speechSynthesis.speak(currentSpeech);
        isReading = true;
        updateButton();

    } else {

        window.speechSynthesis.cancel();
        isReading = false;
        updateButton();

    }
}

function updateButton() {
    const button = document.querySelector('.read-button');
    if (!button) return;

    button.innerText = isReading ? "⏹ Stoppa" : "🔊 Läs upp";
}


/* ========================= */
/* STRUKTUR + VY TOGGLE */
/* ========================= */

document.addEventListener("DOMContentLoaded", function() {

    const toggleStructure = document.getElementById("toggleStructure");
    const toggleView = document.getElementById("toggleView");
    const normalView = document.getElementById("normalView");
    const vandView = document.getElementById("vandView");

    /* Struktur-knapp */
    if (toggleStructure) {
        toggleStructure.addEventListener("click", function() {

            document.body.classList.toggle("show-structure");

            if (document.body.classList.contains("show-structure")) {
                toggleStructure.textContent = "Dölj grupper";
            } else {
                toggleStructure.textContent = "Visa grupper";
            }

        });
    }

    /* Vänd vy-knapp */
    if (toggleView && normalView && vandView) {
        toggleView.addEventListener("click", function() {

            normalView.classList.toggle("active-view");
            vandView.classList.toggle("active-view");

            if (normalView.classList.contains("active-view")) {
                toggleView.textContent = "Vänd vy";
            } else {
                toggleView.textContent = "Normal vy";
            }

        });
    }

});
