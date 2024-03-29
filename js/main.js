const countdown = document.querySelector("body > section > div > div.countdown");

// Set Launch Date To 1 Mar 2021 at 1300
const launchDate = new Date('Apr 10, 2023 13:00:00').getTime();

//Update every second
const intvl = setInterval(() => {
    //Get todays date and time in milliseconds
    const now = new Date().getTime();
// 
    //Get distance from now to the launch date
    const distance = launchDate - now;

    //Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Display result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    //If launch date passed
    if (distance < 0) {
        //Stop Countdown
        clearInterval(intvl);
        //Style and output text
        countdown.style.color = '#17a2b8';
        // countdown.innerHTML = 'Launched!';
    }

}, 1000);
