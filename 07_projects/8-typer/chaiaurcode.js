const typedTextSpan = document.querySelector(".typed-text")
const cursor = document.querySelector(".cursor")

const words = ["Love", "Zabardast", "Dhammal", "Mast"]

const typingDelay = 150;
const erasingDelay = 100;
const newWordDelay = 1000;

let wordIndex = 0
let charIndex = 0

function type() {
    if(charIndex < words[wordIndex].length) {
        typedTextSpan.textContent += words[wordIndex].charAt(charIndex)
        charIndex++
        setTimeout(type , typingDelay );
    }else {
        setTimeout(erase, newWordDelay);
    }
}


function erase() {
    if (charIndex > 0) {
        charIndex--;
        typedTextSpan.textContent = words[wordIndex].substring(0, charIndex);
        setTimeout(erase, erasingDelay);
    } else {
        wordIndex++;
        if (wordIndex >= words.length) wordIndex = 0;
        setTimeout(type, typingDelay);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newWordDelay);
})