// formas de fazer uma string
let forma1 = "olá mundo";
let forma2 = 'ola mundo';
let forma3 = `ola mundo`;
let forma4 = 'ola "mundo"';

console.log(forma1,forma2,forma3,forma4);

let umaString = 'João Victor, que cara bom';
console.log(umaString[2]);  //utilizando o colchetes, posso selecionar apenas o indice que eu desejar
console.log(umaString.charAt(1)); // utilizando o .charAt posso localizar a posição do indicie, que se inicia no 0
console.log(umaString.indexOf('bom')); // o .indexof mostra em que posição do indice, nesse caso na posição 0
console.log(umaString.lastIndexOf ('a')) // o lastindexof mostra a ultima posição do indice selecionado
console.log(umaString.search(/ã/)); // retorna em qual posição está o que você buscou e aceita expressões regulares
console.log(umaString.replace('bom' , 'cool')); // substitui uma string por outra sem necessariamente alterar a variavel
console.log(umaString.length); // conta quantos indicies a string possui, somando com letras, espaços e sinais de pontuação
console.log(umaString.toUpperCase()); // deixa toda a string em maiusculo
console.log(umaString.toLowerCase()); // deixa toda a string em minisculo


