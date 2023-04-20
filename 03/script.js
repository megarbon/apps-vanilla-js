const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

console.log("hola funcionando")

const finCurso = "9 Junio 2023";

function countdown(){
    const finCursoFecha = new Date(finCurso);
    const currentDate = new Date();

    const totalSeconds = (finCursoFecha - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    if (daysEl) daysEl.innerHTML = days;
    if (hoursEl) hoursEl.innerHTML = formatTime(hours);
    if (minsEl) minsEl.innerHTML = formatTime(mins);
    if (secondsEl) secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//inicio

countdown()
setInterval(countdown, 1000);
