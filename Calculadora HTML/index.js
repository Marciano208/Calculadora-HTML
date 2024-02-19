const num1 = document.getElementById("num1")
const ope = document.getElementById("ope")
const num2 = document.getElementById("num2")
const result= document.getElementById("resultado")

function calcular() {
    const operador = ope.value;
    const numero1 = parseFloat(num1.value);
    const numero2 = parseFloat(num2.value);

    if ((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(numero1) && !isNaN(numero2)) {
        let resultado;
        switch (operador) {
            case "+":
                resultado = numero1 + numero2
                break;
            case "-":
                resultado = numero1 - numero2
                break;
            case "*":
                resultado = numero1 * numero2
                break;
            case "/":
                resultado = numero1 / numero2
                break;
        }
        result.innerText = "Resultado: " + resultado
    } else {
        resultado.innerText = "Calculo Imposible"
    }
}