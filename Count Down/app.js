const newYear = "1 Jan 2021";

const displayDay = document.querySelector('.day .number');
const displayHour = document.querySelector(".hour .number");
const displayMin = document.querySelector(".min .number");
const displaySec = document.querySelector(".sec .number");

const contentDay = document.querySelector('.day .content');
const contentHour = document.querySelector(".hour .content");
const contentMin = document.querySelector(".min .content");
const contentSec = document.querySelector(".sec .content");


function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const seconds = (newYearDate - currentDate) / 1000;
    const day = Math.floor(seconds / 3600 / 24);
    const hour = Math.floor((seconds / 3600) % 24);
    const min = Math.floor((seconds / 60) % 60);
    const sec = Math.floor(seconds % 60);

    displayDay.textContent = day;
    displayHour.textContent = hour;
    displayMin.textContent = min;
    displaySec.textContent = sec;

    if( day == 0 || day == 1){
        contentDay.textContent = "Day";
    } else {
        contentDay.textContent = "Days";
    }
    if (hour == 0 || hour == 1) {
      contentHour.textContent = "Hour";
    } else {
      contentHour.textContent = "Hours";
    }
    if (min == 0 || min == 1) {
      contentMin.textContent = "Min";
    } else {
      contentMin.textContent = "Mins";
    }
    if (sec == 0 || sec == 1) {
      contentSec.textContent = "Sec";
    } else {
      contentSec.textContent = "Secs";
    }
}

countdown();

setInterval(countdown,1000);
