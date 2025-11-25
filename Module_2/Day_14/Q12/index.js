//1
function timer(duration,onComplete) {
    setTimeout(function (){
        onComplete(`timer of ${duration} ms finished`);
    },duration)
}
//2
timer(2000,function(message)
{
    console.log(message);
});