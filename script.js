const result = document.getElementById("result");

function addNumber(number) {
    result.innerText += number;
}

function clearResult() {
    result.innerText = null;
}

function calc() {
    try {
        const expression = result.innerText;
        const resultValue = eval(expression);
        result.innerText = resultValue;
    } catch (error) {
        result.innerText = "Erro";
    }
}