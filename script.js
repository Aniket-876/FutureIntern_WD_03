const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertCToFButton = document.getElementById('convert-c-to-f');
const convertFToCButton = document.getElementById('convert-f-to-c');
const resultCToFElement = document.getElementById('result-c-to-f');
const resultFToCElement = document.getElementById('result-f-to-c');

convertCToFButton.addEventListener('click', () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    resultCToFElement.textContent = ` ${fahrenheitValue.toFixed(2)} °F`;
});

convertFToCButton.addEventListener('click', () => {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    resultFToCElement.textContent = ` ${celsiusValue.toFixed(2)} °C`;
});