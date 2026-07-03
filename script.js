

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
   REVEAL
===================================== */

const reveals = document.querySelectorAll(".reveal");

function mostrarReveal() {

    const alturaPantalla = window.innerHeight;

    reveals.forEach(reveal => {

        const posicion = reveal.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 150) {

            reveal.classList.add("active");

        }

    });

}

window.addEventListener("scroll", mostrarReveal);

mostrarReveal();

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

/* =====================================
   ROMPECABEZAS
===================================== */

let piezaSeleccionada = null;

const piezas = document.querySelectorAll(".imagen img");

console.log(piezas.length);

piezas.forEach(pieza => {

    pieza.addEventListener("dragstart", () => {

        piezaSeleccionada = pieza;

        console.log("Arrastrando:", piezaSeleccionada.id);

    });

});

const casilleros = document.querySelectorAll(".casillero");

casilleros.forEach(casillero => {

    casillero.addEventListener("dragover", (e) => {

        e.preventDefault();

    });

    casillero.addEventListener("drop", () => {

        if (casillero.children.length === 0) {

            casillero.appendChild(piezaSeleccionada);

        }

    });

});


/*=====================================
MODO CLARO / OSCURO
=====================================*/

const btnTheme = document.getElementById("toggleTheme");
const iconTheme = document.getElementById("themeIcon");

if (btnTheme && iconTheme) {

    const temaGuardado = localStorage.getItem("theme");

    if (temaGuardado === "light") {

        document.body.classList.add("light");
        iconTheme.src = "assets/icons/sun.svg";

    } else {

        iconTheme.src = "assets/icons/moon-stars.svg";

    }

    btnTheme.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            iconTheme.src = "assets/icons/sun.svg";
            localStorage.setItem("theme", "light");

        } else {

            iconTheme.src = "assets/icons/moon-stars.svg";
            localStorage.setItem("theme", "dark");

        }

    });

    iconTheme.style.transform = "rotate(180deg)";

    setTimeout(() => {

        iconTheme.style.transform = "rotate(0deg)";

    }, 400);

}
