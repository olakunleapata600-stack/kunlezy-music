// =========================
// Mobile Menu
// =========================
function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("show");
    }
}

// =========================
// Listen Now Button
// =========================
const button = document.getElementById("listenBtn");
const song = document.getElementById("song");

if (button && song) {

    button.addEventListener("click", function () {

        song.play();

        song.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// =========================
// Automatic Copyright Year
// =========================
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// =========================
// Back To Top Button
// =========================
const mybutton = document.getElementById("topBtn");

if (mybutton) {

    window.addEventListener("scroll", function () {

        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {

            mybutton.style.display = "block";

        } else {

            mybutton.style.display = "none";

        }

    });

}

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// =========================
// Typing Effect
// =========================
const text = "KUNLEZY MUSIC";
let index = 0;

function typeWriter() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 150);

    }

}

window.addEventListener("load", typeWriter);