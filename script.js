/* =====================================
   NAVBAR
===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================
   REVEAL ENSAMBLAJE
===================================== */

const reveal = document.querySelector(".reveal");

if (reveal) {

    function mostrarReveal() {

        const posicion = reveal.getBoundingClientRect().top;

        const alturaPantalla = window.innerHeight;

        if (posicion < alturaPantalla - 150) {

            reveal.classList.add("active");
        }
    }

    window.addEventListener("scroll", mostrarReveal);

    mostrarReveal();
}

/* =====================================
   VIDEO
===================================== */

const video = document.getElementById("videoHistoria");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const videoTime = document.getElementById("videoTime");

if (video && btnPlay && btnPause && videoTime) {

    btnPlay.addEventListener("click", () => {

        video.play();

    });

    btnPause.addEventListener("click", () => {

        video.pause();

    });

    video.addEventListener("timeupdate", () => {

        const minutos = Math.floor(video.currentTime / 60);

        let segundos = Math.floor(video.currentTime % 60);

        if (segundos < 10) {

            segundos = "0" + segundos;

        }

        videoTime.textContent = `${minutos}:${segundos}`;

    });

    video.addEventListener("ended", () => {

        video.currentTime = 0;

        video.pause();

    });

}