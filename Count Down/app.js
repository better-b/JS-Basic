const newYears = "1 Jan 2021";
const displayDate = document.querySelector('.days');
const displayHour = document.querySelector('.hours');
const displayMin = document.querySelector('.mins');
const displaySec = document.querySelector('.secs');

const contentDate = document.querySelector('.day-content');
const contentHour = document.querySelector('.hour-content');
const contentMin = document.querySelector('.min-content');
const contentSec = document.querySelector('.sec-content');

const newYearsDate = new Date(newYears);
const currentDate = new Date();
function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(seconds / 3600 / 24);

    const hours = Math.floor(seconds / 3600) % 24;

    const mins = Math.floor(seconds / 60) % 60;

    const secs = Math.floor(seconds % 60);

    console.log(days, hours, mins, secs);

    displayDate.innerHTML = formatTime(days);
    displayHour.innerHTML = formatTime(hours);
    displayMin.innerHTML = formatTime(mins);
    displaySec.innerHTML = formatTime(secs);

};

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
};

function formatContent() {
    if(displayDate == 0 || displaydate == 1) {
        contentDate.textContent = "Day";
    } else {
        contentDate.textContent = "Days";
    }
    if(displayHour == 0 || displayHour == 1) {
        contentHour.textContent = "Hour";
    } else {
        contentHour.textContent = "Hours";
    }
    if(displayMin == 0 || displayMin == 1) {
        contentMin.textContent = "Min";
    } else {
        contentMin.textContent = "Mins";
    }
    if(displaySec == 0 || displaySec == 1) {
        contentSec.textContent = "Sec";
    } else {
        contentSec.textContent = "Secs";
    }
};

countDown();

setInterval(countDown, 1000);