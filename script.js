const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

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
    console.log(`${hour}:${minutes}:${seconds}`);
}

setInterval(setDate, 1000); //setDate is the function
