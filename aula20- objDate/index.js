// const umDia = 60 * 60 * 24 * 1000; 
// const tresHoras = 60 * 60 * 3 * 1000;
//const data = new Date( '2019-01-20 14:25'); dataString // função construturo e sempre inica com new e letra maiuscula
//const data = new Date(2004, 0, 24, 3 ); valor
/*
const data = new Date ();

console.log('dia:', data.getDate());
console.log('mes:', data.getMonth() + 1);
console.log('ano:', data.getFullYear());
console.log('hora:', data.getHours());
console.log('minuto:', data.getMinutes());
console.log('dia da semana:', data.getDay() +1);
console.log(data.toString()); */
function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
const dia = zeroEsquerda(data.getDate());
const mes = zeroEsquerda(data.getMonth() + 1);
const ano = zeroEsquerda(data.getFullYear());
const hora = zeroEsquerda(data.getHours());
const minuto = zeroEsquerda(data.getMinutes());
const segundo = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}/${hora}:${minuto}:${segundo}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log("Data de agora");
console.log(dataBrasil);