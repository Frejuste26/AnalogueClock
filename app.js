let clock = document.getElementById('clock');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Calculate the angles for each needle
    let hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    let minuteDeg = minutes * 6 + (seconds / 60) * 6;
    let secondDeg = seconds * 6;

    // Update the angles of each needle
    hour.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minute.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    second.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(
    updateTime,
    1000 // Update the clock every second
);

// Update the time on page load
 updateTime();
