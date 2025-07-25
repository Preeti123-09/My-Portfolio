// Typing Effect
const text = ["Developer", "Designer", "Coder"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const element = document.getElementById("typed-text");

  if (index >= text.length) index = 0;
  currentText = text[index];

  if (!isDeleting) {
    element.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    element.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  }

  setTimeout(type, isDeleting ? 100 : 150);
}

document.addEventListener("DOMContentLoaded", type);
