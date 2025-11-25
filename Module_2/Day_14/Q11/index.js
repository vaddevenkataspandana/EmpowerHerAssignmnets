//1
function displayMessage(name){
    console.log(`Hello, ${name}!`);
}

//2
function getUserInput(callback){
    setTimeout(function() {
        const username = "Alice";
        callback(username);

    },1000);
}
getUserInput(displayMessage);