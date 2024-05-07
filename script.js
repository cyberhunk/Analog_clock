let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
     let date =new Date();

     let hh = date.getHours();
     let mm = date.getMinutes();
     let ss = date.getSeconds();

     let hRotation = 30*hh + mm/2;
     let mRotation = 6*mm;
     let sRotation = 6*ss;

     hr.style.transform = `rotate(${hRotation}deg)`;
     min.style.transform = `rotate(${mRotation}deg)`;
     sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime, 1000);

// --------------i copied this code from chatgpt---------------------


function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Pad single digit numbers with leading zero
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();