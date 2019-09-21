var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
let ordList     = document.getElementById('splits');


function printTime() {
   printSeconds()
   printMinutes()
   printMilliseconds()
}
function printMinutes() {

    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];


}

function printSeconds() {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];


}

function printMilliseconds() {
    milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[0];
    milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[1];

}

function printSplit() {
    let splitLi=document.createElement("li")
    splitLi.innerHTML= chronometer.twoDigitsNumber(chronometer.getMinutes())+":"+chronometer.twoDigitsNumber(chronometer.getSeconds())+":"+chronometer.twoDigitsNumber(chronometer.getMiliseconds())
    document.querySelector('#splits').appendChild(splitLi);
}

function clearSplits() {
    document.querySelector('#splits').innerHTML=""

}

function setStopBtn() {
    btnLeft.innerHTML= "STOP"
    btnLeft.setAttribute("class", "btn stop")
    
}

function setSplitBtn() {
    btnRight.innerHTML= "SPLIT"
    btnRight.setAttribute("class", "btn split")

}

function setStartBtn() {
    btnLeft.innerHTML= "START"
    btnLeft.setAttribute("class", "btn start")
}

function setResetBtn() {
    btnRight.innerHTML= "RESET"
    btnRight.setAttribute("class", "btn reset")
    
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if (btnLeft.getAttribute("class") === 'btn start') {
        setStopBtn()
        setSplitBtn()
        chronometer.startClick()
    
     } else if((btnLeft.getAttribute("class") === 'btn stop')) {
        setStartBtn()
        setResetBtn()
        chronometer.stopClick()
     }
    


});

// Reset/Split Button

btnRight.addEventListener('click', function () {

    if (btnRight.getAttribute("class") === 'btn reset') {
        setResetBtn()
        clearSplits()
        chronometer.resetClick()
        
        
    
     } else if(btnRight.getAttribute("class") === 'btn split') {
        chronometer.splitClick()
       //console.log(printTime())
      
    
     }

});
