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
  const message = encodeURIComponent(
    "Hi. I saw your Valentine page. I’d like to know you too."
  );

  const phoneNumber = "917518478301"; // ← your WhatsApp number (with country code)

  window.open(
    `https://wa.me/${phoneNumber}?text=${message}`,
    "_blank"
  );
}

function no() {
  document.getElementById("final").innerText =
    "Thank you for your honesty.\nI wish you peace and happiness.";
  document.getElementById("choices").style.display = "none";
}

