// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// AOS
AOS.init({
  duration: 1000,
  once: true
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Search Filter
const searchInput = document.getElementById("jobSearch");
const filter = document.getElementById("jobFilter");
const jobCards = document.querySelectorAll(".job-card");

function filterJobs(){

  const searchValue = searchInput.value.toLowerCase();
  const filterValue = filter.value;

  jobCards.forEach(card => {

    const text = card.innerText.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch = text.includes(searchValue);
    const matchesFilter =
      filterValue === "all" || category === filterValue;

    if(matchesSearch && matchesFilter){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterJobs);
filter.addEventListener("change", filterJobs);

// Accessibility Controls
const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");

let currentFontSize = 100;

increaseFont.addEventListener("click", () => {
  currentFontSize += 10;
  document.body.style.fontSize = currentFontSize + "%";
});

decreaseFont.addEventListener("click", () => {
  currentFontSize -= 10;
  document.body.style.fontSize = currentFontSize + "%";
});

// High Contrast
document.getElementById("contrastToggle")
.addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

// Reading Mode
document.getElementById("readingMode")
.addEventListener("click", () => {
  document.body.classList.toggle("reading-mode");
});

// Text To Speech
document.getElementById("speechBtn")
.addEventListener("click", () => {

  const text = document.body.innerText;

  const speech = new SpeechSynthesisUtterance(text);

  speech.rate = 1;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
});

// Dyslexia Friendly Font
document.getElementById("dyslexiaFont")
.addEventListener("click", () => {

  if(document.body.style.fontFamily === "OpenDyslexic"){
    document.body.style.fontFamily = "Inter";
  } else {
    document.body.style.fontFamily = "OpenDyslexic, sans-serif";
  }
});
