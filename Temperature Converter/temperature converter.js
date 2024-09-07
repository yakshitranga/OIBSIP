const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertToSelect = document.getElementById('convert-to');
const convertBtn = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');

convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    const convertTo = convertToSelect.value;

    if (isNaN(temperature)) {
        resultElement.textContent = 'Invalid Temperature Value';
        return;
    }

    let convertedTemperature;

    switch (unit) {
        case 'celsius':
            switch (convertTo) {
                case 'fahrenheit':
                    convertedTemperature = temperature * 9 / 5 + 32;
                    break;
                case 'kelvin':
                    convertedTemperature = temperature + 273.15;
                    break;
                default:
                    convertedTemperature = temperature;
            }
            break;
        case 'fahrenheit':
            switch (convertTo) {
                case 'celsius':
                    convertedTemperature = (temperature - 32) * 5 / 9;
                    break;
                case 'kelvin':
                    convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
                    break;
                default:
                    convertedTemperature = temperature;
            }
            break;
        case 'kelvin':
            switch (convertTo) {
                case 'celsius':
                    convertedTemperature = temperature - 273.15;
                    break;
                case 'fahrenheit':
                    convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
                    break;
                default:
                    convertedTemperature = temperature;
            }
            break;
    }

    resultElement.textContent = `${convertedTemperature.toFixed(2)} ${convertTo}`;
});