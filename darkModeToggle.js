const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

const navbarEl=document.querySelector(".navbar");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
    navbarEl.style.background="#096369";
  } else {
    bodyEl.style.background = "#096369";
    navbarEl.style.background="#0384a1";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

