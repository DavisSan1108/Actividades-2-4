function calcularMCD(a, b) {
    if (b === 0) {
        return a;
    }
    return calcularMCD(b, a % b);
}

function manejarCalculoMCD() {
    const num1 = parseInt(document.getElementById('numero1').value);
    const num2 = parseInt(document.getElementById('numero2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = 'Por favor, introduce dos números enteros válidos.';
        return;
    }

    const mcd = calcularMCD(num1, num2);
    document.getElementById('resultado').innerText = `El MCD de ${num1} y ${num2} es ${mcd}`;
}
