// ---------------------------------------------------------------------------------------- //

function validate(evt) {
    var theEvent = evt || window.event;

    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

// ---------------------------------------------------------------------------------------- //

function lbsToKgs(lbs){
    return Math.round((lbs/2.20462)*100)/100;
}

function kgsToLbs(kgs){
    return Math.round((kgs*2.20462)*100)/100;
}

// ---------------------------------------------------------------------------------------- //


let inputLBS = document.getElementById("lbs-input");
let inputKGS = document.getElementById("kgs-input");

inputLBS.addEventListener("input", () => {
    inputKGS.innerHTML = 300;
    console.log(Math.random);
    inputKGS.value = lbsToKgs(inputLBS.value);
});

inputKGS.addEventListener("input", () => {
    inputLBS.innerHTML = 300;
    console.log(Math.random);
    inputLBS.value = kgsToLbs(inputKGS.value);
});