let isReading = false;
let currentSpeech = null;

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
