function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const scale = document.getElementById('scale').value;
    let result;
    let formula;

    if (scale === 'CtoF') {
        result = (temperature * 9/5) + 32;
        formula = `Rumus: (Celcius * 9/5) + 32 = ${result.toFixed(2)} °F`;
    } else {
        result = (temperature - 32) * 5/9;
        formula = `Rumus: (Fahrenheit - 32) * 5/9 = ${result.toFixed(2)} °C`;
    }

    document.getElementById('result').textContent = `Hasil: ${result.toFixed(2)}`;
    document.getElementById('formula').textContent = formula;
}