const currentDayOfWeek = document.querySelector("[data-testid=currentDayOfTheWeek]");
const currentUTCTime = document.querySelector("[data-testid=currentUTCTime]");

let currentTime = new Date();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[currentTime.getDay()];

let hours = currentTime.getUTCHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
const milli = Date.now();


currentDayOfWeek.textContent =`${dayOfWeek}`;
// currentUTCTime.textContent =${hours}:${minutes}:${seconds} ${ampm};
currentUTCTime.textContent = `${milli}`; 
