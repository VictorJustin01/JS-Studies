const nome = 'João Victor';
const sobrenome = 'Alexandre';
const idade = 18;
const peso = 68 ;
const alturaEmMetro = 1.67;
let imc = peso/(alturaEmMetro*alturaEmMetro);
let anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem',idade, 'anos, pesa',peso, 'kg');
console.log('tem', alturaEmMetro,'metros de altura e seu imc é de', imc );
console.log(nome, 'nasceu em', anoNascimento);
