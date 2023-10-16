function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    var imc = peso / (altura * altura);
    var resultadoElement = document.getElementById("resultado");
    var imcElement = document.getElementById("imc");

    imcElement.textContent = imc.toFixed(2);
    resultadoElement.style.display = "block";
}
