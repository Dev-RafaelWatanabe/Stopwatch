var sec=00
var min=00
var hr=00
var time


function digits(digit) {
    if(digit<10) {
        return('0' + digit)
    }
    else {
            return(digit)
        }
    
}

function start() {
    stopwatch()
    time = setInterval(stopwatch, 1000)
}

function pause() {
    clearInterval(time);
}

function redefined() {
    clearInterval(time);
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