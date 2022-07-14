let sec=00
let min=00
let hr=00
let interval = null


function digits(digit) {
    if(digit<10) {
        return('0' + digit)
    }
    else {
            return(digit)
        }
    
}

function start() {
    if (interval) {
        return
    };

    interval = setInterval(stopwatch, 1000);
    stopwatch()
};

function pause() {
    clearInterval(interval);
    interval= null;
}

function redefined() {
    pause()
    sec=00;
    min=00;
    hr=00;
    document.getElementById('stopwatch').innerHTML= digits(hr)+':'+digits(min)+':'+digits(sec);
}

function stopwatch() {
    sec++
    if(sec==60) {
        min++
        sec=0
        if(min==60) {
            hr++
            min=0
            sec=0
        };
    };

    document.getElementById('stopwatch').innerHTML= digits(hr)+':'+digits(min)+':'+digits(sec)
};