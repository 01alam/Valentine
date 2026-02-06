let step = 0;

const messages = [
  "I don’t know your name yet.\nBut I know the first day I saw you,\nsomething felt calm.",
  "You sit with your mother.\nThat tells me something good about you.",
  "I never spoke because respect sometimes looks like silence.",
  "This is not a proposal for love.\nJust a request to know you."
];

function nextMessage() {
  if (step < messages.length) {
    document.getElementById("text").innerText = messages[step];
    step++;
  } else {
    document.getElementById("choices").classList.remove("hidden");
  }
}

function yes() {
  document.getElementById("final").innerText =
    "Thank you for your courage.\nWhatever happens, I promise respect.";
  document.getElementById("choices").style.display = "none";
}

function no() {
  document.getElementById("final").innerText =
    "Thank you for your honesty.\nI wish you peace and happiness.";
  document.getElementById("choices").style.display = "none";
}
