const bodyEl = document.querySelector("body");
const containerEl = document.querySelector(".container");
const ringInEls = document.querySelectorAll(".ring-in");
const inputEl = document.querySelector(".input");
const liEls = document.querySelectorAll(".marked-list ul li");
// dark moud

function loadMode() {
  const storedMode = JSON.parse(localStorage.getItem("mode"));
  if (storedMode !== null) {
    inputEl.checked = storedMode;
    updateBody();
  }
}

function updateBody() {
  if (inputEl.checked) {
    containerEl.classList.add("dark");
  } else {
    containerEl.classList.remove("dark");
  }
}

function updateLocaleStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocaleStorage();
});

loadMode();

// progress bar
const porgressEls = document.querySelectorAll(".porgress");
const rings = document.querySelectorAll(".ring-progress");

function animateBar(bar) {
  let progress = parseFloat(bar.dataset.progress);
  let current = 0;

  let interval = setInterval(() => {
    current++;
    bar.style.setProperty("--p", current);

    if (current >= progress) {
      clearInterval(interval);
    }
  }, 20);
}

porgressEls.forEach(animateBar);
rings.forEach(animateBar);
