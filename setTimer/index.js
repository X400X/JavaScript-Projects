// setTimeout() function in JavaScript that allows you to schedule
//the execution of a function after an amount of time (milliseconds) 
//Times are approximate (varies based on the workload of the JavaScript runtime env.)

//setTimeout(callback, delay);


let timeId;




function startTime () {
    timeId = setTimeout(() => window.alert("Hello"), 1000)
    console.log("Start")
}


function clearTime () {
    clearTimeout(timeId);
    console.log("Clear")
}