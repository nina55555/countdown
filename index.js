


const MINUTES = 60;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;

const elements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    secondes: document.getElementById("secondes")
}

const countdown = document.querySelector("#countdown");
const launchDate = Date.parse(countdown.dataset.time) /1000;

let previousDiff = {}

function refreshCountdown(){
    const difference = launchDate - Date.now()/1000;
    if (difference < 1){
        document.location = "end-auction.html";
        return;
    }
    const diff = {
        days: Math.floor (difference / DAYS),
        hours: Math.floor (difference % DAYS / HOURS),
        minutes: Math.floor (difference % HOURS / MINUTES),
        secondes: Math.floor (difference % MINUTES)
    }
    //console.log("hello")
    updateDom(diff);
    window.setTimeout(()=>{
        window.requestAnimationFrame(refreshCountdown)
    }, 1000);
}
    


/**
 * Met à jour la structure en fonction d'un interval timeout
 * @param {{days: number, hours: number, minutes: number, secondes: number}} diff 
 */

function updateDom(diff){
    Object.keys(diff).forEach((key)=> {
        if(previousDiff[key] != diff[key]){
            elements[key].innerText = diff[key];
            //console.log(`updating ${key}`);
        }
    })  
previousDiff = diff        
}

refreshCountdown();

