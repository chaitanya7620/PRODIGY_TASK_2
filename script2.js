let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let lapCount = 0;

function start() {
    if (timer !== null) return;
    timer = setInterval(updateTime, 10);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop();
    milliseconds = seconds = minutes = hours = 0;
    lapCount = 0;
    document.getElementById("display").innerText = "00:00:00:000";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (milliseconds === 0 && seconds === 0 && minutes === 0 && hours === 0) return;

    lapCount++;
    const lapTime = document.getElementById("display").innerText;
    const li = document.createElement("li");
    li.innerText = `Lap ${lapCount} — ${lapTime}`;
    document.getElementById("laps").appendChild(li);
}

function updateTime() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10 ? "00" + milliseconds :
        milliseconds < 100 ? "0" + milliseconds :
        milliseconds;

    document.getElementById("display").innerText =
        `${h}:${m}:${s}:${ms}`;
}
