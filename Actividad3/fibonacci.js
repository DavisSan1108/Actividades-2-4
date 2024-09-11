function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calcularFibonacci() {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado').innerText = 'Por favor, ingresa un número mayor o igual a 0.';
        return;
    }

    const resultado = fibonacci(numero);
    document.getElementById('resultado').innerText = `El número de Fibonacci en la posición ${numero} es ${resultado}`;
}
