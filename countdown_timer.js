function countDown(time){
    let timer = setInterval(function(){
        time--;
        if (time <1){
            clearInterval(timer);
            console.log("Done.")
        }
        else{
            console.log(time);
        }
    }, 1000);
}

function randomGame(){
    let tries=0; // count attempts
    let r;  // random number to be redefined each time
    let timer = setInterval(function(){
        tries++; 
        r = Math.random();
        if (r> .75){
            clearInterval(timer);
            console.log(`Attempts to get higher than 0.75: ${tries}.`);
        }
    }, 1000);
}