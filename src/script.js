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

setInterval(() => {
  increaseProgres(porgressEls);
}, 500);

function increaseProgres(elements) {
  elements.forEach((bar) => {
    let getWidth = parseFloat(bar.dataset.progress);
    for (var i = 0; i < getWidth; i++) {
      bar.style.width = i + "%";
    }
  });
}
