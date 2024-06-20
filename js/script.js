/* Ini Javascript */
function convertTemp(){
    var inputTemp= parseFloat(document.getElementById(inputTemp).value);
    var Fahrenheit= (inputTemp *9/5)+32;
    var resultFahrenheit= document.getElementById(resultFahrenheit);
    resultFahrenheit.innerHTML= '${fahrenheit.toFixe(2)}'
    var resultCalculate= document.getElementById('resultCalculate');
    resultCalculate.innerHTML= 'Fahrenheit:(${inputTempt.toFixed(2)&degC *9/5)+32= ${fahrenheit.toFixed(2)}&degF';
}

function reset (){
    document.getElementById('inputTemp').value= '';
    document.getElementById('resultFahrenheit').innerHTML= '';
    document.getElementById('resultCalculate').innerHTML= '';
}

function reverse(){
    var resultCalculate= document.getElementById('resultCalculate');
    var inResult= resultCalculate.innerHTML;

    if (inResult.includes(Fahrenheit)) {
        var celcious= parseFloat(document.getElementById('inputTemp').value)
        var Fahrenheit= parseFloat(document.getElementById('resultFahrenheit').value);
        resultCalculate.innerHTML  
    }
    celcious
    ('${Fahrenheit.toFixed(2)})&degF-32*5/9'= $(celcious.toFixed(2))&degC;

}
