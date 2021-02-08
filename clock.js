{/* <div class="wrap">
<div class="clock">
    <div class="clock-inner">
        <div class="clock-center"></div>
        <div class="hand second"></div>
        <div class="hand minute"></div>
        <div class="hand hour"></div>
    </div>
</div>
</div> */}

const hand_hr = document.querySelector('.hand.hour');
const hand_min = document.querySelector('.hand.minute');
const hand_sec = document.querySelector('.hand.second');


function tick () {
    const d = new Date();
    // seconds
    let seconds = d.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    hand_sec.style.transform = `translateY(-50%) rotate(${secondsDegrees}deg)`;


    // minutes

    let minutes = d.getMinutes();
    const minutesDegrees = ((minutes/60)*360) + ((seconds/60)*6) + 90;
    hand_min.style.transform = `translateY(-50%) rotate(${minutesDegrees}deg)`;

    // hours 

    let hours = d.getHours();
    const hoursDegrees = ((hours/12)*360) + ((minutes/60)*30) + 90;
    hand_hr.style.transform = `translateY(-50%) rotate(${hoursDegrees}deg)`;
}



tick();
setInterval(tick, 1000);



