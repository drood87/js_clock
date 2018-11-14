const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
let visualTime = document.querySelector(".time-visual");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();
    const secondsDegrees = (seconds / 60) * 360 + 90; // + 90 to eliminte the transform 90 deg from our css in order to get the hands correct
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const hoursDegrees = (hour / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    if (minutes < 10) {
        visualTime.innerHTML = `${hour}:0${minutes}:${seconds}`;
    } else if (seconds < 10) {
        visualTime.innerHTML = `${hour}:${minutes}:0${seconds}`;
    } else if (hour < 10) {
        visualTime.innerHTML = `0${hour}:${minutes}:${seconds}`;
    } else {
        visualTime.innerHTML = `${hour}:${minutes}:${seconds}`;
    }
}

setInterval(setDate, 1000); //setDate is the function
