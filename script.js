function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

const button = document.querySelector("button");
const song = document.getElementById("song");

button.addEventListener("click", function () {
    song.play();
    song.scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

let mybutton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
