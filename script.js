let currentResult = '';

function appendToResult(value) {
    currentResult += value;
    updateResultDisplay();
}

function clearResult() {
    currentResult = '';
    updateResultDisplay();
}

function calculateResult() {
    try {
        const result = eval(currentResult);
        currentResult = result.toString();
        updateResultDisplay();
    } catch (error) {
        currentResult = 'Error';
        updateResultDisplay();
    }
}

function updateResultDisplay() {
    const resultDisplay = document.getElementById('result');
    resultDisplay.value = currentResult;
}
