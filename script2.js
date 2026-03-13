let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateDisplay(){

let h = String(hours).padStart(2,'0');
let m = String(minutes).padStart(2,'0');
let s = String(seconds).padStart(2,'0');
let ms = String(milliseconds).padStart(3,'0');

document.getElementById("display").innerText = h+":"+m+":"+s+":"+ms;
}

function startTimer(){

timer = setInterval(()=>{

milliseconds += 10;

if(milliseconds == 1000){
milliseconds = 0;
seconds++;
}

if(seconds == 60){
seconds = 0;
minutes++;
}

if(minutes == 60){
minutes = 0;
hours++;
}

updateDisplay();

},10);

}

function stopTimer(){
clearInterval(timer);
}

function resetTimer(){

clearInterval(timer);

milliseconds = 0;
seconds = 0;
minutes = 0;
hours = 0;

updateDisplay();

document.getElementById("laps").innerHTML="";
}

function lapTimer(){

let lapTime = document.getElementById("display").innerText;

let li = document.createElement("li");
li.innerText = "Lap - " + lapTime;

document.getElementById("laps").appendChild(li);

}
