function calcularFactorial() {
    const numero = parseInt(document.getElementById('numero').value);
    
    if (isNaN(numero) || numero < 0) {
        alert('Por favor, introduce un número mayor o igual a 0.');
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById('resultado').innerText = `El factorial de ${numero} es ${factorial}`;
}
