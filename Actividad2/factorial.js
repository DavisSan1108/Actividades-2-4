function calcularFactorial() {
    const numero = parseInt(document.getElementById('numero').value);
    
    if (isNaN(numero) || numero < 0) {
        alert('Por favor, introduce un número mayor o igual a 0.');
        return;
    }

    const factorial = factorialRecursivo(numero);
    document.getElementById('resultado').innerText = `El factorial de ${numero} es ${factorial}`;
}

function factorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursivo(n - 1);
}

