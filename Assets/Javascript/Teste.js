var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    if(currentNumber >0){
        document.getElementById("currentNumber").style.color="#00ff11";
    }
    if(currentNumber ==0){
        document.getElementById("currentNumber").style.color="#000000";
    }
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    if(currentNumber <0){
        document.getElementById("currentNumber").style.color="#ff0000";
    }
    if(currentNumber ==0){
        document.getElementById("currentNumber").style.color="#000000";
    }
    currentNumberWrapper.innerHTML = currentNumber;
}