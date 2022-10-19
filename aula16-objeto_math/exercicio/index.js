let numero = prompt('digite um numero:')
numero = parseFloat(numero)
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> a raiz quadrada é ${numero ** (1/2)}</p>`;

