//exercício de transformação de string para number
let number1 = prompt("digite um numero:");
let number2 = prompt("Digite outro numero");


number1 = parseFloat(number1); //analisa um argumento string, e retorna um numero de ponto flutuante.
number2 = parseFloat(number2);


alert(` O resultado da adição foi de ${number1 + number2}`);

//prompt = caixa de texto na pagina
// alert = uma mensagem de alerta na pagina
//confirm = uma mensagem que retorna uma variavel do tipo boolean