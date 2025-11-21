const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter seconds to count down: ', input => {
    let seconds = parseInt(input, 10);

    if (isNaN(seconds) || seconds <= 0) {
        console.log("Please enter a positive number.");
        readline.close();
        process.exit();
    }

    let timer;

    function stopCountdown() {
        clearInterval(timer);
        console.log("Countdown stopped!");
        readline.close();
        process.exit();
    }

    process.stdin.on('data', function (data) {
        if (data.toString().trim().toLowerCase() === 'x') {
            stopCountdown();
        }
    });

    timer = setInterval(function() {
        if (seconds > 0) {
            console.log("Time Remaining:", seconds);
            seconds--;
        } else {
            console.log("Countdown Complete");
            clearInterval(timer);
            readline.close();
            process.exit();
        }
    }, 1000);
});