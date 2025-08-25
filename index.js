//-------define the element------------
let originUnit = document.getElementById("origin");
let destinationUnit = document.getElementById("destination");
let inputNum = document.getElementById("input-Wrapper");
let convertBtn = document.getElementById("convert");
let resetBtn = document.getElementById("reset");
let result = document.getElementById("result");

//---------define convert & reset Func--------------

function convFunc() {
    if (inputNum.value == "") {
        result.innerHTML = "No Number Entered!";
        result.style.color = "#a71d2a";
    }


    else {

        if (originUnit.value === "Celsius" && destinationUnit.value === "Celsius") { //ºC => ºC
            result.innerHTML = inputNum.value + " ºC  =  " + inputNum.value + " ºC"
            result.classList.add("after");
        }
        else if (originUnit.value === "Celsius" && destinationUnit.value === "fahrenheit") { //ºC => ºF
            let resultValue = (inputNum.value * 1.8) + 32;
            result.innerHTML = inputNum.value + " ºC  =  " + resultValue + "ºF";
        }
        else if (originUnit.value === "Celsius" && destinationUnit.value === "kelvin") { //ºC => ºK
            let resultValue = +inputNum.value + 273.15;
            result.innerHTML = inputNum.value + " ºC  =  " + resultValue + "ºK";
        }
        else if (originUnit.value === "fahrenheit" && destinationUnit.value === "Celsius") { //ºF => ºC
            let resultValue = (+inputNum.value - 32) / 1.8;
            result.innerHTML = inputNum.value + " ºF  =  " + resultValue.toFixed(2) + "ºC";
        }
        else if (originUnit.value === "fahrenheit" && destinationUnit.value === "fahrenheit") { //ºF => ºF
            result.innerHTML = inputNum.value + " ºF  =  " + inputNum.value + "ºF";
        }
        else if (originUnit.value === "fahrenheit" && destinationUnit.value === "kelvin") { //ºF => ºK
            result.innerHTML = inputNum.value + " ºF  =  " + inputNum.value + "ºF";
        }
        else if (originUnit.value === "kelvin" && destinationUnit.value === "Celsius") { //ºK => ºC
            let resultValue = +inputNum.value - 273.15;
            result.innerHTML = inputNum.value + " ºK  =  " + resultValue + "ºC";
        }
        else if (originUnit.value === "kelvin" && destinationUnit.value === "fahrenheit") { //ºK => ºF
            let resultValue = (inputNum.value * 1.8) - 459.67;
            result.innerHTML = inputNum.value + " ºK  =  " + resultValue + "ºF";
        }
        else if (originUnit.value === "kelvin" && destinationUnit.value === "kelvin") { //ºK => ºK
            result.innerHTML = inputNum.value + " ºK  =  " + inputNum.value + "ºK";
        }

    }
}

function resFunc() {
    result.innerHTML = "";
    inputNum.value = "";
}


//-------add event to button's-------------

convertBtn.addEventListener('click', convFunc);
resetBtn.addEventListener('click', resFunc);