
const MINUTES = 60;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;

const $days = document.getElementById("days");
const $hours = document.getElementById("hours");
const $minutes = document.getElementById("minutes");
const $secondes = document.getElementById("secondes");

const countdown = document.querySelector("#countdown");
const launchDate = Date.parse(countdown.dataset.time) /1000;

function refreshCountdown(){
    const difference = launchDate - Date.now()/1000;

    const diff = {
        days: Math.floor (difference / DAYS),
        hours: Math.floor (difference % DAYS / HOURS),
        minutes: Math.floor (difference % HOURS / MINUTES),
        secondes: Math.floor (difference % MINUTES)
    }

    $days.innerText = diff.days;
    $hours.innerText = diff.hours;
    $minutes.innerText = diff.minutes;
    $secondes.innerText = diff.secondes;

    console.log("hello")
    window.setTimeout(()=>{
        window.requestAnimationFrame(refreshCountdown)
    }, 1000);
}
    
refreshCountdown();