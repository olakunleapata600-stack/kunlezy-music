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