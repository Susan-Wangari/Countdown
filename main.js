const startTime = 30; //in minutes
let time = startTime * 60; //multiply to get time in seconds

const countdownTime = document.getElementById('countdown'); 

setInterval(updateCountdown, 1000);

function updateCountdown()  {
    const minutes = Math.floor(time / 60); //converts time to minutes
    let seconds = time % 60; //time in seconds remains the same\
    seconds = seconds < 10 ? '0' + seconds: seconds; //if seconds is zero it adds another zero
    countdownTime.innerHTML = `${minutes}: ${seconds}`;
    time--;
}